import {Component, Input, OnInit} from '@angular/core';
import {BlogserviceyService} from "../../blogservicey.service"

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnInit {
  @Input('blogid') blogid;
  @Input('selected') selected;

  constructor(private request:BlogserviceyService) { }

  ngOnInit() {
  }
  getRating(star:number){
this.request.setRating(this.blogid,this.selected,star).subscribe();

  }


}
