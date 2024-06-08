import { Injectable } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';
import { MainClient } from 'pokenode-ts';
import { Pokemon } from './interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  pokemonNames:string[] = [];
  abilities:string = "";
  currentNumberLoaded:number = 10;

  PokemonArray:Pokemon[] = [];
  selectedCardIndex: number = -1; // Startwert: keine Karte ausgewählt

  constructor(public router: Router) { 
    this.loadInitialPokemons();
  }

  async loadInitialPokemons() {
    await this.getPokemons();
    this.getPokemonAbilities();
    console.log(this.PokemonArray);
    
  }

  async getPokemons() {
    const api = new PokemonClient();
    try {
      const data = await api.listPokemons(0, this.currentNumberLoaded); // hole die ersten 10 Pokémon
      this.pokemonNames = data.results.map(pokemon => pokemon.name); // speichere die Namen im Array
    } catch (error) {
      console.error(error);
    }
  }


  async getPokemonAbilities() {
    const api = new MainClient();
    try {
      for (const name of this.pokemonNames) {
        const pokemon = await api.pokemon.getPokemonByName(name);
        const abilities = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name);
        console.log(`Abilities for ${pokemon.name}:`, abilities);
        this.PokemonArray.push(this.createPokemonObject(name, abilities));
      }
    } catch (error) {
      console.error(error);
    }
  }


  setSelectedCard(index: number) {
    this.selectedCardIndex = index;
  }



  createPokemonObject(name: string, abilities: string[]): Pokemon {
    return {
      name: name,
      abilities: abilities,
    };
  }

  openCardDetails(i: number) {
    this.setSelectedCard(i);
    this.router.navigate(['/card', i]);
  }
}







