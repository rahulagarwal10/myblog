import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

const BASE_URL='http://localhost:4000/';
const header={headers:new Headers({'Content-Type':'application/json'})}


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
    return this.http.delete(BASE_URL+selected+'/?id='+id,header).map(res=>res.json());

  }


}
