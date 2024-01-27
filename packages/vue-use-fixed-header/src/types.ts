import type { Ref, ComputedRef } from 'vue'

export type MaybeTemplateRef = HTMLElement | null | Ref<HTMLElement | null>

export interface UseFixedHeaderOptions<T = any> {
   /**
    * Scrolling container. Matches `document.documentElement` if `null`.
    *
    * @default null
    */
   root: MaybeTemplateRef
   /**
    * Signal without `.value` (ref or computed) to be watched
    * for automatic behavior toggling.
    *
    * @default null
    */
   watch: Ref<T> | ComputedRef<T>
   /**
    * Whether to transition `opacity` property from 0 to 1
    * and vice versa along with the `transform` property
    *
    * @default false
    */
   transitionOpacity: boolean | Ref<boolean> | ComputedRef<boolean>
}
