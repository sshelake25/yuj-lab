import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pageTitle = 'Welcom to angular sessions';

  personList = [
    {
      name:'surekha shelake',
      skills: ['angular','html','css']
    },
    {
      name:'Umang Paunikar',
      skills: ['angular','html','css', 'ux desing']
    }
  ];
   
  constructor() {
    //name = 'surekha';
  }

  ngOnInit(): void {
  }


  getFullName() {
    return 'YUJ designs';
  }

  getCompanyDetails() {
   return this.getFullName() + ' - Year 2021';
  }

}
