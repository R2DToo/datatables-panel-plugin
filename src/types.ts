import { TableCellDisplayMode, TableSortByFieldState } from '@grafana/ui';

export interface PanelOptions {
  frameIndex: number;
  showHeader: boolean;
  showTypeIcons?: boolean;
  sortBy?: TableSortByFieldState[];
  footer?: TableFooterCalc; // TODO: should be array (options builder is limited)
}

export interface TableFooterCalc {
  show: boolean;
  reducer: string[]; // actually 1 value
  fields?: string[];
}

export const defaultPanelOptions: PanelOptions = {
  frameIndex: 0,
  showHeader: true,
  showTypeIcons: false,
  footer: {
    show: false,
    reducer: [],
  },
};

export interface PanelFieldConfig {
  width?: number;
  minWidth?: number;
  align?: string;
  displayMode?: TableCellDisplayMode;
  filterable?: boolean;
}

export const defaultPanelFieldConfig: PanelFieldConfig = {
  displayMode: TableCellDisplayMode.Auto,
  align: 'auto',
};
