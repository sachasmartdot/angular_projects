import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  // sanp button
  userHasSnapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void{
    // snap button
    this.userHasSnapped = false;
    this.snapButtonText = "oH! Snap."
  }

  onSnap(): void{
    if(this.userHasSnapped){
      this.faceSnap.removeSnap();
      this.userHasSnapped = false;
      this.snapButtonText = "oH! Snap."
    }
    else{
      this.faceSnap.addSnap();
      this.userHasSnapped = true;
      this.snapButtonText = "unSnap";
    }
  }
}
