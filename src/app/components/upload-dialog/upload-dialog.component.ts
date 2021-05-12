import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {

  @Output()
  public onClose = new EventEmitter();
  @Output()
  public onUploadImage = new EventEmitter();
  public files: any;
  public images: Array<string> = [];

  public close(): void {
    this.onClose.emit();
  }

  public onFilesChange(event): void {
    let files: Array<any> = event.target.files;
    for (let f of files) {
      this.readThis(f);
    }
  }

  public readThis(file: any): void {
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.images.push(myReader.result as any);
    }
    myReader.readAsDataURL(file);
  }

  public save(): void {
    this.onUploadImage.emit(this.images);
  }

}
