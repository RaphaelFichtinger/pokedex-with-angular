import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeserviceService } from '../pokeservice.service'; // Annahme: Hier wird der Service importiert, der die Karteninformationen bereitstellt

@Component({
  selector: 'app-card-details',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardIndex: number | undefined;
  pokemon: any; // Annahme: Hier werden die Karteninformationen gespeichert

  constructor(private route: ActivatedRoute, private pokeservice: PokeserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cardIndex = +params['index'];
      this.pokemon = this.pokeservice.PokemonArray[this.cardIndex]; // Annahme: Hier werden die Karteninformationen abgerufen
    });
  }
}