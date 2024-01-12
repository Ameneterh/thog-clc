export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCOde = statusCode;
  error.message = message;

  return error;
};
