import { FormSearchResult } from './form-search-result.model';

export interface FormSearchResponse {
  count: number;
  results: FormSearchResult[];
}
