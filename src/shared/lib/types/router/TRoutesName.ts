import { routes } from '@/app/providers/router'
import { TGetListRouteNames } from './TGetListRouteNames'

/**
 * Определяем тип TRoutes как тип статической переменной routes
 */
type TRoutes = typeof routes
/**
 * Определяем тип TRoutesName для имен маршрутов, используя массив маршрутов
 */
export type TRoutesName = TGetListRouteNames<TRoutes>
