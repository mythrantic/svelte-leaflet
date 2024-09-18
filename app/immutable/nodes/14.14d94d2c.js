import{s as L,f as M,g as x,h as C,d as g,j as A,i as _,a as d,c as h,l as S,m as z,G as Z,u as P}from"../chunks/scheduler.3fa55d27.js";import{S as y,i as k,b as $,d as m,m as l,a as f,t as c,e as u}from"../chunks/index.79263183.js";import{a as j,T as I,C as T,P as U,M as B}from"../chunks/Properties.b895d4e2.js";import{M as O}from"../chunks/Marker.e34bb875.js";import{P as w}from"../chunks/Popup.c09514a5.js";import{I as G}from"../chunks/Icon.d447854e.js";function N(a){let t;return{c(){t=S("Gardens by the Bay")},l(o){t=z(o,"Gardens by the Bay")},m(o,e){_(o,t,e)},d(o){o&&g(t)}}}function D(a){let t,o;return t=new w({props:{$$slots:{default:[N]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){l(t,e,s),o=!0},p(e,s){const r={};s&8&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){o||(f(t.$$.fragment,e),o=!0)},o(e){c(t.$$.fragment,e),o=!1},d(e){u(t,e)}}}function E(a){let t,o="Changi Airport";return{c(){t=M("b"),t.textContent=o},l(e){t=x(e,"B",{"data-svelte-h":!0}),Z(t)!=="svelte-m2lant"&&(t.textContent=o)},m(e,s){_(e,t,s)},p:P,d(e){e&&g(t)}}}function q(a){let t,o,e,s;return t=new G({props:{options:a[2]}}),e=new w({props:{$$slots:{default:[E]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment),o=d(),$(e.$$.fragment)},l(r){m(t.$$.fragment,r),o=h(r),m(e.$$.fragment,r)},m(r,p){l(t,r,p),_(r,o,p),l(e,r,p),s=!0},p(r,p){const n={};p&8&&(n.$$scope={dirty:p,ctx:r}),e.$set(n)},i(r){s||(f(t.$$.fragment,r),f(e.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),s=!1},d(r){r&&g(o),u(t,r),u(e,r)}}}function R(a){let t,o,e,s,r,p;return t=new I({props:{url:F,options:a[1]}}),e=new O({props:{latLng:[1.282375,103.864273],$$slots:{default:[D]},$$scope:{ctx:a}}}),r=new O({props:{latLng:[1.359167,103.989441],$$slots:{default:[q]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment),o=d(),$(e.$$.fragment),s=d(),$(r.$$.fragment)},l(n){m(t.$$.fragment,n),o=h(n),m(e.$$.fragment,n),s=h(n),m(r.$$.fragment,n)},m(n,i){l(t,n,i),_(n,o,i),l(e,n,i),_(n,s,i),l(r,n,i),p=!0},p(n,i){const b={};i&8&&(b.$$scope={dirty:i,ctx:n}),e.$set(b);const v={};i&8&&(v.$$scope={dirty:i,ctx:n}),r.$set(v)},i(n){p||(f(t.$$.fragment,n),f(e.$$.fragment,n),f(r.$$.fragment,n),p=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),c(r.$$.fragment,n),p=!1},d(n){n&&(g(o),g(s)),u(t,n),u(e,n),u(r,n)}}}function V(a){let t,o,e;return o=new j({props:{options:a[0],$$slots:{default:[R]},$$scope:{ctx:a}}}),{c(){t=M("div"),$(o.$$.fragment),this.h()},l(s){t=x(s,"DIV",{class:!0});var r=C(t);m(o.$$.fragment,r),r.forEach(g),this.h()},h(){A(t,"class","mb-4 h-96")},m(s,r){_(s,t,r),l(o,t,null),e=!0},p(s,[r]){const p={};r&8&&(p.$$scope={dirty:r,ctx:s}),o.$set(p)},i(s){e||(f(o.$$.fragment,s),e=!0)},o(s){c(o.$$.fragment,s),e=!1},d(s){s&&g(t),u(o)}}}const F="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function H(a){return[{center:[1.364917,103.822872],zoom:11},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},{iconUrl:"icons/airport.svg",iconSize:[41,41],iconAnchor:[20,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28]}]}class J extends y{constructor(t){super(),k(this,t,H,V,L,{})}}const K=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, Icon, Marker, Popup, TileLayer } from '$lib/index';

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

	const iconOptions = {
		iconUrl: 'icons/airport.svg',
		iconSize: [41, 41],
		iconAnchor: [20, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28]
	};
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Marker latLng={[1.282375, 103.864273]}>
			<Popup>Gardens by the Bay</Popup>
		</Marker>
		<Marker latLng={[1.359167, 103.989441]}>
			<Icon options={iconOptions} />
			<Popup>
				<b>Changi Airport</b>
			</Popup>
		</Marker>
	</LeafletMap>
</div>

`,lang:"svelte"}}];function Q(a){let t,o,e,s,r,p;return t=new J({}),e=new U({props:{properties:a[0]}}),r=new B({props:{methods:a[1]}}),{c(){$(t.$$.fragment),o=d(),$(e.$$.fragment),s=d(),$(r.$$.fragment)},l(n){m(t.$$.fragment,n),o=h(n),m(e.$$.fragment,n),s=h(n),m(r.$$.fragment,n)},m(n,i){l(t,n,i),_(n,o,i),l(e,n,i),_(n,s,i),l(r,n,i),p=!0},p:P,i(n){p||(f(t.$$.fragment,n),f(e.$$.fragment,n),f(r.$$.fragment,n),p=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),c(r.$$.fragment,n),p=!1},d(n){n&&(g(o),g(s)),u(t,n),u(e,n),u(r,n)}}}function W(a){let t,o;return t=new T({props:{title:"Popup",url:"popup",jsonData:K,$$slots:{default:[Q]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){l(t,e,s),o=!0},p(e,[s]){const r={};s&4&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){o||(f(t.$$.fragment,e),o=!0)},o(e){c(t.$$.fragment,e),o=!1},d(e){u(t,e)}}}function X(a){return[{options:{type:"Object",default:"undefined",description:"Options."}},{getPopup:{description:"Returns the underlying Leaflet Popup object instance.",link:"https://leafletjs.com/reference.html#popup"}}]}class st extends y{constructor(t){super(),k(this,t,X,W,L,{})}}export{st as component};
