import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-experiences',
  templateUrl: './tree-experiences.component.html',
  styleUrls: ['./tree-experiences.component.scss']
})
export class TreeExperiencesComponent implements OnInit {
  public experiences = [];
  public educations = [];

  constructor() { }

  ngOnInit(): void {
    this.experiences = [
      {
        name: 'Full Stack Developer',
        date: 'September 01, 2019',
        work: 'CDC - Cartel Damage Claims',
        description: `Software developer`
      },
      {
        name: 'Full Stack Developer',
        date: 'August 24, 2016',
        work: 'IPS Universitaria (UdeA)',
        description: `Respond for the continuous development of Software, according to the needs of the Institution and the schedule of activities, in order to have an integrated Software that supports the IPS platform, both at the healthcare and administrative level.`
      },
      {
        name: 'Full Stack Developer',
        date: 'January 20, 2016',
        work: 'Freelance',
        description: `Creating a startup of event creation and ticket sales for the cultural scene of the city of Medellín, giving cultural artists the possibility of better manage their events and reach the target audience. The software was developed with Asp.Net MVC and SQL Server.`
      },
      {
        name: 'Frontend Developer',
        date: 'July 06, 2015',
        work: 'ID Solutions Group S.A.S',
        description: 'Create interfaces and improvements for a WMS application in which I develop mockups and then implement them in the application, the languages used are Html, Css3, jQuery and Angularjs.'
      },
      {
        name: 'Full Stack Developer',
        date: 'June 08, 2013',
        work: 'Corprevenir',
        description: 'Dev a tool for the administration and management of invoices in Lightswitch C#, an app developed to manage orders made by SURA for the Corprevenir company that require going through certain processes to finally invoice.'
      },
      {
        name: 'Full Stack Developer',
        work: 'University Project',
        date: 'February 2, 2011',
        description: 'Creation of a project called “Pixicity”, it was a “Link Sharing System” where all kinds of information could be shared through “Posts”.'
      }
    ];
  }

}
