import { Component, Input } from '@angular/core';
import { Banner } from '../../interfaces/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() banner:Banner = {
    title:'',
    imgUrl: '',
    description: ''}
}
