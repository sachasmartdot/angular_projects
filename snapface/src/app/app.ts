import { Component, OnInit, signal } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  mySnap!: FaceSnap;
  my2Snap!: FaceSnap;
  my3Snap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap('manga', 
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', 
    'Tout part d\'une idee mais tout commence avec Dieu', 
    new Date(), 10);

    this.my2Snap = new FaceSnap('manga2', 
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', 
    'Tout part d\'une idee mais tout commence avec Dieu, oui', 
    new Date(), 11);

    this.my3Snap = new FaceSnap('manga3', 
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', 
    'Tout part d\'une idee mais tout commence avec Dieu, oui oui', 
    new Date(), 12);
  }
}
