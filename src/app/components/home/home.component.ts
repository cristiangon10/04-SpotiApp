import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading:boolean = true;
  errorMensaje:boolean;
  errorConsola:string;

  constructor( private spotify:SpotifyService) 
  {
    this.loading = true;
    this.errorMensaje = false;

    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
      
    }, (errorConsola) => {

      this.loading = false;
      this.errorMensaje = true;
      this.errorConsola = errorConsola.error.error.message;
      console.log(errorConsola);
      
    });
  }
  
}
