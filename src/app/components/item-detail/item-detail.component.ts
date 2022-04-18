import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/Animal';
import { ListServiceService } from 'src/app/services/list-service.service';
import { ActivatedRoute } from '@angular/router';
// para rotas dinamicas utilizar ActivatedRoute 

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?:Animal // atributo com ? opcional pode ou não vir.

  constructor(private listService:ListServiceService, private route:ActivatedRoute) { 
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id")) //extraindo o id
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
    // recebendo o dado da requisição e passando o id como parametro do metodo do service
  }

}
