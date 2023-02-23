import { Component, Input } from '@angular/core';

@Component({
  selector: 'result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent
{
  @Input() searchResult: any[] = [
    { url: 'https://www.google.com/search', title: 'Google Search', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi!' },
    { url: 'https://www.google.com/search', title: 'Google Search', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi!' },
    { url: 'https://www.google.com/search', title: 'Google Search', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nisi!' },
  ]

  goToPage (url: string): void
  {
    window.open(url);
  }
}
