import { ConversionHistoryInterface } from 'interfaces/conversion-history';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ConversionInterface {
  id?: string;
  pixel_value: number;
  vector_value: number;
  conversion_time?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  conversion_history?: ConversionHistoryInterface[];
  user?: UserInterface;
  _count?: {
    conversion_history?: number;
  };
}

export interface ConversionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
