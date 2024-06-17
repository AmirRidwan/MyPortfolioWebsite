import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'MyEV: EV Charger Finder Mobile Application',
      summary: 'MyEV is a mobile application designed to help electric vehicle (EV) drivers find charging stations.',
      description: 'MyEV is a mobile application designed to help electric vehicle (EV) drivers find charging stations. With EVs increasing popularity, it is becoming more important to have easy access to charging facilities. MyEV aims to make this process simple and convenient by providing a user-friendly interface that allows drivers to locate nearby charging stations quickly.',
      projectLink: '//www.github.com/AmirRidwan/MyEV-App',
      pictures: ["../../assets/MyEV-1.png","../../assets/MyEV-2.png","../../assets/MyEV-3.png"],
      tags: [Tag.DART, Tag.FLUTTER]
    },
    {
      id: 1,
      name: 'MyTasks - Simple Task Manager',
      summary: 'Simple task manager app developed using Kotlin and Firebase.',
      description: 'MyTasks is a simple task manager app that allows users to add, edit, and delete tasks. It features real-time synchronization with a Firestore database, ensuring that tasks are always up to date. The app also includes a profile view and edit functionality for a personalized experience.', 
      projectLink: 'https://github.com/AmirRidwan/MyTasks',
      pictures: ["../../assets/Image 1.png","../../assets/Image 2.png","../../assets/Image 3.png"],   
      tags: [Tag.KOTLIN] 
    },
    {
      id: 2,
      name: 'Recipe App',
      summary: 'Recipe app is a simple recipe app that allows users to add recipes, view recipes, and save recipes.',
      description: 'Recipe app is a simple recipe app that allows users to add recipes, view recipes, and save recipes. The app features a user-friendly interface that makes it easy to navigate and find recipes. Users can add new recipes, view existing recipes, and save their favorite recipes for later.',
      projectLink: '//www.github.com/AmirRidwan/Recipe-App',
      pictures: ["../../assets/Image 1.png","../../assets/Image 2.png","../../assets/Image 3.png"],
      tags: [Tag.KOTLIN]
    },
    {
      id: 3,
      name: 'Clinic Finder App',
      summary: 'Clinic Finder App is a mobile application designed to help users find nearby clinics and hospitals.',
      description: 'Clinic Finder App is a mobile application designed to help users find nearby clinics and hospitals. The app features a user-friendly interface that allows users to search for clinics based on their location. Users can view clinic details, such as address, contact information, and services offered. The app also includes a map view that displays the location of nearby clinics.', 
      projectLink: '//www.github.com/AmirRidwan/ClinicFinderApps',
      pictures: ["../../assets/Image 1.png","../../assets/Image 2.png","../../assets/Image 3.png"],
      tags: [Tag.JAVA]
    }
  ]

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(p => p.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project with the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project) {
      let foundAll = true;

      filterTags.forEach(function(filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
