import{s as b,M as Z,O as E,r as S,f as T,g as j,h as C,d as $,j as N,i as O,a as _,c as h,u as z}from"../chunks/scheduler.3fa55d27.js";import{S as x,i as I,b as c,d as f,m as u,a as g,t as d,e as y}from"../chunks/index.79263183.js";import{L as U,E as B,a as D,T as R,C as k,P,M as q}from"../chunks/Properties.b895d4e2.js";function F(i,t,a){const{getMap:n}=Z(U);let{imageUrl:r}=t,{bounds:e}=t,{opacity:o=1}=t,{zIndex:s=1}=t,{options:l={}}=t,{events:v=[]}=t,p;const M=E();let L;S(()=>{L.unregister(),p.removeFrom(n())});function w(){return p}return i.$$set=m=>{"imageUrl"in m&&a(0,r=m.imageUrl),"bounds"in m&&a(1,e=m.bounds),"opacity"in m&&a(2,o=m.opacity),"zIndex"in m&&a(3,s=m.zIndex),"options"in m&&a(4,l=m.options),"events"in m&&a(5,v=m.events)},i.$$.update=()=>{i.$$.dirty&191&&(p||(a(7,p=U.imageOverlay(r,e,l).addTo(n())),L=new B(p,M,v)),p.setUrl(r),p.setOpacity(o),p.setZIndex(s))},[r,e,o,s,l,v,w,p]}class V extends x{constructor(t){super(),I(this,t,F,null,b,{imageUrl:0,bounds:1,opacity:2,zIndex:3,options:4,events:5,getImageOverlay:6})}get getImageOverlay(){return this.$$.ctx[6]}}function A(i){let t,a,n,r;return t=new R({props:{url:H,options:i[1]}}),n=new V({props:{imageUrl:"/dpsri_70km_2021082110500000dBR.dpsri.png",bounds:i[3],options:i[2]}}),{c(){c(t.$$.fragment),a=_(),c(n.$$.fragment)},l(e){f(t.$$.fragment,e),a=h(e),f(n.$$.fragment,e)},m(e,o){u(t,e,o),O(e,a,o),u(n,e,o),r=!0},p:z,i(e){r||(g(t.$$.fragment,e),g(n.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),d(n.$$.fragment,e),r=!1},d(e){e&&$(a),y(t,e),y(n,e)}}}function G(i){let t,a,n;return a=new D({props:{options:i[0],$$slots:{default:[A]},$$scope:{ctx:i}}}),{c(){t=T("div"),c(a.$$.fragment),this.h()},l(r){t=j(r,"DIV",{class:!0});var e=C(t);f(a.$$.fragment,e),e.forEach($),this.h()},h(){N(t,"class","mb-4 h-96")},m(r,e){O(r,t,e),u(a,t,null),n=!0},p(r,[e]){const o={};e&16&&(o.$$scope={dirty:e,ctx:r}),a.$set(o)},i(r){n||(g(a.$$.fragment,r),n=!0)},o(r){d(a.$$.fragment,r),n=!1},d(r){r&&$(t),y(a)}}}const H="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function J(i){return[{center:[1.364917,103.822872],zoom:11},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},{opacity:.5},[[1.17,103.565],[1.4836,104.143]]]}class K extends x{constructor(t){super(),I(this,t,J,G,b,{})}}const Q=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, ImageOverlay, TileLayer } from '$lib/index';

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
	const imageOverlayOptions = {
		opacity: 0.5
	};
	const bounds = [
		[1.17, 103.565],
		[1.4836, 104.143]
	];


<\/script>

	<div class="mb-4 h-96">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions} />
			<ImageOverlay
				imageUrl="/dpsri_70km_2021082110500000dBR.dpsri.png"
				{bounds}
				options={imageOverlayOptions}
			/>
		</LeafletMap>
	</div>

`,lang:"svelte"}}];function W(i){let t,a,n,r,e,o;return t=new K({}),n=new P({props:{properties:i[0]}}),e=new q({props:{methods:i[1]}}),{c(){c(t.$$.fragment),a=_(),c(n.$$.fragment),r=_(),c(e.$$.fragment)},l(s){f(t.$$.fragment,s),a=h(s),f(n.$$.fragment,s),r=h(s),f(e.$$.fragment,s)},m(s,l){u(t,s,l),O(s,a,l),u(n,s,l),O(s,r,l),u(e,s,l),o=!0},p:z,i(s){o||(g(t.$$.fragment,s),g(n.$$.fragment,s),g(e.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),d(n.$$.fragment,s),d(e.$$.fragment,s),o=!1},d(s){s&&($(a),$(r)),y(t,s),y(n,s),y(e,s)}}}function X(i){let t,a;return t=new k({props:{title:"Image Overlay",url:"image-overlay",jsonData:Q,$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){c(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,r){u(t,n,r),a=!0},p(n,[r]){const e={};r&4&&(e.$$scope={dirty:r,ctx:n}),t.$set(e)},i(n){a||(g(t.$$.fragment,n),a=!0)},o(n){d(t.$$.fragment,n),a=!1},d(n){y(t,n)}}}function Y(i){return[{imageUrl:{type:"String",description:"URL to image file."},opacity:{type:"Number",default:1,description:"Opacity of the image overlay."},zIndex:{type:"Number",default:1,description:"Explicit zIndex of the layer."},options:{type:"Object",default:"undefined",description:"Options."}},{getImageOverlay:{description:"Returns the underlying Leaflet ImageOverlay object instance.",link:"https://leafletjs.com/reference.html#imageoverlay"}}]}class at extends x{constructor(t){super(),I(this,t,Y,X,b,{})}}export{at as component};
