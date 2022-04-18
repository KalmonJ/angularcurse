import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "kalmon "
  cargo = {
    job: "admin"
  }

  gostos = {
    game: "lol",
    champion: "ekko"
  }

  title = 'application';
}
