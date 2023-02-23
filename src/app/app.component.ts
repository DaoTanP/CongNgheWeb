import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private api: ApiService)
  {
    this.api.getProducts().subscribe(res =>
      (res as any).products.forEach((p: any) =>
      {
        // this.cards.push({ title: p.title, content: p.description, img: p.thumbnail })
        this.search.push({ title: p.title, content: p.description, url: p.thumbnail })
      }));
  }
  cards: Card[] = [];
  search: any[] = [{ title: 'aaa', content: 'bbb', url: 'ccc' }];
}

interface Card
{
  title: string;
  content: string;
  img: string;
}
