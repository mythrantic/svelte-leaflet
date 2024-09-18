import{s as _,f as x,g as O,h as v,d,j as T,i as y,p as M,a as g,c as h,u as w}from"../chunks/scheduler.3fa55d27.js";import{S as L,i as b,b as l,d as p,m,a as c,t as f,e as u}from"../chunks/index.79263183.js";import{a as S,T as z,C as Z,P as j,M as N}from"../chunks/Properties.b895d4e2.js";function k(i){let t,a,n={url:I,options:i[2]};return t=new z({props:n}),i[3](t),{c(){l(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,s){m(t,e,s),a=!0},p(e,s){const o={};t.$set(o)},i(e){a||(c(t.$$.fragment,e),a=!0)},o(e){f(t.$$.fragment,e),a=!1},d(e){i[3](null),u(t,e)}}}function C(i){let t,a,n;return a=new S({props:{options:i[1],$$slots:{default:[k]},$$scope:{ctx:i}}}),{c(){t=x("div"),l(a.$$.fragment),this.h()},l(e){t=O(e,"DIV",{class:!0});var s=v(t);p(a.$$.fragment,s),s.forEach(d),this.h()},h(){T(t,"class","mb-4 h-96")},m(e,s){y(e,t,s),m(a,t,null),n=!0},p(e,[s]){const o={};s&17&&(o.$$scope={dirty:s,ctx:e}),a.$set(o)},i(e){n||(c(a.$$.fragment,e),n=!0)},o(e){f(a.$$.fragment,e),n=!1},d(e){e&&d(t),u(a)}}}const I="http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png";function U(i,t,a){const n={center:[1.364917,103.822872],zoom:11},e={minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"};let s;function o(r){M[r?"unshift":"push"](()=>{s=r,a(0,s)})}return[s,n,e,o]}class E extends L{constructor(t){super(),b(this,t,U,C,_,{})}}const P=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, TileLayer } from '$lib/index';

	const mapOptions = {
		center: [1.364917, 103.822872],
		zoom: 11
	};
	const tileUrl = 'http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};

	let tileLayer;
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer bind:this={tileLayer} url={tileUrl} options={tileLayerOptions} />
	</LeafletMap>
</div>

`,lang:"svelte"}}];function D(i){let t,a,n,e,s,o;return t=new E({}),n=new j({props:{properties:i[0]}}),s=new N({props:{methods:i[1]}}),{c(){l(t.$$.fragment),a=g(),l(n.$$.fragment),e=g(),l(s.$$.fragment)},l(r){p(t.$$.fragment,r),a=h(r),p(n.$$.fragment,r),e=h(r),p(s.$$.fragment,r)},m(r,$){m(t,r,$),y(r,a,$),m(n,r,$),y(r,e,$),m(s,r,$),o=!0},p:w,i(r){o||(c(t.$$.fragment,r),c(n.$$.fragment,r),c(s.$$.fragment,r),o=!0)},o(r){f(t.$$.fragment,r),f(n.$$.fragment,r),f(s.$$.fragment,r),o=!1},d(r){r&&(d(a),d(e)),u(t,r),u(n,r),u(s,r)}}}function R(i){let t,a;return t=new Z({props:{title:"Tile Layer",url:"tile-layer",jsonData:P,$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){l(t.$$.fragment)},l(n){p(t.$$.fragment,n)},m(n,e){m(t,n,e),a=!0},p(n,[e]){const s={};e&4&&(s.$$scope={dirty:e,ctx:n}),t.$set(s)},i(n){a||(c(t.$$.fragment,n),a=!0)},o(n){f(t.$$.fragment,n),a=!1},d(n){u(t,n)}}}function q(i){return[{url:{type:"String",description:"Tile layer URL template."},wms:{type:"Boolean",description:"If true, the layer will be created using `L.tileLayer.WMS()`."},opacity:{type:"Number",default:1,description:"Opacity of the tiles."},zIndex:{type:"Number",default:1,description:"Explicit zIndex of the layer."},options:{type:"Object",default:"undefined",description:"Options."}},{getTileLayer:{description:"Returns the underlying Leaflet TileLayer object instance.",link:"https://leafletjs.com/reference.html#tilelayer"}}]}class A extends L{constructor(t){super(),b(this,t,q,R,_,{})}}export{A as component};
