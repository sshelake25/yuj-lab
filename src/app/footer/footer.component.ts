import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pageTitle = 'Welcom to angular sessions';

  currentYear = new Date();
  compyName: string = 'YUJ Designs.com';


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
    //alert(this.currentYear)
  }


  getFullName() {
    return 'YUJ designs';
  }

  getCompanyDetails() {
   return this.getFullName() + ' - Year 2021';
  }

}
