/**
 * Created by ketwang on 17/10/5.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoolComponent } from './pool/pool.component';
import { RbdComponent } from './rbd/rbd.component';
import { ClusterComponent } from './cluster/cluster.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Operation'
    },
    children: [
      {
        path: 'cluster',
        component: ClusterComponent,
        data: {
          title: 'Cluster'
        }
      },
      {
        path: 'pool',
        component: PoolComponent,
        data: {
          title: 'Pool'
        }
      },
      {
        path: 'rbd',
        component: RbdComponent,
        data: {
          title: 'Rbd'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule {}
