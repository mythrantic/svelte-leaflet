import{s as T,f as h,g as v,h as Z,d as g,j,i as _,a as d,c as b,l as k,m as w,G as O,u as x}from"../chunks/scheduler.3fa55d27.js";import{S as C,i as P,b as i,d as l,m as f,a as m,t as u,e as c}from"../chunks/index.79263183.js";import{a as S,T as z,C as A,P as N,M as U}from"../chunks/Properties.b895d4e2.js";import{M}from"../chunks/Marker.e34bb875.js";import{P as B}from"../chunks/Popup.c09514a5.js";import{T as G}from"../chunks/Tooltip.9799fd49.js";function D(p){let t;return{c(){t=k("Gardens by the Bay")},l(o){t=w(o,"Gardens by the Bay")},m(o,n){_(o,t,n)},d(o){o&&g(t)}}}function E(p){let t;return{c(){t=k("Gardens by the Bay")},l(o){t=w(o,"Gardens by the Bay")},m(o,n){_(o,t,n)},d(o){o&&g(t)}}}function q(p){let t,o,n,s;return t=new B({props:{$$slots:{default:[D]},$$scope:{ctx:p}}}),n=new G({props:{$$slots:{default:[E]},$$scope:{ctx:p}}}),{c(){i(t.$$.fragment),o=d(),i(n.$$.fragment)},l(e){l(t.$$.fragment,e),o=b(e),l(n.$$.fragment,e)},m(e,a){f(t,e,a),_(e,o,a),f(n,e,a),s=!0},p(e,a){const r={};a&4&&(r.$$scope={dirty:a,ctx:e}),t.$set(r);const $={};a&4&&($.$$scope={dirty:a,ctx:e}),n.$set($)},i(e){s||(m(t.$$.fragment,e),m(n.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),u(n.$$.fragment,e),s=!1},d(e){e&&g(o),c(t,e),c(n,e)}}}function I(p){let t,o="gardemoen Airport";return{c(){t=h("b"),t.textContent=o},l(n){t=v(n,"B",{"data-svelte-h":!0}),O(t)!=="svelte-ii90ht"&&(t.textContent=o)},m(n,s){_(n,t,s)},p:x,d(n){n&&g(t)}}}function R(p){let t,o="kristiansand Airport";return{c(){t=h("b"),t.textContent=o},l(n){t=v(n,"B",{"data-svelte-h":!0}),O(t)!=="svelte-op2awo"&&(t.textContent=o)},m(n,s){_(n,t,s)},p:x,d(n){n&&g(t)}}}function V(p){let t,o,n,s;return t=new B({props:{$$slots:{default:[I]},$$scope:{ctx:p}}}),n=new G({props:{$$slots:{default:[R]},$$scope:{ctx:p}}}),{c(){i(t.$$.fragment),o=d(),i(n.$$.fragment)},l(e){l(t.$$.fragment,e),o=b(e),l(n.$$.fragment,e)},m(e,a){f(t,e,a),_(e,o,a),f(n,e,a),s=!0},p(e,a){const r={};a&4&&(r.$$scope={dirty:a,ctx:e}),t.$set(r);const $={};a&4&&($.$$scope={dirty:a,ctx:e}),n.$set($)},i(e){s||(m(t.$$.fragment,e),m(n.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),u(n.$$.fragment,e),s=!1},d(e){e&&g(o),c(t,e),c(n,e)}}}function F(p){let t,o,n,s,e,a;return t=new z({props:{url:J,options:p[1]}}),n=new M({props:{latLng:[1.282375,103.864273],$$slots:{default:[q]},$$scope:{ctx:p}}}),e=new M({props:{latLng:[1.359167,103.989441],$$slots:{default:[V]},$$scope:{ctx:p}}}),{c(){i(t.$$.fragment),o=d(),i(n.$$.fragment),s=d(),i(e.$$.fragment)},l(r){l(t.$$.fragment,r),o=b(r),l(n.$$.fragment,r),s=b(r),l(e.$$.fragment,r)},m(r,$){f(t,r,$),_(r,o,$),f(n,r,$),_(r,s,$),f(e,r,$),a=!0},p(r,$){const L={};$&4&&(L.$$scope={dirty:$,ctx:r}),n.$set(L);const y={};$&4&&(y.$$scope={dirty:$,ctx:r}),e.$set(y)},i(r){a||(m(t.$$.fragment,r),m(n.$$.fragment,r),m(e.$$.fragment,r),a=!0)},o(r){u(t.$$.fragment,r),u(n.$$.fragment,r),u(e.$$.fragment,r),a=!1},d(r){r&&(g(o),g(s)),c(t,r),c(n,r),c(e,r)}}}function H(p){let t,o,n;return o=new S({props:{options:p[0],$$slots:{default:[F]},$$scope:{ctx:p}}}),{c(){t=h("div"),i(o.$$.fragment),this.h()},l(s){t=v(s,"DIV",{class:!0});var e=Z(t);l(o.$$.fragment,e),e.forEach(g),this.h()},h(){j(t,"class","mb-4 h-96")},m(s,e){_(s,t,e),f(o,t,null),n=!0},p(s,[e]){const a={};e&4&&(a.$$scope={dirty:e,ctx:s}),o.$set(a)},i(s){n||(m(o.$$.fragment,s),n=!0)},o(s){u(o.$$.fragment,s),n=!1},d(s){s&&g(t),c(o)}}}const J="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function K(p){return[{center:[1.364917,103.822872],zoom:11},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"}]}class Q extends C{constructor(t){super(),P(this,t,K,H,T,{})}}const W=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, Marker, Popup, TileLayer, Tooltip } from '$lib/index';

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
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Marker latLng={[1.282375, 103.864273]}>
			<Popup>Gardens by the Bay</Popup>
			<Tooltip>Gardens by the Bay</Tooltip>
		</Marker>
		<Marker latLng={[1.359167, 103.989441]}>
			<Popup>
				<b>gardemoen Airport</b>
			</Popup>
			<Tooltip>
				<b>kristiansand Airport</b>
			</Tooltip>
		</Marker>
	</LeafletMap>
