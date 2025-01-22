import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake}from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://images.indianexpress.com/2024/07/META_FACEBOOK-NIGERIA_20240725142803.jpg?w=640"
  contentTitle:string="Meta"
  contentDescription:string="A Meta Platforms superou as previsões de receita do segundo trimestre e apresentou uma perspectiva positiva para o terceiro trimestre, impulsionada por gastos robustos com anúncios digitais no Facebook e no Instagram."

  private id:string | null="1"



  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value=>
      this.id = value.get("Id")
    )
      this.setValueToComponent
  }

  setValueToComponent(id: string): void {
    const result = dataFake.filter(article => article.id.toString() === id[1]

  )


  }



}
