import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-wai-binding',
  templateUrl: './two-wai-binding.component.html',
  styleUrls: ['./two-wai-binding.component.css']
})
export class TwoWaiBindingComponent implements OnInit {
  name:string  = ''
  text:string = 'Gustavo'
  
  constructor() { }

  ngOnInit(): void {
  }

  printOnTerminal(): void {
    console.log(`O nome digitado foi ${this.name}`)
  }

}
