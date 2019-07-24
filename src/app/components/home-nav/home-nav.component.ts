<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private user: string;

  constructor(

    private cookieMan: CookieService,
    private location: Location
  ) { }

  ngOnInit() {

    if( this.cookieMan.check("user") ) {
     
      this.user = JSON.parse(this.cookieMan.get("user")).id_token.payload.given_name;
    }
    // If the user has no cookie, redirect them to the login page.
    else {

      this.location.replaceState('/home');
      // window.location.href = "https://partners-softwareaggov.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=1e6q1kkegc508q4je1u9mrhr78&redirect_uri=http://localhost:4200/callback";
    }
  }

}
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 536697794f432e2c0e52e924e451ef254cacb689
