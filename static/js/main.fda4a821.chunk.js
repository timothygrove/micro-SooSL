(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,s){e.exports=s(27)},21:function(e,t,s){},24:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var i,a,n=s(0),l=s.n(n),o=s(3),d=s.n(o),r=(s(21),s(1)),c=s(4),g=s(7),_=s(5),h=s(6),x=s(9),u=function(e){function t(){return Object(r.a)(this,t),Object(g.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("video",{className:"CitationPlayer",controls:!0,src:this.props.url,autoPlay:!0}))}}]),t}(l.a.Component),m=(s(24),function(e){var t=e.svm;return l.a.createElement("div",null,l.a.createElement("div",{className:"Header"},"micro-SooSL"),l.a.createElement("div",{className:"Top"},l.a.createElement(p,{svm:t}),l.a.createElement(T,{svm:t}),l.a.createElement(f,{svm:t})))}),p=function(e){var t=e.svm,s=t.glosses;t.selectedGloss;return l.a.createElement("div",{className:"GlossesList"},s.map(function(e){return l.a.createElement(v,{gloss:e,svm:t})}))},v=function(e){var t=e.gloss,s=e.svm,i=s.selectedGloss,a="Gloss"+(i&&i.text===t.text?" GlossSelected":"");return l.a.createElement("div",{className:a,onClick:function(){s.selectedGloss=t}},l.a.createElement("div",null,t.text))},T=function(e){var t=e.svm.selectedGloss;if(!t)return null;var s=t.sign.citation;return s?l.a.createElement("div",{className:"Citation"},l.a.createElement(u,{url:"demo/signs/".concat(s.path)})):null},f=function(e){var t=e.svm;return l.a.createElement("div",{className:"TextInfo"},l.a.createElement(E,{svm:t}),l.a.createElement(O,{svm:t}))},E=function(e){var t=e.svm.selectedGloss;if(!t)return null;var s=t.sign.glossTexts;return l.a.createElement("div",{className:"GlossTexts"},s.map(function(e){return l.a.createElement(b,{glossText:e})}))},b=function(e){var t=e.glossText;return l.a.createElement("div",{className:"GlossText"},l.a.createElement("div",null,t.text))},O=function(e){var t=e.svm.selectedGloss;if(!t)return null;var s=t.sign.sentenceTexts;return l.a.createElement("div",{className:"SentenceTexts"},s.map(function(e){return l.a.createElement(j,{sentenceText:e})}))},j=function(e){var t=e.sentenceText;return l.a.createElement("div",{className:"SentenceText"},l.a.createElement("div",null,t.text))},w=s(10),y=s(11),A=(s(14),s(2)),R=s(15),G=s.n(R),S=function e(t,s){Object(r.a)(this,e),this.text=t,this.sign=s},k=(i=function e(t){Object(r.a)(this,e),Object(w.a)(this,"selectedGloss",a,this),this.glosses=void 0,this.glosses=t},a=Object(y.a)(i.prototype,"selectedGloss",[A.j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i);var B=function e(t){Object(r.a)(this,e),this.gloss_id=0,this.citation=void 0,this.glossTexts=[],this.sentenceTexts=[],Object.assign(this,t)},N=function e(t){Object(r.a)(this,e),this.id=0,this.path="",this.hash="",Object.assign(this,t)},C=function e(t){Object(r.a)(this,e),this.gloss_id=0,this.lang_id=0,this.text="",Object.assign(this,t)},H=function e(t){Object(r.a)(this,e),this.id=0,this.lang_id=0,this.text="",Object.assign(this,t)};var I,L,Y,D,P=[{gloss_id:3,glossTexts:[{gloss_id:3,lang_id:1,text:"slow (3)"},{gloss_id:3,lang_id:2,text:"despacio (3)"},{gloss_id:3,lang_id:3,text:"lent (3)"}],sentenceTexts:[],citation:{id:2,path:"SLOW(3)_id2.mp4",hash:""}},{gloss_id:5,glossTexts:[{gloss_id:5,lang_id:1,text:"slow (1)"},{gloss_id:5,lang_id:2,text:"despacio (1)"},{gloss_id:5,lang_id:3,text:"lent (1)"}],sentenceTexts:[],citation:{id:3,path:"SLOW-E1-201402SR_id3.mp4",hash:""}},{gloss_id:6,glossTexts:[{gloss_id:6,lang_id:1,text:"computer"},{gloss_id:6,lang_id:2,text:"computadora"},{gloss_id:6,lang_id:3,text:"ordinateur"}],sentenceTexts:[],citation:{id:4,path:"COMPUTER-E2-201402SR_id4.mp4",hash:""}},{gloss_id:7,glossTexts:[{gloss_id:7,lang_id:1,text:"father (1)"},{gloss_id:7,lang_id:2,text:"padre (1)"},{gloss_id:7,lang_id:3,text:"p\xe8re (1)"}],sentenceTexts:[{id:36,lang_id:1,text:"A father and mother went to the school because their daughter was involved in the play."}],citation:{id:5,path:"FATHER-E2-201402SR_id5.mp4",hash:""}},{gloss_id:8,glossTexts:[{gloss_id:8,lang_id:1,text:"father (3)"},{gloss_id:8,lang_id:2,text:"padre (3)"},{gloss_id:8,lang_id:3,text:"p\xe8re (3)"}],sentenceTexts:[],citation:{id:6,path:"FATHER (older)-E2-201402AB_id6.mp4",hash:""}},{gloss_id:9,glossTexts:[{gloss_id:9,lang_id:1,text:"mother (1)"},{gloss_id:9,lang_id:2,text:"madre (1)"},{gloss_id:9,lang_id:3,text:"m\xe8re (1)"}],sentenceTexts:[],citation:{id:7,path:"FATHER-E5-201402AB_id7.mp4",hash:""}},{gloss_id:10,glossTexts:[{gloss_id:10,lang_id:1,text:"sign fluently (2)"},{gloss_id:10,lang_id:2,text:"hacer se\xf1as con fluidez (2)"},{gloss_id:10,lang_id:3,text:"signer couramment (2)"}],sentenceTexts:[],citation:{id:8,path:"SIGN-FLUENTLY-E5-201402AB_id8.mp4",hash:""}},{gloss_id:11,glossTexts:[{gloss_id:11,lang_id:1,text:"write"},{gloss_id:11,lang_id:2,text:"escribir"},{gloss_id:11,lang_id:3,text:"\xe9crire"}],sentenceTexts:[],citation:{id:9,path:"Write-AB_id9.mp4",hash:""}},{gloss_id:12,glossTexts:[{gloss_id:12,lang_id:1,text:"write sloppily; write carelessly"},{gloss_id:12,lang_id:2,text:"escribir descuidadamente"},{gloss_id:12,lang_id:3,text:"\xe9crire n\xe9gligemment"}],sentenceTexts:[],citation:{id:10,path:"WRITE-SLOPPY-E2-201402AB_id10.mp4",hash:""}},{gloss_id:14,glossTexts:[{gloss_id:14,lang_id:1,text:"birthday (1)"},{gloss_id:14,lang_id:2,text:"cumplea\xf1os (1)"},{gloss_id:14,lang_id:3,text:"anniversaire (1)"}],sentenceTexts:[],citation:{id:12,path:"BIRTHDAY-E2-201402ST_id12.mp4",hash:""}},{gloss_id:15,glossTexts:[{gloss_id:15,lang_id:1,text:"birthday (4)"},{gloss_id:15,lang_id:2,text:"cumplea\xf1os (4)"},{gloss_id:15,lang_id:3,text:"anniversaire (4)"}],sentenceTexts:[],citation:{id:13,path:"BIRTHDAY-E2-201402SR_id13.mp4",hash:""}},{gloss_id:17,glossTexts:[{gloss_id:17,lang_id:1,text:"brag (1)"},{gloss_id:17,lang_id:2,text:"jactarse (1)"},{gloss_id:17,lang_id:3,text:"se vanter (1)"}],sentenceTexts:[{id:5,lang_id:1,text:"This particular outdoor camp had a leader who was very arrogant and boastful. He talked alot and ordered people around. The staff were sick of his arrogance."}],citation:{id:15,path:"BRAG-E3-201402SR_id15.mp4",hash:""}},{gloss_id:18,glossTexts:[{gloss_id:18,lang_id:1,text:"arrogant; big-headed"},{gloss_id:18,lang_id:2,text:"arrogante; orgulloso"},{gloss_id:18,lang_id:3,text:"arrogant; orgueilleux"}],sentenceTexts:[{id:1,lang_id:1,text:"This particular outdoor camp had a leader who was very arrogant and boastful. He talked alot and ordered people around. The staff were sick of his arrogance."}],citation:{id:14,path:"BIG-HEAD-E2-201402ST_id14.mp4",hash:""}},{gloss_id:19,glossTexts:[{gloss_id:19,lang_id:1,text:"birthday (5)"},{gloss_id:19,lang_id:2,text:"cumplea\xf1os (5)"},{gloss_id:19,lang_id:3,text:"anniversaire (5)"}],sentenceTexts:[],citation:{id:16,path:"BIRTHDAY-E5-201402ST_id16.mp4",hash:""}},{gloss_id:20,glossTexts:[{gloss_id:20,lang_id:1,text:"birthday (2)"},{gloss_id:20,lang_id:2,text:"cumplea\xf1os (2)"},{gloss_id:20,lang_id:3,text:"anniversaire (2)"}],sentenceTexts:[],citation:{id:17,path:"BIRTHDAY(2)_id17.mp4",hash:""}},{gloss_id:21,glossTexts:[{gloss_id:21,lang_id:1,text:"birthday (3)"},{gloss_id:21,lang_id:2,text:"cumplea\xf1os (3)"},{gloss_id:21,lang_id:3,text:"anniversaire (3)"}],sentenceTexts:[],citation:{id:18,path:"BIRTHDAY(3)_id18.mp4",hash:""}},{gloss_id:22,glossTexts:[{gloss_id:22,lang_id:1,text:"egotistical"},{gloss_id:22,lang_id:2,text:"eg\xf3latra; egotistico"},{gloss_id:22,lang_id:3,text:"\xe9go\xefste"}],sentenceTexts:[],citation:{id:19,path:"BRAG-E6-201402SR_id19.mp4",hash:""}},{gloss_id:23,glossTexts:[{gloss_id:23,lang_id:1,text:"brag (2)"},{gloss_id:23,lang_id:2,text:"jactarse (2)"},{gloss_id:23,lang_id:3,text:"se vanter (2)"}],sentenceTexts:[],citation:{id:19,path:"BRAG-E6-201402SR_id19.mp4",hash:""}},{gloss_id:24,glossTexts:[{gloss_id:24,lang_id:1,text:"but (1)"},{gloss_id:24,lang_id:2,text:"pero"},{gloss_id:24,lang_id:3,text:"mais"}],sentenceTexts:[],citation:{id:20,path:"BUT-E2-201402SR_id20.mp4",hash:""}},{gloss_id:26,glossTexts:[{gloss_id:26,lang_id:1,text:"capitol (1)"},{gloss_id:26,lang_id:2,text:"capitolio (1)"},{gloss_id:26,lang_id:3,text:"capitole (1)"}],sentenceTexts:[],citation:{id:21,path:"CAPITOL-E2-201402AB_id21.mp4",hash:""}}],W=s(8),F=Object(x.a)(I=function(e){function t(e){var s;return Object(r.a)(this,t),(s=Object(g.a)(this,Object(_.a)(t).call(this,e))).selected=s.selected.bind(Object(W.a)(Object(W.a)(s))),s}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("svg",{width:"580",height:"400"},l.a.createElement("ellipse",{ry:"154.5",rx:"111.5",cy:"200.9375",cx:"287",fill:"#00f"}),l.a.createElement("ellipse",{ry:"16",rx:"25.5",id:"svg_2",cy:"138.4375",cx:"242",fill:this.selected("left-eye"),onClick:function(){return e.onClick("left-eye")}}),l.a.createElement("ellipse",{ry:"16",rx:"25.5",id:"svg_3",cy:"139.4375",cx:"329",fill:this.selected("right-eye"),onClick:function(){return e.onClick("right-eye")}})))}},{key:"onClick",value:function(e){var t=this.props.root.positions,s=t.indexOf(e);s>=0?t.splice(s,1):t.push(e)}},{key:"selected",value:function(e){return this.props.root.positions.includes(e)?"red":"yellow"}}]),t}(n.Component))||I,z=(L=function e(){Object(r.a)(this,e),Object(w.a)(this,"positions",Y,this)},Y=Object(y.a)(L.prototype,"positions",[A.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L),U=Object(x.a)(D=function(e){function t(e){var s;return Object(r.a)(this,t),(s=Object(g.a)(this,Object(_.a)(t).call(this,e))).svm=void 0,s.root=new z,s.svm=new k(function(e){var t=[];return e.forEach(function(e){e.glossTexts[0].text.split(";").forEach(function(s){t.push(new S(s.trim(),e))})}),G.a.sortBy(t,"text")}(P.map(function(e){return new B({gloss_id:e.gloss_id,citation:new N(e.citation),glossTexts:e.glossTexts.map(function(e){return new C(e)}),sentenceTexts:e.sentenceTexts.map(function(e){return new H(e)})})}))),s.svm.selectedGloss=s.svm.glosses[0],s}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.svm;e.selectedGloss;return l.a.createElement("div",{className:"App"},l.a.createElement("body",null,l.a.createElement(F,{root:this.root}),l.a.createElement(m,{svm:e})))}}]),t}(n.Component))||D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.fda4a821.chunk.js.map