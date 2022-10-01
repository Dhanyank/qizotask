import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admnlogin',
  templateUrl: './admnlogin.component.html',
  styleUrls: ['./admnlogin.component.css']
})
export class AdmnloginComponent implements OnInit {

  loginForm = this.fb.group({

    
  })

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
login()
{
  alert("SUCCESSFULLY LOGGED.........");
  this.router.navigateByUrl("dashboard2")
}
  
}

