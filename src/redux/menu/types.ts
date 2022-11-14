export type MenuItem = {
  name: string;
  children: string[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface MenuState {
  items: MenuItem[];
  status: Status;
}
