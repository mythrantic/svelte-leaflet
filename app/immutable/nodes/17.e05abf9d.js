import{s as C,M as x,r as O,f as L,g as v,h as M,d,j as w,i as g,a as h,c as _,p as T,u as Z}from"../chunks/scheduler.3fa55d27.js";import{S as b,i as S,b as c,d as p,m,a as f,t as u,e as $}from"../chunks/index.79263183.js";import{L as y,a as j,T as P,C as z,P as D,M as N}from"../chunks/Properties.b895d4e2.js";function U(i,t,r){const{getMap:e}=x(y);let{position:s="topright"}=t,{options:a={}}=t,n;O(()=>{n.remove()});function o(){return n}return i.$$set=l=>{"position"in l&&r(0,s=l.position),"options"in l&&r(1,a=l.options)},i.$$.update=()=>{i.$$.dirty&11&&(n||r(3,n=y.control.scale(a).addTo(e())),n.setPosition(s))},[s,a,o,n]}class k extends b{constructor(t){super(),S(this,t,U,null,C,{position:0,options:1,getScaleControl:2})}get getScaleControl(){return this.$$.ctx[2]}}function E(i){let t,r,e,s;t=new P({props:{url:q,options:i[2]}});let a={position:"bottomleft",options:i[3]};return e=new k({props:a}),i[4](e),{c(){c(t.$$.fragment),r=h(),c(e.$$.fragment)},l(n){p(t.$$.fragment,n),r=_(n),p(e.$$.fragment,n)},m(n,o){m(t,n,o),g(n,r,o),m(e,n,o),s=!0},p(n,o){const l={};e.$set(l)},i(n){s||(f(t.$$.fragment,n),f(e.$$.fragment,n),s=!0)},o(n){u(t.$$.fragment,n),u(e.$$.fragment,n),s=!1},d(n){n&&d(r),$(t,n),i[4](null),$(e,n)}}}function W(i){let t,r,e;return r=new j({props:{options:i[1],$$slots:{default:[E]},$$scope:{ctx:i}}}),{c(){t=L("div"),c(r.$$.fragment),this.h()},l(s){t=v(s,"DIV",{class:!0});var a=M(t);p(r.$$.fragment,a),a.forEach(d),this.h()},h(){w(t,"class","mb-4 h-96")},m(s,a){g(s,t,a),m(r,t,null),e=!0},p(s,[a]){const n={};a&33&&(n.$$scope={dirty:a,ctx:s}),r.$set(n)},i(s){e||(f(r.$$.fragment,s),e=!0)},o(s){u(r.$$.fragment,s),e=!1},d(s){s&&d(t),$(r)}}}const q="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function I(i,t,r){const e={center:[1.364917,103.822872],zoom:11},s={minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},a={maxWidth:200};let n;function o(l){T[l?"unshift":"push"](()=>{n=l,r(0,n)})}return[n,e,s,a,o]}class R extends b{constructor(t){super(),S(this,t,I,W,C,{})}}const V=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, TileLayer, ScaleControl } from '$lib/index';

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
	const scaleControlOptions = {
		maxWidth: 200
	};

	let scaleControl;
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<ScaleControl bind:this={scaleControl} position="bottomleft" options={scaleControlOptions} />
	</LeafletMap>
</div>

`,lang:"svelte"}}];function A(i){let t,r,e,s,a,n;return t=new R({}),e=new D({props:{properties:i[0]}}),a=new N({props:{methods:i[1]}}),{c(){c(t.$$.fragment),r=h(),c(e.$$.fragment),s=h(),c(a.$$.fragment)},l(o){p(t.$$.fragment,o),r=_(o),p(e.$$.fragment,o),s=_(o),p(a.$$.fragment,o)},m(o,l){m(t,o,l),g(o,r,l),m(e,o,l),g(o,s,l),m(a,o,l),n=!0},p:Z,i(o){n||(f(t.$$.fragment,o),f(e.$$.fragment,o),f(a.$$.fragment,o),n=!0)},o(o){u(t.$$.fragment,o),u(e.$$.fragment,o),u(a.$$.fragment,o),n=!1},d(o){o&&(d(r),d(s)),$(t,o),$(e,o),$(a,o)}}}function B(i){let t,r;return t=new z({props:{title:"Scale Control",url:"scale-control",jsonData:V,$$slots:{default:[A]},$$scope:{ctx:i}}}),{c(){c(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,s){m(t,e,s),r=!0},p(e,[s]){const a={};s&4&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){u(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function F(i){return[{position:{type:"String",default:"topright",description:"Position."},options:{type:"Object",default:"undefined",description:"Options."}},{getScaleControl:{description:"Returns the underlying Leaflet Control.Scale object instance.",link:"https://leafletjs.com/reference.html#control-scale"}}]}class K extends b{constructor(t){super(),S(this,t,F,B,C,{})}}export{K as component};
