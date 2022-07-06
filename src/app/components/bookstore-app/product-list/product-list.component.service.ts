import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { book } from "./Model/Book";

@Injectable()

export class BookService{

    private url = "url"

    httpOptions= {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient){

    }

    getBook(){
        return this.http.get(this.url)
    }

}