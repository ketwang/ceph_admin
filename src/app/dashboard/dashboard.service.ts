/**
 * Created by ketwang on 17/10/26.
 */

export class ClusterCapac {
  id: number;
  total: number;
  used: number;
  objectsNum: number;
  status: string;
  created_at: string;
  cluster: number
}

export class Cluster {
  id: number;
  name: string;
  api: string;
  desciption: string;
  created_at: string;
  updated_at: string;
}

export class OsdCapac {
  id: number;
  crush_weight: number;
  reweight: number;
  kb_avail: number;
  kb_used: number;
  kb: number;
  pgs: number;
  utilization: number;
}

export class Osd {
  id: number;
  name: string;
  osd_id: number;
  created_at: string;
  updated_at: string;
  comeFrom: string;
  osdCapac: OsdCapac;
}

export class PoolCapac {
  id: number;
  bytes_used: number;
  max_avail: number;
  objectsNum: number;
  quota_objects: number;
  quota_bytes: number;
  created_at: number;
}

/*export class Pool {
  id: number;
  name: string;
  pool_id: number;
  created_at: string;
  updated_at: string;
  comeFrom: string;
  poolCapac: PoolCapac
}*/


export class Pool {
  id: number;
  pool_name: string;
  pool_id: number;
  type: number;
  size: number;
  min_size: number;
  pg_num: number;
  pg_placement_num: number;
  crash_replay_interval: number;
  quota_max_bytes: number;
  quota_max_objects: number;
  created_at: string;
  updated_at: string;
  comeFrom: string;
  rule: number;
  tier_pool: string;
  cluster: number;
}


