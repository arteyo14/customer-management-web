export interface IPagination<T> {
  items: T;
  page: number;
  limit: number;
  total: number;
  total_pages: number;
}
