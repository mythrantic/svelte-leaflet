import{s as I,z as S,f as O,g as w,h as j,d as v,i as h,A as T,B as E,C as N,M as P,p as U,j as V,a as k,c as b,u as y,G as q,k as L}from"../chunks/scheduler.3fa55d27.js";import{S as x,i as D,a as c,t as $,b as m,d as u,m as g,e as d}from"../chunks/index.79263183.js";import{L as Z,a as A,T as B,C as G,P as R,M as F}from"../chunks/Properties.b895d4e2.js";import{M}from"../chunks/Marker.e34bb875.js";function H(i){let t,r;const e=i[5].default,n=S(e,i,i[4],null);return{c(){t=O("div"),n&&n.c()},l(o){t=w(o,"DIV",{});var l=j(t);n&&n.l(l),l.forEach(v)},m(o,l){h(o,t,l),n&&n.m(t,null),i[6](t),r=!0},p(o,[l]){n&&n.p&&(!r||l&16)&&T(n,e,o,o[4],r?N(e,o[4],l,null):E(o[4]),null)},i(o){r||(c(n,o),r=!0)},o(o){$(n,o),r=!1},d(o){o&&v(t),n&&n.d(o),i[6](null)}}}function J(i,t,r){let{$$slots:e={},$$scope:n}=t;const{getMarker:o}=P(Z.Marker);let{options:l={}}=t,s,f;function a(){return s}function p(_){U[_?"unshift":"push"](()=>{f=_,r(0,f)})}return i.$$set=_=>{"options"in _&&r(1,l=_.options),"$$scope"in _&&r(4,n=_.$$scope)},i.$$.update=()=>{i.$$.dirty&11&&(r(3,s=Z.divIcon({html:f,...l})),o().setIcon(s))},[f,l,a,s,n,e,p]}class z extends x{constructor(t){super(),D(this,t,J,H,I,{options:1,getIcon:2})}get getIcon(){return this.$$.ctx[2]}}function K(i){let t,r;return t=new z({props:{options:i[2]}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){g(t,e,n),r=!0},p:y,i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){d(t,e)}}}function Q(i){let t,r="using slot";return{c(){t=O("div"),t.textContent=r,this.h()},l(e){t=w(e,"DIV",{style:!0,"data-svelte-h":!0}),q(t)!=="svelte-1b775nv"&&(t.textContent=r),this.h()},h(){L(t,"background-color","#0000ff"),L(t,"color","#fff"),L(t,"width","40px")},m(e,n){h(e,t,n)},p:y,d(e){e&&v(t)}}}function W(i){let t,r;return t=new z({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){g(t,e,n),r=!0},p(e,n){const o={};n&8&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){d(t,e)}}}function X(i){let t,r,e,n,o,l,s,f;return t=new B({props:{url:tt,options:i[1]}}),e=new M({props:{latLng:[1.282375,103.864273]}}),o=new M({props:{latLng:[1.359167,103.989441],$$slots:{default:[K]},$$scope:{ctx:i}}}),s=new M({props:{latLng:[1.359167,103.789441],$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment),r=k(),m(e.$$.fragment),n=k(),m(o.$$.fragment),l=k(),m(s.$$.fragment)},l(a){u(t.$$.fragment,a),r=b(a),u(e.$$.fragment,a),n=b(a),u(o.$$.fragment,a),l=b(a),u(s.$$.fragment,a)},m(a,p){g(t,a,p),h(a,r,p),g(e,a,p),h(a,n,p),g(o,a,p),h(a,l,p),g(s,a,p),f=!0},p(a,p){const _={};p&8&&(_.$$scope={dirty:p,ctx:a}),o.$set(_);const C={};p&8&&(C.$$scope={dirty:p,ctx:a}),s.$set(C)},i(a){f||(c(t.$$.fragment,a),c(e.$$.fragment,a),c(o.$$.fragment,a),c(s.$$.fragment,a),f=!0)},o(a){$(t.$$.fragment,a),$(e.$$.fragment,a),$(o.$$.fragment,a),$(s.$$.fragment,a),f=!1},d(a){a&&(v(r),v(n),v(l)),d(t,a),d(e,a),d(o,a),d(s,a)}}}function Y(i){let t,r,e;return r=new A({props:{options:i[0],$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){t=O("div"),m(r.$$.fragment),this.h()},l(n){t=w(n,"DIV",{class:!0});var o=j(t);u(r.$$.fragment,o),o.forEach(v),this.h()},h(){V(t,"class","mb-4 h-96")},m(n,o){h(n,t,o),g(r,t,null),e=!0},p(n,[o]){const l={};o&8&&(l.$$scope={dirty:o,ctx:n}),r.$set(l)},i(n){e||(c(r.$$.fragment,n),e=!0)},o(n){$(r.$$.fragment,n),e=!1},d(n){n&&v(t),d(r)}}}const tt="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";function et(i){return[{center:[1.364917,103.822872],zoom:11},{minZoom:0,maxZoom:20,maxNativeZoom:19,attribution:"© OpenStreetMap contributors"},{html:"<div style='background-color: #ff0000; color: #fff; width: 40px'>using props</div>"}]}class nt extends x{constructor(t){super(),D(this,t,et,Y,I,{})}}const rt=[{id:"12",name:"header",data:{text:"Example in Code (this is NOT the actual code. docs is still in development)",level:1}},{id:"140",name:"code",data:{text:`<script>
	import { LeafletMap, DivIcon, Marker, TileLayer } from '$lib/index';

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
		html: "<div style='background-color: #ff0000; color: #fff; width: 40px'>using props</div>"
	};
<\/script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Marker latLng={[1.282375, 103.864273]} />
		<Marker latLng={[1.359167, 103.989441]}>
			<DivIcon options={iconOptions} />
		</Marker>
		<Marker latLng={[1.359167, 103.789441]}>
			<DivIcon>
				<div style="background-color: #0000ff; color: #fff; width: 40px">using slot</div>
			</DivIcon>
		</Marker>
	</LeafletMap>
</div>

`,lang:"svelte"}}];function ot(i){let t,r,e,n,o,l;return t=new nt({}),e=new R({props:{properties:i[0]}}),o=new F({props:{methods:i[1]}}),{c(){m(t.$$.fragment),r=k(),m(e.$$.fragment),n=k(),m(o.$$.fragment)},l(s){u(t.$$.fragment,s),r=b(s),u(e.$$.fragment,s),n=b(s),u(o.$$.fragment,s)},m(s,f){g(t,s,f),h(s,r,f),g(e,s,f),h(s,n,f),g(o,s,f),l=!0},p:y,i(s){l||(c(t.$$.fragment,s),c(e.$$.fragment,s),c(o.$$.fragment,s),l=!0)},o(s){$(t.$$.fragment,s),$(e.$$.fragment,s),$(o.$$.fragment,s),l=!1},d(s){s&&(v(r),v(n)),d(t,s),d(e,s),d(o,s)}}}function st(i){let t,r;return t=new G({props:{title:"Div Icon",url:"div-icon",jsonData:rt,$$slots:{default:[ot]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,n){g(t,e,n),r=!0},p(e,[n]){const o={};n&4&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){d(t,e)}}}function at(i){return[{options:{type:"Object",default:"undefined",description:"Options."}},{getIcon:{description:"Returns the underlying Leaflet Icon object instance.",link:"https://leafletjs.com/reference.html#icon"}}]}class ct extends x{constructor(t){super(),D(this,t,at,st,I,{})}}export{ct as component};
