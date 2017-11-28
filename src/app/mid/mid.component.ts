import { Component, OnInit } from '@angular/core';
import {BlogserviceyService} from "../blogservicey.service"
import {IItem} from "./dispaly/IItem";

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.css']
})
export class MidComponent implements  OnInit{
  constructor(private request:BlogserviceyService){}
  items:Object[];



  selected:string="Music";
  filteredItems:any[];
  categoryItems:Object[]=[
    {
      item: "Audience Persons",
      description:"dnkjndjkwn"
    },
    {

      item:"Cricket",
      description:"about sbjhbshxj"

    },
    {
      item:"Social Activity",
      description:"resume djkdnjk"

    },
    {
      item:"Bollywood Masala",
      description:"services cjnjcbjbjk"

    },
    {
      item:"Entertainment",
      description:"Contact"

    },
    {
      item:"Music"
    },
    {
      item:"Sports"
    },
    {
      item:"Puzzles"
    },
    {
     item:"Medical"
    },
    {
      item:"Food"
    },
    {
      item:"WildLife"
    },
    {
      item:"Techical"
    }
  ]
  ngOnInit() {
    this.request.loadData(this.selected)
      .subscribe((data) => {
        this.items = data;
        // this.filteredItems=this.items;


      })
  }

  select(name:string)
  {
    this.selected=name;
    this.request.loadData(this.selected)
      .subscribe((data)=>{
        this.items=data;

    //console.log(name);
  })}
  addBlog(data){
    this.items.push(data);
  }

  search(value:string){
    console.log(this.items);
    this.request.loadData(this.selected)
      .subscribe((data) => {
        this.items = value.length>0?data.filter(function (item:IItem){return item.title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase())!=-1

        } ):data;
        // this.filteredItems=this.items;


      })


  }

  deleteData(id){
    this.items=this.items.filter(function (item:IItem){
      return item.id!=id;
    } )


}



}
