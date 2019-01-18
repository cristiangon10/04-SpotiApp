import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string   {
    
    if( !images)
    {
      return 'assets/img/notImage.jpg';
    }
    else if(images.length > 0){
      return images[0].url;
    } else{
      return 'assets/img/notImage.jpg';
    } 
  }
}
