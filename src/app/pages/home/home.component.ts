import { Component } from '@angular/core';
import { Game } from '../../shared/interfaces/game'
import { Banner } from 'src/app/shared/interfaces/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public banner:Banner = {
    title: "PSN",
    imgUrl: "../../../assets/imgs/gold.png",
    description: `Este é oPlayStation Plus. Curta centenas de jogos para PS5, 
        PS4 e clássicos da PlayStation, mais os benefícios imperdíveis 
        dos três planos de assinatura pelo melhor preço que` }
        
  public gamesList:Game[] = [
    {
      name: "Gears Of War", 
      price: 49.99, 
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
      name: "Anthem", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-ant.png', 
      url: "http://", 
      description: `Entre na pele de Prophet, um supersoldado aprimorado com um 
      nanotraje em uma missão para salvar a humanidade com as armas mais temíveis 
      já projetadas.`,
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
      name: "Gears Of War", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-gow.jpg', 
      url: "http://", 
      description: "",
      discount: 40
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
      name: "Pokemon", 
      price: 65.99, 
      imgUrl: '../../assets/game-covers/game-pok.jpg', 
      url: "http://", 
      description: "",
      discount: 15
    },
    {
      name: "Fifa 2020", 
      price: 150.00, 
      imgUrl: '../../assets/game-covers/game-fif.jpg', 
      url: "http://", 
      description: "",
      discount: 25
    },
    {
      name: "Anthem", 
      price: 45.99, 
      imgUrl: '../../assets/game-covers/game-ant.png', 
      url: "http://", 
      description: `Entre na pele de Prophet, um supersoldado aprimorado com um 
      nanotraje em uma missão para salvar a humanidade com as armas mais temíveis 
      já projetadas.`,
      discount: 25
    },
    {
      name: "Red Dead II", 
      price: 125.00, 
      imgUrl: '../../assets/game-covers/game-rdr.jpg', 
      url: "http://", 
      description: "",
      discount: 50
    },
    {
      name: "Gears Of War", 
      price: 75.99, 
      imgUrl: '../../assets/game-covers/game-gow.jpg', 
      url: "http://", 
      description: "",
      discount: 40
    },
   
  ]
}
