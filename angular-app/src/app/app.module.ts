import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

import { DataService } from './services/data-service/data.service';
import { ModelService } from './services/model-service/model.service';
import { PostsComponent } from './components/posts/posts.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  // { path: '**', component: PostsComponent },
  { path: '', component: PostsComponent },
  { path: 'page', component: PageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    PostsComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // RouterModule.forRoot(routes),
  ],
  // exports: [RouterModule],
  providers: [
    DataService,
    ModelService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
