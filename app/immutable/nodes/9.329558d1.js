import{s as M,f as v,g as O,h as x,d,j,i as g,u as b,p as w,a as h,c as _}from"../chunks/scheduler.3fa55d27.js";import{S as L,i as y,b as l,d as p,m,a as f,t as c,e as $}from"../chunks/index.79263183.js";import{a as S,T as Z,C as T,P as z,M as C}from"../chunks/Properties.b895d4e2.js";function N(s){let t,a;return t=new Z({props:{url:U,options:s[2]}}),{c(){l(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,o){m(t,e,o),a=!0},p:b,i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){c(t.$$.fragment,e),a=!1},d(e){$(t,e)}}}function P(s){let t,a,e,o={options:s[1],$$slots:{default:[N]},$$scope:{ctx:s}};return a=new S({props:o}),s[3](a),{c(){t=v("div"),l(a.$$.fragment),this.h()},l(r){t=O(r,"DIV",{class:!0});var i=x(t);p(a.$$.fragment,i),i.forEach(d),this.h()},h(){j(t,"class","mb-4 h-96")},m(r,i){g(r,t,i),m(a,t,null),e=!0},p(r,[i]){const n={};i&16&&(n.$$scope={dirty:i,ctx:r}),a.$set(n)},i(r){e||(f(a.$$.fragment,r),e=!0)},o(r){c(a.$$.fragment,r),e=!1},d(r){r&&d(t),s[3](null),$(a)}}}const U="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function k(s,t,a){const e={center:[1.364917,103.822872],zoom:11},o={minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"};let r;function i(n){w[n?"unshift":"push"](()=>{r=n,a(0,r)})}return[r,e,o,i]}class D extends L{constructor(t){super(),y(this,t,k,P,M,{})}}const E=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, TileLayer } from '$lib/index';

	const mapOptions = {
		center: [1.364917, 103.822872],
		zoom: 11
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};

	let leafletMap;
<\/script>

<div class="mb-4 h-96">
	<LeafletMap bind:this={leafletMap} options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
	</LeafletMap>
</div>

`,lang:"svelte"}}];function q(s){let t,a,e,o,r,i;return t=new D({}),e=new z({props:{properties:s[0]}}),r=new C({props:{methods:s[1]}}),{c(){l(t.$$.fragment),a=h(),l(e.$$.fragment),o=h(),l(r.$$.fragment)},l(n){p(t.$$.fragment,n),a=_(n),p(e.$$.fragment,n),o=_(n),p(r.$$.fragment,n)},m(n,u){m(t,n,u),g(n,a,u),m(e,n,u),g(n,o,u),m(r,n,u),i=!0},p:b,i(n){i||(f(t.$$.fragment,n),f(e.$$.fragment,n),f(r.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),c(r.$$.fragment,n),i=!1},d(n){n&&(d(a),d(o)),$(t,n),$(e,n),$(r,n)}}}function I(s){let t,a;return t=new T({props:{title:"LeafletMap",url:"leaflet-map",jsonData:E,$$slots:{default:[q]},$$scope:{ctx:s}}}),{c(){l(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,o){m(t,e,o),a=!0},p(e,[o]){const r={};o&4&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){c(t.$$.fragment,e),a=!1},d(e){$(t,e)}}}function R(s){return[{options:{type:"Object",default:"undefined",description:"See https://leafletjs.com/reference.html#map-option"}},{getMap:{description:"Returns the underlying Leaflet Map object instance.",link:"https://leafletjs.com/reference.html#map-factory"}}]}class F extends L{constructor(t){super(),y(this,t,R,I,M,{})}}export{F as component};
