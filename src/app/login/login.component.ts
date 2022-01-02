import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'yuj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string = 'yuj design';
  @Input() loginId = 'dsdsad';

  loginForm: any;


  constructor(private config: ConfigService) {
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
    })


  }

  onSubmitLoginForm() {
    console.log(this.loginForm.value)
   
    //JSON.parse 

    localStorage.setItem('loginInfo',  JSON.stringify(this.loginForm.value))
    
    localStorage.setItem('fillterSession',  JSON.stringify({
      person: 'sshelake'
    }))
    
    

    
    // localStorage.clear()
    // this.loginService.loginUser(this.loginForm.value).subcribe(
    //   (repose) => {

    //   }
    // )

  }

  submitMyform() {
    alert('ss')
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }



}
