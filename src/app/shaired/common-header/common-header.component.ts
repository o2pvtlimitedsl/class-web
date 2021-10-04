import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {
  @Input() isAuth?: boolean;
  @Output() switchAuth = new EventEmitter<string>();

  public switch = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchOption(type: string): void{
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
