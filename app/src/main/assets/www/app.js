(function(){
'use strict';
var HB=window.HB, CAT=HB.catalog;
var $=function(s,r){return (r||document).querySelector(s)};
var root=document.documentElement;

/* ---------- icons ---------- */
var P={
 home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/>',
 lib:'<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M13 4h5.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H13z"/>',
 marker:'<path d="m9 11-5 5v4h4l5-5"/><path d="m14 6 4 4"/><path d="m12.5 7.5 4 4 3.5-3.5-4-4z"/>',
 set:'<path d="M4 7h9"/><path d="M17 7h3"/><circle cx="15" cy="7" r="2"/><path d="M4 17h3"/><path d="M11 17h9"/><circle cx="9" cy="17" r="2"/>',
 play:'<path d="M8 5.5v13l11-6.5z"/>',
 pause:'<path d="M8 5.5v13M16 5.5v13"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
 back:'<path d="m15 5-7 7 7 7"/>',
 chev:'<path d="m9 5 7 7-7 7"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 aa:'<path d="M3 19 8 6l5 13"/><path d="M4.8 14.5h6.4"/><path d="M15 19l3-8 3 8"/><path d="M15.9 16.6h4.2"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
 bm:'<path d="M6.5 4h11v16.5L12 16.5l-5.5 4z"/>',
 heart:'<path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10C19.5 15.4 12 20 12 20z"/>',
 left:'<path d="m14 6-6 6 6 6"/>',
 right:'<path d="m10 6 6 6-6 6"/>',
 copy:'<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>',
 trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6.5 7l1 13h9l1-13"/>',
 note:'<path d="M5 4h14v12l-5 5H5z"/><path d="M14 21v-5h5"/>',
 share:'<circle cx="6" cy="12" r="2.2"/><circle cx="17" cy="6" r="2.2"/><circle cx="17" cy="18" r="2.2"/><path d="m8 11 7-4M8 13l7 4"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
 font:'<path d="M4 20 11 4l7 16"/><path d="M6.5 14.5h9"/>',
 num:'<path d="M5 8h14M5 16h14M9 4 7 20M17 4l-2 16"/>',
 vib:'<rect x="8" y="3" width="8" height="18" rx="2"/><path d="M4 8v8M20 8v8"/>',
 tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.1"/>',
 backup:'<path d="M12 4v11"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M5 19h14"/>',
 restore:'<path d="M12 20V9"/><path d="m7.5 13.5 4.5-4.5 4.5 4.5"/><path d="M5 5h14"/>',
 target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6"/>',
 moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
 resume:'<path d="M5 12a7 7 0 1 0 2.2-5.1"/><path d="M5 4v4h4"/><path d="M12 8v4l3 2"/>',
 screen:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M9 21h6M12 17v4"/>',
 anim:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>',
 ext:'<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5H5V6h5"/>',
 clear:'<path d="M18 6 6 18M6 6l12 12"/>',
 folder:'<path d="M3.5 7a2 2 0 0 1 2-2H10l2 2.5h6.5a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20c.8-4 4-6 7.5-6s6.7 2 7.5 6"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"/>',
 dleft:'<path d="m11 6-6 6 6 6"/><path d="m18 6-6 6 6 6"/>',
 dright:'<path d="m13 6 6 6-6 6"/><path d="m6 6 6 6-6 6"/>',
 pencil:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
 half:'<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',
 palette:'<path d="M12 4a8 8 0 1 0 0 16c1.4 0 2-.9 1.6-2-.4-1.1.2-2 1.4-2H17a3 3 0 0 0 3-3 8 8 0 0 0-8-9z"/><circle cx="8" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="15.5" cy="8.5" r="1"/>',
 star:'<path d="m12 4 2.4 5 5.4.7-4 3.8 1 5.4L12 16.3 7.2 18.9l1-5.4-4-3.8 5.4-.7z"/>',
 find:'<circle cx="10.5" cy="10.5" r="5.5"/><path d="m20 20-5.2-5.2"/><path d="M8.5 10.5h4"/>'
};
function ic(n){return '<svg viewBox="0 0 24 24">'+P[n]+'</svg>'}
function h(tag,props){
  var e=document.createElement(tag);props=props||{};
  for(var k in props){var v=props[k];if(k==='class')e.className=v;else if(k==='html')e.innerHTML=v;else if(k==='text')e.textContent=v;else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);else if(k==='style')e.style.cssText=v;else e.setAttribute(k,v)}
  for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c==null)continue;e.appendChild(typeof c==='string'?document.createTextNode(c):c)}
  return e;
}

/* ---------- state ---------- */
var KEY='hb.v1';
var DEF={name:'Rahat',mode:'dark',skin:'boi',accent:'green',as:0,asSpeed:40,showProg:1,amoled:0,anim:1,haptic:1,digits:'bn',font:'Solaiman',size:22,lh:1.9,para:.7,align:'left',margin:22,rtheme:'cream',dim:0,resume:0,keepOn:0,goal:0,hiddenAuthors:[],pos:{},hl:{},bm:[],fav:[],read:{},stats:{},fin:{},recent:[],last:null,hometab:'reading',seen:0};
var S;
function load(){var o={};try{o=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}S={};for(var k in DEF)S[k]=(o[k]!==undefined)?o[k]:JSON.parse(JSON.stringify(DEF[k]))}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
load();

