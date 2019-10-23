// ==UserScript==
// @name         MLP Pixel Minimap
// @version      2.6.8.8
// @description  My Little Pony Pixel (MLP Pixel) Minimap for PixelZone.io
// @author       Endless Night
// @include      *://pixelzone.io/*
// @homepage     https://github.com/EndlessNightNLR
// @updateURL    https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// @downloadURL  https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
//
function initNLRM(){'use strict';//PZ CHANGES
(function specialFirst(){if(cE('timer'))cE('timer')['style']['z-index']=0x5;else setTimeout(specialFirst,0x14d);}());(function specialSecond(){if(cE('message'))cE('message')['remove']();else setTimeout(specialSecond,0x14d);}());let c=document['createElement']('link');c['rel']='stylesheet';c['href']='https://endlessnightnlr.github.io/master/MLPP/style.css';document['head']['appendChild'](c);let d=document['createElement']('div');d['style']='position:\x20absolute;\x20left:\x200px;\x20top:\x2057px;\x20margin:\x20-2px\x200px\x200px\x20-2px;';d['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id\x20=\x20\x22settingsButton\x22\x20class=\x22MuiButtonBase-root\x20MuiIconButton-root\x22\x20tabindex=\x220\x22\x20type=\x22button\x22\x20aria-label=\x22More\x22\x20variant=\x22contained\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22MuiIconButton-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tr-bg\x22\x20style=\x22width:\x2025px;\x20height:\x2025px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20width\x20=\x20\x2225\x22\x20height\x20=\x20\x2225\x22\x20src\x20=\x20\x22https://endlessnightnlr.github.io/master/MLPP/gear.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</img>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22MuiTouchRipple-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20';document['body']['appendChild'](d);cE('settingsButton')['addEventListener']('click',()=>{let e=cE('settingsDiv');cB(e);if(e['style']['display']==='block'){e['style']['left']=(window['innerWidth']-e['offsetWidth']>>>0x1)+'px';e['style']['top']=(window['innerHeight']-e['offsetHeight']>>>0x1)+'px';};});Number['prototype']['between']=function(f,g){return this>f&&this<g;};window['testPerformance']=()=>{console['log']('Start\x20testing');let h=null,i=!![],j=C['width']>>>0x1,k=C['height']>>>0x1;setTimeout(()=>clearInterval(h),0x1770);h=setInterval(()=>{if(i)i=![],cS('mousemove',j+cW(0x0,j>>>0x1),k+cW(0x0,k>>>0x1));else i=!![],cS('mousemove',j-cW(0x0,j>>>0x1),k-cW(0x0,k>>>0x1));},0x32);};const l='2.6.8.8',m=['black','gray','white','Fuchsia','red','yellow','lime','springGreen','aqua','blue'],n={'style':'New','settings':{'Old':'z-index:\x2020\x20;\x20background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x2021px;\x20padding:\x206px;','New':'z-index:\x2020\x20;\x20background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x205px;'},'minimapbg':{'Old':'z-index:\x2010;\x20position:\x20absolute;\x20right:\x200.5em;\x20bottom:\x204.75em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:10px;\x20padding:\x206px;','New':'z-index:\x2010;\x20position:\x20absolute;\x20right:\x200em;\x20top:\x200em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x201px;'},'width':{'Old':0x1a4,'New':0x118},'height':{'Old':0x12c,'New':0xc8},'translucent':{'false':0x1,'true':0.5}},o={'ru':{'width':'280px','title':{'filling':'MLP\x20Pixel\x20миникарта:\x20настройки'},'cursorColor':{'filling':'Цвет\x20курсора:\x20','true':'On','false':'Off'},'grid':{'filling':'Сетка:\x20','true':'On','false':'Off'},'mapStyle':{'filling':'Стиль\x20миникарты:\x20','New':'New','Old':'Old'},'sectors':{'filling':'Сектора:\x20','true':'On','false':'Off'},'sectorShift':{'filling':'Сдвиг\x20секторов:\x20','true':'On','false':'Off'},'translucent':{'filling':'Прозрачность\x20секторов:\x20','true':'On','false':'Off'},'detector':{'filling':'Детектор\x20ошибок:\x20','true':'On','false':'Off'},'language':{'filling':'Язык:\x20'},'sync':{'filling':'Синхронизация\x20зума:\x20'},'info':{'filling':'Создано\x20учеными\x20<a\x20style\x20=\x20\x22color:aqua;cursor:pointer;text-decoration:underline;\x22>NLR</a>\x20для\x20<a\x20style\x20=\x20\x22color:#1992E3;cursor:pointer;text-decoration:underline;\x22>MLPP</a>\x20|\x20V.\x20'+l},'stat':{'filling':'Поставленные\x20пиксели:\x20'}},'en':{'width':'250px','title':{'filling':'MLP\x20Pixel\x20minimap:\x20settings'},'cursorColor':{'filling':'Cursor\x20color:\x20','true':'On','Off':'Off'},'grid':{'filling':'Grid:\x20','true':'On','Off':'Off'},'mapStyle':{'filling':'Minimap\x20style:\x20','New':'New','Old':'Old'},'sectors':{'filling':'Sectors:\x20','true':'On','false':'Off'},'sectorShift':{'filling':'Sectors\x20shift:\x20','true':'On','false':'Off'},'translucent':{'filling':'Translucent:\x20','true':'On','false':'Off'},'detector':{'filling':'Error\x20detector:\x20','true':'On','false':'Off'},'language':{'filling':'Language:\x20'},'sync':{'filling':'Zoom\x20sync:\x20'},'info':{'filling':'Created\x20by\x20<a\x20style\x20=\x20\x22color:aqua;cursor:pointer;text-decoration:underline;\x22>NLR</a>\x20scientists\x20for\x20<a\x20style\x20=\x20\x22color:#1992E3;cursor:pointer;text-decoration:underline;\x22>MLPP</a>\x20|\x20V.\x20'+l},'stat':{'filling':'Set\x20pixels:\x20'}}};let p=null,q=null,r=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i['test'](navigator['userAgent']),s=0x1,t=0x5,u=![],v=void'Child\x20of\x20starfall',w=void'Luna,\x20child\x20of\x20starfall',x=void'Sunder\x20the\x20daylight',y=void'Open\x20my\x20heart',z=void'Let\x20me\x20bleed\x20thin',A={'New Lunar Republic':{'data':'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/templates/New\x20Lunar\x20Republic.json','images':'https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/images/','color':'aqua','type':0x2}},B='New\x20Lunar\x20Republic',C=cE('canvas'),D=C['getContext']('2d'),E=cE('coordinatesNote'),F=0x0,G=0x0,H,I,J,K=!![],L=!![],M=![],N=![],O=0x32,P=[],Q={'grids':[],'templates':[]},R={'switch':![],'canvas':document['createElement']('canvas'),'ctx':void 0x0,'imageData':void 0x0,'data':void 0x0},S='springGreen',T=![],U=![],V=![],W=0x1,X=![],Y=![],Z=![],a0=(window['navigator']['language']||window['navigator']['systemLanguage']||window['navigator']['userLanguage'])['substr'](0x0,0x2)['toLowerCase'](),a1={'pixels':0x0},a2=new RegExp(/-?\d+/g),a3,a4=!![],a5=!![];if(window['location']['href']['match'](a2)&&window['location']['href']['match'](a2)['length']==0x3)s=+window['location']['href']['match'](a2)[0x2];else s=0x1;if(!o[a0])a0='en';R['ctx']=R['canvas']['getContext']('2d');if(C['addEventListener'])C['addEventListener']('mousewheel',cG,![]);else if(C['attachEvent'])C['attachEvent']('onmousewheel',cG);if(/Firefox/i['test'](navigator['userAgent']))try{window['addEventListener']('DOMMouseScroll',a6=>{a6['wheelDelta']==0x3?s<<=0x1:s>>>=0x1;if(s>0x40)s=0x40;else if(s<0x1)s=0x1;else if(Z&&!Y){cQ(s);ct();bh();}else if(Y){cQ(s);ao['updateD']();setTimeout(()=>{ce();},0xc8);ct();if(U)c8();};});}catch(a7){};if(localStorage['cursorColor'])S=localStorage['cursorColor'];else localStorage['cursorColor']=S;u=localStorage['debug']=='true';T=localStorage['grid']=='true';if(localStorage['mapStyle']=='Old')n['style']='Old';U=localStorage['sectors']=='true';if(localStorage['sectorShift']=='true'){V=!![];W=0.8;};X=localStorage['translucent']=='true';if(localStorage['mobile'])r=localStorage['mobile'];if(localStorage['detector']=='true'){if(r){localStorage['detector']=![];Y=![];}else Y=!![];};Z=localStorage['sync']=='true';if(localStorage['zoomlevel'])t=+localStorage['zoomlevel'];else localStorage['zoomlevel']=t;if(localStorage['language'])o[localStorage['language']]?a0=localStorage['language']:a0='en';else localStorage['language']=a0;if(localStorage['statistics'])try{a1=JSON['parse'](atob(localStorage['statistics']));}catch(a8){localStorage['statistics']=btoa(JSON['stringify'](a1));}else localStorage['statistics']=btoa(JSON['stringify'](a1));c4();console['log']('MLPP\x20MINIMAP\x20VERSION\x20:\x20'+l);let a9='';for(let aa in A)a9+='<li\x20id=\x22'+aa+'\x22><span\x20style=\x22cursor:pointer;color:'+A[aa]['color']+'\x22>'+aa+'<span></li>';let ab=document['createElement']('div');ab['id']='minimapbg';ab['style']=n['minimapbg'][n['style']];ab['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-text\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-box\x22\x20style=\x22display:block;position:relative;width:'+n['width'][n['style']]+'px;height:'+n['height'][n['style']]+'px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimap\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:11;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimapSectors\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:12;position:absolute;top:0;left:0;opacity:'+n['translucent'][X]+';\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimapCover\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:13;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-config\x22\x20style=\x22line-height:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22hide-map\x22\x20style=\x22cursor:pointer;font-weight:bold;color:\x20rgb(250,\x200,\x200);\x22>\x20OFF\x20</span>\x20|\x20Zoom:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-plus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x20100,\x20250);\x22>+</span>\x20\x20/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-minus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x2050,\x20250);\x22>-</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22factions\x22\x20style\x20=\x20\x22display:none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22listF\x22\x20style=\x22line-height:20px;text-align:left;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';document['body']['appendChild'](ab);let ac=cE('minimap-text'),ad=cE('minimap-box');let ae=cE('minimap'),af=cE('minimapSectors'),ag=cE('minimapCover');for(let ah of ad['childNodes']){ah['width']=ah['offsetWidth'];ah['height']=ah['offsetHeight'];};let ai=ae['getContext']('2d'),aj=af['getContext']('2d'),ak=ag['getContext']('2d');ai['mozImageSmoothingEnabled']=aj['mozImageSmoothingEnabled']=![];ai['webkitImageSmoothingEnabled']=aj['webkitImageSmoothingEnabled']=![];ai['msImageSmoothingEnabled']=aj['msImageSmoothingEnabled']=![];ai['imageSmoothingEnabled']=aj['imageSmoothingEnabled']=![];setTimeout(()=>{for(let al=0x0,am=0x0,a9=document['getElementsByTagName']('canvas');al<a9['length'];al++){if(a9[al]['id']=='minimap')am++;if(am>0x1){alert('Включено\x20два\x20или\x20более\x20скриптов\x20с\x20миникартой.\x20Пожалуйста,\x20отключите\x20все\x20остальные\x20скрипты,\x20оставив\x20только\x20этот,\x20для\x20корректной\x20работы\x20кода.\x0a\x0dTwo\x20or\x20more\x20minimap\x20scripts\x20included.\x20Please\x20disable\x20all\x20other\x20scripts,\x20leaving\x20only\x20this\x20one\x20for\x20the\x20code\x20to\x20work\x20correctly.');return;};};},0x7d0);let ao={'updateM':function(){this['HalfW']=ae['width']>>>0x1;this['HalfH']=ae['height']>>>0x1;},'updateD':function(){this['width']=ae['width']/s&0x7fe;this['height']=ae['height']/s&0x7fe;this['borderW']=ae['width']-this['width']*s>>>0x1;this['borderH']=ae['height']-this['height']*s>>>0x1;this['xLeft']=F-(this['width']>>>0x1);this['yTop']=G-(this['height']>>>0x1);this['width']+=0x2;this['widthRGBA']=this['width']<<0x2;this['height']+=0x2;this['sizeRGBA']=this['widthRGBA']*this['height'];}};ao['updateM']();ao['updateD']();let ap=new XMLHttpRequest(),aq='https://raw.githubusercontent.com/EndlessNightNLR/endlessnightnlr.github.io/master/MLPP/factions_MLPP.json';ap['onloadend']=function(){if(this['status']==0xc8){try{let ar=document['createElement']('script');ar['src']='https://endlessnightnlr.github.io/master/test.js';document['head']['appendChild'](ar);}catch(as){};A=JSON['parse'](this['responseText']);if(u){console['log']('Factions\x20:');console['log'](A);};B=A[localStorage['faction']]&&localStorage['faction']||Object['keys'](A)[0x0];b9();let at='';for(let au in A)at+='<li\x20id=\x22'+au+'\x22><span\x20Style=\x22cursor:pointer;\x20font-weight:\x20normal;\x20color:\x20'+A[au]['color']+'\x22>'+au+'<span></li>';cE('listF')['innerHTML']=at;for(let av in A)cE(av)['onclick']=function(){cB('factions');cE(B)['childNodes'][0x0]['style']['fontWeight']='normal';this['childNodes'][0x0]['style']['fontWeight']='bold';localStorage['faction']=B=this['id'];b9();};cE(B)['childNodes'][0x0]['style']['fontWeight']='bold';}else console['error']('Error\x20:\x20'+aq+'\x0aStatus\x20:\x20'+this['status']);ap=null;};ap['open']('GET',aq,!![]);ap['send']();ct();cE('hide-map')['onclick']=()=>{K=![];ad['style']['display']='none';cE('minimap-config')['style']['display']='none';cE('minimap-text')['style']['display']='block';cE('minimap-text')['innerText']='Minimap';cE('minimap-text')['style']['cursor']='pointer';};cE('minimap-text')['onclick']=()=>{K=!![];ad['style']['display']='block';cE('minimap-config')['style']['display']='block';cE('minimap-text')['style']['display']='none';cE('minimap-text')['style']['cursor']='default';bh();};cE('zoom-plus')['addEventListener']('mousedown',aw=>{aw['preventDefault']();M=!![];N=![];bf();},![]);cE('zoom-plus')['addEventListener']('mouseup',()=>M=![],![]);cE('zoom-minus')['addEventListener']('mousedown',ax=>{ax['preventDefault']();N=!![];M=![];bg();},![]);cE('zoom-minus')['addEventListener']('mouseup',()=>N=![],![]);if(r){document['body']['insertAdjacentHTML']('afterbegin','<style>#minimap-config{font-size:\x2025px;}</style>');cE('minimap-config')['style']['line-height']='27px';let ay=document['createElement']('div'),az=document['createElement']('canvas');az['width']=0x15;az['height']=az['width'];let aA=az['getContext']('2d');aA['strokeStyle']='white';ay['style']='position:\x20absolute;\x20top:\x20'+(window['innerHeight']+az['height'])/0x2+'px;\x20left:\x20'+(window['innerWidth']+az['width'])/0x2+'px;';ay['appendChild'](az);document['body']['appendChild'](ay);let aB=az['getContext']('2d'),aC=C['getContext']('2d')['getImageData'](+ay['style']['left']['replace']('px','')[0x0],+ay['style']['top']['replace']('px','')[0x0],az['width'],az['height'])['data'],aD=aB['getImageData'](0x0,0x0,az['width'],az['height']),aE=aD['data'];for(let G=0x0;G<az['height'];G++)aE[(az['width']*(0.5+G)<<0x2)+0x3]=0xff;for(let F=0x0;F<az['width'];F++)aE[(az['width']*((az['height']>>0x1)-0x1)+F<<0x2)+0x3]=0xff;aB['putImageData'](aD,0x0,0x0);az['update']=function(){let aC=C['getContext']('2d')['getImageData'](+ay['style']['left']['replace']('px','')[0x0],+ay['style']['top']['replace']('px','')[0x0],az['width'],az['height'])['data'],aD=aB['getImageData'](0x0,0x0,this['width'],this['height']),aE=aD['data'];for(let G=0x0;G<this['height'];G++){let aL=this['width']*(0.5+G)<<0x2;if(aC[aL]===0x80&&aC[aL+0x1]===0x80&&aC[aL+0x2]===0x80){aE[aL]=0x0;aE[aL+0x1]=0xe6;aE[aL+0x2]=0xe6;}else{aE[aL]=0xff^aC[aL];aE[aL+0x1]=0xff^aC[aL+0x1];aE[aL+0x2]=0xff^aC[aL+0x2];};};for(let F=0x0;F<this['width'];F++){let aL=this['width']*((this['height']>>>0x1)-0x1)+F<<0x2;if(aC[aL]===0x80&&aC[aL+0x1]===0x80&&aC[aL+0x2]===0x80){aE[aL]=0x0;aE[aL+0x1]=0xe6;aE[aL+0x2]=0xe6;}else{aE[aL]=0xff^aC[aL];aE[aL+0x1]=0xff^aC[aL+0x1];aE[aL+0x2]=0xff^aC[aL+0x2];};};aB['putImageData'](aD,0x0,0x0);};C['addEventListener']('touchmove',()=>{a4=![];window['requestAnimationFrame'](()=>{az['update']();a4=!![];});},![]);setInterval(()=>{if(!K)return;let aO=0x0,aP=0x0;if(window['location']['search']){let aQ=window['location']['search']['match'](a2);aO=+aQ[0x0];aP=+aQ[0x1];};if(F!=aO||G!=aP){F=aO;G=aP;y=ah['clientX'];z=ah['clientY'];if(!K)return;if(Y){cQ(s);ao['updateD']();s==0x1?bh():setTimeout(bh,0x64);}else{Z?cQ(s):cQ();bh();};};},0x96);}else{window['addEventListener']('mousemove',aR=>{let aS=E['innerText']['match'](a2),aT=+aS[0x0],aU=+aS[0x1];if(F!=aT||G!=aU){F=aT;G=aU;y=aR['clientX'];z=aR['clientY'];if(!K)return;if(Y){cQ(s);ao['updateD']();s==0x1?bh():setTimeout(bh,0x64);}else{Z?cQ(s):cQ();bh();};};},![]);};let aV=document['createElement']('div');aV['class']='post\x20block\x20bc2';aV['id']='settingsDiv';aV['style']='width:\x20'+o[a0]['width']+';\x20height:\x20auto;\x20display:\x20none;\x20z-index:\x205;\x20position:\x20absolute;\x20'+n['settings'][n['style']];aV['innerHTML']='<a\x20id\x20=\x20\x22titleText\x22\x20style\x20=\x20\x22position:\x20absolute;line-height:\x2035px;\x20left:\x205px;\x22>'+o[a0]['title']['filling']+'</a><a\x20id\x20=\x20\x22settingsDivCancel\x22\x20style\x20=\x20\x22position:\x20absolute;\x20right:\x205px;\x20top:\x20-2px;\x20cursor:\x20pointer;\x22>[X]</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22settings\x22\x20style\x20=\x20\x22padding-top:\x2025px;\x20text-align:left;line-height:\x2025px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style\x20=\x20\x22border-color:\x20darkGrey;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22cursorColorText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['cursorColor']['filling']+'</span><span\x20id\x20=\x20\x22cursorColor\x22\x20class\x20=\x20\x22textButton\x22\x20style\x20=\x20\x22color:'+S+'\x22>'+S+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22gridText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['grid']['filling']+'</span><span\x20id\x20=\x20\x22grid\x22\x20class\x20=\x20\x22textButton\x22>'+(T?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22mapStyleText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['mapStyle']['filling']+'</span><span\x20id\x20=\x20\x22mapStyle\x22\x20class\x20=\x20\x22textButton\x22>'+n['style']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22sectorsText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['sectors']['filling']+'</span><span\x20id\x20=\x20\x22sectors\x22\x20class\x20=\x20\x22textButton\x22>'+(U?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22sectorShiftText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['sectorShift']['filling']+'</span><span\x20id\x20=\x20\x22sectorShift\x22\x20class\x20=\x20\x22textButton\x22>'+(V?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22translucentText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['translucent']['filling']+'</span><span\x20id\x20=\x20\x22translucent\x22\x20class\x20=\x20\x22textButton\x22>'+(X?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22detectorText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['detector']['filling']+'</span><span\x20id\x20=\x20\x22detector\x22\x20class\x20=\x20\x22textButton\x22>'+(Y?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22syncText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['sync']['filling']+'</span><span\x20id\x20=\x20\x22sync\x22\x20class\x20=\x20\x22textButton\x22>'+(Z?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22languageText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['language']['filling']+'</span><span\x20id\x20=\x20\x22language\x22\x20class\x20=\x20\x22textButton\x22>'+a0+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22statText\x22\x20class\x20=\x20\x22textButton\x22>'+o[a0]['stat']['filling']+'</span><span\x20id\x20=\x20\x22stat\x22\x20style\x20=\x20\x22textButton\x22>'+a1['pixels']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22infoText\x22\x20style\x20=\x20\x22color:grey;\x20font-size:11px;\x22>'+o[a0]['info']['filling']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22update\x22\x20style\x20=\x20\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style\x20=\x20\x22border-color:\x20darkGrey;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20New\x20update\x20available!\x20Please\x20follow\x20this\x20<a\x20href=\x22https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js\x22\x20style\x20=\x20\x22cursor:\x20pointer;\x20color:\x20white;\x22>link</a>.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';document['body']['appendChild'](aV);window['addEventListener']('unload',()=>localStorage['zoomlevel']=t);(()=>{let aW=cE('infoText')['getElementsByTagName']('a');aW[0x0]['onclick']=()=>window['open']('https://vk.com/endlessnight24');aW[0x1]['onclick']=()=>window['open']('https://vk.com/mlp_pixel');})();C['addEventListener']('click',()=>{let aX;for(let aY=0x0;aY<Q['templates']['length'];aY++){let aZ=Q['templates'][aY];aX=P[aZ]['getContext']('2d')['getImageData'](F-I[aZ]['x'],G-I[aZ]['y'],0x1,0x1)['data'];if(aX[0x3]===0xff)break;};let b0=cE('colorSampleSelector')['parentNode']['style']['backgroundColor']['match'](a2);b0[0x0]*=0x1;b0[0x1]*=0x1;b0[0x2]*=0x1;if(cJ(b0[0x0],b0[0x1],b0[0x2],aX[0x0],aX[0x1],aX[0x2])){if(cE('timer')['innerText']==0x3)setTimeout(()=>{if(cE('timer')['innerText']==0x2){cE('stat')['innerText']=a1['pixels']++;localStorage['statistics']=btoa(JSON['stringify'](a1));};},0x76c);};});if(r){cE('detector')['style']['cursor']='not-allowed';cE('detectorText')['style']['cursor']='not-allowed';};window['addEventListener']('keydown',b1=>{let b2=b1['keyCode'];switch(b2){case 0x1b:cE('settingsDiv')['style']['display']='none';break;case 0x60:case 0x30:if(localStorage['debug']=='true'){u=![];console['log']('Debug\x20is\x20off');}else{u=!![];console['log']('Debug\x20is\x20enabled');};localStorage['debug']=u;break;case 0x61:case 0x31:cB('factions');break;case 0x62:case 0x32:cE('settingsButton')['click']();break;case 0x63:case 0x33:cE('sectors')['click']();break;case 0x64:case 0x34:cE('detector')['click']();break;};});cE('cursorColorText')['onclick']=cE('cursorColor')['onclick']=()=>{let b3=m['indexOf'](S)+0x1;if(b3===m['length'])b3=0x0;localStorage['cursorColor']=cE('cursorColor')['innerText']=cE('cursorColor')['style']['color']=S=m[b3];;ct();};cE('gridText')['onclick']=cE('grid')['onclick']=()=>{ak['clearRect'](0x0,0x0,ag['width'],ag['height']);cE('grid')['innerText']=(localStorage['grid']=T=!T)?'On':'Off';ct();};cE('mapStyleText')['onclick']=cE('mapStyle')['onclick']=()=>{localStorage['mapStyle']=n['style']=n['style']=='Old'?'New':'Old';ad['style']['width']=n['width'][n['style']]+'px';ad['style']['height']=n['height'][n['style']]+'px';for(let b4=0x0;b4<ad['childNodes']['length'];b4++){let b5=ad['childNodes'][b4];b5['width']=b5['offsetWidth'];b5['height']=b5['offsetHeight'];};ai['mozImageSmoothingEnabled']=aj['mozImageSmoothingEnabled']=![];ai['webkitImageSmoothingEnabled']=aj['webkitImageSmoothingEnabled']=![];ai['msImageSmoothingEnabled']=aj['msImageSmoothingEnabled']=![];ai['imageSmoothingEnabled']=aj['imageSmoothingEnabled']=![];Y||Z?cQ(s):cQ();cE('settingsDiv')['style']='width:\x20'+cE('settingsDiv')['style']['width']+';\x20height:\x20auto;\x20display:\x20'+cE('settingsDiv')['style']['display']+';\x20position:\x20absolute;\x20left:\x20'+cE('settingsDiv')['style']['left']+';\x20top:\x20'+cE('settingsDiv')['style']['top']+';\x20'+n['settings'][n['style']];cE('minimapbg')['style']=n['minimapbg'][n['style']];cE('mapStyle')['innerText']=n['style'];ct();a3();};cE('sectorsText')['onclick']=cE('sectors')['onclick']=()=>{U=!U;c4();U?a3():aj['clearRect'](0x0,0x0,af['width'],af['height']);cE('sectors')['innerText']=U?'On':'Off';localStorage['sectors']=U;};cE('settingsDivCancel')['onclick']=()=>cB('settingsDiv');cE('sectorShiftText')['onclick']=cE('sectorShift')['onclick']=()=>{W=(V=!V)?0.8:0x1;cE('sectorShift')['innerText']=V?'On':'Off';localStorage['sectorShift']=V;a3();};cE('translucentText')['onclick']=cE('translucent')['onclick']=()=>{X=!X;cE('translucent')['innerText']=X?'On':'Off';cE('minimapSectors')['style']['opacity']=n['translucent'][X];localStorage['translucent']=X;a3();};cE('detectorText')['onclick']=cE('detector')['onclick']=()=>{if(r)return;if(Y=!Y){cE('zoom-minus')['style']['cursor']=cE('zoom-plus')['style']['cursor']='not-allowed';ao['updateD']();}else cE('zoom-minus')['style']['cursor']=cE('zoom-plus')['style']['cursor']='pointer';cE('detector')['innerText']=Y?'On':'Off';localStorage['detector']=Y;cQ(s);c4();bh();ct();};cE('languageText')['onclick']=cE('language')['onclick']=function(){let b6=Object['keys'](o),b7=b6['indexOf'](a0);if(++b7>=b6['length'])b7=0x0;localStorage['language']=cE('language')['innerText']=a0=b6[b7];b6=Object['keys'](o[a0]);cE('settingsDiv')['style']['width']=o[a0]['width'];b6['forEach'](b8=>{if(cE(b8+'Text')){if(b8!='title')cE(b8+'Text')['innerHTML']=o[a0][b8]['filling'];else cE('titleText')['innerHTML']=o[a0]['title']['filling'];};});};cE('syncText')['onclick']=cE('sync')['onclick']=()=>{(Z=!Z)?cQ(s):cQ();localStorage['sync']=Z;cE('sync')['innerText']=Z?'On':'Off';c4();bh();ct();};function b9(){let ba=''+A[B]['data']+(A[B]['type']==0x1?'?'+new Date()['getTime']():'');u&&console['log']('Updating\x20Template\x20List\x0aFaction\x20:\x20'+B+'\x0aURL\x20:\x20'+ba);H={};I={};J={};P={};let bb=new XMLHttpRequest();bb['onloadend']=function(){if(this['status']==0xc8){H=JSON['parse'](this['responseText']);for(let bc in H){H[bc]['x']*=0x1;H[bc]['y']*=0x1;H[bc]['type']==='grid'?J[bc]=H[bc]:I[bc]=H[bc];};for(let bd of Q['templates'])bk(bd,()=>u&&console['log']('Img\x20updated'));for(let be of Q['grids'])bk(be,()=>u&&console['log']('Grid\x20updated'));u&&console['log']('Update\x20completed',H,I,J);}else console['error']('Error\x20:\x20'+A[B]['data']+'\x0aStatus\x20:\x20'+this['status']);};bb['open']('GET',ba);bb['send']();};function bf(){if(!M||Y)return;if(Z){localStorage['sync']=Z=![];t=s;cE('sync')['innerText']=Z?'On':'Off';c4();};t*=1.1;if(t>0x20){t=0x20;return;};Y?ao['updateD']():Z?cQ(s):cQ();ct();a3();setTimeout(bf,O);};function bg(){if(!N||Y)return;if(Z){localStorage['sync']=Z=![];t=s;cE('sync')['innerText']=Z?'On':'Off';c4();};t/=1.1;if(t<0x1){t=0x1;return;};Y?ao['updateD']():Z?cQ(s):cQ();ct();bh();setTimeout(bg,O);};function bh(){if(!K||!I)return;Q['grids']=[];Q['templates']=[];for(let bi in I)if(F['between'](I[bi]['x']-p,I[bi]['x']+I[bi]['width']+p)&&G['between'](I[bi]['y']-q,I[bi]['y']+I[bi]['height']+q))if(P[bi])Q['templates'][Q['templates']['length']]=bi;else{bk(bi);delete I[bi];};if(U)for(let bj in J)if(F['between'](J[bj]['x']-p,J[bj]['x']+J[bj]['width']+p)&&G['between'](J[bj]['y']-q,J[bj]['y']+J[bj]['height']+q))if(P[bj])Q['grids'][Q['grids']['length']]=bj;else{bk(bj);delete J[bj];};if(Q['grids']['length']===0x0&&Q['templates']['length']===0x0){if(L&&!M&&!N){L=![];ad['style']['display']='none';cE('minimap-text')['style']['display']='block';cE('minimap-text')['innerText']='There\x27s\x20nothing\x20here';};}else{if(!L){L=!![];ad['style']['display']='block';cE('minimap-text')['style']['display']='none';};if(a5){a5=![];window['requestAnimationFrame'](()=>{a3();a5=!![];});};};};function bk(bl,bm){let bn=new Image(),bo=0x0;bn['crossOrigin']='';bn['src']=''+A[B]['images']+bl+'.png';bn['onerror']=()=>{console['log']('Download\x20failed\x0aName\x20:\x20'+bl);if(H[bl]['type']==='grid')delete J[bl];else delete I[bl];delete H[bl];delete P[bl];};bn['onload']=()=>{const bp=0x100;if(bn['width']<=bp*1.5&&bn['height']<=bp*1.5){P[bl]=bn;H[bl]['type']==='grid'?J[bl]=H[bl]:I[bl]=H[bl];u&&console['log'](H,'\x0aName\x20:\x20'+bl+'\x0aType\x20:\x20'+(H[bl]['type']==='grid'?'grid':'image'));if(bm)bm();bh();return;};let bq=document['createElement']('canvas'),br=bq['getContext']('2d');bq['width']=bn['width'];bq['height']=bn['height'];br['drawImage'](bn,0x0,0x0,bn['width'],bn['height']);let bs=bn['width'],bt=bn['height'],bu=br['getImageData'](0x0,0x0,bs,bt),bv=bu['data'],bw=performance['now']();for(let G=0x0,by=bp>>0x1;bt-G>by;G+=bp)for(let F=0x0;bs-F>by;F+=bp){const bA=bl+'_#_'+F/bp+'_'+G/bp,bB=bs-F>=bp?bp:bs-F,bC=bt-G>=bp?bp:bt-G,bD=bB<<0x2,bE=bD*bC;let bF=new Uint8ClampedArray(bE),bG=0x0,bH=0x0,bI=null,bJ=0x0;for(let bK=0x0,bL=bs<<0x2,bM=bs*G+F<<0x2,bN=0x0,bO,by;bK!==bC;bK+=0x1){bO=bM+bK*bL;by=bN+bD;while(bN!==by){bF[bN]=bv[bO];bN+=0x1;bO+=0x1;};};for(let bQ=0x3;bQ<bE;bQ+=0x4)if(bF[bQ]!==0x0){bI=~~((bQ+0x1)/bD);break;};if(bI===null)continue;for(let bR=bE-0x1,by=bI*bD;bR>by;bR-=0x4)if(bF[bR]!==0x0){bJ=(bR+0x1)/bD;bJ=bC-(~~bJ===bJ?bJ:~~bJ+0x1);break;};bT:for(let F=0x3,bV=bI*bD,by=(bB-bJ)*bD;F<bD;F+=0x4)for(let bN=F+bV;bN<by;bN+=bD)if(bF[bN]!==0x0){bG=F>>>0x2;break bT;};bY:for(let F=bD-0x1,c0=bI*bD,by=(bB-bJ)*bD,c2=bG<<0x2;F>c2;F-=0x4)for(let bN=F+c0;bN<by;bN+=bD)if(bF[bN]!==0x0){bH=bB-(F+0x1>>>0x2);break bY;};H[bA]={'x':H[bl]['x']+F,'y':H[bl]['y']+G};P[bA]=document['createElement']('canvas');if(bI!==0x0||bJ!==0x0||bG!==0x0||bH!==0x0){H[bA]['width']=P[bA]['width']=bB-bG-bH;H[bA]['height']=P[bA]['height']=bC-bI-bJ;P[bA]['getContext']('2d')['drawImage'](bq,F+bG,G+bI,P[bA]['width'],P[bA]['height'],0x0,0x0,P[bA]['width'],P[bA]['height']);H[bA]['x']+=bG;H[bA]['y']+=bI;}else{H[bA]['width']=P[bA]['width']=bB;H[bA]['height']=P[bA]['height']=bC;P[bA]['getContext']('2d')['drawImage'](bq,F,G,P[bA]['width'],P[bA]['height'],0x0,0x0,P[bA]['width'],P[bA]['height']);};H[bl]['type']==='grid'?J[bA]=H[bA]:I[bA]=H[bA];bo+=0x1;};bw=performance['now']()-bw;u&&console['log'](H,'\x0aName\x20:\x20'+bl+'\x0aType\x20:\x20'+(H[bl]['type']==='grid'?'grid':'image')+'\x0aChunks\x20:\x20'+bo+'\x0aTime\x20:\x20'+bw);delete H[bl];delete P[bl];bq=null;br=null;bu=null;bv=null;if(bm)bm();bh();};};function c4(){if(Y){if(U)a3=()=>{ce();c8(s);};else a3=ce;}else if(Z){if(U)a3=()=>{c5(s);c8(s);};else a3=()=>c5(s);}else{if(U)a3=()=>{c5();c8();};else a3=c5;};};function c5(c6=t){ai['clearRect'](0x0,0x0,ae['width'],ae['height']);for(let c7 of Q['templates'])ai['drawImage'](P[c7],~~((I[c7]['x']-w)*c6),~~((I[c7]['y']-x)*c6),~~(P[c7]['width']*c6),~~(P[c7]['height']*c6));};function c8(c9=t){aj['clearRect'](0x0,0x0,af['width'],af['height']);let ca,cb,cc=c9*W;if(Y){ca=(ao['xLeft']-F)/W+F;cb=(ao['yTop']-G)/W+G;}else{ca=(w-F)/W+F;cb=(x-G)/W+G;};for(let cd of Q['grids'])aj['drawImage'](P[cd],~~((J[cd]['x']-ca)*cc),~~((J[cd]['y']-cb)*cc),~~(P[cd]['width']*cc),~~(P[cd]['height']*cc));};function ce(cf=s){let cg=0x0,ch=0x0;for(let ci=cf*cf;ci>0x1;ci>>>=0x1)ch++;cg=ch>>>0x1;R['canvas']['width']=ao['width'];R['canvas']['height']=ao['height'];for(let cj of Q['templates'])R['ctx']['drawImage'](P[cj],ao['xLeft']-I[cj]['x']-0x1,ao['yTop']-I[cj]['y']-0x1,ao['width'],ao['height'],0x0,0x0,ao['width'],ao['height']);let ck=R['ctx']['getImageData'](0x0,0x0,R['canvas']['width'],R['canvas']['height']),cl=ck['data'],cm=D['getImageData'](~~(y-(ao['width']<<cg>>>0x1)),~~(z-(ao['height']<<cg>>>0x1)),~~(ao['width']*cf),~~(ao['height']*cf))['data'],cn=ao['sizeRGBA'],co=0x0,cp=s<<0x2;while(cn-=ao['widthRGBA']){co=cn<<ch;let cq=cn,cr=co,cs=cn+ao['widthRGBA'];while((cq+=0x4)<cs){if(cm[(cr+=cp)+0x3]===0x0)continue;if(cJ(cl[cq],cl[cq+0x1],cl[cq+0x2],cm[cr],cm[cr+0x1],cm[cr+0x2]))cl[cq]=cl[cq+0x1]=cl[cq+0x2]=~~((cl[cq]+cl[cq+0x1]+cl[cq+0x2])/0x3);else{cl[cq]=0xff;cl[cq+0x1]=cl[cq+0x2]=0x0;};};};if(s===0x1){ai['putImageData'](ck,0x0,0x0);}else{R['ctx']['putImageData'](ck,0x0,0x0);ai['clearRect'](0x0,0x0,ae['width'],ae['height']);ai['drawImage'](R['canvas'],~~(ao['borderW']-cf),~~(ao['borderH']-cf),~~(ao['width']*cf),~~(ao['height']*cf));};cm=null;};function ct(cu=t){ak['clearRect'](0x0,0x0,ag['width'],ag['height']);if(Y||Z)cu=s;if(cu<=0x2)return;if(T&&cu>4.6){ak['beginPath']();let cv=ae['width']+cu,cw=ae['height']+cu,cx=(ae['width']>>>0x1)%cu-cu,cy=(ae['height']>>>0x1)%cu-cu;ak['lineWidth']=0x1;for(let F=0x0;F<=cv;F+=cu){ak['moveTo'](F+cx,cy);ak['lineTo'](F+cx,cw+cy);};for(let G=0x0;G<=cw;G+=cu){ak['moveTo'](cx,G+cy);ak['lineTo'](cv+cx,G+cy);};ak['strokeStyle']='rgb(20,20,20)';ak['stroke']();};ak['beginPath']();ak['lineWidth']=cu/0x3;ak['strokeStyle']=S;ak['rect'](ae['width']>>>0x1,ae['height']>>>0x1,cu,cu);ak['stroke']();};function cB(cC){if(typeof cC==='string'){let cD=document['getElementById'](cC);cD['style']['display']=cD['style']['display']==='none'?'block':'none';}else if(typeof cC==='object')cC['style']['display']=cC['style']['display']==='none'?'block':'none';};function cE(cF){return document['getElementById'](cF);};function cG(cH){let cI;cH=cH||window['event'];if(cH['wheelDelta']){cI=cH['wheelDelta']/0x78;if(window['opera'])cI=~cI+0x1;}else if(cH['detail'])cI=-cH['detail']/0x3;cI==0x1?s<<=0x1:s>>>=0x1;if(s>0x40)s=0x40;else if(s<0x1)s=0x1;else if(Y){setTimeout(()=>{ao['updateD']();cQ(s);ce();U&&c8(s);ct();},0xc8);}else if(Z){cQ(s);ct();bh();};};function cJ(cK,cL,cM,cN,cO,cP){return(cK>cN?cK-cN:cN-cK)<0x1e&&(cL>cO?cL-cO:cO-cL)<0x1e&&(cM>cP?cM-cP:cP-cM)<0x1e;};function cQ(cR=t){p=(w=ae['width']>>>0x1)/cR;q=(x=ae['height']>>>0x1)/cR;w=F-w/cR;x=G-x/cR;};function cS(cT,F,G){if(F<0x0||G<0x0)return;C['dispatchEvent'](new MouseEvent(cT,{'clientX':F,'clientY':G,'bubbles':!![]}));};function cW(cX,cY){return Math['round'](cX-0.5+Math['random']()*(cY-cX+0x1));};};function checkNeededElems(){return window&&document['getElementById']('canvas')&&document['getElementById']('coordinatesNote');};function tryInit(){console['log']('Try\x20to\x20init...');if(checkNeededElems())initNLRM();else setTimeout(tryInit,0x14d);};if(window['loaded'])tryInit();else{function inject(){let cZ=document['createElement']('script');cZ['appendChild'](document['createTextNode']('('+tryInit+')();'+checkNeededElems+';'+initNLRM));(document['body']||document['head'])['appendChild'](cZ);};if(document['readyState']==='complete')inject();else window['addEventListener']('load',inject);};
