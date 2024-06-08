import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component'; // Annahme: CardComponent ist die Komponente, die die Details einer Pokemon-Karte anzeigt
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'card/:index', component: CardComponent }
];