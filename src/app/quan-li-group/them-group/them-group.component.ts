import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharingService } from 'app/_services/sharing.service';
import { GroupService } from 'app/_services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-group',
  templateUrl: './them-group.component.html',
  styleUrls: ['./them-group.component.scss']
})
export class ThemGroupComponent implements OnInit {

  formAddGroup: FormGroup;

  constructor(
    private groupService: GroupService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formAddGroup = this.fb.group({
      GroupName: ['', Validators.required],
      MoTa: ['', Validators.required],
      IsDefault: [false],
      IsSystem: [false]
    })
  }

  onSubmit() {
    console.log(this.formAddGroup.value);
    this.groupService.add(this.formAddGroup.value).subscribe(
      result => {
        if(+result['Code'] === 200) {
          this.sharingService.notifInfo("Thêm Group thành công");
          this.router.navigate(['/group']);
        } else {
          this.sharingService.notifError('Thêm Group thất bại');
        }
      }, error => {
        this.sharingService.notifError(error);
      }
    )
  }

}
