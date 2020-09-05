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
          '/assets/images/projects/vinylClub/community.png'
        ]
      },
      {
        img: '/assets/images/projects/crm_news.png',
        project: 'Content Management System for News',
        info: 'asp.net mvc + angular.js'
      },
      {
        img: '/assets/images/projects/pixicity.png',
        project: 'Pixicity',
        info: 'php + mysql'
      },
      {
        img: '/assets/images/projects/leccionesAprendidas.png',
        project: 'Lecciones Aprendidas',
        info: 'asp.net core + angular + mongodb'
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
      width: '980px',
      data: project
    });
  }
}
