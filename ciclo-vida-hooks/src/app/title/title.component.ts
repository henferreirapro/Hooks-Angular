import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{
  nome: string = "Henrique";

  constructor() {}
  ngOnInit(): void {
    this.nome = `Ola ${this.nome}`;
    console.log("OnInit iniciado")
  }
}
