/*! Eye3D 0.3.1 - Katviiz AI Aperture Eye - bundles three.js r183.2 (MIT, vendor/LICENSE) - built Tue 11/03/2026 */
(()=>{var Gc=0,ml=1,Hc=2;var js=1,Wc=2,ji=3,Ln=0,De=1,_n=2,yn=0,hi=1,gl=2,xl=3,_l=4,Xc=5;var Wn=100,qc=101,Yc=102,Zc=103,Jc=104,$c=200,Kc=201,jc=202,Qc=203,Ur=204,Or=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,ah=212,oh=213,lh=214,Br=0,kr=1,zr=2,ui=3,Vr=4,Gr=5,Hr=6,Wr=7,Sa=0,ch=1,hh=2,$e=0,yl=1,vl=2,Ml=3,Sl=4,bl=5,Al=6,El=7;var wl=300,jn=301,xi=302,ba=303,Aa=304,Qs=306,Xr=1e3,pn=1001,qr=1002,be=1003,uh=1004;var tr=1005;var ge=1006,Ea=1007;var Qn=1008;var Be=1009,Tl=1010,Cl=1011,Qi=1012,wa=1013,hn=1014,tn=1015,vn=1016,Ta=1017,Ca=1018,ts=1020,Rl=35902,Il=35899,Pl=1021,Ll=1022,en=1023,mn=1026,ti=1027,Ra=1028,Ia=1029,_i=1030,Pa=1031;var La=1033,er=33776,nr=33777,ir=33778,sr=33779,Da=35840,Na=35841,Fa=35842,Ua=35843,Oa=36196,Ba=37492,ka=37496,za=37488,Va=37489,Ga=37490,Ha=37491,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,Ja=37813,$a=37814,Ka=37815,ja=37816,Qa=37817,to=37818,eo=37819,no=37820,io=37821,so=36492,ro=36494,ao=36495,oo=36283,lo=36284,co=36285,ho=36286;var ys=2300,Yr=2301,Fr=2302,el=2303,nl=2400,il=2401,sl=2402;var dh=3200;var Dl=0,fh=1,Nn="",Me="srgb",di="srgb-linear",vs="linear",ee="srgb";var ci=7680,uo=7681;var fo=514;var Nl=517;var Ms=519,ph=512,mh=513,gh=514,po=515,xh=516,_h=517,mo=518,yh=519,rl=35044;var Fl="300 es",ln=2e3,zi=2001;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=Ss("canvas");return i.style.display="block",i}var mc={},Vi=null;function Ul(...i){let t="THREE."+i.shift();Vi?Vi("log",t,...i):console.log(t,...i)}function Mh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Mh(i);let t="THREE."+i.shift();if(Vi)Vi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=Mh(i);let t="THREE."+i.shift();if(Vi)Vi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bs(...i){let t=i.join(" ");t in mc||(mc[t]=!0,Ht(...i))}function Sh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var bh={[Br]:kr,[zr]:Hr,[Vr]:Wr,[ui]:Gr,[kr]:Br,[Hr]:zr,[Wr]:Vr,[Gr]:ui},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Co=Math.PI/180,Zr=180/Math.PI;function es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Mu(i,t){return(i%t+t)%t}function Ro(i,t,e){return(1-e)*i+e*t}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*_;p<0&&(h=-h,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),y=Math.sin(M);m=Math.sin(m*M)/y,o=Math.sin(o*M)/y,c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+_*o}else{c=c*m+h*o,l=l*m+f*o,u=u*m+g*o,d=d*m+_*o;let M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new V,gc=new Ue,Wt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],y=s[4],b=s[7],R=s[2],C=s[5],D=s[8];return r[0]=a*_+o*M+c*R,r[3]=a*p+o*y+c*C,r[6]=a*m+o*b+c*D,r[1]=l*_+u*M+d*R,r[4]=l*p+u*y+d*C,r[7]=l*m+u*b+d*D,r[2]=h*_+f*M+g*R,r[5]=h*p+f*y+g*C,r[8]=h*m+f*b+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*l-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Po=new Wt,xc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){let i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:t,whitePoint:n,transfer:vs,toXYZ:xc,fromXYZ:_c,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:xc,fromXYZ:_c,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}var Qt=Su();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Jr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=Ss("canvas")),wi.width=t.width,wi.height=t.height;let s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bu=0,Gi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Au=0,Do=new V,Oe=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,s=pn,r=ge,a=Qn,o=en,c=Be,l=i.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=es(),this.name="",this.source=new Gi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xr:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xr:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=wl;Oe.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,b=(f+1)/2,R=(m+1)/2,C=(u+h)/4,D=(d+_)/4,x=(g+p)/4;return y>b&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=D/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=x/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=D/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$r=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Oe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends $r{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},As=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kr=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ie=class i{constructor(t,e,n,s,r,a,o,c,l,u,d,h,f,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,_,p)}set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-o*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){let h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eu,t,wu)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),On.crossVectors(n,He),On.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),On.crossVectors(n,He)),On.normalize(),ur.crossVectors(He,On),s[0]=On.x,s[4]=ur.x,s[8]=He.x,s[1]=On.y,s[5]=ur.y,s[9]=He.y,s[2]=On.z,s[6]=ur.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],y=n[7],b=n[11],R=n[15],C=s[0],D=s[4],x=s[8],A=s[12],F=s[1],P=s[5],N=s[9],q=s[13],J=s[2],W=s[6],k=s[10],U=s[14],H=s[3],at=s[7],dt=s[11],_t=s[15];return r[0]=a*C+o*F+c*J+l*H,r[4]=a*D+o*P+c*W+l*at,r[8]=a*x+o*N+c*k+l*dt,r[12]=a*A+o*q+c*U+l*_t,r[1]=u*C+d*F+h*J+f*H,r[5]=u*D+d*P+h*W+f*at,r[9]=u*x+d*N+h*k+f*dt,r[13]=u*A+d*q+h*U+f*_t,r[2]=g*C+_*F+p*J+m*H,r[6]=g*D+_*P+p*W+m*at,r[10]=g*x+_*N+p*k+m*dt,r[14]=g*A+_*q+p*U+m*_t,r[3]=M*C+y*F+b*J+R*H,r[7]=M*D+y*P+b*W+R*at,r[11]=M*x+y*N+b*k+R*dt,r[15]=M*A+y*q+b*U+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],M=c*f-l*h,y=o*f-l*d,b=o*h-c*d,R=a*f-l*u,C=a*h-c*u,D=a*d-o*u;return e*(_*M-p*y+m*b)-n*(g*M-p*R+m*C)+s*(g*y-_*R+m*D)-r*(g*b-_*C+p*D)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=e*o-n*a,y=e*c-s*a,b=e*l-r*a,R=n*c-s*o,C=n*l-r*o,D=s*l-r*c,x=u*_-d*g,A=u*p-h*g,F=u*m-f*g,P=d*p-h*_,N=d*m-f*_,q=h*m-f*p,J=M*q-y*N+b*P+R*F-C*A+D*x;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/J;return t[0]=(o*q-c*N+l*P)*W,t[1]=(s*N-n*q-r*P)*W,t[2]=(_*D-p*C+m*R)*W,t[3]=(h*C-d*D-f*R)*W,t[4]=(c*F-a*q-l*A)*W,t[5]=(e*q-s*F+r*A)*W,t[6]=(p*b-g*D-m*y)*W,t[7]=(u*D-h*b+f*y)*W,t[8]=(a*N-o*F+l*x)*W,t[9]=(n*F-e*N-r*x)*W,t[10]=(g*C-_*b+m*M)*W,t[11]=(d*b-u*C-f*M)*W,t[12]=(o*A-a*P-c*x)*W,t[13]=(e*P-n*A+s*x)*W,t[14]=(_*y-g*R-p*M)*W,t[15]=(u*R-d*y+h*M)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,_=a*u,p=a*d,m=o*d,M=c*l,y=c*u,b=c*d,R=n.x,C=n.y,D=n.z;return s[0]=(1-(_+m))*R,s[1]=(f+b)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(f-b)*C,s[5]=(1-(h+m))*C,s[6]=(p+M)*C,s[7]=0,s[8]=(g+y)*D,s[9]=(p-M)*D,s[10]=(1-(h+_))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ti.set(s[0],s[1],s[2]).length(),o=Ti.set(s[4],s[5],s[6]).length(),c=Ti.set(s[8],s[9],s[10]).length();r<0&&(a=-a),rn.copy(this);let l=1/a,u=1/o,d=1/c;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=ln,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===zi)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===ln)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===zi)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ti=new V,rn=new ie,Eu=new V(0,0,0),wu=new V(1,1,1),On=new V,ur=new V,He=new V,yc=new ie,vc=new Ue,Ye=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ye.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tu=0,Mc=new V,Ci=new Ue,En=new ie,dr=new V,hs=new V,Cu=new V,Ru=new Ue,Sc=new V(1,0,0),bc=new V(0,1,0),Ac=new V(0,0,1),Ec={type:"added"},Iu={type:"removed"},Ri={type:"childadded",child:null},No={type:"childremoved",child:null},Pe=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Ye,n=new Ue,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Wt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(hs,dr,this.up):En.lookAt(dr,hs,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(En),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),No.child=t,this.dispatchEvent(No),No.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new V(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pu={type:"move"},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Mu(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fo(a,r,t+1/3),this.g=Fo(a,r,t),this.b=Fo(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Qt.workingToColorSpace(Ce.copy(this),t),Math.round(jt(Ce.r*255,0,255))*65536+Math.round(jt(Ce.g*255,0,255))*256+Math.round(jt(Ce.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Me){Qt.workingToColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(fr);let n=Ro(Bn.h,fr.h,e),s=Ro(Bn.s,fr.s,e),r=Ro(Bn.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Kt;Kt.NAMES=Ah;var ws=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ts=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},an=new V,wn=new V,Uo=new V,Tn=new V,Ii=new V,Pi=new V,wc=new V,Oo=new V,Bo=new V,ko=new V,zo=new de,Vo=new de,Go=new de,Hn=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),wn.subVectors(n,e),Uo.subVectors(t,e);let a=an.dot(an),o=an.dot(wn),c=an.dot(Uo),l=wn.dot(wn),u=wn.dot(Uo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return zo.setScalar(0),Vo.setScalar(0),Go.setScalar(0),zo.fromBufferAttribute(t,e),Vo.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zo,r.x),a.addScaledVector(Vo,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Pi.subVectors(r,n),Oo.subVectors(t,n);let c=Ii.dot(Oo),l=Pi.dot(Oo);if(c<=0&&l<=0)return e.copy(n);Bo.subVectors(t,s);let u=Ii.dot(Bo),d=Pi.dot(Bo);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ii,a);ko.subVectors(t,r);let f=Ii.dot(ko),g=Pi.dot(ko);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Pi,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return wc.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(wc,o);let m=1/(p+_+h);return a=_*m,o=h*m,e.copy(n).addScaledVector(Ii,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),mr.subVectors(this.max,us),Li.subVectors(t.a,us),Di.subVectors(t.b,us),Ni.subVectors(t.c,us),kn.subVectors(Di,Li),zn.subVectors(Ni,Di),ri.subVectors(Li,Ni);let e=[0,-kn.z,kn.y,0,-zn.z,zn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,zn.z,0,-zn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-zn.y,zn.x,0,-ri.y,ri.x,0];return!Ho(e,Li,Di,Ni,mr)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,Li,Di,Ni,mr))?!1:(gr.crossVectors(kn,zn),e=[gr.x,gr.y,gr.z],Ho(e,Li,Di,Ni,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Cn=[new V,new V,new V,new V,new V,new V,new V,new V],on=new V,pr=new gn,Li=new V,Di=new V,Ni=new V,kn=new V,zn=new V,ri=new V,us=new V,mr=new V,gr=new V,ai=new V;function Ho(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);let o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var me=new V,xr=new ht,Lu=0,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}};var Cs=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rs=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Du=new gn,ds=new V,Wo=new V,Xn=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Du.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Wo)),this.expandByPoint(ds.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Nu=0,Ke=new ie,Xo=new Pe,Fi=new V,We=new gn,fs=new gn,ve=new V,he=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?Rs:Cs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(We.min,fs.min),We.expandByPoint(ve),ve.addVectors(We.max,fs.max),We.expandByPoint(ve)):(We.expandByPoint(fs.min),We.expandByPoint(fs.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ve.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(t,l),ve.add(Fi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new V,c[x]=new V;let l=new V,u=new V,d=new V,h=new ht,f=new ht,g=new ht,_=new V,p=new V;function m(x,A,F){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,F),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[x].add(_),o[A].add(_),o[F].add(_),c[x].add(p),c[A].add(p),c[F].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,A=M.length;x<A;++x){let F=M[x],P=F.start,N=F.count;for(let q=P,J=P+N;q<J;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let y=new V,b=new V,R=new V,C=new V;function D(x){R.fromBufferAttribute(s,x),C.copy(R);let A=o[x];y.copy(A),y.sub(R.multiplyScalar(R.dot(A))).normalize(),b.crossVectors(C,A);let P=b.dot(c[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,P)}for(let x=0,A=M.length;x<A;++x){let F=M[x],P=F.start,N=F.count;for(let q=P,J=P+N;q<J;q+=3)D(t.getX(q+0)),D(t.getX(q+1)),D(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,a=new V,o=new V,c=new V,l=new V,u=new V,d=new V;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new Se(h,u,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fu=0,qn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=es(),this.name="",this.type="Material",this.blending=hi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Or,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ms,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ms&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Rn=new V,qo=new V,_r=new V,Vn=new V,Yo=new V,yr=new V,Zo=new V,jr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qo.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(qo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=Vn.dot(this.direction),c=-Vn.dot(_r),l=Vn.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qo).addScaledVector(_r,h),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){Yo.subVectors(e,t),yr.subVectors(n,t),Zo.crossVectors(Yo,yr);let a=this.direction.dot(Zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let c=o*this.direction.dot(yr.crossVectors(Vn,yr));if(c<0)return null;let l=o*this.direction.dot(Yo.cross(Vn));if(l<0||c+l>a)return null;let u=-o*Vn.dot(Zo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tc=new ie,oi=new jr,vr=new Xn,Cc=new V,Mr=new V,Sr=new V,br=new V,Jo=new V,Ar=new V,Rc=new V,Er=new V,le=class extends Pe{constructor(t=new he,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(Jo.fromBufferAttribute(d,t),a?Ar.addScaledVector(Jo,u):Ar.addScaledVector(Jo.sub(e),u))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(vr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(vr,Cc)===null||oi.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,R=y;b<R;b+=3){let C=o.getX(b),D=o.getX(b+1),x=o.getX(b+2);s=wr(this,m,t,n,l,u,d,C,D,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);s=wr(this,a,t,n,l,u,d,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,R=y;b<R;b+=3){let C=b,D=b+1,x=b+2;s=wr(this,m,t,n,l,u,d,C,D,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,y=p+1,b=p+2;s=wr(this,a,t,n,l,u,d,M,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Uu(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ln,o),c===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:i}}function wr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Mr),i.getVertexPosition(c,Sr),i.getVertexPosition(l,br);let u=Uu(i,t,e,n,Mr,Sr,br,Rc);if(u){let d=new V;Hn.getBarycoord(Rc,Mr,Sr,br,d),s&&(u.uv=Hn.getInterpolatedAttribute(s,o,c,l,d,new ht)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,o,c,l,d,new ht)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,c,l,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new V,materialIndex:0};Hn.getNormal(Mr,Sr,br,h.normal),u.face=h,u.barycoord=d}return u}var Is=class extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=be,u=be,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wi=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ui=new ie,Ic=new ie,Tr=[],Pc=new gn,Ou=new ie,ps=new le,ms=new Xn,Xi=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ou)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),Pc.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Pc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),ms.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),t.ray.intersectsSphere(ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),Ic.multiplyMatrices(n,Ui),ps.matrixWorld=Ic,ps.raycast(t,Tr);for(let a=0,o=Tr.length;a<o;a++){let c=Tr[a];c.instanceId=r,c.object=this,e.push(c)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(s*this.count),s,this.count,Ra,tn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$o=new V,Bu=new V,ku=new Wt,fn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$o.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ku.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new Xn,zu=new ht(.5,.5),Cr=new V,qi=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],M=r[12],y=r[13],b=r[14],R=r[15];if(s[0].setComponents(l-a,f-u,m-g,R-M).normalize(),s[1].setComponents(l+a,f+u,m+g,R+M).normalize(),s[2].setComponents(l+o,f+d,m+_,R+y).normalize(),s[3].setComponents(l-o,f-d,m-_,R-y).normalize(),n)s[4].setComponents(c,h,p,b).normalize(),s[5].setComponents(l-c,f-h,m-p,R-b).normalize();else if(s[4].setComponents(l-c,f-h,m-p,R-b).normalize(),e===ln)s[5].setComponents(l+c,f+h,m+p,R+b).normalize();else if(e===zi)s[5].setComponents(c,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);let e=zu.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fi=class extends Oe{constructor(t=[],e=jn,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Yn=class extends Oe{constructor(t,e,n=hn,s,r,a,o=be,c=be,l,u=mn,d=1){if(u!==mn&&u!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qr=class extends Yn{constructor(t,e=hn,n=jn,s,r,a=be,o=be,c,l=mn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ps=class extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yi=class i extends he{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function g(_,p,m,M,y,b,R,C,D,x,A){let F=b/D,P=R/x,N=b/2,q=R/2,J=C/2,W=D+1,k=x+1,U=0,H=0,at=new V;for(let dt=0;dt<k;dt++){let _t=dt*P-q;for(let At=0;At<W;At++){let Vt=At*F-N;at[_]=Vt*M,at[p]=_t*y,at[m]=J,l.push(at.x,at.y,at.z),at[_]=0,at[p]=0,at[m]=C>0?1:-1,u.push(at.x,at.y,at.z),d.push(At/D),d.push(1-dt/x),U+=1}}for(let dt=0;dt<x;dt++)for(let _t=0;_t<D;_t++){let At=h+_t+W*dt,Vt=h+_t+W*(dt+1),K=h+(_t+1)+W*(dt+1),B=h+(_t+1)+W*dt;c.push(At,Vt,B),c.push(Vt,K,B),H+=6}o.addGroup(f,H,A),f+=H,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ls=class i extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new V,u=new ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var ta=class i extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new V,b=new V,R=new V;for(let C=0;C<e.length;C+=3)f(e[C+0],y),f(e[C+1],b),f(e[C+2],R),c(y,b,R,M)}function c(M,y,b,R){let C=R+1,D=[];for(let x=0;x<=C;x++){D[x]=[];let A=M.clone().lerp(b,x/C),F=y.clone().lerp(b,x/C),P=C-x;for(let N=0;N<=P;N++)N===0&&x===C?D[x][N]=A:D[x][N]=A.clone().lerp(F,N/P)}for(let x=0;x<C;x++)for(let A=0;A<2*(C-x)-1;A++){let F=Math.floor(A/2);A%2===0?(h(D[x][F+1]),h(D[x+1][F]),h(D[x][F])):(h(D[x][F+1]),h(D[x+1][F+1]),h(D[x+1][F]))}}function l(M){let y=new V;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(M),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function u(){let M=new V;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let b=p(M)/2/Math.PI+.5,R=m(M)/Math.PI+.5;a.push(b,1-R)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let y=a[M+0],b=a[M+2],R=a[M+4],C=Math.max(y,b,R),D=Math.min(y,b,R);C>.9&&D<.1&&(y<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,y){let b=M*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){let M=new V,y=new V,b=new V,R=new V,C=new ht,D=new ht,x=new ht;for(let A=0,F=0;A<r.length;A+=9,F+=6){M.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),C.set(a[F+0],a[F+1]),D.set(a[F+2],a[F+3]),x.set(a[F+4],a[F+5]),R.copy(M).add(y).add(b).divideScalar(3);let P=p(R);_(C,F+0,M,P),_(D,F+2,y,P),_(x,F+4,b,P)}}function _(M,y,b,R){R<0&&M.x===1&&(a[y]=M.x-1),b.x===0&&b.z===0&&(a[y]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ht:new V);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,s=[],r=[],a=[],o=new V,c=new ie;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new V)}r[0]=new V,a[0]=new V;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zi=class extends Ze{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ea=class extends Zi{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ol(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Rr=new V,Ko=new Ol,jo=new Ol,Qo=new Ol,na=class extends Ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Rr.subVectors(s[0],s[1]).add(s[0]),l=Rr);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ko.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,p),jo.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,p),Qo.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),jo.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Qo.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Ko.calc(c),jo.calc(c),Qo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Vu(i,t){let e=1-i;return e*e*t}function Gu(i,t){return 2*(1-i)*i*t}function Hu(i,t){return i*i*t}function xs(i,t,e,n){return Vu(i,t)+Gu(i,e)+Hu(i,n)}function Wu(i,t){let e=1-i;return e*e*e*t}function Xu(i,t){let e=1-i;return 3*e*e*i*t}function qu(i,t){return 3*(1-i)*i*i*t}function Yu(i,t){return i*i*i*t}function _s(i,t,e,n,s){return Wu(i,t)+Xu(i,e)+qu(i,n)+Yu(i,s)}var Ds=class extends Ze{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,s.x,r.x,a.x,o.x),_s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ia=class extends Ze{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,s.x,r.x,a.x,o.x),_s(t,s.y,r.y,a.y,o.y),_s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ns=class extends Ze{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends Ze{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fs=class extends Ze{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(t,s.x,r.x,a.x),xs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends Ze{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(t,s.x,r.x,a.x),xs(t,s.y,r.y,a.y),xs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Us=class extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Lc(o,c.x,l.x,u.x,d.x),Lc(o,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},al=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:na,CubicBezierCurve:Ds,CubicBezierCurve3:ia,EllipseCurve:Zi,LineCurve:Ns,LineCurve3:sa,QuadraticBezierCurve:Fs,QuadraticBezierCurve3:ra,SplineCurve:Us}),aa=class extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new al[s.type]().fromJSON(s))}return this}},xn=class extends aa{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ns(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Fs(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ds(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Us(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Zi(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fe=class extends xn{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xn().fromJSON(s))}return this}};function Zu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Eh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Qu(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,d=c;for(let h=e;h<s;h+=e){let f=i[h],g=i[h+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Os(r,a,e,o,c,l,0),a}function Eh(i,t,e,n,s){let r;if(s===hd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Dc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Dc(a/n|0,i[a],i[a+1],r);return r&&Ji(r,r.next)&&(ks(r),r=r.next),r}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ji(e,e.next)||ue(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Os(i,t,e,n,s,r,a){if(!i)return;!a&&r&&sd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?$u(i,n,s,r):Ju(i)){t.push(c.i,i.i,l.i),ks(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Ku(pi(i),t),Os(i,t,e,n,s,r,2)):a===2&&ju(i,t,e,n,s,r):Os(pi(i),t,e,n,s,r,1);break}}}function Ju(i){let t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=Math.min(s,r,a),d=Math.min(o,c,l),h=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&gs(s,o,r,c,a,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $u(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,c,l),g=Math.min(u,d,h),_=Math.max(o,c,l),p=Math.max(u,d,h),m=ol(f,g,t,e,n),M=ol(_,p,t,e,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=m&&b&&b.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&gs(o,u,c,d,l,h,y.x,y.y)&&ue(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&gs(o,u,c,d,l,h,b.x,b.y)&&ue(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&gs(o,u,c,d,l,h,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&gs(o,u,c,d,l,h,b.x,b.y)&&ue(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ku(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ji(n,s)&&Th(n,e,e.next,s)&&Bs(n,s)&&Bs(s,n)&&(t.push(n.i,e.i,s.i),ks(e),ks(e.next),e=i=s),e=e.next}while(e!==i);return pi(e)}function ju(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&od(a,o)){let c=Ch(a,o);a=pi(a,a.next),c=pi(c,c.next),Os(a,t,e,n,s,r,0),Os(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Qu(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Eh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ad(l))}s.sort(td);for(let r=0;r<s.length;r++)e=ed(s[r],e);return e}function td(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ed(i,t){let e=nd(i,t);if(!e)return t;let n=Ch(e,i);return pi(n,n.next),pi(e,e.next)}function nd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ji(i,e))return e;do{if(Ji(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&wh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Bs(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&id(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function id(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function sd(i,t,e,n){let s=i;do s.z===0&&(s.z=ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rd(s)}function rd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function wh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function gs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&wh(i,t,e,n,s,r,a,o)}function od(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ld(i,t)&&(Bs(i,t)&&Bs(t,i)&&cd(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Ji(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ji(i,t){return i.x===t.x&&i.y===t.y}function Th(i,t,e,n){let s=Pr(ue(i,t,e)),r=Pr(ue(i,t,n)),a=Pr(ue(e,n,i)),o=Pr(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&Ir(i,e,t)||r===0&&Ir(i,n,t)||a===0&&Ir(e,i,n)||o===0&&Ir(e,t,n))}function Ir(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pr(i){return i>0?1:i<0?-1:0}function ld(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Th(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bs(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function cd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ch(i,t){let e=ll(i.i,i.x,i.y),n=ll(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dc(i,t,e,n){let s=ll(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ll(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var cl=class{static triangulate(t,e,n=2){return Zu(t,e,n)}},Xe=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nc(t),Fc(n,t);let a=t.length;e.forEach(Nc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Fc(n,e[c]);let o=cl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Nc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zs=class i extends he{constructor(t=new Fe([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:ud,y,b=!1,R,C,D,x;if(m){y=m.getSpacedPoints(u),b=!0,h=!1;let O=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(u,O),C=new V,D=new V,x=new V}h||(p=0,f=0,g=0,_=0);let A=o.extractPoints(l),F=A.shape,P=A.holes;if(!Xe.isClockWise(F)){F=F.reverse();for(let O=0,Z=P.length;O<Z;O++){let j=P[O];Xe.isClockWise(j)&&(P[O]=j.reverse())}}function q(O){let j=10000000000000001e-36,it=O[0];for(let S=1;S<=O.length;S++){let L=S%O.length,rt=O[L],Mt=rt.x-it.x,mt=rt.y-it.y,I=Mt*Mt+mt*mt,v=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(it.x),Math.abs(it.y)),z=j*v*v;if(I<=z){O.splice(L,1),S--;continue}it=rt}}q(F),P.forEach(q);let J=P.length,W=F;for(let O=0;O<J;O++){let Z=P[O];F=F.concat(Z)}function k(O,Z,j){return Z||Gt("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(Z,j)}let U=F.length;function H(O,Z,j){let it,S,L,rt=O.x-Z.x,Mt=O.y-Z.y,mt=j.x-O.x,I=j.y-O.y,v=rt*rt+Mt*Mt,z=rt*I-Mt*mt;if(Math.abs(z)>Number.EPSILON){let nt=Math.sqrt(v),ut=Math.sqrt(mt*mt+I*I),st=Z.x-Mt/nt,Ct=Z.y+rt/nt,yt=j.x-I/ut,Ut=j.y+mt/ut,zt=((yt-st)*I-(Ut-Ct)*mt)/(rt*I-Mt*mt);it=st+rt*zt-O.x,S=Ct+Mt*zt-O.y;let pt=it*it+S*S;if(pt<=2)return new ht(it,S);L=Math.sqrt(pt/2)}else{let nt=!1;rt>Number.EPSILON?mt>Number.EPSILON&&(nt=!0):rt<-Number.EPSILON?mt<-Number.EPSILON&&(nt=!0):Math.sign(Mt)===Math.sign(I)&&(nt=!0),nt?(it=-Mt,S=rt,L=Math.sqrt(v)):(it=rt,S=Mt,L=Math.sqrt(v/2))}return new ht(it/L,S/L)}let at=[];for(let O=0,Z=W.length,j=Z-1,it=O+1;O<Z;O++,j++,it++)j===Z&&(j=0),it===Z&&(it=0),at[O]=H(W[O],W[j],W[it]);let dt=[],_t,At=at.concat();for(let O=0,Z=J;O<Z;O++){let j=P[O];_t=[];for(let it=0,S=j.length,L=S-1,rt=it+1;it<S;it++,L++,rt++)L===S&&(L=0),rt===S&&(rt=0),_t[it]=H(j[it],j[L],j[rt]);dt.push(_t),At=At.concat(_t)}let Vt;if(p===0)Vt=Xe.triangulateShape(W,P);else{let O=[],Z=[];for(let j=0;j<p;j++){let it=j/p,S=f*Math.cos(it*Math.PI/2),L=g*Math.sin(it*Math.PI/2)+_;for(let rt=0,Mt=W.length;rt<Mt;rt++){let mt=k(W[rt],at[rt],L);lt(mt.x,mt.y,-S),it===0&&O.push(mt)}for(let rt=0,Mt=J;rt<Mt;rt++){let mt=P[rt];_t=dt[rt];let I=[];for(let v=0,z=mt.length;v<z;v++){let nt=k(mt[v],_t[v],L);lt(nt.x,nt.y,-S),it===0&&I.push(nt)}it===0&&Z.push(I)}}Vt=Xe.triangulateShape(O,Z)}let K=Vt.length,B=g+_;for(let O=0;O<U;O++){let Z=h?k(F[O],At[O],B):F[O];b?(D.copy(R.normals[0]).multiplyScalar(Z.x),C.copy(R.binormals[0]).multiplyScalar(Z.y),x.copy(y[0]).add(D).add(C),lt(x.x,x.y,x.z)):lt(Z.x,Z.y,0)}for(let O=1;O<=u;O++)for(let Z=0;Z<U;Z++){let j=h?k(F[Z],At[Z],B):F[Z];b?(D.copy(R.normals[O]).multiplyScalar(j.x),C.copy(R.binormals[O]).multiplyScalar(j.y),x.copy(y[O]).add(D).add(C),lt(x.x,x.y,x.z)):lt(j.x,j.y,d/u*O)}for(let O=p-1;O>=0;O--){let Z=O/p,j=f*Math.cos(Z*Math.PI/2),it=g*Math.sin(Z*Math.PI/2)+_;for(let S=0,L=W.length;S<L;S++){let rt=k(W[S],at[S],it);lt(rt.x,rt.y,d+j)}for(let S=0,L=P.length;S<L;S++){let rt=P[S];_t=dt[S];for(let Mt=0,mt=rt.length;Mt<mt;Mt++){let I=k(rt[Mt],_t[Mt],it);b?lt(I.x,I.y+y[u-1].y,y[u-1].x+j):lt(I.x,I.y,d+j)}}}E(),w();function E(){let O=s.length/3;if(h){let Z=0,j=U*Z;for(let it=0;it<K;it++){let S=Vt[it];$(S[2]+j,S[1]+j,S[0]+j)}Z=u+p*2,j=U*Z;for(let it=0;it<K;it++){let S=Vt[it];$(S[0]+j,S[1]+j,S[2]+j)}}else{for(let Z=0;Z<K;Z++){let j=Vt[Z];$(j[2],j[1],j[0])}for(let Z=0;Z<K;Z++){let j=Vt[Z];$(j[0]+U*u,j[1]+U*u,j[2]+U*u)}}n.addGroup(O,s.length/3-O,0)}function w(){let O=s.length/3,Z=0;X(W,Z),Z+=W.length;for(let j=0,it=P.length;j<it;j++){let S=P[j];X(S,Z),Z+=S.length}n.addGroup(O,s.length/3-O,1)}function X(O,Z){let j=O.length;for(;--j>=0;){let it=j,S=j-1;S<0&&(S=O.length-1);for(let L=0,rt=u+p*2;L<rt;L++){let Mt=U*L,mt=U*(L+1),I=Z+it+Mt,v=Z+S+Mt,z=Z+S+mt,nt=Z+it+mt;ct(I,v,z,nt)}}}function lt(O,Z,j){c.push(O),c.push(Z),c.push(j)}function $(O,Z,j){gt(O),gt(Z),gt(j);let it=s.length/3,S=M.generateTopUV(n,s,it-3,it-2,it-1);ft(S[0]),ft(S[1]),ft(S[2])}function ct(O,Z,j,it){gt(O),gt(Z),gt(it),gt(Z),gt(j),gt(it);let S=s.length/3,L=M.generateSideWallUV(n,s,S-6,S-3,S-2,S-1);ft(L[0]),ft(L[1]),ft(L[3]),ft(L[1]),ft(L[2]),ft(L[3])}function gt(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function ft(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new al[s.type]().fromJSON(s)),new i(n,t.options)}},ud={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ht(r,a),new ht(o,c),new ht(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ht(a,1-c),new ht(l,1-d),new ht(h,1-g),new ht(_,1-m)]:[new ht(o,1-c),new ht(u,1-d),new ht(f,1-g),new ht(p,1-m)]}};function dd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vs=class i extends ta{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Gs=class i extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let M=m*h-a;for(let y=0;y<l;y++){let b=y*d-r;g.push(b,-M,0),_.push(0,0,1),p.push(y/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let y=M+l*m,b=M+l*(m+1),R=M+1+l*(m+1),C=M+1+l*m;f.push(y,b,C),f.push(b,R,C)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hs=class i extends he{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],d=t,h=(e-t)/s,f=new V,g=new ht;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){let p=_*(n+1);for(let m=0;m<n;m++){let M=m+p,y=M,b=M+n+1,R=M+n+2,C=M+1;o.push(y,b,C),o.push(b,R,C)}}this.setIndex(o),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Zn=class i extends he{constructor(t=new Fe([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function l(u){let d=s.length/3,h=u.extractPoints(e),f=h.shape,g=h.holes;Xe.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let M=g[p];Xe.isClockWise(M)===!0&&(g[p]=M.reverse())}let _=Xe.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let M=g[p];f=f.concat(M)}for(let p=0,m=f.length;p<m;p++){let M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,m=_.length;p<m;p++){let M=_[p],y=M[0]+d,b=M[1]+d,R=M[2]+d;n.push(y,b,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function fd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ws=class i extends he{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new V,f=new V,g=new V;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,M=(s+1)*(_-1)+p-1,y=(s+1)*(_-1)+p,b=(s+1)*_+p;c.push(m,M,b),c.push(M,y,b)}this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=yi(i[e]);for(let s in n)t[s]=n[s]}return t}function pd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Rh={clone:yi,merge:Re},md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},oa=class extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var mi=class extends qn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Kt(16777215),this.specular=new Kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Sa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var la=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Lr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var Jn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends Jn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case il:r=t,o=2*e-n;break;case sl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case il:a=t,c=2*n-e;break;case sl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,M=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,y=(-1-f)*p+(1.5+f)*_+.5*g,b=f*p-f*_;for(let R=0;R!==o;++R)r[R]=m*a[u+R]+M*a[l+R]+y*a[c+R]+b*a[d+R];return r}},ua=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}},da=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fa=class extends Jn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){let _=(n-e)/(s-e),p=1-_;for(let m=0;m!==o;++m)r[m]=a[l+m]*p+a[c+m]*_;return r}let f=o*2,g=t-1;for(let _=0;_!==o;++_){let p=a[l+_],m=a[c+_],M=g*f+_*2,y=h[M],b=h[M+1],R=t*f+_*2,C=d[R],D=d[R+1],x=(n-e)/(s-e),A,F,P,N,q;for(let J=0;J<8;J++){A=x*x,F=A*x,P=1-x,N=P*P,q=N*P;let k=q*e+3*N*x*y+3*P*A*C+F*s-n;if(Math.abs(k)<1e-10)break;let U=3*N*(y-e)+6*P*x*(C-y)+3*A*(s-C);if(Math.abs(U)<1e-10)break;x=x-k/U,x=Math.max(0,Math.min(1,x))}r[_]=q*p+3*N*x*b+3*P*A*D+F*m}return r}},Je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lr(e,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lr(t.times,Array),values:Lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case Yr:e=this.InterpolantFactoryMethodLinear;break;case Fr:e=this.InterpolantFactoryMethodSmooth;break;case el:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Fr;case this.InterpolantFactoryMethodBezier:return el}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Gt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Gt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&vu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Gt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[h+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Je.prototype.ValueTypeName="";Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=Yr;var $n=class extends Je{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=ys;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Ue.slerpFlat(r,0,a,l-o,a,l,c);return r}},Xs=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends Je{constructor(t,e,n){super(t,e,n)}};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=ys;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Je{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="vector";var hl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Uc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Uc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Uc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var _a=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ih=new _a,gi=class{constructor(t){this.manager=t!==void 0?t:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var In={},ul=class extends Error{constructor(t,e){super(t),this.response=e}},qs=class extends gi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=hl.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(In[t]!==void 0){In[t].push({onLoad:e,onProgress:n,onError:s});return}In[t]=[],In[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=In[t],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,_=0,p=new ReadableStream({start(m){M();function M(){d.read().then(({done:y,value:b})=>{if(y)m.close();else{_+=b.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,D=u.length;C<D;C++){let x=u[C];x.onProgress&&x.onProgress(R)}m.enqueue(b),M()}},y=>{m.error(y)})}}});return new Response(p)}else throw new ul(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{hl.add(`file:${t}`,l);let u=In[t];delete In[t];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=In[t];if(u===void 0)throw this.manager.itemError(t),l;delete In[t];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $i=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var tl=new ie,Oc=new V,Bc=new V,ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Be,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===zi||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Dr=new V,Nr=new Ue,dn=new V,Ys=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dr,Nr,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Nr,dn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Dr,Nr,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Nr,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gn=new V,kc=new ht,zc=new ht,Ee=class extends Ys{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,kc,zc),e.subVectors(zc,kc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Co*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var dl=class extends ya{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0}},Zs=class extends $i{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends Ys{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fl=class extends ya{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends $i{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new fl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},$s=class extends $i{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Oi=-90,Bi=1,va=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(Oi,Bi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(Oi,Bi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(Oi,Bi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(Oi,Bi,t,e);o.layers=this.layers,this.add(o);let c=new Ee(Oi,Bi,t,e);c.layers=this.layers,this.add(c);let l=new Ee(Oi,Bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kl="\\[\\]\\.:\\/",xd=new RegExp("["+kl+"]","g"),zl="[^"+kl+"]",_d="[^"+kl.replace("\\.","")+"]",yd=/((?:WC+[\/:])*)/.source.replace("WC",zl),vd=/(WCOD+)?/.source.replace("WCOD",_d),Md=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),Sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),bd=new RegExp("^"+yd+vd+Md+Sd+"$"),Ad=["material","materials","bones","map"],pl=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xd,"")}static parseTrackName(t){let e=bd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ad.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=pl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fg=new Float32Array(1);var Vc=new ht,Ks=class{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var cn=class{constructor(){this.type="ShapePath",this.color=new Kt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new xn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){let M=[];for(let y=0,b=m.length;y<b;y++){let R=m[y],C=new Fe;C.curves=R.curves,M.push(C)}return M}function n(m,M){let y=M.length,b=!1;for(let R=y-1,C=0;C<y;R=C++){let D=M[R],x=M[C],A=x.x-D.x,F=x.y-D.y;if(Math.abs(F)>Number.EPSILON){if(F<0&&(D=M[C],A=-A,x=M[R],F=-F),m.y<D.y||m.y>x.y)continue;if(m.y===D.y){if(m.x===D.x)return!0}else{let P=F*(m.x-D.x)-A*(m.y-D.y);if(P===0)return!0;if(P<0)continue;b=!b}}else{if(m.y!==D.y)continue;if(x.x<=m.x&&m.x<=D.x||D.x<=m.x&&m.x<=x.x)return!0}}return b}let s=Xe.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new Fe,c.curves=o.curves,l.push(c),l;let u=!s(r[0].getPoints());u=t?!u:u;let d=[],h=[],f=[],g=0,_;h[g]=void 0,f[g]=[];for(let m=0,M=r.length;m<M;m++)o=r[m],_=o.getPoints(),a=s(_),a=t?!a:a,a?(!u&&h[g]&&g++,h[g]={s:new Fe,p:_},h[g].s.curves=o.curves,u&&g++,f[g]=[]):f[g].push({h:o,p:_[0]});if(!h[0])return e(r);if(h.length>1){let m=!1,M=0;for(let y=0,b=h.length;y<b;y++)d[y]=[];for(let y=0,b=h.length;y<b;y++){let R=f[y];for(let C=0;C<R.length;C++){let D=R[C],x=!0;for(let A=0;A<h.length;A++)n(D.p,h[A].p)&&(y!==A&&M++,x?(x=!1,d[A].push(D)):m=!0);x&&d[y].push(D)}}M>0&&m===!1&&(f=d)}let p;for(let m=0,M=h.length;m<M;m++){c=h[m].s,l.push(c),p=f[m];for(let y=0,b=p.length;y<b;y++)c.holes.push(p[y].h)}return l}};function Vl(i,t,e,n){let s=Ed(n);switch(e){case Pl:return i*t;case Ra:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case _i:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case Ll:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case La:return i*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:case za:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ga:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ed(i){switch(i){case Be:case Tl:return{byteLength:1,components:1};case Qi:case Cl:case vn:return{byteLength:2,components:1};case Ta:case Ca:return{byteLength:2,components:4};case hn:case wa:case tn:return{byteLength:4,components:1};case Rl:case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window!="undefined"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Qh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Ld,alphahash_pars_fragment:Dd,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:Ud,alphatest_pars_fragment:Od,aomap_fragment:Bd,aomap_pars_fragment:kd,batching_pars_vertex:zd,batching_vertex:Vd,begin_vertex:Gd,beginnormal_vertex:Hd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:$d,color_fragment:Kd,color_pars_fragment:jd,color_pars_vertex:Qd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:af,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Ef,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:xf,fog_fragment:_f,fog_pars_fragment:yf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:Mf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:bf,lights_pars_begin:Af,lights_toon_fragment:wf,lights_toon_pars_fragment:Tf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Rf,lights_physical_fragment:If,lights_physical_pars_fragment:Pf,lights_fragment_begin:Lf,lights_fragment_maps:Df,lights_fragment_end:Nf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:zf,map_particle_fragment:Vf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:Zf,morphtarget_vertex:Jf,normal_fragment_begin:$f,normal_fragment_maps:Kf,normal_pars_fragment:jf,normal_pars_vertex:Qf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:xp,skinbase_vertex:_p,skinning_pars_vertex:yp,skinning_vertex:vp,skinnormal_vertex:Mp,specularmap_fragment:Sp,specularmap_pars_fragment:bp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Ep,transmission_fragment:wp,transmission_pars_fragment:Tp,uv_pars_fragment:Cp,uv_pars_vertex:Rp,uv_vertex:Ip,worldpos_vertex:Pp,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Np,backgroundCube_frag:Fp,cube_vert:Up,cube_frag:Op,depth_vert:Bp,depth_frag:kp,distance_vert:zp,distance_frag:Vp,equirect_vert:Gp,equirect_frag:Hp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:qp,meshbasic_frag:Yp,meshlambert_vert:Zp,meshlambert_frag:Jp,meshmatcap_vert:$p,meshmatcap_frag:Kp,meshnormal_vert:jp,meshnormal_frag:Qp,meshphong_vert:tm,meshphong_frag:em,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:rm,points_vert:am,points_frag:om,shadow_vert:lm,shadow_frag:cm,sprite_vert:hm,sprite_frag:um},Et={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Sn={basic:{uniforms:Re([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Re([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Re([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Re([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Re([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Re([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Re([Et.points,Et.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Re([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Re([Et.common,Et.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Re([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Re([Et.sprite,Et.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Re([Et.common,Et.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Re([Et.lights,Et.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Sn.physical={uniforms:Re([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var go={r:0,b:0,g:0},vi=new Ye,dm=new ie;function fm(i,t,e,n,s,r){let a=new Kt(0),o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){let b=M.backgroundBlurriness>0;y=t.get(y,b)}return y}function g(M){let y=!1,b=f(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,y){let b=f(y);b&&(b.isCubeTexture||b.mapping===Qs)?(l===void 0&&(l=new le(new Yi(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:yi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),vi.copy(y.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(vi)),l.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ee,(u!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new le(new Gs(2,2),new Le({name:"BackgroundMaterial",uniforms:yi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ee,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(go,Bl(i)),e.buffers.color.setClear(go.r,go.g,go.b,y,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:_,dispose:m}}function pm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(P,N,q,J,W){let k=!1,U=d(P,J,q,N);r!==U&&(r=U,l(r.object)),k=f(P,J,q,W),k&&g(P,J,q,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,b(P,N,q,J),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,N,q,J){let W=J.wireframe===!0,k=n[N.id];k===void 0&&(k={},n[N.id]=k);let U=P.isInstancedMesh===!0?P.id:0,H=k[U];H===void 0&&(H={},k[U]=H);let at=H[q.id];at===void 0&&(at={},H[q.id]=at);let dt=at[W];return dt===void 0&&(dt=h(c()),at[W]=dt),dt}function h(P){let N=[],q=[],J=[];for(let W=0;W<e;W++)N[W]=0,q[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:J,object:P,attributes:{},index:null}}function f(P,N,q,J){let W=r.attributes,k=N.attributes,U=0,H=q.getAttributes();for(let at in H)if(H[at].location>=0){let _t=W[at],At=k[at];if(At===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(At=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(At=P.instanceColor)),_t===void 0||_t.attribute!==At||At&&_t.data!==At.data)return!0;U++}return r.attributesNum!==U||r.index!==J}function g(P,N,q,J){let W={},k=N.attributes,U=0,H=q.getAttributes();for(let at in H)if(H[at].location>=0){let _t=k[at];_t===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(_t=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(_t=P.instanceColor));let At={};At.attribute=_t,_t&&_t.data&&(At.data=_t.data),W[at]=At,U++}r.attributes=W,r.attributesNum=U,r.index=J}function _(){let P=r.newAttributes;for(let N=0,q=P.length;N<q;N++)P[N]=0}function p(P){m(P,0)}function m(P,N){let q=r.newAttributes,J=r.enabledAttributes,W=r.attributeDivisors;q[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),W[P]!==N&&(i.vertexAttribDivisor(P,N),W[P]=N)}function M(){let P=r.newAttributes,N=r.enabledAttributes;for(let q=0,J=N.length;q<J;q++)N[q]!==P[q]&&(i.disableVertexAttribArray(q),N[q]=0)}function y(P,N,q,J,W,k,U){U===!0?i.vertexAttribIPointer(P,N,q,W,k):i.vertexAttribPointer(P,N,q,J,W,k)}function b(P,N,q,J){_();let W=J.attributes,k=q.getAttributes(),U=N.defaultAttributeValues;for(let H in k){let at=k[H];if(at.location>=0){let dt=W[H];if(dt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),dt!==void 0){let _t=dt.normalized,At=dt.itemSize,Vt=t.get(dt);if(Vt===void 0)continue;let K=Vt.buffer,B=Vt.type,E=Vt.bytesPerElement,w=B===i.INT||B===i.UNSIGNED_INT||dt.gpuType===wa;if(dt.isInterleavedBufferAttribute){let X=dt.data,lt=X.stride,$=dt.offset;if(X.isInstancedInterleavedBuffer){for(let ct=0;ct<at.locationSize;ct++)m(at.location+ct,X.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ct=0;ct<at.locationSize;ct++)p(at.location+ct);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ct=0;ct<at.locationSize;ct++)y(at.location+ct,At/at.locationSize,B,_t,lt*E,($+At/at.locationSize*ct)*E,w)}else{if(dt.isInstancedBufferAttribute){for(let X=0;X<at.locationSize;X++)m(at.location+X,dt.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let X=0;X<at.locationSize;X++)p(at.location+X);i.bindBuffer(i.ARRAY_BUFFER,K);for(let X=0;X<at.locationSize;X++)y(at.location+X,At/at.locationSize,B,_t,At*E,At/at.locationSize*X*E,w)}}else if(U!==void 0){let _t=U[H];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(at.location,_t);break;case 3:i.vertexAttrib3fv(at.location,_t);break;case 4:i.vertexAttrib4fv(at.location,_t);break;default:i.vertexAttrib1fv(at.location,_t)}}}}M()}function R(){A();for(let P in n){let N=n[P];for(let q in N){let J=N[q];for(let W in J){let k=J[W];for(let U in k)u(k[U].object),delete k[U];delete J[W]}}delete n[P]}}function C(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let q in N){let J=N[q];for(let W in J){let k=J[W];for(let U in k)u(k[U].object),delete k[U];delete J[W]}}delete n[P.id]}function D(P){for(let N in n){let q=n[N];for(let J in q){let W=q[J];if(W[P.id]===void 0)continue;let k=W[P.id];for(let U in k)u(k[U].object),delete k[U];delete W[P.id]}}}function x(P){for(let N in n){let q=n[N],J=P.isInstancedMesh===!0?P.id:0,W=q[J];if(W!==void 0){for(let k in W){let U=W[k];for(let H in U)u(U[H].object),delete U[H];delete W[k]}delete q[J],Object.keys(q).length===0&&delete n[N]}}}function A(){F(),a=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function mm(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function gm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==en&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let x=D===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Be&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==tn&&!x)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Ht("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,maxSamples:R,samples:C}}function xm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let M=r?0:n,y=M*4,b=m.clippingState||null;c.value=b,b=u(g,h,y,f);for(let R=0;R!==y;++R)b[R]=e[R];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,b=f;y!==_;++y,b+=4)a.copy(d[y]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var ei=4,Ph=[.125,.215,.35,.446,.526,.582],Si=20,_m=256,rr=new Ki,Lh=new Kt,Gl=null,Hl=0,Wl=0,Xl=!1,ym=new V,_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ym}=r;Gl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,Hl,Wl),this._renderer.xr.enabled=Xl,t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jn||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:vn,format:en,colorSpace:di,depthBuffer:!1},s=Dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vm(r)),this._blurMaterial=Sm(r,t,e),this._ggxMaterial=Mm(r,t,e)}return s}_compileMaterial(t){let e=new le(new he,t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,n,s,r){let c=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Lh),d.toneMapping=$e,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Yi,new Qe({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(Lh),m=!0);for(let y=0;y<6;y++){let b=y%3;b===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):b===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));let R=this._cubeSize;ns(s,b*R,y>2?R:0,R,R),d.setRenderTarget(s),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===jn||t.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ns(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,rr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-ei?n-g+ei:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ns(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(o,rr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ns(t,p,m,3*_,2*_),s.setRenderTarget(t),s.render(o,rr)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=l;let h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Si;p>Si&&Ht(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);let m=[],M=0;for(let D=0;D<Si;++D){let x=D/_,A=Math.exp(-x*x/2);m.push(A),D===0?M+=A:D<p&&(M+=2*A)}for(let D=0;D<m.length;D++)m[D]=m[D]/M;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;let b=this._sizeLods[s],R=3*b*(s>y-ei?s-y+ei:0),C=4*(this._cubeSize-b);ns(e,R,C,3*b,2*b),c.setRenderTarget(e),c.render(d,rr)}};function vm(i){let t=[],e=[],n=[],s=i,r=i-ei+1+Ph.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ei?c=Ph[a-i+ei-1]:a===0&&(c=0),e.push(c);let l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),y=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let C=0;C<f;C++){let D=C%3*2/3-1,x=C>2?0:-1,A=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];M.set(A,_*g*C),y.set(h,p*g*C);let F=[C,C,C,C,C,C];b.set(F,m*g*C)}let R=new he;R.setAttribute("position",new Se(M,_)),R.setAttribute("uv",new Se(y,p)),R.setAttribute("faceIndex",new Se(b,m)),n.push(new le(R,null)),s>ei&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Dh(i,t,e){let n=new qe(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mm(i,t,e){return new Le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Sm(i,t,e){let n=new Float32Array(Si),s=new V(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Nh(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Fh(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var yo=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fi(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yi(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:yn});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=ge),new va(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function bm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===ba||f===Aa)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new yo(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===ba||f===Aa,_=f===jn||f===xi;if(g||_){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new _o(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let M=h.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new _o(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===ba?h.mapping=jn:f===Aa&&(h.mapping=xi),h}function c(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Am(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function Em(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let y=0,b=M.length;y<b;y+=3){let R=M[y+0],C=M[y+1],D=M[y+2];h.push(R,C,C,D,D,R)}}else{let M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){let R=y+0,C=y+1,D=y+2;h.push(R,C,C,D,D,R)}}let p=new(g.count>=65535?Rs:Cs)(h,1);p.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function wm(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(h,f,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M]*_[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Tm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t,e){let n=new WeakMap,s=new de;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let A=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let b=o.attributes.position.count*y,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*R*4*d),D=new As(C,b,R,d);D.type=tn,D.needsUpdate=!0;let x=y*4;for(let F=0;F<d;F++){let P=p[F],N=m[F],q=M[F],J=b*R*4*F;for(let W=0;W<P.count;W++){let k=W*x;f===!0&&(s.fromBufferAttribute(P,W),C[J+k+0]=s.x,C[J+k+1]=s.y,C[J+k+2]=s.z,C[J+k+3]=0),g===!0&&(s.fromBufferAttribute(N,W),C[J+k+4]=s.x,C[J+k+5]=s.y,C[J+k+6]=s.z,C[J+k+7]=0),_===!0&&(s.fromBufferAttribute(q,W),C[J+k+8]=s.x,C[J+k+9]=s.y,C[J+k+10]=s.z,C[J+k+11]=q.itemSize===4?s.w:1)}}h={count:d,texture:D,size:new ht(b,R)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Rm(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Im={[yl]:"LINEAR_TONE_MAPPING",[vl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[Sl]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[bl]:"CUSTOM_TONE_MAPPING"};function Pm(i,t,e,n,s){let r=new qe(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new qe(t,e,{type:vn,depthBuffer:!1,stencilBuffer:!1}),o=new he;o.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let c=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new le(o,c),u=new Ki(-1,1,1,-1,0,1),d=null,h=null,f=!1,g,_=null,p=[],m=!1;this.setSize=function(M,y){r.setSize(M,y),a.setSize(M,y);for(let b=0;b<p.length;b++){let R=p[b];R.setSize&&R.setSize(M,y)}},this.setEffects=function(M){p=M,m=p.length>0&&p[0].isRenderPass===!0;let y=r.width,b=r.height;for(let R=0;R<p.length;R++){let C=p[R];C.setSize&&C.setSize(y,b)}},this.begin=function(M,y){if(f||M.toneMapping===$e&&p.length===0)return!1;if(_=y,y!==null){let b=y.width,R=y.height;(r.width!==b||r.height!==R)&&this.setSize(b,R)}return m===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=$e,!0},this.hasRenderPass=function(){return m},this.end=function(M,y){M.toneMapping=g,f=!0;let b=r,R=a;for(let C=0;C<p.length;C++){let D=p[C];if(D.enabled!==!1&&(D.render(M,R,b,y),D.needsSwap!==!1)){let x=b;b=R,R=x}}if(d!==M.outputColorSpace||h!==M.toneMapping){d=M.outputColorSpace,h=M.toneMapping,c.defines={},Qt.getTransfer(d)===ee&&(c.defines.SRGB_TRANSFER="");let C=Im[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(_),M.render(l,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}var tu=new Oe,Zl=new Yn(1,1),eu=new As,nu=new Kr,iu=new fi,Uh=[],Oh=[],Bh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),_e(e,n)}}function Om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),_e(e,n)}}function Bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),_e(e,n)}}function km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zl.compareFunction=e.isReversedDepthBuffer()?mo:po,r=Zl):r=tu,e.setTexture2D(t||r,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nu,s)}function Jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||iu,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eu,s)}function Km(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Nm;case 35666:return Fm;case 35674:return Um;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return zm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Hm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return $m}}function jm(i,t){i.uniform1fv(this.addr,t)}function Qm(i,t){let e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function t0(i,t){let e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function e0(i,t){let e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function n0(i,t){let e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i0(i,t){let e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function s0(i,t){let e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r0(i,t){i.uniform1iv(this.addr,t)}function a0(i,t){i.uniform2iv(this.addr,t)}function o0(i,t){i.uniform3iv(this.addr,t)}function l0(i,t){i.uniform4iv(this.addr,t)}function c0(i,t){i.uniform1uiv(this.addr,t)}function h0(i,t){i.uniform2uiv(this.addr,t)}function u0(i,t){i.uniform3uiv(this.addr,t)}function d0(i,t){i.uniform4uiv(this.addr,t)}function f0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zl:a=tu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function p0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nu,r[a])}function m0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||iu,r[a])}function g0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||eu,r[a])}function x0(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}var Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Km(e.type)}},$l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x0(e.type)}},Kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ql=/(\w+)(\])?(\[|\.)?/g;function Vh(i,t){i.seq.push(t),i.map[t.id]=t}function _0(i,t,e){let n=i.name,s=n.length;for(ql.lastIndex=0;;){let r=ql.exec(n),a=ql.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vh(e,l===void 0?new Jl(o,i,t):new $l(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Kl(o),Vh(e,d)),e=d}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);_0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Gh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var y0=37297,v0=0;function M0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Hh=new Wt;function S0(i){Qt._getMatrix(Hh,Qt.workingColorSpace,i);let t=`mat3( ${Hh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case vs:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+M0(i.getShaderSource(t),o)}else return r}function b0(i,t){let e=S0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var A0={[yl]:"Linear",[vl]:"Reinhard",[Ml]:"Cineon",[Sl]:"ACESFilmic",[Al]:"AgX",[El]:"Neutral",[bl]:"Custom"};function E0(i,t){let e=A0[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xo=new V;function w0(){Qt.getLuminanceCoefficients(xo);let i=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function C0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function or(i){return i!==""}function Xh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(I0,L0)}var P0=new Map;function L0(i,t){let e=Zt[t];if(e===void 0){let n=P0.get(t);if(n!==void 0)e=Zt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}var D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(D0,N0)}function N0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var F0={[js]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function U0(i){return F0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O0={[jn]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function B0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":O0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var k0={[xi]:"ENVMAP_MODE_REFRACTION"};function z0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var V0={[Sa]:"ENVMAP_BLENDING_MULTIPLY",[ch]:"ENVMAP_BLENDING_MIX",[hh]:"ENVMAP_BLENDING_ADD"};function G0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":V0[i.combine]||"ENVMAP_BLENDING_NONE"}function H0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function W0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=U0(e),l=B0(e),u=z0(e),d=G0(e),h=H0(e),f=T0(e),g=C0(r),_=s.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`)):(p=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$e?"#define TONE_MAPPING":"",e.toneMapping!==$e?Zt.tonemapping_pars_fragment:"",e.toneMapping!==$e?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),w0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=jl(a),a=Xh(a,e),a=qh(a,e),o=jl(o),o=Xh(o,e),o=qh(o,e),a=Yh(a),o=Yh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=M+p+a,b=M+m+o,R=Gh(s,s.VERTEX_SHADER,y),C=Gh(s,s.FRAGMENT_SHADER,b);s.attachShader(_,R),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(R)||"",J=s.getShaderInfoLog(C)||"",W=N.trim(),k=q.trim(),U=J.trim(),H=!0,at=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,C);else{let dt=Wh(s,R,"vertex"),_t=Wh(s,C,"fragment");Gt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+dt+`
`+_t)}else W!==""?Ht("WebGLProgram: Program Info Log:",W):(k===""||U==="")&&(at=!1);at&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:k,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(R),s.deleteShader(C),x=new is(s,_),A=R0(s,_)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(_,y0)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}var X0=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tc(t),e.set(t,n)),n}},tc=class{constructor(t){this.id=X0++,this.code=t,this.usedTimes=0}};function q0(i,t,e,n,s,r){let a=new Es,o=new Ql,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,A,F,P,N){let q=P.fog,J=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=t.get(x.envMap||W,k),H=U&&U.mapping===Qs?U.image.height:null,at=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=dt!==void 0?dt.length:0,At=0;J.morphAttributes.position!==void 0&&(At=1),J.morphAttributes.normal!==void 0&&(At=2),J.morphAttributes.color!==void 0&&(At=3);let Vt,K,B,E;if(at){let ne=Sn[at];Vt=ne.vertexShader,K=ne.fragmentShader}else Vt=x.vertexShader,K=x.fragmentShader,o.update(x),B=o.getVertexShaderID(x),E=o.getFragmentShaderID(x);let w=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),lt=N.isInstancedMesh===!0,$=N.isBatchedMesh===!0,ct=!!x.map,gt=!!x.matcap,ft=!!U,O=!!x.aoMap,Z=!!x.lightMap,j=!!x.bumpMap,it=!!x.normalMap,S=!!x.displacementMap,L=!!x.emissiveMap,rt=!!x.metalnessMap,Mt=!!x.roughnessMap,mt=x.anisotropy>0,I=x.clearcoat>0,v=x.dispersion>0,z=x.iridescence>0,nt=x.sheen>0,ut=x.transmission>0,st=mt&&!!x.anisotropyMap,Ct=I&&!!x.clearcoatMap,yt=I&&!!x.clearcoatNormalMap,Ut=I&&!!x.clearcoatRoughnessMap,zt=z&&!!x.iridescenceMap,pt=z&&!!x.iridescenceThicknessMap,vt=nt&&!!x.sheenColorMap,Lt=nt&&!!x.sheenRoughnessMap,Nt=!!x.specularMap,Rt=!!x.specularColorMap,Jt=!!x.specularIntensityMap,G=ut&&!!x.transmissionMap,bt=ut&&!!x.thicknessMap,St=!!x.gradientMap,Pt=!!x.alphaMap,xt=x.alphaTest>0,ot=!!x.alphaHash,Dt=!!x.extensions,Xt=$e;x.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let oe={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:Vt,fragmentShader:K,defines:x.defines,customVertexShaderID:B,customFragmentShaderID:E,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:$,batchingColor:$&&N._colorsTexture!==null,instancing:lt,instancingColor:lt&&N.instanceColor!==null,instancingMorph:lt&&N.morphTexture!==null,outputColorSpace:w===null?i.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:di,alphaToCoverage:!!x.alphaToCoverage,map:ct,matcap:gt,envMap:ft,envMapMode:ft&&U.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Z,bumpMap:j,normalMap:it,displacementMap:S,emissiveMap:L,normalMapObjectSpace:it&&x.normalMapType===fh,normalMapTangentSpace:it&&x.normalMapType===Dl,metalnessMap:rt,roughnessMap:Mt,anisotropy:mt,anisotropyMap:st,clearcoat:I,clearcoatMap:Ct,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ut,dispersion:v,iridescence:z,iridescenceMap:zt,iridescenceThicknessMap:pt,sheen:nt,sheenColorMap:vt,sheenRoughnessMap:Lt,specularMap:Nt,specularColorMap:Rt,specularIntensityMap:Jt,transmission:ut,transmissionMap:G,thicknessMap:bt,gradientMap:St,opaque:x.transparent===!1&&x.blending===hi&&x.alphaToCoverage===!1,alphaMap:Pt,alphaTest:xt,alphaHash:ot,combine:x.combine,mapUv:ct&&g(x.map.channel),aoMapUv:O&&g(x.aoMap.channel),lightMapUv:Z&&g(x.lightMap.channel),bumpMapUv:j&&g(x.bumpMap.channel),normalMapUv:it&&g(x.normalMap.channel),displacementMapUv:S&&g(x.displacementMap.channel),emissiveMapUv:L&&g(x.emissiveMap.channel),metalnessMapUv:rt&&g(x.metalnessMap.channel),roughnessMapUv:Mt&&g(x.roughnessMap.channel),anisotropyMapUv:st&&g(x.anisotropyMap.channel),clearcoatMapUv:Ct&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(x.sheenRoughnessMap.channel),specularMapUv:Nt&&g(x.specularMap.channel),specularColorMapUv:Rt&&g(x.specularColorMap.channel),specularIntensityMapUv:Jt&&g(x.specularIntensityMap.channel),transmissionMapUv:G&&g(x.transmissionMap.channel),thicknessMapUv:bt&&g(x.thicknessMap.channel),alphaMapUv:Pt&&g(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(it||mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(ct||Pt),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||J.attributes.normal===void 0&&it===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:X,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:At,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:ct&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Dt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&x.extensions.multiDraw===!0||$)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)A.push(F),A.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(m(A,x),M(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){let A=f[x.type],F;if(A){let P=Sn[A];F=Rh.clone(P.uniforms)}else F=x.uniforms;return F}function b(x,A){let F=u.get(A);return F!==void 0?++F.usedTimes:(F=new W0(i,A,x,s),l.push(F),u.set(A,F)),F}function R(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function D(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:D}}function Y0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $h(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,p,m){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},i[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=p,M.group=m),t++,M}function c(h,f,g,_,p,m){let M=o(h,f,g,_,p,m);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function l(h,f,g,_,p,m){let M=o(h,f,g,_,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f){e.length>1&&e.sort(h||Z0),n.length>1&&n.sort(f||Jh),s.length>1&&s.sort(f||Jh)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function J0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new $h,i.set(n,[a])):s>=r.length?(a=new $h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Kt};break;case"SpotLight":e={position:new V,direction:new V,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function K0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j0=0;function Q0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $0,e=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new ie,a=new ie;function o(l){let u=0,d=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,y=0,b=0,R=0,C=0,D=0;l.sort(Q0);for(let A=0,F=l.length;A<F;A++){let P=l[A],N=P.color,q=P.intensity,J=P.distance,W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===_i?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*q,d+=N.g*q,h+=N.b*q;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],q);D++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let U=P.shadow,H=e.get(P);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=k,f++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(q),k.distance=J,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;let U=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,U.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=U.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,b++}_++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(N).multiplyScalar(q),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let U=P.shadow,H=e.get(P);H.shadowIntensity=U.intensity,H.shadowBias=U.bias,H.shadowNormalBias=U.normalBias,H.shadowRadius=U.radius,H.shadowMapSize=U.mapSize,H.shadowCameraNear=U.camera.near,H.shadowCameraFar=U.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=k,g++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(q),k.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==b||x.numSpotMaps!==R||x.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=b,x.numSpotMaps=R,x.numLightProbes=D,n.version=j0++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0,p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let y=l[m];if(y.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(y.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(y.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let b=n.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function Kh(i){let t=new tg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function eg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Kh(i),t.set(s,[o])):r>=a.length?(o=new Kh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sg=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],rg=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],jh=new ie,ar=new V,Yl=new V;function ag(i,t,e){let n=new qi,s=new ht,r=new ht,a=new de,o=new la,c=new ca,l={},u=e.maxTextureSize,d={[Ln]:De,[De]:Ln,[_n]:_n},h=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let m=this.type;this.render=function(C,D,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===Wc&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);let A=i.getRenderTarget(),F=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(yn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let q=m!==this.type;q&&D.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(W=>W.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,W=C.length;J<W;J++){let k=C[J],U=k.shadow;if(U===void 0){Ht("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let H=U.getFrameExtents();s.multiply(H),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,U.mapSize.y=r.y));let at=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=at,U.map===null||q===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ji){if(k.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new qe(s.x,s.y,{format:_i,type:vn,minFilter:ge,magFilter:ge,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new Yn(s.x,s.y,tn),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=mn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=be,U.map.depthTexture.magFilter=be}else k.isPointLight?(U.map=new yo(s.x),U.map.depthTexture=new Qr(s.x,hn)):(U.map=new qe(s.x,s.y),U.map.depthTexture=new Yn(s.x,s.y,hn)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=mn,this.type===js?(U.map.depthTexture.compareFunction=at?mo:po,U.map.depthTexture.minFilter=ge,U.map.depthTexture.magFilter=ge):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=be,U.map.depthTexture.magFilter=be);U.camera.updateProjectionMatrix()}let dt=U.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<dt;_t++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(U.map),i.clear());let At=U.getViewport(_t);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),N.viewport(a)}if(k.isPointLight){let At=U.camera,Vt=U.matrix,K=k.distance||At.far;K!==At.far&&(At.far=K,At.updateProjectionMatrix()),ar.setFromMatrixPosition(k.matrixWorld),At.position.copy(ar),Yl.copy(At.position),Yl.add(sg[_t]),At.up.copy(rg[_t]),At.lookAt(Yl),At.updateMatrixWorld(),Vt.makeTranslation(-ar.x,-ar.y,-ar.z),jh.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),U._frustum.setFromProjectionMatrix(jh,At.coordinateSystem,At.reversedDepth)}else U.updateMatrices(k);n=U.getFrustum(),b(D,x,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===ji&&M(U,x),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(A,F,P)};function M(C,D){let x=t.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qe(s.x,s.y,{format:_i,type:vn})),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,x,h,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,x,f,_,null)}function y(C,D,x,A){let F=null,P=x.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)F=P;else if(F=x.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=F.uuid,q=D.uuid,J=l[N];J===void 0&&(J={},l[N]=J);let W=J[q];W===void 0&&(W=F.clone(),J[q]=W,D.addEventListener("dispose",R)),F=W}if(F.visible=D.visible,F.wireframe=D.wireframe,A===ji?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:d[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let N=i.properties.get(F);N.light=x}return F}function b(C,D,x,A,F){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===ji)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,C.matrixWorld);let q=t.update(C),J=C.material;if(Array.isArray(J)){let W=q.groups;for(let k=0,U=W.length;k<U;k++){let H=W[k],at=J[H.materialIndex];if(at&&at.visible){let dt=y(C,at,A,F);C.onBeforeShadow(i,C,D,x,q,dt,H),i.renderBufferDirect(x,null,q,dt,C,H),C.onAfterShadow(i,C,D,x,q,dt,H)}}}else if(J.visible){let W=y(C,J,A,F);C.onBeforeShadow(i,C,D,x,q,W,null),i.renderBufferDirect(x,null,q,W,C,null),C.onAfterShadow(i,C,D,x,q,W,null)}}let N=C.children;for(let q=0,J=N.length;q<J;q++)b(N[q],D,x,A,F)}function R(C){C.target.removeEventListener("dispose",R);for(let x in l){let A=l[x],F=C.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function og(i,t){function e(){let G=!1,bt=new de,St=null,Pt=new de(0,0,0,0);return{setMask:function(xt){St!==xt&&!G&&(i.colorMask(xt,xt,xt,xt),St=xt)},setLocked:function(xt){G=xt},setClear:function(xt,ot,Dt,Xt,oe){oe===!0&&(xt*=Xt,ot*=Xt,Dt*=Xt),bt.set(xt,ot,Dt,Xt),Pt.equals(bt)===!1&&(i.clearColor(xt,ot,Dt,Xt),Pt.copy(bt))},reset:function(){G=!1,St=null,Pt.set(-1,0,0,0)}}}function n(){let G=!1,bt=!1,St=null,Pt=null,xt=null;return{setReversed:function(ot){if(bt!==ot){let Dt=t.get("EXT_clip_control");ot?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),bt=ot;let Xt=xt;xt=null,this.setClear(Xt)}},getReversed:function(){return bt},setTest:function(ot){ot?w(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(ot){St!==ot&&!G&&(i.depthMask(ot),St=ot)},setFunc:function(ot){if(bt&&(ot=bh[ot]),Pt!==ot){switch(ot){case Br:i.depthFunc(i.NEVER);break;case kr:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Gr:i.depthFunc(i.GEQUAL);break;case Hr:i.depthFunc(i.GREATER);break;case Wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=ot}},setLocked:function(ot){G=ot},setClear:function(ot){xt!==ot&&(xt=ot,bt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){G=!1,St=null,Pt=null,xt=null,bt=!1}}}function s(){let G=!1,bt=null,St=null,Pt=null,xt=null,ot=null,Dt=null,Xt=null,oe=null;return{setTest:function(ne){G||(ne?w(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(ne){bt!==ne&&!G&&(i.stencilMask(ne),bt=ne)},setFunc:function(ne,bn,An){(St!==ne||Pt!==bn||xt!==An)&&(i.stencilFunc(ne,bn,An),St=ne,Pt=bn,xt=An)},setOp:function(ne,bn,An){(ot!==ne||Dt!==bn||Xt!==An)&&(i.stencilOp(ne,bn,An),ot=ne,Dt=bn,Xt=An)},setLocked:function(ne){G=ne},setClear:function(ne){oe!==ne&&(i.clearStencil(ne),oe=ne)},reset:function(){G=!1,bt=null,St=null,Pt=null,xt=null,ot=null,Dt=null,Xt=null,oe=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,M=null,y=null,b=null,R=null,C=null,D=new Kt(0,0,0),x=0,A=!1,F=null,P=null,N=null,q=null,J=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,U=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=U>=1):H.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=U>=2);let at=null,dt={},_t=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Vt=new de().fromArray(_t),K=new de().fromArray(At);function B(G,bt,St,Pt){let xt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(G,ot),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<St;Dt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(bt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ot}let E={};E[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),E[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),E[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),w(i.DEPTH_TEST),a.setFunc(ui),j(!1),it(ml),w(i.CULL_FACE),O(yn);function w(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function X(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function lt(G,bt){return d[G]!==bt?(i.bindFramebuffer(G,bt),d[G]=bt,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=bt),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function $(G,bt){let St=f,Pt=!1;if(G){St=h.get(bt),St===void 0&&(St=[],h.set(bt,St));let xt=G.textures;if(St.length!==xt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Dt=xt.length;ot<Dt;ot++)St[ot]=i.COLOR_ATTACHMENT0+ot;St.length=xt.length,Pt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(St)}function ct(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let gt={[Wn]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};gt[Zc]=i.MIN,gt[Jc]=i.MAX;let ft={[$c]:i.ZERO,[Kc]:i.ONE,[jc]:i.SRC_COLOR,[Ur]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[nh]:i.DST_COLOR,[th]:i.DST_ALPHA,[Qc]:i.ONE_MINUS_SRC_COLOR,[Or]:i.ONE_MINUS_SRC_ALPHA,[ih]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[lh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(G,bt,St,Pt,xt,ot,Dt,Xt,oe,ne){if(G===yn){_===!0&&(X(i.BLEND),_=!1);return}if(_===!1&&(w(i.BLEND),_=!0),G!==Xc){if(G!==p||ne!==A){if((m!==Wn||b!==Wn)&&(i.blendEquation(i.FUNC_ADD),m=Wn,b=Wn),ne)switch(G){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",G);break}else switch(G){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",G);break}M=null,y=null,R=null,C=null,D.set(0,0,0),x=0,p=G,A=ne}return}xt=xt||bt,ot=ot||St,Dt=Dt||Pt,(bt!==m||xt!==b)&&(i.blendEquationSeparate(gt[bt],gt[xt]),m=bt,b=xt),(St!==M||Pt!==y||ot!==R||Dt!==C)&&(i.blendFuncSeparate(ft[St],ft[Pt],ft[ot],ft[Dt]),M=St,y=Pt,R=ot,C=Dt),(Xt.equals(D)===!1||oe!==x)&&(i.blendColor(Xt.r,Xt.g,Xt.b,oe),D.copy(Xt),x=oe),p=G,A=!1}function Z(G,bt){G.side===_n?X(i.CULL_FACE):w(i.CULL_FACE);let St=G.side===De;bt&&(St=!St),j(St),G.blending===hi&&G.transparent===!1?O(yn):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let Pt=G.stencilWrite;o.setTest(Pt),Pt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),L(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?w(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(G){F!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),F=G)}function it(G){G!==Gc?(w(i.CULL_FACE),G!==P&&(G===ml?i.cullFace(i.BACK):G===Hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),P=G}function S(G){G!==N&&(k&&i.lineWidth(G),N=G)}function L(G,bt,St){G?(w(i.POLYGON_OFFSET_FILL),(q!==bt||J!==St)&&(q=bt,J=St,a.getReversed()&&(bt=-bt),i.polygonOffset(bt,St))):X(i.POLYGON_OFFSET_FILL)}function rt(G){G?w(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function Mt(G){G===void 0&&(G=i.TEXTURE0+W-1),at!==G&&(i.activeTexture(G),at=G)}function mt(G,bt,St){St===void 0&&(at===null?St=i.TEXTURE0+W-1:St=at);let Pt=dt[St];Pt===void 0&&(Pt={type:void 0,texture:void 0},dt[St]=Pt),(Pt.type!==G||Pt.texture!==bt)&&(at!==St&&(i.activeTexture(St),at=St),i.bindTexture(G,bt||E[G]),Pt.type=G,Pt.texture=bt)}function I(){let G=dt[at];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(G){Gt("WebGLState:",G)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(G){Gt("WebGLState:",G)}}function nt(){try{i.texSubImage2D(...arguments)}catch(G){Gt("WebGLState:",G)}}function ut(){try{i.texSubImage3D(...arguments)}catch(G){Gt("WebGLState:",G)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Gt("WebGLState:",G)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Gt("WebGLState:",G)}}function yt(){try{i.texStorage2D(...arguments)}catch(G){Gt("WebGLState:",G)}}function Ut(){try{i.texStorage3D(...arguments)}catch(G){Gt("WebGLState:",G)}}function zt(){try{i.texImage2D(...arguments)}catch(G){Gt("WebGLState:",G)}}function pt(){try{i.texImage3D(...arguments)}catch(G){Gt("WebGLState:",G)}}function vt(G){Vt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Vt.copy(G))}function Lt(G){K.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function Nt(G,bt){let St=l.get(bt);St===void 0&&(St=new WeakMap,l.set(bt,St));let Pt=St.get(G);Pt===void 0&&(Pt=i.getUniformBlockIndex(bt,G.name),St.set(G,Pt))}function Rt(G,bt){let Pt=l.get(bt).get(G);c.get(bt)!==Pt&&(i.uniformBlockBinding(bt,Pt,G.__bindingPointIndex),c.set(bt,Pt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,dt={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,M=null,y=null,b=null,R=null,C=null,D=new Kt(0,0,0),x=0,A=!1,F=null,P=null,N=null,q=null,J=null,Vt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:w,disable:X,bindFramebuffer:lt,drawBuffers:$,useProgram:ct,setBlending:O,setMaterial:Z,setFlipSided:j,setCullFace:it,setLineWidth:S,setPolygonOffset:L,setScissorTest:rt,activeTexture:Mt,bindTexture:mt,unbindTexture:I,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:zt,texImage3D:pt,updateUBOMapping:Nt,uniformBlockBinding:Rt,texStorage2D:yt,texStorage3D:Ut,texSubImage2D:nt,texSubImage3D:ut,compressedTexSubImage2D:st,compressedTexSubImage3D:Ct,scissor:vt,viewport:Lt,reset:Jt}}function lg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,v){return f?new OffscreenCanvas(I,v):Ss("canvas")}function _(I,v,z){let nt=1,ut=mt(I);if((ut.width>z||ut.height>z)&&(nt=z/Math.max(ut.width,ut.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let st=Math.floor(nt*ut.width),Ct=Math.floor(nt*ut.height);d===void 0&&(d=g(st,Ct));let yt=v?g(st,Ct):d;return yt.width=st,yt.height=Ct,yt.getContext("2d").drawImage(I,0,0,st,Ct),Ht("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+st+"x"+Ct+")."),yt}else return"data"in I&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,v,z,nt,ut=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let st=v;if(v===i.RED&&(z===i.FLOAT&&(st=i.R32F),z===i.HALF_FLOAT&&(st=i.R16F),z===i.UNSIGNED_BYTE&&(st=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(st=i.R8UI),z===i.UNSIGNED_SHORT&&(st=i.R16UI),z===i.UNSIGNED_INT&&(st=i.R32UI),z===i.BYTE&&(st=i.R8I),z===i.SHORT&&(st=i.R16I),z===i.INT&&(st=i.R32I)),v===i.RG&&(z===i.FLOAT&&(st=i.RG32F),z===i.HALF_FLOAT&&(st=i.RG16F),z===i.UNSIGNED_BYTE&&(st=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(st=i.RG8UI),z===i.UNSIGNED_SHORT&&(st=i.RG16UI),z===i.UNSIGNED_INT&&(st=i.RG32UI),z===i.BYTE&&(st=i.RG8I),z===i.SHORT&&(st=i.RG16I),z===i.INT&&(st=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(st=i.RGB8UI),z===i.UNSIGNED_SHORT&&(st=i.RGB16UI),z===i.UNSIGNED_INT&&(st=i.RGB32UI),z===i.BYTE&&(st=i.RGB8I),z===i.SHORT&&(st=i.RGB16I),z===i.INT&&(st=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),z===i.UNSIGNED_INT&&(st=i.RGBA32UI),z===i.BYTE&&(st=i.RGBA8I),z===i.SHORT&&(st=i.RGBA16I),z===i.INT&&(st=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),v===i.RGBA){let Ct=ut?vs:Qt.getTransfer(nt);z===i.FLOAT&&(st=i.RGBA32F),z===i.HALF_FLOAT&&(st=i.RGBA16F),z===i.UNSIGNED_BYTE&&(st=Ct===ee?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function b(I,v){let z;return I?v===null||v===hn||v===ts?z=i.DEPTH24_STENCIL8:v===tn?z=i.DEPTH32F_STENCIL8:v===Qi&&(z=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hn||v===ts?z=i.DEPTH_COMPONENT24:v===tn?z=i.DEPTH_COMPONENT32F:v===Qi&&(z=i.DEPTH_COMPONENT16),z}function R(I,v){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==be&&I.minFilter!==ge?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function C(I){let v=I.target;v.removeEventListener("dispose",C),x(v),v.isVideoTexture&&u.delete(v)}function D(I){let v=I.target;v.removeEventListener("dispose",D),F(v)}function x(I){let v=n.get(I);if(v.__webglInit===void 0)return;let z=I.source,nt=h.get(z);if(nt){let ut=nt[v.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&A(I),Object.keys(nt).length===0&&h.delete(z)}n.remove(I)}function A(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let z=I.source,nt=h.get(z);delete nt[v.__cacheKey],a.memory.textures--}function F(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let ut=0;ut<v.__webglFramebuffer[nt].length;ut++)i.deleteFramebuffer(v.__webglFramebuffer[nt][ut]);else i.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[nt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=I.textures;for(let nt=0,ut=z.length;nt<ut;nt++){let st=n.get(z[nt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(z[nt])}n.remove(I)}let P=0;function N(){P=0}function q(){let I=P;return I>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function J(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function W(I,v){let z=n.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let nt=I.image;if(nt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{E(z,I,v);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function k(I,v){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){E(z,I,v);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function U(I,v){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){E(z,I,v);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function H(I,v){let z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){w(z,I,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let at={[Xr]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},dt={[be]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[ge]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},_t={[ph]:i.NEVER,[yh]:i.ALWAYS,[mh]:i.LESS,[po]:i.LEQUAL,[gh]:i.EQUAL,[mo]:i.GEQUAL,[xh]:i.GREATER,[_h]:i.NOTEQUAL};function At(I,v){if(v.type===tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ge||v.magFilter===Ea||v.magFilter===tr||v.magFilter===Qn||v.minFilter===ge||v.minFilter===Ea||v.minFilter===tr||v.minFilter===Qn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,at[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,at[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,at[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===be||v.minFilter!==tr&&v.minFilter!==Qn||v.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(I,v){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",C));let nt=v.source,ut=h.get(nt);ut===void 0&&(ut={},h.set(nt,ut));let st=J(v);if(st!==I.__cacheKey){ut[st]===void 0&&(ut[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ut[st].usedTimes++;let Ct=ut[I.__cacheKey];Ct!==void 0&&(ut[I.__cacheKey].usedTimes--,Ct.usedTimes===0&&A(v)),I.__cacheKey=st,I.__webglTexture=ut[st].texture}return z}function K(I,v,z){return Math.floor(Math.floor(I/z)/v)}function B(I,v,z,nt){let st=I.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,nt,v.data);else{st.sort((pt,vt)=>pt.start-vt.start);let Ct=0;for(let pt=1;pt<st.length;pt++){let vt=st[Ct],Lt=st[pt],Nt=vt.start+vt.count,Rt=K(Lt.start,v.width,4),Jt=K(vt.start,v.width,4);Lt.start<=Nt+1&&Rt===Jt&&K(Lt.start+Lt.count-1,v.width,4)===Rt?vt.count=Math.max(vt.count,Lt.start+Lt.count-vt.start):(++Ct,st[Ct]=Lt)}st.length=Ct+1;let yt=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),zt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let pt=0,vt=st.length;pt<vt;pt++){let Lt=st[pt],Nt=Math.floor(Lt.start/4),Rt=Math.ceil(Lt.count/4),Jt=Nt%v.width,G=Math.floor(Nt/v.width),bt=Rt,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,Jt,G,bt,St,z,nt,v.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,yt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function E(I,v,z){let nt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=i.TEXTURE_3D);let ut=Vt(I,v),st=v.source;e.bindTexture(nt,I.__webglTexture,i.TEXTURE0+z);let Ct=n.get(st);if(st.version!==Ct.__version||ut===!0){e.activeTexture(i.TEXTURE0+z);let yt=Qt.getPrimaries(Qt.workingColorSpace),Ut=v.colorSpace===Nn?null:Qt.getPrimaries(v.colorSpace),zt=v.colorSpace===Nn||yt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let pt=_(v.image,!1,s.maxTextureSize);pt=Mt(v,pt);let vt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),Nt=y(v.internalFormat,vt,Lt,v.colorSpace,v.isVideoTexture);At(nt,v);let Rt,Jt=v.mipmaps,G=v.isVideoTexture!==!0,bt=Ct.__version===void 0||ut===!0,St=st.dataReady,Pt=R(v,pt);if(v.isDepthTexture)Nt=b(v.format===ti,v.type),bt&&(G?e.texStorage2D(i.TEXTURE_2D,1,Nt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,pt.width,pt.height,0,vt,Lt,null));else if(v.isDataTexture)if(Jt.length>0){G&&bt&&e.texStorage2D(i.TEXTURE_2D,Pt,Nt,Jt[0].width,Jt[0].height);for(let xt=0,ot=Jt.length;xt<ot;xt++)Rt=Jt[xt],G?St&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Rt.width,Rt.height,vt,Lt,Rt.data):e.texImage2D(i.TEXTURE_2D,xt,Nt,Rt.width,Rt.height,0,vt,Lt,Rt.data);v.generateMipmaps=!1}else G?(bt&&e.texStorage2D(i.TEXTURE_2D,Pt,Nt,pt.width,pt.height),St&&B(v,pt,vt,Lt)):e.texImage2D(i.TEXTURE_2D,0,Nt,pt.width,pt.height,0,vt,Lt,pt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Nt,Jt[0].width,Jt[0].height,pt.depth);for(let xt=0,ot=Jt.length;xt<ot;xt++)if(Rt=Jt[xt],v.format!==en)if(vt!==null)if(G){if(St)if(v.layerUpdates.size>0){let Dt=Vl(Rt.width,Rt.height,v.format,v.type);for(let Xt of v.layerUpdates){let oe=Rt.data.subarray(Xt*Dt/Rt.data.BYTES_PER_ELEMENT,(Xt+1)*Dt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Xt,Rt.width,Rt.height,1,vt,oe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Rt.width,Rt.height,pt.depth,vt,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Nt,Rt.width,Rt.height,pt.depth,0,Rt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Rt.width,Rt.height,pt.depth,vt,Lt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Nt,Rt.width,Rt.height,pt.depth,0,vt,Lt,Rt.data)}else{G&&bt&&e.texStorage2D(i.TEXTURE_2D,Pt,Nt,Jt[0].width,Jt[0].height);for(let xt=0,ot=Jt.length;xt<ot;xt++)Rt=Jt[xt],v.format!==en?vt!==null?G?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Rt.width,Rt.height,vt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Nt,Rt.width,Rt.height,0,Rt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?St&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Rt.width,Rt.height,vt,Lt,Rt.data):e.texImage2D(i.TEXTURE_2D,xt,Nt,Rt.width,Rt.height,0,vt,Lt,Rt.data)}else if(v.isDataArrayTexture)if(G){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Nt,pt.width,pt.height,pt.depth),St)if(v.layerUpdates.size>0){let xt=Vl(pt.width,pt.height,v.format,v.type);for(let ot of v.layerUpdates){let Dt=pt.data.subarray(ot*xt/pt.data.BYTES_PER_ELEMENT,(ot+1)*xt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,pt.width,pt.height,1,vt,Lt,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,vt,Lt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,pt.width,pt.height,pt.depth,0,vt,Lt,pt.data);else if(v.isData3DTexture)G?(bt&&e.texStorage3D(i.TEXTURE_3D,Pt,Nt,pt.width,pt.height,pt.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,vt,Lt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,pt.width,pt.height,pt.depth,0,vt,Lt,pt.data);else if(v.isFramebufferTexture){if(bt)if(G)e.texStorage2D(i.TEXTURE_2D,Pt,Nt,pt.width,pt.height);else{let xt=pt.width,ot=pt.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Nt,xt,ot,0,vt,Lt,null),xt>>=1,ot>>=1}}else if(Jt.length>0){if(G&&bt){let xt=mt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Nt,xt.width,xt.height)}for(let xt=0,ot=Jt.length;xt<ot;xt++)Rt=Jt[xt],G?St&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,vt,Lt,Rt):e.texImage2D(i.TEXTURE_2D,xt,Nt,vt,Lt,Rt);v.generateMipmaps=!1}else if(G){if(bt){let xt=mt(pt);e.texStorage2D(i.TEXTURE_2D,Pt,Nt,xt.width,xt.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,vt,Lt,pt);p(v)&&m(nt),Ct.__version=st.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function w(I,v,z){if(v.image.length!==6)return;let nt=Vt(I,v),ut=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);let st=n.get(ut);if(ut.version!==st.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);let Ct=Qt.getPrimaries(Qt.workingColorSpace),yt=v.colorSpace===Nn?null:Qt.getPrimaries(v.colorSpace),Ut=v.colorSpace===Nn||Ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let zt=v.isCompressedTexture||v.image[0].isCompressedTexture,pt=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let ot=0;ot<6;ot++)!zt&&!pt?vt[ot]=_(v.image[ot],!0,s.maxCubemapSize):vt[ot]=pt?v.image[ot].image:v.image[ot],vt[ot]=Mt(v,vt[ot]);let Lt=vt[0],Nt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),Jt=y(v.internalFormat,Nt,Rt,v.colorSpace),G=v.isVideoTexture!==!0,bt=st.__version===void 0||nt===!0,St=ut.dataReady,Pt=R(v,Lt);At(i.TEXTURE_CUBE_MAP,v);let xt;if(zt){G&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Jt,Lt.width,Lt.height);for(let ot=0;ot<6;ot++){xt=vt[ot].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){let Xt=xt[Dt];v.format!==en?Nt!==null?G?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt,0,0,Xt.width,Xt.height,Nt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt,Jt,Xt.width,Xt.height,0,Xt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt,0,0,Xt.width,Xt.height,Nt,Rt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt,Jt,Xt.width,Xt.height,0,Nt,Rt,Xt.data)}}}else{if(xt=v.mipmaps,G&&bt){xt.length>0&&Pt++;let ot=mt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(pt){G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,vt[ot].width,vt[ot].height,Nt,Rt,vt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,vt[ot].width,vt[ot].height,0,Nt,Rt,vt[ot].data);for(let Dt=0;Dt<xt.length;Dt++){let oe=xt[Dt].image[ot].image;G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt+1,0,0,oe.width,oe.height,Nt,Rt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt+1,Jt,oe.width,oe.height,0,Nt,Rt,oe.data)}}else{G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Nt,Rt,vt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,Nt,Rt,vt[ot]);for(let Dt=0;Dt<xt.length;Dt++){let Xt=xt[Dt];G?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt+1,0,0,Nt,Rt,Xt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Dt+1,Jt,Nt,Rt,Xt.image[ot])}}}p(v)&&m(i.TEXTURE_CUBE_MAP),st.__version=ut.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function X(I,v,z,nt,ut,st){let Ct=r.convert(z.format,z.colorSpace),yt=r.convert(z.type),Ut=y(z.internalFormat,Ct,yt,z.colorSpace),zt=n.get(v),pt=n.get(z);if(pt.__renderTarget=v,!zt.__hasExternalTextures){let vt=Math.max(1,v.width>>st),Lt=Math.max(1,v.height>>st);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,st,Ut,vt,Lt,v.depth,0,Ct,yt,null):e.texImage2D(ut,st,Ut,vt,Lt,0,Ct,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),L(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ut,pt.__webglTexture,0,S(v)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ut,pt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let nt=v.depthTexture,ut=nt&&nt.isDepthTexture?nt.type:null,st=b(v.stencilBuffer,ut),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;L(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,S(v),st,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,S(v),st,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,st,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,I)}else{let nt=v.textures;for(let ut=0;ut<nt.length;ut++){let st=nt[ut],Ct=r.convert(st.format,st.colorSpace),yt=r.convert(st.type),Ut=y(st.internalFormat,Ct,yt,st.colorSpace);L(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,S(v),Ut,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,S(v),Ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(I,v,z){let nt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ut=n.get(v.depthTexture);if(ut.__renderTarget=v,(!ut.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),ut.__webglTexture===void 0){ut.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),At(i.TEXTURE_CUBE_MAP,v.depthTexture);let zt=r.convert(v.depthTexture.format),pt=r.convert(v.depthTexture.type),vt;v.depthTexture.format===mn?vt=i.DEPTH_COMPONENT24:v.depthTexture.format===ti&&(vt=i.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,vt,v.width,v.height,0,zt,pt,null)}}else W(v.depthTexture,0);let st=ut.__webglTexture,Ct=S(v),yt=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Ut=v.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===mn)L(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,yt,st,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,yt,st,0);else if(v.depthTexture.format===ti)L(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,yt,st,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,yt,st,0);else throw new Error("Unknown depthTexture format")}function ct(I){let v=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let nt=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),nt){let ut=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,nt.removeEventListener("dispose",ut)};nt.addEventListener("dispose",ut),v.__depthDisposeCallback=ut}v.__boundDepthTexture=nt}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)$(v.__webglFramebuffer[nt],I,nt);else{let nt=I.texture.mipmaps;nt&&nt.length>0?$(v.__webglFramebuffer[0],I,0):$(v.__webglFramebuffer,I,0)}else if(z){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]===void 0)v.__webglDepthbuffer[nt]=i.createRenderbuffer(),lt(v.__webglDepthbuffer[nt],I,!1);else{let ut=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,st)}}else{let nt=I.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),lt(v.__webglDepthbuffer,I,!1);else{let ut=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,v,z){let nt=n.get(I);v!==void 0&&X(nt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ct(I)}function ft(I){let v=I.texture,z=n.get(I),nt=n.get(v);I.addEventListener("dispose",D);let ut=I.textures,st=I.isWebGLCubeRenderTarget===!0,Ct=ut.length>1;if(Ct||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=v.version,a.memory.textures++),st){z.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[yt]=[];for(let Ut=0;Ut<v.mipmaps.length;Ut++)z.__webglFramebuffer[yt][Ut]=i.createFramebuffer()}else z.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let yt=0;yt<v.mipmaps.length;yt++)z.__webglFramebuffer[yt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let yt=0,Ut=ut.length;yt<Ut;yt++){let zt=n.get(ut[yt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&L(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){let Ut=ut[yt];z.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[yt]);let zt=r.convert(Ut.format,Ut.colorSpace),pt=r.convert(Ut.type),vt=y(Ut.internalFormat,zt,pt,Ut.colorSpace,I.isXRRenderTarget===!0),Lt=S(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,z.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),At(i.TEXTURE_CUBE_MAP,v);for(let yt=0;yt<6;yt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ut=0;Ut<v.mipmaps.length;Ut++)X(z.__webglFramebuffer[yt][Ut],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut);else X(z.__webglFramebuffer[yt],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(v)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let yt=0,Ut=ut.length;yt<Ut;yt++){let zt=ut[yt],pt=n.get(zt),vt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,pt.__webglTexture),At(vt,zt),X(z.__webglFramebuffer,I,zt,i.COLOR_ATTACHMENT0+yt,vt,0),p(zt)&&m(vt)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,nt.__webglTexture),At(yt,v),v.mipmaps&&v.mipmaps.length>0)for(let Ut=0;Ut<v.mipmaps.length;Ut++)X(z.__webglFramebuffer[Ut],I,v,i.COLOR_ATTACHMENT0,yt,Ut);else X(z.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,yt,0);p(v)&&m(yt),e.unbindTexture()}I.depthBuffer&&ct(I)}function O(I){let v=I.textures;for(let z=0,nt=v.length;z<nt;z++){let ut=v[z];if(p(ut)){let st=M(I),Ct=n.get(ut).__webglTexture;e.bindTexture(st,Ct),m(st),e.unbindTexture()}}}let Z=[],j=[];function it(I){if(I.samples>0){if(L(I)===!1){let v=I.textures,z=I.width,nt=I.height,ut=i.COLOR_BUFFER_BIT,st=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(I),yt=v.length>1;if(yt)for(let zt=0;zt<v.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let Ut=I.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let zt=0;zt<v.length;zt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[zt]);let pt=n.get(v[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,z,nt,0,0,z,nt,ut,i.NEAREST),c===!0&&(Z.length=0,j.length=0,Z.push(i.COLOR_ATTACHMENT0+zt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Z.push(st),j.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let zt=0;zt<v.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[zt]);let pt=n.get(v[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function S(I){return Math.min(s.maxSamples,I.samples)}function L(I){let v=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(I){let v=a.render.frame;u.get(I)!==v&&(u.set(I,v),I.update())}function Mt(I,v){let z=I.colorSpace,nt=I.format,ut=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==di&&z!==Nn&&(Qt.getTransfer(z)===ee?(nt!==en||ut!==Be)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",z)),v}function mt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=gt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=X,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cg(i,t){function e(n,s=Nn){let r,a=Qt.getTransfer(s);if(n===Be)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===Cl)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===hn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Ll)return i.RGB;if(n===en)return i.RGBA;if(n===mn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Na||n===Fa||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ga||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ga)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ps(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nc=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,_=typeof XRWebGLBinding!="undefined",p=new ec,m={},M=e.getContextAttributes(),y=null,b=null,R=[],C=[],D=new ht,x=null,A=new Ee;A.viewport=new de;let F=new Ee;F.viewport=new de;let P=[A,F],N=new Ma,q=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let w=R[E];return w===void 0&&(w=new Hi,R[E]=w),w.getTargetRaySpace()},this.getControllerGrip=function(E){let w=R[E];return w===void 0&&(w=new Hi,R[E]=w),w.getGripSpace()},this.getHand=function(E){let w=R[E];return w===void 0&&(w=new Hi,R[E]=w),w.getHandSpace()};function W(E){let w=C.indexOf(E.inputSource);if(w===-1)return;let X=R[w];X!==void 0&&(X.update(E.inputSource,E.frame,l||a),X.dispatchEvent({type:E.type,data:E.inputSource}))}function k(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",U);for(let E=0;E<R.length;E++){let w=C[E];w!==null&&(C[E]=null,R[E].disconnect(w))}q=null,J=null,p.reset();for(let E in m)delete m[E];t.setRenderTarget(y),f=null,h=null,d=null,s=null,b=null,B.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",k),s.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,lt=null,$=null;M.depth&&($=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=M.stencil?ti:mn,lt=M.stencil?ts:hn);let ct={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ct),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new qe(h.textureWidth,h.textureHeight,{format:en,type:Be,depthTexture:new Yn(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let X={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new qe(f.framebufferWidth,f.framebufferHeight,{format:en,type:Be,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),B.setContext(s),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(E){for(let w=0;w<E.removed.length;w++){let X=E.removed[w],lt=C.indexOf(X);lt>=0&&(C[lt]=null,R[lt].disconnect(X))}for(let w=0;w<E.added.length;w++){let X=E.added[w],lt=C.indexOf(X);if(lt===-1){for(let ct=0;ct<R.length;ct++)if(ct>=C.length){C.push(X),lt=ct;break}else if(C[ct]===null){C[ct]=X,lt=ct;break}if(lt===-1)break}let $=R[lt];$&&$.connect(X)}}let H=new V,at=new V;function dt(E,w,X){H.setFromMatrixPosition(w.matrixWorld),at.setFromMatrixPosition(X.matrixWorld);let lt=H.distanceTo(at),$=w.projectionMatrix.elements,ct=X.projectionMatrix.elements,gt=$[14]/($[10]-1),ft=$[14]/($[10]+1),O=($[9]+1)/$[5],Z=($[9]-1)/$[5],j=($[8]-1)/$[0],it=(ct[8]+1)/ct[0],S=gt*j,L=gt*it,rt=lt/(-j+it),Mt=rt*-j;if(w.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Mt),E.translateZ(rt),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),$[10]===-1)E.projectionMatrix.copy(w.projectionMatrix),E.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let mt=gt+rt,I=ft+rt,v=S-Mt,z=L+(lt-Mt),nt=O*ft/I*mt,ut=Z*ft/I*mt;E.projectionMatrix.makePerspective(v,z,nt,ut,mt,I),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function _t(E,w){w===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(w.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let w=E.near,X=E.far;p.texture!==null&&(p.depthNear>0&&(w=p.depthNear),p.depthFar>0&&(X=p.depthFar)),N.near=F.near=A.near=w,N.far=F.far=A.far=X,(q!==N.near||J!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),q=N.near,J=N.far),N.layers.mask=E.layers.mask|6,A.layers.mask=N.layers.mask&-5,F.layers.mask=N.layers.mask&-3;let lt=E.parent,$=N.cameras;_t(N,lt);for(let ct=0;ct<$.length;ct++)_t($[ct],lt);$.length===2?dt(N,A,F):N.projectionMatrix.copy(A.projectionMatrix),At(E,N,lt)};function At(E,w,X){X===null?E.matrix.copy(w.matrixWorld):(E.matrix.copy(X.matrixWorld),E.matrix.invert(),E.matrix.multiply(w.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(w.projectionMatrix),E.projectionMatrixInverse.copy(w.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Zr*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(E){c=E,h!==null&&(h.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(E){return m[E]};let Vt=null;function K(E,w){if(u=w.getViewerPose(l||a),g=w,u!==null){let X=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let lt=!1;X.length!==N.cameras.length&&(N.cameras.length=0,lt=!0);for(let ft=0;ft<X.length;ft++){let O=X[ft],Z=null;if(f!==null)Z=f.getViewport(O);else{let it=d.getViewSubImage(h,O);Z=it.viewport,ft===0&&(t.setRenderTargetTextures(b,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(b))}let j=P[ft];j===void 0&&(j=new Ee,j.layers.enable(ft),j.viewport=new de,P[ft]=j),j.matrix.fromArray(O.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(O.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Z.x,Z.y,Z.width,Z.height),ft===0&&(N.matrix.copy(j.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),lt===!0&&N.cameras.push(j)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let ft=d.getDepthInformation(X[0]);ft&&ft.isValid&&ft.texture&&p.init(ft,s.renderState)}if($&&$.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let ft=0;ft<X.length;ft++){let O=X[ft].camera;if(O){let Z=m[O];Z||(Z=new Ps,m[O]=Z);let j=d.getCameraImage(O);Z.sourceTexture=j}}}}for(let X=0;X<R.length;X++){let lt=C[X],$=R[X];lt!==null&&$!==void 0&&$.update(lt,w,l||a)}Vt&&Vt(E,w),w.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:w}),g=null}let B=new Qh;B.setAnimationLoop(K),this.setAnimationLoop=function(E){Vt=E},this.dispose=function(){}}},Mi=new Ye,dg=new ie;function fg(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Bl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,y,b){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===De&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===De&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),y=M.envMap,b=M.envMapRotation;y&&(p.envMap.value=y,Mi.copy(b),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Mi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let b=y.program;n.uniformBlockBinding(M,b)}function l(M,y){let b=s[M.id];b===void 0&&(g(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",p));let R=y.program;n.updateUBOMapping(M,R);let C=t.render.frame;r[M.id]!==C&&(h(M),r[M.id]=C)}function u(M){let y=d();M.__bindingPointIndex=y;let b=i.createBuffer(),R=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let y=s[M.id],b=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,D=b.length;C<D;C++){let x=Array.isArray(b[C])?b[C]:[b[C]];for(let A=0,F=x.length;A<F;A++){let P=x[A];if(f(P,C,A,R)===!0){let N=P.__offset,q=Array.isArray(P.value)?P.value:[P.value],J=0;for(let W=0;W<q.length;W++){let k=q[W],U=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+J,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,J),J+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,b,R){let C=M.value,D=y+"_"+b;if(R[D]===void 0)return typeof C=="number"||typeof C=="boolean"?R[D]=C:R[D]=C.clone(),!0;{let x=R[D];if(typeof C=="number"||typeof C=="boolean"){if(x!==C)return R[D]=C,!0}else if(x.equals(C)===!1)return x.copy(C),!0}return!1}function g(M){let y=M.uniforms,b=0,R=16;for(let D=0,x=y.length;D<x;D++){let A=Array.isArray(y[D])?y[D]:[y[D]];for(let F=0,P=A.length;F<P;F++){let N=A[F],q=Array.isArray(N.value)?N.value:[N.value];for(let J=0,W=q.length;J<W;J++){let k=q[J],U=_(k),H=b%R,at=H%U.boundary,dt=H+at;b+=at,dt!==0&&R-dt<U.storage&&(b+=R-dt),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=U.storage}}}let C=b%R;return C>0&&(b+=R-C),M.__size=b,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ht("WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){let y=M.target;y.removeEventListener("dispose",p);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var mg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mn=null;function gg(){return Mn===null&&(Mn=new Is(mg,16,16,_i,vn),Mn.name="DFG_LUT",Mn.minFilter=ge,Mn.magFilter=ge,Mn.wrapS=pn,Mn.wrapT=pn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}var vo=class{constructor(t={}){let{canvas:e=vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Be}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([La,Pa,Ia]),m=new Set([Be,hn,Qi,ts,Ta,Ca]),M=new Uint32Array(4),y=new Int32Array(4),b=null,R=null,C=[],D=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$e,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,F=!1;this._outputColorSpace=Me;let P=0,N=0,q=null,J=-1,W=null,k=new de,U=new de,H=null,at=new Kt(0),dt=0,_t=e.width,At=e.height,Vt=1,K=null,B=null,E=new de(0,0,_t,At),w=new de(0,0,_t,At),X=!1,lt=new qi,$=!1,ct=!1,gt=new ie,ft=new V,O=new de,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function it(){return q===null?Vt:1}let S=n;function L(T,Y){return e.getContext(T,Y)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"183"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",oe,!1),S===null){let Y="webgl2";if(S=L(Y,T),S===null)throw L(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Gt("WebGLRenderer: "+T.message),T}let rt,Mt,mt,I,v,z,nt,ut,st,Ct,yt,Ut,zt,pt,vt,Lt,Nt,Rt,Jt,G,bt,St,Pt;function xt(){rt=new Am(S),rt.init(),bt=new cg(S,rt),Mt=new gm(S,rt,t,bt),mt=new og(S,rt),Mt.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),I=new Tm(S),v=new Y0,z=new lg(S,rt,mt,v,Mt,bt,I),nt=new bm(A),ut=new Pd(S),St=new pm(S,ut),st=new Em(S,ut,I,St),Ct=new Rm(S,st,ut,St,I),Rt=new Cm(S,Mt,z),vt=new xm(v),yt=new q0(A,nt,rt,Mt,St,vt),Ut=new fg(A,v),zt=new J0,pt=new eg(rt),Nt=new fm(A,nt,mt,Ct,g,c),Lt=new ag(A,Ct,Mt),Pt=new pg(S,I,Mt,mt),Jt=new mm(S,rt,I),G=new wm(S,rt,I),I.programs=yt.programs,A.capabilities=Mt,A.extensions=rt,A.properties=v,A.renderLists=zt,A.shadowMap=Lt,A.state=mt,A.info=I}xt(),_!==Be&&(x=new Pm(_,e.width,e.height,s,r));let ot=new nc(A,S);this.xr=ot,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Vt},this.setPixelRatio=function(T){T!==void 0&&(Vt=T,this.setSize(_t,At,!1))},this.getSize=function(T){return T.set(_t,At)},this.setSize=function(T,Y,et=!0){if(ot.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=T,At=Y,e.width=Math.floor(T*Vt),e.height=Math.floor(Y*Vt),et===!0&&(e.style.width=T+"px",e.style.height=Y+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(_t*Vt,At*Vt).floor()},this.setDrawingBufferSize=function(T,Y,et){_t=T,At=Y,Vt=et,e.width=Math.floor(T*et),e.height=Math.floor(Y*et),this.setViewport(0,0,T,Y)},this.setEffects=function(T){if(_===Be){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Y=0;Y<T.length;Y++)if(T[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(E)},this.setViewport=function(T,Y,et,tt){T.isVector4?E.set(T.x,T.y,T.z,T.w):E.set(T,Y,et,tt),mt.viewport(k.copy(E).multiplyScalar(Vt).round())},this.getScissor=function(T){return T.copy(w)},this.setScissor=function(T,Y,et,tt){T.isVector4?w.set(T.x,T.y,T.z,T.w):w.set(T,Y,et,tt),mt.scissor(U.copy(w).multiplyScalar(Vt).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){mt.setScissorTest(X=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){B=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,et=!0){let tt=0;if(T){let Q=!1;if(q!==null){let wt=q.texture.format;Q=p.has(wt)}if(Q){let wt=q.texture.type,It=m.has(wt),Tt=Nt.getClearColor(),Ft=Nt.getClearAlpha(),Bt=Tt.r,qt=Tt.g,$t=Tt.b;It?(M[0]=Bt,M[1]=qt,M[2]=$t,M[3]=Ft,S.clearBufferuiv(S.COLOR,0,M)):(y[0]=Bt,y[1]=qt,y[2]=$t,y[3]=Ft,S.clearBufferiv(S.COLOR,0,y))}else tt|=S.COLOR_BUFFER_BIT}Y&&(tt|=S.DEPTH_BUFFER_BIT),et&&(tt|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&S.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),Nt.dispose(),zt.dispose(),pt.dispose(),v.dispose(),nt.dispose(),Ct.dispose(),St.dispose(),Pt.dispose(),yt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",oc),ot.removeEventListener("sessionend",lc),ii.stop()};function Dt(T){T.preventDefault(),Ul("WebGLRenderer: Context Lost."),F=!0}function Xt(){Ul("WebGLRenderer: Context Restored."),F=!1;let T=I.autoReset,Y=Lt.enabled,et=Lt.autoUpdate,tt=Lt.needsUpdate,Q=Lt.type;xt(),I.autoReset=T,Lt.enabled=Y,Lt.autoUpdate=et,Lt.needsUpdate=tt,Lt.type=Q}function oe(T){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){let Y=T.target;Y.removeEventListener("dispose",ne),bn(Y)}function bn(T){An(T),v.remove(T)}function An(T){let Y=v.get(T).programs;Y!==void 0&&(Y.forEach(function(et){yt.releaseProgram(et)}),T.isShaderMaterial&&yt.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,et,tt,Q,wt){Y===null&&(Y=Z);let It=Q.isMesh&&Q.matrixWorld.determinant()<0,Tt=fu(T,Y,et,tt,Q);mt.setMaterial(tt,It);let Ft=et.index,Bt=1;if(tt.wireframe===!0){if(Ft=st.getWireframeAttribute(et),Ft===void 0)return;Bt=2}let qt=et.drawRange,$t=et.attributes.position,kt=qt.start*Bt,se=(qt.start+qt.count)*Bt;wt!==null&&(kt=Math.max(kt,wt.start*Bt),se=Math.min(se,(wt.start+wt.count)*Bt)),Ft!==null?(kt=Math.max(kt,0),se=Math.min(se,Ft.count)):$t!=null&&(kt=Math.max(kt,0),se=Math.min(se,$t.count));let pe=se-kt;if(pe<0||pe===1/0)return;St.setup(Q,tt,Tt,et,Ft);let fe,re=Jt;if(Ft!==null&&(fe=ut.get(Ft),re=G,re.setIndex(fe)),Q.isMesh)tt.wireframe===!0?(mt.setLineWidth(tt.wireframeLinewidth*it()),re.setMode(S.LINES)):re.setMode(S.TRIANGLES);else if(Q.isLine){let we=tt.linewidth;we===void 0&&(we=1),mt.setLineWidth(we*it()),Q.isLineSegments?re.setMode(S.LINES):Q.isLineLoop?re.setMode(S.LINE_LOOP):re.setMode(S.LINE_STRIP)}else Q.isPoints?re.setMode(S.POINTS):Q.isSprite&&re.setMode(S.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let we=Q._multiDrawStarts,Ot=Q._multiDrawCounts,Ge=Q._multiDrawCount,te=Ft?ut.get(Ft).bytesPerElement:1,sn=v.get(tt).currentProgram.getUniforms();for(let un=0;un<Ge;un++)sn.setValue(S,"_gl_DrawID",un),re.render(we[un]/te,Ot[un])}else if(Q.isInstancedMesh)re.renderInstances(kt,pe,Q.count);else if(et.isInstancedBufferGeometry){let we=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ot=Math.min(et.instanceCount,we);re.renderInstances(kt,pe,Ot)}else re.render(kt,pe)};function ac(T,Y,et){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=De,T.needsUpdate=!0,hr(T,Y,et),T.side=Ln,T.needsUpdate=!0,hr(T,Y,et),T.side=_n):hr(T,Y,et)}this.compile=function(T,Y,et=null){et===null&&(et=T),R=pt.get(et),R.init(Y),D.push(R),et.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),T!==et&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights();let tt=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let wt=Q.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){let Tt=wt[It];ac(Tt,et,Q),tt.add(Tt)}else ac(wt,et,Q),tt.add(wt)}),R=D.pop(),tt},this.compileAsync=function(T,Y,et=null){let tt=this.compile(T,Y,et);return new Promise(Q=>{function wt(){if(tt.forEach(function(It){v.get(It).currentProgram.isReady()&&tt.delete(It)}),tt.size===0){Q(T);return}setTimeout(wt,10)}rt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let wo=null;function du(T){wo&&wo(T)}function oc(){ii.stop()}function lc(){ii.start()}let ii=new Qh;ii.setAnimationLoop(du),typeof self!="undefined"&&ii.setContext(self),this.setAnimationLoop=function(T){wo=T,ot.setAnimationLoop(T),T===null?ii.stop():ii.start()},ot.addEventListener("sessionstart",oc),ot.addEventListener("sessionend",lc),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;let et=ot.enabled===!0&&ot.isPresenting===!0,tt=x!==null&&(q===null||et)&&x.begin(A,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(Y),Y=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,Y,q),R=pt.get(T,D.length),R.init(Y),D.push(R),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),lt.setFromProjectionMatrix(gt,ln,Y.reversedDepth),ct=this.localClippingEnabled,$=vt.init(this.clippingPlanes,ct),b=zt.get(T,C.length),b.init(),C.push(b),ot.enabled===!0&&ot.isPresenting===!0){let It=A.xr.getDepthSensingMesh();It!==null&&To(It,Y,-1/0,A.sortObjects)}To(T,Y,0,A.sortObjects),b.finish(),A.sortObjects===!0&&b.sort(K,B),j=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,j&&Nt.addToRenderList(b,T),this.info.render.frame++,$===!0&&vt.beginShadows();let Q=R.state.shadowsArray;if(Lt.render(Q,T,Y),$===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&x.hasRenderPass())===!1){let It=b.opaque,Tt=b.transmissive;if(R.setupLights(),Y.isArrayCamera){let Ft=Y.cameras;if(Tt.length>0)for(let Bt=0,qt=Ft.length;Bt<qt;Bt++){let $t=Ft[Bt];hc(It,Tt,T,$t)}j&&Nt.render(T);for(let Bt=0,qt=Ft.length;Bt<qt;Bt++){let $t=Ft[Bt];cc(b,T,$t,$t.viewport)}}else Tt.length>0&&hc(It,Tt,T,Y),j&&Nt.render(T),cc(b,T,Y)}q!==null&&N===0&&(z.updateMultisampleRenderTarget(q),z.updateRenderTargetMipmap(q)),tt&&x.end(A),T.isScene===!0&&T.onAfterRender(A,T,Y),St.resetDefaultState(),J=-1,W=null,D.pop(),D.length>0?(R=D[D.length-1],$===!0&&vt.setGlobalState(A.clippingPlanes,R.state.camera)):R=null,C.pop(),C.length>0?b=C[C.length-1]:b=null};function To(T,Y,et,tt){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)et=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)R.pushLight(T),T.castShadow&&R.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||lt.intersectsSprite(T)){tt&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);let It=Ct.update(T),Tt=T.material;Tt.visible&&b.push(T,It,Tt,et,O.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||lt.intersectsObject(T))){let It=Ct.update(T),Tt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),O.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),O.copy(It.boundingSphere.center)),O.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Tt)){let Ft=It.groups;for(let Bt=0,qt=Ft.length;Bt<qt;Bt++){let $t=Ft[Bt],kt=Tt[$t.materialIndex];kt&&kt.visible&&b.push(T,It,kt,et,O.z,$t)}}else Tt.visible&&b.push(T,It,Tt,et,O.z,null)}}let wt=T.children;for(let It=0,Tt=wt.length;It<Tt;It++)To(wt[It],Y,et,tt)}function cc(T,Y,et,tt){let{opaque:Q,transmissive:wt,transparent:It}=T;R.setupLightsView(et),$===!0&&vt.setGlobalState(A.clippingPlanes,et),tt&&mt.viewport(k.copy(tt)),Q.length>0&&cr(Q,Y,et),wt.length>0&&cr(wt,Y,et),It.length>0&&cr(It,Y,et),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function hc(T,Y,et,tt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[tt.id]===void 0){let kt=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[tt.id]=new qe(1,1,{generateMipmaps:!0,type:kt?vn:Be,minFilter:Qn,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let wt=R.state.transmissionRenderTarget[tt.id],It=tt.viewport||k;wt.setSize(It.z*A.transmissionResolutionScale,It.w*A.transmissionResolutionScale);let Tt=A.getRenderTarget(),Ft=A.getActiveCubeFace(),Bt=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(at),dt=A.getClearAlpha(),dt<1&&A.setClearColor(16777215,.5),A.clear(),j&&Nt.render(et);let qt=A.toneMapping;A.toneMapping=$e;let $t=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),R.setupLightsView(tt),$===!0&&vt.setGlobalState(A.clippingPlanes,tt),cr(T,et,tt),z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let se=0,pe=Y.length;se<pe;se++){let fe=Y[se],{object:re,geometry:we,material:Ot,group:Ge}=fe;if(Ot.side===_n&&re.layers.test(tt.layers)){let te=Ot.side;Ot.side=De,Ot.needsUpdate=!0,uc(re,et,tt,we,Ot,Ge),Ot.side=te,Ot.needsUpdate=!0,kt=!0}}kt===!0&&(z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt))}A.setRenderTarget(Tt,Ft,Bt),A.setClearColor(at,dt),$t!==void 0&&(tt.viewport=$t),A.toneMapping=qt}function cr(T,Y,et){let tt=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,wt=T.length;Q<wt;Q++){let It=T[Q],{object:Tt,geometry:Ft,group:Bt}=It,qt=It.material;qt.allowOverride===!0&&tt!==null&&(qt=tt),Tt.layers.test(et.layers)&&uc(Tt,Y,et,Ft,qt,Bt)}}function uc(T,Y,et,tt,Q,wt){T.onBeforeRender(A,Y,et,tt,Q,wt),T.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(A,Y,et,tt,T,wt),Q.transparent===!0&&Q.side===_n&&Q.forceSinglePass===!1?(Q.side=De,Q.needsUpdate=!0,A.renderBufferDirect(et,Y,tt,Q,T,wt),Q.side=Ln,Q.needsUpdate=!0,A.renderBufferDirect(et,Y,tt,Q,T,wt),Q.side=_n):A.renderBufferDirect(et,Y,tt,Q,T,wt),T.onAfterRender(A,Y,et,tt,Q,wt)}function hr(T,Y,et){Y.isScene!==!0&&(Y=Z);let tt=v.get(T),Q=R.state.lights,wt=R.state.shadowsArray,It=Q.state.version,Tt=yt.getParameters(T,Q.state,wt,Y,et),Ft=yt.getProgramCacheKey(Tt),Bt=tt.programs;tt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,tt.fog=Y.fog;let qt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;tt.envMap=nt.get(T.envMap||tt.environment,qt),tt.envMapRotation=tt.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",ne),Bt=new Map,tt.programs=Bt);let $t=Bt.get(Ft);if($t!==void 0){if(tt.currentProgram===$t&&tt.lightsStateVersion===It)return fc(T,Tt),$t}else Tt.uniforms=yt.getUniforms(T),T.onBeforeCompile(Tt,A),$t=yt.acquireProgram(Tt,Ft),Bt.set(Ft,$t),tt.uniforms=Tt.uniforms;let kt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=vt.uniform),fc(T,Tt),tt.needsLights=mu(T),tt.lightsStateVersion=It,tt.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=$t,tt.uniformsList=null,$t}function dc(T){if(T.uniformsList===null){let Y=T.currentProgram.getUniforms();T.uniformsList=is.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function fc(T,Y){let et=v.get(T);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function fu(T,Y,et,tt,Q){Y.isScene!==!0&&(Y=Z),z.resetTextureUnits();let wt=Y.fog,It=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?Y.environment:null,Tt=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:di,Ft=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Bt=nt.get(tt.envMap||It,Ft),qt=tt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,$t=!!et.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),kt=!!et.morphAttributes.position,se=!!et.morphAttributes.normal,pe=!!et.morphAttributes.color,fe=$e;tt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(fe=A.toneMapping);let re=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,we=re!==void 0?re.length:0,Ot=v.get(tt),Ge=R.state.lights;if($===!0&&(ct===!0||T!==W)){let ye=T===W&&tt.id===J;vt.setState(tt,T,ye)}let te=!1;tt.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ge.state.version||Ot.outputColorSpace!==Tt||Q.isBatchedMesh&&Ot.batching===!1||!Q.isBatchedMesh&&Ot.batching===!0||Q.isBatchedMesh&&Ot.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ot.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ot.instancing===!1||!Q.isInstancedMesh&&Ot.instancing===!0||Q.isSkinnedMesh&&Ot.skinning===!1||!Q.isSkinnedMesh&&Ot.skinning===!0||Q.isInstancedMesh&&Ot.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ot.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ot.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ot.instancingMorph===!1&&Q.morphTexture!==null||Ot.envMap!==Bt||tt.fog===!0&&Ot.fog!==wt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==vt.numPlanes||Ot.numIntersection!==vt.numIntersection)||Ot.vertexAlphas!==qt||Ot.vertexTangents!==$t||Ot.morphTargets!==kt||Ot.morphNormals!==se||Ot.morphColors!==pe||Ot.toneMapping!==fe||Ot.morphTargetsCount!==we)&&(te=!0):(te=!0,Ot.__version=tt.version);let sn=Ot.currentProgram;te===!0&&(sn=hr(tt,Y,Q));let un=!1,si=!1,Ai=!1,ae=sn.getUniforms(),Ae=Ot.uniforms;if(mt.useProgram(sn.program)&&(un=!0,si=!0,Ai=!0),tt.id!==J&&(J=tt.id,si=!0),un||W!==T){mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ae.setValue(S,"projectionMatrix",T.projectionMatrix),ae.setValue(S,"viewMatrix",T.matrixWorldInverse);let Un=ae.map.cameraPosition;Un!==void 0&&Un.setValue(S,ft.setFromMatrixPosition(T.matrixWorld)),Mt.logarithmicDepthBuffer&&ae.setValue(S,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ae.setValue(S,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,si=!0,Ai=!0)}if(Ot.needsLights&&(Ge.state.directionalShadowMap.length>0&&ae.setValue(S,"directionalShadowMap",Ge.state.directionalShadowMap,z),Ge.state.spotShadowMap.length>0&&ae.setValue(S,"spotShadowMap",Ge.state.spotShadowMap,z),Ge.state.pointShadowMap.length>0&&ae.setValue(S,"pointShadowMap",Ge.state.pointShadowMap,z)),Q.isSkinnedMesh){ae.setOptional(S,Q,"bindMatrix"),ae.setOptional(S,Q,"bindMatrixInverse");let ye=Q.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ae.setValue(S,"boneTexture",ye.boneTexture,z))}Q.isBatchedMesh&&(ae.setOptional(S,Q,"batchingTexture"),ae.setValue(S,"batchingTexture",Q._matricesTexture,z),ae.setOptional(S,Q,"batchingIdTexture"),ae.setValue(S,"batchingIdTexture",Q._indirectTexture,z),ae.setOptional(S,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ae.setValue(S,"batchingColorTexture",Q._colorsTexture,z));let Fn=et.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Rt.update(Q,et,sn),(si||Ot.receiveShadow!==Q.receiveShadow)&&(Ot.receiveShadow=Q.receiveShadow,ae.setValue(S,"receiveShadow",Q.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&Y.environment!==null&&(Ae.envMapIntensity.value=Y.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=gg()),si&&(ae.setValue(S,"toneMappingExposure",A.toneMappingExposure),Ot.needsLights&&pu(Ae,Ai),wt&&tt.fog===!0&&Ut.refreshFogUniforms(Ae,wt),Ut.refreshMaterialUniforms(Ae,tt,Vt,At,R.state.transmissionRenderTarget[T.id]),is.upload(S,dc(Ot),Ae,z)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(is.upload(S,dc(Ot),Ae,z),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ae.setValue(S,"center",Q.center),ae.setValue(S,"modelViewMatrix",Q.modelViewMatrix),ae.setValue(S,"normalMatrix",Q.normalMatrix),ae.setValue(S,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let ye=tt.uniformsGroups;for(let Un=0,Ei=ye.length;Un<Ei;Un++){let pc=ye[Un];Pt.update(pc,sn),Pt.bind(pc,sn)}}return sn}function pu(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function mu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,Y,et){let tt=v.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),v.get(T.texture).__webglTexture=Y,v.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:et,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){let et=v.get(T);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0};let gu=S.createFramebuffer();this.setRenderTarget=function(T,Y=0,et=0){q=T,P=Y,N=et;let tt=null,Q=!1,wt=!1;if(T){let Tt=v.get(T);if(Tt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(S.FRAMEBUFFER,Tt.__webglFramebuffer),k.copy(T.viewport),U.copy(T.scissor),H=T.scissorTest,mt.viewport(k),mt.scissor(U),mt.setScissorTest(H),J=-1;return}else if(Tt.__webglFramebuffer===void 0)z.setupRenderTarget(T);else if(Tt.__hasExternalTextures)z.rebindTextures(T,v.get(T.texture).__webglTexture,v.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let qt=T.depthTexture;if(Tt.__boundDepthTexture!==qt){if(qt!==null&&v.has(qt)&&(T.width!==qt.image.width||T.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(T)}}let Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(wt=!0);let Bt=v.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[Y])?tt=Bt[Y][et]:tt=Bt[Y],Q=!0):T.samples>0&&z.useMultisampledRTT(T)===!1?tt=v.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?tt=Bt[et]:tt=Bt,k.copy(T.viewport),U.copy(T.scissor),H=T.scissorTest}else k.copy(E).multiplyScalar(Vt).floor(),U.copy(w).multiplyScalar(Vt).floor(),H=X;if(et!==0&&(tt=gu),mt.bindFramebuffer(S.FRAMEBUFFER,tt)&&mt.drawBuffers(T,tt),mt.viewport(k),mt.scissor(U),mt.setScissorTest(H),Q){let Tt=v.get(T.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Tt.__webglTexture,et)}else if(wt){let Tt=Y;for(let Ft=0;Ft<T.textures.length;Ft++){let Bt=v.get(T.textures[Ft]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ft,Bt.__webglTexture,et,Tt)}}else if(T!==null&&et!==0){let Tt=v.get(T.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Tt.__webglTexture,et)}J=-1},this.readRenderTargetPixels=function(T,Y,et,tt,Q,wt,It,Tt=0){if(!(T&&T.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){mt.bindFramebuffer(S.FRAMEBUFFER,Ft);try{let Bt=T.textures[Tt],qt=Bt.format,$t=Bt.type;if(T.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Tt),!Mt.textureFormatReadable(qt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable($t)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-tt&&et>=0&&et<=T.height-Q&&S.readPixels(Y,et,tt,Q,bt.convert(qt),bt.convert($t),wt)}finally{let Bt=q!==null?v.get(q).__webglFramebuffer:null;mt.bindFramebuffer(S.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,Y,et,tt,Q,wt,It,Tt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft)if(Y>=0&&Y<=T.width-tt&&et>=0&&et<=T.height-Q){mt.bindFramebuffer(S.FRAMEBUFFER,Ft);let Bt=T.textures[Tt],qt=Bt.format,$t=Bt.type;if(T.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Tt),!Mt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,kt),S.bufferData(S.PIXEL_PACK_BUFFER,wt.byteLength,S.STREAM_READ),S.readPixels(Y,et,tt,Q,bt.convert(qt),bt.convert($t),0);let se=q!==null?v.get(q).__webglFramebuffer:null;mt.bindFramebuffer(S.FRAMEBUFFER,se);let pe=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Sh(S,pe,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,kt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,wt),S.deleteBuffer(kt),S.deleteSync(pe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,et=0){let tt=Math.pow(2,-et),Q=Math.floor(T.image.width*tt),wt=Math.floor(T.image.height*tt),It=Y!==null?Y.x:0,Tt=Y!==null?Y.y:0;z.setTexture2D(T,0),S.copyTexSubImage2D(S.TEXTURE_2D,et,0,0,It,Tt,Q,wt),mt.unbindTexture()};let xu=S.createFramebuffer(),_u=S.createFramebuffer();this.copyTextureToTexture=function(T,Y,et=null,tt=null,Q=0,wt=0){let It,Tt,Ft,Bt,qt,$t,kt,se,pe,fe=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(et!==null)It=et.max.x-et.min.x,Tt=et.max.y-et.min.y,Ft=et.isBox3?et.max.z-et.min.z:1,Bt=et.min.x,qt=et.min.y,$t=et.isBox3?et.min.z:0;else{let Ae=Math.pow(2,-Q);It=Math.floor(fe.width*Ae),Tt=Math.floor(fe.height*Ae),T.isDataArrayTexture?Ft=fe.depth:T.isData3DTexture?Ft=Math.floor(fe.depth*Ae):Ft=1,Bt=0,qt=0,$t=0}tt!==null?(kt=tt.x,se=tt.y,pe=tt.z):(kt=0,se=0,pe=0);let re=bt.convert(Y.format),we=bt.convert(Y.type),Ot;Y.isData3DTexture?(z.setTexture3D(Y,0),Ot=S.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(z.setTexture2DArray(Y,0),Ot=S.TEXTURE_2D_ARRAY):(z.setTexture2D(Y,0),Ot=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,Y.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ge=S.getParameter(S.UNPACK_ROW_LENGTH),te=S.getParameter(S.UNPACK_IMAGE_HEIGHT),sn=S.getParameter(S.UNPACK_SKIP_PIXELS),un=S.getParameter(S.UNPACK_SKIP_ROWS),si=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,fe.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,fe.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Bt),S.pixelStorei(S.UNPACK_SKIP_ROWS,qt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,$t);let Ai=T.isDataArrayTexture||T.isData3DTexture,ae=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){let Ae=v.get(T),Fn=v.get(Y),ye=v.get(Ae.__renderTarget),Un=v.get(Fn.__renderTarget);mt.bindFramebuffer(S.READ_FRAMEBUFFER,ye.__webglFramebuffer),mt.bindFramebuffer(S.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Ei=0;Ei<Ft;Ei++)Ai&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,v.get(T).__webglTexture,Q,$t+Ei),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,v.get(Y).__webglTexture,wt,pe+Ei)),S.blitFramebuffer(Bt,qt,It,Tt,kt,se,It,Tt,S.DEPTH_BUFFER_BIT,S.NEAREST);mt.bindFramebuffer(S.READ_FRAMEBUFFER,null),mt.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||v.has(T)){let Ae=v.get(T),Fn=v.get(Y);mt.bindFramebuffer(S.READ_FRAMEBUFFER,xu),mt.bindFramebuffer(S.DRAW_FRAMEBUFFER,_u);for(let ye=0;ye<Ft;ye++)Ai?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ae.__webglTexture,Q,$t+ye):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ae.__webglTexture,Q),ae?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Fn.__webglTexture,wt,pe+ye):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Fn.__webglTexture,wt),Q!==0?S.blitFramebuffer(Bt,qt,It,Tt,kt,se,It,Tt,S.COLOR_BUFFER_BIT,S.NEAREST):ae?S.copyTexSubImage3D(Ot,wt,kt,se,pe+ye,Bt,qt,It,Tt):S.copyTexSubImage2D(Ot,wt,kt,se,Bt,qt,It,Tt);mt.bindFramebuffer(S.READ_FRAMEBUFFER,null),mt.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ae?T.isDataTexture||T.isData3DTexture?S.texSubImage3D(Ot,wt,kt,se,pe,It,Tt,Ft,re,we,fe.data):Y.isCompressedArrayTexture?S.compressedTexSubImage3D(Ot,wt,kt,se,pe,It,Tt,Ft,re,fe.data):S.texSubImage3D(Ot,wt,kt,se,pe,It,Tt,Ft,re,we,fe):T.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,wt,kt,se,It,Tt,re,we,fe.data):T.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,wt,kt,se,fe.width,fe.height,re,fe.data):S.texSubImage2D(S.TEXTURE_2D,wt,kt,se,It,Tt,re,we,fe);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ge),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,te),S.pixelStorei(S.UNPACK_SKIP_PIXELS,sn),S.pixelStorei(S.UNPACK_SKIP_ROWS,un),S.pixelStorei(S.UNPACK_SKIP_IMAGES,si),wt===0&&Y.generateMipmaps&&S.generateMipmap(Ot),mt.unbindTexture()},this.initRenderTarget=function(T){v.get(T).__webglFramebuffer===void 0&&z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?z.setTextureCube(T,0):T.isData3DTexture?z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?z.setTexture2DArray(T,0):z.setTexture2D(T,0),mt.unbindTexture()},this.resetState=function(){P=0,N=0,q=null,mt.reset(),St.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var _g=Me,bi=class i extends gi{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new qs(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(K,B){if(K.nodeType!==1)return;let E=b(K),w=!1,X=null;switch(K.nodeName){case"svg":B=g(K,B);break;case"style":r(K);break;case"g":B=g(K,B);break;case"path":B=g(K,B),K.hasAttribute("d")&&(X=s(K));break;case"rect":B=g(K,B),X=c(K);break;case"polygon":B=g(K,B),X=l(K);break;case"polyline":B=g(K,B),X=u(K);break;case"circle":B=g(K,B),X=d(K);break;case"ellipse":B=g(K,B),X=h(K);break;case"line":B=g(K,B),X=f(K);break;case"defs":w=!0;break;case"use":B=g(K,B);let ct=(K.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),gt=K.viewportElement.getElementById(ct);gt?n(gt,B):console.warn("SVGLoader: 'use node' references non-existent node id: "+ct);break;default:}X&&(B.fill!==void 0&&B.fill!=="none"&&X.color.setStyle(B.fill,_g),C(X,_t),N.push(X),X.userData={node:K,style:B});let lt=K.childNodes;for(let $=0;$<lt.length;$++){let ct=lt[$];w&&ct.nodeName!=="style"&&ct.nodeName!=="defs"||n(ct,B)}E&&(J.pop(),J.length>0?_t.copy(J[J.length-1]):_t.identity())}function s(K){let B=new cn,E=new ht,w=new ht,X=new ht,lt=!0,$=!1,ct=K.getAttribute("d");if(ct===""||ct==="none")return null;let gt=ct.match(/[a-df-z][^a-df-z]*/ig);for(let ft=0,O=gt.length;ft<O;ft++){let Z=gt[ft],j=Z.charAt(0),it=Z.slice(1).trim();lt===!0&&($=!0,lt=!1);let S;switch(j){case"M":S=p(it);for(let L=0,rt=S.length;L<rt;L+=2)E.x=S[L+0],E.y=S[L+1],w.x=E.x,w.y=E.y,L===0?B.moveTo(E.x,E.y):B.lineTo(E.x,E.y),L===0&&X.copy(E);break;case"H":S=p(it);for(let L=0,rt=S.length;L<rt;L++)E.x=S[L],w.x=E.x,w.y=E.y,B.lineTo(E.x,E.y),L===0&&$===!0&&X.copy(E);break;case"V":S=p(it);for(let L=0,rt=S.length;L<rt;L++)E.y=S[L],w.x=E.x,w.y=E.y,B.lineTo(E.x,E.y),L===0&&$===!0&&X.copy(E);break;case"L":S=p(it);for(let L=0,rt=S.length;L<rt;L+=2)E.x=S[L+0],E.y=S[L+1],w.x=E.x,w.y=E.y,B.lineTo(E.x,E.y),L===0&&$===!0&&X.copy(E);break;case"C":S=p(it);for(let L=0,rt=S.length;L<rt;L+=6)B.bezierCurveTo(S[L+0],S[L+1],S[L+2],S[L+3],S[L+4],S[L+5]),w.x=S[L+2],w.y=S[L+3],E.x=S[L+4],E.y=S[L+5],L===0&&$===!0&&X.copy(E);break;case"S":S=p(it);for(let L=0,rt=S.length;L<rt;L+=4)B.bezierCurveTo(_(E.x,w.x),_(E.y,w.y),S[L+0],S[L+1],S[L+2],S[L+3]),w.x=S[L+0],w.y=S[L+1],E.x=S[L+2],E.y=S[L+3],L===0&&$===!0&&X.copy(E);break;case"Q":S=p(it);for(let L=0,rt=S.length;L<rt;L+=4)B.quadraticCurveTo(S[L+0],S[L+1],S[L+2],S[L+3]),w.x=S[L+0],w.y=S[L+1],E.x=S[L+2],E.y=S[L+3],L===0&&$===!0&&X.copy(E);break;case"T":S=p(it);for(let L=0,rt=S.length;L<rt;L+=2){let Mt=_(E.x,w.x),mt=_(E.y,w.y);B.quadraticCurveTo(Mt,mt,S[L+0],S[L+1]),w.x=Mt,w.y=mt,E.x=S[L+0],E.y=S[L+1],L===0&&$===!0&&X.copy(E)}break;case"A":S=p(it,[3,4],7);for(let L=0,rt=S.length;L<rt;L+=7){if(S[L+5]==E.x&&S[L+6]==E.y)continue;let Mt=E.clone();E.x=S[L+5],E.y=S[L+6],w.x=E.x,w.y=E.y,a(B,S[L],S[L+1],S[L+2],S[L+3],S[L+4],Mt,E),L===0&&$===!0&&X.copy(E)}break;case"m":S=p(it);for(let L=0,rt=S.length;L<rt;L+=2)E.x+=S[L+0],E.y+=S[L+1],w.x=E.x,w.y=E.y,L===0?B.moveTo(E.x,E.y):B.lineTo(E.x,E.y),L===0&&X.copy(E);break;case"h":S=p(it);for(let L=0,rt=S.length;L<rt;L++)E.x+=S[L],w.x=E.x,w.y=E.y,B.lineTo(E.x,E.y),L===0&&$===!0&&X.copy(E);break;case"v":S=p(it);for(let L=0,rt=S.length;L<rt;L++)E.y+=S[L],w.x=E.x,w.y=E.y,B.lineTo(E.x,E.y),L===0&&$===!0&&X.copy(E);break;case"l":S=p(it);for(let L=0,rt=S.length;L<rt;L+=2)E.x+=S[L+0],E.y+=S[L+1],w.x=E.x,w.y=E.y,B.lineTo(E.x,E.y),L===0&&$===!0&&X.copy(E);break;case"c":S=p(it);for(let L=0,rt=S.length;L<rt;L+=6)B.bezierCurveTo(E.x+S[L+0],E.y+S[L+1],E.x+S[L+2],E.y+S[L+3],E.x+S[L+4],E.y+S[L+5]),w.x=E.x+S[L+2],w.y=E.y+S[L+3],E.x+=S[L+4],E.y+=S[L+5],L===0&&$===!0&&X.copy(E);break;case"s":S=p(it);for(let L=0,rt=S.length;L<rt;L+=4)B.bezierCurveTo(_(E.x,w.x),_(E.y,w.y),E.x+S[L+0],E.y+S[L+1],E.x+S[L+2],E.y+S[L+3]),w.x=E.x+S[L+0],w.y=E.y+S[L+1],E.x+=S[L+2],E.y+=S[L+3],L===0&&$===!0&&X.copy(E);break;case"q":S=p(it);for(let L=0,rt=S.length;L<rt;L+=4)B.quadraticCurveTo(E.x+S[L+0],E.y+S[L+1],E.x+S[L+2],E.y+S[L+3]),w.x=E.x+S[L+0],w.y=E.y+S[L+1],E.x+=S[L+2],E.y+=S[L+3],L===0&&$===!0&&X.copy(E);break;case"t":S=p(it);for(let L=0,rt=S.length;L<rt;L+=2){let Mt=_(E.x,w.x),mt=_(E.y,w.y);B.quadraticCurveTo(Mt,mt,E.x+S[L+0],E.y+S[L+1]),w.x=Mt,w.y=mt,E.x=E.x+S[L+0],E.y=E.y+S[L+1],L===0&&$===!0&&X.copy(E)}break;case"a":S=p(it,[3,4],7);for(let L=0,rt=S.length;L<rt;L+=7){if(S[L+5]==0&&S[L+6]==0)continue;let Mt=E.clone();E.x+=S[L+5],E.y+=S[L+6],w.x=E.x,w.y=E.y,a(B,S[L],S[L+1],S[L+2],S[L+3],S[L+4],Mt,E),L===0&&$===!0&&X.copy(E)}break;case"Z":case"z":B.currentPath.autoClose=!0,B.currentPath.curves.length>0&&(E.copy(X),B.currentPath.currentPoint.copy(E),lt=!0);break;default:console.warn(Z)}$=!1}return B}function r(K){if(!(!K.sheet||!K.sheet.cssRules||!K.sheet.cssRules.length))for(let B=0;B<K.sheet.cssRules.length;B++){let E=K.sheet.cssRules[B];if(E.type!==1)continue;let w=E.selectorText.split(/,/gm).filter(Boolean).map(X=>X.trim());for(let X=0;X<w.length;X++){let lt=Object.fromEntries(Object.entries(E.style).filter(([,$])=>$!==""));q[w[X]]=Object.assign(q[w[X]]||{},lt)}}}function a(K,B,E,w,X,lt,$,ct){if(B==0||E==0){K.lineTo(ct.x,ct.y);return}w=w*Math.PI/180,B=Math.abs(B),E=Math.abs(E);let gt=($.x-ct.x)/2,ft=($.y-ct.y)/2,O=Math.cos(w)*gt+Math.sin(w)*ft,Z=-Math.sin(w)*gt+Math.cos(w)*ft,j=B*B,it=E*E,S=O*O,L=Z*Z,rt=S/j+L/it;if(rt>1){let yt=Math.sqrt(rt);B=yt*B,E=yt*E,j=B*B,it=E*E}let Mt=j*L+it*S,mt=(j*it-Mt)/Mt,I=Math.sqrt(Math.max(0,mt));X===lt&&(I=-I);let v=I*B*Z/E,z=-I*E*O/B,nt=Math.cos(w)*v-Math.sin(w)*z+($.x+ct.x)/2,ut=Math.sin(w)*v+Math.cos(w)*z+($.y+ct.y)/2,st=o(1,0,(O-v)/B,(Z-z)/E),Ct=o((O-v)/B,(Z-z)/E,(-O-v)/B,(-Z-z)/E)%(Math.PI*2);K.currentPath.absellipse(nt,ut,B,E,st,st+Ct,lt===0,w)}function o(K,B,E,w){let X=K*E+B*w,lt=Math.sqrt(K*K+B*B)*Math.sqrt(E*E+w*w),$=Math.acos(Math.max(-1,Math.min(1,X/lt)));return K*w-B*E<0&&($=-$),$}function c(K){let B=y(K.getAttribute("x")||0),E=y(K.getAttribute("y")||0),w=y(K.getAttribute("rx")||K.getAttribute("ry")||0),X=y(K.getAttribute("ry")||K.getAttribute("rx")||0),lt=y(K.getAttribute("width")),$=y(K.getAttribute("height")),ct=1-.551915024494,gt=new cn;return gt.moveTo(B+w,E),gt.lineTo(B+lt-w,E),(w!==0||X!==0)&&gt.bezierCurveTo(B+lt-w*ct,E,B+lt,E+X*ct,B+lt,E+X),gt.lineTo(B+lt,E+$-X),(w!==0||X!==0)&&gt.bezierCurveTo(B+lt,E+$-X*ct,B+lt-w*ct,E+$,B+lt-w,E+$),gt.lineTo(B+w,E+$),(w!==0||X!==0)&&gt.bezierCurveTo(B+w*ct,E+$,B,E+$-X*ct,B,E+$-X),gt.lineTo(B,E+X),(w!==0||X!==0)&&gt.bezierCurveTo(B,E+X*ct,B+w*ct,E,B+w,E),gt}function l(K){function B(lt,$,ct){let gt=y($),ft=y(ct);X===0?w.moveTo(gt,ft):w.lineTo(gt,ft),X++}let E=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new cn,X=0;return K.getAttribute("points").replace(E,B),w.currentPath.autoClose=!0,w}function u(K){function B(lt,$,ct){let gt=y($),ft=y(ct);X===0?w.moveTo(gt,ft):w.lineTo(gt,ft),X++}let E=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new cn,X=0;return K.getAttribute("points").replace(E,B),w.currentPath.autoClose=!1,w}function d(K){let B=y(K.getAttribute("cx")||0),E=y(K.getAttribute("cy")||0),w=y(K.getAttribute("r")||0),X=new xn;X.absarc(B,E,w,0,Math.PI*2);let lt=new cn;return lt.subPaths.push(X),lt}function h(K){let B=y(K.getAttribute("cx")||0),E=y(K.getAttribute("cy")||0),w=y(K.getAttribute("rx")||0),X=y(K.getAttribute("ry")||0),lt=new xn;lt.absellipse(B,E,w,X,0,Math.PI*2);let $=new cn;return $.subPaths.push(lt),$}function f(K){let B=y(K.getAttribute("x1")||0),E=y(K.getAttribute("y1")||0),w=y(K.getAttribute("x2")||0),X=y(K.getAttribute("y2")||0),lt=new cn;return lt.moveTo(B,E),lt.lineTo(w,X),lt.currentPath.autoClose=!1,lt}function g(K,B){B=Object.assign({},B);let E={};if(K.hasAttribute("class")){let $=K.getAttribute("class").split(/\s/).filter(Boolean).map(ct=>ct.trim());for(let ct=0;ct<$.length;ct++)E=Object.assign(E,q["."+$[ct]])}K.hasAttribute("id")&&(E=Object.assign(E,q["#"+K.getAttribute("id")]));function w($,ct,gt){gt===void 0&&(gt=function(O){return O.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),O}),K.hasAttribute($)&&(B[ct]=gt(K.getAttribute($))),E[ct]&&(B[ct]=gt(E[ct])),K.style&&K.style[$]!==""&&(B[ct]=gt(K.style[$]))}function X($){return Math.max(0,Math.min(1,y($)))}function lt($){return Math.max(0,y($))}return w("fill","fill"),w("fill-opacity","fillOpacity",X),w("fill-rule","fillRule"),w("opacity","opacity",X),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",X),w("stroke-width","strokeWidth",lt),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",lt),w("visibility","visibility"),B}function _(K,B){return K-(B-K)}function p(K,B,E){if(typeof K!="string")throw new TypeError("Invalid input: "+typeof K);let w={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},X=0,lt=1,$=2,ct=3,gt=X,ft=!0,O="",Z="",j=[];function it(Mt,mt,I){let v=new SyntaxError('Unexpected character "'+Mt+'" at index '+mt+".");throw v.partial=I,v}function S(){O!==""&&(Z===""?j.push(Number(O)):j.push(Number(O)*Math.pow(10,Number(Z)))),O="",Z=""}let L,rt=K.length;for(let Mt=0;Mt<rt;Mt++){if(L=K[Mt],Array.isArray(B)&&B.includes(j.length%E)&&w.FLAGS.test(L)){gt=lt,O=L,S();continue}if(gt===X){if(w.WHITESPACE.test(L))continue;if(w.DIGIT.test(L)||w.SIGN.test(L)){gt=lt,O=L;continue}if(w.POINT.test(L)){gt=$,O=L;continue}w.COMMA.test(L)&&(ft&&it(L,Mt,j),ft=!0)}if(gt===lt){if(w.DIGIT.test(L)){O+=L;continue}if(w.POINT.test(L)){O+=L,gt=$;continue}if(w.EXP.test(L)){gt=ct;continue}w.SIGN.test(L)&&O.length===1&&w.SIGN.test(O[0])&&it(L,Mt,j)}if(gt===$){if(w.DIGIT.test(L)){O+=L;continue}if(w.EXP.test(L)){gt=ct;continue}w.POINT.test(L)&&O[O.length-1]==="."&&it(L,Mt,j)}if(gt===ct){if(w.DIGIT.test(L)){Z+=L;continue}if(w.SIGN.test(L)){if(Z===""){Z+=L;continue}Z.length===1&&w.SIGN.test(Z)&&it(L,Mt,j)}}w.WHITESPACE.test(L)?(S(),gt=X,ft=!1):w.COMMA.test(L)?(S(),gt=X,ft=!0):w.SIGN.test(L)?(S(),gt=lt,O=L):w.POINT.test(L)?(S(),gt=$,O=L):it(L,Mt,j)}return S(),j}let m=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(K){let B="px";if(typeof K=="string"||K instanceof String)for(let w=0,X=m.length;w<X;w++){let lt=m[w];if(K.endsWith(lt)){B=lt,K=K.substring(0,K.length-lt.length);break}}let E;return B==="px"&&e.defaultUnit!=="px"?E=M.in[e.defaultUnit]/e.defaultDPI:(E=M[B][e.defaultUnit],E<0&&(E=M[B].in*e.defaultDPI)),E*parseFloat(K)}function b(K){if(!(K.hasAttribute("transform")||K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))))return null;let B=R(K);return J.length>0&&B.premultiply(J[J.length-1]),_t.copy(B),J.push(B),B}function R(K){let B=new Wt,E=W;if(K.nodeName==="use"&&(K.hasAttribute("x")||K.hasAttribute("y"))){let w=y(K.getAttribute("x")||0),X=y(K.getAttribute("y")||0);B.translate(w,X)}if(K.hasAttribute("transform")){let w=K.getAttribute("transform").split(")");for(let X=w.length-1;X>=0;X--){let lt=w[X].trim();if(lt==="")continue;let $=lt.indexOf("("),ct=lt.length;if($>0&&$<ct){let gt=lt.slice(0,$),ft=p(lt.slice($+1));switch(E.identity(),gt){case"translate":if(ft.length>=1){let O=ft[0],Z=0;ft.length>=2&&(Z=ft[1]),E.translate(O,Z)}break;case"rotate":if(ft.length>=1){let O=0,Z=0,j=0;O=ft[0]*Math.PI/180,ft.length>=3&&(Z=ft[1],j=ft[2]),k.makeTranslation(-Z,-j),U.makeRotation(O),H.multiplyMatrices(U,k),k.makeTranslation(Z,j),E.multiplyMatrices(k,H)}break;case"scale":if(ft.length>=1){let O=ft[0],Z=O;ft.length>=2&&(Z=ft[1]),E.scale(O,Z)}break;case"skewX":ft.length===1&&E.set(1,Math.tan(ft[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ft.length===1&&E.set(1,0,0,Math.tan(ft[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ft.length===6&&E.set(ft[0],ft[2],ft[4],ft[1],ft[3],ft[5],0,0,1);break}}B.premultiply(E)}}return B}function C(K,B){function E($){dt.set($.x,$.y,1).applyMatrix3(B),$.set(dt.x,dt.y)}function w($){let ct=$.xRadius,gt=$.yRadius,ft=Math.cos($.aRotation),O=Math.sin($.aRotation),Z=new V(ct*ft,ct*O,0),j=new V(-gt*O,gt*ft,0),it=Z.applyMatrix3(B),S=j.applyMatrix3(B),L=W.set(it.x,S.x,0,it.y,S.y,0,0,0,1),rt=k.copy(L).invert(),I=U.copy(rt).transpose().multiply(rt).elements,v=P(I[0],I[1],I[4]),z=Math.sqrt(v.rt1),nt=Math.sqrt(v.rt2);if($.xRadius=1/z,$.yRadius=1/nt,$.aRotation=Math.atan2(v.sn,v.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let st=k.set(z,0,0,0,nt,0,0,0,1),Ct=U.set(v.cs,v.sn,0,-v.sn,v.cs,0,0,0,1),yt=st.multiply(Ct).multiply(L),Ut=zt=>{let{x:pt,y:vt}=new V(Math.cos(zt),Math.sin(zt),0).applyMatrix3(yt);return Math.atan2(vt,pt)};$.aStartAngle=Ut($.aStartAngle),$.aEndAngle=Ut($.aEndAngle),D(B)&&($.aClockwise=!$.aClockwise)}}function X($){let ct=A(B),gt=F(B);$.xRadius*=ct,$.yRadius*=gt;let ft=ct>Number.EPSILON?Math.atan2(B.elements[1],B.elements[0]):Math.atan2(-B.elements[3],B.elements[4]);$.aRotation+=ft,D(B)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}let lt=K.subPaths;for(let $=0,ct=lt.length;$<ct;$++){let ft=lt[$].curves;for(let O=0;O<ft.length;O++){let Z=ft[O];Z.isLineCurve?(E(Z.v1),E(Z.v2)):Z.isCubicBezierCurve?(E(Z.v0),E(Z.v1),E(Z.v2),E(Z.v3)):Z.isQuadraticBezierCurve?(E(Z.v0),E(Z.v1),E(Z.v2)):Z.isEllipseCurve&&(at.set(Z.aX,Z.aY),E(at),Z.aX=at.x,Z.aY=at.y,x(B)?w(Z):X(Z))}}}function D(K){let B=K.elements;return B[0]*B[4]-B[1]*B[3]<0}function x(K){let B=K.elements,E=B[0]*B[3]+B[1]*B[4];if(E===0)return!1;let w=A(K),X=F(K);return Math.abs(E/(w*X))>Number.EPSILON}function A(K){let B=K.elements;return Math.sqrt(B[0]*B[0]+B[1]*B[1])}function F(K){let B=K.elements;return Math.sqrt(B[3]*B[3]+B[4]*B[4])}function P(K,B,E){let w,X,lt,$,ct,gt=K+E,ft=K-E,O=Math.sqrt(ft*ft+4*B*B);return gt>0?(w=.5*(gt+O),ct=1/w,X=K*ct*E-B*ct*B):gt<0?X=.5*(gt-O):(w=.5*O,X=-.5*O),ft>0?lt=ft+O:lt=ft-O,Math.abs(lt)>2*Math.abs(B)?(ct=-2*B/lt,$=1/Math.sqrt(1+ct*ct),lt=ct*$):Math.abs(B)===0?(lt=1,$=0):(ct=-.5*lt/B,lt=1/Math.sqrt(1+ct*ct),$=ct*lt),ft>0&&(ct=lt,lt=-$,$=ct),{rt1:w,rt2:X,cs:lt,sn:$}}let N=[],q={},J=[],W=new Wt,k=new Wt,U=new Wt,H=new Wt,at=new ht,dt=new V,_t=new Wt,At=new DOMParser().parseFromString(t,"image/svg+xml");return n(At.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:N,xml:At.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,p,m,M){let y=_.x,b=p.x,R=m.x,C=M.x,D=_.y,x=p.y,A=m.y,F=M.y,P=(C-R)*(D-A)-(F-A)*(y-R),N=(b-y)*(D-A)-(x-D)*(y-R),q=(F-A)*(b-y)-(C-R)*(x-D),J=P/q,W=N/q;if(q===0&&P!==0||J<=0||J>=1||W<0||W>1)return null;if(P===0&&q===0){for(let k=0;k<2;k++)if(a(k===0?m:M,_,p),s.loc==n.ORIGIN){let U=k===0?m:M;return{x:U.x,y:U.y,t:s.t}}else if(s.loc==n.BETWEEN){let U=+(y+s.t*(b-y)).toPrecision(10),H=+(D+s.t*(x-D)).toPrecision(10);return{x:U,y:H,t:s.t}}return null}else{for(let H=0;H<2;H++)if(a(H===0?m:M,_,p),s.loc==n.ORIGIN){let at=H===0?m:M;return{x:at.x,y:at.y,t:s.t}}let k=+(y+J*(b-y)).toPrecision(10),U=+(D+J*(x-D)).toPrecision(10);return{x:k,y:U,t:J}}}function a(_,p,m){let M=m.x-p.x,y=m.y-p.y,b=_.x-p.x,R=_.y-p.y,C=M*R-b*y;if(_.x===p.x&&_.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===m.x&&_.y===m.y){s.loc=n.DESTINATION,s.t=1;return}if(C<-Number.EPSILON){s.loc=n.LEFT;return}if(C>Number.EPSILON){s.loc=n.RIGHT;return}if(M*b<0||y*R<0){s.loc=n.BEHIND;return}if(Math.sqrt(M*M+y*y)<Math.sqrt(b*b+R*R)){s.loc=n.BEYOND;return}let D;M!==0?D=b/M:D=R/y,s.loc=n.BETWEEN,s.t=D}function o(_,p){let m=[],M=[];for(let y=1;y<_.length;y++){let b=_[y-1],R=_[y];for(let C=1;C<p.length;C++){let D=p[C-1],x=p[C],A=r(b,R,D,x);A!==null&&m.find(F=>F.t<=A.t+Number.EPSILON&&F.t>=A.t-Number.EPSILON)===void 0&&(m.push(A),M.push(new ht(A.x,A.y)))}}return M}function c(_,p,m){let M=new ht;p.getCenter(M);let y=[];return m.forEach(b=>{b.boundingBox.containsPoint(M)&&o(_,b.points).forEach(C=>{y.push({identifier:b.identifier,isCW:b.isCW,point:C})})}),y.sort((b,R)=>b.point.x-R.point.x),y}function l(_,p,m,M,y){(y==null||y==="")&&(y="nonzero");let b=new ht;_.boundingBox.getCenter(b);let R=[new ht(m,b.y),new ht(M,b.y)],C=c(R,_.boundingBox,p);C.sort((N,q)=>N.point.x-q.point.x);let D=[],x=[];C.forEach(N=>{N.identifier===_.identifier?D.push(N):x.push(N)});let A=D[0].point.x,F=[],P=0;for(;P<x.length&&x[P].point.x<A;)F.length>0&&F[F.length-1]===x[P].identifier?F.pop():F.push(x[P].identifier),P++;if(F.push(_.identifier),y==="evenodd"){let N=F.length%2===0,q=F[F.length-2];return{identifier:_.identifier,isHole:N,for:q}}else if(y==="nonzero"){let N=!0,q=null,J=null;for(let W=0;W<F.length;W++){let k=F[W];N?(J=p[k].isCW,N=!1,q=k):J!==p[k].isCW&&(J=p[k].isCW,N=!0)}return{identifier:_.identifier,isHole:N,for:q}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let u=999999999,d=-999999999,h=t.subPaths.map(_=>{let p=_.getPoints(),m=-999999999,M=999999999,y=-999999999,b=999999999;for(let R=0;R<p.length;R++){let C=p[R];C.y>m&&(m=C.y),C.y<M&&(M=C.y),C.x>y&&(y=C.x),C.x<b&&(b=C.x)}return d<=y&&(d=y+1),u>=b&&(u=b-1),{curves:_.curves,points:p,isCW:Xe.isClockWise(p),identifier:-1,boundingBox:new Ks(new ht(b,M),new ht(y,m))}});h=h.filter(_=>_.points.length>1);for(let _=0;_<h.length;_++)h[_].identifier=_;let f=h.map(_=>l(_,h,u,d,t.userData?t.userData.style.fillRule:void 0)),g=[];return h.forEach(_=>{if(!f[_.identifier].isHole){let m=new Fe;m.curves=_.curves,f.filter(y=>y.isHole&&y.for===_.identifier).forEach(y=>{let b=h[y.identifier],R=new xn;R.curves=b.curves,m.holes.push(R)}),g.push(m)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let c=new he;return c.setAttribute("position",new Yt(r,3)),c.setAttribute("normal",new Yt(a,3)),c.setAttribute("uv",new Yt(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,c){let l=new ht,u=new ht,d=new ht,h=new ht,f=new ht,g=new ht,_=new ht,p=new ht,m=new ht,M=new ht,y=new ht,b=new ht,R=new ht,C=new ht,D=new ht,x=new ht,A=new ht;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=ft(t);let F=t.length;if(F<2)return 0;let P=t[0].equals(t[F-1]),N,q=t[0],J,W=e.strokeWidth/2,k=1/(F-1),U=0,H,at,dt,_t,At=!1,Vt=0,K=c*3,B=c*2;E(t[0],t[1],l).multiplyScalar(W),p.copy(t[0]).sub(l),m.copy(t[0]).add(l),M.copy(p),y.copy(m);for(let O=1;O<F;O++){N=t[O],O===F-1?P?J=t[1]:J=void 0:J=t[O+1];let Z=l;if(E(q,N,Z),d.copy(Z).multiplyScalar(W),b.copy(N).sub(d),R.copy(N).add(d),H=U+k,at=!1,J!==void 0){E(N,J,u),d.copy(u).multiplyScalar(W),C.copy(N).sub(d),D.copy(N).add(d),dt=!0,d.subVectors(J,q),Z.dot(d)<0&&(dt=!1),O===1&&(At=dt),d.subVectors(J,N),d.normalize();let j=Math.abs(Z.dot(d));if(j>Number.EPSILON){let it=W/j;d.multiplyScalar(-it),h.subVectors(N,q),f.copy(h).setLength(it).add(d),x.copy(f).negate();let S=f.length(),L=h.length();h.divideScalar(L),g.subVectors(J,N);let rt=g.length();switch(g.divideScalar(rt),h.dot(x)<L&&g.dot(x)<rt&&(at=!0),A.copy(f).add(N),x.add(N),_t=!1,at?dt?(D.copy(x),R.copy(x)):(C.copy(x),b.copy(x)):lt(),e.strokeLineJoin){case"bevel":$(dt,at,H);break;case"round":ct(dt,at),dt?X(N,b,C,H,0):X(N,D,R,H,1);break;case"miter":case"miter-clip":default:let Mt=W*e.strokeMiterLimit/S;if(Mt<1)if(e.strokeLineJoin!=="miter-clip"){$(dt,at,H);break}else ct(dt,at),dt?(g.subVectors(A,b).multiplyScalar(Mt).add(b),_.subVectors(A,C).multiplyScalar(Mt).add(C),w(b,H,0),w(g,H,0),w(N,H,.5),w(N,H,.5),w(g,H,0),w(_,H,0),w(N,H,.5),w(_,H,0),w(C,H,0)):(g.subVectors(A,R).multiplyScalar(Mt).add(R),_.subVectors(A,D).multiplyScalar(Mt).add(D),w(R,H,1),w(g,H,1),w(N,H,.5),w(N,H,.5),w(g,H,1),w(_,H,1),w(N,H,.5),w(_,H,1),w(D,H,1));else at?(dt?(w(m,U,1),w(p,U,0),w(A,H,0),w(m,U,1),w(A,H,0),w(x,H,1)):(w(m,U,1),w(p,U,0),w(A,H,1),w(p,U,0),w(x,H,0),w(A,H,1)),dt?C.copy(A):D.copy(A)):dt?(w(b,H,0),w(A,H,0),w(N,H,.5),w(N,H,.5),w(A,H,0),w(C,H,0)):(w(R,H,1),w(A,H,1),w(N,H,.5),w(N,H,.5),w(A,H,1),w(D,H,1)),_t=!0;break}}else lt()}else lt();!P&&O===F-1&&gt(t[0],M,y,dt,!0,U),U=H,q=N,p.copy(C),m.copy(D)}if(!P)gt(N,b,R,dt,!1,H);else if(at&&r){let O=A,Z=x;At!==dt&&(O=x,Z=A),dt?(_t||At)&&(Z.toArray(r,0),Z.toArray(r,9),_t&&O.toArray(r,3)):(_t||!At)&&(Z.toArray(r,3),Z.toArray(r,9),_t&&O.toArray(r,0))}return Vt;function E(O,Z,j){return j.subVectors(Z,O),j.set(-j.y,j.x).normalize()}function w(O,Z,j){r&&(r[K]=O.x,r[K+1]=O.y,r[K+2]=0,a&&(a[K]=0,a[K+1]=0,a[K+2]=1),K+=3,o&&(o[B]=Z,o[B+1]=j,B+=2)),Vt+=3}function X(O,Z,j,it,S){l.copy(Z).sub(O).normalize(),u.copy(j).sub(O).normalize();let L=Math.PI,rt=l.dot(u);Math.abs(rt)<1&&(L=Math.abs(Math.acos(rt))),L/=n,d.copy(Z);for(let Mt=0,mt=n-1;Mt<mt;Mt++)h.copy(d).rotateAround(O,L),w(d,it,S),w(h,it,S),w(O,it,.5),d.copy(h);w(h,it,S),w(j,it,S),w(O,it,.5)}function lt(){w(m,U,1),w(p,U,0),w(b,H,0),w(m,U,1),w(b,H,0),w(R,H,1)}function $(O,Z,j){Z?O?(w(m,U,1),w(p,U,0),w(b,H,0),w(m,U,1),w(b,H,0),w(x,H,1),w(b,j,0),w(C,j,0),w(x,j,.5)):(w(m,U,1),w(p,U,0),w(R,H,1),w(p,U,0),w(x,H,0),w(R,H,1),w(R,j,1),w(x,j,0),w(D,j,1)):O?(w(b,j,0),w(C,j,0),w(N,j,.5)):(w(R,j,1),w(D,j,0),w(N,j,.5))}function ct(O,Z){Z&&(O?(w(m,U,1),w(p,U,0),w(b,H,0),w(m,U,1),w(b,H,0),w(x,H,1),w(b,U,0),w(N,H,.5),w(x,H,1),w(N,H,.5),w(C,U,0),w(x,H,1)):(w(m,U,1),w(p,U,0),w(R,H,1),w(p,U,0),w(x,H,0),w(R,H,1),w(R,U,1),w(x,H,0),w(N,H,.5),w(N,H,.5),w(x,H,0),w(D,U,1)))}function gt(O,Z,j,it,S,L){switch(e.strokeLineCap){case"round":S?X(O,j,Z,L,.5):X(O,Z,j,L,.5);break;case"square":if(S)l.subVectors(Z,O),u.set(l.y,-l.x),d.addVectors(l,u).add(O),h.subVectors(u,l).add(O),it?(d.toArray(r,3),h.toArray(r,0),h.toArray(r,9)):(d.toArray(r,3),o[7]===1?h.toArray(r,9):d.toArray(r,9),h.toArray(r,0));else{l.subVectors(j,O),u.set(l.y,-l.x),d.addVectors(l,u).add(O),h.subVectors(u,l).add(O);let rt=r.length;it?(d.toArray(r,rt-3),h.toArray(r,rt-6),h.toArray(r,rt-12)):(h.toArray(r,rt-6),d.toArray(r,rt-3),h.toArray(r,rt-12))}break;case"butt":default:break}}function ft(O){let Z=!1;for(let it=1,S=O.length-1;it<S;it++)if(O[it].distanceTo(O[it+1])<s){Z=!0;break}if(!Z)return O;let j=[];j.push(O[0]);for(let it=1,S=O.length-1;it<S;it++)O[it].distanceTo(O[it+1])>=s&&j.push(O[it]);return j.push(O[O.length-1]),j}}};function ru(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new he,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=su(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][h]);let g=su(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function su(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Se(a,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let _=u.getComponent(h,g);o.setComponent(h+d,g,_)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var au=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -40 120 80" width="600" height="400"><defs><clipPath id="mrb0"><path d="M0 -15.5 L13.42 -7.75 A78 78 0 0 1 27.26 16.52 A51.07 51.07 0 0 0 43.55 0 A51.07 51.07 0 0 0 29.46 -15.04 A78 78 0 0 0 0 -15.5 Z"/></clipPath><clipPath id="mrb1"><path d="M13.42 -7.75 L13.42 7.75 A78 78 0 0 1 5.16 24.14 A51.07 51.07 0 0 0 27.26 16.52 A78 78 0 0 0 13.42 -7.75 Z"/></clipPath><clipPath id="mrb2"><path d="M13.42 7.75 L0 15.5 A78 78 0 0 1 -29.46 15.04 A51.07 51.07 0 0 0 5.16 24.14 A78 78 0 0 0 13.42 7.75 Z"/></clipPath><clipPath id="mrb3"><path d="M0 15.5 L-13.42 7.75 A78 78 0 0 1 -27.26 -16.52 A51.07 51.07 0 0 0 -43.55 0 A51.07 51.07 0 0 0 -29.46 15.04 A78 78 0 0 0 0 15.5 Z"/></clipPath><clipPath id="mrb4"><path d="M-13.42 7.75 L-13.42 -7.75 A78 78 0 0 1 -5.16 -24.14 A51.07 51.07 0 0 0 -27.26 -16.52 A78 78 0 0 0 -13.42 7.75 Z"/></clipPath><clipPath id="mrb5"><path d="M-13.42 -7.75 L0 -15.5 A78 78 0 0 1 29.46 -15.04 A51.07 51.07 0 0 0 -5.16 -24.14 A78 78 0 0 0 -13.42 -7.75 Z"/></clipPath><clipPath id="mrin"><path d="M-43.55 0 A51.07 51.07 0 0 1 43.55 0 A51.07 51.07 0 0 1 -43.55 0 Z"/></clipPath><mask id="mrrm" maskUnits="userSpaceOnUse" x="-80" y="-60" width="160" height="120"><rect x="-80" y="-60" width="160" height="120" fill="#fff"/><path d="M-43.55 0 A51.07 51.07 0 0 1 43.55 0 A51.07 51.07 0 0 1 -43.55 0 Z" transform="translate(2.2 2.6)" fill="#000"/></mask></defs><path d="M-50 0 A56.67 56.67 0 0 1 -34.23 -18.5 L-32.17 -15.79 A53.27 53.27 0 0 0 -46.11 0 Z" fill="#A4B36B" stroke="#A4B36B" stroke-width=".25" stroke-linejoin="round"/><path d="M-34.23 -18.5 A56.67 56.67 0 0 1 -12.15 -28.68 L-11.43 -25.36 A53.27 53.27 0 0 0 -32.17 -15.79 Z" fill="#A4B36B" stroke="#A4B36B" stroke-width=".25" stroke-linejoin="round"/><path d="M-12.15 -28.68 A56.67 56.67 0 0 1 12.15 -28.68 L11.43 -25.36 A53.27 53.27 0 0 0 -11.43 -25.36 Z" fill="#A4B36B" stroke="#A4B36B" stroke-width=".25" stroke-linejoin="round"/><path d="M12.15 -28.68 A56.67 56.67 0 0 1 34.23 -18.5 L32.17 -15.79 A53.27 53.27 0 0 0 11.43 -25.36 Z" fill="#3B8A6B" stroke="#3B8A6B" stroke-width=".25" stroke-linejoin="round"/><path d="M34.23 -18.5 A56.67 56.67 0 0 1 50 0 L46.11 0 A53.27 53.27 0 0 0 32.17 -15.79 Z" fill="#317358" stroke="#317358" stroke-width=".25" stroke-linejoin="round"/><path d="M-50 -0 A56.67 56.67 0 0 0 -34.23 18.5 L-32.17 15.79 A53.27 53.27 0 0 1 -46.11 -0 Z" fill="#307056" stroke="#307056" stroke-width=".25" stroke-linejoin="round"/><path d="M-34.23 18.5 A56.67 56.67 0 0 0 -12.15 28.68 L-11.43 25.36 A53.27 53.27 0 0 1 -32.17 15.79 Z" fill="#265A45" stroke="#265A45" stroke-width=".25" stroke-linejoin="round"/><path d="M-12.15 28.68 A56.67 56.67 0 0 0 12.15 28.68 L11.43 25.36 A53.27 53.27 0 0 1 -11.43 25.36 Z" fill="#1F4939" stroke="#1F4939" stroke-width=".25" stroke-linejoin="round"/><path d="M12.15 28.68 A56.67 56.67 0 0 0 34.23 18.5 L32.17 15.79 A53.27 53.27 0 0 1 11.43 25.36 Z" fill="#1C4032" stroke="#1C4032" stroke-width=".25" stroke-linejoin="round"/><path d="M34.23 18.5 A56.67 56.67 0 0 0 50 0 L46.11 -0 A53.27 53.27 0 0 1 32.17 15.79 Z" fill="#1B4031" stroke="#1B4031" stroke-width=".25" stroke-linejoin="round"/><path d="M-46.11 0 A53.27 53.27 0 0 1 -31.29 -16.44 L-30 -14.66 A51.07 51.07 0 0 0 -43.55 0 Z" fill="#153025" stroke="#153025" stroke-width=".25" stroke-linejoin="round"/><path d="M-31.29 -16.44 A53.27 53.27 0 0 1 -11.07 -25.44 L-10.61 -23.29 A51.07 51.07 0 0 0 -30 -14.66 Z" fill="#153126" stroke="#153126" stroke-width=".25" stroke-linejoin="round"/><path d="M-11.07 -25.44 A53.27 53.27 0 0 1 11.07 -25.44 L10.61 -23.29 A51.07 51.07 0 0 0 -10.61 -23.29 Z" fill="#193A2D" stroke="#193A2D" stroke-width=".25" stroke-linejoin="round"/><path d="M11.07 -25.44 A53.27 53.27 0 0 1 31.29 -16.44 L30 -14.66 A51.07 51.07 0 0 0 10.61 -23.29 Z" fill="#204B3A" stroke="#204B3A" stroke-width=".25" stroke-linejoin="round"/><path d="M31.29 -16.44 A53.27 53.27 0 0 1 46.11 0 L43.55 0 A51.07 51.07 0 0 0 30 -14.66 Z" fill="#2A624C" stroke="#2A624C" stroke-width=".25" stroke-linejoin="round"/><path d="M-46.11 -0 A53.27 53.27 0 0 0 -31.29 16.44 L-30 14.66 A51.07 51.07 0 0 1 -43.55 -0 Z" fill="#2D6951" stroke="#2D6951" stroke-width=".25" stroke-linejoin="round"/><path d="M-31.29 16.44 A53.27 53.27 0 0 0 -11.07 25.44 L-10.61 23.29 A51.07 51.07 0 0 1 -30 14.66 Z" fill="#388265" stroke="#388265" stroke-width=".25" stroke-linejoin="round"/><path d="M-11.07 25.44 A53.27 53.27 0 0 0 11.07 25.44 L10.61 23.29 A51.07 51.07 0 0 1 -10.61 23.29 Z" fill="#419875" stroke="#419875" stroke-width=".25" stroke-linejoin="round"/><path d="M11.07 25.44 A53.27 53.27 0 0 0 31.29 16.44 L30 14.66 A51.07 51.07 0 0 1 10.61 23.29 Z" fill="#47A57F" stroke="#47A57F" stroke-width=".25" stroke-linejoin="round"/><path d="M31.29 16.44 A53.27 53.27 0 0 0 46.11 -0 L43.55 -0 A51.07 51.07 0 0 1 30 14.66 Z" fill="#47A680" stroke="#47A680" stroke-width=".25" stroke-linejoin="round"/><path d="M0 -15.5 L13.42 -7.75 A78 78 0 0 1 27.26 16.52 A51.07 51.07 0 0 0 42.56 1.55 Z" fill="#1F503D" stroke="#1F503D" stroke-width=".25" stroke-linejoin="round"/><path d="M0 -15.5 L42.56 1.55 A51.07 51.07 0 0 0 43.55 0 A51.07 51.07 0 0 0 29.46 -15.04 A78 78 0 0 0 0 -15.5 Z" fill="#2C7256" stroke="#2C7256" stroke-width=".25" stroke-linejoin="round"/><path d="M13.42 -7.75 L13.42 7.75 A78 78 0 0 1 5.16 24.14 A51.07 51.07 0 0 0 15.62 21.95 Z" fill="#2C7256" stroke="#2C7256" stroke-width=".25" stroke-linejoin="round"/><path d="M13.42 -7.75 L15.62 21.95 A51.07 51.07 0 0 0 27.26 16.52 A78 78 0 0 0 13.42 -7.75 Z" fill="#215540" stroke="#215540" stroke-width=".25" stroke-linejoin="round"/><path d="M13.42 7.75 L0 15.5 A78 78 0 0 1 -29.46 15.04 A51.07 51.07 0 0 0 -11.03 23.19 Z" fill="#2F785B" stroke="#2F785B" stroke-width=".25" stroke-linejoin="round"/><path d="M13.42 7.75 L-11.03 23.19 A51.07 51.07 0 0 0 5.16 24.14 A78 78 0 0 0 13.42 7.75 Z" fill="#1A4232" stroke="#1A4232" stroke-width=".25" stroke-linejoin="round"/><path d="M0 15.5 L-13.42 7.75 A78 78 0 0 1 -27.26 -16.52 A51.07 51.07 0 0 0 -42.56 -1.55 Z" fill="#245D46" stroke="#245D46" stroke-width=".25" stroke-linejoin="round"/><path d="M0 15.5 L-42.56 -1.55 A51.07 51.07 0 0 0 -43.55 0 A51.07 51.07 0 0 0 -29.46 15.04 A78 78 0 0 0 0 15.5 Z" fill="#1A4433" stroke="#1A4433" stroke-width=".25" stroke-linejoin="round"/><path d="M-13.42 7.75 L-13.42 -7.75 A78 78 0 0 1 -5.16 -24.14 A51.07 51.07 0 0 0 -15.62 -21.95 Z" fill="#183E2F" stroke="#183E2F" stroke-width=".25" stroke-linejoin="round"/><path d="M-13.42 7.75 L-15.62 -21.95 A51.07 51.07 0 0 0 -27.26 -16.52 A78 78 0 0 0 -13.42 7.75 Z" fill="#255F48" stroke="#255F48" stroke-width=".25" stroke-linejoin="round"/><path d="M-13.42 -7.75 L0 -15.5 A78 78 0 0 1 29.46 -15.04 A51.07 51.07 0 0 0 11.03 -23.19 Z" fill="#173A2C" stroke="#173A2C" stroke-width=".25" stroke-linejoin="round"/><path d="M-13.42 -7.75 L11.03 -23.19 A51.07 51.07 0 0 0 -5.16 -24.14 A78 78 0 0 0 -13.42 -7.75 Z" fill="#2E7659" stroke="#2E7659" stroke-width=".25" stroke-linejoin="round"/><path d="M0 -15.5 L13.42 -7.75 A78 78 0 0 1 27.26 16.52 A51.07 51.07 0 0 0 43.55 0 A51.07 51.07 0 0 0 29.46 -15.04 A78 78 0 0 0 0 -15.5 Z" transform="translate(1.5 1.8)" fill="#000" fill-opacity="0.5" clip-path="url(#mrb1)"/><path d="M13.42 -7.75 L13.42 7.75 A78 78 0 0 1 5.16 24.14 A51.07 51.07 0 0 0 27.26 16.52 A78 78 0 0 0 13.42 -7.75 Z" transform="translate(1.5 1.8)" fill="#000" fill-opacity="0.5" clip-path="url(#mrb2)"/><path d="M13.42 7.75 L0 15.5 A78 78 0 0 1 -29.46 15.04 A51.07 51.07 0 0 0 5.16 24.14 A78 78 0 0 0 13.42 7.75 Z" transform="translate(1.5 1.8)" fill="#000" fill-opacity="0.5" clip-path="url(#mrb3)"/><path d="M0 15.5 L-13.42 7.75 A78 78 0 0 1 -27.26 -16.52 A51.07 51.07 0 0 0 -43.55 0 A51.07 51.07 0 0 0 -29.46 15.04 A78 78 0 0 0 0 15.5 Z" transform="translate(1.5 1.8)" fill="#000" fill-opacity="0.5" clip-path="url(#mrb4)"/><path d="M-13.42 7.75 L-13.42 -7.75 A78 78 0 0 1 -5.16 -24.14 A51.07 51.07 0 0 0 -27.26 -16.52 A78 78 0 0 0 -13.42 7.75 Z" transform="translate(1.5 1.8)" fill="#000" fill-opacity="0.5" clip-path="url(#mrb5)"/><path d="M-13.42 -7.75 L0 -15.5 A78 78 0 0 1 29.46 -15.04 A51.07 51.07 0 0 0 -5.16 -24.14 A78 78 0 0 0 -13.42 -7.75 Z" transform="translate(1.5 1.8)" fill="#000" fill-opacity="0.5" clip-path="url(#mrb0)"/><g clip-path="url(#mrin)"><rect x="-80" y="-60" width="160" height="120" fill="#000" fill-opacity=".45" mask="url(#mrrm)"/></g><path d="M13.42 7.75 A78 78 0 0 1 5.16 24.14" fill="none" stroke="#6FB89B" stroke-width="0.7" clip-path="url(#mrb1)"/><path d="M13.42 -7.75 L13.42 7.75" stroke="#76BCA0" stroke-width="0.9799999999999999" clip-path="url(#mrb1)"/><path d="M0 15.5 A78 78 0 0 1 -29.46 15.04" fill="none" stroke="#6FB89B" stroke-width="0.7" clip-path="url(#mrb2)"/><path d="M13.42 7.75 L0 15.5" stroke="#76BCA0" stroke-width="0.9799999999999999" clip-path="url(#mrb2)"/><path d="M0 15.5 L-13.42 7.75" stroke="#76BCA0" stroke-width="0.9799999999999999" clip-path="url(#mrb3)"/><path d="M0 -15.5 L13.42 -7.75 L13.42 7.75 L0 15.5 L-13.42 7.75 L-13.42 -7.75 Z" fill="#03100A" stroke="#03100A" stroke-width=".2" stroke-linejoin="round"/><path d="M0 -5.22 L0 -11.34 L4.91 -8.51 Z" fill="#20D6E6" stroke="#20D6E6" stroke-width=".2" stroke-linejoin="round"/><path d="M4.52 -2.61 L4.91 -8.51 L9.82 -5.67 Z" fill="#20D6E6" stroke="#20D6E6" stroke-width=".2" stroke-linejoin="round"/><path d="M0 -5.22 L4.91 -8.51 L4.52 -2.61 Z" fill="#20D6E6" stroke="#20D6E6" stroke-width=".2" stroke-linejoin="round"/><path d="M4.52 -2.61 L9.82 -5.67 L9.82 0 Z" fill="#0A535A" stroke="#0A535A" stroke-width=".2" stroke-linejoin="round"/><path d="M4.52 2.61 L9.82 0 L9.82 5.67 Z" fill="#0A535A" stroke="#0A535A" stroke-width=".2" stroke-linejoin="round"/><path d="M4.52 -2.61 L9.82 0 L4.52 2.61 Z" fill="#0A535A" stroke="#0A535A" stroke-width=".2" stroke-linejoin="round"/><path d="M4.52 2.61 L9.82 5.67 L4.91 8.51 Z" fill="#052A2D" stroke="#052A2D" stroke-width=".2" stroke-linejoin="round"/><path d="M0 5.22 L4.91 8.51 L0 11.34 Z" fill="#052A2D" stroke="#052A2D" stroke-width=".2" stroke-linejoin="round"/><path d="M4.52 2.61 L4.91 8.51 L0 5.22 Z" fill="#052A2D" stroke="#052A2D" stroke-width=".2" stroke-linejoin="round"/><path d="M0 5.22 L0 11.34 L-4.91 8.51 Z" fill="#0E757F" stroke="#0E757F" stroke-width=".2" stroke-linejoin="round"/><path d="M-4.52 2.61 L-4.91 8.51 L-9.82 5.67 Z" fill="#0E757F" stroke="#0E757F" stroke-width=".2" stroke-linejoin="round"/><path d="M0 5.22 L-4.91 8.51 L-4.52 2.61 Z" fill="#0E757F" stroke="#0E757F" stroke-width=".2" stroke-linejoin="round"/><path d="M-4.52 2.61 L-9.82 5.67 L-9.82 -0 Z" fill="#4CDEEB" stroke="#4CDEEB" stroke-width=".2" stroke-linejoin="round"/><path d="M-4.52 -2.61 L-9.82 -0 L-9.82 -5.67 Z" fill="#4CDEEB" stroke="#4CDEEB" stroke-width=".2" stroke-linejoin="round"/><path d="M-4.52 2.61 L-9.82 -0 L-4.52 -2.61 Z" fill="#4CDEEB" stroke="#4CDEEB" stroke-width=".2" stroke-linejoin="round"/><path d="M-4.52 -2.61 L-9.82 -5.67 L-4.91 -8.51 Z" fill="#88E9F2" stroke="#88E9F2" stroke-width=".2" stroke-linejoin="round"/><path d="M0 -5.22 L-4.91 -8.51 L0 -11.34 Z" fill="#88E9F2" stroke="#88E9F2" stroke-width=".2" stroke-linejoin="round"/><path d="M-4.52 -2.61 L-4.91 -8.51 L0 -5.22 Z" fill="#DFF9FB" stroke="#DFF9FB" stroke-width=".2" stroke-linejoin="round"/><path d="M0 -5.22 L4.52 -2.61 L4.52 2.61 L0 5.22 L-4.52 2.61 L-4.52 -2.61 Z" fill="#0CCDDF" stroke="#0CCDDF" stroke-width=".2" stroke-linejoin="round"/></svg>\r
`;var nn=Math.PI/180,Ie={void:923412,bone:15987177,stone:14407369,socket:200714,surfaceVoid:1190689,forest:2050618,forestBright:4431225,forestLine:2712909,olive:10793835,cyan:839135,teal:947324,tealDeep:677212,spec:14678523},ze=i=>new Kt(i),vg=[[51.04,1.86,-17.3],[29.61,41.61,-16.7],[-21.94,46.12,-16.8],[-51.07,0,-17.2],[-31.1,-40.51,-16.4],[21.94,-46.12,-16.8]],Ve={open:.3,light:.42,hold:.54,white:.6,dive:.96},ou=56.6667,ni=26.6667,lu=53.27,os=51.07,bo=22,ls=.6,Ao=ls/Math.tan(40*nn),rs=[-.5,.62,.6],Mg=12.5,Sg=/SwiftShader|Basic Render Driver|llvmpipe|softpipe|Software Rasterizer|Mesa OffScreen/i,lr=i=>i<0?0:i>1?1:i,ke=(i,t,e)=>lr((i-t)/(e-t)),as=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;function bg(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var sc=()=>typeof scheduler!="undefined"&&scheduler.yield?scheduler.yield():new Promise(i=>setTimeout(i,0));function Ag(){let{paths:i}=new bi().parse(au);if(i.length!==64)throw new Error("master_reverse.svg: expected 64 paths, got "+i.length);let t=n=>(i[n].userData.style.fill||"").toUpperCase();if(t(0)!=="#A4B36B"||t(44)!=="#03100A"||t(63)!=="#0CCDDF")throw new Error("master_reverse.svg: path order changed");let e=i.slice(39,44).map(n=>{let s=/mrb(\d)/.exec(n.userData.node.getAttribute("clip-path")||"");return{path:n,blade:s?+s[1]:1}});return{rimOut:i.slice(0,10),rimIn:i.slice(10,20),blades:[0,1,2,3,4,5].map(n=>[i[20+2*n],i[21+2*n]]),shadows:i.slice(32,38),knives:e,socket:i[44],gem:i.slice(45,64)}}function Eg(i,t){let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t.r,n[s*3+1]=t.g,n[s*3+2]=t.b;return i.setAttribute("color",new Se(n,3)),i.deleteAttribute("uv"),i}function wg(i,t){let e=bi.createShapes(i),n=new zs(e,{depth:t,bevelEnabled:!0,bevelThickness:ls,bevelSize:Ao,bevelOffset:-Ao,bevelSegments:1,curveSegments:10,steps:1});return Eg(n,i.color)}function Tg(i){let t=new Zn(bi.createShapes(i),10);return t.deleteAttribute("uv"),t}function Cg(i){let t=i.subPaths[0].getPoints(16),e=bi.pointsToStroke(t,i.userData.style,16,.001);return e.deleteAttribute("uv"),e}function Eo(i,t,e){let n=Math.cos(i),s=Math.sin(i),r=s<0?ni:-ni,a=s*r,o=a+Math.sqrt(Math.max(0,a*a-r*r+t*t));return[n*o+e[0],s*o+e[1]]}function cu(i,t,e){let n=i[0]-e[0],s=i[1]-e[1];return Math.hypot(n,s-ni)<=t&&Math.hypot(n,s+ni)<=t}function hu(i,t,e,n,s,r,a,o){let c=[],l=[],d=(g,_,p,m,M)=>{let y=_[0]-g[0],b=_[1]-g[1],R=_[2]-g[2],C=p[0]-g[0],D=p[1]-g[1],x=p[2]-g[2],A=b*x-R*D,F=R*C-y*x,P=y*D-b*C,N=A*M[0]+F*M[1]+P*M[2]>=0?[g,_,p]:[g,p,_];for(let q of N)c.push(q[0],q[1],q[2]),l.push(m.r,m.g,m.b)},h=(g,_,p,m,M,y)=>{d(g,_,p,M,y),d(g,p,m,M,y)};for(let g of[!0,!1]){let p=g?ni:-ni,m=g?e:n,M=Math.sqrt(i*i-ni*ni),y=Math.atan2(-p,-M),b=Math.atan2(-p,M),R=(A,F,P)=>[0+F*Math.cos(A),p+F*Math.sin(A),P],C=(A,F)=>{let P=Math.sin(A),N=-p/P;return N>0?Math.max(F,N):F},D=a?i-Ao:i,x=o?t+Ao:t;for(let A=0;A<150;A++){let F=y+(b-y)*A/150,P=y+(b-y)*(A+1)/150,N=m[Math.min(4,Math.floor(A*5/150))],q=[Math.cos(F),Math.sin(F)],J=[Math.cos(P),Math.sin(P)],W=[Math.cos((F+P)/2),Math.sin((F+P)/2)],k=R(F,C(F,D),s),U=R(P,C(P,D),s),H=R(F,C(F,x),s),at=R(P,C(P,x),s);if(h(H,k,U,at,N,[0,0,1]),a){let dt=R(F,i,s-ls),_t=R(P,i,s-ls);h(k,dt,_t,U,N,[W[0],W[1],1.2]),h(dt,R(F,i,s-r),R(P,i,s-r),_t,N,[W[0],W[1],0])}else h(R(F,i,s),R(F,i,s-r),R(P,i,s-r),R(P,i,s),N,[W[0],W[1],0]);if(o){let dt=R(F,C(F,t),s-ls),_t=R(P,C(P,t),s-ls);h(H,at,_t,dt,N,[-W[0],-W[1],1.2]),h(dt,_t,R(P,C(P,t),s-r),R(F,C(F,t),s-r),N,[-W[0],-W[1],0])}else h(H,at,R(P,C(P,t),s-r),R(F,C(F,t),s-r),N,[-W[0],-W[1],0])}}let f=new he;return f.setAttribute("position",new Yt(c,3)),f.setAttribute("color",new Yt(l,3)),f.computeVertexNormals(),f}function Rg(){let i=[2.2,2.6],t=360,e=[],n=[];for(let l=0;l<=t;l++){let u=-Math.PI+l/t*2*Math.PI,d=Eo(u,os,[0,0]);cu(d,os,i)||e.push(d)}for(let l=0;l<=t;l++){let u=-Math.PI+l/t*2*Math.PI,d=Eo(u,os,i);cu(d,os,[0,0])&&n.push(d)}let s=l=>{for(let u=1;u<l.length;u++)if(Math.hypot(l[u][0]-l[u-1][0],l[u][1]-l[u-1][1])>6)return l.slice(u).concat(l.slice(0,u));return l},r=s(e),a=s(n).reverse(),o=new Fe(r.concat(a).map(l=>new ht(l[0],l[1]))),c=new Zn(o);return c.deleteAttribute("uv"),c}function Ig(i){let e=4.7627999999999995,n=[],s=[],r=[],a=(u,d,h,f,g)=>{let _=d[0]-u[0],p=d[1]-u[1],m=h[0]-u[0],M=h[1]-u[1],y=_*M-p*m>=0?[u,d,h]:[u,h,d];for(let b of y)n.push(b[0],b[1],b[2]),s.push(f.r,f.g,f.b),r.push(g?1:0)};for(let u of i){let d=(u.userData.style.fill||"").toUpperCase()==="#0CCDDF",h=u.subPaths[0].getPoints().map(g=>[g.x,g.y,Math.hypot(g.x,g.y)<8?e:0]),f=[];for(let g of h)(!f.length||Math.hypot(g[0]-f[f.length-1][0],g[1]-f[f.length-1][1])>.001)&&f.push(g);f.length>3&&Math.hypot(f[0][0]-f[f.length-1][0],f[0][1]-f[f.length-1][1])<.001&&f.pop();for(let g=1;g+1<f.length;g++)a(f[0],f[g],f[g+1],u.color,d)}let o=ze(Ie.tealDeep),c=[0,0,-7.5];for(let u=0;u<6;u++){let d=(-90+60*u)*nn,h=(-90+60*(u+1))*nn,f=[11.34*Math.cos(d),11.34*Math.sin(d),0],g=[11.34*Math.cos(h),11.34*Math.sin(h),0],_=g[0]-f[0],p=g[1]-f[1],m=c[0]-f[0],M=c[1]-f[1],y=_*M-p*m<0?[f,g,c]:[f,c,g];for(let b of y)n.push(b[0],b[1],b[2]),s.push(o.r,o.g,o.b),r.push(0)}let l=new he;return l.setAttribute("position",new Yt(n,3)),l.setAttribute("color",new Yt(s,3)),l.setAttribute("table",new Yt(r,1)),l.computeVertexNormals(),l}function Pg(){let i=[];for(let n=0;n<6;n++){let s=document.createElement("canvas");s.width=s.height=32;let r=s.getContext("2d"),a=r.createLinearGradient(0,0,0,32);a.addColorStop(0,"#1C3A2E"),a.addColorStop(1,"#07110D"),r.fillStyle=a,r.fillRect(0,0,32,32),(n===0||n===4)&&(r.fillStyle="#F3F1E9",r.fillRect(32*.3,32*.22,32*.4,32*.14)),n===2&&(r.fillStyle="#DFF9FB",r.fillRect(32*.25,32*.4,32*.5,32*.12)),n===3&&(r.fillStyle="#0E747C",r.fillRect(0,32*.45,32,32*.2)),i.push(s)}let e=new fi(i);return e.colorSpace=Me,e.minFilter=ge,e.magFilter=ge,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Lg="attribute float table; varying vec3 vC, vN, vW; varying float vT; void main(){ vC = color; vT = table; vN = normalize((modelMatrix * vec4(normal, 0.0)).xyz); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",Dg=`uniform samplerCube envMap; uniform vec3 uCore, uDeep, uSpec, uLightDir; uniform float uLit, uEmis, uWhite; varying vec3 vC, vN, vW; varying float vT;
void main(){ vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); float ndv = max(dot(N, V), 0.0); float fres = pow(1.0 - ndv, 3.0);
  vec3 R = refract(-V, N, 1.0 / 1.55); vec3 env = textureCube(envMap, R).rgb; float ndl = max(dot(N, uLightDir), 0.0);
  vec3 tableLit = mix(uDeep, uCore, 0.4 + 0.6 * ndl) + env * 0.22 + fres * uSpec * 0.35;
  vec3 facetLit = vC * (1.0 + 0.6 * uLit) + env * 0.10 * uLit + fres * uSpec * 0.15 * uLit;
  vec3 col = mix(mix(vC, facetLit, uLit), mix(vC, tableLit, uLit), vT);
  col = col * (1.0 + 0.55 * uEmis) + vC * 0.25 * uEmis; col = mix(col, uSpec, uWhite * 0.92);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Ng=`.eye3d-grain{position:absolute;inset:0;overflow:hidden;pointer-events:none;mix-blend-mode:overlay}
.eye3d-grain>i{position:absolute;inset:-192px;display:block;background-size:192px 192px;background-repeat:repeat;will-change:transform;animation:eye3d-grain 1s steps(1,end) infinite}
@keyframes eye3d-grain{0%{transform:translate(0,0)}10%{transform:translate(-37px,71px)}20%{transform:translate(113px,-23px)}30%{transform:translate(-91px,-137px)}40%{transform:translate(53px,101px)}50%{transform:translate(-151px,17px)}60%{transform:translate(29px,-83px)}70%{transform:translate(-67px,131px)}80%{transform:translate(139px,43px)}90%{transform:translate(-11px,-59px)}100%{transform:translate(0,0)}}
@media (prefers-reduced-motion: reduce){.eye3d-grain>i{animation:none}}`,rc=class{constructor(t,e={}){if(t.dataset&&t.dataset.eye3d==="retired"){let a=t.cloneNode(!1);a.removeAttribute("data-eye3d"),a.removeAttribute("data-engine"),a.style.display="",t.replaceWith(a),t=a}this.canvas=t,this.opts=e,this.rest=e.rest==="mark"?"mark":"shut",this.pRest=this.rest==="mark"?Ve.open:0,this.smooth=e.smoothing!==!1,this.closeIntro=!!e.closeIntro,this.coarse=!!(window.matchMedia&&matchMedia("(pointer:coarse)").matches),this.off=[0,0],this.restAt=0,this.p=this.pRest,this.pShown=this.pRest,this.pointer=[0,0],this.ptr=[0,0],this.t=0,this.idle=0,this.fixedTime=null,this.paused=!1,this.hidden=!!document.hidden,this.offscreen=!1,this.destroyed=!1,this.built=!1,this.drawn=!1,this.last=0,this.lastDraw=0,this.raf=0,this.timer=0,this.introT=0,this.atRest=!0,this.sweeping=!1,this.breathing=!1,this.fadeShown="";let n={alpha:!1,depth:!0,stencil:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!e.allowSoftware},s=t.getContext("webgl2",n);if(!s){let a=new Error("WebGL2 context refused (software GL or WebGL off)");throw a.code="software-gl",a}let r=s.getExtension("WEBGL_debug_renderer_info");if(this.glName=String(r&&s.getParameter(r.UNMASKED_RENDERER_WEBGL)||s.getParameter(s.RENDERER)||""),!e.allowSoftware&&Sg.test(this.glName)){let a=s.getExtension("WEBGL_lose_context");a&&a.loseContext();let o=new Error("software GL: "+this.glName);throw o.code="software-gl",o}this.renderer=new vo({canvas:t,context:s,antialias:!0,alpha:!1,stencil:!0,powerPreference:"low-power"}),this.renderer.setClearColor(Ie.void,1),this.renderer.toneMapping=$e,this.renderer.outputColorSpace=Me,this.scene=new Ts,this.scene.fog=new ws(Ie.void,1e5,2e5),this.camera=new Ee(bo,1,.5,4e3),this.scene.add(this.camera),this.onLost=a=>{a.preventDefault();let o=this.opts.onFallback;this.destroy({loseContext:!1,reason:"contextlost"}),o&&o("contextlost")},t.addEventListener("webglcontextlost",this.onLost,!1),this.onVis=()=>{this.hidden=document.hidden,this.kick()},document.addEventListener("visibilitychange",this.onVis),"IntersectionObserver"in window&&(this.io=new IntersectionObserver(a=>{this.offscreen=a[0]?!a[0].isIntersecting:!1,this.kick()},{threshold:0}),this.io.observe(t)),this.onResize=()=>this.resize(),window.addEventListener("resize",this.onResize),e.grain!==!1&&this.makeGrain(),this.ready=new Promise(a=>{this._readyRes=a}),this._buildAsync()}async _buildAsync(){try{let t=Ag();if(this.buildScene(t),await sc(),this.destroyed||(this.buildBlades(t,0,3),await sc(),this.destroyed)||(this.buildBlades(t,3,6),this.buildDecals(t),await sc(),this.destroyed)||(this.buildGemAndField(t),this.resize(),await this.renderer.compileAsync(this.scene,this.camera),this.destroyed))return;this.built=!0,this.pShown=this.p,this.kick()}catch(t){let e=this.opts.onFallback;if(this.destroy({reason:"build"}),e&&e("build: "+(t&&t.message)),this.opts.debug)throw t}}buildScene(t){let e=this.scene;this.stone=new mi({vertexColors:!0,flatShading:!0,shininess:70,specular:ze(1842204)}),this.key=new Js(16777215,Math.PI*.75),e.add(this.key),e.add(this.key.target),this.fill=new $s(16777215,Math.PI*.55),e.add(this.fill),this.lamp=new Zs(15987177,0,0,2),this.lamp.position.set(0,0,2e3),e.add(this.lamp),this.eye=new je,e.add(this.eye);let n=new je;n.scale.set(1,-1,1),this.eye.add(n),this.svg=n;let s=g=>g.map(_=>_.color),r=hu(ou,lu,s(t.rimOut.slice(0,5)),s(t.rimOut.slice(5,10)),2.4,2,!0,!1),a=hu(lu,os,s(t.rimIn.slice(0,5)),s(t.rimIn.slice(5,10)),1.8,1.4,!1,!0);n.add(new le(r,this.stone)),n.add(new le(a,this.stone));let o=new Fe,c=120;for(let g=0;g<c;g++){let _=Eo(-Math.PI+g/c*2*Math.PI,ou-.2,[0,0]);g?o.lineTo(_[0],_[1]):o.moveTo(_[0],_[1])}let l=new le(new Zn(o),new Qe({colorWrite:!1,depthWrite:!1,depthTest:!1,stencilWrite:!0,stencilRef:64,stencilWriteMask:64,stencilFunc:Ms,stencilZPass:uo}));l.renderOrder=-5,l.position.z=1,n.add(l);let u=new Fe,d=120;for(let g=0;g<d;g++){let _=Eo(-Math.PI+g/d*2*Math.PI,os+.3,[0,0]);g?u.lineTo(_[0],_[1]):u.moveTo(_[0],_[1])}let h=new le(new Zn(u),new Qe({color:Ie.void}));h.position.z=-4.2,n.add(h),this.plate=h;let f=new le(new Ls(15.5,6),new Qe({color:Ie.socket}));f.rotation.z=90*nn,f.position.z=-3.9,n.add(f),this.socket=f,this.blades=[],this.shadows=[],this.knives=[],this.bladeGroups=[];for(let g=0;g<6;g++){let[_,p,m]=vg[g],M=new je;M.position.set(_,p,.15*(5-g)),n.add(M),this.bladeGroups.push(M),this.blades.push({grp:M,a:m,px:_,py:p})}}buildBlades(t,e,n){for(let s=e;s<n;s++){let r=this.blades[s],a=ru(t.blades[s].map(l=>wg(l,1)),!1),o=this.stone.clone();o.stencilWrite=!0,o.stencilRef=64|s+1,o.stencilFunc=fo,o.stencilFuncMask=64,o.stencilWriteMask=255,o.stencilZPass=uo;let c=new le(a,o);c.position.set(-r.px,-r.py,0),r.grp.add(c),r.mat=o}}buildDecals(t){let e=this.svg,n=r=>new Qe({color:0,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1,stencilWrite:!0,stencilWriteMask:0,stencilFunc:fo,stencilRef:64|r,stencilFuncMask:255});for(let r=0;r<6;r++){let a=this.blades[r],o=new le(Tg(t.shadows[r]),n((r+1)%6+1));o.position.set(-a.px,-a.py,1.7),o.renderOrder=20,a.grp.add(o),this.shadows.push(o)}for(let r of t.knives){let a=this.blades[r.blade],o=n(r.blade+1);o.transparent=!1,o.opacity=1,o.color.set(r.path.userData.style.stroke);let c=new le(Cg(r.path),o);c.position.set(-a.px,-a.py,1.8),c.renderOrder=22,a.grp.add(c),this.knives.push(c)}let s=new le(Rg(),new Qe({color:0,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,stencilWrite:!0,stencilWriteMask:0,stencilFunc:Nl,stencilRef:0,stencilFuncMask:63}));s.position.z=1.75,s.renderOrder=21,e.add(s),this.lip=s}buildGemAndField(t){let e=this.scene,n=this.svg;this.env=Pg(),this.gemMat=new Le({vertexShader:Lg,fragmentShader:Dg,vertexColors:!0,uniforms:{envMap:{value:this.env},uCore:{value:ze(Ie.cyan)},uDeep:{value:ze(Ie.teal)},uSpec:{value:ze(Ie.spec)},uLightDir:{value:new V(0,0,1)},uLit:{value:0},uEmis:{value:0},uWhite:{value:0}}}),this.gem=new le(Ig(t.gem),this.gemMat),this.gem.position.z=-3.6,n.add(this.gem),this.arc=new le(new he,new Qe({color:Ie.forestLine,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1})),this.arc.visible=!1,this.arc.position.z=2,this.arc.renderOrder=30,this.eye.add(this.arc),this.arcGeom(),this.N_RING=36,this.RING_SP=16;let s=new Ws(15.5,1,4,6);s.rotateZ(90*nn),this.rings=new Xi(s,new mi({flatShading:!0,shininess:30,specular:ze(2236962)}),this.N_RING);let r=ze(Ie.stone),a=ze(Ie.forest),o=new ie;for(let h=0;h<this.N_RING;h++)this.rings.setColorAt(h,h%3?a:r),o.makeTranslation(0,0,-6-h*this.RING_SP),this.rings.setMatrixAt(h,o);this._ringRot=[new Ue,new Ue().setFromAxisAngle(new V(0,0,1),30*nn)],this.rings.instanceColor.needsUpdate=!0,this.rings.visible=!1,this.rings.frustumCulled=!1,e.add(this.rings);let c=new Vs(1,0);c.scale(1,.62,.38),c.deleteAttribute("uv");let l=new mi({flatShading:!0,shininess:40,specular:ze(1710618)}),u=[ze(Ie.surfaceVoid),ze(Ie.surfaceVoid),ze(Ie.forest),ze(Ie.forestLine),ze(Ie.forest)],d=bg(20261102);this.layers=[{n:9,size:[5,9],z:[30,80],ring:[.75,.98],par:9},{n:28,size:[2.2,4],z:[-70,-25],ring:[.45,1],par:4},{n:110,size:[.6,1.4],z:[-230,-130],ring:[0,1],par:1.5}].map(h=>{let f=new Xi(c,l,h.n);f.frustumCulled=!1;let g=[];for(let p=0;p<h.n;p++){let m=d()*Math.PI*2,M=h.ring[0]+(h.ring[1]-h.ring[0])*Math.sqrt(d());g.push({nx:Math.cos(m)*M,ny:Math.sin(m)*M,z:h.z[0]+(h.z[1]-h.z[0])*d(),s:h.size[0]+(h.size[1]-h.size[0])*d(),rx:d()*6.28,ry:d()*6.28,rz:d()*6.28,spin:(d()-.5)*.25,ph:d()*6.28,f:.08+d()*.12}),f.setColorAt(p,u[Math.floor(d()*u.length)])}f.instanceColor.needsUpdate=!0;let _=new je;return _.add(f),e.add(_),{...h,mesh:f,grp:_,items:g}}),this._m=new ie,this._q=new Ue,this._e=new Ye,this._v=new V,this._s=new V}makeGrain(){let t=document.createElement("canvas");t.width=t.height=192;let e=t.getContext("2d"),n=e.createImageData(192,192);for(let a=0;a<n.data.length;a+=4){let o=128+(Math.random()*2-1)*120|0;n.data[a]=n.data[a+1]=n.data[a+2]=o,n.data[a+3]=255}if(e.putImageData(n,0,0),!document.getElementById("eye3d-grain-css")){let a=document.createElement("style");a.id="eye3d-grain-css",a.textContent=Ng,document.head.appendChild(a)}let s=document.createElement("div");s.className="eye3d-grain",s.style.opacity=String(this.opts.grainOpacity||.085);let r=document.createElement("i");r.style.backgroundImage="url("+t.toDataURL()+")",s.appendChild(r),(this.opts.grainParent||this.canvas.parentNode).appendChild(s),this.grain=s}maskGrain(t,e,n){let s=n?n.cx:t/2,r=n?n.cy:e/2,a=this.eyePx*.5+8,o=this.eyePx*.3+8,c="radial-gradient(ellipse "+a.toFixed(0)+"px "+o.toFixed(0)+"px at "+s.toFixed(0)+"px "+r.toFixed(0)+"px, transparent 97%, #000 100%)";this.grain.style.webkitMaskImage=c,this.grain.style.maskImage=c}arcGeom(){let t=this.eyePx?100/this.eyePx:.2,e=Math.max(.05,.75*t),n=new Hs(78-e,78+e,48,1,0,64*nn);n.deleteAttribute("uv"),this.arc.geometry&&this.arc.geometry.dispose(),this.arc.geometry=n}setProgress(t){let e=lr(+t||0);this.p=this.rest==="mark"?Ve.open+e*(1-Ve.open):e,(this.fixedTime!==null||!this.smooth)&&(this.pShown=this.p),this.kick()}setTimeline(t){this.p=lr(+t||0),(this.fixedTime!==null||!this.smooth)&&(this.pShown=this.p),this.kick()}setPointer(t,e){this.pointer[0]=Math.max(-1,Math.min(1,+t||0)),this.pointer[1]=Math.max(-1,Math.min(1,+e||0)),this.kick()}setTime(t){this.fixedTime=t,this.t=t,this.pShown=this.p,this.ptr[0]=this.pointer[0],this.ptr[1]=this.pointer[1],this.introT=9,this.kick()}setIdle(t){this.idle=t,this.kick()}pause(){this.paused=!0,this.unschedule()}resume(){this.paused=!1,this.kick()}resize(){let t=this.canvas,e=t.clientWidth||t.parentNode.clientWidth||1,n=t.clientHeight||t.parentNode.clientHeight||1,s=this.opts.maxDpr||(this.coarse||e<768?1:1.5);this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,s)),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix();let r=this.opts.fit?this.opts.fit(e,n):null,a=r&&r.w>0?r.w/e:this.opts.eyeFraction||(e/n<=1?.78:.36),o=100/a,c=o/this.camera.aspect;!r&&c<60/.62&&(c=60/.62,o=c*this.camera.aspect),this.D=c/(2*Math.tan(bo/2*nn)),this.halfH0=c/2,this.eyePx=a*e;let l=c/n;if(this.off=r?[-(r.cx-e/2)*l,(r.cy-n/2)*l]:[0,0],this.grain&&this.maskGrain(e,n,r),this.arc&&this.arcGeom(),this.layers)for(let u of this.layers)for(let d=0;d<u.items.length;d++){let h=u.items[d],f=(this.D-h.z)*Math.tan(bo/2*nn);h.wx=h.nx*f*this.camera.aspect,h.wy=h.ny*f}this.kick()}destroy(t={}){if(this.destroyed)return;this.destroyed=!0,this.built=!1,this.unschedule();let e=t.loseContext!==!1,n=t.reason||"destroy";if(this.canvas.removeEventListener("webglcontextlost",this.onLost),document.removeEventListener("visibilitychange",this.onVis),window.removeEventListener("resize",this.onResize),this.io&&this.io.disconnect(),this.grain&&this.grain.parentNode&&this.grain.parentNode.removeChild(this.grain),this.scene.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>r.dispose())}),this.env&&this.env.dispose(),this.renderer.dispose(),e||n==="contextlost"){if(e)try{let s=this.renderer.getContext();s&&!s.isContextLost()&&this.renderer.forceContextLoss()}catch{}this.canvas.style.display="none",this.canvas.dataset&&(this.canvas.dataset.eye3d="retired")}this._readyRes&&(this._readyRes(!1),this._readyRes=null),this.opts.onDestroy&&this.opts.onDestroy(n)}bench(t=300,e=!1){return new Promise(n=>{let s=[],r=this.renderer.getContext(),a=new Uint8Array(4),o=c=>{let l=performance.now();if(this.frame(c,!0),e&&(r.finish(),r.readPixels(0,0,1,1,r.RGBA,r.UNSIGNED_BYTE,a)),s.push(performance.now()-l),s.length<t)requestAnimationFrame(o);else{s.sort((d,h)=>d-h);let u=s.reduce((d,h)=>d+h,0)/s.length;n({frames:t,sync:e,mean:+u.toFixed(3),p50:+s[t>>1].toFixed(3),p95:+s[Math.floor(t*.95)].toFixed(3),max:+s[t-1].toFixed(3),drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,dpr:this.renderer.getPixelRatio()})}};requestAnimationFrame(o)})}unschedule(){this.raf&&(cancelAnimationFrame(this.raf),this.raf=0),this.timer&&(clearTimeout(this.timer),this.timer=0)}kick(){!this.built||this.destroyed||this.paused||this.hidden||this.offscreen||(this.timer&&(clearTimeout(this.timer),this.timer=0),this.raf||(this.raf=requestAnimationFrame(t=>this.frame(t))))}frame(t,e){if(this.raf=0,this.destroyed||!this.built)return;if(!e&&this.lastDraw&&t-this.lastDraw<Mg){this.raf=requestAnimationFrame(r=>this.frame(r));return}let n=this.fixedTime!==null?0:Math.min(.1,this.last?(t-this.last)/1e3:.016);if(this.last=t,this.lastDraw=t,this.fixedTime===null){this.t+=n,this.introT+=n;let r=1-Math.exp(-n*10);this.pShown+=(this.p-this.pShown)*r,Math.abs(this.p-this.pShown)<1e-4&&(this.pShown=this.p);let a=1-Math.exp(-n*6);for(let o=0;o<2;o++)this.ptr[o]+=(this.pointer[o]-this.ptr[o])*a,Math.abs(this.pointer[o]-this.ptr[o])<.001&&(this.ptr[o]=this.pointer[o]);this.atRest=this.p===this.pRest&&Math.abs(this.pShown-this.pRest)<.002,this.atRest?(this.restAt||(this.restAt=t-this.idle*1e3),this.idle=(t-this.restAt)/1e3):(this.restAt=0,this.idle=0)}if(!e&&this.drawn&&this.p>=1&&this.pShown>=1){this.fadeShown!=="0.000"&&(this.fadeShown="0.000",this.canvas.style.opacity="0");return}if(this.update(this.pShown,this.t,n),this.renderer.render(this.scene,this.camera),this.drawn||(this.drawn=!0,this.opts.onFirstFrame&&this.opts.onFirstFrame(this),this._readyRes&&(this._readyRes(!0),this._readyRes=null)),e||this.paused||this.hidden||this.offscreen||this.fixedTime!==null)return;if(this.p!==this.pShown||this.pointer[0]!==this.ptr[0]||this.pointer[1]!==this.ptr[1]||this.sweeping||this.introT<1)this.raf=requestAnimationFrame(r=>this.frame(r));else if(this.breathing)this.timer=setTimeout(()=>{this.timer=0,this.kick()},40);else if(this.atRest){let r=this.idle%9,a=(r<3.2?3.2-r:9-r+3.2)*1e3+30;this.timer=setTimeout(()=>{this.timer=0,this.kick()},a)}}update(t,e,n){let s=this.camera,r=this.D,a=this.idle%9,o=ke(a,3.2,4.8),c=this.atRest&&o>0&&o<1;this.sweeping=c;let l=Math.atan2(rs[1],rs[0])+(c?20*nn*Math.sin(as(o)*Math.PI*2):0),u=Math.hypot(rs[0],rs[1]);this.key.position.set(Math.cos(l)*u*300,Math.sin(l)*u*300,rs[2]*300),this.key.target.position.set(0,0,0),this.gemMat.uniforms.uLightDir.value.set(Math.cos(l)*u,-Math.sin(l)*u,rs[2]).normalize();let d=as(ke(t,0,Ve.open)),h=this.closeIntro?as(lr(this.introT/.9)):1,f=(1-d)*h,g=1+.1*f;for(let k of this.blades)k.grp.rotation.z=k.a*f*nn,k.grp.scale.set(g,g,1);let _=this.gemMat.uniforms,p=ke(t,Ve.open,Ve.light),m=ke(t,Ve.light,Ve.hold),M=ke(t,Ve.hold,Ve.white);this.breathing=m>0&&m<1,_.uLit.value=p,_.uEmis.value=Math.min(1,p*.8+(this.breathing?.12*Math.sin(e*Math.PI*2/2.4)+.12:0)+M*.3),_.uWhite.value=M;let y=ke(t,.05,.16);this.gem.visible=y>0;let b=(.3+.7*as(y))*(1+.12*M);this.gem.scale.set(b,b,b),this.gem.position.z=-3.6-6*(1-y);let R=ke(t,Ve.white,Ve.dive),C=r;if(R>0){let k=ke(R,0,.3),U=ke(R,.3,1);C=k<1?r+(6-r)*(k*k):6-900*Math.pow(U,1.5)}let D=1-ke(R,0,.3),x=this.off[0]*D,A=this.off[1]*D;s.position.set(x,A,C),s.lookAt(x,A,C-10);let F=bo+33*ke(R,0,.3);F!==s.fov&&(s.fov=F,s.updateProjectionMatrix());let P=C<-4;if(this.eye.visible=!P,this.rings.visible=t>.56,this.lamp.position.set(0,0,C-1.5),this.lamp.intensity=900*ke(R,.25,.4),this.scene.fog.near=R>.28?10:1e5,this.scene.fog.far=R>.28?300:2e5,this.rings.visible){let k=this.N_RING*this.RING_SP,U=this._m,H=this._s.set(1,1,1);for(let at=0;at<this.N_RING;at++){let dt=-6-at*this.RING_SP;dt>C+4&&(dt-=k*Math.ceil((dt-(C+4))/k)),this._v.set(0,0,dt),U.compose(this._v,this._ringRot[at%2],H),this.rings.setMatrixAt(at,U)}this.rings.instanceMatrix.needsUpdate=!0}let N=6*nn*(1-ke(R,0,.3));this.eye.rotation.y=this.ptr[0]*N,this.eye.rotation.x=this.ptr[1]*N;let q=1+8*R*R,J=as(lr(this.introT/.6));for(let k of this.layers){k.grp.position.set(this.ptr[0]*k.par+x,-this.ptr[1]*k.par+A,0),k.grp.scale.set(q,q,1);for(let U=0;U<k.items.length;U++){let H=k.items[U];this._v.set(H.wx+Math.sin(e*H.f+H.ph)*1.2,H.wy+Math.cos(e*H.f*.8+H.ph)*1.2,H.z),this._e.set(H.rx+e*H.spin,H.ry+e*H.spin*.7,H.rz),this._q.setFromEuler(this._e),this._s.set(H.s*J,H.s*J,H.s*J),this._m.compose(this._v,this._q,this._s),k.mesh.setMatrixAt(U,this._m)}k.mesh.instanceMatrix.needsUpdate=!0}if(this.arc.visible=c,c){let k=as(o)*Math.PI*2;this.arc.rotation.z=-Math.PI/2-k,this.arc.material.opacity=Math.min(1,o/.15,(1-o)/.15)*.9}let W=(1-ke(t,Ve.dive,1)).toFixed(3);W!==this.fadeShown&&(this.fadeShown=W,this.canvas.style.opacity=W)}},uu={supported(){try{return!(typeof window=="undefined"||!window.WebGL2RenderingContext||!window.requestAnimationFrame||window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)}catch{return!1}},init(i,t){t=t||{};try{return new rc(i,t)}catch(e){if(t.onFallback&&t.onFallback(e&&e.code?e.code:"init: "+(e&&e.message)),t.debug)throw e;return null}},T:Ve,version:"0.3.1",three:"183"};typeof window!="undefined"&&(window.Eye3D=uu);var Hy=uu;})();
