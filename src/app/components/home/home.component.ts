import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png';
  dataValidade = '2021-12-31'

  constructor() {
    // variáveis de string com concatenação
    // this.anuncio = 'O ' + this.nomeProduto + 'está em promoção!';

    console.log('Nome do Produto', this.nomeProduto);
    console.log('Anuncio', this.anuncio);
    console.log('ID', this.idProduto);
    console.log('Preço', this.precoProduto);
    console.log('Promoção', this.promocao);

    var variavel1;
    let variavel2;


  /*let idade = 10
    console.log('Minha idade é:', idade)*/

  /*  function imprimeIdade() {
      var idade = 20
      console.log('Minha idade é:', idade)

    imprimeIdade() */
/*
    let idade = 10;
    function imprimeIdade() {
      for (let idade = 20; idade <= 25; idade++) {
        console.log('Idade dentro do for:', idade)
      }
      console.log('Idade fora do for:', idade)
    }
     imprimeIdade()
*/
     const variavel3 = 1;

     var a = 5;
     var b = 10;
     if(a = 5){
      let a = 4;
      var b = 1;
      console.log('Variável a dentro do if: ', a);
      console.log('Variável b dentro do if: ', b);
     }
     console.log('Variável a fora do if: ', a);
     console.log('Variável b fora do if: ', b);

   }

    ngOnInit(): void {
  }
}
