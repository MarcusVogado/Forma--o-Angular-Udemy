import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent {
  public nome: string = "";
  public nomes: Array<{ nome: string }> = [];
  @Input()
  public titleCard: string = ''
  public salvarNome() {
    this.nomes.push({ nome: this.nome })
    this.nome = ""
  }
}
