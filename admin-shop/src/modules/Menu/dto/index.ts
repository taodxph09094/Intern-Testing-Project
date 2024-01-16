export interface Menu {
  name: string;
  path: string;
  icon: string;
  isChildren: boolean;
  status: boolean;
  children: Menu[];
}
