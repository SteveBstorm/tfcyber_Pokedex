import { Component, Input } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrl: './pokedetail.component.css'
})
export class PokedetailComponent {
  @Input() set url(value : string) {

    this.loadData(value)
  }

  pokemon! : Pokemon

  constructor(private pokeService : PokeService){


  }

  loadData(url: string){
    console.log(url)
    this.pokeService.getPokemon(url).subscribe({
      next : (data : Pokemon) => this.pokemon = data
    })
  }
}
