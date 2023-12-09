import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  public position: { x: number, y: number } = { x: 0, y: 0 };
  public alertInfo(event: MouseEvent) {
    console.log(event)
  }
  public mouseMove(value: MouseEvent) {
   
    this.position.x = value.offsetX;
    this.position.y = value.offsetY;
  }

}
