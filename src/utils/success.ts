export const wrapSuccess = (result: any, message: string, status: number) => {
  return {
    status,
    success: true,
    message,
    data: result
  };
};
