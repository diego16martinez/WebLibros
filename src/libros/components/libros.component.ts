import { Component, OnInit } from "@angular/core";
import { Libros } from "../models/libros.models";
import { LibrosService } from "../services/libros.services";

@Component({
    selector: 'libros-root',
    templateUrl: './libros.component.html'
})
export class LibrosComponent implements OnInit {
    
    listLibros: Array<Libros> = [];
    primerLibro: string = 'no cargo';
    primerLibro2: string = 'no cargo';

    constructor(private librosService: LibrosService) {
        
    }
    ngOnInit(): void {
        this.librosService.get().subscribe(items => {
            items.forEach(item => {
                let libro: Libros = new Libros();
                libro.Id = item.id;
                libro.Titulo =  item.titulo;
                libro.Autor =  item.autor;
                this.listLibros.push(libro);

                console.log(typeof(libro.Titulo));
            });
        });
    }

    onClic() {
        console.log(this.listLibros);
    }
}