export interface CustomError {
  status: number;
  error: {
    reason: string;
    location: string;
  };
}
