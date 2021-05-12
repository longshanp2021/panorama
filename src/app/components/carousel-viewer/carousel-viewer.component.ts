import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPanoramaImg } from 'src/app/models/panorama-img';

@Component({
  selector: 'app-carousel-viewer',
  templateUrl: './carousel-viewer.component.html',
  styleUrls: ['./carousel-viewer.component.scss']
})
export class CarouselViewerComponent {

  @Input()
  public images: Array<IPanoramaImg>;
  @Output()
  public onImageChange = new EventEmitter<string>();
  @Output()
  public onAddImage = new EventEmitter<void>();

  public changeImage(id: string): void {
    this.onImageChange.emit(id);
  }

  public addImage(): void {
    this.onAddImage.emit();
  }

}
