import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = {};

  articles: Article[] = [{
    title: 'Porsche',
    url: 'https://porsche-vietnam.vn/'
  },{
    title: 'Volvo',
    url: 'https://www.volvocars.com/vi-vn'
  },
    {
      title: 'Bmw',
      url: 'https://www.bmw.vn/vi/index.html'
    },
    {
      title: 'Lexus',
      url: 'https://www.lexus.com.vn/vn/price-and-model-tools/price-list.html'
    },
    {
      title: 'Audi',
      url: 'https://www.audi.vn/sea/web/vnvi.html'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }


}
