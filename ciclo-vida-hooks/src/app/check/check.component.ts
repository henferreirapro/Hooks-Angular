import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit,Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements 
OnInit, 
DoCheck, 
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
{
  @Input() quantidade: number = 0;

  constructor() {}

  ngOnDestroy(): void {
    console.log(`Component Contador destruido.`);
  }

  adicionar() {
    this.quantidade += 1;
  }

  remover() {
    this.quantidade -= 1;
  }

  ngAfterViewInit(): void {
    console.log(`AfterViewInit executado`);
  }
  ngAfterViewChecked(): void {
    console.log(`AfterViewChecked executado`);
  }
  ngAfterContentInit(): void {
    console.log(`AfterContentInit executado`);
  }
  ngAfterContentChecked(): void {
    console.log(`AfterContentChecked executado`);
  }
  ngDoCheck(): void {
    console.log(`DoCheck executado`);
  }
  ngOnInit(): void {
    console.log(`OnInit `);
  }

}
