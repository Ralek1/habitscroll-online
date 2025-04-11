import{r as s,j as f,R as j,a as Ee,b as Be,c as Ke}from"./react-vendor-BMCMh-XC.js";function S(e,t,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e==null||e(r),o===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function He(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function we(...e){return t=>e.forEach(o=>He(o,t))}function M(...e){return s.useCallback(we(...e),e)}function Xe(e,t=[]){let o=[];function n(a,c){const u=s.createContext(c),l=o.length;o=[...o,c];function i(E){const{scope:w,children:h,...y}=E,p=(w==null?void 0:w[e][l])||u,d=s.useMemo(()=>y,Object.values(y));return f.jsx(p.Provider,{value:d,children:h})}function m(E,w){const h=(w==null?void 0:w[e][l])||u,y=s.useContext(h);if(y)return y;if(c!==void 0)return c;throw new Error(`\`${E}\` must be used within \`${a}\``)}return i.displayName=a+"Provider",[i,m]}const r=()=>{const a=o.map(c=>s.createContext(c));return function(u){const l=(u==null?void 0:u[e])||a;return s.useMemo(()=>({[`__scope${e}`]:{...u,[e]:l}}),[u,l])}};return r.scopeName=e,[n,Ye(r,...t)]}function Ye(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const c=n.reduce((u,{useScope:l,scopeName:i})=>{const E=l(a)[`__scope${i}`];return{...u,...E}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return o.scopeName=t.scopeName,o}var Y=s.forwardRef((e,t)=>{const{children:o,...n}=e,r=s.Children.toArray(o),a=r.find(qe);if(a){const c=a.props.children,u=r.map(l=>l===a?s.Children.count(c)>1?s.Children.only(null):s.isValidElement(c)?c.props.children:null:l);return f.jsx(J,{...n,ref:t,children:s.isValidElement(c)?s.cloneElement(c,void 0,u):null})}return f.jsx(J,{...n,ref:t,children:o})});Y.displayName="Slot";var J=s.forwardRef((e,t)=>{const{children:o,...n}=e;if(s.isValidElement(o)){const r=Ze(o);return s.cloneElement(o,{...Ge(n,o.props),ref:t?we(t,r):r})}return s.Children.count(o)>1?s.Children.only(null):null});J.displayName="SlotClone";var ze=({children:e})=>f.jsx(f.Fragment,{children:e});function qe(e){return s.isValidElement(e)&&e.type===ze}function Ge(e,t){const o={...t};for(const n in t){const r=e[n],a=t[n];/^on[A-Z]/.test(n)?r&&a?o[n]=(...u)=>{a(...u),r(...u)}:r&&(o[n]=r):n==="style"?o[n]={...r,...a}:n==="className"&&(o[n]=[r,a].filter(Boolean).join(" "))}return{...e,...o}}function Ze(e){var n,r;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}function Je(e){const t=e+"CollectionProvider",[o,n]=Xe(t),[r,a]=o(t,{collectionRef:{current:null},itemMap:new Map}),c=h=>{const{scope:y,children:p}=h,d=j.useRef(null),C=j.useRef(new Map).current;return f.jsx(r,{scope:y,itemMap:C,collectionRef:d,children:p})};c.displayName=t;const u=e+"CollectionSlot",l=j.forwardRef((h,y)=>{const{scope:p,children:d}=h,C=a(u,p),v=M(y,C.collectionRef);return f.jsx(Y,{ref:v,children:d})});l.displayName=u;const i=e+"CollectionItemSlot",m="data-radix-collection-item",E=j.forwardRef((h,y)=>{const{scope:p,children:d,...C}=h,v=j.useRef(null),x=M(y,v),b=a(i,p);return j.useEffect(()=>(b.itemMap.set(v,{ref:v,...C}),()=>void b.itemMap.delete(v))),f.jsx(Y,{[m]:"",ref:x,children:d})});E.displayName=i;function w(h){const y=a(e+"CollectionConsumer",h);return j.useCallback(()=>{const d=y.collectionRef.current;if(!d)return[];const C=Array.from(d.querySelectorAll(`[${m}]`));return Array.from(y.itemMap.values()).sort((b,R)=>C.indexOf(b.ref.current)-C.indexOf(R.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:c,Slot:l,ItemSlot:E},w,n]}function ye(e,t=[]){let o=[];function n(a,c){const u=s.createContext(c),l=o.length;o=[...o,c];const i=E=>{var C;const{scope:w,children:h,...y}=E,p=((C=w==null?void 0:w[e])==null?void 0:C[l])||u,d=s.useMemo(()=>y,Object.values(y));return f.jsx(p.Provider,{value:d,children:h})};i.displayName=a+"Provider";function m(E,w){var p;const h=((p=w==null?void 0:w[e])==null?void 0:p[l])||u,y=s.useContext(h);if(y)return y;if(c!==void 0)return c;throw new Error(`\`${E}\` must be used within \`${a}\``)}return[i,m]}const r=()=>{const a=o.map(c=>s.createContext(c));return function(u){const l=(u==null?void 0:u[e])||a;return s.useMemo(()=>({[`__scope${e}`]:{...u,[e]:l}}),[u,l])}};return r.scopeName=e,[n,Qe(r,...t)]}function Qe(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const c=n.reduce((u,{useScope:l,scopeName:i})=>{const E=l(a)[`__scope${i}`];return{...u,...E}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return o.scopeName=t.scopeName,o}var et=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],N=et.reduce((e,t)=>{const o=s.forwardRef((n,r)=>{const{asChild:a,...c}=n,u=a?Y:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),f.jsx(u,{...c,ref:r})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function he(e,t){e&&Ee.flushSync(()=>e.dispatchEvent(t))}function D(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...o)=>{var n;return(n=t.current)==null?void 0:n.call(t,...o)},[])}function tt(e,t=globalThis==null?void 0:globalThis.document){const o=D(e);s.useEffect(()=>{const n=r=>{r.key==="Escape"&&o(r)};return t.addEventListener("keydown",n,{capture:!0}),()=>t.removeEventListener("keydown",n,{capture:!0})},[o,t])}var nt="DismissableLayer",Q="dismissableLayer.update",ot="dismissableLayer.pointerDownOutside",rt="dismissableLayer.focusOutside",pe,Te=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ce=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:n,onPointerDownOutside:r,onFocusOutside:a,onInteractOutside:c,onDismiss:u,...l}=e,i=s.useContext(Te),[m,E]=s.useState(null),w=(m==null?void 0:m.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=s.useState({}),y=M(t,P=>E(P)),p=Array.from(i.layers),[d]=[...i.layersWithOutsidePointerEventsDisabled].slice(-1),C=p.indexOf(d),v=m?p.indexOf(m):-1,x=i.layersWithOutsidePointerEventsDisabled.size>0,b=v>=C,R=it(P=>{const O=P.target,_=[...i.branches].some(L=>L.contains(O));!b||_||(r==null||r(P),c==null||c(P),P.defaultPrevented||u==null||u())},w),g=at(P=>{const O=P.target;[...i.branches].some(L=>L.contains(O))||(a==null||a(P),c==null||c(P),P.defaultPrevented||u==null||u())},w);return tt(P=>{v===i.layers.size-1&&(n==null||n(P),!P.defaultPrevented&&u&&(P.preventDefault(),u()))},w),s.useEffect(()=>{if(m)return o&&(i.layersWithOutsidePointerEventsDisabled.size===0&&(pe=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),i.layersWithOutsidePointerEventsDisabled.add(m)),i.layers.add(m),me(),()=>{o&&i.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=pe)}},[m,w,o,i]),s.useEffect(()=>()=>{m&&(i.layers.delete(m),i.layersWithOutsidePointerEventsDisabled.delete(m),me())},[m,i]),s.useEffect(()=>{const P=()=>h({});return document.addEventListener(Q,P),()=>document.removeEventListener(Q,P)},[]),f.jsx(N.div,{...l,ref:y,style:{pointerEvents:x?b?"auto":"none":void 0,...e.style},onFocusCapture:S(e.onFocusCapture,g.onFocusCapture),onBlurCapture:S(e.onBlurCapture,g.onBlurCapture),onPointerDownCapture:S(e.onPointerDownCapture,R.onPointerDownCapture)})});Ce.displayName=nt;var st="DismissableLayerBranch",xe=s.forwardRef((e,t)=>{const o=s.useContext(Te),n=s.useRef(null),r=M(t,n);return s.useEffect(()=>{const a=n.current;if(a)return o.branches.add(a),()=>{o.branches.delete(a)}},[o.branches]),f.jsx(N.div,{...e,ref:r})});xe.displayName=st;function it(e,t=globalThis==null?void 0:globalThis.document){const o=D(e),n=s.useRef(!1),r=s.useRef(()=>{});return s.useEffect(()=>{const a=u=>{if(u.target&&!n.current){let l=function(){Pe(ot,o,i,{discrete:!0})};const i={originalEvent:u};u.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=l,t.addEventListener("click",r.current,{once:!0})):l()}else t.removeEventListener("click",r.current);n.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",a),t.removeEventListener("click",r.current)}},[t,o]),{onPointerDownCapture:()=>n.current=!0}}function at(e,t=globalThis==null?void 0:globalThis.document){const o=D(e),n=s.useRef(!1);return s.useEffect(()=>{const r=a=>{a.target&&!n.current&&Pe(rt,o,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,o]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function me(){const e=new CustomEvent(Q);document.dispatchEvent(e)}function Pe(e,t,o,{discrete:n}){const r=o.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:o});t&&r.addEventListener(e,t,{once:!0}),n?he(r,a):r.dispatchEvent(a)}var ct=Ce,ut=xe,W=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},lt="Portal",be=s.forwardRef((e,t)=>{var u;const{container:o,...n}=e,[r,a]=s.useState(!1);W(()=>a(!0),[]);const c=o||r&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?Be.createPortal(f.jsx(N.div,{...n,ref:t}),c):null});be.displayName=lt;function dt(e,t){return s.useReducer((o,n)=>t[o][n]??o,e)}var oe=e=>{const{present:t,children:o}=e,n=ft(t),r=typeof o=="function"?o({present:n.isPresent}):s.Children.only(o),a=M(n.ref,pt(r));return typeof o=="function"||n.isPresent?s.cloneElement(r,{ref:a}):null};oe.displayName="Presence";function ft(e){const[t,o]=s.useState(),n=s.useRef({}),r=s.useRef(e),a=s.useRef("none"),c=e?"mounted":"unmounted",[u,l]=dt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const i=H(n.current);a.current=u==="mounted"?i:"none"},[u]),W(()=>{const i=n.current,m=r.current;if(m!==e){const w=a.current,h=H(i);e?l("MOUNT"):h==="none"||(i==null?void 0:i.display)==="none"?l("UNMOUNT"):l(m&&w!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),W(()=>{if(t){let i;const m=t.ownerDocument.defaultView??window,E=h=>{const p=H(n.current).includes(h.animationName);if(h.target===t&&p&&(l("ANIMATION_END"),!r.current)){const d=t.style.animationFillMode;t.style.animationFillMode="forwards",i=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=d)})}},w=h=>{h.target===t&&(a.current=H(n.current))};return t.addEventListener("animationstart",w),t.addEventListener("animationcancel",E),t.addEventListener("animationend",E),()=>{m.clearTimeout(i),t.removeEventListener("animationstart",w),t.removeEventListener("animationcancel",E),t.removeEventListener("animationend",E)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:s.useCallback(i=>{i&&(n.current=getComputedStyle(i)),o(i)},[])}}function H(e){return(e==null?void 0:e.animationName)||"none"}function pt(e){var n,r;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}function Re({prop:e,defaultProp:t,onChange:o=()=>{}}){const[n,r]=mt({defaultProp:t,onChange:o}),a=e!==void 0,c=a?e:n,u=D(o),l=s.useCallback(i=>{if(a){const E=typeof i=="function"?i(e):i;E!==e&&u(E)}else r(i)},[a,e,r,u]);return[c,l]}function mt({defaultProp:e,onChange:t}){const o=s.useState(e),[n]=o,r=s.useRef(n),a=D(t);return s.useEffect(()=>{r.current!==n&&(a(n),r.current=n)},[n,r,a]),o}var vt="VisuallyHidden",re=s.forwardRef((e,t)=>f.jsx(N.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));re.displayName=vt;var se="ToastProvider",[ie,Et,wt]=Je("Toast"),[ge,Ut]=ye("Toast",[wt]),[yt,z]=ge(se),Se=e=>{const{__scopeToast:t,label:o="Notification",duration:n=5e3,swipeDirection:r="right",swipeThreshold:a=50,children:c}=e,[u,l]=s.useState(null),[i,m]=s.useState(0),E=s.useRef(!1),w=s.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${se}\`. Expected non-empty \`string\`.`),f.jsx(ie.Provider,{scope:t,children:f.jsx(yt,{scope:t,label:o,duration:n,swipeDirection:r,swipeThreshold:a,toastCount:i,viewport:u,onViewportChange:l,onToastAdd:s.useCallback(()=>m(h=>h+1),[]),onToastRemove:s.useCallback(()=>m(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:E,isClosePausedRef:w,children:c})})};Se.displayName=se;var Ne="ToastViewport",ht=["F8"],ee="toast.viewportPause",te="toast.viewportResume",Ae=s.forwardRef((e,t)=>{const{__scopeToast:o,hotkey:n=ht,label:r="Notifications ({hotkey})",...a}=e,c=z(Ne,o),u=Et(o),l=s.useRef(null),i=s.useRef(null),m=s.useRef(null),E=s.useRef(null),w=M(t,E,c.onViewportChange),h=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=c.toastCount>0;s.useEffect(()=>{const d=C=>{var x;n.length!==0&&n.every(b=>C[b]||C.code===b)&&((x=E.current)==null||x.focus())};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[n]),s.useEffect(()=>{const d=l.current,C=E.current;if(y&&d&&C){const v=()=>{if(!c.isClosePausedRef.current){const g=new CustomEvent(ee);C.dispatchEvent(g),c.isClosePausedRef.current=!0}},x=()=>{if(c.isClosePausedRef.current){const g=new CustomEvent(te);C.dispatchEvent(g),c.isClosePausedRef.current=!1}},b=g=>{!d.contains(g.relatedTarget)&&x()},R=()=>{d.contains(document.activeElement)||x()};return d.addEventListener("focusin",v),d.addEventListener("focusout",b),d.addEventListener("pointermove",v),d.addEventListener("pointerleave",R),window.addEventListener("blur",v),window.addEventListener("focus",x),()=>{d.removeEventListener("focusin",v),d.removeEventListener("focusout",b),d.removeEventListener("pointermove",v),d.removeEventListener("pointerleave",R),window.removeEventListener("blur",v),window.removeEventListener("focus",x)}}},[y,c.isClosePausedRef]);const p=s.useCallback(({tabbingDirection:d})=>{const v=u().map(x=>{const b=x.ref.current,R=[b,...Dt(b)];return d==="forwards"?R:R.reverse()});return(d==="forwards"?v.reverse():v).flat()},[u]);return s.useEffect(()=>{const d=E.current;if(d){const C=v=>{var R,g,P;const x=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!x){const O=document.activeElement,_=v.shiftKey;if(v.target===d&&_){(R=i.current)==null||R.focus();return}const F=p({tabbingDirection:_?"backwards":"forwards"}),U=F.findIndex(T=>T===O);Z(F.slice(U+1))?v.preventDefault():_?(g=i.current)==null||g.focus():(P=m.current)==null||P.focus()}};return d.addEventListener("keydown",C),()=>d.removeEventListener("keydown",C)}},[u,p]),f.jsxs(ut,{ref:l,role:"region","aria-label":r.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&f.jsx(ne,{ref:i,onFocusFromOutsideViewport:()=>{const d=p({tabbingDirection:"forwards"});Z(d)}}),f.jsx(ie.Slot,{scope:o,children:f.jsx(N.ol,{tabIndex:-1,...a,ref:w})}),y&&f.jsx(ne,{ref:m,onFocusFromOutsideViewport:()=>{const d=p({tabbingDirection:"backwards"});Z(d)}})]})});Ae.displayName=Ne;var Oe="ToastFocusProxy",ne=s.forwardRef((e,t)=>{const{__scopeToast:o,onFocusFromOutsideViewport:n,...r}=e,a=z(Oe,o);return f.jsx(re,{"aria-hidden":!0,tabIndex:0,...r,ref:t,style:{position:"fixed"},onFocus:c=>{var i;const u=c.relatedTarget;!((i=a.viewport)!=null&&i.contains(u))&&n()}})});ne.displayName=Oe;var q="Toast",Tt="toast.swipeStart",Ct="toast.swipeMove",xt="toast.swipeCancel",Pt="toast.swipeEnd",_e=s.forwardRef((e,t)=>{const{forceMount:o,open:n,defaultOpen:r,onOpenChange:a,...c}=e,[u=!0,l]=Re({prop:n,defaultProp:r,onChange:a});return f.jsx(oe,{present:o||u,children:f.jsx(gt,{open:u,...c,ref:t,onClose:()=>l(!1),onPause:D(e.onPause),onResume:D(e.onResume),onSwipeStart:S(e.onSwipeStart,i=>{i.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:S(e.onSwipeMove,i=>{const{x:m,y:E}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","move"),i.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${E}px`)}),onSwipeCancel:S(e.onSwipeCancel,i=>{i.currentTarget.setAttribute("data-swipe","cancel"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:S(e.onSwipeEnd,i=>{const{x:m,y:E}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","end"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${E}px`),l(!1)})})})});_e.displayName=q;var[bt,Rt]=ge(q,{onClose(){}}),gt=s.forwardRef((e,t)=>{const{__scopeToast:o,type:n="foreground",duration:r,open:a,onClose:c,onEscapeKeyDown:u,onPause:l,onResume:i,onSwipeStart:m,onSwipeMove:E,onSwipeCancel:w,onSwipeEnd:h,...y}=e,p=z(q,o),[d,C]=s.useState(null),v=M(t,T=>C(T)),x=s.useRef(null),b=s.useRef(null),R=r||p.duration,g=s.useRef(0),P=s.useRef(R),O=s.useRef(0),{onToastAdd:_,onToastRemove:L}=p,k=D(()=>{var A;(d==null?void 0:d.contains(document.activeElement))&&((A=p.viewport)==null||A.focus()),c()}),F=s.useCallback(T=>{!T||T===1/0||(window.clearTimeout(O.current),g.current=new Date().getTime(),O.current=window.setTimeout(k,T))},[k]);s.useEffect(()=>{const T=p.viewport;if(T){const A=()=>{F(P.current),i==null||i()},I=()=>{const V=new Date().getTime()-g.current;P.current=P.current-V,window.clearTimeout(O.current),l==null||l()};return T.addEventListener(ee,I),T.addEventListener(te,A),()=>{T.removeEventListener(ee,I),T.removeEventListener(te,A)}}},[p.viewport,R,l,i,F]),s.useEffect(()=>{a&&!p.isClosePausedRef.current&&F(R)},[a,R,p.isClosePausedRef,F]),s.useEffect(()=>(_(),()=>L()),[_,L]);const U=s.useMemo(()=>d?ke(d):null,[d]);return p.viewport?f.jsxs(f.Fragment,{children:[U&&f.jsx(St,{__scopeToast:o,role:"status","aria-live":n==="foreground"?"assertive":"polite","aria-atomic":!0,children:U}),f.jsx(bt,{scope:o,onClose:k,children:Ee.createPortal(f.jsx(ie.ItemSlot,{scope:o,children:f.jsx(ct,{asChild:!0,onEscapeKeyDown:S(u,()=>{p.isFocusedToastEscapeKeyDownRef.current||k(),p.isFocusedToastEscapeKeyDownRef.current=!1}),children:f.jsx(N.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":p.swipeDirection,...y,ref:v,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:S(e.onKeyDown,T=>{T.key==="Escape"&&(u==null||u(T.nativeEvent),T.nativeEvent.defaultPrevented||(p.isFocusedToastEscapeKeyDownRef.current=!0,k()))}),onPointerDown:S(e.onPointerDown,T=>{T.button===0&&(x.current={x:T.clientX,y:T.clientY})}),onPointerMove:S(e.onPointerMove,T=>{if(!x.current)return;const A=T.clientX-x.current.x,I=T.clientY-x.current.y,V=!!b.current,$=["left","right"].includes(p.swipeDirection),B=["left","up"].includes(p.swipeDirection)?Math.min:Math.max,$e=$?B(0,A):0,Ue=$?0:B(0,I),G=T.pointerType==="touch"?10:2,K={x:$e,y:Ue},fe={originalEvent:T,delta:K};V?(b.current=K,X(Ct,E,fe,{discrete:!1})):ve(K,p.swipeDirection,G)?(b.current=K,X(Tt,m,fe,{discrete:!1}),T.target.setPointerCapture(T.pointerId)):(Math.abs(A)>G||Math.abs(I)>G)&&(x.current=null)}),onPointerUp:S(e.onPointerUp,T=>{const A=b.current,I=T.target;if(I.hasPointerCapture(T.pointerId)&&I.releasePointerCapture(T.pointerId),b.current=null,x.current=null,A){const V=T.currentTarget,$={originalEvent:T,delta:A};ve(A,p.swipeDirection,p.swipeThreshold)?X(Pt,h,$,{discrete:!0}):X(xt,w,$,{discrete:!0}),V.addEventListener("click",B=>B.preventDefault(),{once:!0})}})})})}),p.viewport)})]}):null}),St=e=>{const{__scopeToast:t,children:o,...n}=e,r=z(q,t),[a,c]=s.useState(!1),[u,l]=s.useState(!1);return Ot(()=>c(!0)),s.useEffect(()=>{const i=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(i)},[]),u?null:f.jsx(be,{asChild:!0,children:f.jsx(re,{...n,children:a&&f.jsxs(f.Fragment,{children:[r.label," ",o]})})})},Nt="ToastTitle",De=s.forwardRef((e,t)=>{const{__scopeToast:o,...n}=e;return f.jsx(N.div,{...n,ref:t})});De.displayName=Nt;var At="ToastDescription",Ie=s.forwardRef((e,t)=>{const{__scopeToast:o,...n}=e;return f.jsx(N.div,{...n,ref:t})});Ie.displayName=At;var Me="ToastAction",Le=s.forwardRef((e,t)=>{const{altText:o,...n}=e;return o.trim()?f.jsx(je,{altText:o,asChild:!0,children:f.jsx(ae,{...n,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Me}\`. Expected non-empty \`string\`.`),null)});Le.displayName=Me;var Fe="ToastClose",ae=s.forwardRef((e,t)=>{const{__scopeToast:o,...n}=e,r=Rt(Fe,o);return f.jsx(je,{asChild:!0,children:f.jsx(N.button,{type:"button",...n,ref:t,onClick:S(e.onClick,r.onClose)})})});ae.displayName=Fe;var je=s.forwardRef((e,t)=>{const{__scopeToast:o,altText:n,...r}=e;return f.jsx(N.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...r,ref:t})});function ke(e){const t=[];return Array.from(e.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&t.push(n.textContent),_t(n)){const r=n.ariaHidden||n.hidden||n.style.display==="none",a=n.dataset.radixToastAnnounceExclude==="";if(!r)if(a){const c=n.dataset.radixToastAnnounceAlt;c&&t.push(c)}else t.push(...ke(n))}}),t}function X(e,t,o,{discrete:n}){const r=o.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:o});t&&r.addEventListener(e,t,{once:!0}),n?he(r,a):r.dispatchEvent(a)}var ve=(e,t,o=0)=>{const n=Math.abs(e.x),r=Math.abs(e.y),a=n>r;return t==="left"||t==="right"?a&&n>o:!a&&r>o};function Ot(e=()=>{}){const t=D(e);W(()=>{let o=0,n=0;return o=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(n)}},[t])}function _t(e){return e.nodeType===e.ELEMENT_NODE}function Dt(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const r=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||r?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function Z(e){const t=document.activeElement;return e.some(o=>o===t?!0:(o.focus(),document.activeElement!==t))}var Bt=Se,Kt=Ae,Ht=_e,Xt=De,Yt=Ie,zt=Le,qt=ae,It=Ke.useId||(()=>{}),Mt=0;function Lt(e){const[t,o]=s.useState(It());return W(()=>{e||o(n=>n??String(Mt++))},[e]),e||(t?`radix-${t}`:"")}var ce="Collapsible",[Ft,Gt]=ye(ce),[jt,ue]=Ft(ce),We=s.forwardRef((e,t)=>{const{__scopeCollapsible:o,open:n,defaultOpen:r,disabled:a,onOpenChange:c,...u}=e,[l=!1,i]=Re({prop:n,defaultProp:r,onChange:c});return f.jsx(jt,{scope:o,disabled:a,contentId:Lt(),open:l,onOpenToggle:s.useCallback(()=>i(m=>!m),[i]),children:f.jsx(N.div,{"data-state":de(l),"data-disabled":a?"":void 0,...u,ref:t})})});We.displayName=ce;var Ve="CollapsibleTrigger",kt=s.forwardRef((e,t)=>{const{__scopeCollapsible:o,...n}=e,r=ue(Ve,o);return f.jsx(N.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":de(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...n,ref:t,onClick:S(e.onClick,r.onOpenToggle)})});kt.displayName=Ve;var le="CollapsibleContent",Wt=s.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=ue(le,e.__scopeCollapsible);return f.jsx(oe,{present:o||r.open,children:({present:a})=>f.jsx(Vt,{...n,ref:t,present:a})})});Wt.displayName=le;var Vt=s.forwardRef((e,t)=>{const{__scopeCollapsible:o,present:n,children:r,...a}=e,c=ue(le,o),[u,l]=s.useState(n),i=s.useRef(null),m=M(t,i),E=s.useRef(0),w=E.current,h=s.useRef(0),y=h.current,p=c.open||u,d=s.useRef(p),C=s.useRef();return s.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),W(()=>{const v=i.current;if(v){C.current=C.current||{transitionDuration:v.style.transitionDuration,animationName:v.style.animationName},v.style.transitionDuration="0s",v.style.animationName="none";const x=v.getBoundingClientRect();E.current=x.height,h.current=x.width,d.current||(v.style.transitionDuration=C.current.transitionDuration,v.style.animationName=C.current.animationName),l(n)}},[c.open,n]),f.jsx(N.div,{"data-state":de(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!p,...a,ref:m,style:{"--radix-collapsible-content-height":w?`${w}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style},children:p&&r})});function de(e){return e?"open":"closed"}var Zt=We;export{zt as A,qt as C,Yt as D,Bt as P,Ht as R,Xt as T,Kt as V,Zt as a,kt as b,Wt as c};
