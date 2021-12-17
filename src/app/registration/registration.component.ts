import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'yuj-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  langs: string[] = ["English", "French", "German"];
  registationForm: any;

  // firstName: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // password: FormControl;
  // language: FormControl;

  constructor() { }

  ngOnInit(): void {

    this.registationForm = new FormGroup({
      firstName: new FormControl("YUJ"),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl(),
      password: new FormControl(),
      lang: new FormControl("en"),
      // address: new FormGroup({
      //   pin: new FormControl()
      // })
    });

     console.log(this.registationForm.controls)

  }

}

