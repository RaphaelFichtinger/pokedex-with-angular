import { Component } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';
import { PokeserviceService } from '../pokeservice.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
index: any;
i: any;



  
  constructor(public pokeservice: PokeserviceService, public router: Router) {   }

  

  
  openCardDetails(i: number) {
    this.pokeservice.setSelectedCard(i);
    this.router.navigate(['/card', i]);
  }










}
