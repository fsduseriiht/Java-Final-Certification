import { Component } from '@angular/core';
import { UtilService } from './shared/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  subHeading = 'Add Task';

  constructor(private utilService: UtilService) { }

  clicked(event) {
    this.subHeading = event.target.text;
    this.utilService.setHeader(this.subHeading);
    
  }
}