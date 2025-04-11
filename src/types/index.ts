
export type Post = {
  id: string;
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
  title: string;
  author: string;
  summary: string;
  content: string;
  coverImageUrl: string;
};


export type QueryParams = Record<string, string | number | number[] | boolean | boolean[] | undefined | null>;

export interface APIError {
  error?: string;
  message?: string;
  errorCode?: string;
  statusCode: number;
}