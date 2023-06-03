export class Comment{
    public id: number;
    public autore: string;
    public testo: string;
    public idpost: number;
    

    constructor(id: number, autore: string, testo: string, idpost:number) {
      this.id = id;
      this.autore = autore;
      this.testo = testo;
      this.idpost = idpost;
    }
    
}

export class Post{

    public id: number;
    public autore: string;
    public testo: string;
    public like: number;

    constructor(id: number, autore: string, testo: string, like:number) {
      this.id = id;
      this.autore = autore;
      this.testo = testo;
      this.like = like;
    }
} 