export interface Coffee {
  blend_name: string;
  id: number;
  intensifier: string;
  notes: string;
  origin: string;
  uid: string;
  variety: string;
}

export type FormattedCoffee = Omit<Coffee, 'notes'> & {
  notes: string[];
}

export interface LoadingState {
  cardLoading: boolean;
  pictureLoading: boolean;
}
