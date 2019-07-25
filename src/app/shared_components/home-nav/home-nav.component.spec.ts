<<<<<<< HEAD:src/app/shared_components/home-nav/home-nav.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './home-nav.component';

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
=======
import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

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

      this.location.replaceState('');
      // window.location.href = "https://partners-softwareaggov.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=1e6q1kkegc508q4je1u9mrhr78&redirect_uri=http://localhost:4200/callback";
    }
  }

}
>>>>>>> 0031416861d11034e59fe14054d2d841ec9eff04:src/app/components/home-nav/home-nav.component.ts
