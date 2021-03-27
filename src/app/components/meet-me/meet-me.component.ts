import { Component, OnInit } from '@angular/core';
import { my } from '../../mocks';

@Component({
  selector: 'app-meet-me',
  templateUrl: './meet-me.component.html',
  styleUrls: ['./meet-me.component.scss'],
})
export class MeetMeComponent implements OnInit {
  peopleList = my;

  constructor() {}

  ngOnInit(): void {}
}
