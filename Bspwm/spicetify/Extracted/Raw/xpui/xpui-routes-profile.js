"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9480],{4582:(e,t,a)=>{a.d(t,{M:()=>c});var i=a(8048),r=a(32572),s=a(14627),o=a(53044),n=a(13445);const l="profile-editImage-imageContainer",u="profile-editImage-editImageButtonContainer";var d=a(86070);const c=function({onClick:e,name:t,images:a,canEdit:c,placeholderType:m,shape:g=r.u.SQUARE,dragUri:p=""}){const[h,f]=(0,o.P)(a),v=(0,n.b)(h,f)===n.g.loaded,{draggable:x,onDragStart:b}=(0,s.P)({itemUris:[p],dragLabelText:t});return(0,d.jsxs)("div",{className:l,"data-testid":`${m}-image`,draggable:x&&!!p,onDragStart:b,children:[(0,d.jsx)(r.b,{loading:"eager",name:t,images:a,placeholderType:m,shape:g}),c&&(0,d.jsx)("div",{className:u,children:(0,d.jsx)(i.a,{overlay:v,onClick:e,rounded:g===r.u.CIRCLE})})]})}},8048:(e,t,a)=>{a.d(t,{a:()=>h});var i=a(97500),r=a.n(i),s=a(17652),o=a(12783),n=a(11808);const l="main-editImage-buttonContainer",u="main-editImageButton-image",d="main-editImageButton-overlay",c="main-editImageButton-rounded",m="main-editImageButton-icon",g="main-editImageButton-copy";var p=a(86070);const h=function({overlay:e=!1,rounded:t=!1,onClick:a}){return(0,p.jsx)("div",{className:l,children:(0,p.jsx)("button",{"data-testid":"edit-image-button",className:r()(u,{[c]:t,[d]:e}),"aria-haspopup":"true",onClick:a,type:"button",children:(0,p.jsxs)("div",{className:r()(m,"icon"),children:[(0,p.jsx)(s.G,{size:"xlarge","aria-hidden":"true"}),(0,p.jsx)(o.E,{variant:"bodyMedium",className:g,children:n.Ru.get("choose_photo")})]})})})}},69626:(e,t,a)=>{a.d(t,{u:()=>l,i:()=>n});var i=a(30758);const r="main-imagePicker-fileInput";var s=a(86070);const o={accept:"image/.jpg, image/.jpeg, image/.png"};let n=function(e){return e.FILE_TOO_BIG="FILE_TOO_BIG",e.IMAGE_TOO_SMALL="IMAGE_TOO_SMALL",e.IMAGE_TOO_BIG="IMAGE_TOO_BIG",e.IMAGE_TYPE_NOT_SUPPORTED="IMAGE_TYPE_NOT_SUPPORTED",e}({});const l=function({onChange:e,onError:t,isOpen:a=!1,minImageWidth:l=0,minImageHeight:u=0,maxImageWidth:d=1e4,maxImageHeight:c=1e4,maxFileSizeMB:m=1/0,...g}){const p=i.useRef(null),h={...o,...g};(0,i.useEffect)((()=>{p.current&&a&&p.current.click()}),[p,a]);const f=1048576*m;return(0,s.jsx)("input",{...h,type:"file","data-testid":"image-file-picker",ref:p,className:r,onChange:async function(a){const i=a.target,[r]=Array.from(i.files||[]),s=await async function(e){const t=await function(e){return new Promise(((t,a)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>{t(i.result?.toString()??"")},i.onerror=e=>a(e)}))}(e),[a,i]=await function(e){return new Promise(((t,a)=>{const i=new Image;i.onload=()=>{const{width:e,height:a}=i;t([e,a])},i.src=e,i.onerror=e=>a(e)}))}(t);return{imageFile:e,imageDataUrl:t,imageWidth:a,imageHeight:i}}(r);try{await async function(e){if(!["image/jpg","image/jpeg","image/png"].includes(e.imageFile.type))throw n.IMAGE_TYPE_NOT_SUPPORTED;if(e.imageWidth<l||e.imageHeight<u)throw n.IMAGE_TOO_SMALL;if(e.imageWidth>d||e.imageHeight>c)throw n.IMAGE_TOO_BIG;if(e.imageFile.size>f)throw n.FILE_TOO_BIG}(s),e(s)}catch(e){if("string"!=typeof e||!Object.values(n).includes(e))throw e;t(e)}}})}},65277:(e,t,a)=>{a.d(t,{z:()=>m});var i=a(97500),r=a.n(i),s=a(12783),o=a(68637);const n="pIZVZOfjnJGth1BcoA1E",l="ZBBTIITnUdwh05dCI0tm",u="sz8Nwj2lvhOZxDwYWRQr",d="jjPsW7vuG9xH9qhEGL3I";var c=a(86070);const m=({message:e,isErrorMessage:t=!1})=>e?(0,c.jsx)("div",{role:"alert",children:(0,c.jsx)("div",{className:r()(n,{[l]:t}),children:(0,c.jsxs)(s.E,{as:"p",variant:"marginal",className:u,children:[(0,c.jsx)(o.b,{size:"small",className:d,"aria-hidden":"true"}),e]})})}):null},67307:(e,t,a)=>{a.d(t,{p:()=>r});var i=a(30758);function r(){const[e,t]=(0,i.useState)(!1);return[e,(0,i.useCallback)((()=>{t(!0),setTimeout((()=>t(!1)),0)}),[t])]}},64617:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ua});var i=a(30758),r=a(9183),s=a(5800),o=a(61544),n=a(32046),l=a(21953),u=a(11808),d=a(24633),c=a(83028),m=a(57734),g=a(46361),p=a(79973),h=a(86070);const f=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.SR,[t]),s=a?.profiles;return i?(0,h.jsx)(c.A,{hasError:null!==r,errorMessage:u.Ru.get("error.not_found.title.page")}):(0,h.jsx)(m.$,{title:u.Ru.get("followers"),total:s?.length,showAll:!0,fullPage:!0,rowGap:l.lT,children:s?.map(((e,t)=>(0,h.jsx)(d.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},v=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.mH,[t]),s=a?.profiles;return i?(0,h.jsx)(c.A,{hasError:null!==r,errorMessage:u.Ru.get("error.not_found.title.page")}):(0,h.jsx)(m.$,{title:u.Ru.get("following"),total:s?.length,showAll:!0,fullPage:!0,rowGap:l.lT,children:s?.map(((e,t)=>(0,h.jsx)(d.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};var x=a(69898),b=a(41978),y=a(42551),j=a(81987),k=a(17613),_=a(13713),I=a(33779),R=a(71588),T=a(91584),w=a(31685),N=a(4582),P=a(82442),A=a(64572),E=a(74793),O=a(59116),S=a(21752),C=a(32572),U=a(51271),M=a(79056),L=a(55194),D=a(24604),F=a(1019),B=a(97500),H=a.n(B),G=a(12783),W=a(43178),J=a(88311),z=a(43830),Q=a(67889),$=a(69626),Z=a(67307),q=a(65277),K=a(17652),V=a(53044),Y=a(13445);const X="profile-userEditDetails-image",ee="valcBm4lLe9qFBcg0sFY",te="tAIzXn8C9KriGwGuBfWg",ae="PsrXxenHUFXYM1ub1xWw",ie="U_VWfeeLWnDPhUTxCmrQ",re=function({onClickEdit:e,onClickRemove:t,name:a,images:i,canEdit:r}){const[s,o]=(0,V.P)(i),n=(0,Y.b)(s,o)===Y.g.loaded;return(0,h.jsxs)("div",{className:X,children:[(0,h.jsx)(C.b,{loading:"eager",name:a,images:i,placeholderType:"user",shape:C.u.CIRCLE}),r&&(0,h.jsxs)("div",{className:H()(ee,{[ae]:n}),children:[(0,h.jsx)("button",{className:te,"aria-haspopup":"true",onClick:e,type:"button",children:(0,h.jsx)(G.E,{variant:"bodyMedium",children:u.Ru.get("user.edit-details.choose-photo")})}),(0,h.jsx)("div",{className:H()(ie,"icon"),children:(0,h.jsx)(K.G,{size:"xlarge","aria-hidden":!0})}),(0,h.jsx)("button",{className:te,onClick:t,type:"button",children:(0,h.jsx)(G.E,{variant:"bodyMedium",children:u.Ru.get("user.edit-details.remove-photo")})})]})]})};var se=a(24848);const oe={paths:""},ne={encode(e,t=se.Writer.create()){for(const a of e.paths)t.uint32(10).string(a);return t},decode(e,t){const a=e instanceof Uint8Array?new se.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...oe};for(r.paths=[];a.pos<i;){const e=a.uint32();if(e>>>3==1)r.paths.push(a.string());else a.skipType(7&e)}return r},fromJSON(e){const t={...oe};if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(String(a));return t},fromPartial(e){const t={...oe};if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(a);return t},toJSON(e){const t={};return e.paths?t.paths=e.paths.map((e=>e)):t.paths=[],t}};a(28360);var le=a(21364),ue=a(84686).hp;const de={value:0},ce={value:!1},me={value:""};const ge={encode:(e,t=se.Writer.create())=>(t.uint32(8).int32(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new se.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...de};for(;a.pos<i;){const e=a.uint32();if(e>>>3==1)r.value=a.int32();else a.skipType(7&e)}return r},fromJSON(e){const t={...de};return void 0!==e.value&&null!==e.value?t.value=Number(e.value):t.value=0,t},fromPartial(e){const t={...de};return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=0,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},pe={encode:(e,t=se.Writer.create())=>(t.uint32(8).bool(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new se.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...ce};for(;a.pos<i;){const e=a.uint32();if(e>>>3==1)r.value=a.bool();else a.skipType(7&e)}return r},fromJSON(e){const t={...ce};return void 0!==e.value&&null!==e.value?t.value=Boolean(e.value):t.value=!1,t},fromPartial(e){const t={...ce};return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=!1,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},he={encode:(e,t=se.Writer.create())=>(t.uint32(10).string(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new se.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...me};for(;a.pos<i;){const e=a.uint32();if(e>>>3==1)r.value=a.string();else a.skipType(7&e)}return r},fromJSON(e){const t={...me};return void 0!==e.value&&null!==e.value?t.value=String(e.value):t.value="",t},fromPartial(e){const t={...me};return void 0!==e.value&&null!==e.value?t.value=e.value:t.value="",t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}};se.util.Long!==le.A&&(se.util.Long=le.A,(0,se.configure)());const fe=globalThis;fe.atob,fe.btoa;const ve={maxWidth:0,maxHeight:0,url:""},xe={},be={},ye={encode:(e,t=se.Writer.create())=>(t.uint32(8).int32(e.maxWidth),t.uint32(16).int32(e.maxHeight),t.uint32(26).string(e.url),t),decode(e,t){const a=e instanceof Uint8Array?new se.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...ve};for(;a.pos<i;){const e=a.uint32();switch(e>>>3){case 1:r.maxWidth=a.int32();break;case 2:r.maxHeight=a.int32();break;case 3:r.url=a.string();break;default:a.skipType(7&e)}}return r},fromJSON(e){const t={...ve};return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=Number(e.maxWidth):t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=Number(e.maxHeight):t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=String(e.url):t.url="",t},fromPartial(e){const t={...ve};return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=e.maxWidth:t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=e.maxHeight:t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=e.url:t.url="",t},toJSON(e){const t={};return void 0!==e.maxWidth&&(t.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(t.maxHeight=e.maxHeight),void 0!==e.url&&(t.url=e.url),t}},je={encode(e,t=se.Writer.create()){void 0!==e.username&&void 0!==e.username&&he.encode({value:e.username},t.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&he.encode({value:e.name},t.uint32(18).fork()).ldelim();for(const a of e.images)ye.encode(a,t.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&pe.encode({value:e.verified},t.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&pe.encode({value:e.editProfileDisabled},t.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&pe.encode({value:e.reportAbuseDisabled},t.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&pe.encode({value:e.abuseReportedName},t.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&pe.encode({value:e.abuseReportedImage},t.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&pe.encode({value:e.hasSpotifyName},t.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&pe.encode({value:e.hasSpotifyImage},t.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&ge.encode({value:e.color},t.uint32(90).fork()).ldelim(),t},decode(e,t){const a=e instanceof Uint8Array?new se.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...xe};for(r.images=[];a.pos<i;){const e=a.uint32();switch(e>>>3){case 1:r.username=he.decode(a,a.uint32()).value;break;case 2:r.name=he.decode(a,a.uint32()).value;break;case 3:r.images.push(ye.decode(a,a.uint32()));break;case 4:r.verified=pe.decode(a,a.uint32()).value;break;case 5:r.editProfileDisabled=pe.decode(a,a.uint32()).value;break;case 6:r.reportAbuseDisabled=pe.decode(a,a.uint32()).value;break;case 7:r.abuseReportedName=pe.decode(a,a.uint32()).value;break;case 8:r.abuseReportedImage=pe.decode(a,a.uint32()).value;break;case 9:r.hasSpotifyName=pe.decode(a,a.uint32()).value;break;case 10:r.hasSpotifyImage=pe.decode(a,a.uint32()).value;break;case 11:r.color=ge.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return r},fromJSON(e){const t={...xe};if(t.images=[],void 0!==e.username&&null!==e.username?t.username=String(e.username):t.username=void 0,void 0!==e.name&&null!==e.name?t.name=String(e.name):t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(ye.fromJSON(a));return void 0!==e.verified&&null!==e.verified?t.verified=Boolean(e.verified):t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=Boolean(e.editProfileDisabled):t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=Boolean(e.abuseReportedName):t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=Boolean(e.abuseReportedImage):t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=Boolean(e.hasSpotifyName):t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=Boolean(e.hasSpotifyImage):t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=Number(e.color):t.color=void 0,t},fromPartial(e){const t={...xe};if(t.images=[],void 0!==e.username&&null!==e.username?t.username=e.username:t.username=void 0,void 0!==e.name&&null!==e.name?t.name=e.name:t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(ye.fromPartial(a));return void 0!==e.verified&&null!==e.verified?t.verified=e.verified:t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=e.editProfileDisabled:t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=e.reportAbuseDisabled:t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=e.abuseReportedName:t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=e.abuseReportedImage:t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=e.hasSpotifyName:t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=e.hasSpotifyImage:t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=e.color:t.color=void 0,t},toJSON(e){const t={};return void 0!==e.username&&(t.username=e.username),void 0!==e.name&&(t.name=e.name),e.images?t.images=e.images.map((e=>e?ye.toJSON(e):void 0)):t.images=[],void 0!==e.verified&&(t.verified=e.verified),void 0!==e.editProfileDisabled&&(t.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(t.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(t.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(t.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(t.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(t.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(t.color=e.color),t}},ke={encode:(e,t=se.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&ne.encode(e.mask,t.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&je.encode(e.userProfile,t.uint32(18).fork()).ldelim(),t),decode(e,t){const a=e instanceof Uint8Array?new se.Reader(e):e;let i=void 0===t?a.len:a.pos+t;const r={...be};for(;a.pos<i;){const e=a.uint32();switch(e>>>3){case 1:r.mask=ne.decode(a,a.uint32());break;case 2:r.userProfile=je.decode(a,a.uint32());break;default:a.skipType(7&e)}}return r},fromJSON(e){const t={...be};return void 0!==e.mask&&null!==e.mask?t.mask=ne.fromJSON(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=je.fromJSON(e.userProfile):t.userProfile=void 0,t},fromPartial(e){const t={...be};return void 0!==e.mask&&null!==e.mask?t.mask=ne.fromPartial(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=je.fromPartial(e.userProfile):t.userProfile=void 0,t},toJSON(e){const t={};return void 0!==e.mask&&(t.mask=e.mask?ne.toJSON(e.mask):void 0),void 0!==e.userProfile&&(t.userProfile=e.userProfile?je.toJSON(e.userProfile):void 0),t}};var _e=a(38481),Ie=a(43697);const Re=`${_e.I_}/identity`;async function Te(e,t,{name:a,imageUploadToken:i}){void 0!==a&&await async function(e,t,a){const i=ke.encode(ke.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(Re).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,Ie.v)(t))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(i.finish()).withoutMarket().send()}(e,t,a),void 0!==i&&(null!==i?await async function(e,t,a){await e.build().withHost(Re).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,Ie.v)(t))}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,t,i):await async function(e,t){await e.build().withHost(Re).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,Ie.v)(t))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,t))}var we=a(40312);const Ne={type:"error",get message(){return u.Ru.get("user.edit-details.error.file-size-exceeded",10)}},Pe={type:"error",get message(){return u.Ru.get("user.edit-details.error.too-small",300,300)}},Ae={type:"error",get message(){return u.Ru.get("user.edit-details.error.too-big",1e4,1e4)}},Ee={type:"error",get message(){return u.Ru.get("user.edit-details.error.image-type-not-supported")}},Oe={type:"error",get message(){return u.Ru.get("user.edit-details.error.missing-name")}},Se={type:"error",get message(){return u.Ru.get("user.edit-details.error.failed-to-save")}},Ce={type:"error",get message(){return u.Ru.get("user.edit-details.error.file-upload-failed")}};function Ue(e){return{type:"setLoading",loading:e}}function Me(e){return{type:"setMessage",message:e}}function Le(e,t){switch(t.type){case"setName":return{...e,name:t.name};case"setMessage":return{...e,message:t.message,loading:!1};case"setLoading":return{...e,loading:t.loading,message:null};case"setImageData":return{...e,imageData:t.data,removeImage:!1};case"setImageToken":return{...e,imageToken:t.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}const De="profile-userEditDetails-container",Fe="profile-userEditDetails-content",Be="profile-userEditDetails-header",He="profile-userEditDetails-closeButton",Ge="vAeyAmeLkDEDKdL9Hou0",We="dnmzO6yYKkxUV8jl7O1Z",Je="profile-userEditDetails-nameInput",ze="profile-userEditDetails-name",Qe="profile-userEditDetails-label",$e="profile-userEditDetails-labelText",Ze="dMhJaxli87_22jb_3d9x",qe="profile-userEditDetails-saveButton",Ke="profile-userEditDetails-disclaimer",Ve=i.memo((function({uri:e,name:t,image:a,onClose:r,shouldOpenImagePicker:s,userCapabilities:o}){const[n,l]=(0,Z.p)(),[d,c]=function({name:e,image:t}){return(0,i.useReducer)(Le,{loading:!1,message:null,name:e,image:t})}({name:t,image:a}),m=(0,i.useMemo)((()=>{const e=d.imageData||d.image;return e?[{url:e,width:300,height:300}]:[]}),[d.image,d.imageData]);(0,i.useEffect)((()=>{s&&l()}),[l,s]);const g=(0,i.useCallback)((e=>{e===$.i.FILE_TOO_BIG?c(Me(Ne)):e===$.i.IMAGE_TOO_SMALL?c(Me(Pe)):e===$.i.IMAGE_TOO_BIG?c(Me(Ae)):e===$.i.IMAGE_TYPE_NOT_SUPPORTED&&c(Me(Ee))}),[c]),p=(0,i.useCallback)((()=>{c({type:"removeImage"})}),[c]),f=(0,i.useCallback)((async t=>{t.preventDefault();if(0!==d.name.trim().length){c(Ue(!0));try{const t=d.removeImage?null:d.imageToken;await async function(e,{name:t,imageUploadToken:a}){await Te(we.n.getInstance(),e,{name:t,imageUploadToken:a})}(e,{name:d.name,imageUploadToken:t}),r({name:d.name,image:d.imageData||d.image})}catch(e){c(Me(Se))}}else c(Me(Oe))}),[c,r,d.image,d.imageData,d.imageToken,d.name,d.removeImage,e]);return(0,h.jsx)(Q.A,{isOpen:!0,contentLabel:u.Ru.get("user.edit-details.title"),onRequestClose:()=>r(),children:(0,h.jsxs)("div",{className:De,children:[(0,h.jsxs)("div",{className:Be,children:[(0,h.jsx)(G.E,{as:"h1",variant:"titleSmall",children:u.Ru.get("user.edit-details.title")}),(0,h.jsx)("button",{className:He,onClick:()=>r(),"aria-label":u.Ru.get("close"),children:(0,h.jsx)(W.M,{size:"small"})})]}),d.message&&(0,h.jsx)(q.z,{isErrorMessage:"error"===d.message.type,message:d.message.message}),(0,h.jsxs)("form",{className:Fe,onSubmit:f,children:[o.edit_image&&(0,h.jsx)($.u,{isOpen:n,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:t,imageDataUrl:a}=e;if(c(Me(null)),c({type:"setImageData",data:a}),t)try{c(Ue(!0));const e=await async function(e){const t=await we.n.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:e.type}]).withoutMarket().send();if(!t.body)throw new Error("No upload token received");return t.body.uploadToken}(t);c({type:"setImageToken",token:e}),c(Ue(!1))}catch{c(Me(Ce))}},onError:g}),(0,h.jsxs)("div",{className:Ge,children:[(0,h.jsx)(re,{name:t,images:m,onClickEdit:l,onClickRemove:p,canEdit:o.edit_image}),d.loading&&(0,h.jsx)("div",{className:We,children:(0,h.jsx)(J.I,{})})]}),(0,h.jsxs)("div",{className:ze,children:[(0,h.jsx)("label",{htmlFor:"user-edit-name",className:Qe,children:(0,h.jsx)(G.E,{variant:"marginalBold",className:$e,children:u.Ru.get("user.edit-details.name-label")})}),(0,h.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:H()(Je,Ze),onChange:e=>{c(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:u.Ru.get("user.edit-details.name-placeholder"),maxLength:32,value:d.name,disabled:!o.edit_name})]}),(0,h.jsx)("div",{className:qe,children:(0,h.jsx)(z.$,{colorSet:"invertedLight",onClick:f,disabled:d.loading,children:u.Ru.get("save")})}),(0,h.jsx)(G.E,{as:"p",variant:"marginalBold",className:Ke,children:u.Ru.get("image-upload.legal-disclaimer")})]})]})})}));var Ye=a(97438),Xe=a(37712),et=a(97393),tt=a(39796),at=a(54874),it=a(27014),rt=a(69578),st=a(45346),ot=a(52608),nt=a(419);const lt=i.memo((function({openModal:e,spec:t,logger:a,name:r,backgroundColor:s,isCurrentUser:o,uri:n}){const[l,d]=(0,nt.Y)(n),c=(0,st.W)(),m=!(0,ot.n)(),g=(0,i.useCallback)((()=>{c({targetUri:n,intent:l?"unfollow":"follow",type:"click"});const e=t.actionBarFactory().followButtonFactory();l?(d(!1),a.logInteraction(e.hitUnfollow({itemToBeUnfollowed:n}))):(d(!0),a.logInteraction(e.hitFollow({itemToBeFollowed:n})))}),[l,a,c,d,t,n]),p=(0,i.useCallback)((()=>{const e=t.actionBarFactory().contextMenuButtonFactory().hitUiReveal();a.logInteraction(e)}),[a,t]),f=(0,rt.j)();return(0,h.jsx)(Ye.E,{backgroundColor:s,children:(0,h.jsxs)(Xe.S,{children:[!o&&(0,h.jsx)(at.e,{children:(0,h.jsx)(it.W,{isFollowing:Boolean(l),onClick:g,disabled:m})}),(0,h.jsx)(tt.b,{menu:(0,h.jsx)(T.B,{uri:n,onEditProfileCallback:e}),children:(0,h.jsx)(et.e,{label:u.Ru.get("more.label.context",r),onClick:p,size:f})})]})})}));var ut=a(4594),dt=a(55665),ct=a(48100),mt=a(84401),gt=a(15739),pt=a(9813),ht=a(71801),ft=a(17930),vt=a(84075),xt=a(41609),bt=a(72445),yt=a(84537),jt=a(96849),kt=a(6941),_t=a(40009),It=a(69905),Rt=a(92421),Tt=a(81783),wt=a(98912),Nt=a(12274),Pt=a(48200),At=a(59355),Et=a(58237),Ot=a(78074),St=a(95302),Ct=a(16972),Ut=a(72091),Mt=a(94672),Lt=a(76748);const Dt=i.memo((function({uri:e,name:t,duration_ms:a,artists:i,album:r,contextUri:s,isExplicit:o,isMOGEFRestricted:n,isPlayable:l,index:d,imgUrl:c,usePlayContextItem:m}){const{spec:g}=(0,Ut.r)(dt.i,{data:{position:d,reason:"",uri:e}}),{isActive:p,isPlaying:f,triggerPlay:v,togglePlay:x}=m({uri:e,index:d}),b=(0,Ct.T)(e),y=(0,Pt.g)(e,l),{badges:j,hasBadges:k}=(0,Mt.b)({downloadAvailability:b,isExplicit:o,isMOGEFRestricted:n}),_=i?.map((e=>e.name)).join(u.Ru.getSeparator())||"";return(0,h.jsx)(St.pZ,{value:"row",index:d,children:(0,h.jsx)(R.h,{menu:(0,h.jsx)(ct.P,{uri:e,albumUri:r.uri,artists:i,contextUri:s}),children:(0,h.jsxs)(wt.w,{uri:e,contextUri:s,onTriggerPlay:(e,t)=>{v({loggingParams:t})},isActive:p,index:d,ariaRowIndex:d+1,isPlayable:y,ageRestricted:n,dragMetadata:{name:t,createdBy:_},spec:g,children:[(0,h.jsx)(kt.y,{ariaColIndex:0,children:(0,h.jsx)(xt.$,{uri:e,playAriaLabel:u.Ru.get("tracklist.a11y.play",t,_),isPlaying:f,isActive:p,onClick:(e,t)=>{x({loggingParams:t})},spec:g,children:(0,h.jsx)(yt.a,{children:d+1})})}),(0,h.jsxs)(_t.U,{ariaColIndex:1,children:[(0,h.jsx)(ft.e,{src:c}),(0,h.jsxs)(vt.l,{children:[(0,h.jsx)(Tt.p,{titleText:t,children:t}),k&&(0,h.jsxs)(pt.P,{children:[j.download&&(0,h.jsx)(At._,{}),j.explicit&&(0,h.jsx)(Et.g,{}),j.nineteen&&(0,h.jsx)(Ot.q,{className:Lt.A.nineteen,size:16})]}),(0,h.jsx)(Rt.p,{children:(0,h.jsx)(gt.l,{artists:i,spec:g})})]})]}),(0,h.jsx)(It.o,{ariaColIndex:2,children:(0,h.jsx)(mt.g,{uri:r.uri,name:r.name,creatorUri:i?.[0]?.uri,spec:g,children:r.name})}),(0,h.jsxs)(jt.l,{ariaColIndex:3,children:[(0,h.jsx)(Nt.d,{uri:e,spec:g}),(0,h.jsx)(ht.P,{duration:a}),(0,h.jsx)(bt.Y,{menu:(0,h.jsx)(ct.P,{uri:e,albumUri:r.uri,artists:i,contextUri:s}),label:u.Ru.get("more.label.track",t,_),spec:g})]})]})})})}),((e,t)=>e.uri===t.uri));var Ft=a(45546),Bt=a(46288),Ht=a(62413),Gt=a(1878),Wt=a(42582),Jt=a(79787),zt=a(71817),Qt=a(3554);const $t=i.memo((function({tracks:e,hasHeaderRow:t=!1,nrTracksVisible:a,uri:r}){const s=(0,Ie.v)(r),n=(0,o.du)(s,"tracks").toURI(),l=(0,i.useMemo)((()=>a?e.slice(0,a):e),[a,e]),{usePlayContextItem:d}=(0,Wt.P)({uri:n,pages:[{items:e.map((e=>({type:zt.c.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),c=(0,i.useCallback)(((e,t)=>{const a=(0,Qt.g)(e?.albumOfTrack?.coverArt?.sources,{desiredSize:40});return(0,h.jsx)(Dt,{index:t,uri:(0,Gt.a)(e),duration_ms:e.duration.totalMilliseconds,name:e.name,artists:e.artists.items.map((({uri:e,profile:{name:t}})=>({uri:e,name:t}))),album:e.albumOfTrack,isPlayable:!0,isExplicit:e.contentRating?.label===Jt.x7.Explicit,isMOGEFRestricted:e.contentRating?.label===Jt.x7.NineteenPlus,imgUrl:a?.url||"",contextUri:n,usePlayContextItem:d},t+e.uri)}),[n,d]),m=(0,i.useMemo)((()=>[Bt.$.INDEX,Bt.$.TITLE_AND_ARTIST,Bt.$.ALBUM,Bt.$.DURATION]),[]),g=(0,i.useCallback)((e=>({uri:e.uri})),[]),p=(0,Ht.A)()?0:void 0;return(0,h.jsx)(St.pZ,{value:"user-top-tracks-tracklist",children:(0,h.jsx)(Ft.S4,{ariaLabel:u.Ru.get("top_tracks_this_month"),renderRow:c,nrTracks:l.length,tracks:l,resolveItem:g,headerTop:p,hasHeaderRow:t,columns:m,columnPersistenceKey:"user-top-tracks-tracklist"})})}),((e,t)=>e.tracks===t.tracks));var Zt=a(17869),qt=a(79303);const Kt=i.memo((function({tracks:e,title:t,subtitle:a,seeAllUri:r,className:s,uri:o,spec:n}){const l=(0,qt.s)(),u=(0,i.useCallback)((()=>{const e=n.titleLinkFactory().hitUiNavigate({destination:r});l.logInteraction(e)}),[l,r,n]),d=(0,i.useCallback)((()=>{const e=n.titleLinkFactory().hitUiNavigate({destination:r});l.logInteraction(e)}),[l,r,n]);if(!e||0===e.totalCount||0===e.items.length)return null;const c=e.totalCount>4;return(0,h.jsxs)("section",{className:s,children:[(0,h.jsx)(ut.k,{title:t,subtitle:a,seeAllUri:r,hasMoreElements:c,onClickTitle:u,onClickSeeAll:d}),(0,h.jsx)(Zt.r,{spec:n,children:(0,h.jsx)($t,{tracks:e.items,uri:o,nrTracksVisible:4})})]})}),((e,t)=>e.tracks===t.tracks));function Vt(e,t){switch(t.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}var Yt=a(15742),Xt=a(8385);const ea=new Yt.l("userTopContent","query","feb6d55177e2cbce2ac59214f9493f1ef2e4368eec01b3d4c3468fa1b97336e2",null);function ta(e){return"Artist"===e.__typename}function aa(e){if("ArtistPageV2"!==e?.topArtists?.__typename)return null;const t=e.topArtists.items.map((e=>e.data)).filter(ta);return 0===t.length?null:{totalCount:e.topArtists.totalCount,items:t}}function ia(e){return"Track"===e.__typename}function ra(e){if("TrackPageV2"!==e?.topTracks?.__typename)return null;const t=e.topTracks.items.map((e=>e.data)).filter(ia).filter((e=>null!==e.albumOfTrack));return 0===t.length?null:{totalCount:e.topTracks.totalCount,items:t}}const sa=Jt.xE.Affinity,oa=Jt.Nm.ShortTerm;function na({includeTopArtists:e,includeTopTracks:t,topArtistsLimit:a,topTracksLimit:i}){const{data:r,loading:s,error:o}=(n={includeTopArtists:e,topArtistsInput:{offset:0,limit:a,sortBy:sa,timeRange:oa},includeTopTracks:t,topTracksInput:{offset:0,limit:i,sortBy:sa,timeRange:oa}},l={enabled:e||t,gcTime:18e5,staleTime:3e5},(0,Xt.I)(ea,n,l));var n,l;return null!==o?{topTracks:null,topArtists:null,loading:s,error:new Error("Failed loading user top content!")}:{topTracks:ra(r?.me?.profile??null),topArtists:aa(r?.me?.profile??null),loading:s,error:null}}var la=a(63198),ua=a(73751),da=a(19118),ca=a(18416),ma=a(19159),ga=a(7939),pa=a(89734),ha=a(25558),fa=a(88602),va=a(92062);const xa="J6PX6RfvHlA4BPp7_8sJ",ba="DJCugGBTcU3io4Q28BHl",ya="vpTiIBeCfuGKOTj3Tzg6",ja="eGAuBpyB1eqsyPKbaQU7",ka="GoG_UTK1uLaPCfhipeF0",_a=18e5,Ia=3e5,Ra=(0,y.Mz)(ga.mB,(e=>e?.images||[])),Ta=({uri:e,isCurrentUser:t})=>{const a=(0,b.d4)(ga.mB)?.uri,r=(0,b.d4)(ga.Mn),s=(0,b.d4)(Ra),n=(0,b.wA)(),l=(0,x.jE)(),m=(0,j.NC)(ma.DGB,{loadingValue:!0}),f=(0,i.useMemo)((()=>(0,Qt.g)(s)),[s]),[{isModalOpen:v,modalVariant:y,shouldOpenImagePicker:B},H]=function(){const[e,t]=(0,i.useReducer)(Vt,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,t]}(),{data:G,loading:W,queryKey:J}=(0,p.Z)(g.E$,[{uri:e,playlists:10,artists:10,episodes:10}],{gcTime:_a,staleTime:Ia}),z=(0,la.V)();(0,ca.N)(da.mc.OPERATION_COMPLETE,(()=>{l.invalidateQueries({queryKey:J})})),(0,fa.l)(ha.UV.OPERATION_COMPLETE,(()=>{l.invalidateQueries({queryKey:J})}));const Q=G?.public_playlists,$=G?.is_verified,Z=G?.recently_played_artists,q=t?f?.url||"":G?.image_url||"",K=(0,Ie.v)(e),V=(t?r:G?.name)||"",Y=(0,ua.H)(G?.image_url||null),{spec:X,logger:ee}=(0,Ut.r)(k._,{data:{uri:e}}),te=(0,i.useMemo)((()=>X.sectionTopTracksFactory()),[X]),ae=!z&&(!1!==G?.show_follows||t),ie=t&&m,{data:re,loading:se}=(0,p.Z)(g.mH,[e],{enabled:ae,gcTime:_a,staleTime:Ia}),oe=re?.profiles,{data:ne,loading:le}=(0,p.Z)(g.SR,[e],{enabled:ae,gcTime:_a,staleTime:Ia}),ue=ne?.profiles,de=oe?.some((e=>e.uri===a)),{topArtists:ce,topTracks:me,loading:ge}=na({includeTopArtists:ie,includeTopTracks:ie,topArtistsLimit:10,topTracksLimit:4}),pe=(0,i.useCallback)((e=>{H({type:"CLOSE_MODAL"}),e&&(n((0,pa.IE)(e.name)),n((0,pa.ZQ)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[H,n]),he=(0,i.useCallback)((()=>{H({type:"OPEN_MODAL"});const e=X.headerFactory().usernameFactory().hitUiReveal();ee.logInteraction(e)}),[ee,H,X]),fe=(0,i.useCallback)((()=>{H({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=X.headerFactory().profileImageFactory().hitUiReveal();ee.logInteraction(e)}),[ee,H,X]),ve=(0,i.useMemo)((()=>[{url:q}]),[q]),xe=(0,i.useCallback)((()=>{const e=X.headerFactory().usernameFactory().hitUiReveal();ee.logInteraction(e)}),[ee,X]),be=(0,i.useCallback)(((e,t)=>{if(!t)return;const a=X.headerFactory().followersLinkFactory().hitUiNavigate({destination:t});ee.logInteraction(a)}),[ee,X]),ye=(0,i.useCallback)(((e,t)=>{if(!t)return;const a=X.headerFactory().followersLinkFactory().hitUiNavigate({destination:t});ee.logInteraction(a)}),[ee,X]);if(!G||W||se||le||ge)return(0,h.jsx)(c.A,{hasError:!1,errorMessage:u.Ru.get("error.not_found.title.page")});const je=ae&&!!ue?.length,ke=ae&&!!oe?.length,_e=(0,h.jsx)(T.B,{uri:G.uri});return(0,h.jsxs)("div",{className:xa,children:[(0,h.jsx)(w.Q,{children:V}),(0,h.jsxs)(P.z,{backgroundColor:Y,children:[(0,h.jsx)(O.h,{children:(0,h.jsx)(R.h,{menu:_e,children:(0,h.jsx)(S.X,{text:V})})}),(0,h.jsx)(R.h,{menu:_e,children:(0,h.jsx)(A.X,{children:(0,h.jsx)(N.M,{canEdit:t&&!G.edit_image_disabled,name:V,images:ve,onClick:fe,placeholderType:"user",shape:C.u.CIRCLE})})}),(0,h.jsxs)(E.Y,{children:[(0,h.jsx)(M.B,{children:$?(0,h.jsx)(D.M,{text:u.Ru.get("card.tag.profile")}):u.Ru.get("card.tag.profile")}),(0,h.jsx)(R.h,{menu:_e,children:(0,h.jsx)(L.mm,{canEdit:t&&!G.edit_name_disabled,editTitle:u.Ru.get("playlist.edit-details.title"),onClick:he,children:V})}),(0,h.jsx)(U.t,{totalFollowers:G.followers_count,totalFollowing:G.following_count,publicPlaylists:G.total_public_playlists_count,userUri:e,onCreatorClick:xe,onTotalFollowersClick:be,onTotalFollowingClick:ye,theyFollowUs:de})]})]}),(0,h.jsx)(lt,{openModal:he,spec:X,logger:ee,name:V,backgroundColor:Y,isCurrentUser:t,uri:e}),(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsxs)(Zt.r,{spec:X,children:[t&&(0,h.jsxs)(h.Fragment,{children:[null!==ce&&(0,h.jsx)(F.p,{className:ba,total:ce.totalCount,title:u.Ru.get("top_artists_this_month"),subtitle:u.Ru.get("only_visible_to_you"),seeAllUri:(0,o.Qj)(K,["top","artists"]).toURI(),id:"top-artists",index:0,children:ce.items.map(((e,t)=>(0,h.jsx)(_.a,{index:t,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))}),(0,h.jsx)(Kt,{className:ba,title:u.Ru.get("top_tracks_this_month"),subtitle:u.Ru.get("only_visible_to_you"),seeAllUri:(0,o.Qj)(K,["top","tracks"]).toURI(),uri:e,tracks:me,spec:te})]}),(0,h.jsx)(F.p,{className:ba,total:G.total_public_playlists_count,title:u.Ru.get("public_playlists"),seeAllUri:(0,o.Qj)(K,["playlists"]).toURI(),id:"playlists",index:1,children:Q?.map(((e,t)=>(0,h.jsx)(I.B,{index:t,uri:e.uri,name:e.name,images:[{url:(0,va.m)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?u.Ru.get("user.followers",e.followers_count):""},e.uri)))}),Z?.length?(0,h.jsx)(F.p,{className:ba,total:Z?.length,title:u.Ru.get("recently_played_artists"),seeAllUri:(0,o.Qj)(K,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:2,children:Z?.map(((e,t)=>(0,h.jsx)(_.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,je?(0,h.jsx)(F.p,{className:ba,title:u.Ru.get("followers"),total:ue?.length,seeAllUri:(0,o.Qj)(K,["followers"]).toURI(),id:"followers",index:3,children:ue?.map(((e,t)=>(0,h.jsx)(d.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,ke?(0,h.jsx)(F.p,{className:ba,title:u.Ru.get("following"),total:oe?.length,seeAllUri:(0,o.Qj)(K,["following"]).toURI(),id:"following",index:4,children:oe?.map(((e,t)=>(0,h.jsx)(d.a,{index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,t&&v&&("editProfile"===y?(0,h.jsx)(Ve,{uri:e,name:V,image:q,onClose:pe,shouldOpenImagePicker:B,userCapabilities:{edit_image:!G?.edit_image_disabled,edit_name:!G?.edit_name_disabled}}):null)]})})]})},wa=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.Eo,[{uri:t}]),{public_playlists:s,total_public_playlists_count:o=0}=a||{};return i?(0,h.jsx)(c.A,{hasError:null!==r,errorMessage:u.Ru.get("error.not_found.title.page")}):(0,h.jsx)(m.$,{total:o,title:u.Ru.get("public_playlists"),showAll:!0,fullPage:!0,rowGap:l.lT,children:s?.map(((e,t)=>(0,h.jsx)(I.B,{index:t,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?u.Ru.get("user.followers",e.followers_count):"",images:[{url:(0,va.m)({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Na=e=>{const{uri:t}=e,{data:a,loading:i,error:r}=(0,p.Z)(g.sL,[{uri:t,limit:50}]),s=a?.artists;return i?(0,h.jsx)(c.A,{hasError:null!==r,errorMessage:u.Ru.get("error.not_found.title.page")}):(0,h.jsx)(m.$,{total:s?.length,title:u.Ru.get("recently_played_artists"),showAll:!0,fullPage:!0,rowGap:l.lT,children:s?.map(((e,t)=>(0,h.jsx)(_.a,{index:t,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Pa=()=>{const{topArtists:e,loading:t,error:a}=na({includeTopArtists:!0,includeTopTracks:!1,topArtistsLimit:100,topTracksLimit:0});return t?(0,h.jsx)(c.A,{hasError:null!==a,errorMessage:u.Ru.get("error.not_found.title.page")}):null===e?null:(0,h.jsx)(m.$,{total:e.items.length,title:u.Ru.get("top_artists_this_month"),subtitle:u.Ru.get("only_visible_to_you"),showAll:!0,fullPage:!0,rowGap:l.lT,children:e.items.map(((e,t)=>(0,h.jsx)(_.a,{index:t,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources??[]},e.uri)))})},Aa=({isCurrentUser:e})=>e?(0,h.jsx)(Pa,{}):(0,h.jsx)(c.A,{hasError:!0,errorMessage:u.Ru.get("error.not_found.title.page")}),Ea=({uri:e})=>{const{topTracks:t,loading:a,error:i}=na({includeTopArtists:!1,includeTopTracks:!0,topArtistsLimit:0,topTracksLimit:100});return a?(0,h.jsx)(c.A,{hasError:null!==i,errorMessage:u.Ru.get("error.not_found.title.page")}):null===t?null:(0,h.jsxs)("div",{className:H()("contentSpacing",ya),children:[(0,h.jsxs)("div",{className:ja,children:[(0,h.jsx)(G.E,{as:"h1",variant:"titleMedium",className:ka,children:u.Ru.get("top_tracks_this_month")}),(0,h.jsx)(G.E,{as:"p",variant:"bodySmall",children:u.Ru.get("only_visible_to_you")})]}),(0,h.jsx)($t,{tracks:t.items,uri:e,hasHeaderRow:!0})]})},Oa=({uri:e,isCurrentUser:t})=>t?(0,h.jsx)(Ea,{uri:e}):(0,h.jsx)(c.A,{hasError:!0,errorMessage:u.Ru.get("error.not_found.title.page")});var Sa=a(65916);const Ca="cubl27eU3uN3hmAiqdmQ",Ua=(0,i.memo)((function(){const{userId:e=""}=(0,r.g)(),t=decodeURIComponent(e),a=(0,o.Qj)(t).toURI(),i=(e=>{const t=(0,la.V)(),a=(0,Sa.C)()?.username;return!t&&a===e})(t);return(0,h.jsx)("section",{className:Ca,children:(0,h.jsxs)(r.BV,{children:[(0,h.jsx)(r.qh,{path:"playlists",element:(0,h.jsx)(n.e,{pageId:s.$h.PROFILE_PLAYLISTS,children:(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(wa,{uri:a})})})}),(0,h.jsx)(r.qh,{path:"top/tracks",element:(0,h.jsx)(n.e,{pageId:s.$h.PROFILE_TOP_TRACKS,children:(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(Oa,{uri:a,isCurrentUser:i})})})}),(0,h.jsx)(r.qh,{path:"top/artists",element:(0,h.jsx)(n.e,{pageId:s.$h.PROFILE_TOP_ARTISTS,children:(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(Aa,{isCurrentUser:i})})})}),(0,h.jsx)(r.qh,{path:"recently-played-artists",element:(0,h.jsx)(n.e,{pageId:s.$h.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(Na,{uri:a})})})}),(0,h.jsx)(r.qh,{path:"following",element:(0,h.jsx)(n.e,{pageId:s.$h.PROFILE_FOLLOWING,children:(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(v,{uri:a})})})}),(0,h.jsx)(r.qh,{path:"followers",element:(0,h.jsx)(n.e,{pageId:s.$h.PROFILE_FOLLOWERS,children:(0,h.jsx)("div",{className:"contentSpacing",children:(0,h.jsx)(f,{uri:a})})})}),(0,h.jsx)(r.qh,{path:"/",element:(0,h.jsx)(n.e,{pageId:s.$h.PROFILE,children:(0,h.jsx)(Ta,{uri:a,isCurrentUser:i})})})]})})}))},65916:(e,t,a)=>{a.d(t,{C:()=>s});var i=a(41978),r=a(71817);const s=()=>{const e=(0,i.d4)((e=>e.session?.user));return e?{type:r.c.USER,uri:e.uri,username:e.id,displayName:e.display_name??null,images:e.images.map((({url:e,width:t,height:a})=>({url:e,width:t||void 0,height:a||void 0})))}:null}},1878:(e,t,a)=>{a.d(t,{a:()=>i});const i=e=>e?.linked_from?.uri||e.uri},13445:(e,t,a)=>{a.d(t,{b:()=>s,g:()=>r});var i=a(30758);let r=function(e){return e[e.loading=0]="loading",e[e.loaded=1]="loaded",e[e.error=2]="error",e}({});function s(e,t){const a=e?r.loading:r.error,[s,o]=(0,i.useState)(a);return(0,i.useEffect)((()=>{const a=()=>{o(r.loaded)},i=()=>{o(r.error)};if(!e)return o(r.error),()=>{};o(r.loading);const s=document.createElement("img");return s.addEventListener("load",a),s.addEventListener("error",i),s.setAttribute("src",e),t&&s.setAttribute("srcSet",t),()=>{s.removeEventListener("load",a),s.removeEventListener("error",i)}}),[e,t]),s}}}]);
//# sourceMappingURL=xpui-routes-profile.js.map