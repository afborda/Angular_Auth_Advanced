import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people$: Observable<Person[]>;

  loading: boolean = false;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.people$ = this.mainService.getPeople();
  }
}
