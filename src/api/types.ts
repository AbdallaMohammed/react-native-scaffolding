export interface PaginateQuery<T> {
  data: T[];
  meta: {
    last_page: number;
  };
}
