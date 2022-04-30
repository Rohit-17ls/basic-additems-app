(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={editor:"Editor_editor__1g6UU",languageBar:"Editor_languageBar__2Rzo5",icons:"Editor_icons__2yGTR",locked:"Editor_locked__Ao47L",icon:"Editor_icon__2lWl5",copy:"Editor_copy__10r7b",edit:"Editor_edit__3qD_P"}},,,function(e,t,n){e.exports={dashboard:"Dashboard_dashboard__CkP5_",dashboardControls:"Dashboard_dashboardControls__q3GFj",header:"Dashboard_header__3iZPt",utilites:"Dashboard_utilites__2y0wA",utility:"Dashboard_utility__1Y2pN"}},,function(e,t,n){e.exports={pair:"TreeNodePair_pair__32SNv",singlenode:"TreeNodePair_singlenode__2DZl9"}},function(e,t,n){e.exports={console:"UserConsole_console__1jMjw",consoleHolder:"UserConsole_consoleHolder__2kDMC",consoleHeader:"UserConsole_consoleHeader__2de3x"}},,,,function(e,t,n){e.exports={navbar:"Navbar_navbar__1FEEA"}},function(e,t,n){e.exports={row:"TreeRow_row__1IxJF",firstrow:"TreeRow_firstrow__1pzc_"}},,,function(e,t,n){e.exports={footer:"Footer_footer__qMrbq",icons:"Footer_icons__K9jIx",icon:"Footer_icon__3i1Si"}},,,,,,,,function(e,t,n){e.exports={button:"Button_button__3W9WG"}},function(e,t,n){e.exports={stripe:"MenuIcon_stripe__3KZeF",holder:"MenuIcon_holder__30WMh"}},function(e,t,n){e.exports={treeparentbody:"TreeParentBody_treeparentbody__3ilh5"}},function(e,t,n){e.exports={node:"TreeNode_node__YOO_3",hidden:"TreeNode_hidden__E0Wok"}},function(e,t,n){e.exports={sandwich:"TreeSandwich_sandwich__2WhoG"}},function(e,t,n){e.exports={message:"Message_message__2-eXH"}},function(e,t,n){e.exports={spinner:"Spinner_spinner__pUu67",spin:"Spinner_spin__2QYKg"}},,,,,,,function(e,t,n){},,,function(e,t,n){},function(e){e.exports=JSON.parse('[{"header":"#include <stdio.h>\\n#include <stdlib.h>\\n","structure":"struct Node{\\n    int val;\\n    struct Node *left;\\n    struct Node *right;\\n}\\n\\n","createNode":"struct Node *createNode(int data){\\n    struct Node *newnode = (struct Node *) malloc(sizeof(struct Node));\\n      newnode->data = data;\\n      newnode->left = NULL;\\n      newnode->right = NULL;\\n      return newnode;\\n}","preOrderTraversal":"void preOrderTraversal(struct Node *root){\\n    if(root!=NULL){        \\n        printf(\\"%d \\", root->data);\\n        inOrderTraversal(root->left);    \\n        inOrderTraversal(root->right);\\n    }\\n    printf(\\"\\\\n\\");\\n}\\n","inOrderTraversal":"void inOrderTraversal(struct Node *root){\\n    if(root!=NULL){\\n        inOrderTraversal(root->left);\\n        printf(\\"%d \\", root->data);\\n        inOrderTraversal(root->right);\\n    }\\n    printf(\\"\\\\n\\");\\n}\\n","postOrderTraversal":"void postOrderTraversal(struct Node *root){\\n      if(root!=NULL){\\n        postOrderTraversal(root->left);\\n            postOrderTraversal(root->right);\\n            printf(\\"%d\\", root->data);\\n      }\\n    printf(\\"\\\\n\\");\\n}\\n","invertBinaryTree":"void InvertBinaryTree(struct Node *node){\\n\\n  if(node != NULL){\\n    InvertBinaryTree(node->left);\\n    InvertBinaryTree(node->right);\\n\\n    struct Node *temp = node->left;\\n    node->left = node->right;\\n    node->right = temp;\\n  }\\n\\n}\\n","nodePointerDeclaration":"struct Node *","nodeLeft":"->left = ","nodeRight":"->right = ","startComment":"/*  Do not make changes to the below code */","endComment":"/* ------------------------------------------- */"}]')},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(23),a=n.n(o),i=(n(38),n(24)),l=n(4),s=n(2),c=n(12),d=n.n(c),u=n(13),h=n.n(u),j=n(25),f=n.n(j),b=n(0),p=function(e){return Object(b.jsx)("button",{className:"".concat(e.className||""," ").concat(f.a.button),type:e.type,onClick:e.onClick,children:e.children})},g=n(26),v=n.n(g),x=function(e){var t=-100;return Object(b.jsx)("div",{className:v.a.holder,onClick:function(){t=t?0:-100,e.expandSidebar(t)},children:Object(b.jsxs)("svg",{viewBox:"0 0 100 80",width:"40",height:"40",children:[Object(b.jsx)("rect",{width:"100",height:"18",rx:"10",ry:"10"}),Object(b.jsx)("rect",{y:"30",width:"100",height:"18",rx:"10",ry:"10"}),Object(b.jsx)("rect",{y:"60",width:"100",height:"18",rx:"10",ry:"10"})]})})},O=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:h.a.navbar,children:[Object(b.jsx)(x,{expandSidebar:e.expandSidebar}),Object(b.jsxs)("span",{className:h.a.header,children:["Broccoli ",Object(b.jsx)("small",{style:{fontSize:"0.7em"},children:"by Unamed Inc"})]})]})})},w=n(27),m=n.n(w),C=function(e){return Object(b.jsx)("section",{className:"".concat(m.a.treeparentbody," ").concat(e.className),children:e.children})},_=n(14),k=n.n(_),y=n(8),L=n.n(y),N=n(28),T=n.n(N),M=function(e){return Object(b.jsx)("input",{className:"".concat(T.a.node," ").concat(e.show?"":"hidden"),placeholder:e.value||"",type:"number",onChange:e.inputChangeHandler,"data-id":e.identifier,style:{visibility:e.show?"visible":"hidden"}})},R=function(e){var t,n,r,o,a,i,l;return n=(t=e.setId())[0],r=t[1],o=t[2],a=t[3],i=t[4],l=t[5],Object(b.jsxs)("div",{className:L.a.pair,style:{width:"".concat(e.pairwidth,"%"),justifyContent:""},children:[Object(b.jsx)(M,{inputChangeHandler:e.inputChangeHandler,value:i,identifier:n,show:o}),Object(b.jsx)(M,{inputChangeHandler:e.inputChangeHandler,value:l,identifier:r,show:a})]})},S=n(29),z=n.n(S),H=(n(41),function(e){var t=e.exceptRoot?e.width:e.width/2,n=e.width/2-10;return Object(b.jsxs)("div",{className:"--arrow-holder",style:{width:"".concat(t,"%")},children:[Object(b.jsx)("svg",{style:{transform:"rotate(".concat(n,"deg)"),stroke:"white"},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"28px",height:"150px",viewBox:"0 0 9 47",version:"1.1",children:Object(b.jsxs)("g",{id:"surface1",children:[Object(b.jsx)("path",{style:{fill:"none",strokeWidth:3,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"white",strokeOpacity:1,strokeMiterlimit:4},d:"M -0.754961 -95.123573 L 0.754947 95.923632 ",transform:"matrix(0.248359,0,0,0.244459,4.312502,23.402209)"}),Object(b.jsx)("path",{style:{fill:"none",strokeWidth:3,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"white",strokeOpacity:1,strokeMiterlimit:4},d:"M -9.05946 12.834643 L 9.059437 -12.827937 ",transform:"matrix(0.248359,0,0,0.244459,6.750003,43.518712)"}),Object(b.jsx)("path",{style:{fill:"none",strokeWidth:3,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"white",strokeOpacity:1,strokeMiterlimit:4},d:"M 9.059445 12.834643 L -9.059451 -12.827937 ",transform:"matrix(0.248359,0,0,0.244459,2.250001,43.518712)"})]})}),Object(b.jsx)("svg",{style:{transform:"rotate(-".concat(n,"deg)"),stroke:"white"},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"28px",height:"150px",viewBox:"0 0 9 47",version:"1.1",children:Object(b.jsxs)("g",{id:"surface1",children:[Object(b.jsx)("path",{style:{fill:"none",strokeWidth:3,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"white",strokeOpacity:1,strokeMiterlimit:4},d:"M -0.754961 -95.123573 L 0.754947 95.923632 ",transform:"matrix(0.248359,0,0,0.244459,4.312502,23.402209)"}),Object(b.jsx)("path",{style:{fill:"none",strokeWidth:3,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"white",strokeOpacity:1,strokeMiterlimit:4},d:"M -9.05946 12.834643 L 9.059437 -12.827937 ",transform:"matrix(0.248359,0,0,0.244459,6.750003,43.518712)"}),Object(b.jsx)("path",{style:{fill:"none",strokeWidth:3,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"white",strokeOpacity:1,strokeMiterlimit:4},d:"M 9.059445 12.834643 L -9.059451 -12.827937 ",transform:"matrix(0.248359,0,0,0.244459,2.250001,43.518712)"})]})})]})}),B=function(e){var t=e.exceptRoot?1:2*e.pairs;return Object(b.jsx)("div",{className:z.a.sandwich,children:e.endif!==e.pairs&&Object(l.a)(Array(t)).map((function(t,n){return Object(b.jsx)(H,{width:100/e.pairs,exceptRoot:e.exceptRoot})}))})},I=function(e){return Object(b.jsxs)("div",{className:k.a.row,children:[e.pairs>0&&Object(l.a)(Array(e.pairs)).map((function(t,n){return Object(b.jsx)(R,{pairwidth:100/e.pairs,inputChangeHandler:e.inputChangeHandler,setId:e.setId},Math.random(1,100))})),!e.pairs&&Object(b.jsxs)("div",{className:k.a.firstrow,children:[Object(b.jsx)("div",{className:L.a.singlenode,children:Object(b.jsx)(M,{value:e.rootValue,inputChangeHandler:e.inputChangeHandler,identifier:e.rootId,show:!0})}),Object(b.jsx)(B,{endif:0,pairs:1,exceptRoot:1})]})]})},P=n(30),D=n.n(P),A=function(e){return Object(b.jsx)("div",{className:D.a.message,children:e.message})},E=n(6),F=n.n(E),W=function(e){var t=Object(r.useState)([{text:"Add a new row",action:e.actions[0]},{text:"Inorder Traversal",action:e.actions[1]},{text:"Preorder Traversal",action:e.actions[2]},{text:"Postorder Traversal",action:e.actions[3]},{text:"Invert Binary Tree",action:e.actions[4]},{text:"".concat(e.nullState," Empty Nodes"),action:e.actions[5]}]),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(r.useState)(!0),c=Object(s.a)(i,2),d=c[0],u=c[1];return Object(b.jsxs)("section",{className:F.a.dashboard,ref:e.dashRef,children:[Object(b.jsx)("span",{className:F.a.header,children:"DASHBOARD"}),Object(b.jsxs)("div",{className:F.a.dashboardControls,children:[Object(b.jsx)(p,{type:"button",onClick:e.actions[0],children:"Add a new row"}),Object(l.a)(Array(6)).map((function(e,t){return Object(b.jsxs)(p,{type:"button",onClick:function(){o[t].action(),d&&a((function(e){return t>0?[e[t]].concat(e.slice(0,t)).concat(e.slice(t+1)):e}))},children:[" ",o[t].text," "]},t)})),Object(b.jsx)("div",{className:F.a.utilites,children:Object(b.jsxs)("div",{className:F.a.utility,children:["Dynamic Button ordering",Object(b.jsx)("input",{type:"checkbox",checked:d,onChange:function(){u((function(e){return!e}))}})]})})]})]})},U=n(9),V=n.n(U),q=function(){return Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"w-7 h-7",title:"Copy To Clipboard","aria-hidden":"true",children:[Object(b.jsx)("rect",{x:9,y:9,width:13,height:13,rx:2,ry:2}),Object(b.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})},G=n(31),J=n.n(G),X=function(){return Object(b.jsx)("div",{className:J.a.spinner})},K=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:V.a.consoleHolder,id:"userConsole",children:Object(b.jsxs)("div",{className:V.a.console,children:[Object(b.jsxs)("div",{className:V.a.consoleHeader,children:[Object(b.jsx)("h3",{style:{fontWeight:"bold"},children:"Console : "}),!e.message[0]||Object(b.jsx)("button",{onClick:function(){var e=document.getElementById("results").innerText;navigator.clipboard.writeText(e)},children:Object(b.jsx)(q,{})})]}),e.loading?Object(b.jsx)(X,{}):Object(b.jsx)("pre",{id:"results",style:{color:e.message[0]?"white":"red"},children:e.message[1]})]})})})},Y=n(32),Z=n(15),Q=n(16),$=function(e){var t,n,r=[],o=[],a=0,i=Object(Z.a)((function e(t){Object(Q.a)(this,e),this.value=t,this.left=null,this.right=null})),s=function(){function e(t){Object(Q.a)(this,e),this.arr=t,this.root=new i(t[0])}return Object(Z.a)(e,[{key:"Validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;return a++,console.log("Left : ".concat(e.left.value," Right : ").concat(e.right.value)),e.left.value<e.right.value?(this.Validate(e.left),this.Validate(e.right),[1,1]):[0,a]}},{key:"InorderTraversal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;0!==e.value&&(this.InorderTraversal(e.left),o.push(e.value),this.InorderTraversal(e.right))}},{key:"PostorderTraversal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;0!==e.value&&(this.PreorderTraversal(e.left),this.PreorderTraversal(e.right),o.push(e.value))}},{key:"PreorderTraversal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;0!==e.value&&(o.push(e.value),this.PostorderTraversal(e.left),this.PostorderTraversal(e.right))}},{key:"start",value:function(){var e,o=Object(Y.a)(this.arr.slice(1));try{for(o.s();!(e=o.n()).done;){var a=e.value;r.push(new i(a))}}catch(s){o.e(s)}finally{o.f()}r=[this.root].concat(Object(l.a)(r)),this.root.left=r[1],this.root.right=r[2],t=3,n=4}},{key:"init",value:function(){for(var e=1;n<r.length;)r[e].left=r[t],r[e].right=r[n],t+=2,n+=2,e++}}]),e}(),c=new s(Object.values(pe).map((function(e){return e.value})));return c.start(),c.init(),console.log(r),new Promise((function(t){setTimeout((function(){if(c.Validate()[0]){switch(e){case 1:console.log("Inorder Traversal"),c.InorderTraversal();break;case 2:console.log("Preorder Traversal"),c.PreorderTraversal();break;case 3:console.log("Postorder Traversal"),c.PostorderTraversal()}t([1,o])}else t([0,a])}),200)}))},ee=(n(42),n(17)),te=n.n(ee),ne=function(e){return Object(b.jsx)("section",{className:te.a.footer,children:Object(b.jsx)("div",{className:te.a.icons})})},re=n(18),oe=n.n(re),ae=n(33),ie=n.n(ae),le=(n(43),n(3)),se=n.n(le),ce=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("svg",{x:"0px",y:"0px",width:48,height:48,viewBox:"0 0 48 48",style:{fill:"#000000"},children:[Object(b.jsx)("path",{fill:"#283593",fillRule:"evenodd",d:"M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#5c6bc0",fillRule:"evenodd",d:"M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#3949ab",fillRule:"evenodd",d:"M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z",clipRule:"evenodd"})]})})},de=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("svg",{x:"0px",y:"0px",width:48,height:48,viewBox:"0 0 48 48",style:{fill:"#000000"},children:[Object(b.jsx)("path",{fill:"#00549d",fillRule:"evenodd",d:"M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#0086d4",fillRule:"evenodd",d:"M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#0075c0",fillRule:"evenodd",d:"M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M31 21H33V27H31zM38 21H40V27H38z",clipRule:"evenodd"}),Object(b.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M29 23H35V25H29zM36 23H42V25H36z",clipRule:"evenodd"})]})})},ue=function(){return Object(b.jsx)("svg",{id:"body_1",width:80,height:80,children:Object(b.jsx)("g",{transform:"matrix(0.31434184 0 0 0.31434184 -0 4.6365423)",children:Object(b.jsxs)("g",{children:[Object(b.jsx)("g",{children:Object(b.jsx)("g",{children:Object(b.jsx)("g",{children:Object(b.jsx)("path",{d:"M40.2 101.1C 39.8 101.1 39.7 100.9 39.9 100.6L39.9 100.6L42 97.9C 42.2 97.6 42.7 97.4 43.1 97.4L43.1 97.4L78.8 97.4C 79.200005 97.4 79.3 97.700005 79.100006 98L79.100006 98L77.40001 100.6C 77.20001 100.9 76.70001 101.2 76.40001 101.2L76.40001 101.2L40.2 101.1z",stroke:"none",fill:"#00ACD7",fillRule:"nonzero"})})})}),Object(b.jsx)("g",{children:Object(b.jsx)("g",{children:Object(b.jsx)("g",{children:Object(b.jsx)("path",{d:"M25.1 110.3C 24.7 110.3 24.6 110.100006 24.800001 109.8L24.800001 109.8L26.900002 107.100006C 27.100002 106.8 27.600002 106.600006 28.000002 106.600006L28.000002 106.600006L73.6 106.600006C 74 106.600006 74.2 106.90001 74.1 107.200005L74.1 107.200005L73.299995 109.600006C 73.2 110.00001 72.799995 110.200005 72.399994 110.200005L72.399994 110.200005L25.1 110.3z",stroke:"none",fill:"#00ACD7",fillRule:"nonzero"})})})}),Object(b.jsx)("g",{children:Object(b.jsx)("g",{children:Object(b.jsx)("g",{children:Object(b.jsx)("path",{d:"M49.3 119.5C 48.899998 119.5 48.8 119.2 49 118.9L49 118.9L50.4 116.4C 50.600002 116.1 51 115.8 51.4 115.8L51.4 115.8L71.4 115.8C 71.8 115.8 72 116.100006 72 116.5L72 116.5L71.8 118.9C 71.8 119.3 71.4 119.6 71.100006 119.6L71.100006 119.6L49.3 119.5z",stroke:"none",fill:"#00ACD7",fillRule:"nonzero"})})})}),Object(b.jsx)("g",{children:Object(b.jsx)("g",{children:Object(b.jsxs)("g",{children:[Object(b.jsx)("g",{children:Object(b.jsx)("path",{d:"M153.1 99.3C 146.8 100.9 142.5 102.100006 136.3 103.700005C 134.8 104.100006 134.7 104.200005 133.40001 102.700005C 131.90001 101.00001 130.8 99.9 128.70001 98.9C 122.40001 95.8 116.30001 96.700005 110.60001 100.4C 103.80001 104.8 100.30001 111.3 100.40002 119.4C 100.500015 127.4 106.000015 134 113.90002 135.1C 120.70002 136 126.40002 133.6 130.90002 128.5C 131.80002 127.4 132.60002 126.2 133.60002 124.8C 130.00002 124.8 125.50002 124.8 114.30002 124.8C 112.20002 124.8 111.70002 123.5 112.40002 121.8C 113.70002 118.700005 116.10001 113.5 117.500015 110.9C 117.80002 110.3 118.500015 109.3 120.000015 109.3C 125.10001 109.3 143.90001 109.3 156.40002 109.3C 156.20003 112 156.20003 114.700005 155.80002 117.4C 154.70001 124.6 152.00002 131.2 147.60002 137C 140.40002 146.5 131.00002 152.4 119.10002 154C 109.30002 155.3 100.20002 153.4 92.20002 147.4C 84.80002 141.79999 80.60002 134.4 79.50002 125.2C 78.20002 114.299995 81.400024 104.5 88.00002 95.899994C 95.10002 86.59999 104.50002 80.7 116.00002 78.59999C 125.400024 76.899994 134.40002 77.99999 142.50003 83.49999C 147.80003 86.99999 151.60004 91.799995 154.10004 97.59999C 154.7 98.5 154.3 99 153.1 99.3z",stroke:"none",fill:"#00ACD7",fillRule:"nonzero"})}),Object(b.jsx)("g",{children:Object(b.jsx)("path",{d:"M186.2 154.6C 177.09999 154.40001 168.8 151.8 161.8 145.8C 155.90001 140.7 152.2 134.2 151 126.5C 149.2 115.2 152.3 105.2 159.1 96.3C 166.40001 86.700005 175.20001 81.700005 187.1 79.600006C 197.3 77.8 206.90001 78.8 215.6 84.700005C 223.5 90.100006 228.40001 97.4 229.70001 107C 231.40001 120.5 227.50002 131.5 218.20001 140.9C 211.6 147.59999 203.50002 151.79999 194.20001 153.7C 191.5 154.2 188.8 154.3 186.2 154.6zM210 114.2C 209.9 112.899994 209.9 111.899994 209.7 110.899994C 207.9 100.99999 198.8 95.399994 189.3 97.59999C 180 99.69999 174 105.59999 171.8 114.99999C 170 122.799995 173.8 130.7 181 133.9C 186.5 136.29999 192 136 197.3 133.29999C 205.2 129.2 209.5 122.8 210 114.2z",stroke:"none",fill:"#00ACD7",fillRule:"nonzero"})})]})})})]})})})},he=function(){return Object(b.jsxs)("svg",{x:"0px",y:"0px",width:48,height:48,viewBox:"0 0 48 48",style:{fill:"#000000"},children:[Object(b.jsx)("path",{fill:"#ffd600",d:"M6,42V6h36v36H6z"}),Object(b.jsx)("path",{fill:"#000001",d:"M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"})]})},je=function(){return Object(b.jsx)("svg",{id:"body_1",width:194,height:194,children:Object(b.jsx)("g",{transform:"matrix(3.180328 0 0 3.180328 0 0)",children:Object(b.jsx)("g",{transform:"matrix(3.05 0 0 3.05 0 0)",children:Object(b.jsx)("path",{d:"M3 9L4 9L4 6C 4 2.6862912 6.6862917 0 10 0C 13.313709 0 16 2.6862912 16 6L16 6L16 9L17 9L17 20L3 20L3 9zM14 9L14 6C 14 4.5709376 13.237604 3.2504294 12 2.5358982C 10.762396 1.8213673 9.237604 1.8213673 7.9999995 2.5358984C 6.762395 3.2504299 6 4.5709376 6 6L6 6L6 9",stroke:"none",fill:"deepskyblue",fillRule:"nonzero"})})})})},fe=[{langName:"C",langCode:"c"},{langName:"C++",langCode:"cpp"},{langName:"Go",langCode:"go"},{langName:"Javascript",langCode:"js"}],be=function(){var e=Object(r.useRef)(),t=Object(r.useState)(0),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(r.useState)("#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]){\n\treturn 0;\n\n}"),l=Object(s.a)(i,2),c=l[0],d=l[1];return Object(r.useEffect)((function(){!1!==c&&(console.log("used effect"),oe.a.registerLanguage("c",ie.a),oe.a.highlightElement(e.current))}),[c]),Object(r.useEffect)((function(){switch(o){case 0:console.log("C"),d("#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]){\n\treturn 0;\n\n}");break;case 1:console.log("C++"),d(!1);break;case 2:console.log("Go"),d(!1);break;case 3:console.log("Javascript"),d(!1)}}),[o]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"editor",className:se.a.editor,children:[Object(b.jsxs)("div",{className:se.a.languageBar,children:[Object(b.jsxs)("div",{className:se.a.icons,children:[Object(b.jsx)("span",{className:se.a.icon,style:{background:0===o?"linear-gradient(-157deg,#072026, #0e667c,#072026)":"linear-gradient(157deg,#000, #072026,#000)"},onClick:function(){return a(0)},children:Object(b.jsx)(ce,{})}),Object(b.jsx)("span",{className:se.a.icon,style:{background:1===o?"linear-gradient(-157deg,#072026, #0e667c,#072026)":"linear-gradient(157deg,#000, #072026,#000)"},onClick:function(){return a(1)},children:Object(b.jsx)(de,{})}),Object(b.jsx)("span",{className:se.a.icon,style:{background:2===o?"linear-gradient(-157deg,#072026, #0e667c,#072026)":"linear-gradient(157deg,#000, #072026,#000)"},onClick:function(){return a(2)},children:Object(b.jsx)(ue,{})}),Object(b.jsx)("span",{className:se.a.icon,style:{background:3===o?"linear-gradient(-157deg,#072026, #0e667c,#072026)":"linear-gradient(157deg,#000, #072026,#000)"},onClick:function(){return a(3)},children:Object(b.jsx)(he,{})})]}),Object(b.jsx)("div",{className:se.a.copy,onClick:function(){navigator.clipboard.writeText(e.current.innerText)},children:Object(b.jsx)(q,{})})]}),!c&&Object(b.jsxs)("div",{className:se.a.locked,children:[Object(b.jsx)(je,{}),"Coming Soon in ",fe[o].langName," !!!"]}),c&&Object(b.jsx)("pre",{ref:e,className:"hljs language-c ".concat(se.a.edit),children:Object(b.jsx)("code",{children:c})})]})})},pe={"node-0-0":{parent:null,show:!0,value:0,left:"1-0",right:"1-1",error:0},"node-1-0":{parent:"0-0",show:!0,value:0,left:"2-0",right:"2-1",error:0},"node-1-1":{parent:"0-0",show:!0,value:0,left:"2-2",right:"2-3",error:0},"node-2-0":{parent:"1-0",show:!0,value:0,left:"3-0",right:"3-1",error:0},"node-2-1":{parent:"1-0",show:!0,value:0,left:"3-2",right:"3-3",error:0},"node-2-2":{parent:"1-1",show:!0,value:0,left:"3-4",right:"3-5",error:0},"node-2-3":{parent:"1-1",show:!0,value:0,left:"3-6",right:"3-7",error:0},"node-3-0":{parent:"2-0",show:!0,value:0,left:"4-0",right:"4-1",error:0},"node-3-1":{parent:"2-0",show:!0,value:0,left:"4-2",right:"4-3",error:0},"node-3-2":{parent:"2-1",show:!0,value:0,left:"4-4",right:"4-5",error:0},"node-3-3":{parent:"2-1",show:!0,value:0,left:"4-6",right:"4-7",error:0},"node-3-4":{parent:"2-2",show:!0,value:0,left:"4-8",right:"4-9",error:0},"node-3-5":{parent:"2-2",show:!0,value:0,left:"4-10",right:"4-11",error:0},"node-3-6":{parent:"2-3",show:!0,value:0,left:"4-12",right:"4-13",error:0},"node-3-7":{parent:"2-3",show:!0,value:0,left:"4-14",right:"4-15",error:0},"node-4-0":{parent:"3-0",show:!0,value:0,left:null,right:null,error:0},"node-4-1":{parent:"3-0",show:!0,value:0,left:null,right:null,error:0},"node-4-2":{parent:"3-1",show:!0,value:0,left:null,right:null,error:0},"node-4-3":{parent:"3-1",show:!0,value:0,left:null,right:null,error:0},"node-4-4":{parent:"3-2",show:!0,value:0,left:null,right:null,error:0},"node-4-5":{parent:"3-2",show:!0,value:0,left:null,right:null,error:0},"node-4-6":{parent:"3-3",show:!0,value:0,left:null,right:null,error:0},"node-4-7":{parent:"3-3",show:!0,value:0,left:null,right:null,error:0},"node-4-8":{parent:"3-4",show:!0,value:0,left:null,right:null,error:0},"node-4-9":{parent:"3-4",show:!0,value:0,left:null,right:null,error:0},"node-4-10":{parent:"3-5",show:!0,value:0,left:null,right:null,error:0},"node-4-11":{parent:"3-5",show:!0,value:0,left:null,right:null,error:0},"node-4-12":{parent:"3-6",show:!0,value:0,left:null,right:null,error:0},"node-4-13":{parent:"3-6",show:!0,value:0,left:null,right:null,error:0},"node-4-14":{parent:"3-7",show:!0,value:0,left:null,right:null,error:0},"node-4-15":{parent:"3-7",show:!0,value:0,left:null,right:null}},ge=["node-1-0","node-1-1","node-2-0","node-2-1","node-2-2","node-2-3","node-3-0","node-3-1","node-3-2","node-3-3","node-3-4","node-3-5","node-3-6","node-3-7","node-4-0","node-4-1","node-4-2","node-4-3","node-4-4","node-4-5","node-4-6","node-4-7","node-4-8","node-4-9","node-4-10","node-4-11","node-4-12","node-4-13","node-4-14","node-4-15"],ve=null,xe=function(){var e=Object(r.useState)("Hide"),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(""),c=Object(s.a)(a,2),u=(c[0],c[1],Object(r.useState)([0,""])),h=Object(s.a)(u,2),j=h[0],f=h[1],p=Object(r.useState)([0,1]),g=Object(s.a)(p,2),v=g[0],x=g[1],w=Object(r.useState)(0),m=Object(s.a)(w,2),_=(m[0],m[1]),k=Object(r.useState)(!1),y=Object(s.a)(k,2),L=y[0],N=y[1],T=Object(r.useRef)(),M=[0,1],R=0;(console.log("Hi"),ve)&&(document.querySelector("input[data-id=".concat(ge[ve],"]")).style.background="red");var S=function e(t,n){if(t<n){var r=pe[ge[n]].value;console.log("temp",r),pe[ge[n]].value=pe[ge[t]].value,pe[ge[t]].value=r,e(t+1,n-1)}},z=function(){U(-100);for(var e=0;e<v.length;e+=2)S(e,2*e+1);console.log(pe),_((function(e){return!e}))},H=function(){var e=ge[M[0]],t=ge[M[1]],n=[e,t,pe[e].show,pe[t].show,pe[e].value,pe[t].value];return M=M.map((function(e){return e+2})),R+=2,n},P=function(){console.log("Adding Row"),U(-100),x((function(e){return[].concat(Object(l.a)(v),[2*v.at(v.length-1)])})),M=[0,1]},D=function(){U(-100);for(var e="Show"===n?"Hide":"Show",t=0;t<R;t++)pe[ge[t]].value||(pe[ge[t]].show=!1);o(e)},E=function(e){var t=e.target;pe[t.dataset.id].value=e.target.value},F=function(){var e=Object(i.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(-100),N(!0),e.next=4,$(t);case 4:n=e.sent,console.log("result"),n[0]?(N(!1),n[1]=n[1].toString(),f(n)):(N(!1),f([0,"Please Balance the Tree !!!"]),ve=n[1]-1,console.log(ge[ve]),document.querySelector("input[data-id=".concat(ge[ve],"]")).classList.add("errorNode"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){T.current.style.transform="translateX(".concat(e,"%)"),console.log(e?"Slid out":"Slid in")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{expandSidebar:U,addRow:P,toggleNullState:D,nullState:n,invertBinaryTree:z}),Object(b.jsx)(W,{dashRef:T,expanded:false,nullState:n,addRow:P,actions:[P,function(){F(1)},function(){F(2)},function(){F(3)},z,D]}),Object(b.jsx)(K,{message:j,loading:L}),Object(b.jsxs)(C,{children:[Object(b.jsx)(A,{message:"Please provide non-zero values for each node (Nodes with 0 value will be treated as null) and also do balance the Binary Tree"}),v.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{rootValue:pe["node-0-0"].value,setId:H,inputChangeHandler:E,pairs:e,rootId:"node-0-0"},1e3*Math.random()),Object(b.jsx)(B,{pairs:e,endif:v.at(v.length-1)})]})}))]}),Object(b.jsx)(be,{}),Object(b.jsx)(ne,{})]})};a.a.render(Object(b.jsx)(xe,{}),document.getElementById("root"))}],[[62,1,2]]]);
//# sourceMappingURL=main.da035816.chunk.js.map