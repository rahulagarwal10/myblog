import {Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
import {BlogserviceyService} from "../../blogservicey.service";
import {IItem} from "./IItem";

@Component({
  selector: 'app-dispaly',
  templateUrl: './dispaly.component.html',
  styleUrls: ['./dispaly.component.css'],

})
export class DispalyComponent  {

  @Input('selected') selected;
  @Input('items') items;
  @Output() deleteData=new EventEmitter<number>();

  filteredItems:IItem[]=this.items;




  constructor(private request:BlogserviceyService) {


  }










  getData(){
    this.request.loadData(this.selected).subscribe((data)=>{this.items=data;})
  }



  deleteBlog(id:number){
    this.request.deleteData(id,this.selected).subscribe((data)=>{this.deleteData.emit(id);})

  }

updateBlog(id:number){

}
}
