import { Component, OnInit } from '@angular/core';
import { DasahboardService } from '../dasahboard.service';

@Component({
  selector: 'app-course-wrapper',
  templateUrl: './course-wrapper.component.html',
  styleUrls: ['./course-wrapper.component.scss']
})
export class CourseWrapperComponent implements OnInit {

  constructor(private dasahboardService: DasahboardService) { }

  ngOnInit(): void {
    
    // this.dasahboardService.getList().subscribe((res: any) => {
    //   console.log(res, "Success")
    // }, err => {
    //   console.log(err, "Success")
    // })
  }

}
