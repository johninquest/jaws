import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';

declare const gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(_router: Router) {
    const navEndEvent$ = _router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: any) => {
      gtag('config', 'G-RYMEE5S8LR', { page_path: e.urlAfterRedirects });
    });
  }
}
