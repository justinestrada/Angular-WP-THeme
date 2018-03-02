import { Component } from '@angular/core';

import {DataService} from './services/data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  blogInfo: any;

  constructor( public dataService: DataService ) {

    this.dataService.getBlogInfo().then( (blogInfo) => {
      console.log(blogInfo);
      this.blogInfo = blogInfo;
    }).catch( () => {

    });
  }

}
