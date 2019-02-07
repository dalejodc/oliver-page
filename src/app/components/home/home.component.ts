import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.active();
  }

  ngOnDestroy(): void {
    var element = document.getElementById("home");
    element.classList.remove("active");
  }

  active() {
    var element = document.getElementById("home");
    element.classList.add("active");
  }
}
