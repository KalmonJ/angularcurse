import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PeoplesComponent } from "./components/peoples/peoples.component";

const routes:Routes = [
  {path: '', component: FirstComponentComponent}, // declarando rotas dos components
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent} // criando uma rota dinamica com os : o id sempre irá mudar toda vez que a rota será acessada
]

@NgModule({ // configurações necessárias pro router
  declarations: [],
  imports: [RouterModule.forRoot(routes)], // dizendo que as rotas começando do root, dá raiz do site
  exports: [RouterModule]
})

export class AppRoutingModule {}