import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselViewerComponent } from './components/carousel-viewer/carousel-viewer.component';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselViewerComponent,
    UploadDialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
