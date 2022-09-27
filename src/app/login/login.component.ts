import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  phn = ""
  pswd = ""
  loginForm = this.fb.group({

    phn: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })
  constructor(private fb: FormBuilder,private router: Router) { }


  

  ngOnInit(): void {
  }

  login()
  {
    alert("Login successfully.........")
    this.router.navigateByUrl("profile")
  }
}
