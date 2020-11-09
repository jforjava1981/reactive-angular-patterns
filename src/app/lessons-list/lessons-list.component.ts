import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  lessons: Lesson[];
  constructor() { }

  ngOnInit(): void {
  }

}
