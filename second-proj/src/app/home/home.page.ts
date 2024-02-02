import { Component, Renderer2, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showDescription = false;

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
}
