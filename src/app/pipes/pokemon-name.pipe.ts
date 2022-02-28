import { TitleCasePipe } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})

export class PokemonNamePipe implements PipeTransform {

  //constructor(public titlecasePipe: TitleCasePipe) { }


  /**
   *
   * @param value
   * @param args
   */
  transform(pokemon_entries: any, name: string) {

    //name = this.titlecasePipe.transform(name);


    if (name == null || name == undefined || name == '')
      return pokemon_entries;

    return pokemon_entries.filter((item => item.pokemon_species.name.indexOf(name.toLowerCase()) !== -1));

  }

}
