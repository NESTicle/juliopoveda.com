import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogViewProjectComponent } from '../../dialogs/dialog-view-project/dialog-view-project.component';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent implements OnInit {
  public projects = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.projects = [
      {
        img: '/assets/images/projects/vinylClub.png',
        project: 'Vinyl Catalog App',
        info: 'asp.net core + angular',
        description: `A vinyl club community that i'm building in my freetime just for fun!`,
        carrousel: [
          '/assets/images/projects/vinylClub/community.png',
          '/assets/images/projects/vinylClub/login.png',
          '/assets/images/projects/vinylClub/vinyl-list.png'
        ],
        technologies: [
          'asp.net core',
          'angular',
          'sql server'
        ]
      },
      {
        img: '/assets/images/projects/crm_news.png',
        project: 'Content Management System for News',
        info: 'asp.net mvc + angular.js',
        description: `A cms builded in asp.net mvc, was a project that I created several years ago to learn angular.js that's why I haven't finished it yet.`,
        carrousel: [
          '/assets/images/projects/cms/home.png',
          '/assets/images/projects/cms/login.png',
          '/assets/images/projects/cms/profile.png',
          '/assets/images/projects/cms/admin.png',
        ],
        technologies: [
          'asp.net mvc',
          'angular.js',
          'sql server'
        ]
      },
      {
        img: '/assets/images/projects/pixicity.png',
        project: 'Pixicity',
        info: 'php + mysql'
      },
      {
        img: '/assets/images/projects/leccionesAprendidas.png',
        project: 'Lecciones Aprendidas',
        info: 'asp.net core + angular + mongodb',
        description: `In construction.`,
        carrousel: [
          '/assets/images/projects/lecciones-aprendidas/home.png',
          '/assets/images/projects/lecciones-aprendidas/search.png',
          '/assets/images/projects/lecciones-aprendidas/add-post.png',
          '/assets/images/projects/lecciones-aprendidas/dashboard.png',
          '/assets/images/projects/lecciones-aprendidas/posts.png',
          '/assets/images/projects/lecciones-aprendidas/view-post.png',
        ],
        technologies: [
          'asp.net core',
          'angular',
          'mongodb'
        ]
      },
      {
        img: '/assets/images/projects/facilityWarez.png',
        project: 'Facility Warez',
        info: 'blogspot'
      },
      {
        img: '/assets/images/projects/arcanoMuebles.png',
        project: 'Arcano Muebles',
        info: 'wordpress'
      }
    ];
  }

  viewProject(project: any): void {
    this.dialog.open(DialogViewProjectComponent, {
      width: '1080px',
      data: project
    });
  }
}
