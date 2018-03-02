import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import {AppConstants} from '../constants';

import {ModelService} from '../model-service/model.service';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  public apiUrl = AppConstants.API_ENDPOINT;

  constructor(
    public http: Http,
    private modelService: ModelService,
  ) {

  }

  getBlogInfo(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.http.get( this.apiUrl + '/' )
        .subscribe( (response: any) => {
          console.log(response);
          let getBlogInfo = JSON.parse(response._body);
          resolve(getBlogInfo);
        });
    });
  }

  getMenuItems(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.http.get( this.apiUrl + '/angular-spa/v1/menus/primary-menu' )
        .subscribe( (response: any) => {
          console.log("Menu Items: ", response);
          let menuItems = JSON.parse(response._body);
          resolve(menuItems);
        });
    });
  }

  getPosts(): Promise<any> {

    return new Promise( (resolve, reject) => {

      this.http.get( this.apiUrl + '/wp/v2/posts' )
        .subscribe( (response: any) => {
          console.log(response);

          let data = JSON.parse(response._body);
          // console.log(data);
          let posts = data.map( (post: any) => this.modelService.toPost(post) );

          resolve(posts);
        });

    })
  }

}
