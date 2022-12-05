import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/header/auth.service';
import { ServiceService } from 'src/app/service.service';
import { setOptions } from '@mobiscroll/angular';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  userSub: Subscription;
  zoom: 12;
  markerOptions: google.maps.MarkerOptions = { draggable: false }
  listView: Subscription;
  subReservation: Subscription;
  res: Object;
  id: number;

  reservation: FormGroup;
  appartment_id: number;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.listView = this.service.getSingleData(this.id).subscribe(resData => {
          this.res = resData;
          console.log(resData);
        });
      }
    );

    this.reservation = new FormGroup({
      'check_in': new FormControl('', Validators.required),
      'check_out': new FormControl('', Validators.required),
      'totalPrice': new FormControl('', Validators.required),
      'nbDays': new FormControl('', Validators.required)
    })

    this.getReservationsDates();
  }

  onContact(index: number, form: NgForm) {
    // this.service.createContact(index)
    console.log(form.value.message);
    const message = form.value.message;
    this.service.createContact(index, message);
    form.reset();
  }

  onSave() {
    this.service.createWatchlistData(this.id);
    this.router.navigate(['/watch-list']);
  }

  onDelete() {
    this.service.deleteFromWatchist(this.id);
    this.router.navigate(['/watch-list']);
  }

  ngOnDestroy(): void {
    this.listView.unsubscribe();
    this.userSub.unsubscribe();
    this.subReservation.unsubscribe();
  }

  min = new Date();
  max = new Date(this.min.getFullYear(), this.min.getMonth() + 6, this.min.getDate());
  // count
  now = new Date();
  invalid = [];

  onSubmit() {
    if (!this.reservation.valid) {
      return;
    }
    this.service.createReservation(
      this.reservation.get('check_in').value,
      this.reservation.get('check_out').value,
      this.reservation.get('totalPrice').value,
      this.reservation.get('nbDays').value,
      this.res['id']
    );
    this.getReservationsDates();
    this.reservation.reset();
  }

  rest() {
    this.reservation.reset();
  }

  getReservationsDates() {
    setTimeout(() => {
      this.subReservation = this.service.getAllReservations(this.res['id']).subscribe((resData) => {
          this.invalid = [];
          for (let i = 0; i < resData.length; i++) {
            let start = +resData[i]['check_in'].substring(3, 5);
            let end = +resData[i]['check_out'].substring(3, 5);
            for (let j = start; j < end; j++) {
              this.invalid.push(new Date(this.now.getFullYear(), this.now.getMonth(), j));
            }
          }
      });
    }, 1000);
  }
}
