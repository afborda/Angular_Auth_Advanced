import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CallService } from './../callService';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  details$: any;
  area = [];
  prioridade = [];
  tipo_atendimento = [];
  loading: boolean = false;
  formRegisterCall: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mainService: MainService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.people$ = this.mainService.getPeople();
    this.mainService.getCallDetails().subscribe((e) => {
      this.details$ = e;
      this.area = e.area;
      this.prioridade = e.prioridade;
      this.tipo_atendimento = e.tipo_atendimento;
    });

    this.onForm();
  }

  onForm() {
    this.formRegisterCall = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      description: ['', [Validators.required]],
      area: ['', [Validators.required]],
      nregistration: [''],
    });
  }

  onSubmit() {
    let call: CallService = { ...this.formRegisterCall.value };
    console.log(call);

    this.mainService.registerCall(call).subscribe(
      (u) => {
        this.snackBar.open('Successfuly Register.', 'OK', { duration: 2000 });
        this.onForm();
        this.router.navigateByUrl('/');
      },

      (err) => {
        this.snackBar.open(err.error.message, 'OK', { duration: 2000 });
      }
    );
  }
}
