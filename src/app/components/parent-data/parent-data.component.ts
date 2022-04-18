import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name = ''
  @Input() cargo = ''
  @Input() gostos!:{game:string, champion:string}
  
  state = true

  constructor() { }

  ngOnInit(): void {
  }

}
