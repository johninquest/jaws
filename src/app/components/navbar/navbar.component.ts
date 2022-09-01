import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  underConstruction() {
    alert('Coming soon ...');
  }

  goToInstagramPage() {
    let _targetUrl: string = 'https://www.instagram.com/jaief.asong';
    window.open(_targetUrl, '_blank');
    window.focus();
  }
}
