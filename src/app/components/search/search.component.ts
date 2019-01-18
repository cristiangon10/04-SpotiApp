import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = []; 
  loading: boolean;

  constructor(private sporify:SpotifyService) { }

 

  buscar(termino:string)
  {
    this.loading = true;
    console.log(termino);
    this.sporify.getArtistas(termino).subscribe( (data:any) => 
      {
        this.artistas = data;
        this.loading = false;
      });
  }
}
