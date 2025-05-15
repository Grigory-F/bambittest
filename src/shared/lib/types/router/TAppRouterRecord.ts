import { RouteRecordRaw } from 'vue-router'

/**
 * Определяем тип TAppRouterRecord, который представляет 
 * собой запись маршрута с обязательным именем и опциональными дочерними маршрутами
 */
export type TAppRouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  /**
   * Обязательное имя маршрута
   */
  name: string
  /**
   * Опциональный массив дочерних маршрутов
   */
  children?: readonly TAppRouterRecord[]
}
