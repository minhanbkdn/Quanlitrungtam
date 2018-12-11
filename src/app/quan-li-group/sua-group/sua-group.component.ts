import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroupService } from 'app/_services/group.service';
import { SharingService } from 'app/_services/sharing.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Group } from 'app/_models/group.model';

@Component({
  selector: 'app-sua-group',
  templateUrl: './sua-group.component.html',
  styleUrls: ['./sua-group.component.scss']
})
export class SuaGroupComponent implements OnInit {

  formEditGroup: FormGroup;
  groupInfo: Group;
  constructor(
    private groupService: GroupService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { 
  
  }

  ngOnInit() {
    // this.getGroupById();
    // await new Promise(r => setTimeout(r, 1500));
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log('userInfo: '+ JSON.stringify(this.groupInfo));
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.groupService.getById(id).subscribe(
      result => {
        this.groupInfo = result['Data'];
        // console.log("IN Fun: " + JSON.stringify(this.groupInfo));
        this.formEditGroup = this.fb.group({
          GroupName: [this.groupInfo.GroupName, Validators.required],
          MoTa: [this.groupInfo.MoTa, Validators.required],
          IsDefault: [this.groupInfo.IsDefault],
          IsSystem: [this.groupInfo.IsSystem],
          Id: [id]
        })
      },
      error => {
        alert(error);
      }
    )
  }

  onSubmit() {
    console.log(this.formEditGroup.value);
    this.groupService.edit(this.formEditGroup.value).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.sharingService.notifInfo("Sửa Group thành công");
          this.router.navigate(['/group']);
        } else {
          this.sharingService.notifError('Sửa Group thất bại');
        }
      }, error => {
        this.sharingService.notifError(error);
      }
    )
  }

  getGroupById() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.groupService.getById(id).subscribe(
      result => {
        this.groupInfo = result['Data'];
        console.log("IN Fun: " + JSON.stringify(this.groupInfo));
      },
      error => {
        alert(error);
      }
    )
  }


}
