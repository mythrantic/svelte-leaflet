import{s as h,f as O,g as v,h as w,d as g,j as x,i as d,a as y,c as _,p as T,l as S,m as L,u as C}from"../chunks/scheduler.3fa55d27.js";import{S as b,i as P,b as p,d as f,m as $,a as m,t as c,e as u}from"../chunks/index.79263183.js";import{a as M,T as j,C as N,P as Z,M as k}from"../chunks/Properties.b895d4e2.js";import{P as z}from"../chunks/Polygon.20fed901.js";import{P as D}from"../chunks/Popup.c09514a5.js";import{T as F}from"../chunks/Tooltip.9799fd49.js";function I(a){let t;return{c(){t=S("Sentosa")},l(n){t=L(n,"Sentosa")},m(n,e){d(n,t,e)},d(n){n&&g(t)}}}function U(a){let t;return{c(){t=S("Sentosa")},l(n){t=L(n,"Sentosa")},m(n,e){d(n,t,e)},d(n){n&&g(t)}}}function E(a){let t,n,e,l;return t=new D({props:{$$slots:{default:[I]},$$scope:{ctx:a}}}),e=new F({props:{$$slots:{default:[U]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment),n=y(),p(e.$$.fragment)},l(o){f(t.$$.fragment,o),n=_(o),f(e.$$.fragment,o)},m(o,s){$(t,o,s),d(o,n,s),$(e,o,s),l=!0},p(o,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:o}),t.$set(r);const i={};s&32&&(i.$$scope={dirty:s,ctx:o}),e.$set(i)},i(o){l||(m(t.$$.fragment,o),m(e.$$.fragment,o),l=!0)},o(o){c(t.$$.fragment,o),c(e.$$.fragment,o),l=!1},d(o){o&&g(n),u(t,o),u(e,o)}}}function R(a){let t,n,e,l;t=new j({props:{url:A,options:a[2]}});let o={latLngs:a[3],color:"#ff0000",fillColor:"#ff0000",$$slots:{default:[E]},$$scope:{ctx:a}};return e=new z({props:o}),a[4](e),{c(){p(t.$$.fragment),n=y(),p(e.$$.fragment)},l(s){f(t.$$.fragment,s),n=_(s),f(e.$$.fragment,s)},m(s,r){$(t,s,r),d(s,n,r),$(e,s,r),l=!0},p(s,r){const i={};r&32&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){l||(m(t.$$.fragment,s),m(e.$$.fragment,s),l=!0)},o(s){c(t.$$.fragment,s),c(e.$$.fragment,s),l=!1},d(s){s&&g(n),u(t,s),a[4](null),u(e,s)}}}function q(a){let t,n,e;return n=new M({props:{options:a[1],$$slots:{default:[R]},$$scope:{ctx:a}}}),{c(){t=O("div"),p(n.$$.fragment),this.h()},l(l){t=v(l,"DIV",{class:!0});var o=w(t);f(n.$$.fragment,o),o.forEach(g),this.h()},h(){x(t,"class","mb-4 h-96")},m(l,o){d(l,t,o),$(n,t,null),e=!0},p(l,[o]){const s={};o&33&&(s.$$scope={dirty:o,ctx:l}),n.$set(s)},i(l){e||(m(n.$$.fragment,l),e=!0)},o(l){c(n.$$.fragment,l),e=!1},d(l){l&&g(t),u(n)}}}const A="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function B(a,t,n){const e={center:[1.250111,103.830933],zoom:14},l={minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},o=[[1.2605024,103.804856],[1.2595155,103.8058001],[1.2572416,103.8080317],[1.2555254,103.808418],[1.2549247,103.8096625],[1.2527365,103.8122374],[1.2507629,103.8157565],[1.2486177,103.8189322],[1.2460862,103.8224942],[1.2419673,103.8262707],[1.2378055,103.8309485],[1.2371619,103.8328797],[1.2374194,103.8341242],[1.2383204,103.8351113],[1.2383204,103.8356263],[1.238063,103.8371712],[1.2398221,103.8398749],[1.241195,103.841334],[1.2435977,103.8437373],[1.2460004,103.8454539],[1.2487035,103.8477713],[1.2523075,103.8492304],[1.2535517,103.8473851],[1.2536805,103.845883],[1.2531227,103.844381],[1.2528653,103.8425786],[1.2541953,103.8420636],[1.2540666,103.8404757],[1.2545386,103.838287],[1.2538092,103.8371283],[1.2537234,103.8350684],[1.255225,103.8321501],[1.2550534,103.829189],[1.2556112,103.8254124],[1.2581855,103.8233954],[1.2601591,103.8198763],[1.2608027,103.8168294],[1.2596443,103.8136965],[1.2605024,103.804856]];let s;function r(i){T[i?"unshift":"push"](()=>{s=i,n(0,s)})}return[s,e,l,o,r]}class G extends b{constructor(t){super(),P(this,t,B,q,h,{})}}const J=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, Polygon, Popup, TileLayer, Tooltip } from '$lib/index';

	const mapOptions = {
		center: [1.250111, 103.830933],
		zoom: 14
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};

	const polygon1 = [
		[1.2605024, 103.804856],
		[1.2595155, 103.8058001],
		[1.2572416, 103.8080317],
		[1.2555254, 103.808418],
		[1.2549247, 103.8096625],
		[1.2527365, 103.8122374],
		[1.2507629, 103.8157565],
		[1.2486177, 103.8189322],
		[1.2460862, 103.8224942],
		[1.2419673, 103.8262707],
		[1.2378055, 103.8309485],
		[1.2371619, 103.8328797],
		[1.2374194, 103.8341242],
		[1.2383204, 103.8351113],
		[1.2383204, 103.8356263],
		[1.238063, 103.8371712],
		[1.2398221, 103.8398749],
		[1.241195, 103.841334],
		[1.2435977, 103.8437373],
		[1.2460004, 103.8454539],
		[1.2487035, 103.8477713],
		[1.2523075, 103.8492304],
		[1.2535517, 103.8473851],
		[1.2536805, 103.845883],
		[1.2531227, 103.844381],
		[1.2528653, 103.8425786],
		[1.2541953, 103.8420636],
		[1.2540666, 103.8404757],
		[1.2545386, 103.838287],
		[1.2538092, 103.8371283],
		[1.2537234, 103.8350684],
		[1.255225, 103.8321501],
		[1.2550534, 103.829189],
		[1.2556112, 103.8254124],
		[1.2581855, 103.8233954],
		[1.2601591, 103.8198763],
		[1.2608027, 103.8168294],
		[1.2596443, 103.8136965],
		[1.2605024, 103.804856]
	];

	let polygonInstance1;
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Polygon bind:this={polygonInstance1} latLngs={polygon1} color="#ff0000" fillColor="#ff0000">
			<Popup>Sentosa</Popup>
			<Tooltip>Sentosa</Tooltip>
		</Polygon>
	</LeafletMap>
