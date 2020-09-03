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
        img: '/assets/images/projects/vinylClub.png',
        project: 'Vinyl Catalog App',
        info: 'asp.net core'
      },
      {
        img: '/assets/images/projects/crm_news.png',
        project: 'Content Management System for News',
        info: 'asp.net core'
      },
      {
        img: '/assets/images/projects/pixicity.png',
        project: 'Pixicity',
        info: 'php + mysql'
      }
    ];
  }

}
