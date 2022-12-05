import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _fsService: FirestoreService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /*   newsletterForm = new FormGroup({
    subscriberName: new FormControl<string | null>(''),
    subscriberEmail: new FormControl<string | null>('', [
      Validators.required,
      Validators.email,
    ]),
  }); */

  subscriberEmail = new FormControl<string | null>('', [
    Validators.required,
    Validators.email,
  ]);

  onClickSubscribe() {
    if (this.subscriberEmail.invalid) {
      this.subscriberEmail.markAllAsTouched();
    } else {
      let _collectionName: string = 'elist';
      let _payload: object = {
        created_at: new Date().toISOString(),
        subscriber_name: '',
        subscriber_email: this.subscriberEmail.value ?? '',
      };
      let _req = this._fsService.addDocument(_collectionName, _payload);
      _req
        .then((res) => {
          let _snackBarRef = this._snackBar.open(
            'Saved successfully \u2713',
            'OK',
            {
              duration: 3000,
            }
          );
          _snackBarRef
            .afterDismissed()
            .subscribe((res) => this.subscriberEmail.reset());
        })
        .catch((err) => {
          console.log('Error message =>', err);
          alert('An error occured!');
        });
    }
  }

  getErrorMessage() {
    if (this.subscriberEmail.hasError('required')) {
      return 'Enter an e-mail address';
    }
    return this.subscriberEmail.hasError('email') ? 'Not a valid e-mail' : '';
  }
}
