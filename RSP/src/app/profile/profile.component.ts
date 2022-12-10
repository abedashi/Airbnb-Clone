import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service.service';
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
  userList: [];
  subUserList: Subscription;
  res: {};
  local: {};

  constructor(
    private profileService: PostProfileService,
    private service: ServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.sub = this.profileService.getProfileData(this.id).subscribe(resData => {
          this.res = resData;
        });
        this.subUserList = this.service.getAllListsForOneUser(this.id).subscribe((resData: []) => {
          this.userList = resData;
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
        })
    });
    form.reset();
  }

  onSubmit(form: NgForm) {
    console.log(form.value.about)
    const about = form.value.about;
    const job = form.value.job;
    const location = form.value.location;
    const language = form.value.language;
    this.sub = this.profileService.updateProfile(about, language, location, job)
      .subscribe(() => {
        this.profileService.getProfileData(this.id)
          .subscribe(resData => {
            this.res = resData;
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
    this.subUserList.unsubscribe();
  }
}
