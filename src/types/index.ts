export type QueryParams = Record<string, string | number | number[] | boolean | boolean[] | undefined | null>;

export interface APIError {
  error?: string;
  message?: string;
  errorCode?: string;
  statusCode: number;
}