import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BlogserviceyService} from "../../blogservicey.service"

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnChanges {
  @Input('blogid') blogid;
  @Input('selected') selected;
  @Input('rating') rating: number;
  starWidth: number;

  constructor(private request:BlogserviceyService) { }

  ngOnChanges() {

    this.starWidth = this.rating * 86 / 5;

      }
  rate(star:number,blogid){
this.request.setRating(blogid,this.selected,star).subscribe();

  }

  numberlist(num) {
    let list = [];
    for ( let i = 1; i <= num; i++) {
      list.push(i + 1);
    }
    return list;
  }
  ishalf(num) {
    num = num * 2;
    return ( num % 2 !== 0);
  }
  checkEmpty(x: any) {
    for ( let a in x) {
      return false;
    }
    return true;
  }
  reverse(x: any) {
    if (! this.checkEmpty(x)){
      console.log('not empty')
      return x.reverse();
    }
    else {
      console.log('empty');
      return x;
    }
  }


}
