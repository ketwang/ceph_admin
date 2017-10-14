/**
 * Created by ketwang on 17/10/5.
 */

import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PoolComponent } from './pool/pool.component';
import { RbdComponent } from './rbd/rbd.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BusyModule} from 'angular2-busy';



// Components Routing
import { OperationRoutingModule } from './operation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OperationRoutingModule,
    ModalModule.forRoot(),
    BusyModule,
  ],
  declarations: [
    ClusterComponent,
    PoolComponent,
    RbdComponent
  ]
})
export class OperationModule { }

