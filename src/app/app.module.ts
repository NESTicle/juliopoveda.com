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

@NgModule({
  declarations: [
    AppComponent,
    IndexHomeComponent,
    TreeExperiencesComponent,
    AboutMeHomeComponent,
    ServicesHomeComponent,
    ProjectsHomeComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
