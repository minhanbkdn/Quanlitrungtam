import { Component, OnInit } from '@angular/core';
import { Group } from 'app/_models/group.model';
import { GroupService } from 'app/_services/group.service';

@Component({
  selector: 'app-hien-thi-group',
  templateUrl: './hien-thi-group.component.html',
  styleUrls: ['./hien-thi-group.component.scss']
})
export class HienThiGroupComponent implements OnInit {


  
  listGroup: Group[] = [];

  totalPage: number;

  condition = {
      KeySearch: '',
      CurrentPage: 1,
      PageSize: 10,
      TrangThai: ''
  };

  constructor(private groupService: GroupService) {
  }

  async ngOnInit() {
      this.getListGroup();
  }



  deleteGroup(id: number) {
      this.groupService.delete(id).subscribe(
          result => {
              if (result['IsSuccess'] === true) {
                  this.listGroup = this.listGroup.filter(item => item.Id !== id);
              } else {
                  alert('Xoá không thành công!');
              }
          },
          error => alert(error)
      )
  }

  getListGroup() {
    this.groupService.getListGroup(this.condition).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.listGroup = result['Data']['GroupList'];
          this.totalPage = result['Data']['Paging']['TotalPages'];
          this.condition = result['Data']['Condition'];
        }else{
          alert('Xoá không thành công');
        }
      },
      error => {
        alert(error);
      }
    )
  }

  setItemPerPage() {
      this.condition.CurrentPage = 1;
      this.getListGroup();
  }

  arrayOne(): any[] {
      return Array(this.totalPage);
  }

  changePage(page: number) {
      this.condition.CurrentPage = page;
      this.getListGroup();
  }

  previousPage() {
      this.condition.CurrentPage--;
      this.getListGroup();
  }

  nextPage() {
      this.condition.CurrentPage++;
      this.getListGroup();
  }  

}
