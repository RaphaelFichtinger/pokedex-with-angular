import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeserviceService } from '../pokeservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cardIndex!: number;
  pokemon: any; 

  
constructor(private route:ActivatedRoute, private pokeservice: PokeserviceService) { }
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cardIndex = +params['index'];
      this.pokemon = this.pokeservice.PokemonArray[this.cardIndex]; 
    });
  }
}