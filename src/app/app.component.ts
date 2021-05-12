import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPanoramaImg } from './models/panorama-img';

declare let PANOLENS: any;

const databaseName = 'panorama';

const panaromaStorageKey = 'panorama';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showDialog: boolean;
  @ViewChild('graphContainer', { static: true })
  public graphContainer: ElementRef;
  public images: Array<IPanoramaImg>;
  private viewer: any;
  private panorama: any;
  private request: any;
  private db: any;
  public constructor() {

    const cacheStr = localStorage.getItem(panaromaStorageKey);
    if (cacheStr) {
      this.images = JSON.parse(cacheStr);
    } else {
      this.images = [
        {
          id: '1',
          url: './assets/images/01.jpg'
        },
        {
          id: '2',
          url: './assets/images/02.jpg'
        }
      ];
    }
  }

  public ngOnInit(): void {
    // this.request = window.indexedDB.open(databaseName);
    // this.request.onupgradeneeded = function (event) {
    //   this.db = event.target.result;
    //   var objectStore = this.db.createObjectStore('images');
    // }
    // var objectStore = this.db.transaction('images').objectStore('images');
    // console.log(1,objectStore);
    
    this.viewer = new PANOLENS.Viewer({ container: this.graphContainer.nativeElement });
    this.onImageChange(this.images[0].id);
  }

  public onImageChange(id: string): void {
    let img = this.images.find(img => img.id === id);
    if (this.panorama) {
      this.viewer.remove(this.panorama);
    }
    this.panorama = new PANOLENS.ImagePanorama(img.url);
    this.viewer.add(this.panorama);
    this.viewer.setPanorama(this.panorama);
    // console.log('change:', img);
  }

  public onAddImage(): void {
    this.showDialog = true;
  }

  public onUploadImage(images: Array<string>): void {
    this.showDialog = false;
    images.forEach((str, index) => {
      this.images.push({
        id: `${Date.now().toString() + index}`,
        url: str
      });
    });
    // localStorage.removeItem(panaromaStorageKey);
    // let cache = JSON.stringify(this.images);
    // console.log(1,cache);

    // localStorage.setItem(panaromaStorageKey, cache);
  }

  public onClose(): void {
    this.showDialog = false;
  }
}
