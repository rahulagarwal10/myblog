import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlogserviceyService} from "../../blogservicey.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  //items:Object[] = [];
  name:string;
  title:string;
  desc:string;
  image:File[];
  @Output() addBlog=new EventEmitter<Object>();
  @Input('selected') selected;

  constructor(private request:BlogserviceyService){

  }

  ngOnInit(){

  }


  addPost(name,title,desc,image:File[]) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var mo = months[m] + " " + date.getFullYear();


    let fileReader = new FileReader();
    fileReader.onload = (file) => {
      let str = fileReader.result;
      let post = {
        name: name,
        title: title,
        desc: desc,
        month: mo,
        date: d,
        logo: str,

      };
      this.request.postData(post, this.selected).subscribe((data => {
        this.addBlog.emit(data);
        console.log(post.name);
      }))
      this.name="";
      this.title="";
      this.desc="";
      this.image;




    }
    if (image[0])
      fileReader.readAsDataURL(image[0]);

    else {
      let post = {
        name: name,
        title: title,
        desc: desc,
        month: mo,
        date: d,
        logo: "",
        rating:0

      };
      this.request.postData(post, this.selected).subscribe((data => {
        //.items.push(data);
        this.addBlog.emit(data);
        console.log(post.name);
      }))

      this.name="";
      this.title="";
      this.desc="";
      this.image=null;
    }
  }



}
