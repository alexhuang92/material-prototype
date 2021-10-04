export interface FormSearchRequest {
  queryText: string;

  sort: string;
  order: string;
  pageIndex: number;
  pageSize: number;
}