/* ---------- utils ---------- */
var BN='০১২৩৪৫৬৭৮৯';
function nb(x){x=String(x);if(S.digits==='en')return x;return x.replace(/[0-9]/g,function(d){return BN[d]})}
var WD=['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
var MO=['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
function greet(){var H=new Date().getHours();return H<4?'শুভ রাত্রি':H<6?'শুভ ভোর':H<12?'শুভ সকাল':H<15?'শুভ দুপুর':H<18?'শুভ বিকাল':H<20?'শুভ সন্ধ্যা':'শুভ রাত্রি'}
function dkey(d){d=d||new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
function fmtMin(m){m=Math.round(m);if(m>=60){var hh=Math.floor(m/60),mm=m%60;return nb(hh)+' ঘণ্টা'+(mm?' '+nb(mm)+' মিনিট':'')}return nb(m)+' মিনিট'}
function buzz(){if(!S.haptic)return;try{if(window.Android&&Android.vibrate)Android.vibrate(10);else if(navigator.vibrate)navigator.vibrate(10)}catch(e){}}
var toastT;function toast(t){var e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){e.classList.remove('on')},1900)}
function hue(id){var n=parseInt(String(id).replace(/\D/g,''),10);if(isNaN(n)){n=0;for(var i=0;i<id.length;i++)n+=id.charCodeAt(i)*7}return (n*137.5)%360|0}
function cover(id,t,cls){var hu=hue(id);return h('div',{class:'cover'+(cls?' '+cls:''),style:'background:linear-gradient(145deg,hsl('+hu+',48%,38%),hsl('+((hu+40)%360)+',55%,24%))',text:(t||'ব').trim().charAt(0)})}
var BOOKS=CAT.books;
function bookCats(id){var r=[],a=CAT.authors.filter(function(x){return x.id===BOOKS[id].a})[0];if(a)a.cats.forEach(function(c){if(c.books.indexOf(id)>=0)r.push(c.name)});return r}
function bookProg(id){var p=S.pos[id],n=BOOKS[id].c.length;if(!p)return 0;var done=Object.keys(S.read[id]||{}).length;var f=Math.max(done,p.c+p.p)/n;return Math.min(1,f)}
function isFinished(id){return Object.keys(S.read[id]||{}).length>=BOOKS[id].c.length}

/* ---------- theme ---------- */
var mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
function resolved(){return S.mode==='system'?((mq&&mq.matches)?'dark':'light'):S.mode==='sepia'?'light':S.mode}
function applyTheme(){
  root.setAttribute('data-resolved',resolved());root.setAttribute('data-accent','green');root.setAttribute('data-skin',S.skin||'boi');root.setAttribute('data-sepia',S.mode==='sepia'?'1':'0');root.setAttribute('data-amoled',S.amoled?'1':'0');root.setAttribute('data-anim',S.anim?'1':'0');
  var m=document.querySelector('meta[name=theme-color]');if(m)m.content=resolved()==='dark'?(S.skin==='path'?'#0b0816':'#070d0a'):(S.mode==='sepia'?'#f1e4c8':'#f6f0e3');
  try{if(window.Android&&Android.setBars)Android.setBars(resolved()==='dark')}catch(e){}
  applyReader();
}
if(mq&&mq.addEventListener)mq.addEventListener('change',function(){if(S.mode==='system')applyTheme()});
var FONTS={Solaiman:{n:'সলিমানলিপি',f:"'Solaiman','Hind',sans-serif"},Hind:{n:'হিন্দ শিলিগুড়ি',f:"'Hind','Solaiman',sans-serif"},system:{n:'সিস্টেম ফন্ট',f:"'Noto Sans Bengali','Siyam Rupali',system-ui,sans-serif"}};
var RT={cream:'ক্রিম',app:'অ্যাপ থিম',white:'সাদা',paper:'পেপার',sepia:'সেপিয়া',dark:'ডার্ক',black:'কালো'};
function applyReader(){
  var r=$('#reader');r.style.setProperty('--rfont',(FONTS[S.font]||FONTS.Solaiman).f);
  r.style.setProperty('--rsize',S.size+'px');r.style.setProperty('--rlh',S.lh);r.style.setProperty('--rpara',S.para+'em');
  r.style.setProperty('--ralign',S.align);r.style.setProperty('--rmargin',S.margin+'px');
  r.setAttribute('data-rt',S.rtheme);r.classList.toggle('noprog',!S.showProg);$('#dim').style.opacity=S.dim/100;
}

/* ---------- navigation ---------- */
var view='home',prevView='home';
var NAV=[['home','home','হোম'],['lib','lib','লাইব্রেরি'],['notes','bm','বুকমার্ক'],['profile','user','প্রোফাইল']];
var VIEWS=['home','lib','notes','search','settings','profile'];
function navOf(v){return v==='settings'?'profile':v==='search'?prevView:v}
function buildNav(){
  var n=$('#nav');n.innerHTML='';
  NAV.forEach(function(x){
    var b=h('button',{class:x[0]===navOf(view)?'on':'','aria-label':x[2],onclick:function(){if(x[0]==='lib')libAuthor=null,libTab='author';go(x[0])}});b.innerHTML=ic(x[1])+'<span>'+x[2]+'</span>';n.appendChild(b);
  });
}
function go(v){
  if(v===view&&$('#v-'+v).classList.contains('on'))return;buzz();
  if(v==='search'||v==='settings')prevView=view==='search'||view==='settings'?prevView:view;
  view=v;
  VIEWS.forEach(function(k){$('#v-'+k).classList.toggle('on',k===v)});
  buildNav();render(v);$('#v-'+v).scrollTop=0;
}
function render(v){({home:renderHome,lib:renderLib,search:renderSearch,notes:renderNotes,settings:renderSettings,profile:renderProfile})[v]()}
function openAuthor(id){libTab='author';libAuthor=id;libCat=0;libPdf=false;if(view!=='lib')go('lib');else renderLib();$('#v-lib').scrollTop=0}
function openExplore(mode){searchMode=mode||'all';go('search');setTimeout(focusSearch,300)}

/* ---------- shared pieces ---------- */
function authorById(id){return CAT.authors.filter(function(a){return a.id===id})[0]}
function authorName(id){var a=authorById(id);return a?a.name:''}
function visAuthors(){return CAT.authors.filter(function(a){return S.hiddenAuthors.indexOf(a.id)<0})}
function visBooks(){return Object.keys(BOOKS).filter(function(k){return S.hiddenAuthors.indexOf(BOOKS[k].a)<0})}
function dayN(){return Math.floor(Date.now()/864e5)}
function picks(n,off){var all=visBooks().filter(function(k){return BOOKS[k].c.length>1&&BOOKS[k].w>4000}),r=[],d=dayN()+(off||0);
  for(var i=0;i<n&&all.length;i++){r.push(all[(d*7+i*Math.floor(all.length/n+3))%all.length])}return r.filter(function(x,i){return r.indexOf(x)===i})}
function bcard(id){
  var b=BOOKS[id],hu=hue(id),p=bookProg(id),f=isFinished(id);
  var c=h('button',{class:'bcard',style:'background:linear-gradient(160deg,hsl('+hu+',46%,36%),hsl('+((hu+45)%360)+',52%,15%))',onclick:function(){openBook(id)}});
  c.appendChild(h('i',{class:'wm',text:b.t.trim().charAt(0)}));
  if(f)c.appendChild(h('span',{class:'bdg ok',html:ic('check')}));else if(p>0)c.appendChild(h('span',{class:'bdg',text:nb(Math.round(p*100))+'%'}));
  c.appendChild(h('div',{class:'bt'},h('b',{text:b.t}),h('small',{text:authorName(b.a)})));return c;
}
function folderIcon(id){var hu=hue(id),c1='hsl('+hu+',62%,64%)',c2='hsl('+((hu+28)%360)+',66%,46%)';
  return '<svg class="fo" viewBox="0 0 48 48"><path d="M5 12a4 4 0 0 1 4-4h9l4 4h16a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" fill="'+c2+'"/><path d="M5 20a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" fill="'+c1+'"/></svg>'}
function folderCard(a){
  var b=h('button',{class:'fcard',onclick:function(){buzz();openAuthor(a.id)}});
  b.innerHTML=folderIcon(a.id);b.appendChild(h('div',{},h('b',{text:a.name}),h('small',{text:nb(a.n)+'টি বই'})));return b;
}
function bookRow(id,sub,onclick){
  var b=BOOKS[id],p=bookProg(id);
  return h('button',{class:'book',onclick:onclick||function(){openBook(id)}},
    cover(id,b.t),
    h('div',{class:'m'},h('div',{class:'t',text:b.t}),h('div',{class:'s',text:authorName(b.a)+' · '+(sub||(b.y?nb(b.y)+' · ':'')+nb(b.c.length)+' অধ্যায়')}),
      p>0?h('div',{class:'prog'},h('i',{style:'width:'+Math.round(p*100)+'%'})):null),
    h('span',{class:'chev',html:ic('chev')}));
}
function sech(t,more,fn){return h('div',{class:'sech'},h('span',{text:t}),more?h('button',{class:'more',html:more+ic('chev'),onclick:fn}):null)}
var LOGO='<svg viewBox="0 0 64 64"><path d="M6 20c9-5 18-3 26 3v31c-8-6-17-7-26-3z" fill="currentColor" opacity=".85"/><path d="M58 20c-9-5-18-3-26 3v31c8-6 17-7 26-3z" fill="currentColor"/><path d="M32 23c-1-10 5-17 15-18-1 10-6 17-15 18z" fill="var(--accent)"/></svg>';
var HILLS='<svg class="hsil" viewBox="0 0 200 140" preserveAspectRatio="xMaxYMax slice"><circle cx="150" cy="38" r="20" fill="currentColor" opacity=".25"/><path d="M0 140V96c30-24 56-18 82-4 30 16 60 6 118-22v70z" fill="currentColor" opacity=".22"/><path d="M60 140V104c24-14 48-8 74 6s46 6 66-8v38z" fill="currentColor" opacity=".35"/><g fill="currentColor" opacity=".7"><circle cx="118" cy="84" r="6"/><path d="M108 112c0-14 4-22 10-22s10 8 10 22z"/></g></svg>';

/* ---------- home ---------- */
var QUOTES=[['বই হলো জীবনের সবচেয়ে নীরব বন্ধু।',''],['যে পড়ে না, সে হারায় অনেক কিছু।',''],['বই পড়া মানে নিজেকে আরও ভালো করে জানা।',''],['একটি ভালো বই হাজার বন্ধুর সমান।',''],['পড়ার আনন্দ — এখন আরও সহজ।','']];
var LANTERN='<svg class="lant" viewBox="0 0 120 120"><defs><radialGradient id="gl"><stop offset="0" stop-color="#ffd27a" stop-opacity=".9"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs><circle cx="70" cy="46" r="46" fill="url(#gl)"/><rect x="58" y="22" width="24" height="42" rx="7" fill="#2b2118" stroke="#d9a441" stroke-width="2"/><rect x="63" y="30" width="14" height="26" rx="5" fill="#ffd27a"/><path d="M62 22c0-8 16-8 16 0" fill="none" stroke="#d9a441" stroke-width="2"/><rect x="18" y="86" width="90" height="10" rx="2" fill="#7b4f2a"/><rect x="24" y="76" width="78" height="10" rx="2" fill="#a8723a"/><rect x="30" y="66" width="62" height="10" rx="2" fill="#5d3a1f"/></svg>';
function avatar(a,sz){var hu=hue(a.id);var d=h('div',{class:'av',style:'width:'+sz+'px;height:'+sz+'px;font-size:'+Math.round(sz*.42)+'px;background:linear-gradient(145deg,hsl('+hu+',40%,52%),hsl('+((hu+40)%360)+',45%,28%))',text:a.name.trim().charAt(0)});return d}
function modeToggle(){var b=h('button',{class:'mtog'+(resolved()==='dark'?' on':''),'aria-label':'ডার্ক/লাইট',html:'<i></i>',onclick:function(){S.mode=resolved()==='dark'?'light':'dark';save();applyTheme();render(view)}});return b}
function renderHome(){
  var v=$('#v-home');v.innerHTML='';
  v.appendChild(h('div',{class:'htop'},h('button',{class:'ibtn flat','aria-label':'মেনু',html:ic('list'),onclick:function(){go('settings')}}),h('div',{style:'flex:1'}),h('button',{class:'ibtn flat','aria-label':'খুঁজুন',html:ic('search'),onclick:function(){openExplore('all')}}),modeToggle()));
  v.appendChild(h('div',{class:'hhead'},h('div',{},h('div',{class:'hi',html:greet()+',<br><b>'+S.name+'!</b>'}),h('small',{html:'আজ কি পড়বেন? 🌿'}))));
  var cur=S.recent.filter(function(id){return BOOKS[id]&&!isFinished(id)&&S.pos[id]})[0];
  var q=QUOTES[dayN()%QUOTES.length];
  var hero=h('div',{class:'hero'});hero.innerHTML=LANTERN;
  if(cur){var b=BOOKS[cur];hero.appendChild(h('div',{class:'hb'},h('small',{text:'পড়া চালিয়ে যান · '+nb(Math.round(bookProg(cur)*100))+'%'}),h('h2',{text:b.t}),h('p',{text:'— '+authorName(b.a)}),h('button',{class:'hbtn',html:'বই পড়ুন '+ic('right'),onclick:function(){continueBook(cur)}})));}
  else{var f=picks(1)[0];hero.appendChild(h('div',{class:'hb'},h('h2',{text:'“'+q[0]+'”'}),h('button',{class:'hbtn',html:'বই পড়ুন '+ic('right'),onclick:function(){if(f)openBook(f)}})))}
  v.appendChild(hero);
  v.appendChild(sech('জনপ্রিয় লেখক','সব দেখুন',function(){libAuthor=null;libTab='author';go('lib')}));
  var ar=h('div',{class:'hrow avr'});visAuthors().slice(0,14).forEach(function(a){var b=h('button',{class:'avi',onclick:function(){openAuthor(a.id)}},avatar(a,64),h('small',{text:a.name.split(' ').slice(0,2).join(' ')}));ar.appendChild(b)});v.appendChild(ar);
  v.appendChild(sech('জনপ্রিয় বই'));
  var br=h('div',{class:'hrow'});picks(8,3).forEach(function(id){br.appendChild(bcard(id))});v.appendChild(br);
  var fav=S.fav.filter(function(id){return BOOKS[id]});
  if(fav.length){v.appendChild(sech('পরে পড়ব','সব দেখুন',function(){libTab='later';libAuthor=null;go('lib')}));var fr=h('div',{class:'hrow'});fav.slice(0,8).forEach(function(id){fr.appendChild(bcard(id))});v.appendChild(fr)}
}

/* ---------- library (writer folders) ---------- */
var libAuthor=null,libCat=0,libPdf=false,libTab='author',libLang='all',EN=['sh','dc','ws'];
function renderLib(){
  var v=$('#v-lib');v.innerHTML='';
  var au=libAuthor?authorById(libAuthor):null;
  var sb=h('button',{class:'ibtn','aria-label':'খুঁজুন',html:ic('search'),onclick:function(){openExplore('all')}});
  if(au&&libTab==='author'){
    v.appendChild(h('div',{class:'ptop'},h('button',{class:'ibtn','aria-label':'ফিরে যান',html:ic('back'),onclick:function(){libAuthor=null;renderLib()}}),h('div',{class:'pt'},h('h1',{text:au.name}),h('small',{text:nb(au.n)+'টি বই'})),sb));
    var chips=h('div',{class:'chips'});
    [{name:'সব'}].concat(au.cats).forEach(function(c,i){chips.appendChild(h('button',{class:'chip'+(!libPdf&&libCat===i?' on':''),text:c.name,onclick:function(){libCat=i;libPdf=false;renderLib()}}))});
    if(au.pdfs)chips.appendChild(h('button',{class:'chip'+(libPdf?' on':''),text:'পিডিএফ (অনলাইন)',onclick:function(){libPdf=true;renderLib()}}));
    v.appendChild(chips);
    if(libPdf){
      var list=h('div',{class:'list'});v.appendChild(list);
      list.appendChild(h('div',{class:'note',text:'এই পিডিএফগুলো ইন্টারনেট ছাড়া খোলে না (মূল অ্যাপে এগুলো Google Drive লিংক ছিল)।'}));
      au.pdfs.forEach(function(p){list.appendChild(h('button',{class:'book',onclick:function(){var u='https://drive.google.com/file/d/'+p.d+'/view';if(window.Android&&Android.openUrl)Android.openUrl(u);else window.open(u,'_blank')}},cover(p.d,p.t),h('div',{class:'m'},h('div',{class:'t',text:p.t}),h('div',{class:'s',text:'পিডিএফ · অনলাইন'})),h('span',{class:'chev',html:ic('ex')})))});
      return;
    }
    var g=h('div',{class:'bgrid'});v.appendChild(g);
    var cs=libCat>0?[au.cats[libCat-1]]:au.cats,seen={};
    cs.forEach(function(c){c.books.forEach(function(b){if(!seen[b]){seen[b]=1;g.appendChild(bcard(b))}})});
    return;
  }
  v.appendChild(h('div',{class:'ptop'},h('div',{class:'pt'},h('h1',{text:'আমার লাইব্রেরি'}),h('small',{text:nb(visAuthors().length)+' জন লেখক · '+nb(visBooks().length)+'টি বই'})),sb));
  var chips2=h('div',{class:'chips'});
  [['author','লেখক'],['all','সকল বই'],['reading','পড়ছি'],['later','পরে পড়ব'],['done','সম্পন্ন']].forEach(function(t){chips2.appendChild(h('button',{class:'chip'+(libTab===t[0]?' on':''),text:t[1],onclick:function(){libTab=t[0];libAuthor=null;renderLib()}}))});
  v.appendChild(chips2);
  if(libTab==='author'){
    var lc=h('div',{class:'chips'});[['all','সব'],['bn','বাংলা'],['en','ইংরেজি']].forEach(function(t){lc.appendChild(h('button',{class:'chip sm'+(libLang===t[0]?' on':''),text:t[1],onclick:function(){libLang=t[0];renderLib()}}))});v.appendChild(lc);
    var al=h('div',{class:'alist'});visAuthors().filter(function(a){var en=EN.indexOf(a.id)>=0;return libLang==='all'||(libLang==='en')===en}).forEach(function(a){
      var r=h('button',{class:'arow',onclick:function(){buzz();openAuthor(a.id)}},avatar(a,52),h('div',{class:'m'},h('b',{text:a.name}),h('small',{text:'('+nb(a.n)+'টি বই)'})),h('span',{class:'chev',html:ic('chev')}));al.appendChild(r)});v.appendChild(al);return}
  if(libTab==='all'){var ks=visBooks(),g0=h('div',{class:'bgrid'}),cnt=0;v.appendChild(g0);
    var more=h('button',{class:'btn more2',text:'আরও দেখান',onclick:function(){fillMore()}});
    function fillMore(){ks.slice(cnt,cnt+60).forEach(function(k){g0.appendChild(bcard(k))});cnt+=60;if(cnt>=ks.length)more.remove()}
    v.appendChild(more);fillMore();return}
  var ids=libTab==='later'?S.fav.filter(function(i){return BOOKS[i]}):libTab==='done'?visBooks().filter(isFinished):S.recent.filter(function(i){return BOOKS[i]&&S.pos[i]&&!isFinished(i)});
  if(!ids.length){v.appendChild(h('div',{class:'empty',html:libTab==='later'?'এখনো কোনো বই সেভ করা হয়নি।<br>বইয়ের পাতায় ♡ চাপ দিয়ে সেভ করুন।':libTab==='done'?'এখনো কোনো বই শেষ করা হয়নি।':'এখনো কোনো বই পড়া শুরু হয়নি।<br>লেখক ফোল্ডার থেকে একটি বই বেছে নিন।'}));return}
  var g2=h('div',{class:'bgrid'});ids.forEach(function(i){g2.appendChild(bcard(i))});v.appendChild(g2);
}

/* ---------- explore / search ---------- */
var searchMode='all',searchQ='';
function focusSearch(){var i=$('#v-search input');if(i)i.focus()}
function renderSearch(){
  var v=$('#v-search');v.innerHTML='';
  v.appendChild(h('div',{class:'ptop'},h('button',{class:'ibtn','aria-label':'ফিরে যান',html:ic('back'),onclick:function(){go(prevView)}}),h('div',{class:'pt'},h('h1',{text:'অন্বেষণ করুন'}),h('small',{text:'নতুন বই ও লেখক আবিষ্কার করুন'}))));
  var si=h('div',{class:'sbar in',html:ic('search')});var inp=h('input',{placeholder:'বই, লেখক বা অধ্যায় খুঁজুন',value:searchQ});si.appendChild(inp);v.appendChild(si);
  var chips=h('div',{class:'chips'});
  [['all','সকল'],['author','লেখক'],['book','বই'],['chapter','অধ্যায়']].forEach(function(m){chips.appendChild(h('button',{class:'chip'+(searchMode===m[0]?' on':''),text:m[1],onclick:function(){searchMode=m[0];renderSearch();focusSearch()}}))});
  v.appendChild(chips);
  var out=h('div',{});v.appendChild(out);
  function fill(){
    out.innerHTML='';var q=inp.value.trim();searchQ=q;
    if(!q&&searchMode!=='author'){
      var bn=h('div',{class:'banner'});bn.innerHTML='<div><b>বই পড়ুন, নিজেকে জানুন</b><small>'+nb(visBooks().length)+'টি বই · সম্পূর্ণ অফলাইন</small></div>'+LOGO;out.appendChild(bn);
      out.appendChild(sech('সম্পাদকীয় পছন্দ'));var g=h('div',{class:'bgrid'});picks(6,11).forEach(function(id){g.appendChild(bcard(id))});out.appendChild(g);return;
    }
    var n=0,ac=0;
    if(searchMode==='all'||searchMode==='author'){
      var as=visAuthors().filter(function(a){return !q||a.name.indexOf(q)>=0});
      if(as.length){if(searchMode==='all')out.appendChild(sech('লেখক'));var fg=h('div',{class:'fgrid'});as.slice(0,searchMode==='all'?4:60).forEach(function(a){fg.appendChild(folderCard(a))});out.appendChild(fg)}
      ac=as.length;
    }
    if(searchMode==='author'){if(!ac)out.appendChild(h('div',{class:'empty',text:'কোনো লেখক পাওয়া যায়নি'}));return}
    var ks=visBooks();
    if(searchMode==='all'||searchMode==='book'){
      var bl=ks.filter(function(k){return BOOKS[k].t.indexOf(q)>=0}).slice(0,60);
      if(bl.length){if(searchMode==='all')out.appendChild(sech('বই'));var l=h('div',{class:'list'});bl.forEach(function(k){l.appendChild(bookRow(k))});out.appendChild(l);n+=bl.length}
    }
    if(searchMode==='all'||searchMode==='chapter'){
      var l2=h('div',{class:'list'}),cn=0,lim=searchMode==='all'?25:100;
      ks.forEach(function(id){var b=BOOKS[id];b.c.forEach(function(ct,i){if(cn<lim&&ct.indexOf(q)>=0){cn++;l2.appendChild(h('button',{class:'book',onclick:function(){openReader(id,i,0)}},cover(id,b.t),h('div',{class:'m'},h('div',{class:'t',text:ct}),h('div',{class:'s',text:b.t+' · '+authorName(b.a)})),h('span',{class:'chev',html:ic('chev')})))}})});
      if(cn){if(searchMode==='all')out.appendChild(sech('অধ্যায়'));out.appendChild(l2);n+=cn}
    }
    if(!n&&!ac)out.appendChild(h('div',{class:'empty',text:'কিছু পাওয়া যায়নি'}));
  }
  var ft;inp.addEventListener('input',function(){clearTimeout(ft);ft=setTimeout(fill,220)});fill();
}

/* ---------- sheets / popups ---------- */
var sheetOpen=false,popOpen=false;
function showSheet(title,node,onclose,peek){
  $('#sheet').classList.toggle('peek',!!peek);$('#scrim').classList.toggle('peek',!!peek);
  $('#sheet-t').textContent=title||'';var b=$('#sheet-b');b.innerHTML='';b.appendChild(node);b.scrollTop=0;
  $('#sheet').classList.add('on');$('#scrim').classList.add('on');sheetOpen=true;sheetClose=onclose||null;
}
var sheetClose=null;
function hideSheet(){$('#sheet').classList.remove('on');$('#scrim').classList.remove('on');sheetOpen=false;if(sheetClose){var f=sheetClose;sheetClose=null;f()}}
$('#scrim').addEventListener('click',hideSheet);
function popup(title,node,acts){
  var b=$('#pop-b');b.innerHTML='';b.appendChild(h('h4',{text:title}));b.appendChild(node);
  var a=h('div',{class:'acts'});
  (acts||[['ঠিক আছে',null,1]]).forEach(function(x){a.appendChild(h('button',{class:x[2]?'pri':'',text:x[0],onclick:function(){hidePop();if(x[1])x[1]()}}))});
  b.appendChild(a);$('#pop').classList.add('on');popOpen=true;
}
function hidePop(){$('#pop').classList.remove('on');popOpen=false}
$('#pop').addEventListener('click',function(e){if(e.target===this)hidePop()});

/* ---------- book detail ---------- */
function toggleFav(id){var i=S.fav.indexOf(id);if(i>=0)S.fav.splice(i,1);else S.fav.unshift(id);save()}
function openBook(id){
  var b=BOOKS[id],p=S.pos[id],box=h('div',{});
  box.appendChild(h('div',{class:'dhead'},cover(id,b.t),h('div',{},h('h2',{text:b.t}),h('p',{text:(b.y?nb(b.y)+' · ':'')+nb(b.c.length)+' অধ্যায়'}),h('p',{text:authorName(b.a)+' · আনুমানিক '+fmtMin(b.w/1000)}),h('p',{text:bookCats(id).join(', ')}))));
  var fav=h('button',{class:'btn sec2'+(S.fav.indexOf(id)>=0?' on':''),'aria-label':'প্রিয়',html:ic('heart'),onclick:function(){toggleFav(id);fav.classList.toggle('on')}});
  box.appendChild(h('div',{class:'btnrow'},h('button',{class:'btn',text:p?'পড়া চালিয়ে যান':'পড়া শুরু করুন',onclick:function(){hideSheet();continueBook(id)}}),fav));
  var done=S.read[id]||{};
  var l=h('div',{class:'cplist'});
  b.c.forEach(function(ct,i){l.appendChild(h('button',{class:'it'+(p&&p.c===i?' cur':''),onclick:function(){hideSheet();openReader(id,i,0)}},h('span',{class:'n',text:nb(i+1)}),h('span',{text:ct}),done[i]?h('span',{class:'ok',html:ic('check')}):null))});
  box.appendChild(l);
  showSheet('',box);
}
function continueBook(id){var p=S.pos[id];if(p)openReader(id,p.c,p.p);else openReader(id,0,0)}

/* ---------- reader ---------- */
var R={bid:null,ci:0,p:0,target:null,hlIdx:-1};
var loading={};
function loadBook(id){
  return new Promise(function(res,rej){
    if(HB._b[id])return res();
    (HB._w[id]=HB._w[id]||[]).push(res);
    if(loading[id])return;loading[id]=1;
    var s=document.createElement('script');s.src='data/'+BOOKS[id].a+'/'+id+'.js';s.onerror=function(){delete loading[id];rej(new Error('load'));toast('বইটি লোড করা যায়নি')};document.head.appendChild(s);
  });
}
function openReader(id,ci,p,target){
  buzz();hideSheet();
  loadBook(id).then(function(){
    R.bid=id;R.ci=Math.max(0,Math.min(ci,BOOKS[id].c.length-1));R.p=p||0;R.target=target==null?null:target;
    var i=S.recent.indexOf(id);if(i>=0)S.recent.splice(i,1);S.recent.unshift(id);S.recent=S.recent.slice(0,50);S.last=id;save();
    $('#reader').classList.add('on');$('#reader').classList.remove('immersive');applyReader();renderChapter();keepOn(true);
  });
}
function closeReader(){asStop();savePos();$('#reader').classList.remove('on');hideHl();keepOn(false);if(view!=='search'&&view!=='settings')render(view)}
function readerOpen(){return $('#reader').classList.contains('on')}
function keepOn(on){try{if(window.Android&&Android.keepScreenOn)Android.keepScreenOn(!!(on&&S.keepOn))}catch(e){}}
var scroller=$('#rscroll'),rtext=$('#rtext');
function chapterHls(){return (S.hl[R.bid]||[]).map(function(x,i){return {h:x,i:i}}).filter(function(o){return o.h.c===R.ci}).sort(function(a,b){return a.h.s-b.h.s})}
function renderChapter(keep){
  var row=HB._b[R.bid][R.ci],title=row[0],txt=row[1],bk=BOOKS[R.bid];
  var top=keep?scroller.scrollTop:0;
  rtext.innerHTML='';rtext.appendChild(h('h1',{text:title}));rtext.appendChild(h('div',{class:'orn',html:'<i></i><b>❖</b><i></i>'}));
  var hls=chapterHls(),off=0,frag=document.createDocumentFragment();
  txt.split('\n').forEach(function(line){
    var len=line.length;
    if(line.trim()){
      var p=h('p',{'data-o':off}),pos=0,end=off+len;
      hls.forEach(function(o){
        var s=Math.max(o.h.s,off),e=Math.min(o.h.e,end);if(e<=s||s<off+pos)return;
        if(s-off>pos)p.appendChild(document.createTextNode(line.slice(pos,s-off)));
        var m=h('mark',{class:'c'+o.h.col+(o.h.note?' hasnote':''),'data-i':o.i,text:line.slice(s-off,e-off)});p.appendChild(m);pos=e-off;
      });
      if(pos<len)p.appendChild(document.createTextNode(line.slice(pos)));
      frag.appendChild(p);
    }
    off+=len+1;
  });
  rtext.appendChild(frag);
  var nx=R.ci<bk.c.length-1;
  rtext.appendChild(h('div',{style:'text-align:center;margin:38px 0 10px;font-family:var(--font)'},
    nx?h('button',{class:'btn',style:'display:inline-block;padding:14px 34px;font-size:19px',text:'পরের অধ্যায় ›',onclick:function(){gotoChapter(R.ci+1)}}):h('div',{style:'color:var(--rmuted);font-size:18px',text:'— বই শেষ —'})));
  $('#r-title').textContent=bk.t;$('#r-sub').textContent=title;
  var bmOn=S.bm.some(function(b){return b.b===R.bid&&b.c===R.ci});$('#r-bm').classList.toggle('on',bmOn);
  $('#r-prev').disabled=R.ci===0;$('#r-next').disabled=!nx;
  requestAnimationFrame(function(){requestAnimationFrame(function(){
    if(keep){scroller.scrollTop=top}
    else if(R.target!=null){var ms=rtext.querySelectorAll('p'),t=null;ms.forEach(function(pp){if(+pp.dataset.o<=R.target)t=pp});if(t)scroller.scrollTop=Math.max(0,t.offsetTop-120);R.target=null}
    else scroller.scrollTop=R.p*Math.max(0,scroller.scrollHeight-scroller.clientHeight);
    updProg();
  })});
}
function gotoChapter(i){asStop();if(i<0||i>=BOOKS[R.bid].c.length)return;savePos();R.ci=i;R.p=0;renderChapter();scroller.scrollTop=0;buzz()}
var saveT,lastAct=Date.now();
function curP(){var m=scroller.scrollHeight-scroller.clientHeight;return m>0?Math.min(1,scroller.scrollTop/m):1}
function updProg(){
  var p=curP(),n=BOOKS[R.bid].c.length,bp=Math.round(((R.ci+p)/n)*100);$('#rprog').style.width=(p*100)+'%';
  $('#rtr').style.width=bp+'%';$('#r-l').textContent='অধ্যায় '+nb(R.ci+1)+'/'+nb(n);$('#r-r').textContent=nb(bp)+'%';
}
$('#rtrack').addEventListener('click',function(e){var r=this.getBoundingClientRect(),f=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),n=BOOKS[R.bid].c.length,x=f*n,ci=Math.min(n-1,Math.floor(x));if(ci===R.ci)scroller.scrollTop=(x-ci)*(scroller.scrollHeight-scroller.clientHeight);else openReader(R.bid,ci,x-ci)});
function savePos(){if(!R.bid)return;var p=curP();S.pos[R.bid]={c:R.ci,p:p,t:Date.now()};
  if(p>.92){var r=(S.read[R.bid]=S.read[R.bid]||{});if(!r[R.ci]){r[R.ci]=1;var k=dkey();S.fin[k]=(S.fin[k]||0)+1}}
  save()}
