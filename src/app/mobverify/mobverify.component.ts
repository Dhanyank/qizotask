import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobverify',
  templateUrl: './mobverify.component.html',
  styleUrls: ['./mobverify.component.css']
})
export class MobverifyComponent implements OnInit {

  getotpForm = this.fb.group({

    
  })

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }


  getotp()
  {
    this.router.navigateByUrl("otpverify")

  }
}
