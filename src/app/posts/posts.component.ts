import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
        //console.log(this.posts);
      })

  }

  createPost(input: HTMLInputElement) {

    let post = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        //this.posts.splice(0,0,post);
        this.posts.unshift(post);
        console.log(response.json());
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

    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
    }; 

    deletePost(post){
      this.http.delete(this.url + '/' +post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log("post at index " +index + " is deleted.");
      })
    }

  ngOnInit() {
  }

}
