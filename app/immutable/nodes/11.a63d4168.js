import{s as M,f as b,g as x,h as w,d as g,j as I,i as d,a as _,c as h,u as v}from"../chunks/scheduler.3fa55d27.js";import{S as k,i as y,b as m,d as $,m as l,a as c,t as f,e as u}from"../chunks/index.79263183.js";import{a as A,T as S,C as z,P as Z,M as j}from"../chunks/Properties.b895d4e2.js";import{M as L}from"../chunks/Marker.e34bb875.js";import{I as T}from"../chunks/Icon.d447854e.js";function U(a){let e,r;return e=new T({props:{options:a[2]}}),{c(){m(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){l(e,n,o),r=!0},p:v,i(n){r||(c(e.$$.fragment,n),r=!0)},o(n){f(e.$$.fragment,n),r=!1},d(n){u(e,n)}}}function C(a){let e,r,n,o,s,p;return e=new S({props:{url:P,options:a[1]}}),n=new L({props:{latLng:[1.282375,103.864273]}}),s=new L({props:{latLng:[1.359167,103.989441],rotationAngle:45,$$slots:{default:[U]},$$scope:{ctx:a}}}),{c(){m(e.$$.fragment),r=_(),m(n.$$.fragment),o=_(),m(s.$$.fragment)},l(t){$(e.$$.fragment,t),r=h(t),$(n.$$.fragment,t),o=h(t),$(s.$$.fragment,t)},m(t,i){l(e,t,i),d(t,r,i),l(n,t,i),d(t,o,i),l(s,t,i),p=!0},p(t,i){const O={};i&8&&(O.$$scope={dirty:i,ctx:t}),s.$set(O)},i(t){p||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(s.$$.fragment,t),p=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(s.$$.fragment,t),p=!1},d(t){t&&(g(r),g(o)),u(e,t),u(n,t),u(s,t)}}}function N(a){let e,r,n;return r=new A({props:{options:a[0],$$slots:{default:[C]},$$scope:{ctx:a}}}),{c(){e=b("div"),m(r.$$.fragment),this.h()},l(o){e=x(o,"DIV",{class:!0});var s=w(e);$(r.$$.fragment,s),s.forEach(g),this.h()},h(){I(e,"class","mb-4 h-96")},m(o,s){d(o,e,s),l(r,e,null),n=!0},p(o,[s]){const p={};s&8&&(p.$$scope={dirty:s,ctx:o}),r.$set(p)},i(o){n||(c(r.$$.fragment,o),n=!0)},o(o){f(r.$$.fragment,o),n=!1},d(o){o&&g(e),u(r)}}}const P="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function D(a){return[{center:[1.364917,103.822872],zoom:11},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},{iconUrl:"icons/airport.svg",iconSize:[41,41],iconAnchor:[20,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28]}]}class E extends k{constructor(e){super(),y(this,e,D,N,M,{})}}const q=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, Icon, Marker, TileLayer } from '$lib/index';

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
		<Marker latLng={[1.282375, 103.864273]} />
		<Marker latLng={[1.359167, 103.989441]} rotationAngle={45}>
			<Icon options={iconOptions} />
		</Marker>
	</LeafletMap>
</div>

`,lang:"svelte"}}];function R(a){let e,r,n,o,s,p;return e=new E({}),n=new Z({props:{properties:a[0]}}),s=new j({props:{methods:a[1]}}),{c(){m(e.$$.fragment),r=_(),m(n.$$.fragment),o=_(),m(s.$$.fragment)},l(t){$(e.$$.fragment,t),r=h(t),$(n.$$.fragment,t),o=h(t),$(s.$$.fragment,t)},m(t,i){l(e,t,i),d(t,r,i),l(n,t,i),d(t,o,i),l(s,t,i),p=!0},p:v,i(t){p||(c(e.$$.fragment,t),c(n.$$.fragment,t),c(s.$$.fragment,t),p=!0)},o(t){f(e.$$.fragment,t),f(n.$$.fragment,t),f(s.$$.fragment,t),p=!1},d(t){t&&(g(r),g(o)),u(e,t),u(n,t),u(s,t)}}}function V(a){let e,r;return e=new z({props:{title:"Marker Icon",url:"marker-icon",jsonData:q,$$slots:{default:[R]},$$scope:{ctx:a}}}),{c(){m(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){l(e,n,o),r=!0},p(n,[o]){const s={};o&4&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){r||(c(e.$$.fragment,n),r=!0)},o(n){f(e.$$.fragment,n),r=!1},d(n){u(e,n)}}}function B(a){return[{options:{type:"Object",default:"undefined",description:"Options."}},{getIcon:{description:"Returns the underlying Leaflet Icon object instance.",link:"https://leafletjs.com/reference.html#icon"}}]}class Q extends k{constructor(e){super(),y(this,e,B,V,M,{})}}export{Q as component};
