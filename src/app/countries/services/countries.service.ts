import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

// para crear conexion con la api
  private apiUrl: string = 'https://restcountries.com/v3.1' //url de api verificar con postman

  constructor(private http: HttpClient) { }


  searchCapital(query: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ query }` //creacion de url siempre con `` no comilla simple
    return this.http.get<Country[]>(url); //peticion usar siempre la variable
  }
}
