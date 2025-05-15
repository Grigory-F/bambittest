import axios from 'axios';


/* Общий обработчик ошибок */
export function httpError(error, resultOfRequest) {
  if (axios.isAxiosError(error)) {
    resultOfRequest.ErrorCode = error?.code;
    resultOfRequest.ErrorMessage = error?.message;
  } else {
    resultOfRequest.ErrorCode = 500;
    resultOfRequest.ErrorMessage = error?.message;
  }
  resultOfRequest.IsSuccess = false;
  console.error('FETCH ERROR', error);
  return resultOfRequest;
}
