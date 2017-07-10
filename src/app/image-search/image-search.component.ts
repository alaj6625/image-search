import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  constructor(private _imageService : ImageService) { }

  ngOnInit() {
    console.log('Init for image-search');
  }

}