scroller.addEventListener('scroll',function(){lastAct=Date.now();updProg();clearTimeout(saveT);saveT=setTimeout(savePos,500)},{passive:true});
['touchstart','mousedown','keydown'].forEach(function(ev){document.addEventListener(ev,function(){lastAct=Date.now()},{passive:true})});
setInterval(function(){if(readerOpen()&&!document.hidden&&Date.now()-lastAct<90000){var k=dkey();S.stats[k]=(S.stats[k]||0)+5;save()}},5000);
document.addEventListener('visibilitychange',function(){if(document.hidden&&readerOpen())savePos()});
window.addEventListener('pagehide',function(){if(readerOpen())savePos()});

/* tap handling */
var downX=0,downY=0;
rtext.addEventListener('pointerdown',function(e){downX=e.clientX;downY=e.clientY});
rtext.addEventListener('click',function(e){
  if(Math.abs(e.clientX-downX)>8||Math.abs(e.clientY-downY)>8)return;
  var sel=window.getSelection();if(sel&&!sel.isCollapsed)return;
  var m=e.target.closest&&e.target.closest('mark');
  if(m){markMenu(+m.dataset.i);return}
  $('#reader').classList.toggle('immersive');hideHl();
});
/* selection -> highlight bar */
var selT,curSel=null;
document.addEventListener('selectionchange',function(){clearTimeout(selT);selT=setTimeout(onSel,180)});
function offsetIn(node,off){
  var el=node.nodeType===3?node.parentElement:node;var p=el&&el.closest?el.closest('#rtext p'):null;
  if(!p)return null;var r=document.createRange();r.setStart(p,0);try{r.setEnd(node,off)}catch(e){return null}
  return +p.dataset.o+r.toString().length;
}
function onSel(){
  if(!readerOpen())return;var sel=window.getSelection();
  if(!sel||sel.isCollapsed||!sel.rangeCount){hideHl();return}
  var r=sel.getRangeAt(0);if(!rtext.contains(r.commonAncestorContainer)){hideHl();return}
  var s=offsetIn(r.startContainer,r.startOffset),e=offsetIn(r.endContainer,r.endOffset);
  if(s==null||e==null){
    // boundary on a non-paragraph node: try to approximate
    hideHl();return}
  if(e<s){var t=s;s=e;e=t}
  var txt=HB._b[R.bid][R.ci][1];while(s<e&&/\s/.test(txt[s]))s++;while(e>s&&/\s/.test(txt[e-1]))e--;
  if(e<=s){hideHl();return}
  curSel={s:s,e:e};showHl();
}
function hlButtons(extra){
  var b=$('#hlbar');b.innerHTML='';
  for(var c=1;c<=4;c++)(function(c){b.appendChild(h('button',{class:'dot','aria-label':'হাইলাইট',style:'background:var(--hl'+c+')',onclick:function(){addHl(c)}}))})(c);
  b.appendChild(h('span',{class:'sep'}));
  return b;
}
function showHl(){
  var b=hlButtons();
  b.appendChild(h('button',{class:'ic','aria-label':'নোট',html:ic('note'),onclick:function(){addHl(1,true)}}));
  b.appendChild(h('button',{class:'ic','aria-label':'কপি',html:ic('copy'),onclick:function(){copyText(HB._b[R.bid][R.ci][1].slice(curSel.s,curSel.e));hideHl();clearSel()}}));
  b.appendChild(h('button',{class:'ic','aria-label':'শেয়ার',html:ic('share'),onclick:function(){shareText(HB._b[R.bid][R.ci][1].slice(curSel.s,curSel.e))}}));
  b.classList.add('on');
}
function hideHl(){$('#hlbar').classList.remove('on');curSel=null}
function clearSel(){var s=window.getSelection();if(s)s.removeAllRanges()}
function addHl(col,withNote){
  if(!curSel)return;var s=curSel.s,e=curSel.e,txt=HB._b[R.bid][R.ci][1].slice(s,e);
  var arr=(S.hl[R.bid]=S.hl[R.bid]||[]);
  S.hl[R.bid]=arr=arr.filter(function(x){return !(x.c===R.ci&&x.s<e&&x.e>s)});
  var item={c:R.ci,s:s,e:e,col:col,txt:txt.slice(0,600),note:'',ts:Date.now()};arr.push(item);save();
  hideHl();clearSel();renderChapter(true);buzz();
  if(withNote){var i=S.hl[R.bid].indexOf(item);noteEdit(i)}else toast('হাইলাইট সেভ হয়েছে');
}
function noteEdit(i){
  var it=S.hl[R.bid][i];if(!it)return;var ta=h('textarea',{class:'sbox',placeholder:'আপনার নোট লিখুন…'});ta.value=it.note||'';
  popup('নোট',ta,[['বাতিল',null],['সেভ',function(){it.note=ta.value.trim();save();renderChapter(true)},1]]);setTimeout(function(){ta.focus()},250);
}
function markMenu(i){
  var it=(S.hl[R.bid]||[])[i];if(!it)return;
  var box=h('div',{});
  var cols=h('div',{class:'seg',style:'margin-bottom:14px'});
  for(var c=1;c<=4;c++)(function(c){cols.appendChild(h('button',{class:'dot',style:'width:40px;height:40px;border-radius:50%;background:var(--hl'+c+');border:3px solid '+(it.col===c?'var(--text)':'transparent'),onclick:function(){it.col=c;save();hidePop();renderChapter(true)}}))})(c);
  box.appendChild(cols);
  box.appendChild(h('div',{style:'color:var(--muted);font-size:17px;line-height:1.6;max-height:110px;overflow:auto',text:(it.note?'নোট: '+it.note:'“'+it.txt.slice(0,160)+'”')}));
  popup('হাইলাইট',box,[['কপি',function(){copyText(it.txt)}],['নোট',function(){noteEdit(i)}],['মুছুন',function(){S.hl[R.bid].splice(i,1);save();renderChapter(true)}]]);
}
function copyText(t){
  try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){toast('কপি হয়েছে')},fb);return}}catch(e){}
  fb();function fb(){var ta=h('textarea',{style:'position:fixed;opacity:0'});ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');toast('কপি হয়েছে')}catch(e){}ta.remove()}
}
function shareText(t){
  var full='“'+t+'”\n— হুমায়ূন আহমেদ, '+BOOKS[R.bid].t;
  try{if(window.Android&&Android.share){Android.share(full);return}if(navigator.share){navigator.share({text:full});return}}catch(e){}copyText(full);
}

