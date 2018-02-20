import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/observable/throw';
//  import { Http } from '@angular/http'; //not needed anymore

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  
  constructor(private service:PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      response => {
      this.posts = response.json();
      //console.log(this.posts);
    });
  }

  createPost(input: HTMLInputElement) {

    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
        post['id'] = response.json().id;
        //this.posts.splice(0,0,post);
        this.posts.unshift(post);
        console.log(response.json());
      }, 
      (error : AppError) => {
        if(error instanceof BadInput){
          //  this.form.setErrors(error.json()) //  This is how we can add the custom errors on form.
           //  this.form.setErrors(error.originalError) //  This is how we can add the custom errors on form.
        }else{
          throw error;
        }
      });
  };


  updatePost(post) {
    /**
     * put and patch methods are used to update the data.
     * Put method will take the whole object and update the data.
     * Patch method will only take the specific object property or few properties.
     * 
     *      this.http.put(this.url, JSON.stringify(post))
        .subscribe(response =>{
    
        }); */

    this.service.updatePost(post)
      .subscribe(
        response => {
        console.log(response);
      });
    }; 


    
    deletePost(post){
     this.service.deletePost(345)
      .subscribe(
        response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log("post at index " +index + " is deleted.");
      },
      (error : AppError) => {
        if(error instanceof NotFoundError){
          alert('This post already has been deleted');
        }else{
          throw error;
        } 
      }
    )};

  

}
