import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) 
  { //Te entabla el servicio
    console.log('Servicio Spotify Listo');
  }

//Entabla el toquen con la variable headers- && - entaba los procesos con el url
  getQuery( query:string)
  {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAVl28WeSZqeekYsXqBed57uzmefCkxwaHr-FdAxP60_9foAVJfpuebM3CIMKZMO5OPrkZZkfzh9bSXKbY'
    });

    return this.http.get(url, { headers});
  }

  //retorna los ultimos albumes añadidos a Spotify 
  getNewReleases()
  {
    return this.getQuery('browse/new-releases').pipe( map(data => data['albums'].items));   
  }
  //Retorna y redirecciona el artista a la informacion detallada del mismo
  getArtistas(termino:string)
  {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`).pipe( map( data => data['artists'].items));     
  }

  
  getArtista(id:string)
  {
    return this.getQuery(`artists/${ id }`);
    // .pipe(map(data => data['artists'].items))
  }
  

  getTopTrack(id:string)
  {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map( data => data['tracks']));
  }
  
}

