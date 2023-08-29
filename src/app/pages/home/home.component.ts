import { Component } from '@angular/core';
import { Game } from '../../shared/interfaces/game'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public gamesList:Game[] = [
    {
      name: "Assassins Creed Valhala", 
      price: 100.00, 
      imgUrl: '../../assets/game-covers/game-acv.png', 
      url: "http://", 
      description: "",
      discount: 75
    },
    {
      name: "Crysis", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-cry.jpg', 
      url: "http://", 
      description: "",
      discount: 0
    },
    {
      name: "Dragon Ball Z", 
      price: 100.00, 
      imgUrl: '../../assets/game-covers/game-dbz.jpg', 
      url: "http://", 
      description: "",
      discount: 75
    },
    {
      name: "Gears Of War", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-gow.jpg', 
      url: "http://", 
      description: "",
      discount: 0
    },
    {
      name: "Assassins Creed Valhala", 
      price: 100.00, 
      imgUrl: '../../assets/game-covers/game-acv.png', 
      url: "http://", 
      description: "",
      discount: 75
    },
    {
      name: "Crysis", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-cry.jpg', 
      url: "http://", 
      description: "",
      discount: 0
    },
    {
      name: "Dragon Ball Z", 
      price: 100.00, 
      imgUrl: '../../assets/game-covers/game-dbz.jpg', 
      url: "http://", 
      description: "",
      discount: 0
    },
    {
      name: "Gears Of War", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-gow.jpg', 
      url: "http://", 
      description: `O planeta está em ruínas, as cidades estão desmoronando,
                    e os maiores trabalhos do Homem caíram. A Horda Locust 
                    chegou, e continuará vindo.`,
      discount: 0
    },
    {
      name: "Assassins Creed Valhala", 
      price: 100.00, 
      imgUrl: '../../assets/game-covers/game-acv.png', 
      url: "http://", 
      description: `Explora Inglaterra durante a Idade das Trevas e ataca os 
                    teus inimigos, cria a tua povoação e aumenta o teu poder 
                    político para tentares conquistar um lugar entre os deuses.`,
      discount: 75
    },
    {
      name: "Crysis", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-cry.jpg', 
      url: "http://", 
      description: `Entre na pele de Prophet, um supersoldado aprimorado com um 
      nanotraje em uma missão para salvar a humanidade com as armas mais temíveis 
      já projetadas.`,
      discount: 0
    },
    {
      name: "Dragon Ball Z", 
      price: 100.00, 
      imgUrl: '../../assets/game-covers/game-ant.png', 
      url: "http://", 
      description: "",
      discount: 75
    },
    {
      name: "Gears Of War", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-gow.jpg', 
      url: "http://", 
      description: "",
      discount: 0
    },
   
  ]
}
