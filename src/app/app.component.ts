import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import {DataServiceService} from './services/data-service.service';
import {Router} from '@angular/router';

// const socket = io('http://localhost:8080');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navbarOpen = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  showGraphs() {
    return this.route.navigate(['/graphs']);
  }
}
