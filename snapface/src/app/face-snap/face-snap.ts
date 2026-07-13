import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  // sanp button
  userHasSnapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void{
    this.title = "le logo de SachaSmart Enterprise";
    this.description = "Tout part d'une idee mais tout commence avec Dieu";
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  
    // snap button
    this.userHasSnapped = false;
    this.snapButtonText = "oH! Snap."
  }

  onSnap(): void{
    if(this.userHasSnapped){
      this.snaps--;
      this.userHasSnapped = false;
      this.snapButtonText = "oH! Snap."
    }
    else{
      this.snaps++;
      this.userHasSnapped = true;
      this.snapButtonText = "unSnap";
    }
  }
}
