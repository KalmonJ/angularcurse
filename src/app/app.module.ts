import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWaiBindingComponent } from './components/two-wai-binding/two-wai-binding.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    PipesComponent,
    TwoWaiBindingComponent,
    ListRenderComponent,
    PeoplesComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule // para requisições http import HttpClientModule
    // para rotas AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
