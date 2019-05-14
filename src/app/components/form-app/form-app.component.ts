import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {

  public articles: Article[];

  constructor() { }

  ngOnInit() {
    this.articles = [
      new Article('Java', 'www.java.com'),
      new Article('Angular', 'www.angular.com', 1),
      new Article('Jquery', 'www.jquery.com', 1),

    ];
  }

  addArticle(titulo: HTMLInputElement, link: HTMLInputElement) {
   this.articles.push(new Article(titulo.value, link.value));
   return false;
  }

  ordenar() {
  }

}
