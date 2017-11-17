import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnInit {
  @Input('blogid') blogid;

  constructor() { }

  ngOnInit() {
  }
  getRating(star:number){


  }


}
