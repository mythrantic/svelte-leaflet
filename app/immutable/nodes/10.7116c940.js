import{s as O,f as k,g as x,h as v,d as g,j as w,i as d,a as _,c as y,u as M}from"../chunks/scheduler.3fa55d27.js";import{S as h,i as b,b as m,d as l,m as f,a as $,t as c,e as u}from"../chunks/index.79263183.js";import{a as S,T as z,C as N,P as T,M as Z}from"../chunks/Properties.b895d4e2.js";import{M as L}from"../chunks/Marker.e34bb875.js";function j(s){let e,o,n,r,a,i;return e=new z({props:{url:D,options:s[1]}}),n=new L({props:{latLng:[1.282375,103.864273]}}),a=new L({props:{latLng:[1.359167,103.989441],rotationAngle:45}}),{c(){m(e.$$.fragment),o=_(),m(n.$$.fragment),r=_(),m(a.$$.fragment)},l(t){l(e.$$.fragment,t),o=y(t),l(n.$$.fragment,t),r=y(t),l(a.$$.fragment,t)},m(t,p){f(e,t,p),d(t,o,p),f(n,t,p),d(t,r,p),f(a,t,p),i=!0},p:M,i(t){i||($(e.$$.fragment,t),$(n.$$.fragment,t),$(a.$$.fragment,t),i=!0)},o(t){c(e.$$.fragment,t),c(n.$$.fragment,t),c(a.$$.fragment,t),i=!1},d(t){t&&(g(o),g(r)),u(e,t),u(n,t),u(a,t)}}}function C(s){let e,o,n;return o=new S({props:{options:s[0],$$slots:{default:[j]},$$scope:{ctx:s}}}),{c(){e=k("div"),m(o.$$.fragment),this.h()},l(r){e=x(r,"DIV",{class:!0});var a=v(e);l(o.$$.fragment,a),a.forEach(g),this.h()},h(){w(e,"class","mb-4 h-96")},m(r,a){d(r,e,a),f(o,e,null),n=!0},p(r,[a]){const i={};a&4&&(i.$$scope={dirty:a,ctx:r}),o.$set(i)},i(r){n||($(o.$$.fragment,r),n=!0)},o(r){c(o.$$.fragment,r),n=!1},d(r){r&&g(e),u(o)}}}const D="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function A(s){return[{center:[1.364917,103.822872],zoom:11},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"}]}class I extends h{constructor(e){super(),b(this,e,A,C,O,{})}}const P=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, Marker, TileLayer } from '$lib/index';

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
		<Marker latLng={[1.282375, 103.864273]} />
		<Marker latLng={[1.359167, 103.989441]} rotationAngle={45} />
	</LeafletMap>
</div>

`,lang:"svelte"}}];function R(s){let e,o,n,r,a,i;return e=new I({}),n=new T({props:{properties:s[0]}}),a=new Z({props:{methods:s[1]}}),{c(){m(e.$$.fragment),o=_(),m(n.$$.fragment),r=_(),m(a.$$.fragment)},l(t){l(e.$$.fragment,t),o=y(t),l(n.$$.fragment,t),r=y(t),l(a.$$.fragment,t)},m(t,p){f(e,t,p),d(t,o,p),f(n,t,p),d(t,r,p),f(a,t,p),i=!0},p:M,i(t){i||($(e.$$.fragment,t),$(n.$$.fragment,t),$(a.$$.fragment,t),i=!0)},o(t){c(e.$$.fragment,t),c(n.$$.fragment,t),c(a.$$.fragment,t),i=!1},d(t){t&&(g(o),g(r)),u(e,t),u(n,t),u(a,t)}}}function U(s){let e,o;return e=new N({props:{title:"Marker",url:"marker",jsonData:P,$$slots:{default:[R]},$$scope:{ctx:s}}}),{c(){m(e.$$.fragment)},l(n){l(e.$$.fragment,n)},m(n,r){f(e,n,r),o=!0},p(n,[r]){const a={};r&4&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){o||($(e.$$.fragment,n),o=!0)},o(n){c(e.$$.fragment,n),o=!1},d(n){u(e,n)}}}function E(s){return[{latLng:{type:"LatLng",description:"Geographical point."},zIndexOffset:{type:"Number",default:0,description:"z-index offset."},icon:{type:"String",description:"TODO L.Icon.Default"},opacity:{type:"Number",default:1,description:"Opacity."},rotationAngle:{type:"Number",default:0,description:"Rotation angle."},rotationOrigin:{type:"String",default:"center bottom",description:"Rotation origin."},options:{type:"Object",default:"undefined",description:"Options."}},{getMarker:{description:"Returns the underlying Leaflet Marker object instance.",link:"https://leafletjs.com/reference.html#marker"}}]}class F extends h{constructor(e){super(),b(this,e,E,U,O,{})}}export{F as component};
