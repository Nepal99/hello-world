import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
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
    .subscribe(response => {
      this.posts = response.json();
      //console.log(this.posts);
    }, error => {
      alert('An unexpected error occurred');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {

    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        //this.posts.splice(0,0,post);
        this.posts.unshift(post);
        console.log(response.json());
      }, 
      error => {
        alert('An unexpected error occurred during the post method');
        console.log(error);
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
      .subscribe(response => {
        console.log(response);
      },
    error => {
      alert('An unexpected error occurred during the update(put/patch]) method');
        console.log(error);
    });
    }; 

    deletePost(post){
     this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log("post at index " +index + " is deleted.");
      },
      error => {
        alert('An unexpected error occurred during the delete method');
        console.log(error);
      }
    )
    }

  

}
