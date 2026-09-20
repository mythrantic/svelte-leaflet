/**
 * Shared route state for the documentation/demo components.
 *
 * Originally a Svelte 4 `writable` store with `export let` bindings. That was
 * inconsistent with the rest of this package (Svelte 5 runes) and, because
 * stores are consumed with the `$store` prefix, it read like a component-local
 * value. It is now a runes module so the whole package targets one reactivity
 * model.
 *
 * This is demo-only internal state: it is not re-exported from the package
 * entry point and therefore not part of the public API.
 */
export const routeStore = $state({
	routeCoordinates: [],
	summary: null,
	instructions: null
});
