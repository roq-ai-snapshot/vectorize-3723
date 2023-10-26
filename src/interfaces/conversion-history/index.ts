import { ConversionInterface } from 'interfaces/conversion';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ConversionHistoryInterface {
  id?: string;
  conversion_id: string;
  user_id: string;
  timestamp?: any;
  created_at?: any;
  updated_at?: any;

  conversion?: ConversionInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ConversionHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  conversion_id?: string;
  user_id?: string;
}
