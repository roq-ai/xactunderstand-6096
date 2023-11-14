import { TeamMemberInterface } from 'interfaces/team-member';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  business_id: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  team_member?: TeamMemberInterface[];
  business?: BusinessInterface;
  _count?: {
    team_member?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
  name?: string;
  description?: string;
}
