import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() sectionLabel:string = ''
  @Input() games:Game[] | [] = []

  @Input() showName:boolean = true
  @Input() showPrice:boolean = false
  @Input() showDescription = false
  @Input() displayTall = false

  ngOnInit() {
    
  }
}
