import { UserRoleInterface } from 'interfaces/user-role';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  role_name: string;
  description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  user_role?: UserRoleInterface[];
  user?: UserInterface;
  _count?: {
    user_role?: number;
  };
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  role_name?: string;
  description?: string;
  user_id?: string;
}
