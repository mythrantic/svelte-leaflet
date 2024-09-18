import{s as L,f as S,g as x,h as w,d as p,i as d,M as D,N as E,O as k,r as F,z as T,A as Z,B as z,C as B,j as y,o as P,a as J,c as b,G as U,u as A}from"../chunks/scheduler.3fa55d27.js";import{S as N,i as G,a as c,g as I,t as m,c as V,b as _,d as h,m as O,e as v}from"../chunks/index.79263183.js";import{L as j,E as q,a as R,T as H,C as K,P as Q,M as W}from"../chunks/Properties.b895d4e2.js";function M(r){let e;const s=r[6].default,t=T(s,r,r[5],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&32)&&Z(t,s,n,n[5],e?B(s,n[5],o,null):z(n[5]),null)},i(n){e||(c(t,n),e=!0)},o(n){m(t,n),e=!1},d(n){t&&t.d(n)}}}function X(r){let e,s,t=r[0]&&M(r);return{c(){e=S("div"),t&&t.c()},l(n){e=x(n,"DIV",{});var o=w(e);t&&t.l(o),o.forEach(p)},m(n,o){d(n,e,o),t&&t.m(e,null),s=!0},p(n,[o]){n[0]?t?(t.p(n,o),o&1&&c(t,1)):(t=M(n),t.c(),c(t,1),t.m(e,null)):t&&(I(),m(t,1,1,()=>{t=null}),V())},i(n){s||(c(t),s=!0)},o(n){m(t),s=!1},d(n){n&&p(e),t&&t.d()}}}function Y(r,e,s){let{$$slots:t={},$$scope:n}=e;const{getMap:o}=D(j);let{data:l}=e,{options:i={}}=e,{events:g=[]}=e,f;E(j.Layer,{getLayer:()=>f});const a=k();let u;F(()=>{u.unregister(),f.removeFrom(o())});function C(){return f}return r.$$set=$=>{"data"in $&&s(1,l=$.data),"options"in $&&s(2,i=$.options),"events"in $&&s(3,g=$.events),"$$scope"in $&&s(5,n=$.$$scope)},r.$$.update=()=>{r.$$.dirty&15&&(f||(s(0,f=j.geoJSON(null,i).addTo(o())),u=new q(f,a,g)),l&&(f.clearLayers(),f.addData(l)))},[f,l,i,g,C,n,t]}class tt extends N{constructor(e){super(),G(this,e,Y,X,L,{data:1,options:2,events:3,getGeoJSON:4})}get getGeoJSON(){return this.$$.ctx[4]}}function et(r){let e,s,t,n;return e=new H({props:{url:ot,options:r[2]}}),t=new tt({props:{data:r[0],options:r[3]}}),{c(){_(e.$$.fragment),s=J(),_(t.$$.fragment)},l(o){h(e.$$.fragment,o),s=b(o),h(t.$$.fragment,o)},m(o,l){O(e,o,l),d(o,s,l),O(t,o,l),n=!0},p(o,l){const i={};l&1&&(i.data=o[0]),t.$set(i)},i(o){n||(c(e.$$.fragment,o),c(t.$$.fragment,o),n=!0)},o(o){m(e.$$.fragment,o),m(t.$$.fragment,o),n=!1},d(o){o&&p(s),v(e,o),v(t,o)}}}function nt(r){let e,s,t;return s=new R({props:{options:r[1],$$slots:{default:[et]},$$scope:{ctx:r}}}),{c(){e=S("div"),_(s.$$.fragment),this.h()},l(n){e=x(n,"DIV",{class:!0});var o=w(e);h(s.$$.fragment,o),o.forEach(p),this.h()},h(){y(e,"class","mb-4 h-96")},m(n,o){d(n,e,o),O(s,e,null),t=!0},p(n,[o]){const l={};o&17&&(l.$$scope={dirty:o,ctx:n}),s.$set(l)},i(n){t||(c(s.$$.fragment,n),t=!0)},o(n){m(s.$$.fragment,n),t=!1},d(n){n&&p(e),v(s)}}}const ot="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function st(r,e,s){let t;return P(async()=>{const i=await fetch("/example.geojson");s(0,t=await i.json())}),[t,{center:[1.250111,103.830933],zoom:13},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},{style(i){return console.log("style",i),{}},onEachFeature(i,g){console.log("onEachFeature",i,g)}}]}class at extends N{constructor(e){super(),G(this,e,st,nt,L,{})}}const rt=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { onMount } from 'svelte';
	import { LeafletMap, GeoJSON, TileLayer } from '$lib/index';

	let geoJsonData;

	onMount(async () => {
		const response = await fetch('/example.geojson');
		geoJsonData = await response.json();
	});

	const mapOptions = {
		center: [1.250111, 103.830933],
		zoom: 13
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const geoJsonOptions = {
		style: function (geoJsonFeature) {
			console.log('style', geoJsonFeature);
			return {};
		},
		onEachFeature: function (feature, layer) {
			console.log('onEachFeature', feature, layer);
		}
	};
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<GeoJSON data={geoJsonData} options={geoJsonOptions} />
	</LeafletMap>
</div>

`,lang:"svelte"}}];function it(r){let e,s,t,n,o,l,i,g="Get example geojson data",f;return e=new at({}),t=new Q({props:{properties:r[0]}}),o=new W({props:{methods:r[1]}}),{c(){_(e.$$.fragment),s=J(),_(t.$$.fragment),n=J(),_(o.$$.fragment),l=J(),i=S("a"),i.textContent=g,this.h()},l(a){h(e.$$.fragment,a),s=b(a),h(t.$$.fragment,a),n=b(a),h(o.$$.fragment,a),l=b(a),i=x(a,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),U(i)!=="svelte-1aftk2s"&&(i.textContent=g),this.h()},h(){y(i,"href","/example.geojson"),y(i,"target","_blank"),y(i,"class","inline-block mt-4 mb-4 text-blue-500 text-3xl font-bold hover:underline")},m(a,u){O(e,a,u),d(a,s,u),O(t,a,u),d(a,n,u),O(o,a,u),d(a,l,u),d(a,i,u),f=!0},p:A,i(a){f||(c(e.$$.fragment,a),c(t.$$.fragment,a),c(o.$$.fragment,a),f=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),m(o.$$.fragment,a),f=!1},d(a){a&&(p(s),p(n),p(l),p(i)),v(e,a),v(t,a),v(o,a)}}}function lt(r){let e,s;return e=new K({props:{title:"GeoJson",url:"geojson",jsonData:rt,$$slots:{default:[it]},$$scope:{ctx:r}}}),{c(){_(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){O(e,t,n),s=!0},p(t,[n]){const o={};n&4&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function ft(r){return[{data:{type:"Object",default:"undefined",description:"GeoJSON object"},options:{type:"Object",default:"undefined",description:"Options."}},{getGeoJSON:{description:"Returns the underlying Leaflet GeoJSON object instance.",link:"https://leafletjs.com/reference.html#geojson"}}]}class pt extends N{constructor(e){super(),G(this,e,ft,lt,L,{})}}export{pt as component};
