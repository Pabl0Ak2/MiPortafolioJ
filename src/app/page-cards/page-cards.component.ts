import { Component } from '@angular/core';

@Component({
  selector: 'app-page-cards',
  standalone: true,
  imports: [],
  templateUrl: './page-cards.component.html',
  styleUrl: './page-cards.component.css'
})
export class PageCardsComponent {
  redirectToGithub() {
    window.location.href = 'https://github.com/Pabl0Ak2/FrontTest';
  }

  redirectToGithub2() {
    window.location.href = 'https://github.com/Pabl0Ak2/Reservar-Concreto-A17';
  }

  redirectToGithub3() {
    window.location.href = 'https://drive.google.com/drive/folders/1JA_6XkALJyWrRiG2u0lCO6DT70c4cZGL?usp=sharing';
  }

  redirectToGithub4() {
    window.location.href = 'https://github.com/Pabl0Ak2/Lista-de-Tareas';
  }

  redirectToGithub5() {
    window.location.href = 'https://github.com/Pabl0Ak2/Noticias';
  }

  redirectToGithub6() {
    window.location.href = 'https://github.com/Pabl0Ak2/Calculadora';
  }

  redirectToGithub7() {
    window.location.href = 'https://github.com/Pabl0Ak2/Admin-Presupuestos';
  }

}