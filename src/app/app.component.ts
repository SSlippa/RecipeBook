import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB41beQfEifbEihEW_juLXMO6Mu5yWdNzo',
      authDomain: 'recipebook-b8c2f.firebaseapp.com'
    });
  }
}
