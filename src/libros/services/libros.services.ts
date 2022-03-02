import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libros } from './../models/libros.models';


const httpOptions = {
    headers: new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
@Injectable({
    providedIn: 'root'
})
export class LibrosService {
    public url: string;

    public listGroupsId: Array<number> = [];

    constructor(private http: HttpClient) {
        this.url = "https://apiweblibros.azurewebsites.net";
    }

    get() {
        return this.http.get<any[]>(this.url+"/api/libros");
    }
    
    getById(Id: number) {
        return this.http.get<any>(this.url+`/api/libros/${Id}`);
    }
}