/* reader buttons */
function setIcons(){
  $('#r-back').innerHTML=ic('back');$('#r-find').innerHTML=ic('find');$('#r-bm').innerHTML=ic('bm');
  $('#r-prev').innerHTML=ic('dleft');$('#r-next').innerHTML=ic('dright');
  $('#r-aa').innerHTML=ic('aa')+'<span>ফন্ট</span>';$('#r-dk').innerHTML=ic('moon')+'<span>ডার্ক মোড</span>';$('#r-as').innerHTML=ic('play')+'<span>অটো স্ক্রল</span>';$('#r-chap').innerHTML=ic('list')+'<span>অধ্যায়</span>';
}
$('#r-back').addEventListener('click',closeReader);
$('#r-prev').addEventListener('click',function(){gotoChapter(R.ci-1)});
$('#r-next').addEventListener('click',function(){gotoChapter(R.ci+1)});
$('#r-bm').addEventListener('click',function(){
  var i=-1;S.bm.forEach(function(b,k){if(b.b===R.bid&&b.c===R.ci)i=k});
  if(i>=0){S.bm.splice(i,1);toast('বুকমার্ক সরানো হয়েছে')}else{S.bm.unshift({b:R.bid,c:R.ci,p:curP(),ts:Date.now()});toast('বুকমার্ক করা হয়েছে')}
  save();$('#r-bm').classList.toggle('on',i<0);buzz();
});
$('#r-find').addEventListener('click',function(){
  var inp=h('input',{class:'sbox',style:'min-height:0;height:54px',placeholder:'এই অধ্যায়ে শব্দ খুঁজুন'});
  function go(){var q=inp.value.trim();if(!q)return;hidePop();$('#reader').classList.add('immersive');var ok=false;try{ok=window.find(q,false,false,true,false,false,false)}catch(e){}if(!ok)toast('শব্দটি পাওয়া যায়নি')}
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')go()});
  popup('খুঁজুন',inp,[['বাতিল',null],['খুঁজুন',go,1]]);setTimeout(function(){inp.focus()},250);
});
$('#r-chap').addEventListener('click',function(){
  var bk=BOOKS[R.bid],done=S.read[R.bid]||{},l=h('div',{class:'cplist'});
  bk.c.forEach(function(ct,i){l.appendChild(h('button',{class:'it'+(i===R.ci?' cur':''),'data-cur':i===R.ci?1:0,onclick:function(){hideSheet();savePos();R.ci=i;R.p=0;renderChapter()}},h('span',{class:'n',text:nb(i+1)}),h('span',{text:ct}),done[i]?h('span',{class:'ok',html:ic('check')}):null))});
  showSheet(bk.t,l);setTimeout(function(){var c=$('#sheet-b .it[data-cur="1"]');if(c)c.scrollIntoView({block:'center'})},350);
});
$('#r-aa').addEventListener('click',displaySheet);
$('#r-dk').addEventListener('click',function(){S.mode=resolved()==='dark'?'light':'dark';if(S.rtheme!=='app')S.rtheme=resolved()==='dark'?'dark':'cream';save();applyTheme();buzz()});
var asT=null,asAcc=0,asLast=0;
function asStop(){if(asT){cancelAnimationFrame(asT);asT=null}$('#r-as').classList.remove('on');$('#r-as svg').innerHTML=P.play}
function asStart(){if(asT)return;$('#r-as').classList.add('on');$('#r-as svg').innerHTML=P.pause;asLast=performance.now();asAcc=0;
  (function tick(t){asT=requestAnimationFrame(tick);var dt=Math.min(64,t-asLast);asLast=t;asAcc+=(S.asSpeed||40)*dt/1000;var st=Math.floor(asAcc);if(st>=1){asAcc-=st;var b4=scroller.scrollTop;scroller.scrollTop=b4+st;if(scroller.scrollTop===b4&&b4>0){asStop();toast('অধ্যায় শেষ')}}})(asLast)}
