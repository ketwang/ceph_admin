/**
 * Created by ketwang on 17/10/5.
 */
import { Component, TemplateRef, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'pool.component.html'
})
export class PoolComponent implements OnInit {
  //for modal
  public showErr: boolean = false;
  public ErrMsg: string = "";

  //for loading
  public busy: Subscription;
  public clusterList: Array<Object>;
  public poolList: Array<Object>;
  public poolBusy: Subscription;
  public _clusterID: number;
  get clusterID(): number {
    return this._clusterID
  }
  set clusterID(value: number) {
    this._clusterID = value;
    this.listPool(value);
  }

  constructor(private http:Http) { }
  ngOnInit() {
    this.listCluster()
  }
  listCluster() {
    this.http.get('http://localhost:8000/frontend/getCluster/').subscribe(
      res => {this.clusterList = res.json(); console.log(this.clusterList)}
    )
  }
  listPool(id: number) {
    this.poolBusy = this.http.get('http://localhost:8000/frontend/getPools/'+id).subscribe(
      res => {this.poolList = res.json(); console.log(this.poolList)}
    )
  }
  UpdatePool() {
    this.busy = this.http.get('http://localhost:4200').subscribe();
  }
  DeletePool() {
    this.busy = this.http.get('http://localhost:4200').subscribe();
  }
  CreatePool() {
    this.busy = this.http.get('http://localhost:4200').subscribe();
  }

}
