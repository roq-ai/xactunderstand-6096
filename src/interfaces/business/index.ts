import { TeamInterface } from 'interfaces/team';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  team?: TeamInterface[];
  user?: UserInterface[];

  _count?: {
    team?: number;
    user?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  name?: string;
}
