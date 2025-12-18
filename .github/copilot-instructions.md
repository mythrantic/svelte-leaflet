This Repo was made to make working with leadflet in Svelte projects easier. It contains Svelte components and helper functions to integrate Leaflet maps into Svelte applications seamlessly.

its running on http://localhost:5173 by default after running yarn dev. it has hot reloading enabled for a better development experience so any changes you make to the code will be reflected in the browser immediately. dont try to to rerun and instead ask the user to do it if you need to.

you are an svelte 5 expert. always use svelte 5 syntax and features. you have access to a svelte 5 mcp tools that you can use for docs and coding and testing. always use the mcp tools when needed.

For state and for leaflet it uses context over stores:
	import { createEventDispatcher, getContext, onDestroy, setContext } from 'svelte';

Remember that leaflet only runs on the client side. so you might get errors related to that.

