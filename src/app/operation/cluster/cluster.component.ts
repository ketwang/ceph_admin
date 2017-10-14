/**
 * Created by ketwang on 17/10/8.
 */
/**
 * Created by ketwang on 17/10/5.
 */
import { Component, TemplateRef, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: 'cluster.component.html'
})
export class ClusterComponent implements OnInit {
  //for modal
  public showErr: boolean = false;
  public ErrMsg: string = "";

  //for new cluster
  public currentCluster: Object = {
    id: '',
    name: '',
    api: '',
    description: ''
  };
  public ClusterObject: Object = {
   name: '',
   api: '',
    description: ''
  }
  public newCluster: Object = {
    name: '',
    api: '',
    description: ''
  };

  //for loading
  public busy: Subscription;
  public ListBusy: Subscription;
  public CreateBusy: Subscription;
  public DeleteBusy: Subscription;

  constructor(private http:Http) { }
  ngOnInit() {
    this.ListPool();
  }
  initErr(){
    this.showErr = false;
    this.ErrMsg = '';
  }
  setErr(errMsg: string) {
    console.log(errMsg);
    this.showErr = true;
    this.ErrMsg = errMsg;
  }

  public ClusterList: Array<Object>;
  ListPool() {
    this.initErr();
    this.ListBusy = this.http.get('http://localhost:8000/cluster/list').subscribe(
      res=> {this.ClusterList = res.json(); console.log(res)}
    );
    // this.ClusterList = res.json()
    //console.log(this.ClusterList);
  }
  UpdatePool() {
    this.initErr();
    this.busy = this.http.get('http://localhost:4200').subscribe();
  }
  DeletePool(modalDelete: any) {
    this.initErr();
    this.DeleteBusy = this.http.get('http://localhost:8000/cluster/delete/'+this.currentCluster["id"])
      .subscribe(
        res=> { res.status != 200 ? this.setErr(res.json()): modalDelete.hide();this.ListPool()}
      );
  }
  CreatePool(modalTemplate: any) {
    this.initErr();
    if (this.newCluster['name'] != '' &&
      this.newCluster['api'] != '' &&
    this.newCluster['description'] != '') {
      let body = JSON.stringify(this.newCluster);
      //let headers = new Headers({
      //  'Content-Type': 'application/json'
      //});
      //let options = new RequestOptions({headers: headers});
      this.CreateBusy = this.http.post('http://localhost:8000/cluster/create', body)
        .subscribe(
          res=> { res.status != 200 ? this.setErr(res.json()) : modalTemplate.hide();this.newCluster=this.ClusterObject;this.ListPool()}
        );
    } else {
      this.showErr = true;
      this.ErrMsg = '不可为空';
    }
  }

}
