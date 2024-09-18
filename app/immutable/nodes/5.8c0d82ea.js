import{s as E,f as q,g as G,h as H,d,i as _,M as et,N as nt,O as lt,r as ot,z as rt,A as it,B as at,C as st,j as ft,a as M,e as F,c as S,H as ct,l as w,m as P,u as Z}from"../chunks/scheduler.3fa55d27.js";import{S as j,i as z,a as p,g as K,t as g,c as Q,b as h,d as y,m as $,e as C}from"../chunks/index.79263183.js";import{L as A,E as ut,a as mt,T as pt,C as gt,P as dt,M as _t}from"../chunks/Properties.b895d4e2.js";import{e as J}from"../chunks/each.340d928d.js";import{P as ht}from"../chunks/Polygon.20fed901.js";import{P as W}from"../chunks/Popup.c09514a5.js";import{T as X}from"../chunks/Tooltip.9799fd49.js";function x(a){let e;const n=a[18].default,t=rt(n,a,a[17],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&131072)&&it(t,n,l,l[17],e?st(n,l[17],o,null):at(l[17]),null)},i(l){e||(p(t,l),e=!0)},o(l){g(t,l),e=!1},d(l){t&&t.d(l)}}}function yt(a){let e,n,t=a[0]&&x(a);return{c(){e=q("div"),t&&t.c()},l(l){e=G(l,"DIV",{});var o=H(e);t&&t.l(o),o.forEach(d)},m(l,o){_(l,e,o),t&&t.m(e,null),n=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&p(t,1)):(t=x(l),t.c(),p(t,1),t.m(e,null)):t&&(K(),g(t,1,1,()=>{t=null}),Q())},i(l){n||(p(t),n=!0)},o(l){g(t),n=!1},d(l){l&&d(e),t&&t.d()}}}function $t(a,e,n){let{$$slots:t={},$$scope:l}=e;const{getMap:o}=et(A);let{latLng:r}=e,{radius:i=10}=e,{color:f="#3388ff"}=e,{weight:O=3}=e,{opacity:s=1}=e,{lineCap:u="round"}=e,{lineJoin:L="round"}=e,{dashArray:m=null}=e,{dashOffset:b=null}=e,{fill:v=!0}=e,{fillColor:T="#3388ff"}=e,{fillOpacity:V=.2}=e,{fillRule:N="evenodd"}=e,{options:R={}}=e,{events:D=[]}=e,k;nt(A.Layer,{getLayer:()=>k});const Y=lt();let B;ot(()=>{B.unregister(),k.removeFrom(o())});function tt(){return k}return a.$$set=c=>{"latLng"in c&&n(1,r=c.latLng),"radius"in c&&n(2,i=c.radius),"color"in c&&n(3,f=c.color),"weight"in c&&n(4,O=c.weight),"opacity"in c&&n(5,s=c.opacity),"lineCap"in c&&n(6,u=c.lineCap),"lineJoin"in c&&n(7,L=c.lineJoin),"dashArray"in c&&n(8,m=c.dashArray),"dashOffset"in c&&n(9,b=c.dashOffset),"fill"in c&&n(10,v=c.fill),"fillColor"in c&&n(11,T=c.fillColor),"fillOpacity"in c&&n(12,V=c.fillOpacity),"fillRule"in c&&n(13,N=c.fillRule),"options"in c&&n(14,R=c.options),"events"in c&&n(15,D=c.events),"$$scope"in c&&n(17,l=c.$$scope)},a.$$.update=()=>{a.$$.dirty&65535&&(k||(n(0,k=A.circleMarker(r,R).addTo(o())),B=new ut(k,Y,D)),k.setLatLng(r),k.setRadius(i),k.setStyle({color:f,weight:O,opacity:s,lineCap:u,lineJoin:L,dashArray:m,dashOffset:b,fill:v,fillColor:T,fillOpacity:V,fillRule:N}))},[k,r,i,f,O,s,u,L,m,b,v,T,V,N,R,D,tt,l,t]}class Ct extends j{constructor(e){super(),z(this,e,$t,yt,E,{latLng:1,radius:2,color:3,weight:4,opacity:5,lineCap:6,lineJoin:7,dashArray:8,dashOffset:9,fill:10,fillColor:11,fillOpacity:12,fillRule:13,options:14,events:15,getCircleMarker:16})}get getCircleMarker(){return this.$$.ctx[16]}}function U(a,e,n){const t=a.slice();return t[3]=e[n],t}function Lt(a){let e;return{c(){e=w("Sentosa")},l(n){e=P(n,"Sentosa")},m(n,t){_(n,e,t)},d(n){n&&d(e)}}}function kt(a){let e;return{c(){e=w("Sentosa")},l(n){e=P(n,"Sentosa")},m(n,t){_(n,e,t)},d(n){n&&d(e)}}}function Ot(a){let e,n,t,l;return e=new W({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),t=new X({props:{$$slots:{default:[kt]},$$scope:{ctx:a}}}),{c(){h(e.$$.fragment),n=M(),h(t.$$.fragment)},l(o){y(e.$$.fragment,o),n=S(o),y(t.$$.fragment,o)},m(o,r){$(e,o,r),_(o,n,r),$(t,o,r),l=!0},p(o,r){const i={};r&64&&(i.$$scope={dirty:r,ctx:o}),e.$set(i);const f={};r&64&&(f.$$scope={dirty:r,ctx:o}),t.$set(f)},i(o){l||(p(e.$$.fragment,o),p(t.$$.fragment,o),l=!0)},o(o){g(e.$$.fragment,o),g(t.$$.fragment,o),l=!1},d(o){o&&d(n),C(e,o),C(t,o)}}}function Mt(a){let e=a[3]+"",n;return{c(){n=w(e)},l(t){n=P(t,e)},m(t,l){_(t,n,l)},p:Z,d(t){t&&d(n)}}}function St(a){let e=a[3]+"",n;return{c(){n=w(e)},l(t){n=P(t,e)},m(t,l){_(t,n,l)},p:Z,d(t){t&&d(n)}}}function bt(a){let e,n,t,l,o;return e=new W({props:{$$slots:{default:[Mt]},$$scope:{ctx:a}}}),t=new X({props:{$$slots:{default:[St]},$$scope:{ctx:a}}}),{c(){h(e.$$.fragment),n=M(),h(t.$$.fragment),l=M()},l(r){y(e.$$.fragment,r),n=S(r),y(t.$$.fragment,r),l=S(r)},m(r,i){$(e,r,i),_(r,n,i),$(t,r,i),_(r,l,i),o=!0},p(r,i){const f={};i&64&&(f.$$scope={dirty:i,ctx:r}),e.$set(f);const O={};i&64&&(O.$$scope={dirty:i,ctx:r}),t.$set(O)},i(r){o||(p(e.$$.fragment,r),p(t.$$.fragment,r),o=!0)},o(r){g(e.$$.fragment,r),g(t.$$.fragment,r),o=!1},d(r){r&&(d(n),d(l)),C(e,r),C(t,r)}}}function I(a){let e,n;return e=new Ct({props:{latLng:a[3],radius:3,color:"#ff0000",fillColor:"#ff0000",$$slots:{default:[bt]},$$scope:{ctx:a}}}),{c(){h(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){$(e,t,l),n=!0},p(t,l){const o={};l&64&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function wt(a){let e,n,t,l,o,r;e=new pt({props:{url:vt,options:a[1]}}),t=new ht({props:{latLngs:a[2],color:"#ff0000",fillColor:"#ff0000",$$slots:{default:[Ot]},$$scope:{ctx:a}}});let i=J(a[2]),f=[];for(let s=0;s<i.length;s+=1)f[s]=I(U(a,i,s));const O=s=>g(f[s],1,1,()=>{f[s]=null});return{c(){h(e.$$.fragment),n=M(),h(t.$$.fragment),l=M();for(let s=0;s<f.length;s+=1)f[s].c();o=F()},l(s){y(e.$$.fragment,s),n=S(s),y(t.$$.fragment,s),l=S(s);for(let u=0;u<f.length;u+=1)f[u].l(s);o=F()},m(s,u){$(e,s,u),_(s,n,u),$(t,s,u),_(s,l,u);for(let L=0;L<f.length;L+=1)f[L]&&f[L].m(s,u);_(s,o,u),r=!0},p(s,u){const L={};if(u&64&&(L.$$scope={dirty:u,ctx:s}),t.$set(L),u&4){i=J(s[2]);let m;for(m=0;m<i.length;m+=1){const b=U(s,i,m);f[m]?(f[m].p(b,u),p(f[m],1)):(f[m]=I(b),f[m].c(),p(f[m],1),f[m].m(o.parentNode,o))}for(K(),m=i.length;m<f.length;m+=1)O(m);Q()}},i(s){if(!r){p(e.$$.fragment,s),p(t.$$.fragment,s);for(let u=0;u<i.length;u+=1)p(f[u]);r=!0}},o(s){g(e.$$.fragment,s),g(t.$$.fragment,s),f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)g(f[u]);r=!1},d(s){s&&(d(n),d(l),d(o)),C(e,s),C(t,s),ct(f,s)}}}function Pt(a){let e,n,t;return n=new mt({props:{options:a[0],$$slots:{default:[wt]},$$scope:{ctx:a}}}),{c(){e=q("div"),h(n.$$.fragment),this.h()},l(l){e=G(l,"DIV",{class:!0});var o=H(e);y(n.$$.fragment,o),o.forEach(d),this.h()},h(){ft(e,"class","mb-4 h-96")},m(l,o){_(l,e,o),$(n,e,null),t=!0},p(l,[o]){const r={};o&64&&(r.$$scope={dirty:o,ctx:l}),n.$set(r)},i(l){t||(p(n.$$.fragment,l),t=!0)},o(l){g(n.$$.fragment,l),t=!1},d(l){l&&d(e),C(n)}}}const vt="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function Tt(a){return[{center:[1.250111,103.830933],zoom:14},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},[[1.2605024,103.804856],[1.2595155,103.8058001],[1.2572416,103.8080317],[1.2555254,103.808418],[1.2549247,103.8096625],[1.2527365,103.8122374],[1.2507629,103.8157565],[1.2486177,103.8189322],[1.2460862,103.8224942],[1.2419673,103.8262707],[1.2378055,103.8309485],[1.2371619,103.8328797],[1.2374194,103.8341242],[1.2383204,103.8351113],[1.2383204,103.8356263],[1.238063,103.8371712],[1.2398221,103.8398749],[1.241195,103.841334],[1.2435977,103.8437373],[1.2460004,103.8454539],[1.2487035,103.8477713],[1.2523075,103.8492304],[1.2535517,103.8473851],[1.2536805,103.845883],[1.2531227,103.844381],[1.2528653,103.8425786],[1.2541953,103.8420636],[1.2540666,103.8404757],[1.2545386,103.838287],[1.2538092,103.8371283],[1.2537234,103.8350684],[1.255225,103.8321501],[1.2550534,103.829189],[1.2556112,103.8254124],[1.2581855,103.8233954],[1.2601591,103.8198763],[1.2608027,103.8168294],[1.2596443,103.8136965],[1.2605024,103.804856]]]}class Vt extends j{constructor(e){super(),z(this,e,Tt,Pt,E,{})}}const Nt=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, CircleMarker, Popup, TileLayer, Tooltip, Polygon } from '$lib/index';

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
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Polygon latLngs={polygon1} color="#ff0000" fillColor="#ff0000">
			<Popup>Sentosa</Popup>
			<Tooltip>Sentosa</Tooltip>
		</Polygon>
		{#each polygon1 as point}
			<CircleMarker latLng={point} radius={3} color="#ff0000" fillColor="#ff0000">
				<Popup>{point}</Popup>
				<Tooltip>{point}</Tooltip>
			</CircleMarker>
		{/each}
	</LeafletMap>
</div>

`,lang:"svelte"}}];function Rt(a){let e,n,t,l,o,r;return e=new Vt({}),t=new dt({props:{properties:a[0]}}),o=new _t({props:{methods:a[1]}}),{c(){h(e.$$.fragment),n=M(),h(t.$$.fragment),l=M(),h(o.$$.fragment)},l(i){y(e.$$.fragment,i),n=S(i),y(t.$$.fragment,i),l=S(i),y(o.$$.fragment,i)},m(i,f){$(e,i,f),_(i,n,f),$(t,i,f),_(i,l,f),$(o,i,f),r=!0},p:Z,i(i){r||(p(e.$$.fragment,i),p(t.$$.fragment,i),p(o.$$.fragment,i),r=!0)},o(i){g(e.$$.fragment,i),g(t.$$.fragment,i),g(o.$$.fragment,i),r=!1},d(i){i&&(d(n),d(l)),C(e,i),C(t,i),C(o,i)}}}function Dt(a){let e,n;return e=new gt({props:{title:"Circle Marker",url:"circle-marker",jsonData:Nt,$$slots:{default:[Rt]},$$scope:{ctx:a}}}),{c(){h(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){$(e,t,l),n=!0},p(t,[l]){const o={};l&4&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function At(a){return[{latLng:{type:"LatLng",description:"Geographical point."},radius:{type:"Number",description:"Radius in meters."},color:{type:"String",description:"Stroke color.",defaultValue:"#3388ff"},weight:{type:"Number",description:"Stroke width in pixels.",defaultValue:3},opacity:{type:"Number",description:"Stroke opacity.",defaultValue:1},lineCap:{type:"String",description:"Line cap shape.",defaultValue:"round"},lineJoin:{type:"String",description:"Line join shape.",defaultValue:"round"},dashArray:{type:"String",description:"Dash pattern.",defaultValue:null},dashOffset:{type:"String",description:"Dash offset.",defaultValue:null},fill:{type:"Boolean",description:"Fill flag."},fillColor:{type:"String",description:"Fill color.",defaultValue:"#3388ff"},fillOpacity:{type:"Number",description:"Fill opacity.",defaultValue:.2},fillRule:{type:"String",description:"Fill rule.",defaultValue:"evenodd"},options:{type:"Object",description:"Options.",defaultValue:void 0}},[{name:"getMap()",description:"Returns the underlying Leaflet Map object instance."}]]}class xt extends j{constructor(e){super(),z(this,e,At,Dt,E,{})}}export{xt as component};
