import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostProfileService } from './post-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  view: boolean = false;
  sub: Subscription
  id: number;
  res: {};
<<<<<<< HEAD

  local: {};
=======
  local: any;
>>>>>>> refs/remotes/origin/main
  constructor(
    private profileService: PostProfileService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.sub = this.profileService.getProfileData(this.id).subscribe(resData => {
          this.res = resData;
          console.log(resData);
        });
      }
      );
      this.sub = this.profileService.getProfile().subscribe(resData => {
        this.local = resData;
      });
  }
  changeImg(form: NgForm) {
    console.log(form.value.url);
    const image = form.value.url;
    this.sub = this.profileService.updateImage(image).subscribe(resData => {
      this.profileService.getProfileData(this.id)
      .subscribe(resData => {
        this.res = resData;
        console.log(this.res);
      })
    });
    form.reset();
  }
  
  onSubmit(form: NgForm){
    console.log(form.value.about)
    const about = form.value.about;
    const job = form.value.job;
    const location = form.value.location;
    const language = form.value.language;
    this.sub = this.profileService.updateProfile(about, language, location, job)
      .subscribe(resData => {
        this.profileService.getProfileData(this.id)
          .subscribe(resData => {
          this.res = resData;
          console.log(this.res);
      });
      }
    );
    this.view = !this.view;
  }

  onClick() {
    this.view = !this.view;
  }

  onBack() {
    this.view = !this.view;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
