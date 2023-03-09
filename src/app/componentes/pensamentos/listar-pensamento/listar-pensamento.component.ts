import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    // {
    //   conteudo: 'Nada é permanente, exceto a mudança.',
    //   autoria: 'Heráclito de Éfeso',
    //   modelo: 'modelo2'
    // },

    // {
    //   conteudo: 'O ser é e o não-ser não é.',
    //   autoria: 'Parmênides de Eleia',
    //   modelo: 'modelo3'
    // },

    // {
    //   conteudo: 'Só sei que nada sei.',
    //   autoria: 'Sócrates',
    //   modelo: 'modelo2'
    // },
    
    // {
    //   conteudo: 'Uma vida sem reflexão não vale a pena ser vivida.',
    //   autoria: 'Sócrates',
    //   modelo: 'modelo1'
    // },

    // {
    //   conteudo: 'Creio para compreender e compreendo para crer melhor.',
    //   autoria: 'Santo Agostinho',
    //   modelo: 'modelo3'
    // },
    
    // {
    //   conteudo: 'O desordenado amor por si mesmo é a causa de todos os pecados.',
    //   autoria: 'São Tomás de Aquino',
    //   modelo: 'modelo2'
    // },
    
    // {
    //   conteudo: 'Não é da benevolência do padeiro, do açougueiro ou do cervejeiro que eu espero que saia o meu jantar, mas sim do empenho deles em promover seu auto-interesse.',
    //   autoria: 'Adam Smith',
    //   modelo: 'modelo1'
    // },

    // {
    //   conteudo: 'Existe apenas um único erro inato, que é o de acreditarmos que vivemos para sermos felizes.',
    //   autoria: 'Schopenhauer',
    //   modelo: 'modelo1'
    // },

    // {
    //   conteudo: 'Os limites de minha linguagem significam os limites de meu mundo.',
    //   autoria: 'Wittgenstein',
    //   modelo: 'modelo3'
    // }
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
