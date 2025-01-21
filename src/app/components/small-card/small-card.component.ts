import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string="https://media.investnews.com.br/uploads/2023/07/400395744-1.jpg"
  @Input()
  cardTitle:string="Openai"

  constructor() { }

  ngOnInit(): void {
  }

}
