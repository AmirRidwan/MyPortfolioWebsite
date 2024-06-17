import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  angular: boolean = false;
  java: boolean = false;
  javascript: boolean = false;
  nodejs: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  html: boolean = false;
  css: boolean = false;
  typescript: boolean = false;
  kotlin: boolean = false;
  mysql: boolean = false;
  dart: boolean = false;
  flutter: boolean = false;
  filtering: boolean = false;

  constructor (private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Amir Ridwan - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.java){
      filterTags.push(Tag.JAVA);
    }

    if (this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if (this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if (this.python){
      filterTags.push(Tag.PYTHON);
    }

    if (this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if (this.html){
      filterTags.push(Tag.HTML);
    }

    if (this.css){
      filterTags.push(Tag.CSS);
    }

    if (this.kotlin){
      filterTags.push(Tag.KOTLIN);
    }

    if (this.mysql){
      filterTags.push(Tag.MYSQL);
    }

    if (this.dart){
      filterTags.push(Tag.DART);
    }

    if (this.flutter){
      filterTags.push(Tag.FLUTTER);
    }

    if (this.angular || this.typescript || this.java || this.javascript || this.nodejs || this.python || this.csharp || this.html || this.css || this.kotlin || this.mysql || this.kotlin || this.flutter){ 
      this.filtering = true;
    }

    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.angular = false;
    this.typescript = false;
    this.java = false;
    this.javascript = false;
    this.nodejs = false;
    this.python = false;
    this.csharp = false;
    this.html = false;
    this.css = false;
    this.kotlin = false;
    this.mysql = false;
    this.kotlin = false;
    this.flutter = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
