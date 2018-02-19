import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { PostService } from './services/post.service';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ContactFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CoursesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
