import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'yuj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string = 'yuj design';
  @Input() loginId = 'dsdsad';

  loginForm: any;


  constructor(
    private config: ConfigService,
    private profile: ProfileService) {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() { //once 
    console.log(`ngOnInit  - data is ${this.data}`);

    this.loginForm = new FormGroup({
      uname: new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z]+'),
        Validators.minLength(6)
      ]),
      passw: new FormControl("", Validators.required)
    });
  }

  onSubmitLoginForm() {

    if (this.loginForm.valid) {
      this.profile
        .loginUser(this.loginForm.value)
        .subscribe(data => {
          //imple logic for allowing user inside sysm
        });

    }

    // localStorage.setItem('loginInfo', JSON.stringify(this.loginForm.value))

    // localStorage.setItem('fillterSession', JSON.stringify({
    //   person: 'sshelake'
    // }))

  }

  submitMyform() {
    // alert('ss')
  }

  // ngDoCheck() {
  //   console.log("ngDoCheck");
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }



}
