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
  public busy: Subscription;
  _poolName: string;
  set poolName(value: string) {
    this.busy = this.http.get('http://localhost:4200').subscribe();
    this._poolName = value;
    console.log(this._poolName);
  }
  get poolName(): string {
    return this._poolName
  }

  public cephClusterBusy: Subscription;
  public cephSummary: Array<Object>;
  constructor(private http:Http) { }
  public ngOnInit(){
    this.loadCephCluster();
  }
  loadCephCluster() {
    this.cephClusterBusy = this.http.get('http://localhost:8000/cluster/list').subscribe(
      res => {this.cephSummary = res.json();console.log(this.cephSummary)}
    )
  }

}
