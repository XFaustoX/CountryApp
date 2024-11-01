import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  // se inyecta el servicio de la api
  constructor( private CountriesService: CountriesService){}

  // se crea el metodo
  searchByCapital( term: string ):void{
    this.CountriesService.searchCapital(term)
      .subscribe( countries => {
      this.countries = countries;
    }); //siempre usar subscribe()
  }
}
