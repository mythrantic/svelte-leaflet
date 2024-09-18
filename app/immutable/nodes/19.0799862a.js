import{s as T,f as M,g as v,h as S,d as y,j as N,i as g,a as _,c as L,p as w,u as U}from"../chunks/scheduler.3fa55d27.js";import{S as x,i as O,b as m,d as c,m as f,a as u,t as $,e as d}from"../chunks/index.79263183.js";import{a as z,T as b,C as I,P as W,M as Z}from"../chunks/Properties.b895d4e2.js";function j(i){let e,s,n,r,a={url:C,options:i[3]};e=new b({props:a}),i[5](e);let o={wms:!0,url:P,options:i[4]};return n=new b({props:o}),i[6](n),{c(){m(e.$$.fragment),s=_(),m(n.$$.fragment)},l(t){c(e.$$.fragment,t),s=L(t),c(n.$$.fragment,t)},m(t,l){f(e,t,l),g(t,s,l),f(n,t,l),r=!0},p(t,l){const h={};e.$set(h);const p={};n.$set(p)},i(t){r||(u(e.$$.fragment,t),u(n.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),$(n.$$.fragment,t),r=!1},d(t){t&&y(s),i[5](null),d(e,t),i[6](null),d(n,t)}}}function E(i){let e,s,n;return s=new z({props:{options:i[2],$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){e=M("div"),m(s.$$.fragment),this.h()},l(r){e=v(r,"DIV",{class:!0});var a=S(e);c(s.$$.fragment,a),a.forEach(y),this.h()},h(){N(e,"class","mb-4 h-96")},m(r,a){g(r,e,a),f(s,e,null),n=!0},p(r,[a]){const o={};a&131&&(o.$$scope={dirty:a,ctx:r}),s.$set(o)},i(r){n||(u(s.$$.fragment,r),n=!0)},o(r){$(s.$$.fragment,r),n=!1},d(r){r&&y(e),d(s)}}}const C="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",P="http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi";function k(i,e,s){const n={center:[37.0902,-95.7129],zoom:4},r={minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},a={layers:"nexrad-n0r-900913",format:"image/png",transparent:!0,attribution:"Weather data © 2012 IEM Nexrad"};let o,t;function l(p){w[p?"unshift":"push"](()=>{o=p,s(0,o)})}function h(p){w[p?"unshift":"push"](()=>{t=p,s(1,t)})}return[o,t,n,r,a,l,h]}class D extends x{constructor(e){super(),O(this,e,k,E,T,{})}}const R=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, TileLayer } from '$lib/index';

	const mapOptions = {
		center: [37.0902, -95.7129],
		zoom: 4
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const wmsTileUrl = 'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi';
	const wmsTileLayerOptions = {
		layers: 'nexrad-n0r-900913',
		format: 'image/png',
		transparent: true,
		attribution: 'Weather data © 2012 IEM Nexrad'
	};

	let tileLayer;
	let wmsTileLayer;
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer bind:this={tileLayer} url={tileUrl} options={tileLayerOptions} />
		<TileLayer bind:this={wmsTileLayer} wms={true} url={wmsTileUrl} options={wmsTileLayerOptions} />
	</LeafletMap>
</div>

`,lang:"svelte"}}];function q(i){let e,s,n,r,a,o;return e=new D({}),n=new W({props:{properties:i[0]}}),a=new Z({props:{methods:i[1]}}),{c(){m(e.$$.fragment),s=_(),m(n.$$.fragment),r=_(),m(a.$$.fragment)},l(t){c(e.$$.fragment,t),s=L(t),c(n.$$.fragment,t),r=L(t),c(a.$$.fragment,t)},m(t,l){f(e,t,l),g(t,s,l),f(n,t,l),g(t,r,l),f(a,t,l),o=!0},p:U,i(t){o||(u(e.$$.fragment,t),u(n.$$.fragment,t),u(a.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),$(n.$$.fragment,t),$(a.$$.fragment,t),o=!1},d(t){t&&(y(s),y(r)),d(e,t),d(n,t),d(a,t)}}}function B(i){let e,s;return e=new I({props:{title:"Tile Layer Wms",url:"tile-layer-wms",jsonData:R,$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){m(e.$$.fragment)},l(n){c(e.$$.fragment,n)},m(n,r){f(e,n,r),s=!0},p(n,[r]){const a={};r&4&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){s||(u(e.$$.fragment,n),s=!0)},o(n){$(e.$$.fragment,n),s=!1},d(n){d(e,n)}}}function V(i){return[{url:{type:"String",description:"Tile layer URL template."},wms:{type:"Boolean",description:"If true, the layer will be created using `L.tileLayer.WMS()`."},opacity:{type:"Number",default:1,description:"Opacity of the tiles."},zIndex:{type:"Number",default:1,description:"Explicit zIndex of the layer."},options:{type:"Object",default:"undefined",description:"Options."}},{getTileLayer:{description:"Returns the underlying Leaflet TileLayer.WMS object instance.",link:"https://leafletjs.com/reference.html#tilelayer-wms"}}]}class H extends x{constructor(e){super(),O(this,e,V,B,T,{})}}export{H as component};