</div>

`,lang:"svelte"}}];function V(a){let t,n,e,l,o,s;return t=new G({}),e=new Z({props:{properties:a[0]}}),o=new k({props:{methods:a[1]}}),{c(){p(t.$$.fragment),n=y(),p(e.$$.fragment),l=y(),p(o.$$.fragment)},l(r){f(t.$$.fragment,r),n=_(r),f(e.$$.fragment,r),l=_(r),f(o.$$.fragment,r)},m(r,i){$(t,r,i),d(r,n,i),$(e,r,i),d(r,l,i),$(o,r,i),s=!0},p:C,i(r){s||(m(t.$$.fragment,r),m(e.$$.fragment,r),m(o.$$.fragment,r),s=!0)},o(r){c(t.$$.fragment,r),c(e.$$.fragment,r),c(o.$$.fragment,r),s=!1},d(r){r&&(g(n),g(l)),u(t,r),u(e,r),u(o,r)}}}function H(a){let t,n;return t=new N({props:{title:"Polygon",url:"polygon",jsonData:J,$$slots:{default:[V]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment)},l(e){f(t.$$.fragment,e)},m(e,l){$(t,e,l),n=!0},p(e,[l]){const o={};l&4&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){u(t,e)}}}function K(a){return[{latLngs:{type:"LatLng[]",description:"Geographical points."},color:{type:"String",default:"#3388ff",description:"Stroke color."},weight:{type:"Number",default:3,description:"Stroke width in pixels."},opacity:{type:"Number",default:1,description:"Stroke opacity."},lineCap:{type:"String",default:"round",description:"Line cap shape."},lineJoin:{type:"String",default:"round",description:"Line join shape."},dashArray:{type:"String",default:null,description:"Dash pattern."},dashOffset:{type:"String",default:null,description:"Dash offset."},fill:{type:"Boolean",default:!1,description:"Fill flag."},fillColor:{type:"String",default:"#3388ff",description:"Fill color."},fillOpacity:{type:"Number",default:.2,description:"Fill opacity."},fillRule:{type:"String",default:"evenodd",description:"Fill rule."},options:{type:"Object",default:"undefined",description:"Options."}},{getPolygon:{description:"Returns the underlying Leaflet Polygon object instance.",link:"https://leafletjs.com/reference.html#polygon"}}]}class nt extends b{constructor(t){super(),P(this,t,K,H,h,{})}}export{nt as component};
