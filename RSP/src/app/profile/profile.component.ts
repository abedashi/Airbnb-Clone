import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editProfile: boolean = false;
  editProfileForm: boolean = true;
  id: number = 1;

  edit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onclick() {
    if (this.editProfile == false) {
      this.editProfile = true;
      this.editProfileForm = false;
    }else {
      this.editProfile = false;
      this.editProfileForm = true;
    }
  }
  back(event: boolean) {
    this.editProfileForm = event;
    this.editProfile = false;
  }
}
