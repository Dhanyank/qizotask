import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmpnysignup',
  templateUrl: './cmpnysignup.component.html',
  styleUrls: ['./cmpnysignup.component.css']
})
export class CmpnysignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  login()
  {
    alert("sucess")
    this.router.navigateByUrl("dashboard")
  }
}
