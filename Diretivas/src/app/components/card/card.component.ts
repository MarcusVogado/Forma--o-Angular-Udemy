import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()  
  public pathImg:string=''
  @Input()  
  public data:string=''
  @Input()  
  public horario:string=''
  @Input()  
  public titulo:string=''
  @Input()  
  public descricao:string=''
}
