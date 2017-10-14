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

  constructor(private http:Http) { }
  ngOnInit() {
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
