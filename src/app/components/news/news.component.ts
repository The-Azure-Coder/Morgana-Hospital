import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsBackground: string = 'url(https://i.guim.co.uk/img/media/e8e4be15183d5e59ffec4538751c244ce507ec01/0_4_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=6d67ae5f3b98cc9a0245e1e0c556ae5d)'

  isReadMore = true
  isShowMore = true

  showMore() {
    this.isShowMore = !this.isShowMore
  }

  showText() {
    this.isReadMore = !this.isReadMore
  }
  constructor() { }

  ngOnInit(): void {
  }

}
