import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageCardsComponent } from '../page-cards/page-cards.component';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    PageCardsComponent,
    VideoPlayerComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent {
  showTitle = false;
  showImage = false;
  isDarkMode: boolean = false;
  currentIndex = 0;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showTitle = true;
    }, 1000);
  }

  onHover(hovered: boolean) {
    this.showImage = hovered;
  } 

  images = [
    { src: 'assets/iconos/iconsof/angular.png', name: 'Angular' },
    { src: 'assets/iconos/iconsof/react.png', name: 'React' },
    { src: 'assets/iconos/iconsof/node.png', name: 'Node.js' },
    { src: 'assets/iconos/iconsof/java.png', name: 'Java' },
    { src: 'assets/iconos/iconsof/nest.png', name: 'NestJS' },
    { src: 'assets/iconos/iconsof/tailwind.png', name: 'TailwindCSS' },
    { src: 'assets/iconos/iconsof/bootstrap.png', name: 'Bootstrap' },
    { src: 'assets/iconos/iconsof/mysql.png', name: 'MySQL' },
    { src: 'assets/iconos/iconsof/postgresql.png', name: 'PostgreSQL' },
    { src: 'assets/iconos/iconsof/js.png', name: 'JavaScript' },
    { src: 'assets/iconos/iconsof/ts.png', name: 'TypeScript' },
    { src: 'assets/iconos/iconsof/css.png', name: 'CSS' },
    { src: 'assets/iconos/iconsof/html.png', name: 'HTML' },
  ];  

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  
}
