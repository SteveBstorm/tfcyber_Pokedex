import { Component } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Pokedex } from '../../models/pokedex.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  pokedex! : Pokedex
  firstURL : string = "https://pokeapi.co/api/v2/pokemon"
  constructor(private pokeService : PokeService){
    this.loadData(this.firstURL)
  }

  loadData(url : string) {
    this.pokeService.getPokedex(url).subscribe({
      next : (data : Pokedex) => this.pokedex = data
    })
  }

  previous(){
    this.loadData(this.pokedex.previous ?? "")
  }

  next() {
    this.loadData(this.pokedex.next ?? "")
  }

  selectedPokemon! : string
  selectPokemon(url : string){
    this.selectedPokemon = url
    console.log(this.selectedPokemon)
  }
}
