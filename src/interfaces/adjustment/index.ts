import { EstimateInterface } from 'interfaces/estimate';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdjustmentInterface {
  id?: string;
  estimate_id: string;
  user_id: string;
  description?: string;
  amount?: number;
  created_at?: any;
  updated_at?: any;

  estimate?: EstimateInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AdjustmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  estimate_id?: string;
  user_id?: string;
  description?: string;
}
