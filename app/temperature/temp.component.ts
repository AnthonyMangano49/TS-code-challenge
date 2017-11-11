import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './app/temperature/temp.component.html',
  styleUrls: ['./app/temperature/temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitTemp(input: number){
    alert(input);
  }
}
