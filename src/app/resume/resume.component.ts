import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isAcademicProjectOpen: boolean = false;
  isEducationOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor (private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Amir Ridwan - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/RESUME AMIR RIDWAN.pdf');
    link.setAttribute('download', 'RESUME AMIR RIDWAN.pdf');
    link.click();
    link.remove();
  }
}
