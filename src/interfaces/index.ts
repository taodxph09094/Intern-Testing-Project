export interface PageData<T> {
  page?: number;
  size?: number;
  total?: number;
  data?: T[];
}

