import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/Animal';
import { ListServiceService } from 'src/app/services/list-service.service'; 

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals:Animal[] = []
  peoples:Animal[] = []

  animalDetails = ''

  constructor(private listService:ListServiceService) { 
    this.getAnimals() // quando iniciar a aplicação o metodo getAnimals será chamado // que chamará o metodo do service que faz a requisição http
    this.getPeople()
  } // no service sempre colocar private // 

  ngOnInit(): void {
  }

  showDetails(animal:Animal) {
    this.animalDetails = ` ${animal.type } com o nome de ${animal.name}`
  }

  deleteAnimal(animal:Animal) {
    console.log("excluindo animal")
    this.animals  = this.listService.remove(this.animals, animal)
  }

  changeAge() {
    this.animals = this.listService.addAge(this.animals)
  }

  getAnimals():void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals)) // quando tenho um observable tenho que dar um subscribe, subscribe está dizendo que o evento vai ser concretizado, esperando o evento observable para pode realizar alguma coisa. No caso atribuindo a response da requisição ao meu array.
    // acessando o metodo do service que faz requisição http
    //o services que ficará com a responsabilidade de requisição http
  }

  getPeople():void {
    this.listService.getPeoples().subscribe((people) => (this.peoples = people))
  }

}
