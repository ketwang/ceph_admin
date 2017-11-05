/**
 * Created by ketwang on 17/10/5.
 */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'rbd.component.html'
})
export class RbdComponent implements OnInit{

  public Busy: Subscription;


  public clusterList: Array<Object>;
  public _clusterID: number;
  set clusterID(value: number) {
    this._clusterID = value;
    this.listPool(value);
  }
  public poolList: Array<Object>;
  public _poolID: number;
  set poolID(value: number) {
    this._poolID = value;
    this.listRBD(this._poolID);
  }

  public imageList: Array<Object>;

  constructor(private http:Http) { }
  public ngOnInit(){
    this.listCluster()
  }
  listCluster() {
    this.http.get('http://localhost:8000/frontend/getCluster/').subscribe(
      res => {this.clusterList = res.json(); console.log(this.clusterList)}
    )
  }


  listPool(id: number) {
    this.Busy = this.http.get('http://localhost:8000/frontend/getPools/'+id).subscribe(
      res => {this.poolList = res.json(); console.log(this.poolList)}
    )
  }

  listRBD(poolID: number) {
    this.Busy = this.http.get('http://localhost:8000/frontend/getImages/'+poolID).subscribe(
      res => {this.imageList = res.json(); console.log(this.imageList)}
    )
  }

}
