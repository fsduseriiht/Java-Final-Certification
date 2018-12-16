import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  @Input() searchValue: string = '';
  @Input() users: any;
  @Input() editedUserId: any;
  @Output() onDeleteUser = new EventEmitter<string>();

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.setHeader('Add User');
  }

  deleteUser(userId) {
    this.onDeleteUser.emit(userId);
  }

}
