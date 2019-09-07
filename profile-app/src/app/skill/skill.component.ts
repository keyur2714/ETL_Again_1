import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skilList : Skill[] = [
    {
      "skillType" : 'Databases',
      "skills" : ["MySql","MongoDb","Sql Server","Oracle"]
    },
    new Skill("Operating System",["Windows","Linux"])
  ];

  constructor() { }

  ngOnInit() {
    let skill = new Skill("Languages",["C","C++","Java","Type Script"]);
    let skill2 = new Skill();
    skill2.skillType = "Tools";
    skill2.skills = ["Maven","Gradle","NPM"];
    this.skilList.push(skill);
    this.skilList.push(skill2);
  }

}
