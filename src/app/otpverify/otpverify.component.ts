import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css']
})
export class OtpverifyComponent implements OnInit {

  otpForm = this.fb.group({

    
  })

  constructor(private fb: FormBuilder,private router: Router) { }


  ngOnInit(): void {
  }

  submit()
    {
alert("success")
this.router.navigateByUrl("admnlogin")
    }
  
}
