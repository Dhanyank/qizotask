import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profileForm = this.fb.group({

    
  })

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
submit()
{
  alert("SUCCESSFULLY CREATED..........");
}
  
}

