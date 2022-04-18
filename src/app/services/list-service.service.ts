import { Injectable } from '@angular/core';
import { Animal } from 'src/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private apiUrl = "http://localhost:3000/animals" // declarando a url da api e deixando ela privada para ser acessada somente pela classe
  private apiUrlPeoples = "http://localhost:3000/peoples"

  constructor(private http: HttpClient) { }

  remove(animals:Animal[], animal:Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }

  addAge(animals:Animal[]){
    return animals.filter((a) => a.age += 1)
  }

  getAll():Observable<Animal[]> {
    // importar httpclient , httpheaders e observable para fazer a requisição
    return this.http.get<Animal[]>(this.apiUrl) // fica observando se esse array de animal chega ou não da api
  }

  getPeoples():Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrlPeoples)
  }

  getItem(id:Number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

}
