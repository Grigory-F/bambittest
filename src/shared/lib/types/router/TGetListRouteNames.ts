import { TAppRouterRecord } from './TAppRouterRecord'
import { TGetRouteName } from './TGetRouteName'

/**
 * Определяем тип TGetListRouteNames, который извлекает 
 * имена всех маршрутов из массива TAppRouterRecord
 */
export type TGetListRouteNames<T extends readonly TAppRouterRecord[]> =
  TGetRouteName<T[number]>
