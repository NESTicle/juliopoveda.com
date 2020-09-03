import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent implements OnInit {
  public projects = [];

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        img: 'https://user-images.githubusercontent.com/1715022/90343721-c5a3d580-dfd8-11ea-8068-8ef224ba55c5.png',
        project: 'Vinyl Catalog App',
        info: 'asp.net core'
      },
      {
        img: 'http://juliopoveda.com/wp-content/uploads/2018/10/12d85956-cc25-11e5-8e17-c0a3e0dfa44a.png',
        project: 'Content Management System for News',
        info: 'asp.net core'
      },
      {
        img: 'http://juliopoveda.com/wp-content/uploads/2015/07/57513ffa-e9cb-45af-8cd2-db39e4b7cbd2.png',
        project: 'Pixicity',
        info: 'php + mysql'
      }
    ];
  }

}
