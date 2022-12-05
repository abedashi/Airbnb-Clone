import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostProfileService } from '../profile/post-profile.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  id: number;
  res: [];
  constructor(
    private service: ServiceService,
    private profileService: PostProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((resData) => {
      console.log(resData);
      this.id = resData['id'];
    });

    setTimeout(() => {
      this.service.getSingeleContact(this.id).subscribe((resData: []) => {
        this.res = resData;
        console.log(resData);
      });
    }, 500);
  }
}
