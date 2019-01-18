import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  cancionesTop:any[] = [];
  artista:any = {};
  loading:boolean;

  constructor( private route: ActivatedRoute,
               private spotify:SpotifyService) 
  {
    this.route.params.subscribe( params =>{ 

      this.getArtista( params['id']);
      this.getTopTracks( params['id']);

    });
  }

  getArtista(id:string)
  {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(artista =>{ 
    this.artista = artista;
    this.loading = false;
    });  
  }

  getTopTracks(id:string){
    this.loading = true;
    this.spotify.getTopTrack(id).subscribe(exitos =>{
    this.cancionesTop = exitos;
    console.log(this.cancionesTop);
    });
    this.loading = false;
  }
}
