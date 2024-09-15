import type { ModuleHooks } from './module'

declare module '@nuxt/schema' {
  interface NuxtHooks extends ModuleHooks {}
}

declare module 'nuxt/schema' {
  interface NuxtHooks extends ModuleHooks {}
}

export { type ModuleHooks, type ModuleOptions, default } from './module'
