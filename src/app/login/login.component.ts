import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../modules/shared/services/dialog.service';
import { ConfigService } from '../services/config.service';
import { ProfileService } from '../services/profile.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'yuj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string = 'yuj design';
  @Input() loginId = 'dsdsad';

  loginForm: any;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private router: Router,
    private config: ConfigService,
    private profile: ProfileService,
    private storageSrv: StorageService) {

    console.log(`new - data is ${this.data}`);
  }

  // ngOnChanges() {
  //   console.log(`ngOnChanges - data is ${this.data}`);
  // }

  ngOnInit() { //once 
    //
    // this.yujDialog.openLoadingDialog();
    if (this.storageSrv.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.storageSrv.getUser().roles;
    }
    console.log(`ngOnInit  - data is ${this.data}`);

    this.loginForm = new FormGroup({
      uname: new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z]+'),
        Validators.minLength(2)
      ]),
      passw: new FormControl("", Validators.required)
    });
  }

  onSubmitLoginForm() {

    if (this.loginForm.valid) {
      this.profile
        .loginUser(this.loginForm.value)
        .subscribe(
          {
            next: (data: any) => {
              this.storageSrv.saveToken(data.token);
              // this.storageSrv.saveRefreshToken(data.refreshToken);
              this.storageSrv.saveUser(data);

              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.router.navigateByUrl('/');
              // this.reloadPage();
            },
            error: (e) => {
              console.error(e)
            },
            complete: () => { console.log('request completed') }
          }
        );

    }

    // localStorage.setItem('loginInfo', JSON.stringify(this.loginForm.value))

    // localStorage.setItem('fillterSession', JSON.stringify({
    //   person: 'sshelake'
    // }))

  }

  reloadPage(): void {
    window.location.reload();
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
