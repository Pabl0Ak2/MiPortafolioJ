import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-page-cards',
  standalone: true,
  imports: [VideoPlayerComponent],
  templateUrl: './page-cards.component.html',
  styleUrl: './page-cards.component.css'
})
export class PageCardsComponent {

  redirectToGithub2() {
    window.location.href = 'https://warm-peony-59207d.netlify.app/';
  }

  redirectToGithub3() {
    window.location.href = 'https://drive.google.com/drive/folders/1JA_6XkALJyWrRiG2u0lCO6DT70c4cZGL?usp=sharing';
  }

  redirectToGithub8() {
    window.location.href = 'https://scintillating-peony-7a1ec0.netlify.app/';
  }

}