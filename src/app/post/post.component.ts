import { Component, Input } from '@angular/core';
import { Post } from '../models/postEcomm.model';
import { Comment } from '../models/postEcomm.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post : Post;
  @Input() comm : Comment[];
  show: boolean = false;
  
  constructor() {}

  addLike() {
    this.post.like += 1;
  }
 

  addCommento(autore: HTMLInputElement, testo: HTMLInputElement, idPost: number){
    if(autore.value !== '' && testo.value !== ''){
      const id = this.comm.length + 1;
      const commentoNuovo = new Comment(id, autore.value, testo.value, idPost);
      this.comm.push(commentoNuovo);
      autore.value = '';
      testo.value = '';
      
    }else if(autore.value === '' || testo.value === ''){
      alert("*ATTENZIONE, I CAMPI AUTORE E TESTO DEVONO ESSERE RIMPITI PER INSERIRE UN NUOVO COMMENTO");
      
    }
  }

  contaNumeroCommenti(): any {
    return this.comm.length;
  }

  visualCreaComment(): void {
    this.show = !this.show;
    this.show= true;
  }

}