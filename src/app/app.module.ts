import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexHomeComponent } from './components/home/index-home/index-home.component';
import { TreeExperiencesComponent } from './components/home/tree-experiences/tree-experiences.component';
import { AboutMeHomeComponent } from './components/home/about-me-home/about-me-home.component';
import { ServicesHomeComponent } from './components/home/services-home/services-home.component';
import { ProjectsHomeComponent } from './components/home/projects-home/projects-home.component';
import { MainFooterComponent } from './components/sections/main-footer/main-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogViewProjectComponent } from './components/dialogs/dialog-view-project/dialog-view-project.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    IndexHomeComponent,
    TreeExperiencesComponent,
    AboutMeHomeComponent,
    ServicesHomeComponent,
    ProjectsHomeComponent,
    MainFooterComponent,
    DialogViewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