</div>

`,lang:"svelte"}}];function X(p){let t,o,n,s,e,a;return t=new Q({}),n=new N({props:{properties:p[0]}}),e=new U({props:{methods:p[1]}}),{c(){i(t.$$.fragment),o=d(),i(n.$$.fragment),s=d(),i(e.$$.fragment)},l(r){l(t.$$.fragment,r),o=b(r),l(n.$$.fragment,r),s=b(r),l(e.$$.fragment,r)},m(r,$){f(t,r,$),_(r,o,$),f(n,r,$),_(r,s,$),f(e,r,$),a=!0},p:x,i(r){a||(m(t.$$.fragment,r),m(n.$$.fragment,r),m(e.$$.fragment,r),a=!0)},o(r){u(t.$$.fragment,r),u(n.$$.fragment,r),u(e.$$.fragment,r),a=!1},d(r){r&&(g(o),g(s)),c(t,r),c(n,r),c(e,r)}}}function Y(p){let t,o;return t=new A({props:{title:"tooltip",url:"tooltip",jsonData:W,$$slots:{default:[X]},$$scope:{ctx:p}}}),{c(){i(t.$$.fragment)},l(n){l(t.$$.fragment,n)},m(n,s){f(t,n,s),o=!0},p(n,[s]){const e={};s&4&&(e.$$scope={dirty:s,ctx:n}),t.$set(e)},i(n){o||(m(t.$$.fragment,n),o=!0)},o(n){u(t.$$.fragment,n),o=!1},d(n){c(t,n)}}}function tt(p){return[{options:{type:"Object",default:"undefined",description:"Options."}},{getTooltip:{description:"Returns the underlying Leaflet Tooltip object instance.",link:"https://leafletjs.com/reference.html#tooltip"}}]}class pt extends C{constructor(t){super(),P(this,t,tt,Y,T,{})}}export{pt as component};