$('#r-as').addEventListener('click',function(){buzz();asT?asStop():asStart()});
scroller.addEventListener('touchstart',function(){if(asT)asStop()},{passive:true});

/* display settings sheet */
function ctrlRange(label,key,min,max,step,fmt){
  var inp=h('input',{type:'range',min:min,max:max,step:step,value:S[key]}),out=h('b',{text:fmt(S[key])});
  inp.addEventListener('input',function(){S[key]=+inp.value;out.textContent=fmt(S[key]);applyReader();if(key==='size'||key==='lh'||key==='para')keepScroll()});
  inp.addEventListener('change',save);
  return h('div',{class:'ctrl'},h('div',{class:'cl'},h('span',{text:label}),out),inp);
}
function keepScroll(){var p=curP();requestAnimationFrame(function(){scroller.scrollTop=p*(scroller.scrollHeight-scroller.clientHeight);updProg()})}
function segCtrl(label,opts,key,after){
  var seg=h('div',{class:'seg'});
  Object.keys(opts).forEach(function(k){seg.appendChild(h('button',{class:'pill'+(S[key]==k?' on':''),text:opts[k],onclick:function(){S[key]=isNaN(+k)?k:+k;save();[].forEach.call(seg.children,function(c){c.classList.remove('on')});this.classList.add('on');applyReader();if(after)after()}}))});
  return h('div',{class:'ctrl'},h('div',{class:'cl'},h('span',{text:label})),seg);
}
function displaySheet(){
  var box=h('div',{});
  var sz=h('div',{class:'ctrl'});var out=h('b',{text:nb(S.size)}),inp=h('input',{type:'range',min:14,max:44,step:1,value:S.size});
  function setS(v){S.size=Math.max(14,Math.min(44,v));inp.value=S.size;out.textContent=nb(S.size);applyReader();keepScroll();save()}
  inp.addEventListener('input',function(){setS(+inp.value)});
  sz.appendChild(h('div',{class:'cl'},h('span',{text:'লেখার আকার'}),out));
  sz.appendChild(h('div',{class:'stepper'},h('button',{text:'A−',onclick:function(){setS(S.size-1)}}),inp,h('button',{text:'A+',style:'font-size:24px',onclick:function(){setS(S.size+1)}})));
  box.appendChild(sz);
  var fo={};Object.keys(FONTS).forEach(function(k){fo[k]=FONTS[k].n});
  box.appendChild(segCtrl('ফন্ট',fo,'font',keepScroll));
  box.appendChild(ctrlRange('লাইনের ব্যবধান','lh',1.3,2.8,.1,function(v){return nb((+v).toFixed(1))}));
  box.appendChild(ctrlRange('অনুচ্ছেদের ফাঁক','para',0,2,.1,function(v){return nb((+v).toFixed(1))}));
  box.appendChild(ctrlRange('পাশের মার্জিন','margin',8,56,2,function(v){return nb(v)}));
  box.appendChild(segCtrl('লেখা সাজানো',{left:'বামে',justify:'জাস্টিফাই'},'align',keepScroll));
  box.appendChild(segCtrl('পড়ার থিম',RT,'rtheme'));
  box.appendChild(segCtrl('অটো স্ক্রল গতি',{20:'ধীর',40:'মাঝারি',75:'দ্রুত',130:'খুব দ্রুত'},'asSpeed'));
  box.appendChild(ctrlRange('ব্রাইটনেস ঢাকনা (ডিম)','dim',0,70,5,function(v){return nb(v)+'%'}));
  showSheet('পড়ার সেটিং',box,null,true);
}

