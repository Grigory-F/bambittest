import { TAppRouterRecord } from './TAppRouterRecord'
import { TGetListRouteNames } from './TGetListRouteNames'

/**
 * Определяем тип TGetRouteName, который возвращает
 * имя маршрута или имена дочерних маршрутов
 */
export type TGetRouteName<T extends TAppRouterRecord> = T extends {
  children: readonly TAppRouterRecord[]
}
  ? T['name'] | TGetListRouteNames<T['children']>
  : T['name']
