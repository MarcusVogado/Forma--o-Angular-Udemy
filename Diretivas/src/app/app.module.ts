import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,    
    NgModelComponent,
    NgTemplateComponent,
    NgContentComponent, 
    PipesComponent, CardComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
