import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

const BASE_URL='http://localhost:4000/';
const header={headers:new Headers({'Content-Type':'application/json'})}
const header1 = { headers: new Headers({'Content-Type': 'application/json' , 'Accept': 'q=0.8;application/json;q=0.9'})};



@Injectable()
export class BlogserviceyService {
  constructor(private http:Http){}


  postData(data,selected){
    return this.http.post(BASE_URL+selected,data,header).map(res=>res.json());
  }

  loadData(data){
    console.log(data);
    console.log(BASE_URL);
    return this.http.get(BASE_URL+data)
      .map(res=>res.json())
  }

  deleteData(id,selected){
    return this.http.delete(BASE_URL+selected+"/"+id,header).map(res=>res.json());

  }

  setRating(id,selected,stars){
    let data={
      id:id,
      rating:stars
    }
    return this.http.patch(BASE_URL+selected+"/"+id,data,header1).map(res=>res.json());

  }


}
