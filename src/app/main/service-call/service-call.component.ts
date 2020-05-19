import { CallService } from './../callService';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-service-call',
  templateUrl: './service-call.component.html',
  styleUrls: ['./service-call.component.scss'],
})
export class ServiceCallComponent implements OnInit {
  callService$: Observable<CallService[]>;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.callService$ = this.mainService.getCallServices();
  }
}
