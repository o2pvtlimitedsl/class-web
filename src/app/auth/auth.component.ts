import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public switch = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchOption(type: string): void {
    switch (type) {
      case 'L':
        this.switch = true;
        this.router.navigate(['auth/login']);
        break;
      case 'R':
        this.switch = false;
        this.router.navigate(['auth/register']);
        break;
      default:
        this.switch = true;
        this.router.navigate(['auth/login'])
        break;
    }
  }

}
