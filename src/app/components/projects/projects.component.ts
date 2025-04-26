import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  description: string;
  keywords: Array<string>;
  link: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Array<Project>;

  constructor(private readonly translate: TranslateService) {
    this.projects = new Array();
    this.loadProjects();
    // Subscribe to language change events
    this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }
  
  loadProjects() {
    this.translate.get([
      'PROJECTS_SECTION.MASTER_THESIS_DESCRIPTION',
      'PROJECTS_SECTION.PORTFOLIO_DESCRIPTION', 
      'PROJECTS_SECTION.TEAMHUB_DESCRIPTION', 
      'PROJECTS_SECTION.TMS_DESCRIPTION', 
      'PROJECTS_SECTION.URBANHUB_DESCRIPTION'
    ]).subscribe(translations => {
      this.projects = [
        {
          title: 'Master Thesis',
          description: translations['PROJECTS_SECTION.MASTER_THESIS_DESCRIPTION'],
          keywords: ['React', 'Express', 'MySQL', 'Sequelize', 'OpenAPI', 'Frontend Development', 'Backend Development'],
          link: 'https://github.com/orgs/polito-ThesisManagement/repositories',
          image: 'projects/PoliTO_Thesis.png'
        },
        {
          title: 'Personal Portfolio',
          description: translations['PROJECTS_SECTION.PORTFOLIO_DESCRIPTION'],
          keywords: ['Angular', 'TypeScript', 'SCSS', 'Web Development', 'Frontend Development'],
          link: 'https://github.com/Sylvie-Molinatto/portfolio-website',
          image: 'projects/PersonalPortfolio.png'
        },
        {
          title: 'TeamHUB',
          description: translations['PROJECTS_SECTION.TEAMHUB_DESCRIPTION'],
          keywords: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Material Design', 'Mobile App Development', 'Cloud Services'],
          link: 'https://github.com/Sylvie-Molinatto/TeamHUB',
          image: 'projects/TeamHUB.png'
        },
        {
          title: 'Thesis Management System',
          description: translations['PROJECTS_SECTION.TMS_DESCRIPTION'],
          keywords: ['React', 'Antd', 'Node.js', 'SQLite', 'Scrum', 'Frontend Development', 'Backend Development', 'Project Management'],
          link: 'https://github.com/Sylvie-Molinatto/ThesisManagement-Group09',
          image: 'projects/ThesisManagementSystem.png'
        },
        {
          title: 'UrbanHUB',
          description: translations['PROJECTS_SECTION.URBANHUB_DESCRIPTION'],
          keywords: ['React', 'TypeScript', 'Material-UI', 'Human-Computer Interaction', 'Frontend Development'],
          link: 'https://github.com/Sylvie-Molinatto/UrbanHUB',
          image: 'projects/UrbanHUB.png'
        }
      ];
    });
  }
}
