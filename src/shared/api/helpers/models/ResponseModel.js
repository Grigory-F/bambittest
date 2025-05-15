/**
 * * Модель описывающая ответ запроса
 */
export class ResponseModel {
  /**Статус запроса */
   IsSuccess = true;
  /**Элементы */
  Value;
  /**Ошибка */
  ErrorMessage;
  /**Код ошибки */
  ErrorCode;
  constructor(obj) {
    Object.assign(this, obj)
  }
}
