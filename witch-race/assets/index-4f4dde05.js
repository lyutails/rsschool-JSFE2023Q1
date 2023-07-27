(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const q=["maple","spruce","elder","birch","pine","cedar","sakura","sequoia","whomping willow","oak","appletree","aspen","bamboo","rosehip","nickel","ivy"],D=["2000","Repaired","Gold","Access","Way","Thorns","Elven","Twist","Rooftop","2023","Twice Repaired","Platina","Sparkles","Marathon","Wind's Wings","Wind's Song","Scorpion","Meow","Waterproof","Firebreath","Glitch","No Trace","Pick","Naked","Hurricane","Silent","Dragon"],Q=["Nimbus","School Broomstick","Firebolt","Phantom","Moonlight Strike","Ghost Broom","Silverrain","Tashenka","Cherry","Tornado","Abyss","Tails","Butterfly","Colibri","Night Star","Myth","Crab","Phenomenon","Salute","Rumours","Raven"];class o{constructor({tagName:t,classList:e=[""],textContent:n="",children:a=[]}){this.append=(...r)=>{this.node.append(...r.map(m=>m.node))},this.node=document.createElement(t??"div"),this.node.classList.add(...e),this.node.textContent=n,a.length&&this.append(...a)}destroy(){this.node.remove()}addTextContent(t){this.node.textContent=t}addMoreClasses(t){this.node.classList.add(t)}removeClass(t){this.node.classList.remove(t)}toggleClass(t){this.node.classList.toggle(t)}addLink(t){this.node.setAttribute("href",t)}setPlaceholder(t){this.node.setAttribute("placeholder",t)}randomizeOwl(t){return t[Math.floor(Math.random()*t.length)]}disableButton(){this.node.setAttribute("disabled","")}enableButton(){this.node.removeAttribute("disabled")}setCursorPointer(){this.node.hasAttribute("disabled")&&(this.node.style.cursor="pointer"),this.node.style.cursor="default"}getRandomName(){const t=Q[Math.floor(Math.random()*Q.length)],e=D[Math.floor(Math.random()*D.length)],n=q[Math.floor(Math.random()*q.length)];return`${t} ${e} ${n}`}getRandomColor(){const t="0123456789abcdef";let e="#";for(let n=0;n<6;n++)e+=t[Math.floor(Math.random()*16)];return e}ifInputName(t){return t===""?this.getRandomName():t}}class z extends o{constructor(){super({tagName:"div",classList:["brooms_parking"]});const t=new o({tagName:"div",classList:["parking_sign"]}),e=new o({tagName:"div",classList:["parking_cat"]}),n=new o({tagName:"div",classList:["brooms_wrapper"],children:[t,e]});this.node.append(n.node)}}class I extends o{constructor(){super({tagName:"div",classList:["not_found"]});const t=new o({tagName:"div",classList:["not_found_wrapper"],textContent:"Highly likely you got lost in the castle - try another staircase leading to the quidditch field, brooms parking or winners room."});this.node.append(t.node)}}class p{constructor(){this.observers=[]}subscribe(t){this.observers.push(t)}unsubscribe(t){this.observers=this.observers.filter(e=>e!==t)}notify(t){this.observers.forEach(e=>{e(t)})}}const H=new p,l={_currentWitches:4,currentWitchesObserver:H,_indexForUpdate:0,_currentUpdate:0,_currentPage:1,_currentWinnersPage:1,set currentWitches(s){this._currentWitches=s,this.currentWitchesObserver.notify("lalala")},get currentWitches(){return this._currentWitches},set indexForUpdate(s){this._indexForUpdate=s},get indexForUpdate(){return this._indexForUpdate},set currentUpdate(s){this._currentUpdate=s,this.currentWitchesObserver.notify("lalala")},get currentUpdate(){return this._currentUpdate},set currentPage(s){this._currentPage=s,this.currentWitchesObserver.notify("lalala")},get currentPage(){return this._currentPage},set currentWinnersPage(s){this._currentWinnersPage=s},get currentWinnersPage(){return this._currentWinnersPage}};class K extends o{constructor(){super({tagName:"div",classList:["brooms_count"]}),this.node.textContent="Currently total brooms' count is paste-here-number."}}const y=new K;class U extends o{constructor(){super({tagName:"button",classList:["control_widget_button"]})}}class u extends o{constructor(){super({tagName:"div",classList:["control_widget"]}),u.controlName=new o({tagName:"input",classList:["control_widget_name"]}),u.controlName.setPlaceholder("Imagine Name"),u.controlName.node.value="",u.controlName.node.setAttribute("type","text"),u.controlColor=new o({tagName:"input",classList:["control_widget_color"]}),u.controlColor.node.setAttribute("type","color"),u.controlColor.node.value="#55c6a8",u.controlButton=new U,u.controlButton.node.textContent="Create",this.node.append(u.controlName.node,u.controlColor.node,u.controlButton.node)}}var g=(s=>(s.Quidditch="quidditch",s.BroomParking="brooms_parking",s.Winners="winners",s.NotFound="404",s))(g||{}),C=(s=>(s.garage="/garage",s.winners="/winners",s.engine="/engine",s))(C||{});const S="http://127.0.0.1:3000",N=`${S}${C.garage}`;`${S}${C.winners}`;const F=`${S}${C.engine}`,X="7",E=[{key:"_page",value:`${l.currentPage}`},{key:"_limit",value:X}];class L extends o{constructor(){super({tagName:"button",classList:["track_buttons_button"]})}}const T=new p,k=new p,G=new p;class Y extends o{constructor(){super({tagName:"div",classList:["track_buttons"]}),this.flyButton=new L,this.flyButton.node.textContent="Fly",this.backButton=new L,this.backButton.node.textContent="Back",this.backButton.disableButton(),this.pickButton=new L,this.pickButton.node.textContent="Pick",this.delButton=new L,this.delButton.node.textContent="Del",this.node.append(this.flyButton.node,this.backButton.node,this.pickButton.node,this.delButton.node),T.subscribe(()=>{this.flyButton.disableButton(),this.backButton.disableButton(),this.pickButton.disableButton(),this.delButton.disableButton()}),k.subscribe(()=>{this.backButton.enableButton(),this.pickButton.enableButton(),this.delButton.enableButton()}),G.subscribe(()=>{this.flyButton.enableButton(),this.backButton.disableButton()})}}class h extends o{constructor(){super({tagName:"div",classList:["race_buttons"]}),h.raceButton=new o({tagName:"button",classList:["race_buttons_button"],textContent:"Race"}),h.resetButton=new o({tagName:"button",classList:["race_buttons_button"],textContent:"Reset"}),h.moreWitchesButton=new o({tagName:"button",classList:["race_buttons_button"],textContent:"More Witches"}),this.node.append(h.raceButton.node,h.resetButton.node,h.moreWitchesButton.node)}}class Z extends o{constructor(){super({tagName:"div",classList:["track"]})}}class A extends o{constructor(){super({tagName:"div",classList:["witch"]})}}class V extends o{constructor(){super({tagName:"div",classList:["owl"]})}}const R="/lyutails-JSFE2023Q1/witch-race/assets/halloween-horror-owl-1ecda387.svg",tt="/lyutails-JSFE2023Q1/witch-race/assets/halloween-horror-owl_polar-234b501c.svg",et=[R,tt];class x extends o{constructor(){super({tagName:"div",classList:["imagined_name_modal"],textContent:"you skipped imagining name then now lalala is the name"}),x.cross=new o({tagName:"div",classList:["cross"]}),this.node.append(x.cross.node),document.body.append(this.node)}}class nt extends o{constructor(){super({tagName:"div",classList:["overlay"]}),document.body.append(this.node)}}const P=new p,ot=new p,J=new p;class B extends o{constructor(){super({tagName:"div",classList:["track_wrapper"]}),this.store=l,this.countWitchesAfterDelete=async(t,e,n)=>{if(!await v())throw new Error("no witches encounted");t.delButton.node.onclick=r=>this.countWitches(r,e,n)},this.flyAllWitches=(t,e,n)=>{if(!t.target)throw new Error("no fly button found out there");const a=M(e).then(r=>r.velocity);n.node.style.animationDuration=`${+window.innerWidth*.8/+a}s`,n.node.style.animationName="witch_fly_anim",n.node.style.animationIterationCount="1",n.node.style.animationFillMode="forwards",n.node.style.animationTimingFunction="ease-in-out",O(e,n)},H.subscribe(()=>{setTimeout(()=>{this.render()},100)}),setTimeout(()=>{this.render()},100)}render(){this.node.textContent="";const{currentWitches:t}=this.store;st(E).then(e=>e.forEach(n=>{const a=new A,r=new V;r.node.style.backgroundImage=`url('${r.randomizeOwl(et)}')`,B.broomWitchName=new o({tagName:"div",classList:["track_broom_witch_name"]});const m=new o({tagName:"div",classList:["track_path"],children:[a,r]}),W=new Z,b=new Y,_=new o({tagName:"div",classList:["track_buttons_and_name"],children:[b,B.broomWitchName]});a.node.style.backgroundColor=n.color,B.broomWitchName.node.textContent=n.name,a.node.id=String(n.id),b.pickButton.node.id=String(n.id),this.node.append(m.node,W.node,_.node),b.pickButton.node.onclick=w=>this.pickWitch(w,n),b.flyButton.node.onclick=w=>{this.flyWitch(w,a,n.id),P.notify(this.disableButtons()),T.notify("lalala"),h.raceButton.disableButton(),window.addEventListener("animationend",()=>{B.enablePagination(),ot.notify(this.enableButtons()),k.notify("lalala"),h.raceButton.enableButton()})},b.backButton.node.onclick=w=>{this.flyBack(w,a),G.notify("lalala"),J.notify("lalala")},h.raceButton.node.addEventListener("click",()=>{ct(e,n.id,a),P.notify(this.disableButtons()),T.notify("lalala"),h.raceButton.disableButton(),window.addEventListener("animationend",()=>{this.enableButtons(),k.notify("lalala")})}),h.resetButton.node.onclick=()=>{a.node.style.animation="unset"},this.countWitchesAfterDelete(b,n.id,t)})),u.controlButton.node.onclick=()=>{this.createWitchByClickOnCreate()},h.moreWitchesButton.node.onclick=()=>this.plusWitches()}pickWitch(t,e){if(!t.target)throw new Error("no pick button found out there");l.indexForUpdate=e.id,d.controlName.node.value=e.name,d.controlColor.node.value=e.color}flyBack(t,e){if(!t.target)throw new Error("no back button found out there");e.node.style.animation="unset"}flyWitch(t,e,n){if(!t.target)throw new Error("no fly button found out there");e.node.style.animationName="witch_fly_anim",e.node.style.animationIterationCount="1",e.node.style.animationFillMode="forwards",e.node.style.animationTimingFunction="ease-in-out",(async()=>{const r=await M(n).then(m=>m.velocity);e.node.style.animationDuration=`${+window.innerWidth*.8/+r}s`})(),O(n,e)}plusWitches(){for(let a=0;a<100;a++)j(this.getRandomName(),this.getRandomColor());(async()=>{const a=await v();if(!a)throw new Error("no witches encounted");y.node.textContent=`Currently total brooms' count is ${a}`})();let{currentWitches:n}=l;n+=100,l.currentWitches=n}countWitches(t,e,n){if(!t.target)throw new Error("no del button found out there");rt(e),n-=1,y.node.textContent=`Currently total brooms' count is ${n}`,this.node.textContent="",l.currentWitches=n}createNameModal(t){const e=new o({tagName:"div",classList:["cross"]});if(u.controlName.node.value===""){const n=new nt,a=new x;a.node.textContent=`you skipped imagining name then now '${t}' is the name`,setTimeout(()=>{n.destroy(),a.destroy()},4e3),a.node.append(e.node),n.node.addEventListener("click",()=>{n.destroy(),a.destroy(),e.destroy()}),e.node.addEventListener("click",()=>{n.destroy(),a.destroy(),e.destroy()})}}createWitchByClickOnCreate(){const t=this.ifInputName(u.controlName.node.value);u.controlName.node.value===""&&this.createNameModal(t),j(t,u.controlColor.node.value),(async()=>{const a=await v();if(!a)throw new Error("no witches encounted");y.node.textContent=`Currently total brooms' count is ${a}`})();let{currentWitches:n}=l;n+=1,l.currentWitches=n,setTimeout(()=>{u.controlName.node.value=""},100)}static enablePagination(){i.paginationButtonBeginning.enableButton(),i.paginationButtonLeft.enableButton(),i.paginationButtonRight.enableButton(),i.paginationButtonEnd.enableButton()}enableButtons(){h.resetButton.enableButton(),h.moreWitchesButton.enableButton(),u.controlButton.enableButton(),d.controlButton.enableButton(),h.raceButton.enableButton()}disableButtons(){P.subscribe(()=>{this.justDisableButtons()})}justDisableButtons(){i.paginationButtonBeginning.disableButton(),i.paginationButtonLeft.disableButton(),i.paginationButtonRight.disableButton(),i.paginationButtonEnd.disableButton(),h.resetButton.disableButton(),h.moreWitchesButton.disableButton(),u.controlButton.disableButton(),d.controlButton.disableButton()}}class i extends o{constructor(){super({tagName:"div",classList:["race_pagination"]}),i.paginationButtonBeginning=new o({tagName:"button",classList:["race_pagination_button"]}),i.paginationButtonBeginning.enableButton(),i.paginationButtonBeginning.setCursorPointer(),i.paginationButtonLeft=new o({tagName:"button",classList:["race_pagination_button"]}),i.paginationButtonLeft.enableButton(),i.paginationButtonLeft.setCursorPointer(),i.paginationButtonLeft.node.addEventListener("click",()=>{this.turnPageRight()}),i.paginationButtonNumber=new o({tagName:"button",classList:["race_pagination_button"]}),i.paginationButtonNumber.node.textContent=`${l.currentPage}`,i.paginationButtonRight=new o({tagName:"button",classList:["race_pagination_button"]}),i.paginationButtonRight.enableButton(),i.paginationButtonRight.setCursorPointer(),i.paginationButtonRight.node.addEventListener("click",()=>{this.turnPageLeft()}),i.paginationButtonEnd=new o({tagName:"button",classList:["race_pagination_button"]}),i.paginationButtonEnd.enableButton(),i.paginationButtonEnd.setCursorPointer(),J.subscribe(()=>{i.paginationButtonBeginning.enableButton(),i.paginationButtonLeft.enableButton(),i.paginationButtonRight.enableButton(),i.paginationButtonEnd.enableButton()}),this.node.append(i.paginationButtonBeginning.node,i.paginationButtonLeft.node,i.paginationButtonNumber.node,i.paginationButtonRight.node,i.paginationButtonEnd.node)}turnPageLeft(){const e=l.currentWitches,n=Math.ceil(e/7);l.currentPage<n&&(i.paginationButtonNumber.node.textContent="",l.currentPage+=1,i.paginationButtonNumber.node.textContent=`${l.currentPage}`,E[0].value=String(l.currentPage))}turnPageRight(){const e=l.currentWitches,n=Math.ceil(e/7);l.currentPage<n&&(i.paginationButtonNumber.node.textContent="",l.currentPage-=1,i.paginationButtonNumber.node.textContent=`${l.currentPage}`,E[0].value=String(l.currentPage))}}const st=async s=>{const e=await fetch(`${N}?${(a=>a.map(r=>`${r.key}=${r.value}`).join("&"))(s)}`);if(!e.ok)throw new Error("some error happened on the way");return await e.json()},j=async(s,t)=>{await fetch(`${N}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,color:t})})},at=async(s,t,e)=>fetch(`${N}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,color:t})}),it=async s=>{await fetch(`${F}?&id=${s}&status=stopped`,{method:"PATCH"}).then(t=>t.json())},O=async(s,t)=>{fetch(`${F}?&id=${s}&status=drive`,{method:"PATCH"}).then(e=>e.json()).catch(()=>{t.node.style.animationPlayState="paused",it(s),i.paginationButtonBeginning.enableButton(),i.paginationButtonLeft.enableButton(),i.paginationButtonRight.enableButton(),i.paginationButtonEnd.enableButton(),h.resetButton.enableButton(),h.moreWitchesButton.enableButton(),u.controlButton.enableButton(),d.controlButton.enableButton(),k.notify("lalala"),h.raceButton.enableButton()})},M=async s=>fetch(`${F}?&id=${s}&status=started`,{method:"PATCH"}).then(t=>t.json()).then(t=>t),rt=async s=>await(await fetch(`${N}/${s}`,{method:"DELETE"})).json(),v=async()=>{const s=fetch(`${N}?_page=1&_limit=1`);if(!s)throw new Error("no witches found");return s.then(e=>e.headers.get("X-Total-Count")||"0")},ct=async(s,t,e)=>{Promise.all(s).then(()=>{(async()=>{const a=await M(t).then(r=>r.velocity);e.node.style.animationDuration=`${+window.innerWidth*.8/+a}s`})(),e.node.style.animationName="witch_fly_anim",e.node.style.animationIterationCount="1",e.node.style.animationFillMode="forwards",e.node.style.animationTimingFunction="ease-in-out",O(t,e)})};class d extends o{constructor(){super({tagName:"div",classList:["control_widget"]}),d.controlName=new o({tagName:"input",classList:["control_widget_name"]}),d.controlName.setPlaceholder("Customize Name"),d.controlName.node.setAttribute("type","text"),d.controlColor=new o({tagName:"input",classList:["control_widget_color"]}),d.controlColor.node.setAttribute("type","color"),d.controlColor.node.value="#55c6a8",d.controlButton=new U,d.controlButton.node.textContent="Update",d.controlButton.node.onclick=()=>{d.updateWitchHandler()},this.node.append(d.controlName.node,d.controlColor.node,d.controlButton.node)}static updateWitchHandler(){at(`${d.controlName.node.value}`,`${d.controlColor.node.value}`,l.indexForUpdate),setTimeout(()=>{d.controlName.node.value=""},100),l.currentUpdate+=1}}class dt extends o{constructor(){super({tagName:"div",classList:["control_panel"]});const t=new u,e=new d;this.node.append(t.node,e.node)}}class ut extends o{constructor(){super({tagName:"div",classList:["quidditch"]}),this.store=l;const t=new dt,e=new h;(async()=>{const b=await v();if(!b)throw new Error("no witches encounted");y.node.textContent=`Currently total brooms' count is ${b}`})();const a=new B,r=new i,m=new o({tagName:"div",classList:["quidditch_warning"],textContent:"Using magic wands during brooms racing is strictly probihited."}),W=new o({tagName:"div",classList:["quidditch_wrapper"],children:[t,e,y,a,r,m]});this.node.append(W.node)}}class lt extends o{constructor(){super({tagName:"div",classList:["winners"]});const t=new o({tagName:"div",classList:["winners_number"],textContent:"№"}),e=new o({tagName:"div",classList:["winners_pic"],textContent:"Pic"}),n=new o({tagName:"div",classList:["winners_name"],textContent:"Name"}),a=new o({tagName:"div",classList:["winners_wins"],textContent:"Wins"}),r=new o({tagName:"div",classList:["winners_time"],textContent:"Best Time"}),m=new o({tagName:"div",classList:["winners_line"],children:[t,e,n,a,r]});this.winnersTable=new o({tagName:"div",classList:["winners_table"],children:[m]}),this.totalNumberOfWinners=new o({tagName:"div",classList:["winners_total_number"],textContent:"Total Number of Winners is ~paste amount here~"}),this.node.append(this.totalNumberOfWinners.node,this.winnersTable.node)}}class ht extends o{constructor(){super({tagName:"div",classList:["footer"]});const t=new o({tagName:"a",classList:["footer_rsschool"],textContent:"RSSchool"});t.addLink("https://rs.school/"),t.node.style.marginRight="1vw";const e=new o({tagName:"a",classList:["footer_year"],textContent:"2023"}),n=new o({tagName:"div",classList:["footer_year_rs_wrapper"],children:[t,e]}),a=new o({tagName:"a",classList:["footer_author"],textContent:"lyutails"});a.addLink("https://github.com/lyutails");const r=new o({tagName:"div",classList:["footer_wrapper"],children:[n,a]});this.node.append(r.node)}}class $ extends o{constructor(){super({tagName:"a",classList:["header_button"]})}}class f extends o{constructor(){super({tagName:"div",classList:["header"]});const t=new $;t.addTextContent("Parking Lot"),t.addLink(`#${g.BroomParking}`);const e=new $;e.addTextContent("Quidditch"),e.addLink(`#${g.Quidditch}`);const n=new $;n.addTextContent("Winners"),n.addLink(`#${g.Winners}`);const a=new o({tagName:"div",classList:["header_buttons"],children:[t,e,n]});f.headerSnitch=new o({tagName:"a",classList:["header_snitch"]}),f.headerSnitch.addLink(`#${g.Quidditch}`);const r=new o({tagName:"div",classList:["header_wrapper"],children:[a,f.headerSnitch]});this.node.append(r.node)}}class c{constructor(){this.raceBody=document.body;const t=new f,e=new ht;c.quidditch=new ut,c.notFound=new I,c.winners=new lt,c.broomsParking=new z,c.pageBody=new o({tagName:"div",classList:["page_body"]}),c.pageBody.append(c.quidditch),c.run(),this.raceBody.append(t.node,c.pageBody.node,e.node)}static renderNewView(t){c.pageBody.node.textContent="",t===""&&c.pageBody.append(c.quidditch),t===g.Quidditch&&c.pageBody.append(c.quidditch),t===g.BroomParking&&c.pageBody.append(c.broomsParking),t===g.Winners&&c.pageBody.append(c.winners),t===g.NotFound&&c.pageBody.append(c.notFound),t!==g.Quidditch&&t!==g.BroomParking&&t!==g.Winners&&t!==""&&c.pageBody.append(c.notFound)}static enableRouteChange(){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1);c.renderNewView(t)}),window.addEventListener("DOMContentLoaded",()=>{const t=window.location.hash.slice(1);c.renderNewView(t)})}static run(){c.renderNewView(g.Quidditch),c.enableRouteChange()}}new c;