/* ---------- bookmarks & highlights ---------- */
var notesTab='bm';
function renderNotes(){
  var v=$('#v-notes');v.innerHTML='';
  v.appendChild(h('div',{class:'ptop'},h('div',{class:'pt'},h('h1',{text:'বুকমার্ক'}),h('small',{text:'আপনার সংগ্রহ'}))));
  var tabs=h('div',{class:'chips'});
  [['bm','বুকমার্ক'],['hl','হাইলাইট ও নোট']].forEach(function(t){tabs.appendChild(h('button',{class:'chip'+(notesTab===t[0]?' on':''),text:t[1],onclick:function(){notesTab=t[0];renderNotes()}}))});
  v.appendChild(tabs);var l=h('div',{class:'list'});v.appendChild(l);
  function item(bid,title,quote,label,open,del,col){
    var it=h('div',{class:'bmi',onclick:open});it.appendChild(cover(bid,BOOKS[bid].t,'sm'));
    it.appendChild(h('div',{class:'m'},h('b',{text:title}),h('q',{text:quote,style:col?'border-color:var(--hl'+col+')':''}),h('small',{text:label})));
    it.appendChild(h('button',{class:'tr','aria-label':'মুছুন',html:ic('trash'),onclick:function(e){e.stopPropagation();del()}}));l.appendChild(it);
  }
  if(notesTab==='hl'){
    var all=[];Object.keys(S.hl).forEach(function(b){if(!BOOKS[b])return;S.hl[b].forEach(function(x,i){all.push({b:b,i:i,x:x})})});
    all.sort(function(a,b){return b.x.ts-a.x.ts});
    if(!all.length)l.appendChild(h('div',{class:'empty',html:'এখনো কোনো হাইলাইট নেই।<br>পড়ার সময় যেকোনো লেখা চেপে ধরে সিলেক্ট করুন,<br>তারপর রং বেছে নিন।'}));
    all.forEach(function(o){var x=o.x;item(o.b,BOOKS[o.b].t,'“'+(x.txt.length>160?x.txt.slice(0,160)+'…':x.txt)+'”'+(x.note?'  ✎ '+x.note:''),BOOKS[o.b].c[x.c]+' · '+nb(new Date(x.ts).getDate())+' '+MO[new Date(x.ts).getMonth()],function(){hlAction(o)},function(){S.hl[o.b].splice(o.i,1);save();renderNotes()},x.col)});
  }else{
    if(!S.bm.length)l.appendChild(h('div',{class:'empty',html:'এখনো কোনো বুকমার্ক নেই।<br>পড়ার পাতার ওপরের বুকমার্ক আইকনে চাপ দিন।'}));
    S.bm.forEach(function(b,i){if(!BOOKS[b.b])return;item(b.b,BOOKS[b.b].t,BOOKS[b.b].c[b.c],'অধ্যায় '+nb(b.c+1)+' · '+authorName(BOOKS[b.b].a),function(){bmAction(i)},function(){S.bm.splice(i,1);save();renderNotes()})});
  }
}
function hlAction(o){
  popup('হাইলাইট',h('div',{style:'color:var(--muted);line-height:1.6;max-height:140px;overflow:auto;font-size:17px',text:'“'+o.x.txt.slice(0,220)+'”'}),
   [['মুছুন',function(){S.hl[o.b].splice(o.i,1);save();renderNotes()}],['কপি',function(){copyText(o.x.txt)}],['খুলুন',function(){openReader(o.b,o.x.c,0,o.x.s)},1]]);
}
function bmAction(i){var b=S.bm[i];popup('বুকমার্ক',h('div',{style:'color:var(--muted);font-size:18px',text:BOOKS[b.b].t+' · '+BOOKS[b.b].c[b.c]}),[['মুছুন',function(){S.bm.splice(i,1);save();renderNotes()}],['খুলুন',function(){openReader(b.b,b.c,b.p)},1]])}

