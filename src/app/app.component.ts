import { Component } from '@angular/core';
import { Comment } from './models/postEcomm.model';
import { Post } from './models/postEcomm.model';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AdamMess_Facebook';
  
  comment !: Comment[];
  

  // VARIBIALI PER POST
  dataPost : Post[] = [];
  oPost !: Observable<Post[]>;
  serviceURLPosts = 'https://my-json-server.typicode.com/PaoloCarugati/facebook/posts'
  
  //VARIABILI PER COMMENTI
  dataComm : Comment[] = [];
  oComment !: Observable<Comment[]>;
  serviceURLComments = 'https://my-json-server.typicode.com/PaoloCarugati/facebook/comments'

  constructor(public http: HttpClient) { 
  }
  
  ngOnInit() {
      this.oPost = this.http.get<Post[]>(this.serviceURLPosts);
      this.oPost.subscribe( d => {this.dataPost = d;});  

      this.oComment = this.http.get<Comment[]>(this.serviceURLComments);
      this.oComment.subscribe( d => {this.dataComm = d;});  
    }
   
  
  addPost(autore: HTMLInputElement, testo: HTMLInputElement): void{
      if (autore.value !== '' && testo.value !== ''){
        const id = this.dataPost.length + 1;
        const newPost = new Post(id, autore.value, testo.value, 0);
        this.dataPost.push(newPost);
         //ORDINARE I POST this.postsService.ordinaPost;
        autore.value = '';
        testo.value = '';
        
      }else if(autore.value === '' && testo.value === ''){
        alert("*ATTENZIONE, TUTTI I CAMPI DEVONO ESSERE RIMPITI PER INSERIRE UN NUOVO POST");
        
      
      }
      
  }

  postOrdinati(){
    const postOrdinati = this.dataPost.sort((a: Post, b: Post) => b.like - a.like);
    return postOrdinati;
    
  }
  CommSingoloPost(idPost:number): Comment[]{
    const commenti = this.dataComm.filter(c => c.idpost == idPost);
    return commenti;
  }

  addComment(comment: Comment): void {
    this.dataComm.push(comment);
  }
  
  
}