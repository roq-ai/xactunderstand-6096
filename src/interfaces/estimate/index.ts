import { AdjustmentInterface } from 'interfaces/adjustment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EstimateInterface {
  id?: string;
  user_id: string;
  title: string;
  description?: string;
  status?: string;
  amount?: number;
  created_at?: any;
  updated_at?: any;
  adjustment?: AdjustmentInterface[];
  user?: UserInterface;
  _count?: {
    adjustment?: number;
  };
}

export interface EstimateGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  title?: string;
  description?: string;
  status?: string;
}