/* ---------- profile ---------- */
function renderProfile(){
  var v=$('#v-profile');v.innerHTML='';
  v.appendChild(h('div',{class:'ptop'},h('div',{class:'pt'},h('h1',{text:'প্রোফাইল'})),h('button',{class:'ibtn','aria-label':'সেটিংস',html:ic('gear'),onclick:function(){go('settings')}})));
  var hl=0;Object.keys(S.hl).forEach(function(k){if(BOOKS[k])hl+=S.hl[k].length});
  var fin=visBooks().filter(isFinished).length;
  var ph=h('div',{class:'phead'});
  ph.appendChild(h('div',{class:'bigav',text:(S.name||'R').trim().charAt(0).toUpperCase()}));
  ph.appendChild(h('div',{class:'pn'},h('b',{text:S.name}),h('small',{text:'বইপ্রেমী পাঠক'})));
  ph.appendChild(h('button',{class:'ibtn','aria-label':'নাম বদলান',html:ic('pencil'),onclick:renamePop}));v.appendChild(ph);
  v.appendChild(h('div',{class:'stats3'},
    h('div',{html:'<b>'+nb(fin)+'</b><small>সম্পন্ন বই</small>'}),h('div',{html:'<b>'+nb(S.bm.length)+'</b><small>বুকমার্ক</small>'}),h('div',{html:'<b>'+nb(hl)+'</b><small>হাইলাইট</small>'})));
  v.appendChild(h('div',{class:'qcard',html:'<i>“</i><p>বই পড়া মানে নিজেকে আরও ভালো করে জানা।</p>'}));
  var tot=0;Object.keys(BOOKS).forEach(function(k){tot+=BOOKS[k].c.length});
  var g=h('div',{class:'gcard'});
  [nRow('user','আমার নাম',S.name,renamePop,null,'bl'),
   nRow('folder','লেখক দেখান/লুকান',nb(CAT.authors.length-S.hiddenAuthors.length)+'/'+nb(CAT.authors.length),catPop),
   nRow('screen','অফলাইন বই',nb(Object.keys(BOOKS).length)+'টি',function(){toast('সব বই ফোনেই আছে — ইন্টারনেট লাগে না')},nb(CAT.authors.length)+' লেখক · '+nb(tot)+'টি অধ্যায়','or'),
   nRow('backup','ব্যাকআপ কপি করুন','',backupCopy,'হাইলাইট, নোট, বুকমার্ক','bl'),
   nRow('restore','ব্যাকআপ রিস্টোর','',backupRestore,null,'bl'),
   nRow('info','বাংলা সাহিত্য','',function(){popup('বাংলা সাহিত্য',h('div',{style:'color:var(--muted);line-height:1.7;font-size:18px',html:'Bangla Sahitto · সংস্করণ ৫.০<br>'+nb(CAT.authors.length)+' লেখক · '+nb(Object.keys(BOOKS).length)+'টি বই · '+nb(tot)+'টি অধ্যায়<br>সম্পূর্ণ অফলাইন।'}))},null)
  ].forEach(function(r){g.appendChild(r)});v.appendChild(g);
}

