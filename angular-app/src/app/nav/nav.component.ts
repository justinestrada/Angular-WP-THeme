import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() blogInfo: any;

  private title: string = 'Angular App';
  private menu_items: any;

  constructor( private dataService: DataService ) {
    this.dataService.getMenuItems().then( (response) => {
      this.menu_items = response;
    }).catch( (err) => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
