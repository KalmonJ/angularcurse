import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name:string = "Kalmon"
  job:string  = "programmer"
  age:number = 21
  car = {
    
    type: "ford",
    year: 2020
  }
  hobbies = ["estudar", "fazer amor"]

  constructor() { }

  ngOnInit(): void {
  }

}
