import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';
import { Cluster,ClusterCapac} from './dashboard.service';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  //constructor( ) { }
  public cephClusterBusy: Subscription;
  public cephClusterDetailBusy: Subscription;
  public cephClusterPoolDetailBusy: Subscription;
  public cephClusterOSDDetailBusy: Subscription;
  public cephCrushBusy: Subscription;


  public showErr: boolean = false;
  public errMsg: string = '';
  //cephSummary
  //public cephSummary: Array<Object>;
  public cephSummary: Array<Cluster>;
  public cephLastestCapac: ClusterCapac;
  public pools: Array<any>;
  public osds: Array<any>;
  public currentCluster: Object;
  public crushSet: Array<Object>;
  public cephPoolSummary: Array<Object>;
  public cephOSDSummary: Array<Object>;
  constructor(private http: Http){
  }
  setErr(msg: string) {
    this.showErr = true;
    this.errMsg = msg;
  }
  initErr() {
    this.showErr = false;
  }
  loadCephSummary() {
    this.cephClusterBusy = this.http.get('http://localhost:8000/frontend/getCluster/').subscribe(
      res => {res.status == 200 ? this.cephSummary = res.json() : this.setErr(res.json())}
    )
  }
  loadCephInfo(id: string) {
    this.cephClusterDetailBusy = this.http.get('http://localhost:8000/frontend/getClusterCapac/'+id).subscribe(
      res => {this.cephLastestCapac = res.json();console.log(this.cephLastestCapac)}
    );
  }
  loadCephPoolInfo(id: string) {
    this.cephClusterPoolDetailBusy = this.http.get('http://localhost:8000/frontend/getPools/'+id).subscribe(
      res => {this.pools = res.json();console.log(this.pools)}
    );
  }
  loadCephOSDInfo(id: string) {
    this.cephClusterOSDDetailBusy = this.http.get('http://localhost:8000/frontend/getOsds/'+id).subscribe(
      res => {this.osds = res.json();console.log(this.osds)}
    );
  }
  loadCrushSet(id: string) {
    this.cephCrushBusy = this.http.get('http://localhost:8000/frontend/getCrushTree/'+id).subscribe(
      res => {this.crushSet = res.json(); console.log(this.crushSet)}
    );
  }



  public busy: Subscription;

  ngOnInit(): void {
    this.loadCephSummary();
  }
}