/* ---------- settings ---------- */
function tRow(icon,title,sub,key,after,cls){
  var sw=h('div',{class:'sw'+(S[key]?' on':'')});
  return h('button',{class:'srow',onclick:function(){S[key]=S[key]?0:1;sw.classList.toggle('on',!!S[key]);save();buzz();if(after)after()}},h('div',{class:'sic '+(cls||''),html:ic(icon)}),h('div',{class:'tx'},h('b',{text:title}),sub?h('small',{text:sub}):null),sw);
}
function nRow(icon,title,val,fn,sub,cls){return h('button',{class:'srow',onclick:fn},h('div',{class:'sic '+(cls||''),html:ic(icon)}),h('div',{class:'tx'},h('b',{text:title}),sub?h('small',{text:sub}):null),h('div',{class:'val',html:(val?'<span>'+val+'</span>':'')+ic('chev')}))}
function grp(title){var g=h('div',{class:'gcard'});for(var i=1;i<arguments.length;i++)g.appendChild(arguments[i]);return [h('div',{class:'sgrp',text:title}),g]}
var ACC={green:'#2f9b6f',blue:'#3b82f6',violet:'#8b5cf6',orange:'#e8872b',rose:'#e5527c',teal:'#14a3a3'};
var MODEN={light:'লাইট',dark:'ডার্ক',sepia:'সেপিয়া',system:'অটো'};
function renderSettings(){
  var v=$('#v-settings');v.innerHTML='';
  v.appendChild(h('div',{class:'ptop'},h('button',{class:'ibtn','aria-label':'ফিরে যান',html:ic('back'),onclick:function(){go('profile')}}),h('div',{class:'pt'},h('h1',{text:'সেটিংস'}))));
  v.appendChild(h('div',{class:'sgrp',text:'থিম'}));
  var tiles=h('div',{class:'tiles'});
  [['light','sun'],['dark','moon'],['sepia','font'],['system','half']].forEach(function(m){
    tiles.appendChild(h('button',{class:'tile'+(S.mode===m[0]?' on':''),html:'<div class="tp t-'+m[0]+'">'+ic(m[1])+'</div><span>'+MODEN[m[0]]+'</span>',onclick:function(){S.mode=m[0];save();applyTheme();renderSettings()}}));
  });
  v.appendChild(tiles);
  v.appendChild(h('div',{class:'sgrp',text:'ডিজাইন'}));
  var sk=h('div',{class:'skins'});
  [['boi','বইপথ · সবুজ'],['path','পাঠসাথী · বেগুনি']].forEach(function(k){sk.appendChild(h('button',{class:'skin sk-'+k[0]+(S.skin===k[0]?' on':''),html:'<i></i><span>'+k[1]+'</span>',onclick:function(){S.skin=k[0];save();applyTheme();renderSettings()}}))});
  v.appendChild(sk);
  v.appendChild(h('div',{class:'sgrp',text:'পড়ার সেটিং'}));
  var card=h('div',{class:'gcard sl'});
  var prev=h('div',{class:'sprev',text:'আমার সোনার বাংলা, আমি তোমায় ভালোবাসি। চিরদিন তোমার আকাশ, তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি।'});
  function pv(){prev.style.fontSize=S.size+'px';prev.style.lineHeight=S.lh;prev.style.fontFamily=(FONTS[S.font]||FONTS.Solaiman).f;applyReader()}
  function slider(label,key,min,max,step,fmt,small,big){
    var out=h('b',{text:fmt(S[key])}),inp=h('input',{type:'range',min:min,max:max,step:step,value:S[key]});
    inp.addEventListener('input',function(){S[key]=+inp.value;out.textContent=fmt(S[key]);pv()});inp.addEventListener('change',save);
    return h('div',{class:'ctrl'},h('div',{class:'cl'},h('span',{text:label}),out),h('div',{class:'srng'},h('i',{text:small,style:'font-size:14px'}),inp,h('i',{text:big,style:'font-size:24px'})));
  }
  card.appendChild(slider('লেখার আকার','size',14,44,1,function(x){return nb(x)},'অ','অ'));
  card.appendChild(slider('লাইনের ব্যবধান','lh',1.3,2.8,.1,function(x){return nb((+x).toFixed(1))},'≡','☰'));
  card.appendChild(prev);v.appendChild(card);pv();
  var digits=h('div',{class:'seg2'});
  [['bn','বাংলা'],['en','EN']].forEach(function(d){digits.appendChild(h('span',{class:S.digits===d[0]?'on':'',text:d[1]}))});
  var dRow=h('button',{class:'srow',onclick:function(){S.digits=S.digits==='bn'?'en':'bn';save();renderSettings()}},h('div',{class:'sic',html:ic('num')}),h('div',{class:'tx'},h('b',{text:'সংখ্যার ধরন'})),digits);
  [
   grp('পড়া',nRow('font','পড়ার ফন্ট',FONTS[S.font].n,fontPop),nRow('aa','আরও পড়ার সেটিং','',displaySheet,'ফন্ট, মার্জিন, পড়ার থিম, ডিম'),tRow('play','রিডিং প্রগ্রেস দেখান','পড়ার অগ্রগতি দেখাবে','showProg',function(){applyReader()},'or'),tRow('resume','শেষ বই খুলুন','অ্যাপ চালু করলেই শেষ পড়া জায়গা থেকে','resume',null,'or'),tRow('screen','স্ক্রিন জাগিয়ে রাখুন','পড়ার সময় স্ক্রিন বন্ধ হবে না','keepOn',null,'bl'),dRow),
   grp('অ্যাপ',tRow('vib','হ্যাপটিক','ট্যাপ করলে হালকা কাঁপবে','haptic'),tRow('anim','অ্যানিমেশন','স্মুথ ট্রানজিশন','anim',applyTheme),tRow('moon','AMOLED কালো','ডার্ক মোডে গাঢ় কালো ব্যাকগ্রাউন্ড','amoled',applyTheme)),
   grp('ম্যানেজ',nRow('folder','লেখক দেখান/লুকান',nb(CAT.authors.length-S.hiddenAuthors.length)+'/'+nb(CAT.authors.length),catPop),
     nRow('clear','সব পড়ার তথ্য মুছুন','',function(){popup('নিশ্চিত?',h('div',{style:'color:var(--muted);line-height:1.6',text:'অগ্রগতি, হাইলাইট, নোট ও বুকমার্ক মুছে যাবে। বইয়ের লেখা মুছবে না।'}),[['বাতিল',null],['মুছুন',function(){['pos','hl','read','stats','fin'].forEach(function(k){S[k]={}});S.bm=[];S.fav=[];S.recent=[];S.last=null;save();toast('মুছে ফেলা হয়েছে');renderSettings()},1]])},null,'rd'))
  ].forEach(function(g){v.appendChild(g[0]);v.appendChild(g[1])});
}
function renamePop(){
  var inp=h('input',{class:'sbox',style:'min-height:0;height:54px',value:S.name});
  popup('আপনার নাম',inp,[['বাতিল',null],['সেভ',function(){S.name=inp.value.trim()||'Rahat';save();render(view)},1]]);
}
function fontPop(){
  var box=h('div',{class:'seg',style:'flex-direction:column;align-items:stretch'});
  Object.keys(FONTS).forEach(function(k){box.appendChild(h('button',{class:'pill'+(S.font===k?' on':''),style:'text-align:left;font-family:'+FONTS[k].f,text:FONTS[k].n+' — আমার সোনার বাংলা',onclick:function(){S.font=k;save();applyReader();hidePop();render(view)}}))});
  popup('পড়ার ফন্ট',box,[['বন্ধ',null]]);
}
function catPop(){
  var box=h('div',{});
  CAT.authors.forEach(function(c){var on=S.hiddenAuthors.indexOf(c.id)<0;var sw=h('div',{class:'sw'+(on?' on':'')});
    box.appendChild(h('button',{class:'srow',style:'padding:12px 4px',onclick:function(){var i=S.hiddenAuthors.indexOf(c.id);if(i>=0)S.hiddenAuthors.splice(i,1);else S.hiddenAuthors.push(c.id);sw.classList.toggle('on');save()}},h('div',{class:'tx'},h('b',{style:'font-size:20px',text:c.name})),sw))});
  popup('লেখক দেখান/লুকান',h('div',{style:'max-height:50vh;overflow:auto'},box),[['ঠিক আছে',function(){libAuthor=null;render(view)},1]]);
}
function backupCopy(){
  var d=JSON.stringify({v:1,pos:S.pos,hl:S.hl,bm:S.bm,fav:S.fav,read:S.read,stats:S.stats,fin:S.fin,recent:S.recent,last:S.last});
  try{if(window.Android&&Android.copy){Android.copy(d);toast('ব্যাকআপ কপি হয়েছে — কোথাও পেস্ট করে সেভ করুন');return}}catch(e){}
  copyText(d);
}
function backupRestore(){
  var ta=h('textarea',{class:'sbox',placeholder:'এখানে ব্যাকআপ টেক্সট পেস্ট করুন'});
  popup('ব্যাকআপ রিস্টোর',ta,[['বাতিল',null],['রিস্টোর',function(){try{var o=JSON.parse(ta.value);if(!o||o.v!==1)throw 0;['pos','hl','bm','fav','read','stats','fin','recent','last'].forEach(function(k){if(o[k]!==undefined)S[k]=o[k]});save();toast('রিস্টোর সম্পন্ন');render(view)}catch(e){toast('ব্যাকআপটি সঠিক নয়')}},1]]);
}


/* ---------- back button (Android) & keys ---------- */
window.__back=function(){
  if(popOpen){hidePop();return true}
  if(sheetOpen){hideSheet();return true}
  if($('#hlbar').classList.contains('on')){hideHl();clearSel();return true}
  if(readerOpen()){closeReader();return true}
  if(view==='settings'){go('profile');return true}
  if(view==='search'){go(prevView);return true}
  if(view==='lib'&&libAuthor){libAuthor=null;renderLib();return true}
  if(view!=='home'){go('home');return true}
  return false;
};
document.addEventListener('keydown',function(e){if(e.key==='Escape')window.__back()});
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('button'))buzz()},true);

/* ---------- init ---------- */
setIcons();applyTheme();buildNav();
$('#v-home').classList.add('on');renderHome();
(function(){var sp=$('#splash');if(S.seen){sp.remove();return}$('#sp-logo').innerHTML=LOGO;$('#sp-go').addEventListener('click',function(){S.seen=1;save();sp.classList.add('out');setTimeout(function(){sp.remove()},500)})})();
if(S.resume&&S.last&&BOOKS[S.last]&&S.pos[S.last])setTimeout(function(){continueBook(S.last)},200);
window.__HB={S:S,go:go,openReader:openReader,openBook:openBook,displaySheet:displaySheet};
})();
