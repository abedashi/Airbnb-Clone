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
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onclick() {
    // if (this.editProfile == false) {
    //   this.editProfile = true;
    //   this.editProfileForm = false;
    // }else {
    //   this.editProfile = false;
    //   this.editProfileForm = true;
    // }
    if (!this.edit) {
      this.router.navigate([this.id, '/edit'], { relativeTo: this.route });
      this.edit = true;
    } else {
      this.router.navigate([this.id], { relativeTo: this.route });
      this.edit = false;
    }
  }

}
