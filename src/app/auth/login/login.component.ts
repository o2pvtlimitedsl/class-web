import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.email ]),
    password: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(16)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
   
  }

}
