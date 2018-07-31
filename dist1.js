var data = [{length:3405.1, floor:[0,1135,2270], blocks:[2297,460,2577,460,2888,460,3172,464], coins:[757,452,1058,452,904,452,1228,452,1385,452,1718,350,1545,452,1892,254,2114,168,2466,132,2777,154,3039,132,3283,122]},
{length:3405.1, floor:[0,1135,2270], blocks:[809,292,1057,292,1293,292,1517,292,2127,394,2349,290,2611,314,2802,290,157,416], coins:[757,452,1058,452,904,452,1228,452,1385,452,2103,178,1545,452,2341,82,2643,82,3025,132,3293,264]},
{length:3405.1, floor:[0,2270], blocks:[1420,588,2466,462,2630,466,2549,360,335,106,1440,480,1736,588,1716,488,1736,382,1728,274,2038,588,2054,488,2038,382,687,152,871,208,1081,88], coins:[69,264,1058,452,904,452,1192,396,1337,320,2103,192,1455,204,2265,152,3075,272,3319,264,1604,132,1769,92,1914,154,2403,118,504,452,624,452,211,300,3191,260]},
{length:3405.1, floor:[0,2270], blocks:[2466,462,2630,466,2549,360,896,464,1061,468,980,362,1659,300,1633,198,1653,94,1633,-12], coins:[69,264,3075,224,3319,264,211,300,3191,260,349,346,487,340,615,254,753,152,1559,554,1681,542,1831,520,1441,462,1943,448,2055,350,2425,124,2917,210,2743,152]},
{length:3405.1, floor:[0,1135,2270], blocks:[2466,462,2630,466,2549,360,896,464,1061,468,690,468,664,366,684,262,868,360], coins:[69,264,3075,224,3319,264,211,264,3191,260,349,210,1725,412,1817,369,1943,410,1641,488,2055,448,2163,412,2255,310,2917,210,2743,152,469,128,595,90,947,164,1241,478,1339,488,1431,488,1533,488,2389,214,2569,164]},
{length:5445.3, floor:[0,4310], blocks:[1844,248,2001,292,3223,102,3608,120,3285,492,2303,230,4740,102,5352,462,2158,216,4021,444,4081,154,4928,188,5073,144,4199,536,2583,592,2625,488,2828,592,2784,492,2706,390,3259,592,3666,662,3686,554,3666,444,1494,492,1151,120,875,26], coins:[205,258,953,306,1344,308,3245,308,2708,158,3000,256,4086,308,4012,286,3934,276,4164,340,3502,292,801,274,4961,452,5041,452,5121,452,5201,406,4881,452,1932,66,1132,362,5293,320,251,306,251,220,297,268,385,258,431,306,431,220,477,268,565,258,611,306,611,220,657,268,1514,206,1672,108,2148,52,2414,72,3744,268,4364,394,4616,448,5399,276,61,268]},
{length:2270.1, floor:[1135], blocks:[158,404,352,534,1840,248,1160,209,1150,98,443,160,1170,-10,649,241,529,16,921,291,2178,82], coins:[404,347,66,272,580,481,228,270,750,504,1541,194,1705,96,1848,72,1978,128,2070,255,949,504,1123,430,1302,368,1411,267]},
{length:3405.1, floor:[0,1135], blocks:[352,468,1160,468,718,218,710,101,730,-7,3310,454,1288,468,1226,366,1433,468,1350,366,1266,254,1922,326,1782,234,3302,88,2570,352,2349,326], coins:[1838,494,448,304,66,250,608,378,3179,290,3341,282,228,270,798,408,961,304,1053,238,1145,96,1726,494,2078,494,1966,494,2300,492,2188,492,2538,494,2426,494,2802,464,2666,494,3038,346,2926,418]},
{length:5445.3, floor:[0,1720,4310], blocks:[1042,114,2066,114,2269,114,3415,326,4425,468,408,260,2736,464,3575,322,3743,330,3911,334], coins:[1089,460,768,456,2041,332,1851,332,2704,176,3048,256,1009,460,929,460,849,460,1169,476,1249,516,2137,384,1947,384,2401,332,2211,332,2497,384,2307,384,3488,484,3608,484,3728,484,3848,484,4274,256,4408,224,4550,266,4652,372,4900,446,5000,374,5128,310,5252,266,5384,262,4764,458,688,456,608,456,528,456]},
{length:5445.3, floor:[0,4310], blocks:[1236,178,1674,380,2229,122,3223,102,3984,364,3285,492,2552,496,4740,102,5352,462], coins:[293,296,641,106,953,306,1668,204,2087,444,2636,138,3000,256,4048,524,3896,504,4168,436,4252,308,3752,420,801,226,4961,452,5041,452,5121,452,5201,406,4881,452,2372,306,1294,394,5325,276,1576,538,1636,538,1696,538,1756,538]},
{length:3405.1, floor:[0,1135,2270], blocks:[966,332,1145,300,1321,308,2217,224,2349,290,2510,348,2802,290,1526,332,1694,376,849,32,1030,12,1185,-28,1361,-12,1566,12,1734,36,660,472,797,380,1834,472,653,60], coins:[842,204,2039,88,2224,444,2381,468,2901,88,922,180,1002,180,1082,160,1162,148,1242,152,1322,152,1402,164,1482,176,1562,176,1642,204,1894,164,70,276,382,234,526,266,2541,468,2701,468,2861,468,2555,128,3129,296,3293,272,3015,382,650,276,750,234,238,262,1947,326]},
{length:3405.1, floor:[0,1135,2270], blocks:[190,468,438,468,1827,469,2706,469,1840,248,1166,241,1158,124,2988,92,347,98,1852,359,2706,190,2732,84,2702,-22,1178,16,3238,28,3090,468], coins:[2103,210,2452,304,448,304,66,250,608,240,3035,250,3179,274,3341,282,228,270,776,316,928,368,1669,118,1727,76,1799,96,1860,76,1940,62,2002,118,2544,323,2618,336,2700,340,2792,330,2894,274,1053,494,1125,494,1205,494,1285,474,1347,412]},
{length:3405.1, floor:[0,1135,2270], blocks:[518,462,1845,462,157,194,1205,98,3217,86,3039,462,2187,208,2595,298,1417,224,2309,258,2447,291,2735,268], coins:[757,426,1058,452,904,452,1228,452,1385,452,2224,444,1545,452,2341,448,2467,448,2585,448,2685,448,2805,448,273,392,352,284,496,240,630,314]},
{length:5445.3, floor:[], blocks:[785,84,1179,362,1823,468,3415,326,4425,468,584,502,4868,144,3743,356,3911,334,3258,408,3040,520,4123,372,2131,132,2580,502,201,104,2804,96,2980,116,4711,74,985,304,1628,510], coins:[294,346,2526,270,2806,286,4368,164,4608,244,4712,294,4810,338,4902,378,4996,416,5092,414,5182,386,5274,334,5378,312,390,316,506,276,626,312,750,398,906,484,1050,504,1196,504,1352,442,1476,380,1560,324,1660,276,1790,256,1909,312,2037,380,2163,400,2287,364,2393,312,2654,244,2936,330,3060,298,3152,212,3234,140,3350,98,3474,86,3613,126,3756,110,3868,86,4004,90,4132,110,4248,132,4492,190,194,322,68,302]},
{length:5445.3, floor:[], blocks:[2439,304,967,294,4573,286,3146,344,1119,314,1463,84,2019,52,1453,574,248,460,390,414,570,488,2636,606,2778,560,3290,364,3600,70,4152,90,4896,594,5078,106,5272,126], coins:[192,282,2546,434,4980,314,5122,336,5262,310,5376,300,67,304,330,246,468,216,626,272,750,358,906,444,1050,464,1196,464,1352,402,1476,340,1560,284,1660,236,1790,216,1909,272,2037,380,2163,446,2295,504,2421,484,2654,370,756,220,848,150,978,130,1118,150,1242,210,1352,292,1568,430,1690,450,1802,426,1909,392,2103,282,2211,196,2311,128,2575,182,2435,144,2687,268,4730,416,2806,322,2930,408,3086,494,3230,514,3376,514,3532,452,3640,380,3744,306,3845,258,3975,238,4094,294,4222,362,4348,428,4480,486,4606,466,4838,352,2936,270,3028,200,3158,180,3298,200,3422,260,3532,342,3753,452,3875,472,3987,448,4094,414,4288,264,4396,178,4496,110,4760,164,4620,126,4872,250]},
{length:5763.35, floor:[0,1720,3182,4626], blocks:[976,240,2066,114,2227,168,3415,296,4797,260,288,468,4035,144,3575,322,3743,330,3911,272,1291,606,1454,580,1588,608,2480,92,3271,154,3081,-14,5329,468,5603,468,5033,92], coins:[621,330,300,262,1987,434,1167,388,2575,398,3048,256,541,302,461,280,381,266,701,370,781,426,2087,458,1897,458,2347,434,2157,434,2447,458,2257,458,3488,484,3608,484,3728,484,3848,484,4274,256,4408,224,4550,266,4652,372,4900,446,5000,374,5128,310,5252,254,5414,236,4764,458,220,262,140,262,60,262,1293,298,1431,256,1588,310,1734,416,2686,312,2861,256,4002,475,4126,372,3228,388,5556,256,5688,256]}];
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.;
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("domready",function(){function u(t){o=1;while(t=e.shift())t()}var e=[],t,n=!1,r=document,i="DOMContentLoaded",s="onreadystatechange",o=/^loaded|^c/.test(r.readyState);return r.addEventListener(i,t=function(){r.removeEventListener(i,t,n),u()},n),function(t){o?t():e.push(t)}});
/*!
 * VERSION: beta 1.8.0
 * DATE: 2013-01-18
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){"use strict";var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var d,f,c=e.length;--c>-1;)if(f=this.vars[e[c]])for(d=f.length;--d>-1;)"{self}"===f[d]&&(f=this.vars[e[c]]=f.concat(),f[d]=this);this.vars.tweens instanceof Array&&this.add(this.vars.tweens,0,this.vars.align,this.vars.stagger)},e=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],f=[],g=function(a){var c,b={};for(c in a)b[c]=a[c];return b},h=d.prototype=new b;return d.version="1.8.0",h.constructor=d,h.kill()._gc=!1,h.to=function(a,b,d,e){return this.add(new c(a,b,d),e)},h.from=function(a,b,d,e){return this.add(c.from(a,b,d),e)},h.fromTo=function(a,b,d,e,f){return this.add(c.fromTo(a,b,d,e),f)},h.staggerTo=function(a,b,e,f,h,i,j,k){var l=new d({onComplete:i,onCompleteParams:j,onCompleteScope:k});f=f||0;for(var m=0;a.length>m;m++)null!=e.startAt&&(e.startAt=g(e.startAt)),l.add(new c(a[m],b,g(e)),m*f);return this.add(l,h)},h.staggerFrom=function(a,b,c,d,e,f,g,h){return null==c.immediateRender&&(c.immediateRender=!0),c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},h.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,c.immediateRender&&(d.immediateRender=!0),this.staggerTo(a,b,d,e,f,g,h,i)},h.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},h.set=function(a,b,d){return b.immediateRender=!1,this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e=new d(a),f=e._timeline;null==b&&(b=!0),f._remove(e,!0),e._startTime=0,e._rawPrevTime=e._time=e._totalTime=f._time;for(var h,g=f._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||e.add(g,g._startTime-g._delay),g=h;return f.add(e,0),e},h.add=function(e,f,g,h){if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),e instanceof a);else{if(e instanceof Array){g=g||"normal",h=h||0;var k,l,i=f,j=e.length;for(k=0;j>k;k++)(l=e[k])instanceof Array&&(l=new d({tweens:l})),this.add(l,i),"string"!=typeof l&&"function"!=typeof l&&("sequence"===g?i=l._startTime+l.totalDuration()/l._timeScale:"start"===g&&(l._startTime-=l.delay())),i+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the TimelineLite/Max: it is neither a tween, timeline, function, nor a String.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(var m=this;m._gc&&m._timeline;)m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._enabled(!0,!1),m=m._timeline;return this},h.remove=function(b){if(b instanceof a)return this._remove(b,!1);if(b instanceof Array){for(var c=b.length;--c>-1;)this.remove(b[c]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},h.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},h.insert=h.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},h.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},h.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},h.removeLabel=function(a){return delete this._labels[a],this},h.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},h._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e instanceof Array)for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},h.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(a,c){return b.prototype.play.call(this,a,c)},h.gotoAndStop=function(a,b){return this.pause(a,b)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var j,k,l,m,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._startTime,h=this._timeScale,i=this._paused;if(a>=d?(this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(k=!0,m="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,a=d+1e-6):0>=a?(this._totalTime=this._time=0,(0!==e||0===this._duration&&this._rawPrevTime>0)&&(m="onReverseComplete",k=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=-1e-6):this._totalTime=this._time=this._rawPrevTime=a,this._time!==e||c){if(this._initted||(this._initted=!0),0===e&&this.vars.onStart&&0!==this._time&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),this._time>e)for(j=this._first;j&&(l=j._next,!this._paused||i);)(j._active||j._startTime<=this._time&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,!1):j.render((a-j._startTime)*j._timeScale,b,!1)),j=l;else for(j=this._last;j&&(l=j._prev,!this._paused||i);)(j._active||e>=j._startTime&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,!1):j.render((a-j._startTime)*j._timeScale,b,!1)),j=l;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),m&&(this._gc||(g===this._startTime||h!=this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(k&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||f)))}},h._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},h.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)e>g._startTime||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},h.getTweensOf=function(a,b){for(var d=c.getTweensOf(a),e=d.length,f=[],g=0;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(f[g++]=d[e]);return f},h._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},h.shiftChildren=function(a,b,c){c=c||0;for(var d=this._first;d;)d._startTime>=c&&(d._startTime+=a),d=d._next;if(b)for(var e in this._labels)this._labels[e]>=c&&(this._labels[e]+=a);return this._uncache(!0)},h._kill=function(a,b){if(null==a&&null==b)return this._enabled(!1,!1);for(var c=null==b?this.getChildren(!0,!0,!1):this.getTweensOf(b),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},h.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var a=this._first;a;)a.invalidate(),a=a._next;return this},h._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()},h.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var e,f,b=0,c=this._first,d=-999999999999;c;)e=c._next,d>c._startTime&&this._sortChildren?this.add(c,c._startTime-c._delay):d=c._startTime,0>c._startTime&&(b-=c._startTime,this.shiftChildren(-c._startTime,!1,-9999999999)),f=c._startTime+(c._dirty?c.totalDuration():c._totalDuration)/c._timeScale,f>b&&(b=f),c=e;this._duration=this._totalDuration=b,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==a&&this.timeScale(this._totalDuration/a),this},h.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0)}),window._gsDefine&&_gsQueue.pop()();
/*!
 * VERSION: beta 1.8.1
 * DATE: 2013-01-29
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(a){"use strict";var e,f,g,h,b=a.GreenSockGlobals||a,c=function(a){var e,c=a.split("."),d=b;for(e=0;c.length>e;e++)d[c[e]]=d=d[c[e]]||{};return d},d=c("com.greensock"),i={},j=function(d,e,f,g){this.sc=i[d]?i[d].sc:[],i[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(k){for(var n,o,p,q,l=e.length,m=l;--l>-1;)(n=i[e[l]]||new j(e[l],[])).gsClass?(h[l]=n.gsClass,m--):k&&n.sc.push(this);if(0===m&&f)for(o=("com.greensock."+d).split("."),p=o.pop(),q=c(o.join("."))[p]=this.gsClass=f.apply(f,h),g&&(b[p]=q,"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return q}):"undefined"!=typeof module&&module.exports&&(module.exports=q)),l=0;this.sc.length>l;l++)this.sc[l].check()},this.check(!0)},k=a._gsDefine=function(a,b,c,d){return new j(a,b,c,d)},l=d._class=function(a,b,c){return b=b||function(){},k(a,[],function(){return b},c),b},m=[0,0,1,1],n=[],o=l("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?m.concat(b):m},!0),p=o.map={},q=o.register=function(a,b,c,e){for(var i,j,k,m,f=b.split(","),g=f.length,h=(c||"easeIn,easeOut,easeInOut").split(",");--g>-1;)for(j=f[g],i=e?l("easing."+j,null,!0):d.easing[j]||{},k=h.length;--k>-1;)m=h[k],p[j+"."+m]=p[m+j]=i[m]=a.getRatio?a:a[m]||new a};for(g=o.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,q(new o(null,null,1,f),g,"easeOut",!0),q(new o(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),q(new o(null,null,3,f),g,"easeInOut");p.linear=d.easing.Linear.easeIn,p.swing=d.easing.Quad.easeInOut;var r=l("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=r.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var h,i,f=this._listeners[a],g=0;for(null==f&&(this._listeners[a]=f=[]),i=f.length;--i>-1;)h=f[i],h.c===b?f.splice(i,1):0===g&&e>h.pr&&(g=i+1);f.splice(g,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var d,c=this._listeners[a];if(c)for(d=c.length;--d>-1;)if(c[d].c===b)return c.splice(d,1),void 0},g.dispatchEvent=function(a){var b=this._listeners[a];if(b)for(var e,c=b.length,d=this._eventTarget;--c>-1;)e=b[c],e.up?e.c.call(e.s||d,{type:a,target:d}):e.c.call(e.s||d)};var s=a.requestAnimationFrame,t=a.cancelAnimationFrame,u=Date.now||function(){return(new Date).getTime()};for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!s;)s=a[e[f]+"RequestAnimationFrame"],t=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];l("Ticker",function(b,c){var g,h,i,j,k,d=this,e=u(),f=c!==!1&&s,l=function(){null!=i&&(f&&t?t(i):a.clearTimeout(i),i=null)},m=function(a){d.time=(u()-e)/1e3,(!g||d.time>=k||a===!0)&&(d.frame++,k=d.time>k?d.time+j-(d.time-k):d.time+j-.001,d.time+.001>k&&(k=d.time+.001),d.dispatchEvent("tick")),a!==!0&&(i=h(m))};r.call(d),this.time=this.frame=0,this.tick=function(){m(!0)},this.fps=function(a){return arguments.length?(g=a,j=1/(g||60),k=this.time+j,h=0===g?function(){}:f&&s?s:function(a){return setTimeout(a,1e3*(k-d.time)+1>>0||1)},l(),i=h(m),void 0):g},this.useRAF=function(a){return arguments.length?(l(),f=a,d.fps(g),void 0):f},d.fps(b),setTimeout(function(){f&&!i&&d.useRAF(!1)},1e3)}),g=d.Ticker.prototype=new d.events.EventDispatcher,g.constructor=d.Ticker;var v=l("core.Animation",function(a,b){if(this.vars=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,I){h||(w.tick(),h=!0);var c=this.vars.useFrames?H:I;c.add(this,c._time),this.vars.paused&&this.paused(!0)}}),w=v.ticker=new d.Ticker;g=v.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1,g.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1),this.paused(!1)},g.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1),this.paused(!1),this.totalTime(a?-this._delay:0,b!==!1)},g.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0),this.paused(!1)},g.render=function(){},g.invalidate=function(){return this},g._enabled=function(a,b){return this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&null==this.timeline?this._timeline.add(this,this._startTime-this._delay):a||null==this.timeline||this._timeline._remove(this,!0)),!1},g._kill=function(){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g.eventCallback=function(a,b,c,d){if(null==a)return null;if("on"===a.substr(0,2)){if(1===arguments.length)return this.vars[a];if(null==b)delete this.vars[a];else if(this.vars[a]=b,this.vars[a+"Params"]=c,this.vars[a+"Scope"]=d,c)for(var e=c.length;--e>-1;)"{self}"===c[e]&&(c=this.vars[a+"Params"]=c.concat(),c[e]=this);"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this.totalTime(a,b)):this._time},g.totalTime=function(a,b){if(!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&(a+=this.totalDuration()),this._timeline.smoothChildTiming&&(this._dirty&&this.totalDuration(),a>this._totalDuration&&(a=this._totalDuration),this._startTime=(this._paused?this._pauseTime:this._timeline._time)-(this._reversed?this._totalDuration-a:a)/this._timeScale,this._timeline._dirty||this._uncache(!1),!this._timeline._active))for(var c=this._timeline;c._timeline;)c.totalTime(c._totalTime,!0),c=c._timeline;this._gc&&this._enabled(!0,!1),this._totalTime!==a&&this.render(a,b,!1)}return this},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||1e-6,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime||0===this._pauseTime?this._pauseTime:this._timeline._totalTime;this._startTime=b-(b-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed},g.paused=function(a){return arguments.length?(a!=this._paused&&this._timeline&&(!a&&this._timeline.smoothChildTiming&&(this._startTime+=this._timeline.rawTime()-this._pauseTime,this._uncache(!1)),this._pauseTime=a?this._timeline.rawTime():null,this._paused=a,this._active=!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration),this._gc&&(a||this._enabled(!0,!1)),this):this._paused};var x=l("core.SimpleTimeline",function(a){v.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=x.prototype=new v,g.constructor=x,g.kill()._gc=!1,g._first=g._last=null,g._sortChildren=!1,g.add=function(a,b){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._timeline&&this._uncache(!0),this},g.insert=g.add,g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this},g.render=function(a,b){var e,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;d;)e=d._next,(d._active||a>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,!1):d.render((a-d._startTime)*d._timeScale,b,!1)),d=e},g.rawTime=function(){return this._totalTime};var y=l("TweenLite",function(a,b,c){if(v.call(this,b,c),null==a)throw"Cannot tween an undefined reference.";this.target=a="string"!=typeof a?a:y.selector(a)||a,this._overwrite=null==this.vars.overwrite?G[y.defaultOverwrite]:"number"==typeof this.vars.overwrite?this.vars.overwrite>>0:G[this.vars.overwrite];var e,f,d=a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style;if((d||a instanceof Array)&&"number"!=typeof a[0])for(this._targets=d&&!a.slice?A(a):a.slice(0),this._propLookup=[],this._siblings=[],e=0;this._targets.length>e;e++)f=this._targets[e],f?"string"!=typeof f?"function"==typeof f.each&&f[0]&&f[0].nodeType&&f[0].style?(this._targets.splice(e--,1),this._targets=this._targets.concat(A(f))):(this._siblings[e]=J(f,this,!1),1===this._overwrite&&this._siblings[e].length>1&&K(f,this,null,1,this._siblings[e])):(f=this._targets[e--]=y.selector(f),"string"==typeof f&&this._targets.splice(e+1,1)):this._targets.splice(e--,1);else this._propLookup={},this._siblings=J(a,this,!1),1===this._overwrite&&this._siblings.length>1&&K(a,this,null,1,this._siblings);(this.vars.immediateRender||0===b&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),z=function(a){return"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},A=function(a){var b=[];return a.each(function(){b.push(this)}),b},B=function(a){var c,b={};for(c in a)!F[c]&&(!C[c]||C[c]&&C[c]._autoCSS)&&(b[c]=a[c],delete a[c]);a.css=b};g=y.prototype=new v,g.constructor=y,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=null,g._notifyPluginsOfEnabled=!1,y.version="1.8.1",y.defaultEase=g._ease=new o(null,null,1,1),y.defaultOverwrite="auto",y.ticker=w,y.selector=a.$||a.jQuery||function(b){return a.$?(y.selector=a.$,a.$(b)):a.document?a.document.getElementById("#"===b.charAt(0)?b.substr(1):b):b};var C=y._plugins={},D=y._tweenLookup={},E=0,F={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},G={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},H=v._rootFramesTimeline=new x,I=v._rootTimeline=new x;I._startTime=w.time,H._startTime=w.frame,I._active=H._active=!0,v._updateRoot=function(){if(I.render((w.time-I._startTime)*I._timeScale,!1,!1),H.render((w.frame-H._startTime)*H._timeScale,!1,!1),!(w.frame%120)){var a,b,c;for(c in D){for(b=D[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete D[c]}}},w.addEventListener("tick",v._updateRoot);var J=function(a,b,c){var e,f,d=a._gsTweenID;if(D[d||(a._gsTweenID=d="t"+E++)]||(D[d]={target:a,tweens:[]}),b&&(e=D[d].tweens,e[f=e.length]=b,c))for(;--f>-1;)e[f]===b&&e.splice(f,1);return D[d].tweens},K=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._enabled(!1,!1)&&(g=!0);else if(5===d)break;return g}var n,j=b._startTime+1e-10,k=[],l=0,m=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(n=n||L(b,0,m),0===L(h,n,m)&&(k[l++]=h)):j>=h._startTime&&h._startTime+h.totalDuration()/h._timeScale+1e-10>j&&((m||!h._initted)&&2e-10>=j-h._startTime||(k[l++]=h)));for(f=l;--f>-1;)h=k[f],2===d&&h._kill(c,a)&&(g=!0),(2!==d||!h._firstPT&&h._initted)&&h._enabled(!1,!1)&&(g=!0);return g},L=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2e-10>f-b?1e-10:(f+=a.totalDuration()/a._timeScale/e)>b?0:f-b-1e-10};g._init=function(){var c,d,e,a=this.vars,b=a.ease;if(a.startAt&&(a.startAt.overwrite=0,a.startAt.immediateRender=!0,y.to(this.target,0,a.startAt)),this._ease=b?b instanceof o?a.easeParams instanceof Array?b.config.apply(b,a.easeParams):b:"function"==typeof b?new o(b,a.easeParams):p[b]||y.defaultEase:y.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(c=this._targets.length;--c>-1;)this._initProps(this._targets[c],this._propLookup[c]={},this._siblings[c],this._overwrittenProps?this._overwrittenProps[c]:null)&&(d=!0);else d=this._initProps(this.target,this._propLookup,this._siblings,this._overwrittenProps);if(d&&y._onPluginEvent("_onInitAllProps",this),this._overwrittenProps&&null==this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),a.runBackwards)for(e=this._firstPT;e;)e.s+=e.c,e.c=-e.c,e=e._next;this._onUpdate=a.onUpdate,this._initted=!0},g._initProps=function(a,b,c,d){var e,f,g,h,i,j,k;if(null==a)return!1;this.vars.css||a.style&&a.nodeType&&C.css&&this.vars.autoCSS!==!1&&B(this.vars);for(e in this.vars){if(F[e]){if(("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)&&(i=this.vars[e]))for(f=i.length;--f>-1;)"{self}"===i[f]&&(i=this.vars[e]=i.concat(),i[f]=this)}else if(C[e]&&(h=new C[e])._onInitTween(a,this.vars[e],this)){for(this._firstPT=j={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:h._priority},f=h._overwriteProps.length;--f>-1;)b[h._overwriteProps[f]]=this._firstPT;(h._priority||h._onInitAllProps)&&(g=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=b[e]=j={_next:this._firstPT,t:a,p:e,f:"function"==typeof a[e],n:e,pg:!1,pr:0},j.s=j.f?a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(a[e]),k=this.vars[e],j.c="string"==typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*Number(k.substr(2)):Number(k)-j.s||0;j&&j._next&&(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,b,c,d):this._overwrite>1&&this._firstPT&&c.length>1&&K(a,this,b,this._overwrite,c)?(this._kill(b,a),this._initProps(a,b,c,d)):g},g.render=function(a,b,c){var e,f,g,d=this._time;if(a>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(0>=a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===this._duration&&this._rawPrevTime>0)&&(f="onReverseComplete",e=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,i=this._easeType,j=this._easePower;(1===i||3===i&&h>=.5)&&(h=1-h),3===i&&(h*=2),1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h),this.ratio=1===i?1-h:2===i?h:.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||c){for(this._initted||(this._init(),!e&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration))),this._active||this._paused||(this._active=!0),0===d&&this.vars.onStart&&(0!==this._time||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),f&&(this._gc||(e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||n)))}},g._kill=function(a,b){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:y.selector(b)||b;var c,d,e,f,g,h,i,j;if((b instanceof Array||z(b))&&"number"!=typeof b[0])for(c=b.length;--c>-1;)this._kill(a,b[c])&&(h=!0);else{if(this._targets){for(c=this._targets.length;--c>-1;)if(b===this._targets[c]){g=this._propLookup[c]||{},this._overwrittenProps=this._overwrittenProps||[],d=this._overwrittenProps[c]=a?this._overwrittenProps[c]||{}:"all";break}}else{if(b!==this.target)return!1;g=this._propLookup,d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g){i=a||g,j=a!==d&&"all"!==d&&a!==g&&(null==a||a._tempKill!==!0);for(e in i)(f=g[e])&&(f.pg&&f.t._kill(i)&&(h=!0),f.pg&&0!==f.t._overwriteProps.length||(f._prev?f._prev._next=f._next:f===this._firstPT&&(this._firstPT=f._next),f._next&&(f._next._prev=f._prev),f._next=f._prev=null),delete g[e]),j&&(d[e]=1)}}return h},g.invalidate=function(){return this._notifyPluginsOfEnabled&&y._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},g._enabled=function(a,b){if(a&&this._gc)if(this._targets)for(var c=this._targets.length;--c>-1;)this._siblings[c]=J(this._targets[c],this,!0);else this._siblings=J(this.target,this,!0);return v.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?y._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},y.to=function(a,b,c){return new y(a,b,c)},y.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender!==!1&&(c.immediateRender=!0),new y(a,b,c)},y.fromTo=function(a,b,c,d){return d.startAt=c,c.immediateRender&&(d.immediateRender=!0),new y(a,b,d)},y.delayedCall=function(a,b,c,d,e){return new y(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:d,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})},y.set=function(a,b){return new y(a,0,b)},y.killTweensOf=y.killDelayedCallsTo=function(a,b){for(var c=y.getTweensOf(a),d=c.length;--d>-1;)c[d]._kill(b,a)},y.getTweensOf=function(a){if(null!=a){a="string"!=typeof a?a:y.selector(a)||a;var b,c,d,e;if((a instanceof Array||z(a))&&"number"!=typeof a[0]){for(b=a.length,c=[];--b>-1;)c=c.concat(y.getTweensOf(a[b]));for(b=c.length;--b>-1;)for(e=c[b],d=b;--d>-1;)e===c[d]&&c.splice(b,1)}else for(c=J(a).concat(),b=c.length;--b>-1;)c[b]._gc&&c.splice(b,1);return c}};var M=l("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0},!0);if(g=M.prototype,M.version=12,M.API=2,g._firstPT=null,g._addTween=function(a,b,c,d,e,f){var g,h;null!=d&&(g="number"==typeof d||"="!==d.charAt(1)?Number(d)-c:parseInt(d.charAt(0)+"1",10)*Number(d.substr(2)))&&(this._firstPT=h={_next:this._firstPT,t:a,p:b,s:c,c:g,f:"function"==typeof a[b],n:e||b,r:f},h._next&&(h._next._prev=h))},g.setRatio=function(a){for(var c,b=this._firstPT;b;)c=b.c*a+b.s,b.r&&(c=c+(c>0?.5:-.5)>>0),b.f?b.t[b.p](c):b.t[b.p]=c,b=b._next},g._kill=function(a){if(null!=a[this._propName])this._overwriteProps=[];else for(var b=this._overwriteProps.length;--b>-1;)null!=a[this._overwriteProps[b]]&&this._overwriteProps.splice(b,1);for(var c=this._firstPT;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1},g._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},y._onPluginEvent=function(a,b){var d,c=b._firstPT;if("_onInitAllProps"===a){for(var e,f,g,h;c;){for(h=c._next,e=f;e&&e.pr>c.pr;)e=e._next;(c._prev=e?e._prev:g)?c._prev._next=c:f=c,(c._next=e)?e._prev=c:g=c,c=h}c=b._firstPT=f}for(;c;)c.pg&&"function"==typeof c.t[a]&&c.t[a]()&&(d=!0),c=c._next;return d},M.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===M.API&&(y._plugins[(new a[b])._propName]=a[b]);return!0},e=a._gsQueue){for(f=0;e.length>f;f++)e[f]();for(g in i)i[g].func||a.console.log("GSAP encountered missing dependency: com.greensock."+g)}h=!1})(window);
/*!
 * VERSION: beta 1.8.0
 * DATE: 2013-01-21
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";_gsDefine("easing.Back",["easing.Ease"],function(a){var n,o,b=window.GreenSockGlobals||window,c=b.com.greensock,d=2*Math.PI,e=Math.PI/2,f=c._class,g=function(b,c){var d=f("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},h=a.register||function(){},i=function(a,b,c,d){var g=f("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return h(g,a),g},j=function(b,c){var d=f("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},k=i("Back",j("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),j("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),j("BackInOut",function(a){return 1>(a*=2)?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),l=f("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),m=l.prototype=new a;return m.constructor=l,m.getRatio=function(a){var b=a+(.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},l.ease=new l(.7,.7),m.config=l.config=function(a,b,c){return new l(a,b,c)},n=f("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),m=n.prototype=new a,m.constructor=n,m.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},m.config=n.config=function(a){return new n(a)},i("Bounce",g("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),g("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),g("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),i("Circ",g("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),g("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),g("CircInOut",function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),o=function(b,c,e){var g=f("easing."+b,function(a,b){this._p1=a||1,this._p2=b||e,this._p3=this._p2/d*(Math.asin(1/this._p1)||0)},!0),h=g.prototype=new a;return h.constructor=g,h.getRatio=c,h.config=function(a,b){return new g(a,b)},g},i("Elastic",o("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*d/this._p2)+1},.3),o("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2))},.3),o("ElasticInOut",function(a){return 1>(a*=2)?-.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2):.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*d/this._p2)+1},.45)),i("Expo",g("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),g("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),g("ExpoInOut",function(a){return 1>(a*=2)?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),i("Sine",g("SineOut",function(a){return Math.sin(a*e)}),g("SineIn",function(a){return-Math.cos(a*e)+1}),g("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),f("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),h(b.SlowMo,"SlowMo","ease,"),h(n,"SteppedEase","ease,"),k},!0)}),window._gsDefine&&_gsQueue.pop()();
// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:11,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};
/**
 * @license
 * pixi.js - v1.4.3
 * Copyright (c) 2012, Mat Groves
 * http://goodboydigital.com/
 *
 * Compiled: 2014-01-19
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(){function c(){return e.Matrix="undefined"!=typeof Float32Array?Float32Array:Array,e.Matrix}var d=this,e=e||{};e.WEBGL_RENDERER=0,e.CANVAS_RENDERER=1,e.Point=function(a,b){this.x=a||0,this.y=b||0},e.Point.prototype.clone=function(){return new e.Point(this.x,this.y)},e.Point.prototype.constructor=e.Point,e.Point.prototype.set=function(a,b){this.x=a||0,this.y=b||(0!==b?this.x:0)},e.Rectangle=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},e.Rectangle.prototype.clone=function(){return new e.Rectangle(this.x,this.y,this.width,this.height)},e.Rectangle.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=this.x;if(a>=c&&a<=c+this.width){var d=this.y;if(b>=d&&b<=d+this.height)return!0}return!1},e.Rectangle.prototype.constructor=e.Rectangle,e.Polygon=function(a){if(a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var b=[],c=0,d=a.length;d>c;c+=2)b.push(new e.Point(a[c],a[c+1]));a=b}this.points=a},e.Polygon.prototype.clone=function(){for(var a=[],b=0;b<this.points.length;b++)a.push(this.points[b].clone());return new e.Polygon(a)},e.Polygon.prototype.contains=function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!c)}return c},e.Polygon.prototype.constructor=e.Polygon,e.Circle=function(a,b,c){this.x=a||0,this.y=b||0,this.radius=c||0},e.Circle.prototype.clone=function(){return new e.Circle(this.x,this.y,this.radius)},e.Circle.prototype.contains=function(a,b){if(this.radius<=0)return!1;var c=this.x-a,d=this.y-b,e=this.radius*this.radius;return c*=c,d*=d,e>=c+d},e.Circle.prototype.constructor=e.Circle,e.Ellipse=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},e.Ellipse.prototype.clone=function(){return new e.Ellipse(this.x,this.y,this.width,this.height)},e.Ellipse.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=(a-this.x)/this.width-.5,d=(b-this.y)/this.height-.5;return c*=c,d*=d,.25>c+d},e.Ellipse.prototype.getBounds=function(){return new e.Rectangle(this.x,this.y,this.width,this.height)},e.Ellipse.prototype.constructor=e.Ellipse,c(),e.mat3={},e.mat3.create=function(){var a=new e.Matrix(9);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},e.mat3.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},e.mat4={},e.mat4.create=function(){var a=new e.Matrix(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},e.mat3.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=b[0],n=b[1],o=b[2],p=b[3],q=b[4],r=b[5],s=b[6],t=b[7],u=b[8];return c[0]=m*d+n*g+o*j,c[1]=m*e+n*h+o*k,c[2]=m*f+n*i+o*l,c[3]=p*d+q*g+r*j,c[4]=p*e+q*h+r*k,c[5]=p*f+q*i+r*l,c[6]=s*d+t*g+u*j,c[7]=s*e+t*h+u*k,c[8]=s*f+t*i+u*l,c},e.mat3.clone=function(a){var b=new e.Matrix(9);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b},e.mat3.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[5];return a[1]=a[3],a[2]=a[6],a[3]=c,a[5]=a[7],a[6]=d,a[7]=e,a}return b[0]=a[0],b[1]=a[3],b[2]=a[6],b[3]=a[1],b[4]=a[4],b[5]=a[7],b[6]=a[2],b[7]=a[5],b[8]=a[8],b},e.mat3.toMat4=function(a,b){return b||(b=e.mat4.create()),b[15]=1,b[14]=0,b[13]=0,b[12]=0,b[11]=0,b[10]=a[8],b[9]=a[7],b[8]=a[6],b[7]=0,b[6]=a[5],b[5]=a[4],b[4]=a[3],b[3]=0,b[2]=a[2],b[1]=a[1],b[0]=a[0],b},e.mat4.create=function(){var a=new e.Matrix(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},e.mat4.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[3],f=a[6],g=a[7],h=a[11];return a[1]=a[4],a[2]=a[8],a[3]=a[12],a[4]=c,a[6]=a[9],a[7]=a[13],a[8]=d,a[9]=f,a[11]=a[14],a[12]=e,a[13]=g,a[14]=h,a}return b[0]=a[0],b[1]=a[4],b[2]=a[8],b[3]=a[12],b[4]=a[1],b[5]=a[5],b[6]=a[9],b[7]=a[13],b[8]=a[2],b[9]=a[6],b[10]=a[10],b[11]=a[14],b[12]=a[3],b[13]=a[7],b[14]=a[11],b[15]=a[15],b},e.mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],m=a[9],n=a[10],o=a[11],p=a[12],q=a[13],r=a[14],s=a[15],t=b[0],u=b[1],v=b[2],w=b[3];return c[0]=t*d+u*h+v*l+w*p,c[1]=t*e+u*i+v*m+w*q,c[2]=t*f+u*j+v*n+w*r,c[3]=t*g+u*k+v*o+w*s,t=b[4],u=b[5],v=b[6],w=b[7],c[4]=t*d+u*h+v*l+w*p,c[5]=t*e+u*i+v*m+w*q,c[6]=t*f+u*j+v*n+w*r,c[7]=t*g+u*k+v*o+w*s,t=b[8],u=b[9],v=b[10],w=b[11],c[8]=t*d+u*h+v*l+w*p,c[9]=t*e+u*i+v*m+w*q,c[10]=t*f+u*j+v*n+w*r,c[11]=t*g+u*k+v*o+w*s,t=b[12],u=b[13],v=b[14],w=b[15],c[12]=t*d+u*h+v*l+w*p,c[13]=t*e+u*i+v*m+w*q,c[14]=t*f+u*j+v*n+w*r,c[15]=t*g+u*k+v*o+w*s,c},e.identityMatrix=e.mat3.create(),e.DisplayObject=function(){this.last=this,this.first=this,this.position=new e.Point,this.scale=new e.Point(1,1),this.pivot=new e.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.buttonMode=!1,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this._interactive=!1,this.defaultCursor="pointer",this.worldTransform=e.mat3.create(),this.localTransform=e.mat3.create(),this.color=[],this.dynamic=!0,this._sr=0,this._cr=1,this.filterArea=new e.Rectangle(0,0,1,1),this._bounds=new e.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null},e.DisplayObject.prototype.constructor=e.DisplayObject,e.DisplayObject.prototype.setInteractive=function(a){this.interactive=a},Object.defineProperty(e.DisplayObject.prototype,"interactive",{get:function(){return this._interactive},set:function(a){this._interactive=a,this.stage&&(this.stage.dirty=!0)}}),Object.defineProperty(e.DisplayObject.prototype,"worldVisible",{get:function(){var a=this;do{if(!a.visible)return!1;a=a.parent}while(a);return!0}}),Object.defineProperty(e.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(a){this._mask&&(this._mask.isMask=!1),this._mask=a,this._mask&&(this._mask.isMask=!0)}}),Object.defineProperty(e.DisplayObject.prototype,"filters",{get:function(){return this._filters},set:function(a){if(a){for(var b=[],c=0;c<a.length;c++)for(var d=a[c].passes,e=0;e<d.length;e++)b.push(d[e]);this._filterBlock={target:this,filterPasses:b}}this._filters=a}}),e.DisplayObject.prototype.updateTransform=function(){this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation));var a=this.localTransform,b=this.parent.worldTransform,c=this.worldTransform;a[0]=this._cr*this.scale.x,a[1]=-this._sr*this.scale.y,a[3]=this._sr*this.scale.x,a[4]=this._cr*this.scale.y;var d=this.pivot.x,e=this.pivot.y,f=a[0],g=a[1],h=this.position.x-a[0]*d-e*a[1],i=a[3],j=a[4],k=this.position.y-a[4]*e-d*a[3],l=b[0],m=b[1],n=b[2],o=b[3],p=b[4],q=b[5];a[2]=h,a[5]=k,c[0]=l*f+m*i,c[1]=l*g+m*j,c[2]=l*h+m*k+n,c[3]=o*f+p*i,c[4]=o*g+p*j,c[5]=o*h+p*k+q,this.worldAlpha=this.alpha*this.parent.worldAlpha},e.DisplayObject.prototype.getBounds=function(){return e.EmptyRectangle},e.DisplayObject.prototype.getLocalBounds=function(){var a=this.worldTransform;this.worldTransform=e.identityMatrix,this.updateTransform();var b=this.getBounds();return this.worldTransform=a,b},e.DisplayObject.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0)},e.DisplayObject.prototype._renderWebGL=function(a){a=a},e.DisplayObject.prototype._renderCanvas=function(a){a=a},e.EmptyRectangle=new e.Rectangle(0,0,0,0),e.DisplayObjectContainer=function(){e.DisplayObject.call(this),this.children=[]},e.DisplayObjectContainer.prototype=Object.create(e.DisplayObject.prototype),e.DisplayObjectContainer.prototype.constructor=e.DisplayObjectContainer,e.DisplayObjectContainer.prototype.addChild=function(a){a.parent&&a!==this&&a.parent.removeChild(a),a.parent=this,this.children.push(a),this.stage&&a.setStageReference(this.stage)},e.DisplayObjectContainer.prototype.addChildAt=function(a,b){if(!(b>=0&&b<=this.children.length))throw new Error(a+" The index "+b+" supplied is out of bounds "+this.children.length);a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),this.stage&&a.setStageReference(this.stage)},e.DisplayObjectContainer.prototype.swapChildren=function(a,b){if(a!==b){var c=this.children.indexOf(a),d=this.children.indexOf(b);if(0>c||0>d)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[c]=b,this.children[d]=a}},e.DisplayObjectContainer.prototype.getChildAt=function(a){if(a>=0&&a<this.children.length)return this.children[a];throw new Error("The supplied DisplayObjects must be a child of the caller "+this)},e.DisplayObjectContainer.prototype.removeChild=function(a){var b=this.children.indexOf(a);if(-1===b)throw new Error(a+" The supplied DisplayObject must be a child of the caller "+this);this.stage&&a.removeStageReference(),a.parent=void 0,this.children.splice(b,1)},e.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible){e.DisplayObject.prototype.updateTransform.call(this);for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform()}},e.DisplayObjectContainer.prototype.getBounds=function(){if(0===this.children.length)return e.EmptyRectangle;for(var a,b,c,d=1/0,f=1/0,g=-1/0,h=-1/0,i=0,j=this.children.length;j>i;i++){var k=this.children[i];k.visible&&(a=this.children[i].getBounds(),d=d<a.x?d:a.x,f=f<a.y?f:a.y,b=a.width+a.x,c=a.height+a.y,g=g>b?g:b,h=h>c?h:c)}var l=this._bounds;return l.x=d,l.y=f,l.width=g-d,l.height=h-f,l},e.DisplayObjectContainer.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d.setStageReference(a)}},e.DisplayObjectContainer.prototype.removeStageReference=function(){for(var a=0,b=this.children.length;b>a;a++){var c=this.children[a];c.removeStageReference()}this._interactive&&(this.stage.dirty=!0),this.stage=null},e.DisplayObjectContainer.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha){var b,c;if(this._mask||this._filters){for(this._mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this._filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);a.spriteBatch.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.spriteBatch.start()}else for(b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},e.DisplayObjectContainer.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){this._mask&&a.maskManager.pushMask(this._mask,a.context);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},e.blendModes={},e.blendModes.NORMAL=0,e.blendModes.ADD=1,e.blendModes.MULTIPLY=2,e.blendModes.SCREEN=3,e.Sprite=function(a){e.DisplayObjectContainer.call(this),this.anchor=new e.Point,this.texture=a,this._width=0,this._height=0,this.tint=16777215,this.blendMode=e.blendModes.NORMAL,a.baseTexture.hasLoaded?this.onTextureUpdate():(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},e.Sprite.prototype=Object.create(e.DisplayObjectContainer.prototype),e.Sprite.prototype.constructor=e.Sprite,Object.defineProperty(e.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(e.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),e.Sprite.prototype.setTexture=function(a){this.texture.baseTexture!==a.baseTexture?(this.textureChange=!0,this.texture=a):this.texture=a,this.cachedTint=16777215,this.updateFrame=!0},e.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height),this.updateFrame=!0},e.Sprite.prototype.getBounds=function(){var a=this.texture.frame.width,b=this.texture.frame.height,c=a*(1-this.anchor.x),d=a*-this.anchor.x,e=b*(1-this.anchor.y),f=b*-this.anchor.y,g=this.worldTransform,h=g[0],i=g[3],j=g[1],k=g[4],l=g[2],m=g[5],n=h*d+j*f+l,o=k*f+i*d+m,p=h*c+j*f+l,q=k*f+i*c+m,r=h*c+j*e+l,s=k*e+i*c+m,t=h*d+j*e+l,u=k*e+i*d+m,v=-1/0,w=-1/0,x=1/0,y=1/0;x=x>n?n:x,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,v=n>v?n:v,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w;var z=this._bounds;return z.x=x,z.width=v-x,z.y=y,z.height=w-y,this._currentBounds=z,z},e.Sprite.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha){var b,c;if(this._mask||this._filters){var d=a.spriteBatch;for(this._mask&&(d.stop(),a.maskManager.pushMask(this.mask,a),d.start()),this._filters&&(d.flush(),a.filterManager.pushFilter(this._filterBlock)),d.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);d.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),d.start()}else for(a.spriteBatch.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},e.Sprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){this._mask&&a.maskManager.pushMask(this._mask,a.context);var b=this.texture.frame,c=a.context,d=this.texture;if(b&&b.width&&b.height&&d.baseTexture.source){c.globalAlpha=this.worldAlpha;var f=this.worldTransform;if(c.setTransform(f[0],f[3],f[1],f[4],f[2],f[5]),this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=e.blendModesCanvas[a.currentBlendMode]),16777215!==this.tint){if(this.cachedTint!==this.tint){if(!d.baseTexture.hasLoaded)return;this.cachedTint=this.tint,this.tintedTexture=e.CanvasTinter.getTintedTexture(this,this.tint)}c.drawImage(this.tintedTexture,0,0,b.width,b.height,this.anchor.x*-b.width,this.anchor.y*-b.height,b.width,b.height)}else if(d.trimmed){var g=d.trim;c.drawImage(this.texture.baseTexture.source,b.x,b.y,b.width,b.height,g.x-this.anchor.x*g.realWidth,g.y-this.anchor.y*g.realHeight,b.width,b.height)}else c.drawImage(this.texture.baseTexture.source,b.x,b.y,b.width,b.height,this.anchor.x*-b.width,this.anchor.y*-b.height,b.width,b.height)}for(var h=0,i=this.children.length;i>h;h++){var j=this.children[h];j._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},e.Sprite.fromFrame=function(a){var b=e.TextureCache[a];if(!b)throw new Error('The frameId "'+a+'" does not exist in the texture cache'+this);return new e.Sprite(b)},e.Sprite.fromImage=function(a){var b=e.Texture.fromImage(a);return new e.Sprite(b)},e.SpriteBatch=function(a){e.DisplayObjectContainer.call(this),this.textureThing=a,this.ready=!1},e.SpriteBatch.prototype=Object.create(e.DisplayObjectContainer.prototype),e.SpriteBatch.constructor=e.SpriteBatch,e.SpriteBatch.prototype.initWebGL=function(a){this.fastSpriteBatch=new e.WebGLFastSpriteBatch(a),this.ready=!0},e.SpriteBatch.prototype.updateTransform=function(){e.DisplayObject.prototype.updateTransform.call(this)},e.SpriteBatch.prototype._renderWebGL=function(a){this.visible&&(this.ready||this.initWebGL(a.gl),a.spriteBatch.stop(),a.shaderManager.activateShader(a.shaderManager.fastShader),this.fastSpriteBatch.begin(this,a),this.fastSpriteBatch.render(this),a.shaderManager.activateShader(a.shaderManager.defaultShader),a.spriteBatch.start())},e.SpriteBatch.prototype._renderCanvas=function(a){var b=a.context;b.globalAlpha=this.worldAlpha;var c=this.worldTransform;b.setTransform(c[0],c[3],c[1],c[4],c[2],c[5]),b.save();for(var d=0;d<this.children.length;d++){var f=this.children[d],g=f.texture,h=g.frame;f.rotation%(2*Math.PI)===0?b.drawImage(g.baseTexture.source,h.x,h.y,h.width,h.height,f.anchor.x*-h.width*f.scale.x+f.position.x+.5|0,f.anchor.y*-h.height*f.scale.y+f.position.y+.5|0,h.width*f.scale.x,h.height*f.scale.y):(e.DisplayObject.prototype.updateTransform.call(f),c=f.localTransform,b.setTransform(c[0],c[3],c[1],c[4],c[2],c[5]),b.drawImage(g.baseTexture.source,h.x,h.y,h.width,h.height,f.anchor.x*-h.width+.5|0,f.anchor.y*-h.height+.5|0,h.width,h.height))}b.restore()},e.MovieClip=function(a){e.Sprite.call(this,a[0]),this.textures=a,this.animationSpeed=1,this.loop=!0,this.onComplete=null,this.currentFrame=0,this.playing=!1},e.MovieClip.prototype=Object.create(e.Sprite.prototype),e.MovieClip.prototype.constructor=e.MovieClip,Object.defineProperty(e.MovieClip.prototype,"totalFrames",{get:function(){return this.textures.length}}),e.MovieClip.prototype.stop=function(){this.playing=!1},e.MovieClip.prototype.play=function(){this.playing=!0},e.MovieClip.prototype.gotoAndStop=function(a){this.playing=!1,this.currentFrame=a;var b=this.currentFrame+.5|0;this.setTexture(this.textures[b%this.textures.length])},e.MovieClip.prototype.gotoAndPlay=function(a){this.currentFrame=a,this.playing=!0},e.MovieClip.prototype.updateTransform=function(){if(e.Sprite.prototype.updateTransform.call(this),this.playing){this.currentFrame+=this.animationSpeed;var a=this.currentFrame+.5|0;this.loop||a<this.textures.length?this.setTexture(this.textures[a%this.textures.length]):a>=this.textures.length&&(this.gotoAndStop(this.textures.length-1),this.onComplete&&this.onComplete())}},e.FilterBlock=function(){this.visible=!0,this.renderable=!0},e.Text=function(a,b){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),e.Sprite.call(this,e.Texture.fromCanvas(this.canvas)),this.setText(a),this.setStyle(b),this.updateText(),this.dirty=!1},e.Text.prototype=Object.create(e.Sprite.prototype),e.Text.prototype.constructor=e.Text,e.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,this.style=a,this.dirty=!0},e.Text.prototype.setText=function(a){this.text=a.toString()||" ",this.dirty=!0},e.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.wordWrap(this.text));for(var b=a.split(/(?:\r\n|\r|\n)/),c=[],d=0,f=0;f<b.length;f++){var g=this.context.measureText(b[f]).width;c[f]=g,d=Math.max(d,g)}this.canvas.width=d+this.style.strokeThickness;var h=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness;for(this.canvas.height=h*b.length,navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.style.fill,this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.textBaseline="top",f=0;f<b.length;f++){var i=new e.Point(this.style.strokeThickness/2,this.style.strokeThickness/2+f*h);"right"===this.style.align?i.x+=d-c[f]:"center"===this.style.align&&(i.x+=(d-c[f])/2),this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(b[f],i.x,i.y),this.style.fill&&this.context.fillText(b[f],i.x,i.y)}this.updateTexture()},e.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width,this.texture.baseTexture.height=this.canvas.height,this.texture.frame.width=this.canvas.width,this.texture.frame.height=this.canvas.height,this._width=this.canvas.width,this._height=this.canvas.height,this.requiresUpdate=!0},e.Text.prototype._renderWebGL=function(a){this.requiresUpdate&&(this.requiresUpdate=!1,e.updateWebGLTexture(this.texture.baseTexture,a.gl)),e.Sprite.prototype._renderWebGL.call(this,a)},e.Text.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),e.Sprite.prototype.updateTransform.call(this)},e.Text.prototype.determineFontHeight=function(a){var b=e.Text.heightCache[a];if(!b){var c=document.getElementsByTagName("body")[0],d=document.createElement("div"),f=document.createTextNode("M");d.appendChild(f),d.setAttribute("style",a+";position:absolute;top:0;left:0"),c.appendChild(d),b=d.offsetHeight,e.Text.heightCache[a]=b,c.removeChild(d)}return b},e.Text.prototype.wordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;i>e?(g>0&&(b+="\n"),b+=f[g]+" ",e=this.style.wordWrapWidth-h):(e-=i,b+=f[g]+" ")}b+="\n"}return b},e.Text.prototype.destroy=function(a){a&&this.texture.destroy()},e.Text.heightCache={},e.BitmapText=function(a,b){e.DisplayObjectContainer.call(this),this.setText(a),this.setStyle(b),this.updateText(),this.dirty=!1},e.BitmapText.prototype=Object.create(e.DisplayObjectContainer.prototype),e.BitmapText.prototype.constructor=e.BitmapText,e.BitmapText.prototype.setText=function(a){this.text=a||" ",this.dirty=!0},e.BitmapText.prototype.setStyle=function(a){a=a||{},a.align=a.align||"left",this.style=a;var b=a.font.split(" ");this.fontName=b[b.length-1],this.fontSize=b.length>=2?parseInt(b[b.length-2],10):e.BitmapText.fonts[this.fontName].size,this.dirty=!0},e.BitmapText.prototype.updateText=function(){for(var a=e.BitmapText.fonts[this.fontName],b=new e.Point,c=null,d=[],f=0,g=[],h=0,i=this.fontSize/a.size,j=0;j<this.text.length;j++){var k=this.text.charCodeAt(j);if(/(?:\r\n|\r|\n)/.test(this.text.charAt(j)))g.push(b.x),f=Math.max(f,b.x),h++,b.x=0,b.y+=a.lineHeight,c=null;else{var l=a.chars[k];l&&(c&&l[c]&&(b.x+=l.kerning[c]),d.push({texture:l.texture,line:h,charCode:k,position:new e.Point(b.x+l.xOffset,b.y+l.yOffset)}),b.x+=l.xAdvance,c=k)}}g.push(b.x),f=Math.max(f,b.x);var m=[];for(j=0;h>=j;j++){var n=0;"right"===this.style.align?n=f-g[j]:"center"===this.style.align&&(n=(f-g[j])/2),m.push(n)}for(j=0;j<d.length;j++){var o=new e.Sprite(d[j].texture);o.position.x=(d[j].position.x+m[d[j].line])*i,o.position.y=d[j].position.y*i,o.scale.x=o.scale.y=i,this.addChild(o)}this.width=f*i,this.height=(b.y+a.lineHeight)*i},e.BitmapText.prototype.updateTransform=function(){if(this.dirty){for(;this.children.length>0;)this.removeChild(this.getChildAt(0));this.updateText(),this.dirty=!1}e.DisplayObjectContainer.prototype.updateTransform.call(this)},e.BitmapText.fonts={},e.InteractionManager=function(a){this.stage=a,this.mouse=new e.InteractionData,this.touchs={},this.tempPoint=new e.Point,this.mouseoverEnabled=!0,this.pool=[],this.interactiveItems=[],this.interactionDOMElement=null,this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.last=0},e.InteractionManager.prototype.constructor=e.InteractionManager,e.InteractionManager.prototype.collectInteractiveSprite=function(a,b){for(var c=a.children,d=c.length,e=d-1;e>=0;e--){var f=c[e];f.interactive?(b.interactiveChildren=!0,this.interactiveItems.push(f),f.children.length>0&&this.collectInteractiveSprite(f,f)):(f.__iParent=null,f.children.length>0&&this.collectInteractiveSprite(f,b))}},e.InteractionManager.prototype.setTarget=function(a){this.target=a,null===this.interactionDOMElement&&this.setTargetDomElement(a.view),document.body.addEventListener("mouseup",this.onMouseUp,!0)},e.InteractionManager.prototype.setTargetDomElement=function(a){null!==this.interactionDOMElement&&(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]="",this.interactionDOMElement.removeEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,!0)),window.navigator.msPointerEnabled&&(a.style["-ms-content-zooming"]="none",a.style["-ms-touch-action"]="none"),this.interactionDOMElement=a,a.addEventListener("mousemove",this.onMouseMove,!0),a.addEventListener("mousedown",this.onMouseDown,!0),a.addEventListener("mouseout",this.onMouseOut,!0),a.addEventListener("touchstart",this.onTouchStart,!0),a.addEventListener("touchend",this.onTouchEnd,!0),a.addEventListener("touchmove",this.onTouchMove,!0)},e.InteractionManager.prototype.update=function(){if(this.target){var a=Date.now(),b=a-this.last;if(b=30*b/1e3,!(1>b)){this.last=a;var c=0;if(this.dirty){this.dirty=!1;var d=this.interactiveItems.length;for(c=0;d>c;c++)this.interactiveItems[c].interactiveChildren=!1;this.interactiveItems=[],this.stage.interactive&&this.interactiveItems.push(this.stage),this.collectInteractiveSprite(this.stage,this.stage)}var e=this.interactiveItems.length;for(this.interactionDOMElement.style.cursor="inherit",c=0;e>c;c++){var f=this.interactiveItems[c];(f.mouseover||f.mouseout||f.buttonMode)&&(f.__hit=this.hitTest(f,this.mouse),this.mouse.target=f,f.__hit?(f.buttonMode&&(this.interactionDOMElement.style.cursor=f.defaultCursor),f.__isOver||(f.mouseover&&f.mouseover(this.mouse),f.__isOver=!0)):f.__isOver&&(f.mouseout&&f.mouseout(this.mouse),f.__isOver=!1))}}}},e.InteractionManager.prototype.onMouseMove=function(a){this.mouse.originalEvent=a||window.event;var b=this.interactionDOMElement.getBoundingClientRect();this.mouse.global.x=(a.clientX-b.left)*(this.target.width/b.width),this.mouse.global.y=(a.clientY-b.top)*(this.target.height/b.height);for(var c=this.interactiveItems.length,d=0;c>d;d++){var e=this.interactiveItems[d];e.mousemove&&e.mousemove(this.mouse)}},e.InteractionManager.prototype.onMouseDown=function(a){this.mouse.originalEvent=a||window.event;for(var b=this.interactiveItems.length,c=0;b>c;c++){var d=this.interactiveItems[c];if((d.mousedown||d.click)&&(d.__mouseIsDown=!0,d.__hit=this.hitTest(d,this.mouse),d.__hit&&(d.mousedown&&d.mousedown(this.mouse),d.__isDown=!0,!d.interactiveChildren)))break}},e.InteractionManager.prototype.onMouseOut=function(){var a=this.interactiveItems.length;this.interactionDOMElement.style.cursor="inherit";for(var b=0;a>b;b++){var c=this.interactiveItems[b];c.__isOver&&(this.mouse.target=c,c.mouseout&&c.mouseout(this.mouse),c.__isOver=!1)}},e.InteractionManager.prototype.onMouseUp=function(a){this.mouse.originalEvent=a||window.event;for(var b=this.interactiveItems.length,c=!1,d=0;b>d;d++){var e=this.interactiveItems[d];(e.mouseup||e.mouseupoutside||e.click)&&(e.__hit=this.hitTest(e,this.mouse),e.__hit&&!c?(e.mouseup&&e.mouseup(this.mouse),e.__isDown&&e.click&&e.click(this.mouse),e.interactiveChildren||(c=!0)):e.__isDown&&e.mouseupoutside&&e.mouseupoutside(this.mouse),e.__isDown=!1)}},e.InteractionManager.prototype.hitTest=function(a,b){var c=b.global;if(!a.worldVisible)return!1;var d=a instanceof e.Sprite,f=a.worldTransform,g=f[0],h=f[1],i=f[2],j=f[3],k=f[4],l=f[5],m=1/(g*k+h*-j),n=k*m*c.x+-h*m*c.y+(l*h-i*k)*m,o=g*m*c.y+-j*m*c.x+(-l*g+i*j)*m;if(b.target=a,a.hitArea&&a.hitArea.contains)return a.hitArea.contains(n,o)?(b.target=a,!0):!1;if(d){var p,q=a.texture.frame.width,r=a.texture.frame.height,s=-q*a.anchor.x;if(n>s&&s+q>n&&(p=-r*a.anchor.y,o>p&&p+r>o))return b.target=a,!0}for(var t=a.children.length,u=0;t>u;u++){var v=a.children[u],w=this.hitTest(v,b);if(w)return b.target=a,!0}return!1},e.InteractionManager.prototype.onTouchMove=function(a){var b,c=this.interactionDOMElement.getBoundingClientRect(),d=a.changedTouches,e=0;for(e=0;e<d.length;e++){var f=d[e];b=this.touchs[f.identifier],b.originalEvent=a||window.event,b.global.x=(f.clientX-c.left)*(this.target.width/c.width),b.global.y=(f.clientY-c.top)*(this.target.height/c.height),navigator.isCocoonJS&&(b.global.x=f.clientX,b.global.y=f.clientY)}var g=this.interactiveItems.length;for(e=0;g>e;e++){var h=this.interactiveItems[e];h.touchmove&&h.touchmove(b)}},e.InteractionManager.prototype.onTouchStart=function(a){for(var b=this.interactionDOMElement.getBoundingClientRect(),c=a.changedTouches,d=0;d<c.length;d++){var f=c[d],g=this.pool.pop();g||(g=new e.InteractionData),g.originalEvent=a||window.event,this.touchs[f.identifier]=g,g.global.x=(f.clientX-b.left)*(this.target.width/b.width),g.global.y=(f.clientY-b.top)*(this.target.height/b.height),navigator.isCocoonJS&&(g.global.x=f.clientX,g.global.y=f.clientY);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i];if((j.touchstart||j.tap)&&(j.__hit=this.hitTest(j,g),j.__hit&&(j.touchstart&&j.touchstart(g),j.__isDown=!0,j.__touchData=g,!j.interactiveChildren)))break}}},e.InteractionManager.prototype.onTouchEnd=function(a){for(var b=this.interactionDOMElement.getBoundingClientRect(),c=a.changedTouches,d=0;d<c.length;d++){var e=c[d],f=this.touchs[e.identifier],g=!1;f.global.x=(e.clientX-b.left)*(this.target.width/b.width),f.global.y=(e.clientY-b.top)*(this.target.height/b.height),navigator.isCocoonJS&&(f.global.x=e.clientX,f.global.y=e.clientY);for(var h=this.interactiveItems.length,i=0;h>i;i++){var j=this.interactiveItems[i],k=j.__touchData;j.__hit=this.hitTest(j,f),k===f&&(f.originalEvent=a||window.event,(j.touchend||j.tap)&&(j.__hit&&!g?(j.touchend&&j.touchend(f),j.__isDown&&j.tap&&j.tap(f),j.interactiveChildren||(g=!0)):j.__isDown&&j.touchendoutside&&j.touchendoutside(f),j.__isDown=!1),j.__touchData=null)}this.pool.push(f),this.touchs[e.identifier]=null}},e.InteractionData=function(){this.global=new e.Point,this.local=new e.Point,this.target=null,this.originalEvent=null},e.InteractionData.prototype.getLocalPosition=function(a){var b=a.worldTransform,c=this.global,d=b[0],f=b[1],g=b[2],h=b[3],i=b[4],j=b[5],k=1/(d*i+f*-h);return new e.Point(i*k*c.x+-f*k*c.y+(j*f-g*i)*k,d*k*c.y+-h*k*c.x+(-j*d+g*h)*k)},e.InteractionData.prototype.constructor=e.InteractionData,e.Stage=function(a){e.DisplayObjectContainer.call(this),this.worldTransform=e.mat3.create(),this.interactive=!0,this.interactionManager=new e.InteractionManager(this),this.dirty=!0,this.stage=this,this.stage.hitArea=new e.Rectangle(0,0,1e5,1e5),this.setBackgroundColor(a)},e.Stage.prototype=Object.create(e.DisplayObjectContainer.prototype),e.Stage.prototype.constructor=e.Stage,e.Stage.prototype.setInteractionDelegate=function(a){this.interactionManager.setTargetDomElement(a)},e.Stage.prototype.updateTransform=function(){this.worldAlpha=1;for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform();this.dirty&&(this.dirty=!1,this.interactionManager.dirty=!0),this.interactive&&this.interactionManager.update()},e.Stage.prototype.setBackgroundColor=function(a){this.backgroundColor=a||0,this.backgroundColorSplit=e.hex2rgb(this.backgroundColor);var b=this.backgroundColor.toString(16);b="000000".substr(0,6-b.length)+b,this.backgroundColorString="#"+b},e.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global};for(var f=0,h=["ms","moz","webkit","o"],i=0;i<h.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[h[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[h[i]+"CancelAnimationFrame"]||window[h[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-f)),d=window.setTimeout(function(){a(b+c)},c);return f=b+c,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),window.requestAnimFrame=window.requestAnimationFrame,e.hex2rgb=function(a){return[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]},e.rgb2hex=function(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;
return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}()),e.AjaxRequest=function(){var a=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];if(!window.ActiveXObject)return window.XMLHttpRequest?new window.XMLHttpRequest:!1;for(var b=0;b<a.length;b++)try{return new window.ActiveXObject(a[b])}catch(c){}},e.canUseNewCanvasBlendModes=function(){var a=document.createElement("canvas");a.width=1,a.height=1;var b=a.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,1,1),b.globalCompositeOperation="multiply",b.fillStyle="#fff",b.fillRect(0,0,1,1),0===b.getImageData(0,0,1,1).data[0]},e.getNextPowerOfTwo=function(a){if(a>0&&0===(a&a-1))return a;for(var b=1;a>b;)b<<=1;return b},e.EventTarget=function(){var a={};this.addEventListener=this.on=function(b,c){void 0===a[b]&&(a[b]=[]),-1===a[b].indexOf(c)&&a[b].push(c)},this.dispatchEvent=this.emit=function(b){if(a[b.type]&&a[b.type].length)for(var c=0,d=a[b.type].length;d>c;c++)a[b.type][c](b)},this.removeEventListener=this.off=function(b,c){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)},this.removeAllEventListeners=function(b){var c=a[b];c&&(c.length=0)}},e.autoDetectRenderer=function(a,b,c,d,f){a||(a=800),b||(b=600);var g=function(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(b){return!1}}();return g?new e.WebGLRenderer(a,b,c,d,f):new e.CanvasRenderer(a,b,c,d)},e.PolyK={},e.PolyK.Triangulate=function(a){var b=!0,c=a.length>>1;if(3>c)return[];for(var d=[],f=[],g=0;c>g;g++)f.push(g);g=0;for(var h=c;h>3;){var i=f[(g+0)%h],j=f[(g+1)%h],k=f[(g+2)%h],l=a[2*i],m=a[2*i+1],n=a[2*j],o=a[2*j+1],p=a[2*k],q=a[2*k+1],r=!1;if(e.PolyK._convex(l,m,n,o,p,q,b)){r=!0;for(var s=0;h>s;s++){var t=f[s];if(t!==i&&t!==j&&t!==k&&e.PolyK._PointInTriangle(a[2*t],a[2*t+1],l,m,n,o,p,q)){r=!1;break}}}if(r)d.push(i,j,k),f.splice((g+1)%h,1),h--,g=0;else if(g++>3*h){if(!b)return window.console.log("PIXI Warning: shape too complex to fill"),[];for(d=[],f=[],g=0;c>g;g++)f.push(g);g=0,h=c,b=!1}}return d.push(f[0],f[1],f[2]),d},e.PolyK._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},e.PolyK._convex=function(a,b,c,d,e,f,g){return(b-d)*(e-c)+(c-a)*(f-d)>=0===g},e.initDefaultShaders=function(){},e.CompileVertexShader=function(a,b){return e._CompileShader(a,b,a.VERTEX_SHADER)},e.CompileFragmentShader=function(a,b){return e._CompileShader(a,b,a.FRAGMENT_SHADER)},e._CompileShader=function(a,b,c){var d=b.join("\n"),e=a.createShader(c);return a.shaderSource(e,d),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?e:(window.console.log(a.getShaderInfoLog(e)),null)},e.compileProgram=function(a,b,c){var d=e.CompileFragmentShader(a,c),f=e.CompileVertexShader(a,b),g=a.createProgram();return a.attachShader(g,f),a.attachShader(g,d),a.linkProgram(g),a.getProgramParameter(g,a.LINK_STATUS)||window.console.log("Could not initialise shaders"),g},e.PixiShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.textureCount=0,this.attributes=[],this.init()},e.PixiShader.prototype.init=function(){var a=this.gl,b=e.compileProgram(a,this.vertexSrc||e.PixiShader.defaultVertexSrc,this.fragmentSrc);a.useProgram(b),this.uSampler=a.getUniformLocation(b,"uSampler"),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.dimensions=a.getUniformLocation(b,"dimensions"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(b,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(b,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];for(var c in this.uniforms)this.uniforms[c].uniformLocation=a.getUniformLocation(b,c);this.initUniforms(),this.program=b},e.PixiShader.prototype.initUniforms=function(){this.textureCount=1;var a,b=this.gl;for(var c in this.uniforms){a=this.uniforms[c];var d=a.type;"sampler2D"===d?(a._init=!1,null!==a.value&&this.initSampler2D(a)):"mat2"===d||"mat3"===d||"mat4"===d?(a.glMatrix=!0,a.glValueLength=1,"mat2"===d?a.glFunc=b.uniformMatrix2fv:"mat3"===d?a.glFunc=b.uniformMatrix3fv:"mat4"===d&&(a.glFunc=b.uniformMatrix4fv)):(a.glFunc=b["uniform"+d],a.glValueLength="2f"===d||"2i"===d?2:"3f"===d||"3i"===d?3:"4f"===d||"4i"===d?4:1)}},e.PixiShader.prototype.initSampler2D=function(a){if(a.value&&a.value.baseTexture&&a.value.baseTexture.hasLoaded){var b=this.gl;if(b.activeTexture(b["TEXTURE"+this.textureCount]),b.bindTexture(b.TEXTURE_2D,a.value.baseTexture._glTexture),a.textureData){var c=a.textureData,d=c.magFilter?c.magFilter:b.LINEAR,e=c.minFilter?c.minFilter:b.LINEAR,f=c.wrapS?c.wrapS:b.CLAMP_TO_EDGE,g=c.wrapT?c.wrapT:b.CLAMP_TO_EDGE,h=c.luminance?b.LUMINANCE:b.RGBA;if(c.repeat&&(f=b.REPEAT,g=b.REPEAT),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,!1),c.width){var i=c.width?c.width:512,j=c.height?c.height:2,k=c.border?c.border:0;b.texImage2D(b.TEXTURE_2D,0,h,i,j,k,h,b.UNSIGNED_BYTE,null)}else b.texImage2D(b.TEXTURE_2D,0,h,b.RGBA,b.UNSIGNED_BYTE,a.value.baseTexture.source);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,d),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,e),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,f),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,g)}b.uniform1i(a.uniformLocation,this.textureCount),a._init=!0,this.textureCount++}},e.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;var a,b=this.gl;for(var c in this.uniforms)a=this.uniforms[c],1===a.glValueLength?a.glMatrix===!0?a.glFunc.call(b,a.uniformLocation,a.transpose,a.value):a.glFunc.call(b,a.uniformLocation,a.value):2===a.glValueLength?a.glFunc.call(b,a.uniformLocation,a.value.x,a.value.y):3===a.glValueLength?a.glFunc.call(b,a.uniformLocation,a.value.x,a.value.y,a.value.z):4===a.glValueLength?a.glFunc.call(b,a.uniformLocation,a.value.x,a.value.y,a.value.z,a.value.w):"sampler2D"===a.type&&(a._init?(b.activeTexture(b["TEXTURE"+this.textureCount]),b.bindTexture(b.TEXTURE_2D,a.value.baseTexture._glTextures[b.id]||e.createWebGLTexture(a.value.baseTexture,b)),b.uniform1i(a.uniformLocation,this.textureCount),this.textureCount++):this.initSampler2D(a))},e.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec2 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;","   vColor = vec4(color * aColor.x, aColor.x);","}"],e.PixiFastShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"],this.textureCount=0,this.init()},e.PixiFastShader.prototype.init=function(){var a=this.gl,b=e.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(b),this.uSampler=a.getUniformLocation(b,"uSampler"),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.dimensions=a.getUniformLocation(b,"dimensions"),this.uMatrix=a.getUniformLocation(b,"uMatrix"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.aPositionCoord=a.getAttribLocation(b,"aPositionCoord"),this.aScale=a.getAttribLocation(b,"aScale"),this.aRotation=a.getAttribLocation(b,"aRotation"),this.aTextureCoord=a.getAttribLocation(b,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(b,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute],this.program=b},e.StripShader=function(){this.program=null,this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying float vColor;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","   gl_FragColor = gl_FragColor * alpha;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","varying vec2 vTextureCoord;","uniform vec2 offsetVector;","varying float vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"]},e.StripShader.prototype.init=function(){var a=e.gl,b=e.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(b),this.uSampler=a.getUniformLocation(b,"uSampler"),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.colorAttribute=a.getAttribLocation(b,"aColor"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(b,"aTextureCoord"),this.translationMatrix=a.getUniformLocation(b,"translationMatrix"),this.alpha=a.getUniformLocation(b,"alpha"),this.program=b},e.PrimitiveShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"],this.init()},e.PrimitiveShader.prototype.init=function(){var a=this.gl,b=e.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(b),this.projectionVector=a.getUniformLocation(b,"projectionVector"),this.offsetVector=a.getUniformLocation(b,"offsetVector"),this.tintColor=a.getUniformLocation(b,"tint"),this.aVertexPosition=a.getAttribLocation(b,"aVertexPosition"),this.colorAttribute=a.getAttribLocation(b,"aColor"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=a.getUniformLocation(b,"translationMatrix"),this.alpha=a.getUniformLocation(b,"alpha"),this.program=b},e.WebGLGraphics=function(){},e.WebGLGraphics.renderGraphics=function(a,b){var c=b.gl,d=b.projection,f=b.offset,g=b.shaderManager.primitiveShader;a._webGL[c.id]||(a._webGL[c.id]={points:[],indices:[],lastIndex:0,buffer:c.createBuffer(),indexBuffer:c.createBuffer()});var h=a._webGL[c.id];a.dirty&&(a.dirty=!1,a.clearDirty&&(a.clearDirty=!1,h.lastIndex=0,h.points=[],h.indices=[]),e.WebGLGraphics.updateGraphics(a,c)),b.shaderManager.activatePrimitiveShader(),e.mat3.transpose(a.worldTransform,e.tempMatrix),c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.uniformMatrix3fv(g.translationMatrix,!1,e.tempMatrix),c.uniform2f(g.projectionVector,d.x,-d.y),c.uniform2f(g.offsetVector,-f.x,-f.y),c.uniform3fv(g.tintColor,e.hex2rgb(a.tint)),c.uniform1f(g.alpha,a.worldAlpha),c.bindBuffer(c.ARRAY_BUFFER,h.buffer),c.vertexAttribPointer(g.aVertexPosition,2,c.FLOAT,!1,24,0),c.vertexAttribPointer(g.colorAttribute,4,c.FLOAT,!1,24,8),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,h.indexBuffer),c.drawElements(c.TRIANGLE_STRIP,h.indices.length,c.UNSIGNED_SHORT,0),b.shaderManager.deactivatePrimitiveShader()},e.WebGLGraphics.updateGraphics=function(a,b){for(var c=a._webGL[b.id],d=c.lastIndex;d<a.graphicsData.length;d++){var f=a.graphicsData[d];f.type===e.Graphics.POLY?(f.fill&&f.points.length>3&&e.WebGLGraphics.buildPoly(f,c),f.lineWidth>0&&e.WebGLGraphics.buildLine(f,c)):f.type===e.Graphics.RECT?e.WebGLGraphics.buildRectangle(f,c):(f.type===e.Graphics.CIRC||f.type===e.Graphics.ELIP)&&e.WebGLGraphics.buildCircle(f,c)}c.lastIndex=a.graphicsData.length,c.glPoints=new Float32Array(c.points),b.bindBuffer(b.ARRAY_BUFFER,c.buffer),b.bufferData(b.ARRAY_BUFFER,c.glPoints,b.STATIC_DRAW),c.glIndicies=new Uint16Array(c.indices),b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,c.indexBuffer),b.bufferData(b.ELEMENT_ARRAY_BUFFER,c.glIndicies,b.STATIC_DRAW)},e.WebGLGraphics.buildRectangle=function(a,b){var c=a.points,d=c[0],f=c[1],g=c[2],h=c[3];if(a.fill){var i=e.hex2rgb(a.fillColor),j=a.fillAlpha,k=i[0]*j,l=i[1]*j,m=i[2]*j,n=b.points,o=b.indices,p=n.length/6;n.push(d,f),n.push(k,l,m,j),n.push(d+g,f),n.push(k,l,m,j),n.push(d,f+h),n.push(k,l,m,j),n.push(d+g,f+h),n.push(k,l,m,j),o.push(p,p,p+1,p+2,p+3,p+3)}if(a.lineWidth){var q=a.points;a.points=[d,f,d+g,f,d+g,f+h,d,f+h,d,f],e.WebGLGraphics.buildLine(a,b),a.points=q}},e.WebGLGraphics.buildCircle=function(a,b){var c=a.points,d=c[0],f=c[1],g=c[2],h=c[3],i=40,j=2*Math.PI/i,k=0;if(a.fill){var l=e.hex2rgb(a.fillColor),m=a.fillAlpha,n=l[0]*m,o=l[1]*m,p=l[2]*m,q=b.points,r=b.indices,s=q.length/6;for(r.push(s),k=0;i+1>k;k++)q.push(d,f,n,o,p,m),q.push(d+Math.sin(j*k)*g,f+Math.cos(j*k)*h,n,o,p,m),r.push(s++,s++);r.push(s-1)}if(a.lineWidth){var t=a.points;for(a.points=[],k=0;i+1>k;k++)a.points.push(d+Math.sin(j*k)*g,f+Math.cos(j*k)*h);e.WebGLGraphics.buildLine(a,b),a.points=t}},e.WebGLGraphics.buildLine=function(a,b){var c=0,d=a.points;if(0!==d.length){if(a.lineWidth%2)for(c=0;c<d.length;c++)d[c]+=.5;var f=new e.Point(d[0],d[1]),g=new e.Point(d[d.length-2],d[d.length-1]);if(f.x===g.x&&f.y===g.y){d.pop(),d.pop(),g=new e.Point(d[d.length-2],d[d.length-1]);var h=g.x+.5*(f.x-g.x),i=g.y+.5*(f.y-g.y);d.unshift(h,i),d.push(h,i)}var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=b.points,H=b.indices,I=d.length/2,J=d.length,K=G.length/6,L=a.lineWidth/2,M=e.hex2rgb(a.lineColor),N=a.lineAlpha,O=M[0]*N,P=M[1]*N,Q=M[2]*N;for(l=d[0],m=d[1],n=d[2],o=d[3],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(l-r,m-s,O,P,Q,N),G.push(l+r,m+s,O,P,Q,N),c=1;I-1>c;c++)l=d[2*(c-1)],m=d[2*(c-1)+1],n=d[2*c],o=d[2*c+1],p=d[2*(c+1)],q=d[2*(c+1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,t=-(o-q),u=n-p,F=Math.sqrt(t*t+u*u),t/=F,u/=F,t*=L,u*=L,x=-s+m-(-s+o),y=-r+n-(-r+l),z=(-r+l)*(-s+o)-(-r+n)*(-s+m),A=-u+q-(-u+o),B=-t+n-(-t+p),C=(-t+p)*(-u+o)-(-t+n)*(-u+q),D=x*B-A*y,Math.abs(D)<.1?(D+=10.1,G.push(n-r,o-s,O,P,Q,N),G.push(n+r,o+s,O,P,Q,N)):(j=(y*C-B*z)/D,k=(A*z-x*C)/D,E=(j-n)*(j-n)+(k-o)+(k-o),E>19600?(v=r-t,w=s-u,F=Math.sqrt(v*v+w*w),v/=F,w/=F,v*=L,w*=L,G.push(n-v,o-w),G.push(O,P,Q,N),G.push(n+v,o+w),G.push(O,P,Q,N),G.push(n-v,o-w),G.push(O,P,Q,N),J++):(G.push(j,k),G.push(O,P,Q,N),G.push(n-(j-n),o-(k-o)),G.push(O,P,Q,N)));for(l=d[2*(I-2)],m=d[2*(I-2)+1],n=d[2*(I-1)],o=d[2*(I-1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(n-r,o-s),G.push(O,P,Q,N),G.push(n+r,o+s),G.push(O,P,Q,N),H.push(K),c=0;J>c;c++)H.push(K++);H.push(K-1)}},e.WebGLGraphics.buildPoly=function(a,b){var c=a.points;if(!(c.length<6)){var d=b.points,f=b.indices,g=c.length/2,h=e.hex2rgb(a.fillColor),i=a.fillAlpha,j=h[0]*i,k=h[1]*i,l=h[2]*i,m=e.PolyK.Triangulate(c),n=d.length/6,o=0;for(o=0;o<m.length;o+=3)f.push(m[o]+n),f.push(m[o]+n),f.push(m[o+1]+n),f.push(m[o+2]+n),f.push(m[o+2]+n);for(o=0;g>o;o++)d.push(c[2*o],c[2*o+1],j,k,l,i)}},e.glContexts=[],e.WebGLRenderer=function(a,b,c,d,f){e.defaultRenderer||(e.defaultRenderer=this),this.type=e.WEBGL_RENDERER,this.transparent=!!d,this.width=a||800,this.height=b||600,this.view=c||document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height;var g=this;this.view.addEventListener("webglcontextlost",function(a){g.handleContextLost(a)},!1),this.view.addEventListener("webglcontextrestored",function(a){g.handleContextRestored(a)},!1),this.options={alpha:this.transparent,antialias:!!f,premultipliedAlpha:!1,stencil:!0};try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(h){try{this.gl=this.view.getContext("webgl",this.options)}catch(i){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var j=this.gl;this.glContextId=j.id=e.WebGLRenderer.glContextId++,e.glContexts[this.glContextId]=j,e.blendModesWebGL||(e.blendModesWebGL=[],e.blendModesWebGL[e.blendModes.NORMAL]=[j.ONE,j.ONE_MINUS_SRC_ALPHA],e.blendModesWebGL[e.blendModes.ADD]=[j.SRC_ALPHA,j.DST_ALPHA],e.blendModesWebGL[e.blendModes.MULTIPLY]=[j.DST_COLOR,j.ONE_MINUS_SRC_ALPHA],e.blendModesWebGL[e.blendModes.SCREEN]=[j.SRC_ALPHA,j.ONE]),this.projection=new e.Point,this.projection.x=this.width/2,this.projection.y=-this.height/2,this.offset=new e.Point(0,0),this.resize(this.width,this.height),this.contextLost=!1,this.shaderManager=new e.WebGLShaderManager(j),this.spriteBatch=new e.WebGLSpriteBatch(j),this.maskManager=new e.WebGLMaskManager(j),this.filterManager=new e.WebGLFilterManager(j,this.transparent),this.renderSession={},this.renderSession.gl=this.gl,this.renderSession.drawCount=0,this.renderSession.shaderManager=this.shaderManager,this.renderSession.maskManager=this.maskManager,this.renderSession.filterManager=this.filterManager,this.renderSession.spriteBatch=this.spriteBatch,j.useProgram(this.shaderManager.defaultShader.program),j.disable(j.DEPTH_TEST),j.disable(j.CULL_FACE),j.enable(j.BLEND),j.colorMask(!0,!0,!0,this.transparent)},e.WebGLRenderer.prototype.constructor=e.WebGLRenderer,e.WebGLRenderer.prototype.render=function(a){if(!this.contextLost){this.__stage!==a&&(this.__stage=a),e.WebGLRenderer.updateTextures(),a.updateTransform();var b=this.gl;b.bindFramebuffer(b.FRAMEBUFFER,null),b.clearColor(a.backgroundColorSplit[0],a.backgroundColorSplit[1],a.backgroundColorSplit[2],!this.transparent),b.clear(b.COLOR_BUFFER_BIT),this.renderDisplayObject(a,this.projection),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)))}},e.WebGLRenderer.prototype.renderDisplayObject=function(a,b){this.renderSession.drawCount=0,this.renderSession.currentBlendMode=9999,this.renderSession.projection=b,this.renderSession.offset=this.offset,this.spriteBatch.begin(this.renderSession),this.filterManager.begin(this.renderSession,null),a._renderWebGL(this.renderSession),this.spriteBatch.end()},e.WebGLRenderer.updateTextures=function(){var a=0;for(a=0;a<e.Texture.frameUpdates.length;a++)e.WebGLRenderer.updateTextureFrame(e.Texture.frameUpdates[a]);for(a=0;a<e.texturesToDestroy.length;a++)e.WebGLRenderer.destroyTexture(e.texturesToDestroy[a]);e.texturesToUpdate.length=0,e.texturesToDestroy.length=0,e.Texture.frameUpdates.length=0},e.WebGLRenderer.destroyTexture=function(a){for(var b=a._glTextures.length-1;b>=0;b--){var c=a._glTextures[b],d=e.glContexts[b];d&&c&&d.deleteTexture(c)}a._glTextures.length=0},e.WebGLRenderer.updateTextureFrame=function(a){a.updateFrame=!1,a._updateWebGLuvs()},e.WebGLRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b,this.gl.viewport(0,0,this.width,this.height),this.projection.x=this.width/2,this.projection.y=-this.height/2},e.createWebGLTexture=function(a,b){return a.hasLoaded&&(a._glTextures[b.id]=b.createTexture(),b.bindTexture(b.TEXTURE_2D,a._glTextures[b.id]),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a.source),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,a.scaleMode===e.BaseTexture.SCALE_MODE.LINEAR?b.LINEAR:b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,a.scaleMode===e.BaseTexture.SCALE_MODE.LINEAR?b.LINEAR:b.NEAREST),a._powerOf2?(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.REPEAT),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.REPEAT)):(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)),b.bindTexture(b.TEXTURE_2D,null)),a._glTextures[b.id]},e.updateWebGLTexture=function(a,b){a._glTextures[b.id]&&(b.bindTexture(b.TEXTURE_2D,a._glTextures[b.id]),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a.source),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,a.scaleMode===e.BaseTexture.SCALE_MODE.LINEAR?b.LINEAR:b.NEAREST),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,a.scaleMode===e.BaseTexture.SCALE_MODE.LINEAR?b.LINEAR:b.NEAREST),a._powerOf2?(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.REPEAT),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.REPEAT)):(b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)),b.bindTexture(b.TEXTURE_2D,null))},e.WebGLRenderer.prototype.handleContextLost=function(a){a.preventDefault(),this.contextLost=!0},e.WebGLRenderer.prototype.handleContextRestored=function(){try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(a){try{this.gl=this.view.getContext("webgl",this.options)}catch(b){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var c=this.gl;c.id=e.WebGLRenderer.glContextId++,this.shaderManager.setContext(c),this.spriteBatch.setContext(c),this.maskManager.setContext(c),this.filterManager.setContext(c),this.renderSession.gl=this.gl,c.disable(c.DEPTH_TEST),c.disable(c.CULL_FACE),c.enable(c.BLEND),c.colorMask(!0,!0,!0,this.transparent),this.gl.viewport(0,0,this.width,this.height);for(var d in e.TextureCache){var f=e.TextureCache[d].baseTexture;f._glTextures=[]}this.contextLost=!1},e.WebGLRenderer.glContextId=0,e.WebGLMaskManager=function(a){this.maskStack=[],this.maskPosition=0,this.setContext(a)},e.WebGLMaskManager.prototype.setContext=function(a){this.gl=a},e.WebGLMaskManager.prototype.pushMask=function(a,b){var c=this.gl;0===this.maskStack.length&&(c.enable(c.STENCIL_TEST),c.stencilFunc(c.ALWAYS,1,1)),this.maskStack.push(a),c.colorMask(!1,!1,!1,!0),c.stencilOp(c.KEEP,c.KEEP,c.INCR),e.WebGLGraphics.renderGraphics(a,b),c.colorMask(!0,!0,!0,!0),c.stencilFunc(c.NOTEQUAL,0,this.maskStack.length),c.stencilOp(c.KEEP,c.KEEP,c.KEEP)},e.WebGLMaskManager.prototype.popMask=function(a){var b=this.gl,c=this.maskStack.pop();c&&(b.colorMask(!1,!1,!1,!1),b.stencilOp(b.KEEP,b.KEEP,b.DECR),e.WebGLGraphics.renderGraphics(c,a),b.colorMask(!0,!0,!0,!0),b.stencilFunc(b.NOTEQUAL,0,this.maskStack.length),b.stencilOp(b.KEEP,b.KEEP,b.KEEP)),0===this.maskStack.length&&b.disable(b.STENCIL_TEST)},e.WebGLShaderManager=function(a){this.maxAttibs=10,this.attribState=[],this.tempAttribState=[];for(var b=0;b<this.maxAttibs;b++)this.attribState[b]=!1;this.setContext(a)},e.WebGLShaderManager.prototype.setContext=function(a){this.gl=a,this.primitiveShader=new e.PrimitiveShader(a),this.defaultShader=new e.PixiShader(a),this.fastShader=new e.PixiFastShader(a),this.activateShader(this.defaultShader)},e.WebGLShaderManager.prototype.setAttribs=function(a){var b;for(b=0;b<this.tempAttribState.length;b++)this.tempAttribState[b]=!1;for(b=0;b<a.length;b++){var c=a[b];this.tempAttribState[c]=!0}var d=this.gl;for(b=0;b<this.attribState.length;b++)this.attribState[b]!==this.tempAttribState[b]&&(this.attribState[b]=this.tempAttribState[b],this.tempAttribState[b]?d.enableVertexAttribArray(b):d.disableVertexAttribArray(b))},e.WebGLShaderManager.prototype.activateShader=function(a){this.currentShader=a,this.gl.useProgram(a.program),this.setAttribs(a.attributes)},e.WebGLShaderManager.prototype.activatePrimitiveShader=function(){var a=this.gl;a.useProgram(this.primitiveShader.program),this.setAttribs(this.primitiveShader.attributes)},e.WebGLShaderManager.prototype.deactivatePrimitiveShader=function(){var a=this.gl;a.useProgram(this.defaultShader.program),this.setAttribs(this.defaultShader.attributes)},e.WebGLSpriteBatch=function(a){this.vertSize=6,this.size=2000;var b=4*this.size*this.vertSize,c=6*this.size;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.setContext(a)},e.WebGLSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},e.WebGLSpriteBatch.prototype.begin=function(a){this.renderSession=a,this.shader=this.renderSession.shaderManager.defaultShader,this.start()},e.WebGLSpriteBatch.prototype.end=function(){this.flush()},e.WebGLSpriteBatch.prototype.render=function(a){(a.texture.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size)&&(this.flush(),this.currentBaseTexture=a.texture.baseTexture),a.blendMode!==this.currentBlendMode&&this.setBlendMode(a.blendMode);var b=a._uvs||a.texture._uvs;if(b){var c,d,e,f,g=a.worldAlpha,h=a.tint,i=this.vertices,j=a.texture.frame.width,k=a.texture.frame.height,l=a.anchor.x,m=a.anchor.y;if(a.texture.trimmed){var n=a.texture.trim;d=n.x-l*n.realWidth,c=d+j,f=n.y-m*n.realHeight,e=f+k}else c=j*(1-l),d=j*-l,e=k*(1-m),f=k*-m;var o=4*this.currentBatchSize*this.vertSize,p=a.worldTransform,q=p[0],r=p[3],s=p[1],t=p[4],u=p[2],v=p[5];i[o++]=q*d+s*f+u,i[o++]=t*f+r*d+v,i[o++]=b[0],i[o++]=b[1],i[o++]=g,i[o++]=h,i[o++]=q*c+s*f+u,i[o++]=t*f+r*c+v,i[o++]=b[2],i[o++]=b[3],i[o++]=g,i[o++]=h,i[o++]=q*c+s*e+u,i[o++]=t*e+r*c+v,i[o++]=b[4],i[o++]=b[5],i[o++]=g,i[o++]=h,i[o++]=q*d+s*e+u,i[o++]=t*e+r*d+v,i[o++]=b[6],i[o++]=b[7],i[o++]=g,i[o++]=h,this.currentBatchSize++}},e.WebGLSpriteBatch.prototype.renderTilingSprite=function(a){var b=a.tilingTexture;(b.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size)&&(this.flush(),this.currentBaseTexture=b.baseTexture),a.blendMode!==this.currentBlendMode&&this.setBlendMode(a.blendMode),a._uvs||(a._uvs=new Float32Array(8));var c=a._uvs,d=a.tilePosition.x/b.baseTexture.width,e=a.tilePosition.y/b.baseTexture.height,f=a.width/b.baseTexture.width/(a.tileScale.x*a.tileScaleOffset.x),g=a.height/b.baseTexture.height/(a.tileScale.y*a.tileScaleOffset.y);c[0]=0-d,c[1]=0-e,c[2]=1*f-d,c[3]=0-e,c[4]=1*f-d,c[5]=1*g-e,c[6]=0-d,c[7]=1*g-e;var h=a.worldAlpha,i=a.tint,j=this.vertices,k=a.width,l=a.height,m=a.anchor.x,n=a.anchor.y,o=k*(1-m),p=k*-m,q=l*(1-n),r=l*-n,s=4*this.currentBatchSize*this.vertSize,t=a.worldTransform,u=t[0],v=t[3],w=t[1],x=t[4],y=t[2],z=t[5];j[s++]=u*p+w*r+y,j[s++]=x*r+v*p+z,j[s++]=c[0],j[s++]=c[1],j[s++]=h,j[s++]=i,j[s++]=u*o+w*r+y,j[s++]=x*r+v*o+z,j[s++]=c[2],j[s++]=c[3],j[s++]=h,j[s++]=i,j[s++]=u*o+w*q+y,j[s++]=x*q+v*o+z,j[s++]=c[4],j[s++]=c[5],j[s++]=h,j[s++]=i,j[s++]=u*p+w*q+y,j[s++]=x*q+v*p+z,j[s++]=c[6],j[s++]=c[7],j[s++]=h,j[s++]=i,this.currentBatchSize++},e.WebGLSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]||e.createWebGLTexture(this.currentBaseTexture,a)),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var b=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,b)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},e.WebGLSpriteBatch.prototype.stop=function(){this.flush()},e.WebGLSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.colorAttribute,2,a.FLOAT,!1,c,16),this.currentBlendMode!==e.blendModes.NORMAL&&this.setBlendMode(e.blendModes.NORMAL)},e.WebGLSpriteBatch.prototype.setBlendMode=function(a){this.flush(),this.currentBlendMode=a;var b=e.blendModesWebGL[this.currentBlendMode];this.gl.blendFunc(b[0],b[1])},e.WebGLFastSpriteBatch=function(a){this.vertSize=10,this.maxSize=6e3,this.size=this.maxSize;var b=4*this.size*this.vertSize,c=6*this.maxSize;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.vertexBuffer=null,this.indexBuffer=null,this.lastIndexCount=0;for(var d=0,f=0;c>d;d+=6,f+=4)this.indices[d+0]=f+0,this.indices[d+1]=f+1,this.indices[d+2]=f+2,this.indices[d+3]=f+0,this.indices[d+4]=f+2,this.indices[d+5]=f+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.currentBlendMode=0,this.renderSession=null,this.shader=null,this.tempMatrix=e.mat3.create(),this.setContext(a)},e.WebGLFastSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},e.WebGLFastSpriteBatch.prototype.begin=function(a,b){this.renderSession=b,this.shader=this.renderSession.shaderManager.fastShader,e.mat3.transpose(a.worldTransform,this.tempMatrix),this.start()},e.WebGLFastSpriteBatch.prototype.end=function(){this.flush()},e.WebGLFastSpriteBatch.prototype.render=function(a){var b=a.children,c=b[0];if(c.texture._uvs){this.currentBaseTexture=c.texture.baseTexture,c.blendMode!==this.currentBlendMode&&this.setBlendMode(c.blendMode);for(var d=0,e=b.length;e>d;d++)this.renderSprite(b[d]);this.flush()}},e.WebGLFastSpriteBatch.prototype.renderSprite=function(a){if(a.texture.baseTexture===this.currentBaseTexture||(this.currentBaseTexture=a.texture.baseTexture,this.flush(),a.texture._uvs)){var b,c,d,e,f,g,h,i,j=this.vertices;if(b=a.texture._uvs,c=a.texture.frame.width,d=a.texture.frame.height,a.texture.trimmed){var k=a.texture.trim;f=k.x-a.anchor.x*k.realWidth,e=f+a.texture.frame.width,h=k.y-a.anchor.y*k.realHeight,g=h+a.texture.frame.height}else e=a.texture.frame.width*(1-a.anchor.x),f=a.texture.frame.width*-a.anchor.x,g=a.texture.frame.height*(1-a.anchor.y),h=a.texture.frame.height*-a.anchor.y;i=4*this.currentBatchSize*this.vertSize,j[i++]=f,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b[0],j[i++]=b[1],j[i++]=a.alpha,j[i++]=e,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b[2],j[i++]=b[3],j[i++]=a.alpha,j[i++]=e,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b[4],j[i++]=b[5],j[i++]=a.alpha,j[i++]=f,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b[6],j[i++]=b[7],j[i++]=a.alpha,this.currentBatchSize++,this.currentBatchSize>=this.size&&this.flush()
}},e.WebGLFastSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(this.currentBaseTexture._glTextures[a.id]||e.createWebGLTexture(this.currentBaseTexture,a),a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var b=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,b)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},e.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()},e.WebGLFastSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var b=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,b.x,b.y),a.uniformMatrix3fv(this.shader.uMatrix,!1,this.tempMatrix);var c=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,c,0),a.vertexAttribPointer(this.shader.aPositionCoord,2,a.FLOAT,!1,c,8),a.vertexAttribPointer(this.shader.aScale,2,a.FLOAT,!1,c,16),a.vertexAttribPointer(this.shader.aRotation,1,a.FLOAT,!1,c,24),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,c,28),a.vertexAttribPointer(this.shader.colorAttribute,1,a.FLOAT,!1,c,36),this.currentBlendMode!==e.blendModes.NORMAL&&this.setBlendMode(e.blendModes.NORMAL)},e.WebGLFastSpriteBatch.prototype.setBlendMode=function(a){this.flush(),this.currentBlendMode=a;var b=e.blendModesWebGL[this.currentBlendMode];this.gl.blendFunc(b[0],b[1])},e.WebGLFilterManager=function(a,b){this.transparent=b,this.filterStack=[],this.offsetX=0,this.offsetY=0,this.setContext(a)},e.WebGLFilterManager.prototype.setContext=function(a){this.gl=a,this.texturePool=[],this.initShaderBuffers()},e.WebGLFilterManager.prototype.begin=function(a,b){this.renderSession=a,this.defaultShader=a.shaderManager.defaultShader;var c=this.renderSession.projection;this.width=2*c.x,this.height=2*-c.y,this.buffer=b},e.WebGLFilterManager.prototype.pushFilter=function(a){var b=this.gl,c=this.renderSession.projection,d=this.renderSession.offset;this.filterStack.push(a);var f=a.filterPasses[0];this.offsetX+=a.target.filterArea.x,this.offsetY+=a.target.filterArea.y;var g=this.texturePool.pop();g?g.resize(this.width,this.height):g=new e.FilterTexture(this.gl,this.width,this.height),b.bindTexture(b.TEXTURE_2D,g.texture),a.target.filterArea=a.target.getBounds();var h=a.target.filterArea,i=f.padding;h.x-=i,h.y-=i,h.width+=2*i,h.height+=2*i,h.x<0&&(h.x=0),h.width>this.width&&(h.width=this.width),h.y<0&&(h.y=0),h.height>this.height&&(h.height=this.height),b.bindFramebuffer(b.FRAMEBUFFER,g.frameBuffer),b.viewport(0,0,h.width,h.height),c.x=h.width/2,c.y=-h.height/2,d.x=-h.x,d.y=-h.y,b.uniform2f(this.defaultShader.projectionVector,h.width/2,-h.height/2),b.uniform2f(this.defaultShader.offsetVector,-h.x,-h.y),b.colorMask(!0,!0,!0,!0),b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT),a._glFilterTexture=g},e.WebGLFilterManager.prototype.popFilter=function(){var a=this.gl,b=this.filterStack.pop(),c=b.target.filterArea,d=b._glFilterTexture,f=this.renderSession.projection,g=this.renderSession.offset;if(b.filterPasses.length>1){a.viewport(0,0,c.width,c.height),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=0,this.vertexArray[1]=c.height,this.vertexArray[2]=c.width,this.vertexArray[3]=c.height,this.vertexArray[4]=0,this.vertexArray[5]=0,this.vertexArray[6]=c.width,this.vertexArray[7]=0,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=c.width/this.width,this.uvArray[5]=c.height/this.height,this.uvArray[6]=c.width/this.width,this.uvArray[7]=c.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray);var h=d,i=this.texturePool.pop();i||(i=new e.FilterTexture(this.gl,this.width,this.height)),a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND);for(var j=0;j<b.filterPasses.length-1;j++){var k=b.filterPasses[j];a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,h.texture),this.applyFilterPass(k,c,c.width,c.height);var l=h;h=i,i=l}a.enable(a.BLEND),d=h,this.texturePool.push(i)}var m=b.filterPasses[b.filterPasses.length-1];this.offsetX-=c.x,this.offsetY-=c.y;var n=this.width,o=this.height,p=0,q=0,r=this.buffer;if(0===this.filterStack.length)a.colorMask(!0,!0,!0,this.transparent);else{var s=this.filterStack[this.filterStack.length-1];c=s.target.filterArea,n=c.width,o=c.height,p=c.x,q=c.y,r=s._glFilterTexture.frameBuffer}f.x=n/2,f.y=-o/2,g.x=p,g.y=q,c=b.target.filterArea;var t=c.x-p,u=c.y-q;a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=t,this.vertexArray[1]=u+c.height,this.vertexArray[2]=t+c.width,this.vertexArray[3]=u+c.height,this.vertexArray[4]=t,this.vertexArray[5]=u,this.vertexArray[6]=t+c.width,this.vertexArray[7]=u,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=c.width/this.width,this.uvArray[5]=c.height/this.height,this.uvArray[6]=c.width/this.width,this.uvArray[7]=c.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray),a.viewport(0,0,n,o),a.bindFramebuffer(a.FRAMEBUFFER,r),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,d.texture),this.applyFilterPass(m,c,n,o),a.useProgram(this.defaultShader.program),a.uniform2f(this.defaultShader.projectionVector,n/2,-o/2),a.uniform2f(this.defaultShader.offsetVector,-p,-q),this.texturePool.push(d),b._glFilterTexture=null},e.WebGLFilterManager.prototype.applyFilterPass=function(a,b,c,d){var f=this.gl,g=a.shaders[f.id];g||(g=new e.PixiShader(f),g.fragmentSrc=a.fragmentSrc,g.uniforms=a.uniforms,g.init(),a.shaders[f.id]=g),f.useProgram(g.program),f.uniform2f(g.projectionVector,c/2,-d/2),f.uniform2f(g.offsetVector,0,0),a.uniforms.dimensions&&(a.uniforms.dimensions.value[0]=this.width,a.uniforms.dimensions.value[1]=this.height,a.uniforms.dimensions.value[2]=this.vertexArray[0],a.uniforms.dimensions.value[3]=this.vertexArray[5]),g.syncUniforms(),f.bindBuffer(f.ARRAY_BUFFER,this.vertexBuffer),f.vertexAttribPointer(g.aVertexPosition,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.uvBuffer),f.vertexAttribPointer(g.aTextureCoord,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.colorBuffer),f.vertexAttribPointer(g.colorAttribute,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,this.indexBuffer),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0),this.renderSession.drawCount++},e.WebGLFilterManager.prototype.initShaderBuffers=function(){var a=this.gl;this.vertexBuffer=a.createBuffer(),this.uvBuffer=a.createBuffer(),this.colorBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.vertexArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertexArray,a.STATIC_DRAW),this.uvArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),a.bufferData(a.ARRAY_BUFFER,this.uvArray,a.STATIC_DRAW),this.colorArray=new Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]),a.bindBuffer(a.ARRAY_BUFFER,this.colorBuffer),a.bufferData(a.ARRAY_BUFFER,this.colorArray,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),a.STATIC_DRAW)},e.FilterTexture=function(a,b,c){this.gl=a,this.frameBuffer=a.createFramebuffer(),this.texture=a.createTexture(),a.bindTexture(a.TEXTURE_2D,this.texture),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.bindFramebuffer(a.FRAMEBUFFER,this.framebuffer),a.bindFramebuffer(a.FRAMEBUFFER,this.frameBuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.texture,0),this.resize(b,c)},e.FilterTexture.prototype.clear=function(){var a=this.gl;a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT)},e.FilterTexture.prototype.resize=function(a,b){if(this.width!==a||this.height!==b){this.width=a,this.height=b;var c=this.gl;c.bindTexture(c.TEXTURE_2D,this.texture),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,a,b,0,c.RGBA,c.UNSIGNED_BYTE,null)}},e.CanvasMaskManager=function(){},e.CanvasMaskManager.prototype.pushMask=function(a,b){b.save();var c=a.alpha,d=a.worldTransform;b.setTransform(d[0],d[3],d[1],d[4],d[2],d[5]),e.CanvasGraphics.renderGraphicsMask(a,b),b.clip(),a.worldAlpha=c},e.CanvasMaskManager.prototype.popMask=function(a){a.restore()},e.CanvasTinter=function(){},e.CanvasTinter.getTintedTexture=function(a,b){var c=a.texture;b=e.CanvasTinter.roundColor(b);var d="#"+("00000"+(0|b).toString(16)).substr(-6);if(c.tintCache=c.tintCache||{},c.tintCache[d])return c.tintCache[d];var f=e.CanvasTinter.canvas||document.createElement("canvas");if(e.CanvasTinter.tintMethod(c,b,f),e.CanvasTinter.convertTintToImage){var g=new Image;g.src=f.toDataURL(),c.tintCache[d]=g}else c.tintCache[d]=f,e.CanvasTinter.canvas=null;return f},e.CanvasTinter.tintWithMultiply=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="multiply",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},e.CanvasTinter.tintWithOverlay=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.globalCompositeOperation="copy",d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},e.CanvasTinter.tintWithPerPixel=function(a,b,c){var d=c.getContext("2d"),f=a.frame;c.width=f.width,c.height=f.height,d.globalCompositeOperation="copy",d.drawImage(a.baseTexture.source,f.x,f.y,f.width,f.height,0,0,f.width,f.height);for(var g=e.hex2rgb(b),h=g[0],i=g[1],j=g[2],k=d.getImageData(0,0,f.width,f.height),l=k.data,m=0;m<l.length;m+=4)l[m+0]*=h,l[m+1]*=i,l[m+2]*=j;d.putImageData(k,0,0)},e.CanvasTinter.roundColor=function(a){var b=e.CanvasTinter.cacheStepsPerColorChannel,c=e.hex2rgb(a);return c[0]=Math.min(255,c[0]/b*b),c[1]=Math.min(255,c[1]/b*b),c[2]=Math.min(255,c[2]/b*b),e.rgb2hex(c)},e.CanvasTinter.cacheStepsPerColorChannel=8,e.CanvasTinter.convertTintToImage=!1,e.CanvasTinter.canUseMultiply=e.canUseNewCanvasBlendModes(),e.CanvasTinter.tintMethod=e.CanvasTinter.canUseMultiply?e.CanvasTinter.tintWithMultiply:e.CanvasTinter.tintWithPerPixel,e.CanvasRenderer=function(a,b,c,d){e.defaultRenderer=e.defaultRenderer||this,this.type=e.CANVAS_RENDERER,this.transparent=d,e.blendModesCanvas||(e.blendModesCanvas=[],e.canUseNewCanvasBlendModes()?(e.blendModesCanvas[e.blendModes.NORMAL]="source-over",e.blendModesCanvas[e.blendModes.ADD]="lighter",e.blendModesCanvas[e.blendModes.MULTIPLY]="multiply",e.blendModesCanvas[e.blendModes.SCREEN]="screen"):(e.blendModesCanvas[e.blendModes.NORMAL]="source-over",e.blendModesCanvas[e.blendModes.ADD]="lighter",e.blendModesCanvas[e.blendModes.MULTIPLY]="source-over",e.blendModesCanvas[e.blendModes.SCREEN]="source-over")),this.width=a||800,this.height=b||600,this.view=c||document.createElement("canvas"),this.context=this.view.getContext("2d"),this.smoothProperty=null,"imageSmoothingEnabled"in this.context?this.smoothProperty="imageSmoothingEnabled":"webkitImageSmoothingEnabled"in this.context?this.smoothProperty="webkitImageSmoothingEnabled":"mozImageSmoothingEnabled"in this.context?this.smoothProperty="mozImageSmoothingEnabled":"oImageSmoothingEnabled"in this.context&&(this.smoothProperty="oImageSmoothingEnabled"),this.scaleMode=null,this.refresh=!0,this.view.width=this.width,this.view.height=this.height,this.count=0,this.maskManager=new e.CanvasMaskManager,this.renderSession={},this.renderSession.context=this.context,this.renderSession.maskManager=this.maskManager},e.CanvasRenderer.prototype.constructor=e.CanvasRenderer,e.CanvasRenderer.prototype.render=function(a){e.texturesToUpdate.length=0,e.texturesToDestroy.length=0,a.updateTransform(),this.view.style.backgroundColor===a.backgroundColorString||this.transparent||(this.view.style.backgroundColor=a.backgroundColorString),this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.width,this.height),this.renderDisplayObject(a),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this))),e.Texture.frameUpdates.length>0&&(e.Texture.frameUpdates.length=0)},e.CanvasRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b},e.CanvasRenderer.prototype.renderDisplayObject=function(a,b){this.renderSession.context=b||this.context,a._renderCanvas(this.renderSession)},e.CanvasRenderer.prototype.renderStripFlat=function(a){var b=this.context,c=a.verticies,d=c.length/2;this.count++,b.beginPath();for(var e=1;d-2>e;e++){var f=2*e,g=c[f],h=c[f+2],i=c[f+4],j=c[f+1],k=c[f+3],l=c[f+5];b.moveTo(g,j),b.lineTo(h,k),b.lineTo(i,l)}b.fillStyle="#FF0000",b.fill(),b.closePath()},e.CanvasRenderer.prototype.renderStrip=function(a){var b=this.context,c=a.verticies,d=a.uvs,e=c.length/2;this.count++;for(var f=1;e-2>f;f++){var g=2*f,h=c[g],i=c[g+2],j=c[g+4],k=c[g+1],l=c[g+3],m=c[g+5],n=d[g]*a.texture.width,o=d[g+2]*a.texture.width,p=d[g+4]*a.texture.width,q=d[g+1]*a.texture.height,r=d[g+3]*a.texture.height,s=d[g+5]*a.texture.height;b.save(),b.beginPath(),b.moveTo(h,k),b.lineTo(i,l),b.lineTo(j,m),b.closePath(),b.clip();var t=n*r+q*p+o*s-r*p-q*o-n*s,u=h*r+q*j+i*s-r*j-q*i-h*s,v=n*i+h*p+o*j-i*p-h*o-n*j,w=n*r*j+q*i*p+h*o*s-h*r*p-q*o*j-n*i*s,x=k*r+q*m+l*s-r*m-q*l-k*s,y=n*l+k*p+o*m-l*p-k*o-n*m,z=n*r*m+q*l*p+k*o*s-k*r*p-q*o*m-n*l*s;b.transform(u/t,x/t,v/t,y/t,w/t,z/t),b.drawImage(a.texture.baseTexture.source,0,0),b.restore()}},e.CanvasBuffer=function(a,b){this.width=a,this.height=b,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=a,this.canvas.height=b},e.CanvasBuffer.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},e.CanvasBuffer.prototype.resize=function(a,b){this.width=this.canvas.width=a,this.height=this.canvas.height=b},e.CanvasGraphics=function(){},e.CanvasGraphics.renderGraphics=function(a,b){for(var c=a.worldAlpha,d="",f=0;f<a.graphicsData.length;f++){var g=a.graphicsData[f],h=g.points;if(b.strokeStyle=d="#"+("00000"+(0|g.lineColor).toString(16)).substr(-6),b.lineWidth=g.lineWidth,g.type===e.Graphics.POLY){b.beginPath(),b.moveTo(h[0],h[1]);for(var i=1;i<h.length/2;i++)b.lineTo(h[2*i],h[2*i+1]);h[0]===h[h.length-2]&&h[1]===h[h.length-1]&&b.closePath(),g.fill&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=d="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fill()),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.stroke())}else if(g.type===e.Graphics.RECT)(g.fillColor||0===g.fillColor)&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=d="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fillRect(h[0],h[1],h[2],h[3])),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.strokeRect(h[0],h[1],h[2],h[3]));else if(g.type===e.Graphics.CIRC)b.beginPath(),b.arc(h[0],h[1],h[2],0,2*Math.PI),b.closePath(),g.fill&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=d="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fill()),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.stroke());else if(g.type===e.Graphics.ELIP){var j=g.points,k=2*j[2],l=2*j[3],m=j[0]-k/2,n=j[1]-l/2;b.beginPath();var o=.5522848,p=k/2*o,q=l/2*o,r=m+k,s=n+l,t=m+k/2,u=n+l/2;b.moveTo(m,u),b.bezierCurveTo(m,u-q,t-p,n,t,n),b.bezierCurveTo(t+p,n,r,u-q,r,u),b.bezierCurveTo(r,u+q,t+p,s,t,s),b.bezierCurveTo(t-p,s,m,u+q,m,u),b.closePath(),g.fill&&(b.globalAlpha=g.fillAlpha*c,b.fillStyle=d="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),b.fill()),g.lineWidth&&(b.globalAlpha=g.lineAlpha*c,b.stroke())}}},e.CanvasGraphics.renderGraphicsMask=function(a,b){var c=a.graphicsData.length;if(0!==c){c>1&&(c=1,window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));for(var d=0;1>d;d++){var f=a.graphicsData[d],g=f.points;if(f.type===e.Graphics.POLY){b.beginPath(),b.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)b.lineTo(g[2*h],g[2*h+1]);g[0]===g[g.length-2]&&g[1]===g[g.length-1]&&b.closePath()}else if(f.type===e.Graphics.RECT)b.beginPath(),b.rect(g[0],g[1],g[2],g[3]),b.closePath();else if(f.type===e.Graphics.CIRC)b.beginPath(),b.arc(g[0],g[1],g[2],0,2*Math.PI),b.closePath();else if(f.type===e.Graphics.ELIP){var i=f.points,j=2*i[2],k=2*i[3],l=i[0]-j/2,m=i[1]-k/2;b.beginPath();var n=.5522848,o=j/2*n,p=k/2*n,q=l+j,r=m+k,s=l+j/2,t=m+k/2;b.moveTo(l,t),b.bezierCurveTo(l,t-p,s-o,m,s,m),b.bezierCurveTo(s+o,m,q,t-p,q,t),b.bezierCurveTo(q,t+p,s+o,r,s,r),b.bezierCurveTo(s-o,r,l,t+p,l,t),b.closePath()}}}},e.Graphics=function(){e.DisplayObjectContainer.call(this),this.renderable=!0,this.fillAlpha=1,this.lineWidth=0,this.lineColor="black",this.graphicsData=[],this.tint=16777215,this.blendMode=e.blendModes.NORMAL,this.currentPath={points:[]},this._webGL=[],this.isMask=!1,this.bounds=null,this.boundsPadding=10},e.Graphics.prototype=Object.create(e.DisplayObjectContainer.prototype),e.Graphics.prototype.constructor=e.Graphics,Object.defineProperty(e.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap=a,this._cacheAsBitmap?this._generateCachedSprite():(this.destroyCachedSprite(),this.dirty=!0)}}),e.Graphics.prototype.lineStyle=function(a,b,c){this.currentPath.points.length||this.graphicsData.pop(),this.lineWidth=a||0,this.lineColor=b||0,this.lineAlpha=arguments.length<3?1:c,this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:e.Graphics.POLY},this.graphicsData.push(this.currentPath)},e.Graphics.prototype.moveTo=function(a,b){this.currentPath.points.length||this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:e.Graphics.POLY},this.currentPath.points.push(a,b),this.graphicsData.push(this.currentPath)},e.Graphics.prototype.lineTo=function(a,b){this.currentPath.points.push(a,b),this.dirty=!0},e.Graphics.prototype.beginFill=function(a,b){this.filling=!0,this.fillColor=a||0,this.fillAlpha=arguments.length<2?1:b},e.Graphics.prototype.endFill=function(){this.filling=!1,this.fillColor=null,this.fillAlpha=1},e.Graphics.prototype.drawRect=function(a,b,c,d){this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,d],type:e.Graphics.RECT},this.graphicsData.push(this.currentPath),this.dirty=!0},e.Graphics.prototype.drawCircle=function(a,b,c){this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,c],type:e.Graphics.CIRC},this.graphicsData.push(this.currentPath),this.dirty=!0},e.Graphics.prototype.drawEllipse=function(a,b,c,d){this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,b,c,d],type:e.Graphics.ELIP},this.graphicsData.push(this.currentPath),this.dirty=!0},e.Graphics.prototype.clear=function(){this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[],this.bounds=null},e.Graphics.prototype.generateTexture=function(){var a=this.getBounds(),b=new e.CanvasBuffer(a.width,a.height),c=e.Texture.fromCanvas(b.canvas);return b.context.translate(-a.x,-a.y),e.CanvasGraphics.renderGraphics(this,b.context),c},e.Graphics.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){if(this._cacheAsBitmap)return this.dirty&&(this._generateCachedSprite(),e.updateWebGLTexture(this._cachedSprite.texture.baseTexture,a.gl),this.dirty=!1),e.Sprite.prototype._renderWebGL.call(this._cachedSprite,a),void 0;if(a.spriteBatch.stop(),this._mask&&a.maskManager.pushMask(this.mask,a),this._filters&&a.filterManager.pushFilter(this._filterBlock),this.blendMode!==a.spriteBatch.currentBlendMode){this.spriteBatch.currentBlendMode=this.blendMode;var b=e.blendModesWebGL[a.spriteBatch.currentBlendMode];this.spriteBatch.gl.blendFunc(b[0],b[1])}if(e.WebGLGraphics.renderGraphics(this,a),this.children.length){a.spriteBatch.start();for(var c=0,d=this.children.length;d>c;c++)this.children[c]._renderWebGL(a);a.spriteBatch.stop()}this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.drawCount++,a.spriteBatch.start()}},e.Graphics.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){var b=a.context,c=this.worldTransform;this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,b.globalCompositeOperation=e.blendModesCanvas[a.currentBlendMode]),b.setTransform(c[0],c[3],c[1],c[4],c[2],c[5]),e.CanvasGraphics.renderGraphics(this,b);for(var d=0,f=this.children.length;f>d;d++)this.children[d]._renderCanvas(a)}},e.Graphics.prototype.getBounds=function(){this.bounds||this.updateBounds();var a=this.bounds.x,b=this.bounds.width+this.bounds.x,c=this.bounds.y,d=this.bounds.height+this.bounds.y,e=this.worldTransform,f=e[0],g=e[3],h=e[1],i=e[4],j=e[2],k=e[5],l=f*b+h*d+j,m=i*d+g*b+k,n=f*a+h*d+j,o=i*d+g*a+k,p=f*a+h*c+j,q=i*c+g*a+k,r=f*b+h*c+j,s=i*c+g*b+k,t=-1/0,u=-1/0,v=1/0,w=1/0;v=v>l?l:v,v=v>n?n:v,v=v>p?p:v,v=v>r?r:v,w=w>m?m:w,w=w>o?o:w,w=w>q?q:w,w=w>s?s:w,t=l>t?l:t,t=n>t?n:t,t=p>t?p:t,t=r>t?r:t,u=m>u?m:u,u=o>u?o:u,u=q>u?q:u,u=s>u?s:u;var x=this._bounds;return x.x=v,x.width=t-v,x.y=w,x.height=u-w,x},e.Graphics.prototype.updateBounds=function(){for(var a,b,c,d=1/0,f=-1/0,g=1/0,h=-1/0,i=0;i<this.graphicsData.length;i++){var j=this.graphicsData[i],k=j.type,l=j.lineWidth;if(a=j.points,k===e.Graphics.RECT){b=a.x-l/2,c=a.y-l/2;var m=a.width+l,n=a.height+l;d=d>b?b:d,f=b+m>f?b+m:f,g=g>c?b:g,h=c+n>h?c+n:h}else if(k===e.Graphics.CIRC||k===e.Graphics.ELIP){b=a.x,c=a.y;var o=a.radius+l/2;d=d>b-o?b-o:d,f=b+o>f?b+o:f,g=g>c-o?c-o:g,h=c+o>h?c+o:h}else for(var p=0;p<a.length;p+=2)b=a[p],c=a[p+1],d=d>b-l?b-l:d,f=b+l>f?b+l:f,g=g>c-l?c-l:g,h=c+l>h?c+l:h}var q=this.boundsPadding;this.bounds=new e.Rectangle(d-q,g-q,f-d+2*q,h-g+2*q)},e.Graphics.prototype._generateCachedSprite=function(){var a=this.getBounds();if(this._cachedSprite)this._cachedSprite.buffer.resize(a.width,a.height);else{var b=new e.CanvasBuffer(a.width,a.height),c=e.Texture.fromCanvas(b.canvas);this._cachedSprite=new e.Sprite(c),this._cachedSprite.buffer=b,this._cachedSprite.worldTransform=this.worldTransform}this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._cachedSprite.buffer.context.translate(-a.x,-a.y),e.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context)},e.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(!0),this._cachedSprite=null},e.Graphics.POLY=0,e.Graphics.RECT=1,e.Graphics.CIRC=2,e.Graphics.ELIP=3,e.tempMatrix=e.mat3.create(),e.Strip=function(a,b,c){e.DisplayObjectContainer.call(this),this.texture=a,this.blendMode=e.blendModes.NORMAL;try{this.uvs=new Float32Array([0,1,1,1,1,0,0,1]),this.verticies=new Float32Array([0,0,0,0,0,0,0,0,0]),this.colors=new Float32Array([1,1,1,1]),this.indices=new Uint16Array([0,1,2,3])}catch(d){this.uvs=[0,1,1,1,1,0,0,1],this.verticies=[0,0,0,0,0,0,0,0,0],this.colors=[1,1,1,1],this.indices=[0,1,2,3]}this.width=b,this.height=c,a.baseTexture.hasLoaded?(this.width=this.texture.frame.width,this.height=this.texture.frame.height,this.updateFrame=!0):(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},e.Strip.prototype=Object.create(e.DisplayObjectContainer.prototype),e.Strip.prototype.constructor=e.Strip,e.Strip.prototype.setTexture=function(a){this.texture=a,this.width=a.frame.width,this.height=a.frame.height,this.updateFrame=!0},e.Strip.prototype.onTextureUpdate=function(){this.updateFrame=!0},e.Rope=function(a,b){e.Strip.call(this,a),this.points=b;try{this.verticies=new Float32Array(4*b.length),this.uvs=new Float32Array(4*b.length),this.colors=new Float32Array(2*b.length),this.indices=new Uint16Array(2*b.length)}catch(c){this.verticies=new Array(4*b.length),this.uvs=new Array(4*b.length),this.colors=new Array(2*b.length),this.indices=new Array(2*b.length)}this.refresh()},e.Rope.prototype=Object.create(e.Strip.prototype),e.Rope.prototype.constructor=e.Rope,e.Rope.prototype.refresh=function(){var a=this.points;if(!(a.length<1)){var b=this.uvs,c=a[0],d=this.indices,e=this.colors;this.count-=.2,b[0]=0,b[1]=1,b[2]=0,b[3]=1,e[0]=1,e[1]=1,d[0]=0,d[1]=1;for(var f,g,h,i=a.length,j=1;i>j;j++)f=a[j],g=4*j,h=j/(i-1),j%2?(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1):(b[g]=h,b[g+1]=0,b[g+2]=h,b[g+3]=1),g=2*j,e[g]=1,e[g+1]=1,g=2*j,d[g]=g,d[g+1]=g+1,c=f}},e.Rope.prototype.updateTransform=function(){var a=this.points;if(!(a.length<1)){var b,c=a[0],d={x:0,y:0};this.count-=.2;var f=this.verticies;f[0]=c.x+d.x,f[1]=c.y+d.y,f[2]=c.x-d.x,f[3]=c.y-d.y;for(var g,h,i,j,k,l=a.length,m=1;l>m;m++)g=a[m],h=4*m,b=m<a.length-1?a[m+1]:g,d.y=-(b.x-c.x),d.x=b.y-c.y,i=10*(1-m/(l-1)),i>1&&(i=1),j=Math.sqrt(d.x*d.x+d.y*d.y),k=this.texture.height/2,d.x/=j,d.y/=j,d.x*=k,d.y*=k,f[h]=g.x+d.x,f[h+1]=g.y+d.y,f[h+2]=g.x-d.x,f[h+3]=g.y-d.y,c=g;e.DisplayObjectContainer.prototype.updateTransform.call(this)}},e.Rope.prototype.setTexture=function(a){this.texture=a,this.updateFrame=!0},e.TilingSprite=function(a,b,c){e.Sprite.call(this,a),this.width=b||100,this.height=c||100,this.tileScale=new e.Point(1,1),this.tileScaleOffset=new e.Point(1,1),this.tilePosition=new e.Point(0,0),this.renderable=!0,this.tint=16777215,this.blendMode=e.blendModes.NORMAL},e.TilingSprite.prototype=Object.create(e.Sprite.prototype),e.TilingSprite.prototype.constructor=e.TilingSprite,Object.defineProperty(e.TilingSprite.prototype,"width",{get:function(){return this._width},set:function(a){this._width=a}}),Object.defineProperty(e.TilingSprite.prototype,"height",{get:function(){return this._height},set:function(a){this._height=a}}),e.TilingSprite.prototype.onTextureUpdate=function(){this.updateFrame=!0},e.TilingSprite.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha){var b,c;if(this.mask||this.filters){for(this.mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this.filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),this.tilingTexture?a.spriteBatch.renderTilingSprite(this):this.generateTilingTexture(!0),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);a.spriteBatch.stop(),this.filters&&a.filterManager.popFilter(),this.mask&&a.maskManager.popMask(a),a.spriteBatch.start()}else for(this.tilingTexture?a.spriteBatch.renderTilingSprite(this):this.generateTilingTexture(!0),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},e.TilingSprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){var b=a.context;this._mask&&a.maskManager.pushMask(this._mask,b),b.globalAlpha=this.worldAlpha;var c=this.worldTransform;b.setTransform(c[0],c[3],c[1],c[4],c[2],c[5]),this.__tilePattern||(this.generateTilingTexture(!1),this.tilingTexture&&(this.__tilePattern=b.createPattern(this.tilingTexture.baseTexture.source,"repeat"))),this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,b.globalCompositeOperation=e.blendModesCanvas[a.currentBlendMode]),b.beginPath();var d=this.tilePosition,f=this.tileScale;b.scale(f.x,f.y),b.translate(d.x,d.y),b.fillStyle=this.__tilePattern,b.fillRect(-d.x,-d.y,this.width/f.x,this.height/f.y),b.scale(1/f.x,1/f.y),b.translate(-d.x,-d.y),b.closePath(),this._mask&&a.maskManager.popMask(a.context)}},e.TilingSprite.prototype.getBounds=function(){var a=this._width,b=this._height,c=a*(1-this.anchor.x),d=a*-this.anchor.x,e=b*(1-this.anchor.y),f=b*-this.anchor.y,g=this.worldTransform,h=g[0],i=g[3],j=g[1],k=g[4],l=g[2],m=g[5],n=h*d+j*f+l,o=k*f+i*d+m,p=h*c+j*f+l,q=k*f+i*c+m,r=h*c+j*e+l,s=k*e+i*c+m,t=h*d+j*e+l,u=k*e+i*d+m,v=-1/0,w=-1/0,x=1/0,y=1/0;x=x>n?n:x,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,v=n>v?n:v,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w;var z=this._bounds;return z.x=x,z.width=v-x,z.y=y,z.height=w-y,this._currentBounds=z,z},e.TilingSprite.prototype.generateTilingTexture=function(a){var b=this.texture;if(b.baseTexture.hasLoaded){var c,d,f=b.baseTexture,g=b.frame,h=g.width!==f.width||g.height!==f.height;this.tilingTexture=b;var i=!1;if(a?(c=e.getNextPowerOfTwo(b.frame.width),d=e.getNextPowerOfTwo(b.frame.height),g.width!==c&&g.height!==d&&(i=!0)):h&&(c=g.width,d=g.height,i=!0),i){var j=new e.CanvasBuffer(c,d);j.context.drawImage(b.baseTexture.source,g.x,g.y,g.width,g.height,0,0,c,d),this.tilingTexture=e.Texture.fromCanvas(j.canvas),this.tileScaleOffset.x=g.width/c,this.tileScaleOffset.y=g.height/d}this.tilingTexture.baseTexture._powerOf2=!0}};var j={};j.BoneData=function(a,b){this.name=a,this.parent=b},j.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1},j.SlotData=function(a,b){this.name=a,this.boneData=b},j.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null},j.Bone=function(a,b){this.data=a,this.parent=b,this.setToSetupPose()},j.Bone.yDown=!1,j.Bone.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,updateWorldTransform:function(a,b){var c=this.parent;null!=c?(this.worldX=this.x*c.m00+this.y*c.m01+c.worldX,this.worldY=this.x*c.m10+this.y*c.m11+c.worldY,this.worldScaleX=c.worldScaleX*this.scaleX,this.worldScaleY=c.worldScaleY*this.scaleY,this.worldRotation=c.worldRotation+this.rotation):(this.worldX=this.x,this.worldY=this.y,this.worldScaleX=this.scaleX,this.worldScaleY=this.scaleY,this.worldRotation=this.rotation);var d=this.worldRotation*Math.PI/180,e=Math.cos(d),f=Math.sin(d);this.m00=e*this.worldScaleX,this.m10=f*this.worldScaleX,this.m01=-f*this.worldScaleY,this.m11=e*this.worldScaleY,a&&(this.m00=-this.m00,this.m01=-this.m01),b&&(this.m10=-this.m10,this.m11=-this.m11),j.Bone.yDown&&(this.m10=-this.m10,this.m11=-this.m11)},setToSetupPose:function(){var a=this.data;this.x=a.x,this.y=a.y,this.rotation=a.rotation,this.scaleX=a.scaleX,this.scaleY=a.scaleY}},j.Slot=function(a,b,c){this.data=a,this.skeleton=b,this.bone=c,this.setToSetupPose()},j.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,setAttachment:function(a){this.attachment=a,this._attachmentTime=this.skeleton.time},setAttachmentTime:function(a){this._attachmentTime=this.skeleton.time-a},getAttachmentTime:function(){return this.skeleton.time-this._attachmentTime},setToSetupPose:function(){var a=this.data;this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a;for(var b=this.skeleton.data.slots,c=0,d=b.length;d>c;c++)if(b[c]==a){this.setAttachment(a.attachmentName?this.skeleton.getAttachmentBySlotIndex(c,a.attachmentName):null);break}}},j.Skin=function(a){this.name=a,this.attachments={}},j.Skin.prototype={addAttachment:function(a,b,c){this.attachments[a+":"+b]=c},getAttachment:function(a,b){return this.attachments[a+":"+b]},_attachAll:function(a,b){for(var c in b.attachments){var d=c.indexOf(":"),e=parseInt(c.substring(0,d),10),f=c.substring(d+1),g=a.slots[e];
if(g.attachment&&g.attachment.name==f){var h=this.getAttachment(e,f);h&&g.setAttachment(h)}}}},j.Animation=function(a,b,c){this.name=a,this.timelines=b,this.duration=c},j.Animation.prototype={apply:function(a,b,c){c&&this.duration&&(b%=this.duration);for(var d=this.timelines,e=0,f=d.length;f>e;e++)d[e].apply(a,b,1)},mix:function(a,b,c,d){c&&this.duration&&(b%=this.duration);for(var e=this.timelines,f=0,g=e.length;g>f;f++)e[f].apply(a,b,d)}},j.binarySearch=function(a,b,c){var d=0,e=Math.floor(a.length/c)-2;if(!e)return c;for(var f=e>>>1;;){if(a[(f+1)*c]<=b?d=f+1:e=f,d==e)return(d+1)*c;f=d+e>>>1}},j.linearSearch=function(a,b,c){for(var d=0,e=a.length-c;e>=d;d+=c)if(a[d]>b)return d;return-1},j.Curves=function(a){this.curves=[],this.curves.length=6*(a-1)},j.Curves.prototype={setLinear:function(a){this.curves[6*a]=0},setStepped:function(a){this.curves[6*a]=-1},setCurve:function(a,b,c,d,e){var f=.1,g=f*f,h=g*f,i=3*f,j=3*g,k=6*g,l=6*h,m=2*-b+d,n=2*-c+e,o=3*(b-d)+1,p=3*(c-e)+1,q=6*a,r=this.curves;r[q]=b*i+m*j+o*h,r[q+1]=c*i+n*j+p*h,r[q+2]=m*k+o*l,r[q+3]=n*k+p*l,r[q+4]=o*l,r[q+5]=p*l},getCurvePercent:function(a,b){b=0>b?0:b>1?1:b;var c=6*a,d=this.curves,e=d[c];if(!e)return b;if(-1==e)return 0;for(var f=d[c+1],g=d[c+2],h=d[c+3],i=d[c+4],j=d[c+5],k=e,l=f,m=8;;){if(k>=b){var n=k-e,o=l-f;return o+(l-o)*(b-n)/(k-n)}if(!m)break;m--,e+=g,f+=h,g+=i,h+=j,k+=e,l+=f}return l+(1-l)*(b-k)/(1-k)}},j.RotateTimeline=function(a){this.curves=new j.Curves(a),this.frames=[],this.frames.length=2*a},j.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(a,b,c){a*=2,this.frames[a]=b,this.frames[a+1]=c},apply:function(a,b,c){var d,e=this.frames;if(!(b<e[0])){var f=a.bones[this.boneIndex];if(b>=e[e.length-2]){for(d=f.data.rotation+e[e.length-1]-f.rotation;d>180;)d-=360;for(;-180>d;)d+=360;return f.rotation+=d*c,void 0}var g=j.binarySearch(e,b,2),h=e[g-1],i=e[g],k=1-(b-i)/(e[g-2]-i);for(k=this.curves.getCurvePercent(g/2-1,k),d=e[g+1]-h;d>180;)d-=360;for(;-180>d;)d+=360;for(d=f.data.rotation+(h+d*k)-f.rotation;d>180;)d-=360;for(;-180>d;)d+=360;f.rotation+=d*c}}},j.TranslateTimeline=function(a){this.curves=new j.Curves(a),this.frames=[],this.frames.length=3*a},j.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.x+=(e.data.x+d[d.length-2]-e.x)*c,e.y+=(e.data.y+d[d.length-1]-e.y)*c,void 0;var f=j.binarySearch(d,b,3),g=d[f-2],h=d[f-1],i=d[f],k=1-(b-i)/(d[f+-3]-i);k=this.curves.getCurvePercent(f/3-1,k),e.x+=(e.data.x+g+(d[f+1]-g)*k-e.x)*c,e.y+=(e.data.y+h+(d[f+2]-h)*k-e.y)*c}}},j.ScaleTimeline=function(a){this.curves=new j.Curves(a),this.frames=[],this.frames.length=3*a},j.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(a,b,c,d){a*=3,this.frames[a]=b,this.frames[a+1]=c,this.frames[a+2]=d},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.bones[this.boneIndex];if(b>=d[d.length-3])return e.scaleX+=(e.data.scaleX-1+d[d.length-2]-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+d[d.length-1]-e.scaleY)*c,void 0;var f=j.binarySearch(d,b,3),g=d[f-2],h=d[f-1],i=d[f],k=1-(b-i)/(d[f+-3]-i);k=this.curves.getCurvePercent(f/3-1,k),e.scaleX+=(e.data.scaleX-1+g+(d[f+1]-g)*k-e.scaleX)*c,e.scaleY+=(e.data.scaleY-1+h+(d[f+2]-h)*k-e.scaleY)*c}}},j.ColorTimeline=function(a){this.curves=new j.Curves(a),this.frames=[],this.frames.length=5*a},j.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(c,d){c*=5,this.frames[c]=d,this.frames[c+1]=r,this.frames[c+2]=g,this.frames[c+3]=b,this.frames[c+4]=a},apply:function(a,b,c){var d=this.frames;if(!(b<d[0])){var e=a.slots[this.slotIndex];if(b>=d[d.length-5]){var f=d.length-1;return e.r=d[f-3],e.g=d[f-2],e.b=d[f-1],e.a=d[f],void 0}var g=j.binarySearch(d,b,5),h=d[g-4],i=d[g-3],k=d[g-2],l=d[g-1],m=d[g],n=1-(b-m)/(d[g-5]-m);n=this.curves.getCurvePercent(g/5-1,n);var o=h+(d[g+1]-h)*n,p=i+(d[g+2]-i)*n,q=k+(d[g+3]-k)*n,r=l+(d[g+4]-l)*n;1>c?(e.r+=(o-e.r)*c,e.g+=(p-e.g)*c,e.b+=(q-e.b)*c,e.a+=(r-e.a)*c):(e.r=o,e.g=p,e.b=q,e.a=r)}}},j.AttachmentTimeline=function(a){this.curves=new j.Curves(a),this.frames=[],this.frames.length=a,this.attachmentNames=[],this.attachmentNames.length=a},j.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length},setFrame:function(a,b,c){this.frames[a]=b,this.attachmentNames[a]=c},apply:function(a,b){var c=this.frames;if(!(b<c[0])){var d;d=b>=c[c.length-1]?c.length-1:j.binarySearch(c,b,1)-1;var e=this.attachmentNames[d];a.slots[this.slotIndex].setAttachment(e?a.getAttachmentBySlotIndex(this.slotIndex,e):null)}}},j.SkeletonData=function(){this.bones=[],this.slots=[],this.skins=[],this.animations=[]},j.SkeletonData.prototype={defaultSkin:null,findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return slot[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].name==a)return c;return-1},findSkin:function(a){for(var b=this.skins,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},findAnimation:function(a){for(var b=this.animations,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null}},j.Skeleton=function(a){this.data=a,this.bones=[];for(var b=0,c=a.bones.length;c>b;b++){var d=a.bones[b],e=d.parent?this.bones[a.bones.indexOf(d.parent)]:null;this.bones.push(new j.Bone(d,e))}for(this.slots=[],this.drawOrder=[],b=0,c=a.slots.length;c>b;b++){var f=a.slots[b],g=this.bones[a.bones.indexOf(f.boneData)],h=new j.Slot(f,this,g);this.slots.push(h),this.drawOrder.push(h)}},j.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:!1,flipY:!1,updateWorldTransform:function(){for(var a=this.flipX,b=this.flipY,c=this.bones,d=0,e=c.length;e>d;d++)c[d].updateWorldTransform(a,b)},setToSetupPose:function(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()},setBonesToSetupPose:function(){for(var a=this.bones,b=0,c=a.length;c>b;b++)a[b].setToSetupPose()},setSlotsToSetupPose:function(){for(var a=this.slots,b=0,c=a.length;c>b;b++)a[b].setToSetupPose(b)},getRootBone:function(){return this.bones.length?this.bones[0]:null},findBone:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findBoneIndex:function(a){for(var b=this.bones,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},findSlot:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return b[c];return null},findSlotIndex:function(a){for(var b=this.slots,c=0,d=b.length;d>c;c++)if(b[c].data.name==a)return c;return-1},setSkinByName:function(a){var b=this.data.findSkin(a);if(!b)throw"Skin not found: "+a;this.setSkin(b)},setSkin:function(a){this.skin&&a&&a._attachAll(this,this.skin),this.skin=a},getAttachmentBySlotName:function(a,b){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a),b)},getAttachmentBySlotIndex:function(a,b){if(this.skin){var c=this.skin.getAttachment(a,b);if(c)return c}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(a,b):null},setAttachment:function(a,b){for(var c=this.slots,d=0,e=c.size;e>d;d++){var f=c[d];if(f.data.name==a){var g=null;if(b&&(g=this.getAttachment(d,b),null==g))throw"Attachment not found: "+b+", for slot: "+a;return f.setAttachment(g),void 0}}throw"Slot not found: "+a},update:function(a){time+=a}},j.AttachmentType={region:0},j.RegionAttachment=function(){this.offset=[],this.offset.length=8,this.uvs=[],this.uvs.length=8},j.RegionAttachment.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(a,b,c,d,e){var f=this.uvs;e?(f[2]=a,f[3]=d,f[4]=a,f[5]=b,f[6]=c,f[7]=b,f[0]=c,f[1]=d):(f[0]=a,f[1]=d,f[2]=a,f[3]=b,f[4]=c,f[5]=b,f[6]=c,f[7]=d)},updateOffset:function(){var a=this.width/this.regionOriginalWidth*this.scaleX,b=this.height/this.regionOriginalHeight*this.scaleY,c=-this.width/2*this.scaleX+this.regionOffsetX*a,d=-this.height/2*this.scaleY+this.regionOffsetY*b,e=c+this.regionWidth*a,f=d+this.regionHeight*b,g=this.rotation*Math.PI/180,h=Math.cos(g),i=Math.sin(g),j=c*h+this.x,k=c*i,l=d*h+this.y,m=d*i,n=e*h+this.x,o=e*i,p=f*h+this.y,q=f*i,r=this.offset;r[0]=j-m,r[1]=l+k,r[2]=j-q,r[3]=p+k,r[4]=n-q,r[5]=p+o,r[6]=n-m,r[7]=l+o},computeVertices:function(a,b,c,d){a+=c.worldX,b+=c.worldY;var e=c.m00,f=c.m01,g=c.m10,h=c.m11,i=this.offset;d[0]=i[0]*e+i[1]*f+a,d[1]=i[0]*g+i[1]*h+b,d[2]=i[2]*e+i[3]*f+a,d[3]=i[2]*g+i[3]*h+b,d[4]=i[4]*e+i[5]*f+a,d[5]=i[4]*g+i[5]*h+b,d[6]=i[6]*e+i[7]*f+a,d[7]=i[6]*g+i[7]*h+b}},j.AnimationStateData=function(a){this.skeletonData=a,this.animationToMixTime={}},j.AnimationStateData.prototype={defaultMix:0,setMixByName:function(a,b,c){var d=this.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;var e=this.skeletonData.findAnimation(b);if(!e)throw"Animation not found: "+b;this.setMix(d,e,c)},setMix:function(a,b,c){this.animationToMixTime[a.name+":"+b.name]=c},getMix:function(a,b){var c=this.animationToMixTime[a.name+":"+b.name];return c?c:this.defaultMix}},j.AnimationState=function(a){this.data=a,this.queue=[]},j.AnimationState.prototype={current:null,previous:null,currentTime:0,previousTime:0,currentLoop:!1,previousLoop:!1,mixTime:0,mixDuration:0,update:function(a){if(this.currentTime+=a,this.previousTime+=a,this.mixTime+=a,this.queue.length>0){var b=this.queue[0];this.currentTime>=b.delay&&(this._setAnimation(b.animation,b.loop),this.queue.shift())}},apply:function(a){if(this.current)if(this.previous){this.previous.apply(a,this.previousTime,this.previousLoop);var b=this.mixTime/this.mixDuration;b>=1&&(b=1,this.previous=null),this.current.mix(a,this.currentTime,this.currentLoop,b)}else this.current.apply(a,this.currentTime,this.currentLoop)},clearAnimation:function(){this.previous=null,this.current=null,this.queue.length=0},_setAnimation:function(a,b){this.previous=null,a&&this.current&&(this.mixDuration=this.data.getMix(this.current,a),this.mixDuration>0&&(this.mixTime=0,this.previous=this.current,this.previousTime=this.currentTime,this.previousLoop=this.currentLoop)),this.current=a,this.currentLoop=b,this.currentTime=0},setAnimationByName:function(a,b){var c=this.data.skeletonData.findAnimation(a);if(!c)throw"Animation not found: "+a;this.setAnimation(c,b)},setAnimation:function(a,b){this.queue.length=0,this._setAnimation(a,b)},addAnimationByName:function(a,b,c){var d=this.data.skeletonData.findAnimation(a);if(!d)throw"Animation not found: "+a;this.addAnimation(d,b,c)},addAnimation:function(a,b,c){var d={};if(d.animation=a,d.loop=b,!c||0>=c){var e=this.queue.length?this.queue[this.queue.length-1].animation:this.current;c=null!=e?e.duration-this.data.getMix(e,a)+(c||0):0}d.delay=c,this.queue.push(d)},isComplete:function(){return!this.current||this.currentTime>=this.current.duration}},j.SkeletonJson=function(a){this.attachmentLoader=a},j.SkeletonJson.prototype={scale:1,readSkeletonData:function(a){for(var b,c=new j.SkeletonData,d=a.bones,e=0,f=d.length;f>e;e++){var g=d[e],h=null;if(g.parent&&(h=c.findBone(g.parent),!h))throw"Parent bone not found: "+g.parent;b=new j.BoneData(g.name,h),b.length=(g.length||0)*this.scale,b.x=(g.x||0)*this.scale,b.y=(g.y||0)*this.scale,b.rotation=g.rotation||0,b.scaleX=g.scaleX||1,b.scaleY=g.scaleY||1,c.bones.push(b)}var i=a.slots;for(e=0,f=i.length;f>e;e++){var k=i[e];if(b=c.findBone(k.bone),!b)throw"Slot bone not found: "+k.bone;var l=new j.SlotData(k.name,b),m=k.color;m&&(l.r=j.SkeletonJson.toColor(m,0),l.g=j.SkeletonJson.toColor(m,1),l.b=j.SkeletonJson.toColor(m,2),l.a=j.SkeletonJson.toColor(m,3)),l.attachmentName=k.attachment,c.slots.push(l)}var n=a.skins;for(var o in n)if(n.hasOwnProperty(o)){var p=n[o],q=new j.Skin(o);for(var r in p)if(p.hasOwnProperty(r)){var s=c.findSlotIndex(r),t=p[r];for(var u in t)if(t.hasOwnProperty(u)){var v=this.readAttachment(q,u,t[u]);null!=v&&q.addAttachment(s,u,v)}}c.skins.push(q),"default"==q.name&&(c.defaultSkin=q)}var w=a.animations;for(var x in w)w.hasOwnProperty(x)&&this.readAnimation(x,w[x],c);return c},readAttachment:function(a,b,c){b=c.name||b;var d=j.AttachmentType[c.type||"region"];if(d==j.AttachmentType.region){var e=new j.RegionAttachment;return e.x=(c.x||0)*this.scale,e.y=(c.y||0)*this.scale,e.scaleX=c.scaleX||1,e.scaleY=c.scaleY||1,e.rotation=c.rotation||0,e.width=(c.width||32)*this.scale,e.height=(c.height||32)*this.scale,e.updateOffset(),e.rendererObject={},e.rendererObject.name=b,e.rendererObject.scale={},e.rendererObject.scale.x=e.scaleX,e.rendererObject.scale.y=e.scaleY,e.rendererObject.rotation=-e.rotation*Math.PI/180,e}throw"Unknown attachment type: "+d},readAnimation:function(a,b,c){var d,e,f,g,h,i,k,l=[],m=0,n=b.bones;for(var o in n)if(n.hasOwnProperty(o)){var p=c.findBoneIndex(o);if(-1==p)throw"Bone not found: "+o;var q=n[o];for(f in q)if(q.hasOwnProperty(f))if(h=q[f],"rotate"==f){for(e=new j.RotateTimeline(h.length),e.boneIndex=p,d=0,i=0,k=h.length;k>i;i++)g=h[i],e.setFrame(d,g.time,g.angle),j.SkeletonJson.readCurve(e,d,g),d++;l.push(e),m=Math.max(m,e.frames[2*e.getFrameCount()-2])}else{if("translate"!=f&&"scale"!=f)throw"Invalid timeline type for a bone: "+f+" ("+o+")";var r=1;for("scale"==f?e=new j.ScaleTimeline(h.length):(e=new j.TranslateTimeline(h.length),r=this.scale),e.boneIndex=p,d=0,i=0,k=h.length;k>i;i++){g=h[i];var s=(g.x||0)*r,t=(g.y||0)*r;e.setFrame(d,g.time,s,t),j.SkeletonJson.readCurve(e,d,g),d++}l.push(e),m=Math.max(m,e.frames[3*e.getFrameCount()-3])}}var u=b.slots;for(var v in u)if(u.hasOwnProperty(v)){var w=u[v],x=c.findSlotIndex(v);for(f in w)if(w.hasOwnProperty(f))if(h=w[f],"color"==f){for(e=new j.ColorTimeline(h.length),e.slotIndex=x,d=0,i=0,k=h.length;k>i;i++){g=h[i];var y=g.color,z=j.SkeletonJson.toColor(y,0),A=j.SkeletonJson.toColor(y,1),B=j.SkeletonJson.toColor(y,2),C=j.SkeletonJson.toColor(y,3);e.setFrame(d,g.time,z,A,B,C),j.SkeletonJson.readCurve(e,d,g),d++}l.push(e),m=Math.max(m,e.frames[5*e.getFrameCount()-5])}else{if("attachment"!=f)throw"Invalid timeline type for a slot: "+f+" ("+v+")";for(e=new j.AttachmentTimeline(h.length),e.slotIndex=x,d=0,i=0,k=h.length;k>i;i++)g=h[i],e.setFrame(d++,g.time,g.name);l.push(e),m=Math.max(m,e.frames[e.getFrameCount()-1])}}c.animations.push(new j.Animation(a,l,m))}},j.SkeletonJson.readCurve=function(a,b,c){var d=c.curve;d&&("stepped"==d?a.curves.setStepped(b):d instanceof Array&&a.curves.setCurve(b,d[0],d[1],d[2],d[3]))},j.SkeletonJson.toColor=function(a,b){if(8!=a.length)throw"Color hexidecimal length must be 8, recieved: "+a;return parseInt(a.substring(2*b,2),16)/255},j.Atlas=function(a,b){this.textureLoader=b,this.pages=[],this.regions=[];var c=new j.AtlasReader(a),d=[];d.length=4;for(var e=null;;){var f=c.readLine();if(null==f)break;if(f=c.trim(f),f.length)if(e){var g=new j.AtlasRegion;g.name=f,g.page=e,g.rotate="true"==c.readValue(),c.readTuple(d);var h=parseInt(d[0],10),i=parseInt(d[1],10);c.readTuple(d);var k=parseInt(d[0],10),l=parseInt(d[1],10);g.u=h/e.width,g.v=i/e.height,g.rotate?(g.u2=(h+l)/e.width,g.v2=(i+k)/e.height):(g.u2=(h+k)/e.width,g.v2=(i+l)/e.height),g.x=h,g.y=i,g.width=Math.abs(k),g.height=Math.abs(l),4==c.readTuple(d)&&(g.splits=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)],4==c.readTuple(d)&&(g.pads=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)],c.readTuple(d))),g.originalWidth=parseInt(d[0],10),g.originalHeight=parseInt(d[1],10),c.readTuple(d),g.offsetX=parseInt(d[0],10),g.offsetY=parseInt(d[1],10),g.index=parseInt(c.readValue(),10),this.regions.push(g)}else{e=new j.AtlasPage,e.name=f,e.format=j.Atlas.Format[c.readValue()],c.readTuple(d),e.minFilter=j.Atlas.TextureFilter[d[0]],e.magFilter=j.Atlas.TextureFilter[d[1]];var m=c.readValue();e.uWrap=j.Atlas.TextureWrap.clampToEdge,e.vWrap=j.Atlas.TextureWrap.clampToEdge,"x"==m?e.uWrap=j.Atlas.TextureWrap.repeat:"y"==m?e.vWrap=j.Atlas.TextureWrap.repeat:"xy"==m&&(e.uWrap=e.vWrap=j.Atlas.TextureWrap.repeat),b.load(e,f),this.pages.push(e)}else e=null}},j.Atlas.prototype={findRegion:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},dispose:function(){for(var a=this.pages,b=0,c=a.length;c>b;b++)this.textureLoader.unload(a[b].rendererObject)},updateUVs:function(a){for(var b=this.regions,c=0,d=b.length;d>c;c++){var e=b[c];e.page==a&&(e.u=e.x/a.width,e.v=e.y/a.height,e.rotate?(e.u2=(e.x+e.height)/a.width,e.v2=(e.y+e.width)/a.height):(e.u2=(e.x+e.width)/a.width,e.v2=(e.y+e.height)/a.height))}}},j.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6},j.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6},j.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2},j.AtlasPage=function(){},j.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0},j.AtlasRegion=function(){},j.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:!1,splits:null,pads:null},j.AtlasReader=function(a){this.lines=a.split(/\r\n|\r|\n/)},j.AtlasReader.prototype={index:0,trim:function(a){return a.replace(/^\s+|\s+$/g,"")},readLine:function(){return this.index>=this.lines.length?null:this.lines[this.index++]},readValue:function(){var a=this.readLine(),b=a.indexOf(":");if(-1==b)throw"Invalid line: "+a;return this.trim(a.substring(b+1))},readTuple:function(a){var b=this.readLine(),c=b.indexOf(":");if(-1==c)throw"Invalid line: "+b;for(var d=0,e=c+1;3>d;d++){var f=b.indexOf(",",e);if(-1==f){if(!d)throw"Invalid line: "+b;break}a[d]=this.trim(b.substr(e,f-e)),e=f+1}return a[d]=this.trim(b.substring(e)),d+1}},j.AtlasAttachmentLoader=function(a){this.atlas=a},j.AtlasAttachmentLoader.prototype={newAttachment:function(a,b,c){switch(b){case j.AttachmentType.region:var d=this.atlas.findRegion(c);if(!d)throw"Region not found in atlas: "+c+" ("+b+")";var e=new j.RegionAttachment(c);return e.rendererObject=d,e.setUVs(d.u,d.v,d.u2,d.v2,d.rotate),e.regionOffsetX=d.offsetX,e.regionOffsetY=d.offsetY,e.regionWidth=d.width,e.regionHeight=d.height,e.regionOriginalWidth=d.originalWidth,e.regionOriginalHeight=d.originalHeight,e}throw"Unknown attachment type: "+b}},j.Bone.yDown=!0,e.AnimCache={},e.Spine=function(a){if(e.DisplayObjectContainer.call(this),this.spineData=e.AnimCache[a],!this.spineData)throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: "+a);this.skeleton=new j.Skeleton(this.spineData),this.skeleton.updateWorldTransform(),this.stateData=new j.AnimationStateData(this.spineData),this.state=new j.AnimationState(this.stateData),this.slotContainers=[];for(var b=0,c=this.skeleton.drawOrder.length;c>b;b++){var d=this.skeleton.drawOrder[b],f=d.attachment,g=new e.DisplayObjectContainer;if(this.slotContainers.push(g),this.addChild(g),f instanceof j.RegionAttachment){var h=f.rendererObject.name,i=this.createSprite(d,f.rendererObject);d.currentSprite=i,d.currentSpriteName=h,g.addChild(i)}}},e.Spine.prototype=Object.create(e.DisplayObjectContainer.prototype),e.Spine.prototype.constructor=e.Spine,e.Spine.prototype.updateTransform=function(){this.lastTime=this.lastTime||Date.now();var a=.001*(Date.now()-this.lastTime);this.lastTime=Date.now(),this.state.update(a),this.state.apply(this.skeleton),this.skeleton.updateWorldTransform();for(var b=this.skeleton.drawOrder,c=0,d=b.length;d>c;c++){var f=b[c],g=f.attachment,h=this.slotContainers[c];if(g instanceof j.RegionAttachment){if(g.rendererObject&&(!f.currentSpriteName||f.currentSpriteName!=g.name)){var i=g.rendererObject.name;if(void 0!==f.currentSprite&&(f.currentSprite.visible=!1),f.sprites=f.sprites||{},void 0!==f.sprites[i])f.sprites[i].visible=!0;else{var k=this.createSprite(f,g.rendererObject);h.addChild(k)}f.currentSprite=f.sprites[i],f.currentSpriteName=i}h.visible=!0;var l=f.bone;h.position.x=l.worldX+g.x*l.m00+g.y*l.m01,h.position.y=l.worldY+g.x*l.m10+g.y*l.m11,h.scale.x=l.worldScaleX,h.scale.y=l.worldScaleY,h.rotation=-(f.bone.worldRotation*Math.PI/180)}else h.visible=!1}e.DisplayObjectContainer.prototype.updateTransform.call(this)},e.Spine.prototype.createSprite=function(a,b){var c=e.TextureCache[b.name]?b.name:b.name+".png",d=new e.Sprite(e.Texture.fromFrame(c));return d.scale=b.scale,d.rotation=b.rotation,d.anchor.x=d.anchor.y=.5,a.sprites=a.sprites||{},a.sprites[b.name]=d,d},e.BaseTextureCache={},e.texturesToUpdate=[],e.texturesToDestroy=[],e.BaseTexture=function(a,b){if(e.EventTarget.call(this),this.width=100,this.height=100,this.scaleMode=b||e.BaseTexture.SCALE_MODE.DEFAULT,this.hasLoaded=!1,this.source=a,a){if(this.source instanceof Image||this.source instanceof HTMLImageElement)if(this.source.complete)this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,e.texturesToUpdate.push(this);else{var c=this;this.source.onload=function(){c.hasLoaded=!0,c.width=c.source.width,c.height=c.source.height,e.texturesToUpdate.push(c),c.dispatchEvent({type:"loaded",content:c})}}else this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,e.texturesToUpdate.push(this);this.imageUrl=null,this._powerOf2=!1,this._glTextures=[]}},e.BaseTexture.prototype.constructor=e.BaseTexture,e.BaseTexture.prototype.destroy=function(){this.source instanceof Image&&(this.imageUrl in e.BaseTextureCache&&delete e.BaseTextureCache[this.imageUrl],this.imageUrl=null,this.source.src=null),this.source=null,e.texturesToDestroy.push(this)},e.BaseTexture.prototype.updateSourceImage=function(a){this.hasLoaded=!1,this.source.src=null,this.source.src=a},e.BaseTexture.fromImage=function(a,b,c){var d=e.BaseTextureCache[a];if(!d){var f=new Image;b&&(f.crossOrigin=""),f.src=a,d=new e.BaseTexture(f,c),d.imageUrl=a,e.BaseTextureCache[a]=d}return d},e.BaseTexture.SCALE_MODE={DEFAULT:0,LINEAR:0,NEAREST:1},e.TextureCache={},e.FrameCache={},e.Texture=function(a,b){if(e.EventTarget.call(this),b||(this.noFrame=!0,b=new e.Rectangle(0,0,1,1)),a instanceof e.Texture&&(a=a.baseTexture),this.baseTexture=a,this.frame=b,this.trim=new e.Point,this.scope=this,a.hasLoaded)this.noFrame&&(b=new e.Rectangle(0,0,a.width,a.height)),this.setFrame(b);else{var c=this;a.addEventListener("loaded",function(){c.onBaseTextureLoaded()})}},e.Texture.prototype.constructor=e.Texture,e.Texture.prototype.onBaseTextureLoaded=function(){var a=this.baseTexture;a.removeEventListener("loaded",this.onLoaded),this.noFrame&&(this.frame=new e.Rectangle(0,0,a.width,a.height)),this.setFrame(this.frame),this.scope.dispatchEvent({type:"update",content:this})},e.Texture.prototype.destroy=function(a){a&&this.baseTexture.destroy()},e.Texture.prototype.setFrame=function(a){if(this.frame=a,this.width=a.width,this.height=a.height,a.x+a.width>this.baseTexture.width||a.y+a.height>this.baseTexture.height)throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.updateFrame=!0,e.Texture.frameUpdates.push(this)},e.Texture.prototype._updateWebGLuvs=function(){this._uvs||(this._uvs=new Float32Array(8));var a=this.frame,b=this.baseTexture.width,c=this.baseTexture.height;this._uvs[0]=a.x/b,this._uvs[1]=a.y/c,this._uvs[2]=(a.x+a.width)/b,this._uvs[3]=a.y/c,this._uvs[4]=(a.x+a.width)/b,this._uvs[5]=(a.y+a.height)/c,this._uvs[6]=a.x/b,this._uvs[7]=(a.y+a.height)/c},e.Texture.fromImage=function(a,b,c){var d=e.TextureCache[a];return d||(d=new e.Texture(e.BaseTexture.fromImage(a,b,c)),e.TextureCache[a]=d),d},e.Texture.fromFrame=function(a){var b=e.TextureCache[a];if(!b)throw new Error('The frameId "'+a+'" does not exist in the texture cache ');return b},e.Texture.fromCanvas=function(a,b){var c=new e.BaseTexture(a,b);return new e.Texture(c)},e.Texture.addTextureToCache=function(a,b){e.TextureCache[b]=a},e.Texture.removeTextureFromCache=function(a){var b=e.TextureCache[a];return e.TextureCache[a]=null,b},e.Texture.frameUpdates=[],e.Texture.SCALE_MODE=e.BaseTexture.SCALE_MODE,e.RenderTexture=function(a,b,c){if(e.EventTarget.call(this),this.width=a||100,this.height=b||100,this.indetityMatrix=e.mat3.create(),this.frame=new e.Rectangle(0,0,this.width,this.height),this.baseTexture=new e.BaseTexture,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.baseTexture._glTextures=[],this.baseTexture.hasLoaded=!0,this.renderer=c||e.defaultRenderer,this.renderer.type===e.WEBGL_RENDERER){var d=this.renderer.gl;this.textureBuffer=new e.FilterTexture(d,this.width,this.height),this.baseTexture._glTextures[d.id]=this.textureBuffer.texture,this.render=this.renderWebGL,this.projection=new e.Point(this.width/2,-this.height/2)}else this.render=this.renderCanvas,this.textureBuffer=new e.CanvasBuffer(this.width,this.height),this.baseTexture.source=this.textureBuffer.canvas;e.Texture.frameUpdates.push(this)},e.RenderTexture.prototype=Object.create(e.Texture.prototype),e.RenderTexture.prototype.constructor=e.RenderTexture,e.RenderTexture.prototype.resize=function(a,b){if(this.width=a,this.height=b,this.frame.width=this.width,this.frame.height=this.height,this.renderer.type===e.WEBGL_RENDERER){this.projection.x=this.width/2,this.projection.y=-this.height/2;var c=this.gl;c.bindTexture(c.TEXTURE_2D,this.baseTexture._glTextures[c.id]),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,this.width,this.height,0,c.RGBA,c.UNSIGNED_BYTE,null)}else this.textureBuffer.resize(this.width,this.height);e.Texture.frameUpdates.push(this)},e.RenderTexture.prototype.renderWebGL=function(a,b,c){var d=this.renderer.gl;d.colorMask(!0,!0,!0,!0),d.viewport(0,0,this.width,this.height),d.bindFramebuffer(d.FRAMEBUFFER,this.textureBuffer.frameBuffer),c&&this.textureBuffer.clear();var f=a.children,g=a.worldTransform;a.worldTransform=e.mat3.create(),a.worldTransform[4]=-1,a.worldTransform[5]=-2*this.projection.y,b&&(a.worldTransform[2]=b.x,a.worldTransform[5]-=b.y);for(var h=0,i=f.length;i>h;h++)f[h].updateTransform();this.renderer.renderDisplayObject(a,this.projection),a.worldTransform=g},e.RenderTexture.prototype.renderCanvas=function(a,b,c){var d=a.children;a.worldTransform=e.mat3.create(),b&&(a.worldTransform[2]=b.x,a.worldTransform[5]=b.y);for(var f=0,g=d.length;g>f;f++)d[f].updateTransform();c&&this.textureBuffer.clear();var h=this.textureBuffer.context;this.renderer.renderDisplayObject(a,h),h.setTransform(1,0,0,1,0,0)},e.AssetLoader=function(a,b){e.EventTarget.call(this),this.assetURLs=a,this.crossorigin=b,this.loadersByType={jpg:e.ImageLoader,jpeg:e.ImageLoader,png:e.ImageLoader,gif:e.ImageLoader,json:e.JsonLoader,atlas:e.AtlasLoader,anim:e.SpineLoader,xml:e.BitmapFontLoader,fnt:e.BitmapFontLoader}},e.AssetLoader.prototype.constructor=e.AssetLoader,e.AssetLoader.prototype._getDataType=function(a){var b="data:",c=a.slice(0,b.length).toLowerCase();if(c===b){var d=a.slice(b.length),e=d.indexOf(",");if(-1===e)return null;var f=d.slice(0,e).split(";")[0];return f&&"text/plain"!==f.toLowerCase()?f.split("/").pop().toLowerCase():"txt"}return null},e.AssetLoader.prototype.load=function(){function a(){b.onAssetLoaded()}var b=this;this.loadCount=this.assetURLs.length;for(var c=0;c<this.assetURLs.length;c++){var d=this.assetURLs[c],e=this._getDataType(d);e||(e=d.split("?").shift().split(".").pop().toLowerCase());var f=this.loadersByType[e];if(!f)throw new Error(e+" is an unsupported file type");var g=new f(d,this.crossorigin);g.addEventListener("loaded",a),g.load()}},e.AssetLoader.prototype.onAssetLoaded=function(){this.loadCount--,this.dispatchEvent({type:"onProgress",content:this}),this.onProgress&&this.onProgress(),this.loadCount||(this.dispatchEvent({type:"onComplete",content:this}),this.onComplete&&this.onComplete())},e.JsonLoader=function(a,b){e.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.loaded=!1},e.JsonLoader.prototype.constructor=e.JsonLoader,e.JsonLoader.prototype.load=function(){this.ajaxRequest=new e.AjaxRequest;var a=this;this.ajaxRequest.onreadystatechange=function(){a.onJSONLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/json"),this.ajaxRequest.send(null)},e.JsonLoader.prototype.onJSONLoaded=function(){if(4===this.ajaxRequest.readyState)if(200===this.ajaxRequest.status||-1===window.location.protocol.indexOf("http"))if(this.json=JSON.parse(this.ajaxRequest.responseText),this.json.frames){var a=this,b=this.baseUrl+this.json.meta.image,c=new e.ImageLoader(b,this.crossorigin),d=this.json.frames;this.texture=c.texture.baseTexture,c.addEventListener("loaded",function(){a.onLoaded()});for(var f in d){var g=d[f].frame;if(g&&(e.TextureCache[f]=new e.Texture(this.texture,{x:g.x,y:g.y,width:g.w,height:g.h}),d[f].trimmed)){var h=e.TextureCache[f];h.trimmed=!0;var i=d[f].sourceSize,k=d[f].spriteSourceSize;h.trim.x=k.x,h.trim.y=k.y,h.trim.realWidth=i.w,h.trim.realHeight=i.h}}c.load()}else if(this.json.bones){var l=new j.SkeletonJson,m=l.readSkeletonData(this.json);e.AnimCache[this.url]=m,this.onLoaded()}else this.onLoaded();else this.onError()},e.JsonLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},e.JsonLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},e.AtlasLoader=function(a,b){e.EventTarget.call(this),this.url=a,this.baseUrl=a.replace(/[^\/]*$/,""),this.crossorigin=b,this.loaded=!1},e.AtlasLoader.constructor=e.AtlasLoader,e.AtlasLoader.prototype.load=function(){this.ajaxRequest=new e.AjaxRequest,this.ajaxRequest.onreadystatechange=this.onAtlasLoaded.bind(this),this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/json"),this.ajaxRequest.send(null)},e.AtlasLoader.prototype.onAtlasLoaded=function(){if(4===this.ajaxRequest.readyState)if(200===this.ajaxRequest.status||-1===window.location.href.indexOf("http")){this.atlas={meta:{image:[]},frames:[]};var a=this.ajaxRequest.responseText.split(/\r?\n/),b=-3,c=0,d=null,f=!1,g=0,h=0,i=this.onLoaded.bind(this);for(g=0;g<a.length;g++)if(a[g]=a[g].replace(/^\s+|\s+$/g,""),""===a[g]&&(f=g+1),a[g].length>0){if(f===g)this.atlas.meta.image.push(a[g]),c=this.atlas.meta.image.length-1,this.atlas.frames.push({}),b=-3;else if(b>0)if(b%7===1)null!=d&&(this.atlas.frames[c][d.name]=d),d={name:a[g],frame:{}};else{var j=a[g].split(" ");if(b%7===3)d.frame.x=Number(j[1].replace(",","")),d.frame.y=Number(j[2]);else if(b%7===4)d.frame.w=Number(j[1].replace(",","")),d.frame.h=Number(j[2]);else if(b%7===5){var k={x:0,y:0,w:Number(j[1].replace(",","")),h:Number(j[2])};k.w>d.frame.w||k.h>d.frame.h?(d.trimmed=!0,d.realSize=k):d.trimmed=!1}}b++}if(null!=d&&(this.atlas.frames[c][d.name]=d),this.atlas.meta.image.length>0){for(this.images=[],h=0;h<this.atlas.meta.image.length;h++){var l=this.baseUrl+this.atlas.meta.image[h],m=this.atlas.frames[h];this.images.push(new e.ImageLoader(l,this.crossorigin));for(g in m){var n=m[g].frame;n&&(e.TextureCache[g]=new e.Texture(this.images[h].texture.baseTexture,{x:n.x,y:n.y,width:n.w,height:n.h}),m[g].trimmed&&(e.TextureCache[g].realSize=m[g].realSize,e.TextureCache[g].trim.x=0,e.TextureCache[g].trim.y=0))}}for(this.currentImageId=0,h=0;h<this.images.length;h++)this.images[h].addEventListener("loaded",i);this.images[this.currentImageId].load()}else this.onLoaded()}else this.onError()},e.AtlasLoader.prototype.onLoaded=function(){this.images.length-1>this.currentImageId?(this.currentImageId++,this.images[this.currentImageId].load()):(this.loaded=!0,this.dispatchEvent({type:"loaded",content:this}))
},e.AtlasLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},e.SpriteSheetLoader=function(a,b){e.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null,this.frames={}},e.SpriteSheetLoader.prototype.constructor=e.SpriteSheetLoader,e.SpriteSheetLoader.prototype.load=function(){var a=this,b=new e.JsonLoader(this.url,this.crossorigin);b.addEventListener("loaded",function(b){a.json=b.content.json,a.onLoaded()}),b.load()},e.SpriteSheetLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},e.ImageLoader=function(a,b){e.EventTarget.call(this),this.texture=e.Texture.fromImage(a,b),this.frames=[]},e.ImageLoader.prototype.constructor=e.ImageLoader,e.ImageLoader.prototype.load=function(){if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var a=this;this.texture.baseTexture.addEventListener("loaded",function(){a.onLoaded()})}},e.ImageLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},e.ImageLoader.prototype.loadFramedSpriteSheet=function(a,b,c){this.frames=[];for(var d=Math.floor(this.texture.width/a),f=Math.floor(this.texture.height/b),g=0,h=0;f>h;h++)for(var i=0;d>i;i++,g++){var j=new e.Texture(this.texture,{x:i*a,y:h*b,width:a,height:b});this.frames.push(j),c&&(e.TextureCache[c+"-"+g]=j)}if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var k=this;this.texture.baseTexture.addEventListener("loaded",function(){k.onLoaded()})}},e.BitmapFontLoader=function(a,b){e.EventTarget.call(this),this.url=a,this.crossorigin=b,this.baseUrl=a.replace(/[^\/]*$/,""),this.texture=null},e.BitmapFontLoader.prototype.constructor=e.BitmapFontLoader,e.BitmapFontLoader.prototype.load=function(){this.ajaxRequest=new XMLHttpRequest;var a=this;this.ajaxRequest.onreadystatechange=function(){a.onXMLLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/xml"),this.ajaxRequest.send(null)},e.BitmapFontLoader.prototype.onXMLLoaded=function(){if(4===this.ajaxRequest.readyState&&(200===this.ajaxRequest.status||-1===window.location.protocol.indexOf("http"))){var a=this.ajaxRequest.responseXML;if(!a||/MSIE 9/i.test(navigator.userAgent)||navigator.isCocoonJS)if("function"==typeof window.DOMParser){var b=new DOMParser;a=b.parseFromString(this.ajaxRequest.responseText,"text/xml")}else{var c=document.createElement("div");c.innerHTML=this.ajaxRequest.responseText,a=c}var d=this.baseUrl+a.getElementsByTagName("page")[0].getAttribute("file"),f=new e.ImageLoader(d,this.crossorigin);this.texture=f.texture.baseTexture;var g={},h=a.getElementsByTagName("info")[0],i=a.getElementsByTagName("common")[0];g.font=h.getAttribute("face"),g.size=parseInt(h.getAttribute("size"),10),g.lineHeight=parseInt(i.getAttribute("lineHeight"),10),g.chars={};for(var j=a.getElementsByTagName("char"),k=0;k<j.length;k++){var l=parseInt(j[k].getAttribute("id"),10),m=new e.Rectangle(parseInt(j[k].getAttribute("x"),10),parseInt(j[k].getAttribute("y"),10),parseInt(j[k].getAttribute("width"),10),parseInt(j[k].getAttribute("height"),10));g.chars[l]={xOffset:parseInt(j[k].getAttribute("xoffset"),10),yOffset:parseInt(j[k].getAttribute("yoffset"),10),xAdvance:parseInt(j[k].getAttribute("xadvance"),10),kerning:{},texture:e.TextureCache[l]=new e.Texture(this.texture,m)}}var n=a.getElementsByTagName("kerning");for(k=0;k<n.length;k++){var o=parseInt(n[k].getAttribute("first"),10),p=parseInt(n[k].getAttribute("second"),10),q=parseInt(n[k].getAttribute("amount"),10);g.chars[p].kerning[o]=q}e.BitmapText.fonts[g.font]=g;var r=this;f.addEventListener("loaded",function(){r.onLoaded()}),f.load()}},e.BitmapFontLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},e.SpineLoader=function(a,b){e.EventTarget.call(this),this.url=a,this.crossorigin=b,this.loaded=!1},e.SpineLoader.prototype.constructor=e.SpineLoader,e.SpineLoader.prototype.load=function(){var a=this,b=new e.JsonLoader(this.url,this.crossorigin);b.addEventListener("loaded",function(b){a.json=b.content.json,a.onLoaded()}),b.load()},e.SpineLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},e.AbstractFilter=function(a,b){this.passes=[this],this.shaders=[],this.dirty=!0,this.padding=0,this.uniforms=b||{},this.fragmentSrc=a||[]},e.AlphaMaskFilter=function(a){e.AbstractFilter.call(this),this.passes=[this],a.baseTexture._powerOf2=!0,this.uniforms={mask:{type:"sampler2D",value:a},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}},a.baseTexture.hasLoaded?(this.uniforms.mask.value.x=a.width,this.uniforms.mask.value.y=a.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),a.baseTexture.on("loaded",this.boundLoadedFunction)),this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D mask;","uniform sampler2D uSampler;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   mapCords *= dimensions.xy / mapDimensions;","   vec4 original =  texture2D(uSampler, vTextureCoord);","   float maskAlpha =  texture2D(mask, mapCords).r;","   original *= maskAlpha;","   gl_FragColor =  original;","}"]},e.AlphaMaskFilter.prototype=Object.create(e.AbstractFilter.prototype),e.AlphaMaskFilter.prototype.constructor=e.AlphaMaskFilter,e.AlphaMaskFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.mask.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.mask.value.height,this.uniforms.mask.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(e.AlphaMaskFilter.prototype,"map",{get:function(){return this.uniforms.mask.value},set:function(a){this.uniforms.mask.value=a}}),e.ColorMatrixFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={matrix:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform mat4 matrix;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;","}"]},e.ColorMatrixFilter.prototype=Object.create(e.AbstractFilter.prototype),e.ColorMatrixFilter.prototype.constructor=e.ColorMatrixFilter,Object.defineProperty(e.ColorMatrixFilter.prototype,"matrix",{get:function(){return this.uniforms.matrix.value},set:function(a){this.uniforms.matrix.value=a}}),e.GrayFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={gray:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float gray;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);","}"]},e.GrayFilter.prototype=Object.create(e.AbstractFilter.prototype),e.GrayFilter.prototype.constructor=e.GrayFilter,Object.defineProperty(e.GrayFilter.prototype,"gray",{get:function(){return this.uniforms.gray.value},set:function(a){this.uniforms.gray.value=a}}),e.DisplacementFilter=function(a){e.AbstractFilter.call(this),this.passes=[this],a.baseTexture._powerOf2=!0,this.uniforms={displacementMap:{type:"sampler2D",value:a},scale:{type:"2f",value:{x:30,y:30}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}},a.baseTexture.hasLoaded?(this.uniforms.mapDimensions.value.x=a.width,this.uniforms.mapDimensions.value.y=a.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),a.baseTexture.on("loaded",this.boundLoadedFunction)),this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D displacementMap;","uniform sampler2D uSampler;","uniform vec2 scale;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   vec2 matSample = texture2D(displacementMap, mapCords).xy;","   matSample -= 0.5;","   matSample *= scale;","   matSample /= mapDimensions;","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);","   vec2 cord = vTextureCoord;","}"]},e.DisplacementFilter.prototype=Object.create(e.AbstractFilter.prototype),e.DisplacementFilter.prototype.constructor=e.DisplacementFilter,e.DisplacementFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height,this.uniforms.displacementMap.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(e.DisplacementFilter.prototype,"map",{get:function(){return this.uniforms.displacementMap.value},set:function(a){this.uniforms.displacementMap.value=a}}),Object.defineProperty(e.DisplacementFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(a){this.uniforms.scale.value=a}}),Object.defineProperty(e.DisplacementFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(a){this.uniforms.offset.value=a}}),e.PixelateFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:0},dimensions:{type:"4fv",value:new Float32Array([1e4,100,10,10])},pixelSize:{type:"2f",value:{x:10,y:10}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 testDim;","uniform vec4 dimensions;","uniform vec2 pixelSize;","uniform sampler2D uSampler;","void main(void) {","   vec2 coord = vTextureCoord;","   vec2 size = dimensions.xy/pixelSize;","   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;","   gl_FragColor = texture2D(uSampler, color);","}"]},e.PixelateFilter.prototype=Object.create(e.AbstractFilter.prototype),e.PixelateFilter.prototype.constructor=e.PixelateFilter,Object.defineProperty(e.PixelateFilter.prototype,"size",{get:function(){return this.uniforms.pixelSize.value},set:function(a){this.dirty=!0,this.uniforms.pixelSize.value=a}}),e.BlurXFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;","   gl_FragColor = sum;","}"]},e.BlurXFilter.prototype=Object.create(e.AbstractFilter.prototype),e.BlurXFilter.prototype.constructor=e.BlurXFilter,Object.defineProperty(e.BlurXFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.dirty=!0,this.uniforms.blur.value=1/7e3*a}}),e.BlurYFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;","   gl_FragColor = sum;","}"]},e.BlurYFilter.prototype=Object.create(e.AbstractFilter.prototype),e.BlurYFilter.prototype.constructor=e.BlurYFilter,Object.defineProperty(e.BlurYFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),e.BlurFilter=function(){this.blurXFilter=new e.BlurXFilter,this.blurYFilter=new e.BlurYFilter,this.passes=[this.blurXFilter,this.blurYFilter]},Object.defineProperty(e.BlurFilter.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(a){this.blurXFilter.blur=this.blurYFilter.blur=a}}),Object.defineProperty(e.BlurFilter.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(a){this.blurXFilter.blur=a}}),Object.defineProperty(e.BlurFilter.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(a){this.blurYFilter.blur=a}}),e.InvertFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);","}"]},e.InvertFilter.prototype=Object.create(e.AbstractFilter.prototype),e.InvertFilter.prototype.constructor=e.InvertFilter,Object.defineProperty(e.InvertFilter.prototype,"invert",{get:function(){return this.uniforms.invert.value},set:function(a){this.uniforms.invert.value=a}}),e.SepiaFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={sepia:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float sepia;","uniform sampler2D uSampler;","const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);","}"]},e.SepiaFilter.prototype=Object.create(e.AbstractFilter.prototype),e.SepiaFilter.prototype.constructor=e.SepiaFilter,Object.defineProperty(e.SepiaFilter.prototype,"sepia",{get:function(){return this.uniforms.sepia.value},set:function(a){this.uniforms.sepia.value=a}}),e.TwistFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={radius:{type:"1f",value:.5},angle:{type:"1f",value:5},offset:{type:"2f",value:{x:.5,y:.5}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float radius;","uniform float angle;","uniform vec2 offset;","void main(void) {","   vec2 coord = vTextureCoord - offset;","   float distance = length(coord);","   if (distance < radius) {","       float ratio = (radius - distance) / radius;","       float angleMod = ratio * ratio * angle;","       float s = sin(angleMod);","       float c = cos(angleMod);","       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);","   }","   gl_FragColor = texture2D(uSampler, coord+offset);","}"]},e.TwistFilter.prototype=Object.create(e.AbstractFilter.prototype),e.TwistFilter.prototype.constructor=e.TwistFilter,Object.defineProperty(e.TwistFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(a){this.dirty=!0,this.uniforms.offset.value=a}}),Object.defineProperty(e.TwistFilter.prototype,"radius",{get:function(){return this.uniforms.radius.value},set:function(a){this.dirty=!0,this.uniforms.radius.value=a}}),Object.defineProperty(e.TwistFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(a){this.dirty=!0,this.uniforms.angle.value=a}}),e.ColorStepFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={step:{type:"1f",value:5}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float step;","void main(void) {","   vec4 color = texture2D(uSampler, vTextureCoord);","   color = floor(color * step) / step;","   gl_FragColor = color;","}"]},e.ColorStepFilter.prototype=Object.create(e.AbstractFilter.prototype),e.ColorStepFilter.prototype.constructor=e.ColorStepFilter,Object.defineProperty(e.ColorStepFilter.prototype,"step",{get:function(){return this.uniforms.step.value},set:function(a){this.uniforms.step.value=a}}),e.DotScreenFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float angle;","uniform float scale;","float pattern() {","   float s = sin(angle), c = cos(angle);","   vec2 tex = vTextureCoord * dimensions.xy;","   vec2 point = vec2(","       c * tex.x - s * tex.y,","       s * tex.x + c * tex.y","   ) * scale;","   return (sin(point.x) * sin(point.y)) * 4.0;","}","void main() {","   vec4 color = texture2D(uSampler, vTextureCoord);","   float average = (color.r + color.g + color.b) / 3.0;","   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);","}"]},e.DotScreenFilter.prototype=Object.create(e.DotScreenFilter.prototype),e.DotScreenFilter.prototype.constructor=e.DotScreenFilter,Object.defineProperty(e.DotScreenFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(a){this.dirty=!0,this.uniforms.scale.value=a}}),Object.defineProperty(e.DotScreenFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(a){this.dirty=!0,this.uniforms.angle.value=a}}),e.CrossHatchFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);","    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);","    if (lum < 1.00) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.75) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.50) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.3) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","}"]},e.CrossHatchFilter.prototype=Object.create(e.AbstractFilter.prototype),e.CrossHatchFilter.prototype.constructor=e.BlurYFilter,Object.defineProperty(e.CrossHatchFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),e.RGBSplitFilter=function(){e.AbstractFilter.call(this),this.passes=[this],this.uniforms={red:{type:"2f",value:{x:20,y:20}},green:{type:"2f",value:{x:-20,y:20}},blue:{type:"2f",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 red;","uniform vec2 green;","uniform vec2 blue;","uniform vec4 dimensions;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;","   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;","   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;","   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;","}"]},e.RGBSplitFilter.prototype=Object.create(e.AbstractFilter.prototype),e.RGBSplitFilter.prototype.constructor=e.RGBSplitFilter,Object.defineProperty(e.RGBSplitFilter.prototype,"angle",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(a){this.uniforms.blur.value=1/7e3*a}}),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=e),exports.PIXI=e):"undefined"!=typeof define&&define.amd?define(e):d.PIXI=e}).call(this);
var GoodBoySplash = (function()
{
    var paperView = false;
    var paperStage = false;
	var paperRenderer = false;
    var loaded = false;
    var interval = false;
    
    var nStageWidth = 0;
    var nStageHeight = 0;
    
    var loadingFrames = [
        "img/loading_01.png",
        "img/loading_02.png",
        "img/loading_03.png",
        "img/loading_04.png",
        "img/goodboy_logo.png"
    ];
    
    
    function preload(fCallBack)
    {
        assetLoader = new PIXI.AssetLoader(loadingFrames, true);
        assetLoader.onComplete = fCallBack;
        assetLoader.load();
    }
    
    function init()
    {
        paperView = document.createElement('canvas');
        paperStage = new PIXI.Stage(0x25284A, true);
        paperRenderer = PIXI.autoDetectRenderer(nStageWidth, nStageHeight, paperView);
        
        document.body.appendChild(paperRenderer.view);
        
        preload(function()
        {
            var tick = 0;
            
            interval = setInterval(function()
            {
                tick++;
                if(tick === loadingFrames.length)
                {
                    tick = 0;
                }
                
                paperStage.stage.children = [];
                
                var sprite = SpritePool.getInstance().get(loadingFrames[tick])
                    sprite.anchor.x = 0.5;
                    sprite.anchor.y = 0.5;
                    sprite.position.x = nStageWidth * 0.5;
                    sprite.position.y = nStageHeight * 0.5;
                    sprite.scale.set(1);
                 
                paperStage.addChild(sprite);
                paperRenderer.render(paperStage);
                
            }, 200);
        });
    }
    
    
    function show()
    {
        
    }
    
    function hide()
    {
        clearInterval(interval);
        for (var i = 1; i <= 100; i++) {
            setTimeout((function (x) {
                return function () {
                    fadeOutStep(100-x)
                };
            })(i), i * 10);
        }
    }
    
    function fadeOutStep(nOpacity)
    {
        paperRenderer.view.style.opacity = nOpacity;
        if(nOpacity === 0)
        {
            document.body.removeChild(paperRenderer.view);
        }
    }
    
    function resize(nWidth, nHeight)
    {
        nStageWidth = nWidth;
        nStageHeight = nHeight;
        
        paperRenderer.view.style.width = nStageWidth + "px";
        paperRenderer.view.style.height = nStageHeight + "px";
        
        paperRenderer.resize(nStageWidth, nStageHeight);
    }
    
    return {
        resize : resize,
        init : init,
        hide : hide
    }
})();

/***********
 *SpritePool
 */
function SpritePool ()
{
    if (SpritePool._isBirth)
        throw new Error("This class is a singleton!");
    else
    {
        SpritePool._instance = this;
        SpritePool._isBirth = true;
    };
    var _pool = [];
    this.get = function (frameId)
    {
        for (var i in _pool)
        {
            if (_pool[i].texture === PIXI.TextureCache[frameId])
            return _pool.splice(i, 1)[0];
        }
        return PIXI.Sprite.fromFrame(frameId);
    };
    this.recycle = function (sprite)
    {
        _pool.push(sprite);
    }
};
SpritePool._isBirth = false;
SpritePool.getInstance = function ()
{
    return SpritePool._instance != null ? SpritePool._instance : new SpritePool();
};
var Fido = Fido || {};

Fido.Device = function()
{
    this.arora = false;
    this.chrome = false;
    this.epiphany = false;
    this.firefox = false;
    this.mobileSafari = false;
    this.ie = false;
    this.ieVersion = 0;
    this.midori = false;
    this.opera = false;
    this.safari = false;
    this.webApp = false;
    this.cocoonJS = false;
    this.android = false;
    this.chromeOS = false;
    this.iOS = false;
    this.linux = false;
    this.macOS = false;
    this.windows = false;
    this.desktop = false;
    this.pixelRatio = 0;
    this.iPhone = false;
    this.iPhone4 = false;
    this.iPad = false;
    this.blob = false;
    this.canvas = false;
    this.localStorage = false;
    this.file = false;
    this.fileSystem = false;
    this.webGL = false;
    this.worker = false;
    this.audioData = false;
    this.webAudio = false;
    this.ogg = false;
    this.opus = false;
    this.mp3 = false;
    this.wav = false;
    this.m4a = false;
    this.webm = false;
    
    var ua = navigator.userAgent;
    
    this._checkBrowser(ua);
    this._checkOS(ua);
    this._checkDevice(ua);
    this._checkAudio();
    this._checkFeatures();
};

Fido.Device.prototype._checkBrowser = function(ua)
{
    if (/Arora/.test(ua)) 
    {
        this.arora = true;
    } 
    else if (/Chrome/.test(ua)) 
    {
        this.chrome = true;
    } 
    else if (/Epiphany/.test(ua)) 
    {
        this.epiphany = true;
    } 
    else if (/Firefox/.test(ua)) 
    {
        this.firefox = true;
    } 
    else if (/Mobile Safari/.test(ua)) 
    {
        this.mobileSafari = true;
    } 
    else if (/MSIE (\d+\.\d+);/.test(ua)) 
    {
        this.ie = true;
        this.ieVersion = parseInt(RegExp.$1, 10);
    } 
    else if (/Midori/.test(ua)) 
    {
        this.midori = true;
    } 
    else if (/Opera/.test(ua)) 
    {
        this.opera = true;
    } 
    else if (/Safari/.test(ua)) 
    {
        this.safari = true;
    }

    // Native Application
    if (navigator['standalone']) 
    {
        this.webApp = true;
    }

    // CocoonJS Application
    if (navigator['isCocoonJS']) 
    {
        this.cocoonJS = true;
    }
}

Fido.Device.prototype._checkOS = function(ua) 
{
    if (/Android/.test(ua)) 
    {
        this.android = true;
    } 
    else if (/CrOS/.test(ua)) 
    {
        this.chromeOS = true;
    } 
    else if (/iP[ao]d|iPhone/i.test(ua)) 
    {
        this.iOS = true;
    } 
    else if (/Linux/.test(ua)) 
    {
        this.linux = true;
    } 
    else if (/Mac OS/.test(ua)) 
    {
        this.macOS = true;
    } 
    else if (/Windows/.test(ua)) 
    {
        this.windows = true;
    }

    if (this.windows || this.macOS || this.linux) 
    {
        this.desktop = true;
    }
}

Fido.Device.prototype._checkDevice = function()
{
    this.pixelRatio = window['devicePixelRatio'] || 1;
    this.iPhone = navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
    this.iPhone4 = (this.pixelRatio === 2 && this.iPhone);
    this.iPad = navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
}

Fido.Device.prototype._checkFeatures = function()
{
    if (typeof window['Blob'] !== 'undefined') this.blob = true;

    this.canvas = !!window['CanvasRenderingContext2D'];

    try
    {
        this.localStorage = !!localStorage.getItem;
    }
    catch (error)
    {
        this.localStorage = false;
    }

    this.file = !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
    this.fileSystem = !!window['requestFileSystem'];
    this.webGL = !!window['WebGLRenderingContext'];
    this.worker = !!window['Worker'];

    if ('ontouchstart' in document.documentElement || window.navigator.msPointerEnabled)
    {
        this.touch = true;
    }
}

Fido.Device.prototype._checkAudio = function()
{
    this.audioData = !!(window['Audio']);
    this.webaudio = !!(window['webkitAudioContext'] || window['AudioContext']);

    var audioElement = document.createElement('audio');
    var result = false;
    try
    {
        if (result = !!audioElement.canPlayType)
        {
            if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''))
            {
                this.ogg = true;
            }

            if (audioElement.canPlayType('audio/mpeg;').replace(/^no$/, ''))
            {
                this.mp3 = true;
            }

            // Mimetypes accepted:
            //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
            //   bit.ly/iphoneoscodecs
            if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''))
            {
                this.wav = true;
            }

            if (audioElement.canPlayType('audio/x-m4a;') || audioElement.canPlayType('audio/aac;').replace(/^no$/, ''))
            {
                this.m4a = true;
            }
        }
    } 
    catch (e) { }
}

Fido.Device.prototype.getInfo = function()
{
    var output = "DEVICE OUTPUT\n\n";
    
    output += "---\n";
    output += "Browser Info :: \n";
    output += "Arora : " + this.arora + "\n";
    output += "Chrome : " + this.chrome + "\n";
    output += "Epiphany : " + this.epiphany + "\n";
    output += "Firefox : " + this.firefox + "\n";
    output += "Mobile Safari : " + this.mobileSafari + "\n";
    output += "IE : " + this.ie;
    
    if(this.ie)
    {
        output += " (Version " + this.ieVersion + ")\n";
    }
    else
    {
        output += "\n";
    }
    
    output += "Midori : " + this.midori + "\n";
    output += "Opera : " + this.opera + "\n";
    output += "Safari : " + this.safari + "\n";
    output += "Web App : " + this.webApp + "\n";
    output += "CocoonJS : " + this.cocoonJS + "\n";
    output += "Android : " + this.android + "\n";
    output += "---\n";
    output += "Operating System :: \n";
    output += "Chrome OS : " + this.chromeOS + "\n";
    output += "iOS : " + this.iOS + "\n";
    output += "Linux : " + this.linux + "\n";
    output += "Mac OS : " + this.macOS + "\n";
    output += "Windows : " + this.windows + "\n";
    output += "Desktop : " + this.desktop + "\n";
    output += "---\n";
    output += "Device Type : \n";
    output += "Pixel Ratio : " + this.pixelRatio + "\n";
    output += "iPhone : " + this.iPhone + "\n";
    output += "iPhone 4 : " + this.iPhone4 + "\n";
    output += "iPad : " + this.iPad + "\n";
    output += "---\n";
    output += "Features :: \n";
    output += "Blob : " + this.blob + "\n";
    output += "Canvas : " + this.canvas + "\n";
    output += "LocalStorage : " + this.localStorage + "\n";
    output += "File : " + this.file + "\n";
    output += "File System : " + this.fileSystem + "\n";
    output += "WebGL : " + this.webGL + "\n";
    output += "Workers : " + this.worker + "\n";
    output += "---\n";
    output += "Audio :: \n";
    output += "AudioData : " + this.audioData + "\n";
    output += "WebAudio : " + this.webAudio + "\n";
    output += "Supports .ogg : " + this.ogg + "\n";
    output += "Supports Opus : " + this.opus + "\n";
    output += "Supports .mp3 : " + this.mp3 + "\n";
    output += "Supports .wav : " + this.wav + "\n";
    output += "Supports .m4a : " + this.m4a + "\n";
    output += "Supports .webm : " + this.webm;
    
    return output;
};
var Fido = Fido || {};

Fido.LocalStorage = function(bundleId)
{
    this.id = bundleId;
}

Fido.LocalStorage.prototype.store = function(key, value) 
{
    localStorage.setItem(this.id + '.' + key, value);
}

Fido.LocalStorage.prototype.get = function(key) 
{
    return localStorage.getItem(this.id + '.' + key) || 0;
}

Fido.LocalStorage.prototype.remove = function(key)
{
    localStorage.removeItem(this.id + '.' + key);
}

Fido.LocalStorage.prototype.reset = function() 
{
    for(var i in localStorage) 
    {
        if(i.indexOf(this.id + '.') !== -1) localStorage.removeItem(i);
    }
};
var FidoAudio = (function()
{    
    var cSoundPool = {};
    var DEFAULT_FADE_OUT_TIME = 1;
    var DEFAULT_FADE_IN_TIME = 1;
    var MUTE_ALL = false;
    
    var Device = new Fido.Device();
    var LocalStorage = new Fido.LocalStorage();
    
    var aSounds = [
        {
            src : 'audio/mainLoop',
            volume: 0.6,
            maxVolume: 0.6,
            loop: true,
            autoPlay: false,
            type : 'music',
            name : 'gameMusic'
        },
        {
            src : 'audio/footLoopRegular',
            volume: 0.0,
            maxVolume: 0.6,
            loop: true,
            autoPlay: false,
            type : 'music',
            name : 'runRegular'
        },
        {
            src : 'audio/footLoopFast',
            volume: 0.0,
            maxVolume: 0.6,
            loop: true,
            autoPlay: false,
            type : 'music',
            name : 'runFast'
        },
        {
            src : 'audio/thrustLoop',
            volume: 0.0,
            maxVolume: 0.4,
            loop: true,
            autoPlay: true,
            type : 'music',
            name : 'thrusters'
        },
        {
            src : 'audio/pickupGrab',
            volume: 0.5,
            maxVolume: 0.5,
            loop: false,
            autoPlay: false,
            type : 'sfx',
            name : 'pickup'
        },
        {
            src : 'audio/blockHit',
            volume: 0.2,
            maxVolume: 0.2,
            loop: false,
            autoPlay: false,
            type : 'sfx',
            name : 'blockHit'
        },
        {
            src : 'audio/lavaSplosh',
            volume: 0.5,
            maxVolume: 0.5,
            loop: false,
            autoPlay: false,
            type : 'sfx',
            name : 'lavaSplosh'
        },
        {
            src : 'audio/fallThud',
            volume: 1.0,
            maxVolume: 1.0,
            loop: false,
            autoPlay: false,
            type : 'sfx',
            name : 'thudBounce'
        },
        {
            src : 'audio/DeathJingle',
            volume: 0.7,
            maxVolume: 0.7,
            loop: false,
            autoPlay: false,
            type : 'sfx',
            name : 'deathJingle'
        },
        {
            src : 'audio/hyperMode',
            volume: 0.2,
            maxVolume: 0.2,
            loop: false,
            autoPlay: false,
            type : 'sfx',
            name : 'hyperMode'
        }
    ];

    function init()
    {   
        if(Device.cocoonJS === true)
        {
            for(var i = 0; i < aSounds.length; i++)
            {
                var cSound = aSounds[i];
                
                switch(cSound.type)
                {
                    case 'music':
                        
                        CocoonJS.App.markAsMusic(cSound.src + ".ogg");

                        var music = document.createElement('audio');
                        music.src = cSound.src + ".ogg";
                        music.loop = cSound.loop;
                        
                        cSound.audio = new CocoonJS.Music().setAudio(music);
                        cSound.audio.volume(cSound.volume);
                        
                        cSoundPool[cSound.name] = cSound;
                  
                        if(cSound.autoPlay === true) cSoundPool[cSound.name].audio.play();
                        
                    break;
                    
                    case 'sfx':
                        
                        var sfx = new Audio();
                        sfx.src = cSound.src + ".ogg";
                        cSound.audio = new CocoonJS.Audio().setAudio(sfx);
                        cSound.audio.volume(cSound.volume);
                        
                        cSoundPool[cSound.name] = cSound;
                        
                    break;
                }
            } 
        }
        else
        {
            for(var i = 0; i < aSounds.length; i++)
            {
                var cSound = aSounds[i];
                 
                cSound.audio = new Howl({
                    urls: [cSound.src + ".mp3"],
                    autoplay: cSound.autoPlay,
                    loop: cSound.loop,
                    volume: cSound.volume,
                    onload: function()
                    {
                        //alert('loaded');
                    },
                    onend: function()
                    {
                        //alert('finished playing sound');
                    },
                    onloaderror: function()
                    {
                        alert('ERROR : Failed to load ' + cSound.src + ".m4a");
                    },
                    onplay: function()
                    {
                        //alert('playing');
                    }
                });
                 
                cSoundPool[cSound.name] = cSound;
            }
        }

        if(LocalStorage.get('gameMuted') === 'true') FidoAudio.muteAll();
    }
    
    function isMuted()
    {
        return MUTE_ALL;
    }
    
    function muteAll()
    {   
        MUTE_ALL = true;
        LocalStorage.store('gameMuted', true);
        
        if(Device.cocoonJS === true)
        {
            var sKey = false;
            
            for(sKey in cSoundPool)
            {   
                var cSound = cSoundPool[sKey];
                
                var holder = {
                    volume:  cSound.audio.getVolume()
                };
                
                muteOneSound(cSound, holder);  
            }
        }
        else
        {
            var cHolder = { 
                volume: 1
            };

            TweenLite.to(cHolder, 1, { volume: 0, onUpdate: function()
            {  
                Howler.volume(this.target.volume);
            }, onComplete : function()
            {
                Howler.mute();
            }});
        }
    }
    
    function muteOneSound(cSound, holder)
    {
        TweenLite.to(holder, 1, { volume: 0, onUpdate: function()
        {  
            cSound.audio.volume(this.target.volume);
        }});    
    }
    
    function unMuteOneSound(cSound, holder)
    {
        TweenLite.to(holder, 1, { volume: cSound.volume, onUpdate: function()
        {  
            cSound.audio.volume(this.target.volume);
        }}); 
    }
    
    function unMuteAll()
    {
        MUTE_ALL = false;
        LocalStorage.store('gameMuted', false)
        
        if(Device.cocoonJS === true)
        {
            var sKey = false;

            for(sKey in cSoundPool)
            {
                var cSound = cSoundPool[sKey];
                unMuteOneSound(cSound, { 
                    volume: 0 
                });
            }
        }
        else
        {
            var cHolder = { 
                volume: 0
            };
            
            Howler.unmute();
            
            TweenLite.to(cHolder, 1, { volume: 1, onUpdate: function(cObject, sProperty)
            {  
                Howler.volume(this.target.volume);
            }});
        }
    }
    
    function play(id)
    {
        if(cSoundPool.hasOwnProperty(id))
        {
            cSoundPool[id].audio.play();
            
        }
        else
        {
            console.log("WARNING :: Couldn't find sound '" + id + "'.");
        }
    }
    
    function fadeOut(sKey)
    {
        var cSound = cSoundPool[sKey];
                
        var holder = {
            volume:  0
        };

        muteOneSound(cSound, holder); 
    }
    
    function fadeIn(id, time)
    {
        if(!soundExists(id)) return;
        
        var cSound = cSoundPool[id];
        var nFadeInTime = time || DEFAULT_FADE_IN_TIME;
        
        var cHolder = { 
            volume: 0
        };
        
        TweenLite.to(cHolder, nFadeInTime, { volume: cSound.maxVolume, onUpdate: function(cObject, sProperty)
        {  
            setVolume(id, this.target.volume);
        }});
    }
    
    function soundExists(id)
    {
        return cSoundPool.hasOwnProperty(id);
    }
    
    function setVolume(id, volume)
    {
        if(!soundExists(id)) return;
        
        if(MUTE_ALL === true)
        {
            cSoundPool[id].volume = volume;    
        }
        else
        {
            cSoundPool[id].audio.volume(volume);
        }
    }
    
    function stop(id)
    {
        cSoundPool[id].audio.stop();
    }
    
    return {
        init: init,
        play: play,
        stop : stop,
        fadeOut : fadeOut,
        fadeIn : fadeIn,
        setVolume : setVolume,
        muteAll : muteAll,
        unMuteAll : unMuteAll,
        isMuted : isMuted
    }
    
})();
(function()
{
	// There should not be a CocoonJS object when this code is executed.
	// if (typeof window.CocoonJS !== 'undefined') throw("This is strange, a CocoonJS object already exists when trying to create it.");

    /**
    * The basic object for all the CocoonJS related specific APIs === extensions.
    * @namespace
    */
    CocoonJS = window.CocoonJS ? window.CocoonJS : {};

	CocoonJS.nativeExtensionObjectAvailable = typeof window.ext !== 'undefined';

	/**
	* This type represents a 2D size structure with horizontal and vertical values.
	* @namespace
	*/
	CocoonJS.Size = {
		/**
		* The horizontal size value.
		*/
		width : 0,

		/**
		* The vertical size value.
		*/
		height : 0
	};

	/**
	* This utility function allows to create an object oriented like hierarchy between two functions using their prototypes.
	* This function adds a "superclass" and a "__super" attributes to the subclass and it's functions to reference the super class.
	* @param {function} subc The subclass function.
	* @param {function} superc The superclass function.
	*/
	CocoonJS.extend = function(subc, superc) {
	    var subcp = subc.prototype;

	    // Class pattern.
	    var CocoonJSExtendHierarchyChainClass = function() {};
	    CocoonJSExtendHierarchyChainClass.prototype = superc.prototype;

	    subc.prototype = new CocoonJSExtendHierarchyChainClass();       // chain prototypes.
	    subc.superclass = superc.prototype;
	    subc.prototype.constructor = subc;

	    // Reset constructor. See Object Oriented Javascript for an in-depth explanation of this.
	    if (superc.prototype.constructor === Object.prototype.constructor) {
	        superc.prototype.constructor = superc;
	    }

	    // Check all the elements in the subclass prototype and add them to the chain object's prototype.
	    for (var method in subcp) {
	        if (subcp.hasOwnProperty(method)) {
	            subc.prototype[method] = subcp[method];

	            // // tenemos en super un metodo con igual nombre.
	            // if ( superc.prototype[method]) 
	            // {
	            //     subc.prototype[method]= (function(fn, fnsuper) 
	            //     {
	            //         return function() 
	            //         {
	            //             var prevMethod= this.__super;

	            //             this.__super= fnsuper;

	            //             var retValue= fn.apply(
	            //                     this,
	            //                     Array.prototype.slice.call(arguments) );

	            //             this.__super= prevMethod;

	            //             return retValue;
	            //         };
	            //     })(subc.prototype[method], superc.prototype[method]);
	            // }
	        }
	    }
	}

	/**
	* IMPORTANT: This function should only be used by Ludei.
	* This function allows a call to the native extension object function reusing the same arguments object.
	* Why is interesting to use this function instead of calling the native object's function directly?
	* As the CocoonJS object functions expicitly receive parameters, if they are not present and the native call is direcly mapped,
	* undefined arguments are passed to the native side. Some native functions do not check the parameters validation
	* correctly (just check the number of parameters passed).
	* Another solution instead of using this function call is to correctly check if the parameters are valid (not undefined) to make the
	* call, but it takes more work than using this approach.
	* @static
	* @param {string} nativeExtensionObjectName The name of the native extension object name. The object that is a member of the 'ext' object.
	* @param {string} nativeFunctionName The name of the function to be called inside the native extension object.
	* @param {object} arguments The arguments object of the CocoonJS extension object function. It contains all the arguments passed to the CocoonJS extension object function and these are the ones that will be passed to the native call too.
	* @param {boolean} [async] A flag to indicate if the makeCall (false or undefined) or the makeCallAsync function should be used to perform the native call.
	* @returns Whatever the native function call returns.
	*/
	CocoonJS.makeNativeExtensionObjectFunctionCall = function(nativeExtensionObjectName, nativeFunctionName, args, async) {
		if (CocoonJS.nativeExtensionObjectAvailable) {
			var argumentsArray = Array.prototype.slice.call(args);
			argumentsArray.unshift(nativeFunctionName);
			var nativeExtensionObject = ext[nativeExtensionObjectName];
			var makeCallFunction = async ? nativeExtensionObject.makeCallAsync : nativeExtensionObject.makeCall;
			var ret = makeCallFunction.apply(nativeExtensionObject, argumentsArray);
			var finalRet = ret;
			if (typeof ret === "string") {
				try	{
					finalRet = JSON.parse(ret);
				}
				catch(error) {
				}
			}
			return finalRet;
		}
	};

	/**
	* Returns an object retrieved from a path specified by a dot specified text path starting from a given base object.
	* It could be useful to find the reference of an object from a defined base object. For example the base object could be window and the
	* path could be "CocoonJS.App" or "document.body".
	* @param {Object} baseObject The object to start from to find the object using the given text path.
	* @param {string} objectPath The path in the form of a text using the dot notation. i.e. "document.body"
	* For example:
	* var body = getObjectFromPath(window, "document.body");
	*/
	CocoonJS.getObjectFromPath = function(baseObject, objectPath) {
    	var parts = objectPath.split('.');
    	var obj = baseObject;
        for (var i = 0, len = parts.length; i < len; ++i) 
        {
            obj[parts[i]] = obj[parts[i]] || undefined;
    		obj = obj[parts[i]];
    	}
    	return obj;
 	};

 	/**
 	* Returns the key for a value in a dictionary. It looks for an specific value inside a dictionary and returns the corresponding key.
 	* @param {Object} dictionary The dictionary to look for the value in and get the corresponding key.
 	* @param {Object} value The value to look for inside the dictionary and return it's corresponding key.
 	* @return The key that corresponds to the given value it is has been found or null.
 	*/
 	CocoonJS.getKeyForValueInDictionary = function(dictionary, value) {
        var finalKey = null;
        for (var key in dictionary) {
            if (dictionary[key] === value)            {
                finalKey = key;
                break;
            }
        }
        return finalKey;
 	}

 	/**
 	* Finds a string inside a given array of strings by looking for a given substring. It can also
 	* specify if the search must be performed taking care or not of the case sensitivity.
 	* @param {Array} stringArray The array of strings in which to to look for the string.
 	* @param {string} subString The substring to look for inside all the strings of the array.
 	* @param {boolean} caseSensitive A flag to indicate if the search must be performed taking case of the 
 	* case sensitiveness (true) or not (false).
 	* @return {string} The string that has been found or null if the substring is not inside any of the string of the array.
 	*/
 	CocoonJS.findStringInStringArrayThatIsIndexOf = function(stringArray, subString, caseSensitive) {
 		var foundString = null;
 		subString = caseSensitive ? subString : subString.toUpperCase();
 		for (var i = 0; foundString == null && i < stringArray.length; i++)	{
 			foundString = caseSensitive ? stringArray[i] : stringArray[i].toUpperCase();
 			foundString = foundString.indexOf(subString) >= 0 ? stringArray[i] : null; 
 		}
 		return foundString;
 	};

	/**
	* A class that represents objects to handle events. Event handlers have always the same structure:
	* Mainly they provide the addEventListener and removeEventListener functions.
	* Both functions receive a callback function that will be added or removed. All the added callback
	* functions will be called when the event takes place.
	* Additionally they also allow the addEventListenerOnce and notifyEventListeners functions.
	* @constructor
	* @param {string} nativeExtensionObjectName The name of the native extension object (inside the ext object) to be used.
	* @param {string} cocoonJSExtensionObjectName The name of the sugarized extension object.
	* @param {string} nativeEventName The name of the native event inside the ext object.
	* @param {number} [chainFunction] An optional function used to preprocess the listener callbacks. This function, if provided,
	* will be called before any of the other listeners.
	*/
	CocoonJS.EventHandler = function(nativeExtensionObjectName, cocoonJSExtensionObjectName, nativeEventName, chainFunction) {
		this.listeners = [];
		this.listenersOnce = [];
		this.chainFunction = chainFunction;

		/**
		* Adds a callback function so it can be called when the event takes place.
		* @param {function} listener The callback function to be added to the event handler object. See the referenced Listener function documentation for more detail in each event handler object's documentation.
		*/
		this.addEventListener = function(listener) {
			if (chainFunction) {
				var f = function() {
					chainFunction.call(this, arguments.callee.sourceListener, Array.prototype.slice.call(arguments)); 
				};
				listener.CocoonJSEventHandlerChainFunction = f;
				f.sourceListener = listener;
				listener = f;
			}

			var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject && cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].addEventListener(nativeEventName, listener);
            }
            else {
                var indexOfListener = this.listeners.indexOf(listener);
                if (indexOfListener < 0) {
                	this.listeners.push(listener);
                }
            }
		};

        this.addEventListenerOnce = function(listener)
		{
			if (chainFunction) {
				var f = function() { chainFunction(arguments.callee.sourceListener,Array.prototype.slice.call(arguments)); };
				f.sourceListener = listener;
				listener = f;
			}

			var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].addEventListenerOnce(nativeEventName, listener);
            }
            else
            {
                var indexOfListener = this.listeners.indexOf(listener);
                if (indexOfListener < 0)
                {
                	this.listenersOnce.push(listener);
                }
            }
		};

        /**
         * Removes a callback function that was added to the event handler so it won't be called when the event takes place.
         * @param {function} listener The callback function to be removed from the event handler object. See the referenced Listener function documentation for more detail in each event handler object's documentation.
         */
        this.removeEventListener = function (listener) {

        	if (chainFunction) {
        		listener = listener.CocoonJSEventHandlerChainFunction;
        		delete listener.CocoonJSEventHandlerChainFunction;
        	}

			var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].removeEventListener(nativeEventName, listener);
            }
            else {
                var indexOfListener = this.listeners.indexOf(listener);
                if (indexOfListener >= 0) {
                    this.listeners.splice(indexOfListener, 1);
                }
            }
        };

		this.notifyEventListeners = function() {
			var cocoonJSExtensionObject = CocoonJS.getObjectFromPath(CocoonJS, cocoonJSExtensionObjectName);
            if (cocoonJSExtensionObject && cocoonJSExtensionObject.nativeExtensionObjectAvailable) {
                ext[nativeExtensionObjectName].notifyEventListeners(nativeEventName);
            } else {

                var argumentsArray= Array.prototype.slice.call(arguments);
                var listeners =     Array.prototype.slice.call(this.listeners);
                var listenersOnce = Array.prototype.slice.call(this.listenersOnce);
                var _this = this;
                // Notify listeners after a while ;) === do not block this thread.
                setTimeout(function() {
                    for (var i = 0; i < listeners.length; i++) {
                        listeners[i].apply(_this, argumentsArray);
                    }
                    for (var i = 0; i < listenersOnce.length; i++) {
                        listenersOnce[i].apply(_this, argumentsArray);
                    }
                }, 0);

                _this.listenersOnce= [];
            }
		};
		return this;
	};

	/**
	* A simple timer class. Update it every loop iteration and get values from accumulated time to elapsed time in seconds or milliseconds.
	*/
	CocoonJS.Timer = function() {
		this.reset();
		return this;
	};

	CocoonJS.Timer.prototype = {
		currentTimeInMillis : 0,
		lastTimeInMillis : 0,
		elapsedTimeInMillis : 0,
		elapsedTimeInSeconds : 0,
		accumTimeInMillis : 0,

		/**
		Resets the timer to 0.
		*/
		reset : function() {
			this.currentTimeInMillis = this.lastTimeInMillis = new Date().getTime();
			this.accumTimeInMillis = this.elapsedTimeInMillis = this.elapsedTimeInSeconds = 0;
		},

		/**
		Updates the timer calculating the elapsed time between update calls.
		*/
		update : function() {
			this.currentTimeInMillis = new Date().getTime();
			this.elapsedTimeInMillis = this.currentTimeInMillis - this.lastTimeInMillis;
			this.elapsedTimeInSeconds = this.elapsedTimeInMillis / 1000.0;
			this.lastTimeInMillis = this.currentTimeInMillis;
			this.accumTimeInMillis += this.elapsedTimeInMillis;
		}
	};

	// CocoonJS.FindAllNativeBindingsInCocoonJSExtensionObject = function(cocoonJSExtensionObject, nativeFunctionBindingCallback, nativeEventBindingCallback)
	// {
	// 	for (var cocoonJSExtensionObjectAttributeName in cocoonJSExtensionObject)
	// 	{
	// 		var cocoonJSExtensionObjectAttribute = cocoonJSExtensionObject[cocoonJSExtensionObjectAttributeName];

	// 		// Function
	// 		if (typeof cocoonJSExtensionObjectAttribute === 'function' && typeof cocoonJSExtensionObjectAttribute.nativeFunctionName !== 'undefined')
	// 		{
	// 			var nativeFunctionName = cocoonJSExtensionObjectAttribute.nativeFunctionName;
	// 			nativeFunctionBindingCallback(cocoonJSExtensionObjectAttributeName, nativeFunctionName);
	// 		}
	// 		// Event object
	// 		else if (typeof cocoonJSExtensionObjectAttribute === 'object' && cocoonJSExtensionObjectAttribute !== null && typeof cocoonJSExtensionObjectAttribute.nativeEventName !== 'undefined')
	// 		{
	// 			var nativeEventName = cocoonJSExtensionObjectAttribute.nativeEventName;
	// 			nativeEventBindingCallback(cocoonJSExtensionObjectAttributeName, nativeEventName);
	// 		}
	// 	}
	// }

	/**
	This function looks for a CocoonJS extension object that is bound to the given native ext object name.
	@returns The CocoonJS extension object that corresponds to the give native extension object name or null if it cannot be found.
	*/
	// CocoonJS.GetCocoonJSExtensionObjectForNativeExtensionObjectName = function(nativeExtensionObjectName)
	// {
	// 	var cocoonJSExtensionObject = null;
	// 	// Look in the CocoonJS object and for every object that is a CocoonJS.Extension check if it's nativeExtensionObjectName matches to the one passed as argument. If so, create an object that will represent it's documentation for the native ext object.
	// 	for (var cocoonJSAttributeName in CocoonJS)
	// 	{
	// 		var cocoonJSAttribute = CocoonJS[cocoonJSAttributeName];
	// 		if (typeof cocoonJSAttribute === 'object' && cocoonJSAttribute instanceof CocoonJS.Extension && cocoonJSAttribute.nativeExtensionObjectName === nativeExtensionObjectName)
	// 		{
	// 			// We have found the CocoonJS object that represents the native ext extension object name. 
	// 			cocoonJSExtensionObject = cocoonJSAttribute;
	// 			break;
	// 		}
	// 	}
	// 	return cocoonJSExtensionObject;
	// };

	/**
	This function adds functions to a CocoonJS extension object in order to bind them to the native makeCall function calls of the ext object.

	@param extensionObject The reference to the CocoonJS extension object where to add the new functions bound to the ext object makeCall functions calls.

	@param nativeFunctionsConfiguration An array of objects with the following structure:

		{ nativeFunctionName : "" [, functionName : "", isAsync : true/false] }

		- nativeFunctionName: Specifies the name of the function inside the ext object makeCall function call that will be bound.
		- functionName: An optional attribute that allows to specify the name of the function to be added to the CocoonJS extension object. If is not present, the name of the function will be the same
		as the nativeFunctionName.
		- isAsync: An optional attribute that allows to specify if the call should be performed using makeCall (false or missing) or makeCallAsync (true).
		- alternativeFunction: An optional attribute that allows to specify an alternative function that will be called internally when this function is called. This attribute
		allows for adding new functionalities like for example adding methods 

	@returns The CocoonJS extension object.
	*/
	// CocoonJS.AddNativeFunctionBindingsToExtensionObject = function(extensionObject, nativeFunctionsConfiguration)
	// {
	// 	if (typeof extensionObject === 'undefined' || extensionObject === null) throw("The passed extension object be a valid object.");
	// 	if (typeof nativeFunctionsConfiguration === 'undefined' || nativeFunctionsConfiguration === null) throw("The passed native functions configuration array must be a valid object.");

	// 	for (var i = 0; i < nativeFunctionsConfiguration.length; i++)
	// 	{
	// 		if (typeof nativeFunctionsConfiguration[i].nativeFunctionName === 'undefined') throw("The 'nativeFunctionName' attribute in the native function configuration object at index '" + i + "' in the native function configuration array cannot be undefined.");
	// 		var nativeFunctionName = nativeFunctionsConfiguration[i].nativeFunctionName;
	// 		var functionName = typeof nativeFunctionsConfiguration[i].functionName !== 'undefined' ? nativeFunctionsConfiguration[i].functionName : nativeFunctionName;
	// 		var makeCallFunction = null;
	// 		makeCallFunction = typeof nativeFunctionsConfiguration[i].isAsync !== 'undefined' && nativeFunctionsConfiguration[i].isAsync ? extensionObject.nativeExtensionObject.makeCallAsync : extensionObject.nativeExtensionObject.makeCall;
	// 		// Add the new function to the CocoonJS extension object
	// 		extensionObject[functionName] = function()
	// 		{
	// 			// Convert the arguments object to an array
	// 			var arguments = Array.prototype.slice.call(arguments);
	// 			// Add the native function name as the first parameter
	// 			arguments.unshift(nativeFunctionName);
	// 			// Make the native ext object call
	// 			var result = makeCallFunction.apply(extensionObject.nativeExtensionObject, arguments);
	// 			return result;
	// 		}
	// 		// Add a property to the newly added function to store the name of the original function.
	// 		extensionObject[functionName].nativeFunctionName = nativeFunctionName;
	// 	}
	// 	return extensionObject;
	// };

	/**
	This function adds objects to a CocoonJS extension object to allow event listener handling (add and remove) bound to the native ext object event listener handling.

	@param extensionObject The reference to the CocoonJS extension object where to add the new objects bound to the ext object event listener handling.

	@param nativeEventsConfiguration An array of objects with the following structure:

		{ nativeEventName : "" [, eventObjectName : ""] }

		- nativeEventName: Specifies the event in the native ext object to be bound.
		- eventObjectName: An optional attribute that allows to specify the name of the object to be added to the CocoonJS extension object. If is not present, the name of the function will be the same
		as the nativeEventName.
		- alternativeAddEventListenerFunction:
		- alternativeRemoveEventListenerFunction:

	@returns The CocoonJS extension object.
	*/
	// CocoonJS.AddNativeEventBindingsToExtensionObject = function(extensionObject, nativeEventsConfiguration)
	// {
	// 	if (typeof extensionObject === 'undefined' || extensionObject === null) throw("The passed extension object be a valid object.");
	// 	if (typeof nativeEventsConfiguration === 'undefined' || nativeEventsConfiguration === null) throw("The passed native events configuration array must be a valid object.");

	// 	for (var i = 0; i < nativeEventsConfiguration.length; i++)
	// 	{
	// 		if (typeof nativeEventsConfiguration[i].nativeEventName === 'undefined') throw("The 'nativeEventName' attribute in the native event configuration object at index '" + i + "' in the native event configuration array cannot be undefined.");
	// 		var nativeEventName = nativeEventsConfiguration[i].nativeEventName;
	// 		var eventObjectName = typeof nativeEventsConfiguration[i].eventObjectName !== 'undefined' ? nativeEventsConfiguration[i].eventObjectName : nativeEventName;
	// 		// Anonymous function call so each variable in the loop is used in the event listener handling function bindings.
	// 		(function(nativeEventName, eventObjectName)
	// 		{
	//     		extensionObject[eventObjectName] =
	//     		{
	//     			// Store the native event name
	//     			nativeEventName : nativeEventName,
	//     			// Create the event listener management functions bound to the native counterparts
	//     			addEventListener : function(callback)
	// 	    		{
	// 	    			extensionObject.nativeExtensionObject.addEventListener(nativeEventName, callback);
	//     			},
	//     			removeEventListener : function(callback)
	//     			{
	// 	    			extensionObject.nativeExtensionObject.removeEventListener(nativeEventName, callback);
	//     			}
	//     			// ,
	//     			// removeAllEventListeners : function()
	//     			// {

	//     			// }
	//     		};
	// 		})(nativeEventName, eventObjectName);
	// 	}
	// 	return extensionObject;
	// };

	/**
	The function object constructor function all the CocoonJS extensions can use to instantiate the CocoonJS extension object and add all the functionality needed bound to the native ext object.

	@param nativeExtensionObject The reference to the ext object extension object.

	@param nativeFunctionsConfiguration See CocoonJS.AddNativeFunctionBindingsToExtensionObject function's documentation for more details.

	@param nativeEventsConfiguration See CocoonJS.AddNativeEventBindingsToExtensionObject function's documentation for more details.

	@returns The new CocoonJS extension object.
	*/
	// CocoonJS.Extension = function(nativeExtensionObjectName, nativeFunctionsConfiguration, nativeEventsConfiguration)
	// {
	// 	if (typeof nativeExtensionObjectName === 'undefined' || nativeExtensionObjectName === null) throw("The native extension object name cannot be null");

	// 	if (window.ext[nativeExtensionObjectName] === 'undefined') throw("The given native extension object name '" + nativeExtensionObjectName + "' is incorrect or the native extension object is undefined.");

	// 	var nativeExtensionObject = window.ext[nativeExtensionObjectName];

	// 	// Store a reference to the native extension object and to it's name
	// 	this.nativeExtensionObject = nativeExtensionObject;
	// 	this.nativeExtensionObjectName = nativeExtensionObjectName;

	// 	// If native function configuration is passed, use it to add some functions to the new extension object.
	// 	if (typeof nativeFunctionsConfiguration !== 'undefined')
	// 	{
	// 		CocoonJS.AddNativeFunctionBindingsToExtensionObject(this, nativeFunctionsConfiguration);
	// 	}

	// 	// If native event configuration is passed, use it to add some event objects to the new extension object.
	// 	if (typeof nativeEventsConfiguration !== 'undefined')
	// 	{
	// 		CocoonJS.AddNativeEventBindingsToExtensionObject(this, nativeEventsConfiguration);
	// 	}

	// 	return this;
	// };   

})();
(function () {
    // The CocoonJS must exist before creating the extension.
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw("The CocoonJS object must exist and be valid before creating any extension object.");

    /**
     * This namespace represents all the basic functionalities available in the CocoonJS extension API.
     * @namespace
     */
    CocoonJS.App = CocoonJS.App ? CocoonJS.App : {};

    CocoonJS.App.nativeExtensionObjectAvailable = CocoonJS.nativeExtensionObjectAvailable && typeof window.ext.IDTK_APP !== 'undefined';

    /**
     * The predefined possible layouts for the FPS overlay.
     * @namespace
     */
    CocoonJS.App.FPSLayout = {
        TOP_LEFT:'top-left',
        TOP_RIGHT:'top-right',
        BOTTOM_LEFT:'bottom-left',
        BOTTOM_RIGHT:'bottom-right'
    };

    /**
     * Contains all the possible values to specify the input keyboard type to be used when introducing text.
     * @namespace
     */
    CocoonJS.App.KeyboardType = {
        /**
         * Represents a generic text input keyboard.
         */
        TEXT:"text",

        /**
         * Represents a number like input keyboard.
         */
        NUMBER:"num",

        /**
         * Represents a phone like input keyboard.
         */
        PHONE:"phone",

        /**
         * Represents an email like input keyboard.
         */
        EMAIL:"email",

        /**
         * Represents an URL like input keyboard.
         */
        URL:"url"
    };

    /**
     * The storage types to be used with file system related operations.
     * @namespace
     */
    CocoonJS.App.StorageType = {
        /**
         * Represents the application storage. The application storage is the place where all the resources that come with the application are stored.
         */
        APP_STORAGE:"APP_STORAGE",

        /**
         * Represents the internal storage. The internal storage is a different storage space that the application storage and only the data that the application has stored
         * in it will be in this storage. It is internal to the platform/device.
         */
        INTERNAL_STORAGE:"INTERNAL_STORAGE",

        /**
         * Represents an external storage. The external storage is similar to the internal storage in the sense that it only contains information that the application has written
         * in it but it represents an external storage device like a SD-CARD. If there is no exrernal storage, it will represent the same as the internal storage.
         */
        EXTERNAL_STORAGE:"EXTERNAL_STORAGE",

        /**
         * Represents the temporal storage. Same as the internal and external storage spaces in the sense that it only contains information that the application has written
         * in it but the main difference is that the information in this storage may dissapear without notice.
         */
        TEMPORARY_STORAGE:"TEMPORARY_STORAGE"
    };

    /**
     * The capture types to capture screenshots using CocoonJS native capabilities.
     * @namespace
     */
    CocoonJS.App.CaptureType = {
        /**
         Captures everything, both the CocoonJS GL hardware accelerated surface and the system views (like the WebView).
         */
        EVERYTHING:0,

        /**
         * Captures just the CocoonJS GL hardware accelerated surface.
         */
        JUST_COCOONJS_GL_SURFACE:1,

        /**
         * Captures just the sustem views (like the webview)
         */
        JUST_SYSTEM_VIEWS:2
    };

    /**
     * Makes a forward call of some javascript code to be executed in a different environment (i.e. from CocoonJS to the WebView and viceversa).
     * It waits until the code is executed and the result of it is returned === synchronous.
     * @function
     * @param {string} javaScriptCode Some JavaScript code in a string to be forwarded and executed in a different JavaScript environment (i.e. from CocoonJS to the WebView and viceversa).
     * @return {string} The result of the execution of the passed JavaScript code in the different JavaScript environment.
     */
    CocoonJS.App.forward = function (javaScriptCode) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "forward", arguments);
        }
        else if (!navigator.isCocoonJS) {
            if (window.name == 'CocoonJS_App_ForCocoonJS_WebViewIFrame') {
                return window.parent.eval(javaScriptCode);
            }
            else {
                //return window.parent.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'].window.eval(javaScriptCode);
                return window.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'].window.eval(javaScriptCode);
            }
        }
    };

    /**
     * Makes a forward call of some javascript code to be executed in a different environment (i.e. from CocoonJS to the WebView and viceversa).
     * It is asyncrhonous so it does not wait until the code is executed and the result of it is returned. Instead, it calls a callback function when the execution has finished to pass the result.
     * @function
     * @param {string} javaScriptCode Some JavaScript code in a string to be forwarded and executed in a different JavaScript environment (i.e. from CocoonJS to the WebView and viceversa).
     * @param {function} [returnCallback] A function callback that will be called when the passed JavaScript code is executed in a different thread to pass the result of the execution in the different JavaScript environment.
     */
    CocoonJS.App.forwardAsync = function (javaScriptCode, returnCallback) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            if (typeof returnCallback !== 'undefined') {
                return ext.IDTK_APP.makeCallAsync("forward", javaScriptCode, returnCallback);
            }
            else {
                return ext.IDTK_APP.makeCallAsync("forward", javaScriptCode);
            }
        }
        else if (!navigator.isCocoonJS) {
            if (window.name == 'CocoonJS_App_ForCocoonJS_WebViewIFrame') {
                return window.parent.eval(javaScriptCode);
            }
            else {
                return window.parent.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'].window.eval(javaScriptCode);
                // window.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'].window.eval(javaScriptCode);
            }
        }
    };

    /**
     * Pops up a text dialog so the user can introduce some text and the application can get it back. It is the first approach CocoonJS has taken to be able to introduce
     * text input in a easy way. The dialog execution events are passed to the application through the {@link CocoonJS.App.onTextDialogFinished} and the {@link CocoonJS.App.onTextDialogCancelled} event objects.
     * @function
     * @param {string} [title] Default value is "". The title to be displayed in the dialog.
     * @param {string} [message] Default value is "". The message to be displayed in the dialog, next to the text input field.
     * @param {string} [text] Default value is "". The initial text to be introduced in the text input field.
     * @param {CocoonJS.App.KeyboardType} [keyboardType] Default value is {@link CocoonJS.App.KeyboardType.TEXT}. The keyboard type to be used when the text has to be introduced.
     * @param {string} [cancelButtonText] Default value is "". The text to be displayed in the cancel button of the dialog.
     * @param {string} [okButtonText] Default value is "". The text to be displayed in the ok button of the dialog.
     * @see CocoonJS.App.onTextDialogFinished
     * @see CocoonJS.App.onTextDialogCancelled
     */
    CocoonJS.App.showTextDialog = function (title, message, text, keyboardType, cancelButtonText, okButtonText) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "showTextDialog", arguments, true);
        }
        else if (!navigator.isCocoonJS) {
            if (!message) {
                message = "";
            }
            if (!text) {
                text = "";
            }
            var result = prompt(message, text);
            var eventObject = result ? CocoonJS.App.onTextDialogFinished : CocoonJS.App.onTextDialogCancelled;
            eventObject.notifyEventListeners(result);
        }
    };

    /**
     * Pops up a message dialog so the user can decide between a yes or no like confirmation. The message box execution events are passed to the application through the {@link CocoonJS.App.onMessageBoxConfirmed} and the {@link CocoonJS.App.onMessageBoxDenied} event objects.
     * @function
     * @param {string} [title] Default value is "". The title to be displayed in the dialog.
     * @param {string} [message] Default value is "". The message to be displayed in the dialog, next to the text input field.
     * @param {string} [confirmButtonText] Default value is "Yes". The text to be displayed for the confirm button.
     * @param {string} [denyButtonText] Default value is "No". The text to be displayed for the deny button.
     * @see CocoonJS.App.onMessageBoxConfirmed
     * @see CocoonJS.App.onMessageBoxDenied
     */
    CocoonJS.App.showMessageBox = function (title, message, confirmButtonText, denyButtonText) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "showMessageBox", arguments, true);
        }
        else if (!navigator.isCocoonJS) {
            if (!message) {
                message = "";
            }
            var result = confirm(message);
            var eventObject = result ? CocoonJS.App.onMessageBoxConfirmed : CocoonJS.App.onMessageBoxDenied;
            eventObject.notifyEventListeners();
        }
    };

    /**
     * It allows to load a new JavaScript/HTML5 resource that can be loaded either locally (inside the platform/device storage) or using a remote URL.
     * @function
     * @param {string} path A path to a resource stored in the platform or in a URL to a remote resource.
     * @param {CocoonJS.App.StorageType} [storageType] If the path argument represents a locally stored resource, the developer can specify the storage where it is stored. If no value is passes, the {@link CocoonJS.App.StorageType.APP_STORAGE} value is used by default.
     */
    CocoonJS.App.load = function (path, storageType) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "loadPath", arguments);
        }
        else if (!navigator.isCocoonJS) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function (event) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // TODO: As window load event is not being called (WHY???), I have decided to call the listeners directly
                        // var callback= function(event){
                        //     window.removeEventListener("load", callback);
                        var jsCode;
                        // If there is no webview, it means we are in the webview, so notify the CocoonJS environment
                        if (!CocoonJS.App.EmulatedWebViewIFrame) {
                            jsCode = "CocoonJS.App.onLoadInTheWebViewSucceed.notifyEventListeners('" + path + "');";
                        }
                        // If there is a webview, it means we are in CocoonJS, so notify the webview environment
                        else {
                            jsCode = "CocoonJS.App.onLoadInCocoonJSSucceed.notifyEventListeners('" + path + "');";
                        }
                        CocoonJS.App.forwardAsync(jsCode);
                        // };
                        // window.addEventListener("load", callback);
                        window.location.href = path;
                    }
                    else if (xhr.status === 404) {
                        this.onreadystatechange = null;
                        var jsCode;
                        // If there is no webview, it means we are in the webview, so notify the CocoonJS environment
                        if (!CocoonJS.App.EmulatedWebViewIFrame) {
                            jsCode = "CocoonJS.App.onLoadInTheWebViewFailed.notifyEventListeners('" + path + "');";
                        }
                        // If there is a webview, it means we are in CocoonJS, so notify the webview environment
                        else {
                            jsCode = "CocoonJS.App.onLoadInCocoonJSFailed.notifyEventListeners('" + path + "');";
                        }
                        CocoonJS.App.forwardAsync(jsCode);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
    };

    /**
     * Reloads the last loaded path in the current context.
     * @function
     */
    CocoonJS.App.reload = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "reload", arguments);
        }
        else if (!navigator.isCocoonJS) {
            if (window.name == 'CocoonJS_App_ForCocoonJS_WebViewIFrame') {
                return window.parent.location.reload();
            }
            else {
                return window.parent.frames['CocoonJS_App_ForCocoonJS_WebViewIFrame'].window.location.reload();
            }
        }
    };

    /**
     * Opens a given URL using a system service that is able to open it. For example, open a HTTP URL using the system WebBrowser.+
     * @function
     * @param {string} url The URL to be opened by a system service.
     */
    CocoonJS.App.openURL = function (url) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "openURL", arguments, true);
        }
        else if (!navigator.isCocoonJS) {
            window.open(url, '_blank');
        }
    }

    /**
     * Forces the app to be finished.
     * @function
     */
    CocoonJS.App.forceToFinish = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "forceToFinish", arguments);
        }
        else if (!navigator.isCocoonJS) {
            window.close();
        }
    }

    /**
     * Enables or disables the auto lock to control if the screen keeps on after an inactivity period.
     * When the auto lock is enabled and the application has no user input for a short period, the system puts the device into a "sleep” state where the screen dims or turns off.
     * When the auto lock is disabled the screen keeps on even when there is no user input for long times.
     * @param enabled A boolean value that controls whether to enable or disable the auto lock.
     */
    CocoonJS.App.setAutoLockEnabled = function (enabled) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setAutoLockEnabled", arguments);
        }
    }

    /**
     * Creates a canvas element that is automatically resized to the screen size. When the app is being executed
     * inside CocoonJS. This canvas is optimized for rendering so it is higly recommended to use it if it fits
     * your app needs. If your app uses one canvas as the main canvas where all other canvases and images are displayed, Ludei recommends to
     * call this function in order to create this main canvas. A usual 2x performance gain is achieved by doing so
     * depending on the device and the graphics card driver.
     * @function
     * @return {object} The canvas object that should be used as the main canvas and that is resized to the screen resolution.
     */
    CocoonJS.App.createScreenCanvas = function () {
        var screenCanvas;
        if (navigator.isCocoonJS) {
            screenCanvas = document.createElement("screencanvas");
        }
        else if (!navigator.isCocoonJS) {
            screenCanvas = document.createElement("canvas");
            screenCanvas.width = window.innerWidth;
            screenCanvas.height = window.innerHeight;
        }
        return screenCanvas;
    };

    /**
     * Disables the touch events in the CocoonJS environment.
     * @function
     */
    CocoonJS.App.disableTouchInCocoonJS = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("disableTouchLayer", "CocoonJSView");
        }
    };

    /**
     * Enables the touch events in the CocoonJS environment.
     * @function
     */
    CocoonJS.App.enableTouchInCocoonJS = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("enableTouchLayer", "CocoonJSView");
        }
    };

    /**
     * Disables the touch events in the WebView environment.
     * @function
     */
    CocoonJS.App.disableTouchInTheWebView = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("disableTouchLayer", "WebView");
        }
    };

    /**
     * Enables the touch events in the WebView environment.
     * @function
     */
    CocoonJS.App.enableTouchInTheWebView = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("enableTouchLayer", "WebView");
        }
    };

    /**
     * Setups the update interval in seconds (1 second / X frames) to receive the accelerometer updates.
     * It defines the rate at which the devicemotion events are updated.
     * @function
     * @param {number} updateIntervalInSeconds The update interval in seconds to be set.
     */
    CocoonJS.App.setAccelerometerUpdateIntervalInSeconds = function (updateIntervalInSeconds) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("setAccelerometerUpdateIntervalInSeconds", updateIntervalInSeconds);
        }
    };

    /**
     * Returns the update interval in seconds that is currently set for accelerometer related events.
     * @function
     * @return {number} The update interval in seconds that is currently set for accelerometer related events.
     */
    CocoonJS.App.getAccelerometerUpdateIntervalInSeconds = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("getAccelerometerUpdateIntervalInSeconds");
        }
    };

    /**
     * Setups the update interval in seconds (1 second / X frames) to receive the gyroscope updates.
     * It defines the rate at which the devicemotion and deviceorientation events are updated.
     * @function
     * @param {number} updateIntervalInSeconds The update interval in seconds to be set.
     */
    CocoonJS.App.setGyroscopeUpdateIntervalInSeconds = function (updateIntervalInSeconds) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("setGyroscopeUpdateIntervalInSeconds", updateIntervalInSeconds);
        }
    };

    /**
     * Returns the update interval in seconds that is currently set for gyroscope related events.
     * @function
     * @return {number} The update interval in seconds that is currently set for gyroscope related events.
     */
    CocoonJS.App.getGyroscopeUpdateIntervalInSeconds = function () {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCall("getGyroscopeUpdateIntervalInSeconds");
        }
    };


    /**
     * Setups a origin proxy for a given typeName. What this means is that after calling this function the environment that makes this call will suddenly
     * have a way of creating instances of the given typeName and those instances will act as a transparent proxy to counterpart instances in the destination environment.
     * Manipulating attributes, calling funcitions or handling events will all be performed in the destination environment but the developer will think they will be
     * happening in the origin environment.
     * IMPORTANT NOTE: These proxies only work with types that use attributes and function parameters and return types that are primitive like numbers, strings or arrays.
     * @param {string} typeName The name of the type to be proxified.
     * @param {array} [attributeNames] A list of the names of the attributes to be proxified.
     * @param {array} [functionNames] A list of the names of the functions to be proxified.
     * @param {array} [eventHandlerNames] A list of the names of the event handlers to be proxified (onXXXX like attributes that represent callbacks).
     * A valid typeName and at least one valid array for attribute, function or event handler names is mandatory.
     */
    CocoonJS.App.setupOriginProxyType = function (typeName, attributeNames, functionNames, eventHandlerNames) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            // Control the parameters.
            if (!typeName) throw "The given typeName must be valid.";
            if (!attributeNames && !functionNames && !eventHandlerNames) throw "There is no point on setting up a proxy for no attributes, functions nor eventHandlers.";
            attributeNames = attributeNames ? attributeNames : [];
            functionNames = functionNames ? functionNames : [];
            eventHandlerNames = eventHandlerNames ? eventHandlerNames : [];

            // The parent object will be the window. It could be another object but careful, the destination side should know about this.
            // TODO: Specify the parentObject as a parameter, obtain it's path from the window object and pass it to the destination environment so it knows about it.
            var parentObject = window;

            // Setup the destination side too.
            var jsCode = "CocoonJS.App.setupDestinationProxyType(" + JSON.stringify(typeName) + ", " + JSON.stringify(eventHandlerNames) + ");";
            CocoonJS.App.forward(jsCode);

            var originalType = parentObject[typeName];

            // Constructor. This will be the new proxified type in the origin environment. Instances of this type will be created by the developer without knowing that they are
            // internally calling to their counterparts in the destination environment.
            parentObject[typeName] = function () {
                var _this = this;

                // Each proxy object will have a origin object inside with all the necessary information to be a proxy to the destination.
                this._cocoonjs_proxy_object_data = {};
                // The id is obtained calling to the destination side to create an instance of the type.
                var jsCode = "CocoonJS.App.newDestinationProxyObject(" + JSON.stringify(typeName) + ");";
                this._cocoonjs_proxy_object_data.id = CocoonJS.App.forward(jsCode);
                // The eventHandlers dictionary contains objects of the type { eventHandlerName : string, eventHandler : function } to be able to make the callbacks when the 
                // webview makes the corresponding calls.
                this._cocoonjs_proxy_object_data.eventHandlers = {};
                // Also store the typename inside each instance.
                this._cocoonjs_proxy_object_data.typeName = typeName;
                // A dictionary to store the event handlers
                this._cocoonjs_proxy_object_data.eventListeners = {};

                // TODO: eventHandlers and eventListeners should be in the same list ;)

                // Store all the proxy instances in a list that belongs to the type itself.
                parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[this._cocoonjs_proxy_object_data.id] = this;

                // Create a setter and a getter for all the attribute names that have been specified. When the attributes are accessed (set or get) a call to the destination counterpart will be performed.
                for (var i = 0; i < attributeNames.length; i++) {
                    (function (attributeName) {
                        _this.__defineSetter__(attributeName, function (value) {
                            var jsCode = "CocoonJS.App.setDestinationProxyObjectAttribute(" + JSON.stringify(typeName) + ", " + _this._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(attributeName) + ", " + JSON.stringify(value) + ");";
                            return CocoonJS.App.forwardAsync(jsCode);
                        });
                        _this.__defineGetter__(attributeName, function () {
                            var jsCode = "CocoonJS.App.getDestinationProxyObjectAttribute(" + JSON.stringify(typeName) + ", " + _this._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(attributeName) + ");";
                            return CocoonJS.App.forwardAsync(jsCode);
                        });
                    })(attributeNames[i]);
                }

                // Create a function that performs a call to the destination environment counterpart for all the function names that have been specified.
                for (var i = 0; i < functionNames.length; i++) {
                    (function (functionName) {
                        _this[functionName] = function () {
                            // Get the arguments as an array and add the typeName, the proxy id and the functionName before all the other arguments before making the call to the destination counterpart.
                            var argumentsArray = Array.prototype.slice.call(arguments);
                            argumentsArray.unshift(functionName);
                            argumentsArray.unshift(this._cocoonjs_proxy_object_data.id);
                            argumentsArray.unshift(typeName);
                            // Use the array to create the correct function call.
                            var jsCode = "CocoonJS.App.callDestinationProxyObjectFunction(";
                            for (var i = 0; i < argumentsArray.length; i++) {
                                // The second argument (the id) should not be stringified
                                jsCode += (i !== 1 ? JSON.stringify(argumentsArray[i]) : argumentsArray[i]) + (i < argumentsArray.length - 1 ? ", " : "");
                            }
                            jsCode += ");";
                            // TODO: This next call should be synchronous but it seems that some customers are experiencing some crash issues. Making it async solves these crashes.
                            // Another possible solution could be to be able to specify which calls could be async and which sync in the proxification array.
                            var ret = CocoonJS.App.forwardAsync(jsCode);
                            return ret;
                        };
                    })(functionNames[i]);
                }

                // Create a setter and getter for all the event handler names that have been specified. When the event handlers are accessed, store them inside the corresponding position on the eventHandlers
                // array so they can be called when the destination environment makes the corresponding callback call.
                for (var i = 0; i < eventHandlerNames.length; i++) {
                    (function (eventHandlerName) {
                        _this.__defineSetter__(eventHandlerName, function (value) {
                            _this._cocoonjs_proxy_object_data.eventHandlers[eventHandlerName] = value;
                        });
                        _this.__defineGetter__(eventHandlerName, function () {
                            return _this._cocoonjs_proxy_object_data.eventHandlers[eventHandlerName];
                        });
                    })(eventHandlerNames[i]);
                }

                // Setup the add and remove event listeners in the proxy object
                _this.addEventListener = function (eventTypeName, eventCallback) {
                    var addEventCallback = true;
                    // Check for the eventListeners
                    var eventListeners = _this._cocoonjs_proxy_object_data.eventListeners[eventTypeName];
                    if (eventListeners) {
                        // As the eventListeners were already added, check that the same callback has not been added.
                        addEventCallback = eventListeners.indexOf(eventCallback) < 0;
                    }
                    else {
                        // There are no event listeners, so add the one and add the listeners array for the specific event type name
                        eventListeners = [];
                        _this._cocoonjs_proxy_object_data.eventListeners[eventTypeName] = eventListeners;

                        // Forward the call so the other end registers a event listener (only one is needed).
                        var jsCode = "CocoonJS.App.addDestinationProxyObjectEventListener(" + JSON.stringify(_this._cocoonjs_proxy_object_data.typeName) + ", " + _this._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(eventTypeName) + ");";
                        CocoonJS.App.forwardAsync(jsCode);
                    }
                    // Only if the alforithm above specify so, add the eventcallback and notify the destination environment to do the same
                    if (addEventCallback) {
                        eventListeners.push(eventCallback);
                    }
                };

                _this.removeEventListener = function (eventTypeName, eventCallback) {
                    // Check for the eventListeners
                    var eventListeners = _this._cocoonjs_proxy_object_data.eventListeners[eventTypeName];
                    if (eventListeners) {
                        var eventCallbackIndex = eventListeners.indexOf(eventCallback);
                        if (eventCallbackIndex >= 0) {
                            eventListeners.splice(eventCallbackIndex, 1);
                        }
                    }
                };

                // Return the proxy instance.
                return this;
            };

            // The type will contain a proxy data structure to store all the instances that are created so they are available when the destination environment calls back. 
            parentObject[typeName]._cocoonjs_proxy_type_data =
            {
                originalType:originalType,
                proxyObjects:[]
            };

            /**
             * Deletes a proxy instance from both the CocoonJS environment structures and also deleting it's webview environment counterpart.
             * This function should be manually called whenever a proxy instance won't be accessed anymore.
             * @param {object} object The proxy object to be deleted.
             */
            parentObject[typeName]._cocoonjs_proxy_type_data.deleteProxyObject = function (object) {
                var proxyObjectKey = CocoonJS.getKeyForValueInDictionary(this.proxyObjects, object);
                if (proxyObjectKey) {
                    var jsCode = "CocoonJS.App.deleteDestinationProxyObject(" + JSON.stringify(typeName) + ", " + object._cocoonjs_proxy_object_data.id + ");";
                    CocoonJS.App.forwardAsync(jsCode);
                    object._cocoonjs_proxy_object_data = null;
                    delete this.proxyObjects[proxyObjectKey];
                }
            };

            /**
             * Calls a event handler for the given proxy object id and eventHandlerName.
             * @param {number} id The id to be used to look for the proxy object for which to make the call to it's event handler.
             * @param {string} eventHandlerName The name of the handler to be called.
             * NOTE: Events are a complex thing in the HTML specification. This function just performs a call but at least provides a
             * structure to the event passing the target (the proxy object).
             * TODO: The destination should serialize the event object as far as it can so many parameters can be passed to the origin
             * side. Using JSON.stringify in the destination side and parse in origin side maybe? Still must add the target to the event structure though.
             */
            parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventHandler = function (id, eventHandlerName) {
                var object = this.proxyObjects[id];
                var eventHandler = object._cocoonjs_proxy_object_data.eventHandlers[eventHandlerName];
                if (eventHandler) {
                    eventHandler({ target:object });
                }
            };

            parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventListeners = function (id, eventTypeName) {
                var object = this.proxyObjects[id];
                var eventListeners = object._cocoonjs_proxy_object_data.eventListeners[eventTypeName].slice();
                for (var i = 0; i < eventListeners.length; i++) {
                    eventListeners[i]({ target:object });
                }
            };
        }
    };

    /**
     * Takes down the proxification of a type and restores it to it's original type. Do not worry if you pass a type name that is not proxified yet. The
     * function will handle it correctly for compativility reasons.
     * @param {string} typeName The name of the type to be deproxified (take down the proxification and restore the type to it's original state)
     */
    CocoonJS.App.takedownOriginProxyType = function (typeName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            if (parentObject[typeName] && parentObject[typeName]._cocoonjs_proxy_type_data) {
                parentObject[typeName] = parentObject[typeName]._cocoonjs_proxy_type_data.originalType;
            }
        }
    };

    /**
     * Deletes everything related to a proxy object in both environments. Do not worry of you do not pass a proxified object to the
     * function. For compatibility reasons, you can still have calls to this function even when no poxification of a type has been done.
     * @param {object} object The proxified object to be deleted.
     */
    CocoonJS.App.deleteOriginProxyObject = function (object) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            if (object && object._cocoonjs_proxy_object_data) {
                parentObject[object._cocoonjs_proxy_object_data.typeName]._cocoonjs_proxy_type_data.deleteProxyObject(object);
            }
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the destination environment whenever it is needed to work with proxy objects.
     * It calls the origin proxy object when an event handler need to be updated/called from the destination environment.
     * @param {string} typeName The type name of the proxified type.
     * @param {number} id The id of the proxy object.
     * @param {string} eventHandlerName The name of the event handler to be called.
     */
    CocoonJS.App.callOriginProxyObjectEventHandler = function (typeName, id, eventHandlerName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventHandler(id, eventHandlerName);
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the destination environment whenever it is needed to work with proxy objects.
     * It calls the origin proxy object when all the event listeners related to a specific event need to be updated/called from the destination environment.
     * @param {string} typeName The type name of the proxified type.
     * @param {number} id The id of the proxy object.
     * @param {string} eventTypeName The name of the event type to call the listeners related to it.
     */
    CocoonJS.App.callOriginProxyObjectEventListeners = function (typeName, id, eventTypeName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            parentObject[typeName]._cocoonjs_proxy_type_data.callProxyObjectEventListeners(id, eventTypeName);
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the origin environment whenever it is needed to work with proxy objects.
     * Setups all the structures that are needed to proxify a destination type to an origin type.
     * @param {string} typeName The name of the type to be proxified.
     * @param {array} eventHandlerNames An array with al the event handlers to be proxified. Needed in order to be able to create callbacks for all the event handlers
     * and call to the CocoonJS counterparts accordingly.
     */
    CocoonJS.App.setupDestinationProxyType = function (typeName, eventHandlerNames) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;

            // Add a cocoonjs structure to the destination proxified type to store some useful information like all the proxy instances that are created, plus the id counter 
            // and the names of all the event handlers and some utility functions.
            parentObject[typeName]._cocoonjs_proxy_type_data =
            {
                nextId:0,
                proxyObjects:{},
                eventHandlerNames:eventHandlerNames
            }
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the origin environment whenever it is needed to work with proxy objects.
     * Takes down the proxy type at the destination environment. Just removes the data structure related to proxies that was added to the type when proxification tool place.
     * @param {string} typeName The name of the type to take the proxification down.
     */
    CocoonJS.App.takedownDestinationProxyType = function (typeName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            if (parent[typeName] && parentObject[typeName]._cocoonjs_proxy_type_data) {
                delete parentObject[typeName]._cocoonjs_proxy_type_data;
            }
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Creates a new destination object instance and generates a id to reference it from the original environment.
     * @param {string} typeName The name of the type to be proxified and to generate an instance.
     * @return The id to be used from the original environment to identify the corresponding destination object instance.
     */
    CocoonJS.App.newDestinationProxyObject = function (typeName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;

            var proxyObject = new parentObject[typeName]();
            // Also store some additional information in the proxy object
            proxyObject._cocoonjs_proxy_object_data = {};
            // Like the type name, that could be useful late ;)
            proxyObject._cocoonjs_proxy_object_data.typeName = typeName;
            // Caculate the id for the object. It will be returned to the origin environment so this object can be referenced later
            var proxyObjectId = parentObject[typeName]._cocoonjs_proxy_type_data.nextId;
            // Store the created object in the structure defined in the setup of proxification with an id associated to it
            parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[proxyObjectId] = proxyObject;
            // Also store the id inside the proxy object itself
            proxyObject._cocoonjs_proxy_object_data.id = proxyObjectId;
            // Calculate a new id for the next object.
            parentObject[typeName]._cocoonjs_proxy_type_data.nextId++;

            // Setup all the event handlers.
            for (var i = 0; i < parentObject[typeName]._cocoonjs_proxy_type_data.eventHandlerNames.length; i++) {
                (function (eventHandlerName) {
                    proxyObject[eventHandlerName] = function (event) {
                        var proxyObject = this; // event.target;
                        // var eventHandlerName = CocoonJS.getKeyForValueInDictionary(proxyObject, this); // Avoid closures ;)
                        var jsCode = "CocoonJS.App.callOriginProxyObjectEventHandler(" + JSON.stringify(proxyObject._cocoonjs_proxy_object_data.typeName) + ", " + proxyObject._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(eventHandlerName) + ");";
                        CocoonJS.App.forwardAsync(jsCode);
                    };
                })(parentObject[typeName]._cocoonjs_proxy_type_data.eventHandlerNames[i]);
            }

            // Add the dictionary where the event listeners (callbacks) will be added.
            proxyObject._cocoonjs_proxy_object_data.eventListeners = {};

            return proxyObjectId;
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the origin environement whenever it is needed to work with proxy objects.
     * Calls a function of a destination object idetified by it's typeName and id.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     * @param {string} functionName The name of the function to be called.
     * @return Whatever the function call returns.
     */
    CocoonJS.App.callDestinationProxyObjectFunction = function (typeName, id, functionName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            var argumentsArray = Array.prototype.slice.call(arguments);
            argumentsArray.splice(0, 3);
            var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
            var result = proxyObject[functionName].apply(proxyObject, argumentsArray);
            return result;
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Sets a value to the corresponding attributeName of a proxy object represented by it's typeName and id.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     * @param {string} attributeName The name of the attribute to be set.
     * @param {unknown} attributeValue The value to be set to the attribute.
     */
    CocoonJS.App.setDestinationProxyObjectAttribute = function (typeName, id, attributeName, attributeValue) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
            proxyObject[attributeName] = attributeValue;
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Retrieves the value of the corresponding attributeName of a proxy object represented by it's typeName and id.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     * @param {string} attributeName The name of the attribute to be retrieved.
     */
    CocoonJS.App.getDestinationProxyObjectAttribute = function (typeName, id, attributeName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
            return proxyObject[attributeName];
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     * Deletes a proxy object identifying it using it's typeName and id. Deleting a proxy object mainly means to remove the instance from the global structure
     * that hold all the instances.
     * @param {string} typeName The name of the type of the proxy.
     * @param {number} id The id of the proxy object.
     */
    CocoonJS.App.deleteDestinationProxyObject = function (typeName, id) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            delete parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];
        }
    };

    /**
     * NOTE: This function should never be directly called. It will be called from the original environment whenever it is needed to work with proxy objects.
     */
    CocoonJS.App.addDestinationProxyObjectEventListener = function (typeName, id, eventTypeName) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            var parentObject = window;
            // Look for the proxy object
            var proxyObject = parentObject[typeName]._cocoonjs_proxy_type_data.proxyObjects[id];

            var callback = function (event) {
                var proxyObject = this; // event.target;
                // var eventTypeName = CocoonJS.getKeyForValueInDictionary(proxyObject._cocoonjs_proxy_object_data.eventListeners, this); // Avoid closures ;)
                // TODO: Is there a way to retrieve the callbackId without a closure?
                var jsCode = "CocoonJS.App.callOriginProxyObjectEventListeners(" + JSON.stringify(proxyObject._cocoonjs_proxy_object_data.typeName) + ", " + proxyObject._cocoonjs_proxy_object_data.id + ", " + JSON.stringify(eventTypeName) + ");";
                CocoonJS.App.forwardAsync(jsCode);
            };

            proxyObject._cocoonjs_proxy_object_data.eventListeners[eventTypeName] = callback;

            // Finally add the event listener callback to the proxy object
            proxyObject.addEventListener(eventTypeName, callback);
        }
    };

    // TODO: We could add a removeDestinationProxyObjectEventListener although it seems that is not completely necessary.

    /**
     * Proxifies the XMLHttpRequest type for the environment where this call is made. After calling this function, all the new objects
     * of XMLHttpRequest that are instantiated, will be proxified objects that will make calls to the counterparts in the other environment (CocoonJS <-> WebView viceversa).
     * IMPORTANT NOTE: Remember to take down the proxification once you are done or to delete proxy objects whenever they are not needed anymore or memory leaks may occur.
     */
    CocoonJS.App.proxifyXHR = function () {
        var ATTRIBUTE_NAMES =
            [
                "timeout",
                "withCredentials",
                "upload",
                "status",
                "statusText",
                "responseType",
                "response",
                "responseText",
                "responseXML",
                "readyState"
            ];
        var FUNCTION_NAMES =
            [
                "open",
                "setRequestHeader",
                "send",
                "abort",
                "getResponseHeader",
                "getAllResponseHeaders",
                "overrideMimeType"
            ];
        var EVENT_HANDLER_NAMES =
            [
                "onloadstart",
                "onprogress",
                "onabort",
                "onerror",
                "onload",
                "ontimeout",
                "onloadend",
                "onreadystatechange"
            ];
        CocoonJS.App.setupOriginProxyType("XMLHttpRequest", ATTRIBUTE_NAMES, FUNCTION_NAMES, EVENT_HANDLER_NAMES);
    };

    /**
     * Proxifies the Audio type for the environment where this call is made. After calling this function, all the new objects
     * of Audio that are instantiated, will be proxified objects that will make calls to the counterparts in the other environment (CocoonJS <-> WebView viceversa).
     * IMPORTANT NOTE: Remember to take down the proxification once you are done or to delete proxy objects whenever they are not needed anymore or memory leaks may occur.
     */
    CocoonJS.App.proxifyAudio = function () {
        var ATTRIBUTE_NAMES =
            [
                "src",
                "loop",
                "volume",
                "preload"
            ];
        var FUNCTION_NAMES =
            [
                "play",
                "pause",
                "load",
                "canPlayType"
            ];
        var EVENT_HANDLER_NAMES =
            [
                "onended",
                "oncanplay",
                "oncanplaythrough",
                "onerror"
            ];
        CocoonJS.App.setupOriginProxyType("Audio", ATTRIBUTE_NAMES, FUNCTION_NAMES, EVENT_HANDLER_NAMES);
    };

    /**
     * Captures a image of the screen synchronously and saves it to a file. Sync mode allows to capture the screen in the middle of a frame rendering.
     * @param {string} fileName Desired file name and format (png or jpg). If no value is passed, "capture.png" value is used by default
     * @param {CocoonJS.App.StorageType} storageType The developer can specify the storage where it is stored. If no value is passed, the {@link CocoonJS.App.StorageType.TMP_STORAGE} value is used by default.
     * @param {CocoonJS.App.CaptureType} captureType. Optional value to choose capture type. [0: captures everything, 1: only captures cocoonjs surface 2: only captures system views]. @see CocoonJS.App.CaptureType
     * @return The URL of the saved file.
     * @throws exception if the image fails to be stored or there is another error.
     * @see CocoonJS.App.onCaptureScreenSucceeded
     * @see CocoonJS.App.onCaptureScreenFailed
     */
    CocoonJS.App.captureScreen = function (fileName, storageType, captureType) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("captureScreen", fileName, storageType, captureType);
        }
    };

    /**
     * Captures a image of the screen asynchronously and saves it to a file.
     * Async mode captures a final frame as soon as possible.
     * @param {string} Desired file name and format (png or jpg). If no value is passed, "capture.png" value is used by default
     * @param {CocoonJS.App.StorageType} [storageType] The developer can specify the storage where it is stored. If no value is passed, the {@link CocoonJS.App.StorageType.TMP_STORAGE} value is used by default.
     * @param {CocoonJS.App.CaptureType} captureType. Optional value to choose capture type. [0: captures everything, 1: only captures cocoonjs surface, 2: only captures system views]. @see CocoonJS.App.CaptureType
     * @param {function} callback. Response callback, check the error property to monitor errors. Check the 'url' property to get the URL of the saved Image
     */
    CocoonJS.App.captureScreenAsync = function (fileName, storageType, captureType, callback) {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            window.ext.IDTK_APP.makeCallAsync("captureScreen", fileName, storageType, captureType, callback);
        }
    };

    /**
     * Returns the device UUID
     * @return {string} The device UUID
     */
    CocoonJS.App.getDeviceId = function() {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("getDeviceId");
        }
    };

    /**
     * Structure that defines the getDeviceInfo returned information
     */
    CocoonJS.App.DeviceInfo = {

        /**
        * The operating system name (ios, android,...)
        * @type string
        */
        os: null,

        /**
        * The operating system version (4.2.2, 5.0,...)
        * @type string
        */
        version: null,

        /**
        * The operating system screen density in dpi
        * @type string
        */
        dpi: null,

        /**
        * The device manufacturer (apple, samsung, lg,...)
        * @type string
        */
        brand: null,

        /**
        * The device model (iPhone 4S, SAMSUNG-SGH-I997, SAMSUNG-SGH-I997R, etc)
        * @type string
        */
        model: null,

        /**
        * The phone IMEI
        * Android: The phone IMEI is returned or null if the device has not telepohny
        * iOS: null is returned as we cannot get the IMEI in iOS, no public API available for that yet.
        * @type string
        */
        imei: null,

        /**
        * The platform Id
        * Android: The ANDROID_ID is used.
        * iOS: The OpenUDID is used as there is no Android ANDROID_ID equivalent in iOS
        * @type string
        */
        platformId: null,

        /**
        * The Odin generated id https://code.google.com/p/odinmobile/
        * @type string
        */
        odin: null,

        /**
        * The OpenUDID generated Id https://github.com/ylechelle/OpenUDID
        * @type string
        */
        openudid: null
    };

    /**
     * Returns the device Info
     * @return {CocoonJS.App.DeviceInfo} The device Info
     */
    CocoonJS.App.getDeviceInfo = function() {
        if (CocoonJS.App.nativeExtensionObjectAvailable) {
            return window.ext.IDTK_APP.makeCall("getDeviceInfo");
        }
    };    

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onTextDialogFinished} event calls.
     * @name OnTextDialogFinishedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} text The text that was introduced in the text dialog when it was finished.
     */
    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by accepting it's content.
     * The callback function's documentation is represented by {@link CocoonJS.App.OnTextDialogFinishedListener}
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onTextDialogFinished = new CocoonJS.EventHandler("IDTK_APP", "App", "ontextdialogfinish");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by dismissing it's content.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onTextDialogCancelled = new CocoonJS.EventHandler("IDTK_APP", "App", "ontextdialogcancel");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by accepting it's content.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onMessageBoxConfirmed = new CocoonJS.EventHandler("IDTK_APP", "App", "onmessageboxconfirmed");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the text dialog is finished by dismissing it's content.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onMessageBoxDenied = new CocoonJS.EventHandler("IDTK_APP", "App", "onmessageboxdenied");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the application is suspended.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onSuspended = new CocoonJS.EventHandler("IDTK_APP", "App", "onsuspended");

    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the application is activated.
     * The callback function does not receive any parameter.
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onActivated = new CocoonJS.EventHandler("IDTK_APP", "App", "onactivated");

})();
(function()
{
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw("The CocoonJS object must exist and be valid before adding more functionalities to an extension.");
    if (typeof window.CocoonJS.App === 'undefined' || window.CocoonJS.App === null) throw("The CocoonJS.App object must exist and be valid before adding more functionalities to it.");

    /**
    * This namespace represents all the basic functionalities available in the CocoonJS extension API.
    * @namespace
    */
    CocoonJS.App = CocoonJS.App ? CocoonJS.App : {};

    if (!CocoonJS.App.nativeExtensionObjectAvailable)
    {
        (function createWebView() { 
            CocoonJS.App.EmulatedWebView = document.createElement('div'); 
            CocoonJS.App.EmulatedWebView.setAttribute('id', 'CocoonJS_App_ForCocoonJS_WebViewDiv'); 
            CocoonJS.App.EmulatedWebView.style.width = 0; 
            CocoonJS.App.EmulatedWebView.style.height = 0; 
            CocoonJS.App.EmulatedWebView.style.position = "absolute"; 
            CocoonJS.App.EmulatedWebView.style.left = 0; 
            CocoonJS.App.EmulatedWebView.style.top = 0;
            CocoonJS.App.EmulatedWebView.style.backgroundColor = 'transparent';
            CocoonJS.App.EmulatedWebView.style.border = "0px solid #000"; 
            CocoonJS.App.EmulatedWebViewIFrame = document.createElement("IFRAME"); 
            CocoonJS.App.EmulatedWebViewIFrame.setAttribute('id', 'CocoonJS_App_ForCocoonJS_WebViewIFrame');
            CocoonJS.App.EmulatedWebViewIFrame.setAttribute('name', 'CocoonJS_App_ForCocoonJS_WebViewIFrame');
            CocoonJS.App.EmulatedWebViewIFrame.style.width = 0; 
            CocoonJS.App.EmulatedWebViewIFrame.style.height = 0; 
            CocoonJS.App.EmulatedWebViewIFrame.frameBorder = 0;
            CocoonJS.App.EmulatedWebViewIFrame.allowtransparency = true;
            CocoonJS.App.EmulatedWebView.appendChild(CocoonJS.App.EmulatedWebViewIFrame);
            if(!document.body)
            document.body = document.createElement("body");
            document.body.appendChild(CocoonJS.App.EmulatedWebView);
        })(); 
    }

    /**
    * Pauses the CocoonJS JavaScript execution loop.
    * @function
    * @augments CocoonJS.App
    */
    CocoonJS.App.pause = function()
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "pause", arguments);
        }
    };

    /**
    * Resumes the CocoonJS JavaScript execution loop.
    * @static
    * @function
    */
    CocoonJS.App.resume = function()
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "resume", arguments);
        }
    };

    /**
    * Loads a resource in the WebView environment from the CocoonJS environment.
    * @function
    * @param {string} path The path to the resource. It can be a remote URL or a path to a local file.
    * @param {CocoonJS.App.StorageType} [storageType] An optional parameter to specify at which storage in the device the file path is stored. By default, APP_STORAGE is used.
    * @see CocoonJS.App.load
    * @see CocoonJS.App.onLoadInTheWebViewSucceed
    * @see CocoonJS.App.onLoadInTheWebViewFailed
    */
    CocoonJS.App.loadInTheWebView = function(path, storageType)
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            // TODO: All this code should be changed to a simple call makeNativeExtensionObjectFunctionCall when the native argument control is improved.
            var javaScriptCodeToForward = "ext.IDTK_APP.makeCall('loadPath'";
            if (typeof path !== 'undefined')
            {
                javaScriptCodeToForward += ", '" + path + "'";
                if (typeof storageType !== 'undefined')
                {
                    javaScriptCodeToForward += ", '" + storageType + "'";
                }
            }
            javaScriptCodeToForward += ");";

            return CocoonJS.App.forwardAsync(javaScriptCodeToForward);
        }
        else if (!navigator.isCocoonJS)
        {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(event) {
                if (xhr.readyState === 4)
                {
                    if (xhr.status === 200)
                    {
                        var callback= function(event){
                            CocoonJS.App.onLoadInTheWebViewSucceed.notifyEventListeners(path);
                            CocoonJS.App.EmulatedWebViewIFrame.removeEventListener("load", callback);
                        };

                        CocoonJS.App.EmulatedWebViewIFrame.addEventListener(
                            "load", 
                            callback
                        );
                        CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.href= path;
                    }
                    else if (xhr.status === 404)
                    {
                        this.onreadystatechange = null;
                        CocoonJS.App.onLoadInTheWebViewFailed.notifyEventListeners(path);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
    };

    /**
     * Reloads the last loaded path in the WebView context.
     * @function
     */
    CocoonJS.App.reloadWebView = function()
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            return CocoonJS.App.forwardAsync("ext.IDTK_APP.makeCall('reload');");
        }
        else if (!navigator.isCocoonJS)
        {
            CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.reload();
        }
    };

    /**
    * Shows the webview.
    * @function
    * @param {int} x The top lef x coordinate of the rectangle where the webview will be shown.
    * @param {int} y The top lef y coordinate of the rectangle where the webview will be shown.
    * @param {width} y The width of the rectangle where the webview will be shown.
    * @param {height} y The height of the rectangle where the webview will be shown.
    */
    CocoonJS.App.showTheWebView = function(x, y, width, height)
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            var javaScriptCodeToForward = "ext.IDTK_APP.makeCall('show'";
            if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof width !== 'undefined' && typeof height !== 'undefined')
            {
                javaScriptCodeToForward += ", " + x + ", " + y + ", " + width + ", " + height;
            }
            javaScriptCodeToForward += ");";

            return CocoonJS.App.forwardAsync(javaScriptCodeToForward);
        }
        else if (!navigator.isCocoonJS)
        {
            CocoonJS.App.EmulatedWebViewIFrame.style.width = (width ? width : window.innerWidth)+'px';
            CocoonJS.App.EmulatedWebViewIFrame.style.height = (height ? height : window.innerHeight)+'px';
            CocoonJS.App.EmulatedWebView.style.left = (x ? x : 0)+'px';
            CocoonJS.App.EmulatedWebView.style.top = (y ? y : 0)+'px';
            CocoonJS.App.EmulatedWebView.style.width = (width ? width : window.innerWidth)+'px';
            CocoonJS.App.EmulatedWebView.style.height = (height ? height : window.innerHeight)+'px';
            CocoonJS.App.EmulatedWebView.style.display = "block";
        }
    };

    /**
    * Hides the webview.
    * @function
    */
    CocoonJS.App.hideTheWebView = function()
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            var javaScriptCodeToForward = "ext.IDTK_APP.makeCall('hide');";
            return CocoonJS.App.forwardAsync(javaScriptCodeToForward);
        }
        else if (!navigator.isCocoonJS)
        {
            CocoonJS.App.EmulatedWebView.style.display = "none";
        }
    };

    /**
    * Marks a audio file to be used as music by the system. CocoonJS, internally, differentiates among music files and sound files.
    * Music files are usually bigger in size and longer in duration that sound files. There can only be just one music file 
    * playing at a specific given time. The developer can mark as many files as he/she wants to be treated as music. When the corresponding
    * HTML5 audio object is used, the system will automatically know how to treat the audio resource as music or as sound.
    * Note that it is not mandatory to use this function. The system automatically tries to identify if a file is suitable to be treated as music
    * or as sound by checking file size and duration thresholds. It is recommended, though, that the developer specifies him/herself what he/she considers
    * to be music.
    * @function
    * @param {string} audioFilePath The same audio file path that will be used to create HTML5 audio objects.
    */
    CocoonJS.App.markAsMusic = function(audioFilePath)
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
           return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "addForceMusic", arguments);
        }
    };

    /**
    * Activates or deactivates the antialas functionality from the CocoonJS rendering.
    * @function
    * @param {boolean} enable A flag that indicates if the antialas should be activated (true) or deactivated (false).
    */
    CocoonJS.App.setAntialias = function(enable)
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
           return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setDefaultAntialias", arguments);
        }
    };

    /**
    * Sets a callback function that will be called whenever the system tries to finish the app.
    * The developer can specify how the system will react to the finish of the app by returning a
    * boolean value in the callback function: true means, close the app, false means that the developer
    * will handle the app close.
    * A common example of this is the back button in Android devices. When the back button is pressed, this
    * callback will be called and the system will react depending on the developers choice finishing, or not,
    * the application.
    * @function
    * @param {function} appShouldFinishCallback A function object that will be called when the system
    * determines that the app should be finished. This function must return a true or a false value
    * depending on what the developer wants: true === finish the app, false === do not close the app.
    */
    CocoonJS.App.setAppShouldFinishCallback = function(appShouldFinishCallback)
    {
        if (navigator.isCocoonJS)
        {
            window.onidtkappfinish = appShouldFinishCallback;
        }
    }

    /**
    * Sets the texture reduction options. The texture reduction is a process that allows big images to be reduced/scaled down when they are loaded.
    * Although the quality of the images may decrease, it can be very useful in low end devices or those with limited amount of memory.
    * The function sets the threshold on image size (width or height) that will be used in order to know if an image should be reduced or not.
    * It also allows to specify a list of strings to identify in which images file paths should be applied (when they meet the size threshold requirement) 
    * The developer will still think that the image is of the original size. CocoonJS handles all of the internals to be able to show the image correctly.
    * IMPORTANT NOTE: This function should be called when the application is initialized before any image is set to be loaded for obvious reasons ;).
    * and in which sould be forbid (even if they meet the threshold requirement).
    * @function
    * @param {number} sizeThreshold This parameter specifies the minimun size (either width or height) that an image should have in order to be reduced.
    * @param {string or array} [applyTo] This parameter can either be a string or an array of strings. It's purpose is to specify one (the string) or more (the array) substring(s) 
    * that will be compared against the file path of an image to be loaded in order to know if the reduction should be applied or not. If the image meets the
    * threshold size requirement and it's file path contains this string (or strings), it will be reduced. This parameter can also be null.
    * @param {string or array} [forbidFor] This parameter can either be a string or an array of strings. It's purpose is to specify one (the string) or more (the array) substring(s) 
    * that will be compared against the file path of an image to be loaded in order to know if the reduction should be applied or not. If the image meets the
    * threshold size requirement and it's file path contains this string (or strings), it won't be reduced. This parameter should be used in order to mantain the 
    * quality of some images even they meet the size threshold requirement.
    */
    CocoonJS.App.setTextureReduction = function(sizeThreshold, applyTo, forbidFor)
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setDefaultTextureReducerThreshold", arguments);
        }
    };


    /**
    * Prints to the console the memory usage of the currently alive textures
    * @function
    */
    CocoonJS.App.logMemoryInfo = function()
    {
        if (CocoonJS.App.nativeExtensionObjectAvailable)
        {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "logMemoryInfo", arguments);
        }
    };

    /**
    * Enable CocoonJS Webview FPS overlay.
    * @function
    */
    CocoonJS.App.enableFPSInTheWebView = function(fpsLayout, textColor)
    {
        if (!CocoonJS.App.fpsInTheWebViewEnabled)
        {
            fpsLayout = fpsLayout ? fpsLayout : CocoonJS.App.FPSLayout.TOP_RIGHT;
            textColor = textColor ? textColor : "white";
            var jsCode = "" +
                "(function()" +
                "{" +
                    "var COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES = ['js/CocoonJSExtensions/CocoonJS.js', 'js/CocoonJSExtensions/CocoonJS_App.js', 'js/CocoonJSExtensions/CocoonJS_App_ForWebView.js'];" +
                    "var loadedScriptCounter = 0;" + 
                    "var loadedScriptFunction = function() " +
                    "{ " +
                        "loadedScriptCounter++;"+
                        "if (loadedScriptCounter >= COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length)"+
                        "{"+
                            "CocoonJS.App.enableFPS(" + JSON.stringify(fpsLayout) + ", " + JSON.stringify(textColor) + ");"+
                        "}"+
                    "};"+
                    "for (var i = 0; i < COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length; i++)"+
                    "{"+
                        "var s = document.createElement('script');"+
                        "s.onload = loadedScriptFunction;"+
                        "s.src = COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES[i];"+
                        "document.body.appendChild(s);"+
                    "}" +
                "})();";
            setTimeout(function()
            {
                CocoonJS.App.forward(jsCode);
            }, 3000);
            CocoonJS.App.fpsInTheWebViewEnabled = true;
        }
    };

    /**
    * Disable CocoonJS Webview FPS overlay.
    * @function
    */
    CocoonJS.App.disableFPSInTheWebView = function()
    {
        // TODO: Implement this function.
    };

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInTheWebViewSucceed} event calls.
     * @name OnLoadInTheWebViewSucceedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in the webview.
     */
    /**
    * This {@link CocoonJS.EventHandler} object allows listening to events called when the WebView load has completed successfully.
    * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInTheWebViewSucceedListener}
    * @event
    * @static
    * @memberOf CocoonJS.App
    * @param {string} pageURL A string that represents the page URL loaded.
    */
    CocoonJS.App.onLoadInTheWebViewSucceed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpageload");

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInTheWebViewFailed} event calls.
     * @name OnLoadInTheWebViewFailedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in the webview.
     */
    /**
    * This {@link CocoonJS.EventHandler} object allows listening to events called when the WebView load fails.
    * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInTheWebViewFailedListener}
    * @event
    * @static
    * @memberOf CocoonJS.App
    */
    CocoonJS.App.onLoadInTheWebViewFailed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpagefail");
    
})();
(function() 
{
    CocoonJS.Audio = function() 
    {
        return this;
    };

    CocoonJS.Audio.prototype = 
    {
        audio : null,
        setAudio : function( audio ) 
        {
            this.audio = audio;
            this.audio.load();
            return this;
        },
                
        loop : function( loop ) {
            return this;
        },

        play : function() 
        {
            this.audio.play();
            return this;
        },

        pause : function() 
        {
            this.audio.pause();
            return this;
        },
                
        stop: function()
        {
            this.audio.pause();
            this.audio.currentTime = 0;
        },
        
        volume : function(volume)
        {
            if (!this.audio) 
            {
                console.log("audio not present.");
                return;
            }
            
            this.audio.volume = volume;
            return this;
        },
        
        getVolume : function()
        {
            return this.audio.volume;
        }
    }
})();
(function() 
{
    CocoonJS.Music = function() 
    {
        return this;
    };

    CocoonJS.Music.prototype = 
    {
        audio : null,
        setAudio : function(audio) 
        {
            this.audio = audio;
            this.audio.load();
            this.audio.addEventListener(
                'ended',
                function(audioEvent) 
                {
                    audioEvent.target.playing= false;
                    console.log("Audio ends playing.");
                },
                false
            );
            return this;
        },

        loop : function() 
        {
            if (!this.audio) 
            {
                console.log("audio not present.");
                return;
            }

            this.audio.loop= !this.audio.loop;
            return this;
        },

        play : function() {

            if (!this.audio) {
                console.log("audio not present.");
                return;
            }

            if (this.audio.playing) {
                return;
            }
            
            this.audio.playing = true;
            this.audio.play();

            return this;
        },

        pause : function() 
        {
            if (!this.audio) 
            {
                console.log("audio not present.");
                return;
            }
            
            this.audio.pause();
            this.audio.playing = false;
            
            return this;
        },
        
        volume : function(volume)
        {
            if (!this.audio) 
            {
                console.log("audio not present.");
                return;
            }
            
            this.audio.volume = volume;
            return this;
        },
                
        getVolume : function()
        {
            return this.audio.volume;
        },
        
        stop: function()
        {
            this.audio.pause();
            this.audio.currentTime = 0;
        },
    }
})();
/*!
 *  howler.js v1.1.17
 *  howlerjs.com
 *
 *  (c) 2013-2014, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {
  // setup
  var cache = {};

  // setup the audio context
  var ctx = null,
    usingWebAudio = true,
    noAudio = false;
  if (typeof AudioContext !== 'undefined') {
    ctx = new AudioContext();
  } else if (typeof webkitAudioContext !== 'undefined') {
    ctx = new webkitAudioContext();
  } else if (typeof Audio !== 'undefined') {
    usingWebAudio = false;
    try {
      new Audio();
    } catch(e) {
      noAudio = true;
    }
  } else {
    usingWebAudio = false;
    noAudio = true;
  }

  // create a master gain node
  if (usingWebAudio) {
    var masterGain = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
    masterGain.gain.value = 1;
    masterGain.connect(ctx.destination);
  }

  // create global controller
  var HowlerGlobal = function() {
    this._volume = 1;
    this._muted = false;
    this.usingWebAudio = usingWebAudio;
    this.noAudio = noAudio;
    this._howls = [];
  };
  HowlerGlobal.prototype = {
    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this;

      // make sure volume is a number
      vol = parseFloat(vol);

      if (vol >= 0 && vol <= 1) {
        self._volume = vol;

        if (usingWebAudio) {
          masterGain.gain.value = vol;
        }

        // loop through cache and change volume of all nodes that are using HTML5 Audio
        for (var key in self._howls) {
          if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
            // loop through the audio nodes
            for (var i=0; i<self._howls[key]._audioNode.length; i++) {
              self._howls[key]._audioNode[i].volume = self._howls[key]._volume * self._volume;
            }
          }
        }

        return self;
      }

      // return the current global volume
      return (usingWebAudio) ? masterGain.gain.value : self._volume;
    },

    /**
     * Mute all sounds.
     * @return {Howler}
     */
    mute: function() {
      this._setMuted(true);

      return this;
    },

    /**
     * Unmute all sounds.
     * @return {Howler}
     */
    unmute: function() {
      this._setMuted(false);

      return this;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    _setMuted: function(muted) {
      var self = this;

      self._muted = muted;

      if (usingWebAudio) {
        masterGain.gain.value = muted ? 0 : self._volume;
      }

      for (var key in self._howls) {
        if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
          // loop through the audio nodes
          for (var i=0; i<self._howls[key]._audioNode.length; i++) {
            self._howls[key]._audioNode[i].muted = muted;
          }
        }
      }
    }
  };

  // allow access to the global audio controls
  var Howler = new HowlerGlobal();

  // check for browser codec support
  var audioTest = null;
  if (!noAudio) {
    audioTest = new Audio();
    var codecs = {
      mp3: !!audioTest.canPlayType('audio/mpeg;').replace(/^no$/, ''),
      opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
      ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
      wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
      m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
      mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
      weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
    };
  }

  // setup the audio object
  var Howl = function(o) {
    var self = this;

    // setup the defaults
    self._autoplay = o.autoplay || false;
    self._buffer = o.buffer || false;
    self._duration = o.duration || 0;
    self._format = o.format || null;
    self._loop = o.loop || false;
    self._loaded = false;
    self._sprite = o.sprite || {};
    self._src = o.src || '';
    self._pos3d = o.pos3d || [0, 0, -0.5];
    self._volume = o.volume !== undefined ? o.volume : 1;
    self._urls = o.urls || [];
    self._rate = o.rate || 1;

    // setup event functions
    self._onload = [o.onload || function() {}];
    self._onloaderror = [o.onloaderror || function() {}];
    self._onend = [o.onend || function() {}];
    self._onpause = [o.onpause || function() {}];
    self._onplay = [o.onplay || function() {}];

    self._onendTimer = [];

    // Web Audio or HTML5 Audio?
    self._webAudio = usingWebAudio && !self._buffer;

    // check if we need to fall back to HTML5 Audio
    self._audioNode = [];
    if (self._webAudio) {
      self._setupAudioNode();
    }

    // add this to an array of Howl's to allow global control
    Howler._howls.push(self);

    // load the track
    self.load();
  };

  // setup all of the methods
  Howl.prototype = {
    /**
     * Load an audio file.
     * @return {Howl}
     */
    load: function() {
      var self = this,
        url = null;

      // if no audio is available, quit immediately
      if (noAudio) {
        self.on('loaderror');
        return;
      }

      // loop through source URLs and pick the first one that is compatible
      for (var i=0; i<self._urls.length; i++) {        
        var ext, urlItem;

        if (self._format) {
          // use specified audio format if available
          ext = self._format;
        } else {
          // figure out the filetype (whether an extension or base64 data)
          urlItem = self._urls[i].toLowerCase().split('?')[0];
          ext = urlItem.match(/.+\.([^?]+)(\?|$)/);
          ext = (ext && ext.length >= 2) ? ext : urlItem.match(/data\:audio\/([^?]+);/);

          if (ext) {
            ext = ext[1];
          } else {
            self.on('loaderror');
            return;
          }
        }

        if (codecs[ext]) {
          url = self._urls[i];
          break;
        }
      }

      if (!url) {
        self.on('loaderror');
        return;
      }

      self._src = url;

      if (self._webAudio) {
        loadBuffer(self, url);
      } else {
        var newNode = new Audio();
        self._audioNode.push(newNode);

        // setup the new audio node
        newNode.src = url;
        newNode._pos = 0;
        newNode.preload = 'auto';
        newNode.volume = (Howler._muted) ? 0 : self._volume * Howler.volume();
       
        // add this sound to the cache
        cache[url] = self;

        // setup the event listener to start playing the sound
        // as soon as it has buffered enough
        var listener = function() {
          // round up the duration when using HTML5 Audio to account for the lower precision
          self._duration = Math.ceil(newNode.duration * 10) / 10;

          // setup a sprite if none is defined
          if (Object.getOwnPropertyNames(self._sprite).length === 0) {
            self._sprite = {_default: [0, self._duration * 1000]};
          }

          if (!self._loaded) {
            self._loaded = true;
            self.on('load');
          }

          if (self._autoplay) {
            self.play();
          }

          // clear the event listener
          newNode.removeEventListener('canplaythrough', listener, false);
        };
        newNode.addEventListener('canplaythrough', listener, false);
        newNode.load();
      }

      return self;
    },

    /**
     * Get/set the URLs to be pulled from to play in this source.
     * @param  {Array} urls  Arry of URLs to load from
     * @return {Howl}        Returns self or the current URLs
     */
    urls: function(urls) {
      var self = this;

      if (urls) {
        self.stop();
        self._urls = (typeof urls === 'string') ? [urls] : urls;
        self._loaded = false;
        self.load();

        return self;
      } else {
        return self._urls;
      }
    },

    /**
     * Play a sound from the current time (0 by default).
     * @param  {String}   sprite   (optional) Plays from the specified position in the sound sprite definition.
     * @param  {Function} callback (optional) Returns the unique playback id for this sound instance.
     * @return {Howl}
     */
    play: function(sprite, callback) {
      var self = this;

      // if no sprite was passed but a callback was, update the variables
      if (typeof sprite === 'function') {
        callback = sprite;
      }

      // use the default sprite if none is passed
      if (!sprite || typeof sprite === 'function') {
        sprite = '_default';
      }

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.play(sprite, callback);
        });

        return self;
      }

      // if the sprite doesn't exist, play nothing
      if (!self._sprite[sprite]) {
        if (typeof callback === 'function') callback();
        return self;
      }

      // get the node to playback
      self._inactiveNode(function(node) {
        // persist the sprite being played
        node._sprite = sprite;

        // determine where to start playing from
        var pos = (node._pos > 0) ? node._pos : self._sprite[sprite][0] / 1000,
          duration = self._sprite[sprite][1] / 1000 - node._pos;

        // determine if this sound should be looped
        var loop = !!(self._loop || self._sprite[sprite][2]);

        // set timer to fire the 'onend' event
        var soundId = (typeof callback === 'string') ? callback : Math.round(Date.now() * Math.random()) + '',
          timerId;
        (function() {
          var data = {
            id: soundId,
            sprite: sprite,
            loop: loop
          };
          timerId = setTimeout(function() {
            // if looping, restart the track
            if (!self._webAudio && loop) {
              self.stop(data.id, data.timer).play(sprite, data.id);
            }

            // set web audio node to paused at end
            if (self._webAudio && !loop) {
              self._nodeById(data.id).paused = true;
              self._nodeById(data.id)._pos = 0;
            }

            // end the track if it is HTML audio and a sprite
            if (!self._webAudio && !loop) {
              self.stop(data.id, data.timer);
            }

            // fire ended event
            self.on('end', soundId);
          }, duration * 1000);

          // store the reference to the timer
          self._onendTimer.push(timerId);

          // remember which timer to cancel
          data.timer = self._onendTimer[self._onendTimer.length - 1];
        })();

        if (self._webAudio) {
          var loopStart = self._sprite[sprite][0] / 1000,
            loopEnd = self._sprite[sprite][1] / 1000;

          // set the play id to this node and load into context
          node.id = soundId;
          node.paused = false;
          refreshBuffer(self, [loop, loopStart, loopEnd], soundId);
          self._playStart = ctx.currentTime;
          node.gain.value = self._volume;

          if (typeof node.bufferSource.start === 'undefined') {
            node.bufferSource.noteGrainOn(0, pos, duration);
          } else {
            node.bufferSource.start(0, pos, duration);
          }
        } else {
          if (node.readyState === 4) {
            node.id = soundId;
            node.currentTime = pos;
            node.muted = Howler._muted;
            node.volume = self._volume * Howler.volume();
            setTimeout(function() { node.play(); }, 0);
          } else {
            self._clearEndTimer(timerId);

            (function(){
              var sound = self,
                playSprite = sprite,
                fn = callback,
                newNode = node;
              var listener = function() {
                sound.play(playSprite, fn);

                // clear the event listener
                newNode.removeEventListener('canplaythrough', listener, false);
              };
              newNode.addEventListener('canplaythrough', listener, false);
            })();

            return self;
          }
        }

        // fire the play event and send the soundId back in the callback
        self.on('play');
        if (typeof callback === 'function') callback(soundId);

        return self;
      });

      return self;
    },

    /**
     * Pause playback and save the current position.
     * @param {String} id (optional) The play instance ID.
     * @param {String} timerId (optional) Clear the correct timeout ID.
     * @return {Howl}
     */
    pause: function(id, timerId) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.pause(id);
        });

        return self;
      }

      // clear 'onend' timer
      self._clearEndTimer(timerId || 0);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        activeNode._pos = self.pos(null, id);

        if (self._webAudio) {
          // make sure the sound has been created
          if (!activeNode.bufferSource || activeNode.paused) {
            return self;
          }

          activeNode.paused = true;
          if (typeof activeNode.bufferSource.stop === 'undefined') {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else {
          activeNode.pause();
        }
      }

      self.on('pause');

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {String} id  (optional) The play instance ID.
     * @param  {String} timerId  (optional) Clear the correct timeout ID.
     * @return {Howl}
     */
    stop: function(id, timerId) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.stop(id);
        });

        return self;
      }

      // clear 'onend' timer
      self._clearEndTimer(timerId || 0);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        activeNode._pos = 0;

        if (self._webAudio) {
          // make sure the sound has been created
          if (!activeNode.bufferSource || activeNode.paused) {
            return self;
          }

          activeNode.paused = true;

          if (typeof activeNode.bufferSource.stop === 'undefined') {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else {
          activeNode.pause();
          activeNode.currentTime = 0;
        }
      }

      return self;
    },

    /**
     * Mute this sound.
     * @param  {String} id (optional) The play instance ID.
     * @return {Howl}
     */
    mute: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.mute(id);
        });

        return self;
      }

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (self._webAudio) {
          activeNode.gain.value = 0;
        } else {
          activeNode.volume = 0;
        }
      }

      return self;
    },

    /**
     * Unmute this sound.
     * @param  {String} id (optional) The play instance ID.
     * @return {Howl}
     */
    unmute: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.unmute(id);
        });

        return self;
      }

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (self._webAudio) {
          activeNode.gain.value = self._volume;
        } else {
          activeNode.volume = self._volume;
        }
      }

      return self;
    },

    /**
     * Get/set volume of this sound.
     * @param  {Float}  vol Volume from 0.0 to 1.0.
     * @param  {String} id  (optional) The play instance ID.
     * @return {Howl/Float}     Returns self or current volume.
     */
    volume: function(vol, id) {
      var self = this;

      // make sure volume is a number
      vol = parseFloat(vol);

      if (vol >= 0 && vol <= 1) {
        self._volume = vol;

        // if the sound hasn't been loaded, add it to the event queue
        if (!self._loaded) {
          self.on('play', function() {
            self.volume(vol, id);
          });

          return self;
        }

        var activeNode = (id) ? self._nodeById(id) : self._activeNode();
        if (activeNode) {
          if (self._webAudio) {
            activeNode.gain.value = vol;
          } else {
            activeNode.volume = vol * Howler.volume();
          }
        }

        return self;
      } else {
        return self._volume;
      }
    },

    /**
     * Get/set whether to loop the sound.
     * @param  {Boolean} loop To loop or not to loop, that is the question.
     * @return {Howl/Boolean}      Returns self or current looping value.
     */
    loop: function(loop) {
      var self = this;

      if (typeof loop === 'boolean') {
        self._loop = loop;

        return self;
      } else {
        return self._loop;
      }
    },

    /**
     * Get/set sound sprite definition.
     * @param  {Object} sprite Example: {spriteName: [offset, duration, loop]}
     *                @param {Integer} offset   Where to begin playback in milliseconds
     *                @param {Integer} duration How long to play in milliseconds
     *                @param {Boolean} loop     (optional) Set true to loop this sprite
     * @return {Howl}        Returns current sprite sheet or self.
     */
    sprite: function(sprite) {
      var self = this;

      if (typeof sprite === 'object') {
        self._sprite = sprite;

        return self;
      } else {
        return self._sprite;
      }
    },

    /**
     * Get/set the position of playback.
     * @param  {Float}  pos The position to move current playback to.
     * @param  {String} id  (optional) The play instance ID.
     * @return {Howl/Float}      Returns self or current playback position.
     */
    pos: function(pos, id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.pos(pos);
        });

        return typeof pos === 'number' ? self : self._pos || 0;
      }

      // make sure we are dealing with a number for pos
      pos = parseFloat(pos);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (pos >= 0) {
          self.pause(id);
          activeNode._pos = pos;
          self.play(activeNode._sprite, id);

          return self;
        } else {
          return self._webAudio ? activeNode._pos + (ctx.currentTime - self._playStart) : activeNode.currentTime;
        }
      } else if (pos >= 0) {
        return self;
      } else {
        // find the first inactive node to return the pos for
        for (var i=0; i<self._audioNode.length; i++) {
          if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
            return (self._webAudio) ? self._audioNode[i]._pos : self._audioNode[i].currentTime;
          }
        }
      }
    },

    /**
     * Get/set the 3D position of the audio source.
     * The most common usage is to set the 'x' position
     * to affect the left/right ear panning. Setting any value higher than
     * 1.0 will begin to decrease the volume of the sound as it moves further away.
     * NOTE: This only works with Web Audio API, HTML5 Audio playback
     * will not be affected.
     * @param  {Float}  x  The x-position of the playback from -1000.0 to 1000.0
     * @param  {Float}  y  The y-position of the playback from -1000.0 to 1000.0
     * @param  {Float}  z  The z-position of the playback from -1000.0 to 1000.0
     * @param  {String} id (optional) The play instance ID.
     * @return {Howl/Array}   Returns self or the current 3D position: [x, y, z]
     */
    pos3d: function(x, y, z, id) {
      var self = this;

      // set a default for the optional 'y' & 'z'
      y = (typeof y === 'undefined' || !y) ? 0 : y;
      z = (typeof z === 'undefined' || !z) ? -0.5 : z;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.pos3d(x, y, z, id);
        });

        return self;
      }

      if (x >= 0 || x < 0) {
        if (self._webAudio) {
          var activeNode = (id) ? self._nodeById(id) : self._activeNode();
          if (activeNode) {
            self._pos3d = [x, y, z];
            activeNode.panner.setPosition(x, y, z);
          }
        }
      } else {
        return self._pos3d;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes.
     * @param  {Number}   from     The volume to fade from (0.0 to 1.0).
     * @param  {Number}   to       The volume to fade to (0.0 to 1.0).
     * @param  {Number}   len      Time in milliseconds to fade.
     * @param  {Function} callback (optional) Fired when the fade is complete.
     * @param  {String}   id       (optional) The play instance ID.
     * @return {Howl}
     */
    fade: function(from, to, len, callback, id) {
      var self = this,
        diff = Math.abs(from - to),
        dir = from > to ? 'down' : 'up',
        steps = diff / 0.01,
        stepTime = len / steps;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.fade(from, to, len, callback, id);
        });

        return self;
      }

      // set the volume to the start position
      self.volume(from, id);

      for (var i=1; i<=steps; i++) {
        (function() {
          var change = self._volume + (dir === 'up' ? 0.01 : -0.01) * i,
            vol = Math.round(1000 * change) / 1000,
            toVol = to;

          setTimeout(function() {
            self.volume(vol, id);

            if (vol === toVol) {
              if (callback) callback();
            }
          }, stepTime * i);
        })();
      }
    },

    /**
     * [DEPRECATED] Fade in the current sound.
     * @param  {Float}    to      Volume to fade to (0.0 to 1.0).
     * @param  {Number}   len     Time in milliseconds to fade.
     * @param  {Function} callback
     * @return {Howl}
     */
    fadeIn: function(to, len, callback) {
      return this.volume(0).play().fade(0, to, len, callback);
    },

    /**
     * [DEPRECATED] Fade out the current sound and pause when finished.
     * @param  {Float}    to       Volume to fade to (0.0 to 1.0).
     * @param  {Number}   len      Time in milliseconds to fade.
     * @param  {Function} callback
     * @param  {String}   id       (optional) The play instance ID.
     * @return {Howl}
     */
    fadeOut: function(to, len, callback, id) {
      var self = this;

      return self.fade(self._volume, to, len, function() {
        if (callback) callback();
        self.pause(id);

        // fire ended event
        self.on('end');
      }, id);
    },

    /**
     * Get an audio node by ID.
     * @return {Howl} Audio node.
     */
    _nodeById: function(id) {
      var self = this,
        node = self._audioNode[0];

      // find the node with this ID
      for (var i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].id === id) {
          node = self._audioNode[i];
          break;
        }
      }

      return node;
    },

    /**
     * Get the first active audio node.
     * @return {Howl} Audio node.
     */
    _activeNode: function() {
      var self = this,
        node = null;

      // find the first playing node
      for (var i=0; i<self._audioNode.length; i++) {
        if (!self._audioNode[i].paused) {
          node = self._audioNode[i];
          break;
        }
      }

      // remove excess inactive nodes
      self._drainPool();

      return node;
    },

    /**
     * Get the first inactive audio node.
     * If there is none, create a new one and add it to the pool.
     * @param  {Function} callback Function to call when the audio node is ready.
     */
    _inactiveNode: function(callback) {
      var self = this,
        node = null;

      // find first inactive node to recycle
      for (var i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
          callback(self._audioNode[i]);
          node = true;
          break;
        }
      }

      // remove excess inactive nodes
      self._drainPool();

      if (node) {
        return;
      }

      // create new node if there are no inactives
      var newNode;
      if (self._webAudio) {
        newNode = self._setupAudioNode();
        callback(newNode);
      } else {
        self.load();
        newNode = self._audioNode[self._audioNode.length - 1];
        newNode.addEventListener('loadedmetadata', function() {
          callback(newNode);
        });
      }
    },

    /**
     * If there are more than 5 inactive audio nodes in the pool, clear out the rest.
     */
    _drainPool: function() {
      var self = this,
        inactive = 0,
        i;

      // count the number of inactive nodes
      for (i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].paused) {
          inactive++;
        }
      }

      // remove excess inactive nodes
      for (i=self._audioNode.length-1; i>=0; i--) {
        if (inactive <= 5) {
          break;
        }

        if (self._audioNode[i].paused) {
          // disconnect the audio source if using Web Audio
          if (self._webAudio) {
            self._audioNode[i].disconnect(0);
          }

          inactive--;
          self._audioNode.splice(i, 1);
        }
      }
    },

    /**
     * Clear 'onend' timeout before it ends.
     * @param  {Number} timerId The ID of the sound to be cancelled.
     */
    _clearEndTimer: function(timerId) {
      var self = this,
        timer = self._onendTimer.indexOf(timerId);

      // make sure the timer gets cleared
      timer = timer >= 0 ? timer : 0;

      if (self._onendTimer[timer]) {
        clearTimeout(self._onendTimer[timer]);
        self._onendTimer.splice(timer, 1);
      }
    },

    /**
     * Setup the gain node and panner for a Web Audio instance.
     * @return {Object} The new audio node.
     */
    _setupAudioNode: function() {
      var self = this,
        node = self._audioNode,
        index = self._audioNode.length;

      // create gain node
      node[index] = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
      node[index].gain.value = self._volume;
      node[index].paused = true;
      node[index]._pos = 0;
      node[index].readyState = 4;
      node[index].connect(masterGain);

      // create the panner
      node[index].panner = ctx.createPanner();
      node[index].panner.setPosition(self._pos3d[0], self._pos3d[1], self._pos3d[2]);
      node[index].panner.connect(node[index]);

      return node[index];
    },

    /**
     * Call/set custom events.
     * @param  {String}   event Event type.
     * @param  {Function} fn    Function to call.
     * @return {Howl}
     */
    on: function(event, fn) {
      var self = this,
        events = self['_on' + event];

      if (typeof fn === "function") {
        events.push(fn);
      } else {
        for (var i=0; i<events.length; i++) {
          if (fn) {
            events[i].call(self, fn);
          } else {
            events[i].call(self);
          }
        }
      }

      return self;
    },

    /**
     * Remove a custom event.
     * @param  {String}   event Event type.
     * @param  {Function} fn    Listener to remove.
     * @return {Howl}
     */
    off: function(event, fn) {
      var self = this,
        events = self['_on' + event],
        fnString = fn.toString();

      // loop through functions in the event for comparison
      for (var i=0; i<events.length; i++) {
        if (fnString === events[i].toString()) {
          events.splice(i, 1);
          break;
        }
      }

      return self;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all play instances attached to this sound.
     */
    unload: function() {
      var self = this;

      // stop playing any active nodes
      var nodes = self._audioNode;
      for (var i=0; i<self._audioNode.length; i++) {
        // stop the sound if it is currently playing
        if (!nodes[i].paused) {
          self.stop(nodes[i].id);
        }

        if (!self._webAudio) {
           // remove the source if using HTML5 Audio
          nodes[i].src = '';
        } else {
          // disconnect the output from the master gain
          nodes[i].disconnect(0);
        }
      }

      // remove the reference in the global Howler object
      var index = Howler._howls.indexOf(self);
      if (index !== null && index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // delete this sound from the cache
      delete cache[self._src];
      self = null;
    }

  };

  // only define these functions when using WebAudio
  if (usingWebAudio) {

    /**
     * Buffer a sound from URL (or from cache) and decode to audio source (Web Audio API).
     * @param  {Object} obj The Howl object for the sound to load.
     * @param  {String} url The path to the sound file.
     */
    var loadBuffer = function(obj, url) {
      // check if the buffer has already been cached
      if (url in cache) {
        // set the duration from the cache
        obj._duration = cache[url].duration;

        // load the sound into this object
        loadSound(obj);
      } else {
        // load the buffer from the URL
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
          // decode the buffer into an audio source
          ctx.decodeAudioData(
            xhr.response,
            function(buffer) {
              if (buffer) {
                cache[url] = buffer;
                loadSound(obj, buffer);
              }
            },
            function(err) {
              obj.on('loaderror');
            }
          );
        };
        xhr.onerror = function() {
          // if there is an error, switch the sound to HTML Audio
          if (obj._webAudio) {
            obj._buffer = true;
            obj._webAudio = false;
            obj._audioNode = [];
            delete obj._gainNode;
            obj.load();
          }
        };
        try {
          xhr.send();
        } catch (e) {
          xhr.onerror();
        }
      }
    };

    /**
     * Finishes loading the Web Audio API sound and fires the loaded event
     * @param  {Object}  obj    The Howl object for the sound to load.
     * @param  {Objecct} buffer The decoded buffer sound source.
     */
    var loadSound = function(obj, buffer) {
      // set the duration
      obj._duration = (buffer) ? buffer.duration : obj._duration;

      // setup a sprite if none is defined
      if (Object.getOwnPropertyNames(obj._sprite).length === 0) {
        obj._sprite = {_default: [0, obj._duration * 1000]};
      }

      // fire the loaded event
      if (!obj._loaded) {
        obj._loaded = true;
        obj.on('load');
      }

      if (obj._autoplay) {
        obj.play();
      }
    };

    /**
     * Load the sound back into the buffer source.
     * @param  {Object} obj   The sound to load.
     * @param  {Array}  loop  Loop boolean, pos, and duration.
     * @param  {String} id    (optional) The play instance ID.
     */
    var refreshBuffer = function(obj, loop, id) {
      // determine which node to connect to
      var node = obj._nodeById(id);

      // setup the buffer source for playback
      node.bufferSource = ctx.createBufferSource();
      node.bufferSource.buffer = cache[obj._src];
      node.bufferSource.connect(node.panner);
      node.bufferSource.loop = loop[0];
      if (loop[0]) {
        node.bufferSource.loopStart = loop[1];
        node.bufferSource.loopEnd = loop[1] + loop[2];
      }
      node.bufferSource.playbackRate.value = obj._rate;
    };

  }

  /**
   * Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
   */
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    });
  }

  /**
   * Add support for CommonJS libraries such as browserify.
   */
  if (typeof exports !== 'undefined') {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }
  
  // define globally in case AMD is not available or available but not used
  window.Howler = Howler;
  window.Howl = Howl;
  
})();



var Math2 = {};

Math2.random = function(from, to)
{
	return Math.random()*(to-from) + from;
}

Math2.map = function(val, inputMin, inputMax, outputMin, outputMax)
{
			/*
			var inputRange = inputMax - inputMin
			
			var inputFraction = (val - inputMin)/inputRange
			
			var outputRange = outputMax - outputMin
			
			var output = (outputRange * inputFraction) + outputMin
			
			return output
			*/
			
	return ((outputMax - outputMin) * ((val - inputMin)/(inputMax - inputMin))) + outputMin;
}


Math2.randomPlusMinus = function(chance)
{
	chance = chance ? chance : 0.5;
	return (Math.random() > chance) ? -1 : 1;
}

Math2.randomInt = function(from, to)
{
	to += 1;
	return Math.floor(Math.random()*(to-from) + from);
}



Math2.randomBool = function(chance)
{
	chance = chance ? chance : 0.5;
	return (Math.random() < chance) ? true : false;
}

/**
 * Provides bind in a cross browser way.
 */
if (typeof Function.prototype.bind != 'function') {
  Function.prototype.bind = (function () {
    var slice = Array.prototype.slice;
    return function (thisArg) {
      var target = this, boundArgs = slice.call(arguments, 1);
 
      if (typeof target != 'function') throw new TypeError();
 
      function bound() {
	var args = boundArgs.concat(slice.call(arguments));
	target.apply(this instanceof bound ? this : thisArg, args);
      }
 
      bound.prototype = (function F(proto) {
          proto && (F.prototype = proto);
          if (!(this instanceof F)) return new F;          
	})(target.prototype);
 
      return bound;
    };
  })();
};
domready(function() 
{
    console.log("------------------------------");
  onReady();
});

window.addEventListener('resize', function()
{
    resize();
});

window.onorientationchange = resize;

PIXI.Texture.fromFrameId = PIXI.Texture.fromFrame;

var GAME_MODE = {
    TITLE : 0, 
    COUNT_DOWN : 1, 
    PLAYING : 2, 
    GAME_OVER : 3, 
    INTRO : 4,
    PAUSED : 5
};

var width = 800;
var height = 600;
var isAdding = false;
var loader;
var game;
var mouseX = 0;
var mouseY = 0;
var ratio;
var offsetX;
var offsetY;
var holder;
var loadInterval = false;
var loadCount = 0;
var gameMode = 0;
var countdown;
var logo;
var black;
var interactive = true;
var stressTest;
var Device = new Fido.Device();
var pixiLogo;

var gameLoop = false;
var thrustLoop = false;
var thrusters = 0;
var thrustersVolume = 0;
var pauseButton = false;
var pauseScreen = false;

var resumeButton = false;
var restartButton = false;
var soundOnButton = false;
var soundOffButton = false;
var sound = true;

function onReady()
{
    FidoAudio.init();
    stressTest = new PIXI.StressTest(onStressTestComplete);
    resize();
}

function onStressTestComplete()
{
    console.log("---------------------");
        stressTest.end();
	GAME.lowMode = stressTest.result < 40;
	
	interactive = false;
	document.body.scroll = "no"; 
    
	loader = new PIXI.AssetLoader([
        "img/stretched_hyper_tile.jpg", 
        "img/SplashAssets.json", 
        "img/WorldAssets-hd.json", 
        "img/HudAssets-hd.json", 
        "img/PixiAssets-hd.json", 
        "img/iP4_BGtile.jpg",  
        "img/blackSquare.jpg",
        "assets/hud/pausedPanel.png",
        "assets/hud/pixieRevised_controls.png",
        "assets/hud/ContinuePlay.png",
        "assets/hud/RestartPlay.png",
        "assets/hud/soundOff.png",
        "assets/hud/soundOn.png",
        "assets/hud/pause.png",
        "assets/hud/PersonalBest.png"
    ]);
    
    loader.addEventListener('onComplete', function (event) 
    {	
        stressTest.remove();
        init();  
        clearInterval(loadInterval);
    });

    loader.load();
    resize();
}

function onTap(event)
{   
    event.originalEvent.preventDefault();
    
    if(event.target.type !== 'button')
    {   
        if(!interactive) return;
	
        if(gameMode === GAME_MODE.INTRO)
        {
            if(!Device.cocoonJS)
            {
                FidoAudio.play('gameMusic');
                FidoAudio.play('runRegular');
                FidoAudio.play('runFast');
            }
            
            interactive = false;
            gameMode =  GAME_MODE.TITLE;
            
            logo.alpha = 0;
            logo.scale.x = 1.5;
            logo.scale.y = 1.5;
            logo.setTexture(PIXI.Texture.fromFrame("assets/hud/pixieRevised_controls.png"));

            TweenLite.to(logo, 0.1, {
                alpha:1
            });
            
            TweenLite.to(logo.scale, 1, {
                x : 1, 
                y : 1, 
                ease : Elastic.easeOut, 
                onComplete : onIntroFaded
            });
        }
        else if(gameMode === GAME_MODE.TITLE)
        {
            interactive = false;
            
            game.start();
            gameMode = GAME_MODE.COUNT_DOWN;
            FidoAudio.setVolume('runRegular', 1);

            if(black) 
            {    
                TweenLite.to(black, 0.2, {
                    alpha : 0
                });
            }

            TweenLite.to(logo, 0.3, {
                alpha : 0, 
                onComplete : function()
                {
                    logo.visible = false;
                    logo.setTexture(PIXI.Texture.fromFrame("gameOver.png"));
                    game.view.showHud();
                    game.view.hud.removeChild(black);
                    countdown.startCountDown(onCountdownComplete);
                }
            });
        }
        else if(gameMode === GAME_MODE.GAME_OVER)
        {   
            interactive = false;
            
            game.view.stage.addChild(black);
            
            TweenLite.to(black, 0.3, {
                alpha : 1, 
                onComplete : function()
                {   
                    game.steve.normalMode();
                    game.joyrideComplete();
                    
                    game.steve.position.x = 0;
                    GAME.camera.x = game.steve.position.x - 100;
                    game.reset();
                    logo.visible = false;
                    gameMode = GAME_MODE.COUNT_DOWN;
                    
                    TweenLite.killTweensOf(GAME.camera);
                    GAME.camera.zoom = 1;

                    TweenLite.to(black, 0.3, {
                        alpha:0, 
                        onComplete:function()
                        {
                            logo.visible = false;
                            game.start();
                            FidoAudio.fadeIn('gameMusic');
                            countdown.startCountDown(onCountdownComplete);
                        }
                    });
                }
            });
        }
        else
        {
            // handle our jump sound
            thrusters = true;
            if(game.isPlaying) game.steve.jump();
        }
    }
}

function init()
{
	gameMode = GAME_MODE.INTRO;
	interactive = false;

	game = new GAME.RprEngine();
	
	document.body.appendChild(game.view.renderer.view);
	game.view.renderer.view.style.position = "absolute";
	game.view.renderer.view.webkitImageSmoothingEnabled = false

	if(GAME.lowMode)
	{
		setInterval(update, 1000/30);
	}
	else
	{
		requestAnimFrame(update);
	}
	
	game.onGameover = onGameover;

	black = new PIXI.Sprite.fromImage("img/blackSquare.jpg");
	this.game.view.hud.addChild(black);
	
    TweenLite.to(black, 0.3, {
        alpha:0.75, 
        delay:0.5
    });
	
	logo = PIXI.Sprite.fromFrame("runLogo.png");
	logo.anchor.x = 0.5;
	logo.anchor.y = 0.5;
	logo.alpha = 0;
    
    this.game.view.hud.addChild(logo);
    
    personalBestTitle = PIXI.Sprite.fromImage("assets/hud/PersonalBest.png");
	personalBestTitle.anchor.x = 0.5;
	personalBestTitle.anchor.y = 0.5;
	personalBestTitle.alpha = 0;
	personalBestTitle.scale.x = 1.5;
	personalBestTitle.scale.y = 1.5;
    
    this.game.view.hud.addChild(personalBestTitle);
	
	var pressStart = PIXI.Sprite.fromFrame("spaceStart.png");
	pressStart.anchor.x = 0.5;
	pressStart.position.y = 200;

	TweenLite.to(logo, 0.1, {
        alpha : 1,
        delay : 0.6,
        onComplete : onIntroFaded
    });
	
    countdown = new GAME.Countdown();
    this.game.view.hud.addChild(countdown);
    
    pauseButton = PIXI.Sprite.fromFrame("assets/hud/pause.png");
    pauseButton.interactive = true;
    pauseButton.anchor.x = 0.5;
    pauseButton.anchor.y = 0.5;
    pauseButton.alpha = 0;
    pauseButton.visible = false;
    pauseButton.type = "button";
    
    pauseScreen = PIXI.Sprite.fromImage("assets/hud/pausedPanel.png");
    pauseScreen.anchor.x = 0.5;
    pauseScreen.anchor.y = 0.5;
    pauseScreen.scale.x = 1.5;
    pauseScreen.scale.y = 1.5;
    pauseScreen.alpha = 0;
    pauseScreen.visible = false;
    
    // Buttons
    resumeButton = PIXI.Sprite.fromImage("assets/hud/ContinuePlay.png");
    resumeButton.anchor.x = 0.5;
    resumeButton.anchor.y = 0.5;
    resumeButton.scale.x = 0;
    resumeButton.scale.y = 0;
    resumeButton.alpha = 0;
    resumeButton.interactive = true;
    
    resumeButton.touchstart = resumeButton.mousedown = function()
    {
        onResumePressed();
    }
    
    restartButton = PIXI.Sprite.fromImage("assets/hud/RestartPlay.png");
    restartButton.anchor.x = 0.5;
    restartButton.anchor.y = 0.5;
    restartButton.scale.x = 0;
    restartButton.scale.y = 0;
    restartButton.alpha = 0;
    restartButton.interactive = true;
    
    restartButton.touchstart = restartButton.mousedown = function(event)
    {
        event.originalEvent.preventDefault();
        onRestartPressed();
    }
    
    soundOffButton = PIXI.Sprite.fromImage("assets/hud/soundOff.png");
    soundOffButton.anchor.x = 0.5;
    soundOffButton.anchor.y = 0.5;
    soundOffButton.scale.x = 0;
    soundOffButton.scale.y = 0;
    soundOffButton.alpha = 0;
    soundOffButton.interactive = true;
    
    soundOffButton.touchstart = soundOffButton.mousedown = function(event)
    {
        event.originalEvent.preventDefault();
        onSoundOffPressed();
    }
    
    soundOnButton = PIXI.Sprite.fromImage("assets/hud/soundOn.png");
    soundOnButton.anchor.x = 0.5;
    soundOnButton.anchor.y = 0.5;
    soundOnButton.scale.x = 0;
    soundOnButton.scale.y = 0;
    soundOnButton.alpha = 0;
    soundOnButton.interactive = true;
    
    soundOnButton.touchstart = soundOnButton.mousedown = function(event)
    {
        event.originalEvent.preventDefault();
        onSoundOnPressed();
    }
        
    this.game.view.stage.addChild(pauseScreen);
    this.game.view.stage.addChild(resumeButton);
    this.game.view.stage.addChild(restartButton);
    this.game.view.stage.addChild(soundOffButton);
    this.game.view.stage.addChild(soundOnButton);
    this.game.view.stage.addChild(pauseButton);

    pauseButton.mousedown = pauseButton.touchstart = function(event)
    {
        event.originalEvent.preventDefault();
        onPaused();
    }

    this.game.view.container.mousedown = this.game.view.container.touchstart = function(event)
    {
        onTap(event);
    }
	
    this.game.view.container.mouseup = this.game.view.container.touchend = function(event)
    {
        onTouchEnd(event);
    }
    
    resize();
    
    FidoAudio.play('gameMusic');
    FidoAudio.play('runRegular');
    FidoAudio.play('runFast');
}

function onResumePressed()
{
    onPaused();
}

function onRestartPressed()
{
    onPaused();
    game.steve.die();
    game.gameover();
}

function onSoundOnPressed()
{
    FidoAudio.muteAll();
    
    TweenLite.to(soundOnButton.scale, 0.6, {
        x : 0, 
        y : 0, 
        ease : Elastic.easeOut
    });
    TweenLite.to(soundOnButton, 0.1, {
        alpha: 0
    });
    TweenLite.to(soundOffButton.scale, 0.6, {
        x : 1, 
        y : 1, 
        ease : Elastic.easeOut
    });
    TweenLite.to(soundOffButton, 0.1, {
        alpha: 1
    });
}

function onSoundOffPressed()
{
    FidoAudio.unMuteAll();
    
    TweenLite.to(soundOffButton.scale, 0.6, {
        x : 0, 
        y : 0, 
        ease : Elastic.easeOut
    });
    TweenLite.to(soundOffButton, 0.1, {
        alpha: 0
    });
    
    TweenLite.to(soundOnButton.scale, 0.6, {
        x : 1, 
        y : 1, 
        ease : Elastic.easeOut
    });
    TweenLite.to(soundOnButton, 0.1, {
        alpha: 1
    });
}

var prevState = false;

function pauseEnded()
{
    pauseScreen.visible = false;
    pauseScreen.scale.x = 1.5;
    pauseScreen.scale.y = 1.5;
    
    resumeButton.alpha = 0;
    resumeButton.visible = false;
    restartButton.alpha = 0;
    restartButton.visible = false;
    soundOnButton.alpha = 0;
    soundOnButton.visible = false;
    soundOffButton.alpha = 0;
    soundOffButton.visible = false;
}

function onPaused()
{     
    pauseButton.scale.set(0.5);

    TweenLite.to(pauseButton.scale, 0.5, {
        x : 1, 
        y : 1, 
        ease : Elastic.easeOut
    });

    if(gameMode === GAME_MODE.PAUSED)
    {
        game.steve.resume();
        
        interactive = true;
        gameMode = prevState;
        prevState = false;

        TweenLite.to(soundOffButton.scale, 0.6, {
            x : 0, 
            y : 0, 
            ease : Elastic.easeOut
        });
        TweenLite.to(soundOffButton, 0.1, {
            alpha: 0
        });
        
        TweenLite.to(soundOnButton.scale, 0.6, {
            x : 0, 
            y : 0, 
            ease : Elastic.easeOut
        });
        TweenLite.to(soundOnButton, 0.1, {
            alpha: 0
        });
        
        TweenLite.to(resumeButton.scale, 0.6, {
            x : 0, 
            y : 0, 
            ease : Elastic.easeOut
        });
        TweenLite.to(resumeButton, 0.1, {
            alpha: 0
        });

        TweenLite.to(restartButton.scale, 0.6, {
            x : 0, 
            y : 0, 
            ease : Elastic.easeOut
        });
        TweenLite.to(restartButton, 0.1, {
            alpha: 0
        });
        
        TweenLite.to(pauseScreen.scale, 1, {
            x : 0, 
            y : 0, 
            ease : Elastic.easeOut
        });
        TweenLite.to(pauseScreen, 0.1, {
            alpha: 0
        });
    }
    else
    {
        game.steve.stop();
        prevState = gameMode;
        gameMode = GAME_MODE.PAUSED;
        interactive = false; 
        
        pauseScreen.visible = true;
        
        TweenLite.to(pauseScreen, 0.1, {
            alpha : 1, 
        });

        TweenLite.to(pauseScreen.scale, 0.6, {
            x : 1, 
            y : 1, 
            ease : Elastic.easeOut
        });
        
        if(FidoAudio.isMuted() === false)
        {
            TweenLite.to(soundOnButton.scale, 0.6, {
                x : 1, 
                y : 1, 
                ease : Elastic.easeOut
            });
            TweenLite.to(soundOnButton, 0.1, {
                alpha: 1
            });
        }
        else
        {
            TweenLite.to(soundOffButton.scale, 0.6, {
                x : 1, 
                y : 1, 
                ease : Elastic.easeOut
            });
            TweenLite.to(soundOffButton, 0.1, {
                alpha: 1
            });
        }
        
        TweenLite.to(resumeButton, 0.1, {
            alpha : 1, 
        });
        TweenLite.to(resumeButton.scale, 0.6, {
            x : 1, 
            y : 1, 
            ease : Elastic.easeOut
        });
        
        TweenLite.to(restartButton, 0.1, {
            alpha : 1, 
        });
        TweenLite.to(restartButton.scale, 0.6, {
            x : 1, 
            y : 1, 
            ease : Elastic.easeOut
        });
    }  
}

function onIntroFaded()
{
	interactive = true;
}

function onGameover()
{
    pauseButton.interactive = false;
    FidoAudio.setVolume('thrusters', 0);
    TweenLite.to(pauseButton, 0.6, {
        alpha : 0,
        onComplete : function()
        {
            pauseButton.visible = false;
        }
    });
    
    gameMode = GAME_MODE.GAME_OVER;
    interactive = false;
}

function showGameover()
{
    logo.visible = true;
    TweenLite.to(logo, 0.3, {
        alpha:1, 
        onComplete : onGameoverShown
    });
}

function onGameoverShown()
{
    this.isGameReallyOver = true;
	interactive = true;
}

function onTouchStart(event)
{   
    onTap(event);   
}

function onCountdownComplete()
{
	interactive = true;
	gameMode = GAME_MODE.PLAYING;
    pauseButton.visible = true;
    TweenLite.to(pauseButton, 0.6, {
        alpha : 1,
        onComplete: function()
        {
            pauseButton.interactive = true;
        }
    });
}

function onTouchEnd(event)
{
    event.originalEvent.preventDefault();
    thrusters = false;
    FidoAudio.setVolume('thrusters', 0);
    if(game.isPlaying) game.steve.fall();     
}

function getRatio(type, w, h) {

        var width = Device.cocoonJS ? window.innerWidth : w,
            height = Device.cocoonJS ? window.innerHeight : h;

        var dips = Device.pixelRatio;
        width = width * dips;
        height = height * dips;

        var scaleX = width / w,
            scaleY = height / h,
            result = {
                x: 1,
                y: 1
            };

        switch (type) {
            case 'all':
                result.x = scaleX > scaleY ? scaleY : scaleX;
                result.y = scaleX > scaleY ? scaleY : scaleX;
                break;
            case 'fit':
                result.x = scaleX > scaleY ? scaleX : scaleY;
                result.y = scaleX > scaleY ? scaleX : scaleY;
                break;
            case 'fill':
                result.x = scaleX;
                result.y = scaleY;
                break;
        }

        return result;
    }

function resize()
{
        window.scrollTo(0, 0);
        
        var h = 640;
	var width = window.innerWidth || document.body.clientWidth; 
	var height = window.innerHeight || document.body.clientHeight; 
        var ratio = height / h;
        
	if(game)
	{
            var view = game.view.renderer.view;
            view.style.height = h * ratio +"px";

            var newWidth = (width / ratio);

            view.style.width = width +"px";

            this.logo.position.x = newWidth / 2;
            this.logo.position.y = h/2 - 20;

            if(black)
            {
                black.scale.x = newWidth/16; 
                black.scale.y = h/16;
            }

            this.countdown.position.x = newWidth / 2;
            this.countdown.position.y = h/2;
		
            game.view.resize(newWidth , h);

            pauseButton.position.x = newWidth - 60;
            pauseButton.position.y = h - 60;
        
        pauseScreen.position.x = (newWidth*0.5);
        pauseScreen.position.y = h * 0.5;
        
        resumeButton.position.x = (newWidth*0.5);
        resumeButton.position.y = (h*0.5);
        
        restartButton.position.x = (newWidth*0.5) + 125;
        restartButton.position.y = (h*0.5);
        
        soundOffButton.position.x = (newWidth*0.5) - 125;
        soundOffButton.position.y = (h*0.5);
        
        soundOnButton.position.x = (newWidth*0.5) - 125;
        soundOnButton.position.y = (h*0.5);
	}
	
	GAME.width = (width /ratio);
	GAME.height = h;
}

function update()
{
    game.update();

    if(!GAME.lowMode)
    {
        if(FidoAudio.isMuted() === false)
        {
            if(thrusters === true) 
            {
                thrustersVolume += (0.4 - thrustersVolume) * 0.1;
            }
            else
            {
                thrustersVolume += (0 - thrustersVolume) * 0.1;
            }

            if(thrustersVolume < 0.01) thrustersVolume = 0;

            FidoAudio.setVolume('thrusters', thrustersVolume);
        }
        
        requestAnimFrame(update);
    }
}

Time = function()
{
	this.deltaTime = 1;	
	this.lastTime = 0;
}

Time.constructor = Time;

Time.prototype.update = function()
{
	var time = Date.now();
	var currentTime =  time;
	var passedTime = currentTime - this.lastTime;
	
	if(passedTime > 100) passedTime = 100;

	this.DELTA_TIME = (passedTime * 0.06);
	this.lastTime = currentTime;
}

// Override
PIXI.InteractionManager.prototype.onTouchStart = function(event)
{
    var rect = this.interactionDOMElement.getBoundingClientRect();

    if(PIXI.AUTO_PREVENT_DEFAULT)event.preventDefault();
    
    var changedTouches = event.changedTouches;
    for (var i=0; i < changedTouches.length; i++)
    {
        var touchEvent = changedTouches[i];

        var touchData = this.pool.pop();
        if(!touchData)touchData = new PIXI.InteractionData();

        touchData.originalEvent =  event || window.event;

        this.touchs[touchEvent.identifier] = touchData;
        touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
        touchData.global.y = (touchEvent.clientY - rect.top)  * (this.target.height / rect.height);
        
        if(navigator.isCocoonJS) 
        {
            var h = this.interactionDOMElement.style.height;
            var w = this.interactionDOMElement.style.width;
            
            var heightRatio = parseInt(h.replace('px', '')) / GAME.height;
            var widthRatio = parseInt(w.replace('px', '')) / GAME.width;
            
            touchData.global.x = touchEvent.clientX / widthRatio;
            touchData.global.y = touchEvent.clientY / heightRatio;
        }

        var length = this.interactiveItems.length;

        for (var j = 0; j < length; j++)
        {
            var item = this.interactiveItems[j];

            if(item.touchstart || item.tap)
            {
                item.__hit = this.hitTest(item, touchData);

                if(item.__hit)
                {
                    //call the function!
                    if(item.touchstart)item.touchstart(touchData);
                    item.__isDown = true;
                    item.__touchData = touchData;

                    if(!item.interactiveChildren)break;
                }
            }
        }
    }
};
/**
 * @author Mat Groves http://matgroves.com/
 */
var PIXI = PIXI || {};

PIXI.StressTest = function(callback)
{
    this.Device = new Fido.Device();
    
    this.width = window.innerWidth || document.body.clientWidth;
    this.height = window.innerHeight || document.body.clientHeight;
    
    this.frameCount = 0;
    this.tick = 0;
    this.loadingFrames = [
        "img/loading_01.png",
        "img/loading_02.png",
        "img/loading_03.png",
        "img/loading_04.png"
    ];
    this.currentLoadSprite = false;

    var assetLoader = new PIXI.AssetLoader(this.loadingFrames, true);
    assetLoader.load();
    
    this.callback = callback;
    this.renderer = new PIXI.CanvasRenderer(this.width, this.height, false, false);
    this.stage = new PIXI.Stage(0x25284A);
    
    this.graphics = new PIXI.Graphics();
    this.graphics.beginFill(0x25284A);
    this.graphics.drawRect(0, 0, this.width, this.height);
    this.stage.addChild(this.graphics);
    
    document.body.appendChild(this.renderer.view);
    
    this.stage.touchstart = this.stage.mousedown = function(event)
    {
        event.originalEvent.preventDefault();
    }


    this.duration = 3;

    var scope = this;
    this.texture = PIXI.Texture.fromImage("img/testImage.png");
    this.texture.baseTexture.addEventListener('loaded', function()
    { 
        scope.begin();
    });

    this.frameRate = [];
}

// constructor
PIXI.StressTest.constructor = PIXI.StressTest;

PIXI.StressTest.prototype.begin = function()
{
    this.testSprites = [];
    for (var i=0; i < 300; i++) 
    {
        var bunny = new PIXI.Sprite(this.texture);

        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;
        bunny.position.x = 50 + Math.random() * 400; 
        bunny.position.y = 10; 

        this.stage.addChild(bunny);
        this.testSprites.push(bunny);
    };
    
    this.graphics2 = new PIXI.Graphics();
    this.graphics2.beginFill(0x25284A);
    this.graphics2.drawRect(0, 0, this.width, this.height);
    this.stage.addChild(this.graphics2);
    
    var logo = new PIXI.Sprite(PIXI.Texture.fromImage('img/goodboy_logo.png'));
        logo.anchor.x = 0.5;
        logo.anchor.y = 0.5;
        logo.position.x = this.width * 0.5;
        logo.position.y = this.height * 0.48;
        
    if(this.Device.cocoonJS)
    {
        logo.scale.set(1);
        logo.position.y = this.height * 0.47;
    }
    else
    {
        logo.scale.set(1);
    }
        this.stage.addChild(logo);

    this.renderer.render(this.stage);

    this.startTime = Date.now();
    this.lastTime = Date.now();

    var scope = this;
    requestAnimFrame(function()
    {
        scope.update();
    });
}

PIXI.StressTest.prototype.resize = function(w, h)
{
    this.width = w;
    this.height = h;
}

PIXI.StressTest.prototype.update = function()
{
    this.frameCount++;
    
    if(this.frameCount % 12 === 1)
    {      
        if(this.tick === this.loadingFrames.length)
        {
            this.tick = 0;
        }

        var sprite = SpritePool.getInstance().get(this.loadingFrames[this.tick])
            sprite.anchor.x = 0.5;
            sprite.anchor.y = 0.5;
            sprite.position.x = this.width * 0.5;
            sprite.position.y = this.height * 0.5 + 40;

        if(this.Device.cocoonJS)
        {
            sprite.position.y = this.height * 0.5 + 40;
        }

        this.stage.addChild(sprite);
        if(this.currentLoadSprite !== false) this.stage.removeChild(this.currentLoadSprite);
        
        this.currentLoadSprite = sprite;
        
        this.tick++;
    }

    var currentTime = Date.now();

    for (var i=0; i < this.testSprites.length; i++) 
    {
      this.testSprites[i].rotation += 0.3;
    }

    this.renderer.render(this.stage);

    var diff = currentTime - this.lastTime;
    diff *= 0.06;

    this.frameRate.push(diff);

    this.lastTime = currentTime;

    var elapsedTime = currentTime - this.startTime;

    if(elapsedTime < this.duration * 1000)
    {
        var scope = this;
        requestAnimFrame(function()
        {
            scope.update()
        });	
    }
    else
    {
        if(this.callback) this.callback();
    }
}

PIXI.StressTest.prototype.end = function()
{
    this.result = this.frameRate.length / this.duration;   
}

PIXI.StressTest.prototype.remove = function()
{
    document.body.removeChild(this.renderer.view);
    this.cover = null;
    this.renderer = null;  
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.Background = function(frontView)
{
	PIXI.DisplayObjectContainer.call( this );
	this.width = 1000;
	this.scrollPosition = 1500;
	//{"x":604,"y":803,"w":600,"h":799},
	//{"x":1206,"y":2,"w":600,"h":799},
	//{"x":604,"y":2,"w":600,"h":799},
	
	this.foggyTrees = new GAME.BackgroundElement(PIXI.Texture.fromFrameId("05_far_BG.jpg"), 40, this);
	this.rearSilhouette = new GAME.BackgroundElement(PIXI.Texture.fromFrameId("03_rear_silhouette.png"), 358, this);
	this.rearCanopy = new GAME.BackgroundElement(PIXI.Texture.fromFrameId("03_rear_canopy.png"), 0, this);
	
	
	
	this.tree1 = PIXI.Sprite.fromFrame("02_tree_1.png");
	this.tree1.anchor.x = 0.5;
	this.addChild(this.tree1);
	
	this.tree2 = PIXI.Sprite.fromFrame("02_tree_2.png");
	this.tree2.anchor.x = 0.5;
	this.tree2.position.y = 50;
	this.addChild(this.tree2);

	this.farCanopy = new GAME.BackgroundElement(PIXI.Texture.fromFrameId("02_front_canopy.png"), 0, this);
	this.vines = new GAME.Vines(this);
	this.roofLeaves = new GAME.BackgroundElement(PIXI.Texture.fromFrameId("00_roof_leaves.png"), 0, this);
	
	this.frontSilhouette = new GAME.BackgroundElement(PIXI.Texture.fromFrameId("01_front_silhouette.png"), 424, this);
	
	//this.ground = new GAME.BackgroundElement(PIXI.Texture.fromFrameId("00_forest_floor.png"), (640 - 158)* SCALE, this);
	this.foggyTrees.speed = 1/2;
	this.rearSilhouette.speed = 1.2/2;
	
	this.rearCanopy.speed = 1.2/2;
	this.farCanopy.speed = 1.5/2;
	this.frontSilhouette.speed = 1.6/2;
	this.roofLeaves.speed = 2/2;
	//this.ground.speed = 1
	
	
}

// constructor
GAME.Background.constructor = GAME.Background;

GAME.Background.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.Background.prototype.updateTransform = function()
{
	this.scrollPosition = GAME.camera.x + 4000// * GAME.time.DELTA_TIME;

	var treePos = -this.scrollPosition * 1.5/2;
	treePos %= this.width + 556;
	treePos += this.width + 556;
	treePos -= this.tree1.width/2;
	this.tree1.position.x = treePos -GAME.xOffset;
	
	var treePos2 = -(this.scrollPosition + this.width/2) * 1.5/2;
	treePos2 %= this.width + 556;
	treePos2 += this.width + 556;
	treePos2 -= this.tree2.width/2;
	this.tree2.position.x = treePos2 -GAME.xOffset;
	
	//this.ground.setPosition(this.scrollPosition);
	this.foggyTrees.setPosition(this.scrollPosition);
	this.rearSilhouette.setPosition(this.scrollPosition);
	this.rearCanopy.setPosition(this.scrollPosition);
	this.farCanopy.setPosition(this.scrollPosition);
	this.frontSilhouette.setPosition(this.scrollPosition);
	
	this.roofLeaves.setPosition(this.scrollPosition);
	//this.ground.setPosition(this.scrollPosition);
	
	this.vines.setPosition(this.scrollPosition);
	
	
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
}

GAME.Vines = function(owner)
{
	this.vines = [];
	this.owner = owner

	for (var i=0; i < 10; i++) 
	{
		var vine = new PIXI.Sprite.fromFrame("01_hanging_flower3.png");
		vine.offset = i * 100 + Math.random() * 50;
		vine.speed = (1.5 + Math.random() * 0.25 )/2;
		vine.position.y = Math.random() * -200;
		owner.addChild(vine);
		vine.position.x = 200;
		this.vines.push(vine);
	};	
				  
	this.speed = 1;
}

GAME.Vines.prototype.setPosition = function(position)
{
	for (var i=0; i < this.vines.length; i++) 
	{
		var vine = this.vines[i];
		
		var pos = -(position + vine.offset) * vine.speed;// * this.speed;
		pos %=  this.owner.width;
		pos +=  this.owner.width;
		
		vine.position.x = pos//vine.offset// Math.floor(pos)
		//this.sky[i].position.y = Math.round(this.sky[i].position.y);
	};	
}

GAME.Background.prototype.joyRideMode = function()
{
	// change background!
	
}

GAME.Background.prototype.normalMode = function()
{
	
}

GAME.BackgroundElement = function(texture, y, owner)
{
	this.sprites = [];
	this.spriteWidth = texture.width-1;
	var amount = Math.ceil(940 / this.spriteWidth);
	if(amount < 3)amount = 3;
	
	for (var i=0; i < amount; i++) 
	{
		var sprite = new PIXI.Sprite(texture);
		sprite.position.y = y;
		owner.addChild(sprite);
		this.sprites.push(sprite);
	};	
				  
	this.speed = 1;
}

GAME.BackgroundElement.prototype.setPosition = function(position)
{
	var h = this.spriteWidth;
	
	for (var i=0; i < this.sprites.length; i++) 
	{
		var pos = -position * this.speed;
		pos += i *  h ;
		pos %=  h * this.sprites.length ;
		pos +=  h * 2;
		
		this.sprites[i].position.x = Math.floor(pos) -GAME.xOffset
		//this.sky[i].position.y = Math.round(this.sky[i].position.y);
	};	
}
/*
var GAME = GAME || {};

GAME.Background = function()
{
	PIXI.DisplayObjectContainer.call( this );
	/*
	this.texture = new PIXI.Texture("img/floor.png");
	//this.
	
	this.sprites = [new PIXI.Sprite(this.texture, {x:1206,y:2,width:600,height:799}),
					new PIXI.Sprite(this.texture, {x:604,y:2,width:600,height:799}),
					new PIXI.Sprite(this.texture, {x:2,y:2,width:600,height:799}) ];
	
	for (var i=0; i < this.sprites.length; i++) 
	{
	//	this.addChild(this.sprites[i]);
	};				
	*/
//}

// constructor
//GAME.Background.constructor = GAME.Background;
//GAME.Background.protoype = Object.create( PIXI.DisplayObjectContainer.prototype );

/*
GAME.Background.prototype.updateTransform = function()
{
	
}*/;
/**
 * @author Mat Groves
 */

var GAME = GAME || {};


GAME.Lava = function(owner)
{
	this.textures = [PIXI.Texture.fromFrameId("lava_slosh_01.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_02.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_03.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_04.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_05.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_06.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_07.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_08.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_07.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_06.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_05.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_04.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_03.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_02.png"),
	                 PIXI.Texture.fromFrameId("lava_slosh_01.png")];

	var texture = this.textures[0];
	
	this.sprites = [];
	this.spriteWidth = texture.width-1;
	var amount = 8;
    
	if(amount < 3) amount = 3;
	
	for (var i=0; i < amount; i++) 
	{
		var sprite = new PIXI.Sprite(texture);
		sprite.position.y = 580;
		owner.addChild(sprite);
		this.sprites.push(sprite);
	};	
				  
	this.speed = 1;
	this.offset = 0;
	this.count = 0;
}

GAME.Lava.prototype.setPosition = function(position)
{
	var h = this.spriteWidth;
	var frame = ( this.count) % this.textures.length;
	frame = Math.floor(frame);
	
	this.offset += 2.5
	
	position += this.offset;
	
	this.count += 0.3;
	for (var i=0; i < this.sprites.length; i++) 
	{
		var pos = -position * this.speed;
		pos += i *  h ;
		pos %=  h * this.sprites.length ;
		pos +=  h * 2;
		
		this.sprites[i].setTexture(this.textures[frame])
		this.sprites[i].position.x = Math.floor(pos) + 800 - GAME.xOffset;
	};	
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.JoyBackground = function()
{
	PIXI.DisplayObjectContainer.call( this );
	this.width = 1000;
	this.scrollPosition = 1500;
	var SCALE =1// 0.5
	this.swoosh = new GAME.BackgroundElement(PIXI.Texture.fromImage("img/stretched_hyper_tile.jpg"), 0 , this);
	this.swoosh.speed = 0.7
	this.scale.y = 1.7;
	this.scale.x = 4;
}

// constructor
GAME.JoyBackground.constructor = GAME.LowFiBackground;

GAME.JoyBackground.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.JoyBackground.prototype.updateTransform = function()
{
	this.scrollPosition = GAME.camera.x + 4000// * GAME.time.DELTA_TIME;

	this.swoosh.setPosition(this.scrollPosition);
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.LowFiBackground = function()
{
	PIXI.DisplayObjectContainer.call( this );
	this.width = 1000;
	this.scrollPosition = 1500;
	var SCALE =1// 0.5
	this.swoosh = new GAME.BackgroundElement(PIXI.Texture.fromImage("img/iP4_BGtile.jpg"), 0 , this);
	this.swoosh.speed = 0.7
}

// constructor
GAME.LowFiBackground.constructor = GAME.LowFiBackground;

GAME.LowFiBackground.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.LowFiBackground.prototype.updateTransform = function()
{
	this.scrollPosition = GAME.camera.x + 4000// * GAME.time.DELTA_TIME;

	this.swoosh.setPosition(this.scrollPosition);
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.RprView = function(engine)
{
    this.engine = engine;

    if(Device.cocoonJS)
    {
        this.renderer = new PIXI.CanvasRenderer(600, 800);
    }
    else
    {
        this.renderer = PIXI.autoDetectRenderer(600, 800);
    }

    GAME.HIGH_MODE = (this.renderer instanceof PIXI.WebGLRenderer);

    this.stage = new PIXI.Stage();
    
//    console.log("Renderer width = " + this.renderer.width);
//    console.log("Renderer height = " + this.renderer.height);
//    
//    console.log("Window width = " + window.innerWidth || document.body.clientWidth);
//    console.log("Window height = " + window.innerHeight || document.body.clientHeight);

    this.container =   new PIXI.DisplayObjectContainer();
    this.container.hitArea = this.stage.hitArea;
    this.container.interactive = true;

    this.hud = new PIXI.DisplayObjectContainer();
    this.game = new PIXI.DisplayObjectContainer();
    this.gameFront = new PIXI.DisplayObjectContainer();

    this.container.addChild(this.game);
    this.container.addChild(this.gameFront);
	
    this.stage.addChild(this.container);
	this.stage.addChild(this.hud);
    
	if(GAME.lowMode)
	{
		this.normalBackground = new GAME.LowFiBackground();
	}
	else
	{
		this.normalBackground = new GAME.Background(this.gameFront);
	}
	
	this.joyBackground = new GAME.JoyBackground();
	
	this.lava = new GAME.Lava(this.gameFront);

	this.powerBar = new GAME.PowerBar();
	this.score = new GAME.Score();
        this.bestScore = new GAME.BestScore();
	this.background = this.normalBackground;
    
	this.score.position.x = 300;
    
    this.game.addChild(this.background);
	this.hud.addChild(this.powerBar);
	this.hud.addChild(this.score);
	this.hud.addChild(this.bestScore);
	
	this.trail = new GAME.SteveTrail(this.game);
	this.trail2 = new GAME.SteveTrailFire(this.game);
	
	this.powerBar.alpha = 0;
	this.score.alpha = 0;
	this.bestScore.alpha = 0;
    
	this.count = 0;
	this.zoom = 1;
    
	this.white = PIXI.Sprite.fromImage("img/whiteSquare.jpg");
	GAME.xOffset = this.container.position.x;
	
	this.dust = new GAME.PixiDust();
	this.container.addChild(this.dust);
	
	this.splash = new GAME.Splash();
	this.splash.position.y = 300;
	this.splash.position.x = 300;
    
	this.game.addChild(this.splash);
}

// constructor
GAME.RprView.constructor = GAME.RprView;

GAME.RprView.prototype.showHud = function()
{
    var start = 
    {
        x : GAME.width + 300,
        y : 0
    };
    
	this.score.alpha = 1;
	this.score.position.x = start.x;
	TweenLite.to(this.score.position, 1, {
        x : GAME.width - 295 - 20, 
        ease : Elastic.easeOut
    });
    
    this.bestScore.alpha = 1;
	this.bestScore.position.x = start.x;
	this.bestScore.position.y -= 14;
	TweenLite.to(this.bestScore.position, 1, {
        x : GAME.width - 20, 
        ease : Elastic.easeOut
    });
    
	this.powerBar.alpha = 1;
	this.powerBar.position.x = GAME.width;
	TweenLite.to(this.powerBar.position, 1, {
        x : GAME.width - 295, 
        ease : Elastic.easeOut, 
        delay : 0.3
    });
}

GAME.RprView.prototype.hideHud = function()
{
	
}

GAME.RprView.prototype.update = function()
{
	this.count += 0.01;
	
	if(!GAME.lowMode)
	{
		var ratio = (this.zoom-1);
		var position = -GAME.width/2
		var position2 = -this.engine.steve.view.position.x;
		var inter = position + (position2 - position) * ratio;
		
		this.container.position.x = inter * this.zoom ;
		this.container.position.y = -this.engine.steve.view.position.y * this.zoom ;
		
		this.container.position.x += GAME.width/2;
		this.container.position.y += GAME.height/2;
		
		GAME.xOffset = this.container.position.x;
		
		if(this.container.position.y > 0) this.container.position.y = 0;
		var yMax = -GAME.height * this.zoom ;
		yMax += GAME.height;
		
		if(this.container.position.y < yMax) this.container.position.y = yMax;
		
		this.container.scale.x = this.zoom ;
		this.container.scale.y = this.zoom ;
	}
	
	this.trail.target = this.engine.steve;
	this.trail2.target = this.engine.steve;

	this.trail.update();
	this.trail2.update();
	this.dust.update();
	
	this.lava.setPosition(GAME.camera.x + 4000);
	this.bestScore.update();	
    this.score.setScore(Math.round(this.engine.score));
	this.powerBar.bar.scale.x = ( (this.engine.pickupCount/(50 *  this.engine.bulletMult) )*(248/252) )
	this.renderer.render(this.stage);
}

GAME.RprView.prototype.joyrideMode = function()
{
	this.game.removeChild(this.background);
	this.background = this.joyBackground;
	this.game.addChildAt(this.background, 0);
	this.stage.addChild(this.white);
	this.white.alpha = 1;
	
    TweenLite.to(this.white, 0.7, {
        alpha:0, 
        ease:Sine.easeOut
    });
}

GAME.RprView.prototype.doSplash = function()
{
	this.splash.splash( this.engine.steve.position);
}

GAME.RprView.prototype.normalMode = function()
{
	this.game.removeChild(this.background);
	this.background = this.normalBackground;
	this.game.addChildAt(this.background, 0);
	this.stage.addChild(this.white)
	this.white.alpha = 1;
    
	TweenLite.to(this.white, 0.5, {
        alpha : 0, 
        ease : Sine.easeOut
    });
}

GAME.RprView.prototype.resize = function(w, h)
{
//    console.log("Width ->" + w);
//    console.log("Height -> " + h);

	GAME.width = w;
	GAME.height = h;
    
	this.renderer.resize(w,h);
	this.background.width = w;
    
	this.bestScore.position.x = w - 20;
	this.bestScore.position.y = 100;
    
        this.score.position.x = w - 295 - 20;
	this.score.position.y = 12;
    
	this.white.scale.x = w/16;
	this.white.scale.y = h/16;
    
	this.powerBar.position.x = w - 295;
	this.powerBar.position.y = 12;
};
/**
 * @author Mat Groves
 * v2 by Tom Slezakowski
 */

var GAME = GAME || {};

var enemyFrames;
var m_cCountdown = false;

GAME.Countdown = function()
{
	PIXI.DisplayObjectContainer.call(this);
	this.three = PIXI.Sprite.fromFrame("3Get.png");
	this.two = PIXI.Sprite.fromFrame("2tricksy.png");
	this.one = PIXI.Sprite.fromFrame("1pixie.png");

	this.three.anchor.x = this.three.anchor.y = 0.5;
	this.two.anchor.x = this.two.anchor.y = 0.5;
	this.one.anchor.x = this.one.anchor.y = 0.5;
	
	this.three.alpha = 0;
	this.two.alpha = 0;
	this.one.alpha = 0;
	
	this.addChild(this.three);
	this.addChild(this.two);
	this.addChild(this.one);
	
	this.three.alpha = 0;
	this.two.alpha = 0;
	this.one.alpha = 0;
	
    m_cCountdown = this;
}

GAME.Countdown.constructor = GAME.Countdown;
GAME.Countdown.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

GAME.Countdown.prototype.startCountDown = function(onComplete)
{
	this.visible = true;
	this.onComplete = onComplete;
	
	this.three.alpha = 0;
	this.two.alpha = 0;
	this.one.alpha = 0;
	
	this.three.scale.x = this.three.scale.y = 2;
	this.two.scale.x = this.two.scale.y = 2;
	this.one.scale.x = this.one.scale.y = 2;
	
    var that = this; 
    
	TweenLite.to(this.three, 1 * time2, {
        alpha : 1, 
        onComplete : function()
        {
            m_cCountdown.onThreeShown();
        }
    });
    
	TweenLite.to(this.three.scale, 1 * time2, {
        x : 1, 
        y : 1, 
        ease : Elastic.easeOut
    });
}

var time = 0.1;
var time2 = 0.5;
var delay = 0;

GAME.Countdown.prototype.onThreeShown = function()
{   
    var that = this;
    
	TweenLite.to(that.three, 1 * time, {
        alpha : 0, 
        ease : Sine.easeOut, 
        delay : delay
    });
    
	TweenLite.to(that.three.scale, 1 * time, {
        x : 0.5, 
        y : 0.5, 
        ease : Cubic.easeOut, 
        delay : delay
    });
	
	TweenLite.to(that.two, 1 * time2, {
        alpha : 1, 
        onComplete : function()
        {
            TweenLite.to(that.two, 1 * time, {
                alpha : 0, 
                delay : delay
            });

            TweenLite.to(that.two.scale, 1 * time, {
                x : 0.5, 
                y : 0.5, 
                ease : Cubic.easeOut, 
                delay : delay
            });

            TweenLite.to(that.one, 1 * time2, {
                alpha : 1, 
                onComplete : function()
                {
                    TweenLite.to(that.one.scale, 1 * time, {
                        x : 0.5, 
                        y : 0.5, 
                        ease : Cubic.easeOut, 
                        delay : delay
                    });

                    TweenLite.to(that.one, 1 * time, {
                        alpha : 0, 
                        onComplete : function()
                        {
                            that.visible = false;
                            that.onComplete();
                        }, 
                        delay : delay
                    });
                }, 
                delay : delay
            });

            TweenLite.to(that.one.scale, 1 * time2, {
                x : 1,
                y : 1,
                ease : Elastic.easeOut,
                delay : delay
            });
        }, 
        delay : delay
    });
    
	TweenLite.to(this.two.scale, 1 * time2, {
        x : 1, 
        y : 1, 
        ease : Elastic.easeOut, 
        delay : delay
    });
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};


GAME.Splash = function(owner)
{
	this.textures = [PIXI.Texture.fromFrameId("lavaFrame_01.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_02.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_03.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_04.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_05.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_06.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_07.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_08.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_09.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_10.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_11.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_12.png")];
	
	PIXI.MovieClip.call( this, this.textures );
	this.anchor.x = 0.5;
	this.anchor.y = 1;
	this.scale.x = this.scale.y = 2;
	this.animationSpeed = 0.3;
	this.visible =false;
	
	this.realPosition;
}



GAME.Splash.constructor = GAME.Splash;
GAME.Splash.prototype = Object.create( PIXI.MovieClip.prototype );

GAME.Splash.prototype.splash = function(position)
{
	this.realPosition = position.x;

	this.position.y = 620;//this.engine.steve.view.position.y;

	this.gotoAndPlay(0)
	this.visible = true;
}

GAME.Splash.prototype.updateTransform = function()
{
	if(!this.visible)return;
	
	PIXI.MovieClip.prototype.updateTransform.call(this);
	this.position.x = this.realPosition - GAME.camera.x 
	
	
	if(this.currentFrame > this.textures.length-1)
	{
		this.stop();
		this.visible =false;
	}
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};


GAME.PowerBar = function(owner)
{
	PIXI.DisplayObjectContainer.call( this );

	this.barBG =  PIXI.Sprite.fromFrame("bulletTime_back.png");
	this.addChild(this.barBG);
	this.barBG.position.x = 20;
	this.barBG.position.y = 30;
	
	
	
	this.bar =  PIXI.Sprite.fromFrame("powerFillBar.png");
	this.addChild(this.bar);
	this.bar.position.x = 20;
	this.bar.position.y = 30;
	
	this.frame = PIXI.Sprite.fromFrame("bulletTime_BG.png");
	this.addChild(this.frame);
	this.position.x = 100;
	
	//this.pixiText.position.x = 20;
	//this.pixiText.position.y = 8//5;
	
	
}

GAME.PowerBar.constructor = GAME.PowerBar;
GAME.PowerBar.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.Score = function()
{
	PIXI.DisplayObjectContainer.call( this );
	this.ratio = 0;
	
	this.glyphs = {
			0:"number_00.png",
			1:"number_01.png",
			2:"number_02.png",
			3:"number_03.png",
			4:"number_04.png",
			5:"number_05.png",
			6:"number_06.png",
			7:"number_07.png",
			8:"number_08.png",
			9:"number_09.png",
			",":"number_comma.png"
	}
	
	for(i in this.glyphs)this.glyphs[i] = PIXI.Texture.fromFrameId(this.glyphs[i]);
	
	this.digits = [];
	
	for ( var i = 0; i < 8; i++) 
	{
		this.digits[i] = new PIXI.Sprite(this.glyphs[i]);
		this.addChild(this.digits[i]);
	}
	
	this.setScore(formatScore(12345))
}


GAME.Score.constructor = PIXI.Score;
GAME.Score.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.Score.prototype.setScore = function(score)
{
	var split = formatScore(score).split("");
	var position = 0;
	var gap = -10;
	for ( var i = 0; i < split.length; i++) 
	{
		var digit = this.digits[i];
		digit.visible = true;
		digit.setTexture(this.glyphs[split[i]]);
		digit.position.x = position; 
		position += digit.width + gap;
	}
	
	for ( var i = 0; i < this.digits.length; i++) 
	{
		this.digits[i].position.x -= position;
	}
	
	for ( var i = split.length; i < this.digits.length; i++) 
	{
		this.digits[i].visible = false;
	}
}

GAME.Score.prototype.jump = function()
{
	this.ratio = 2.2;
}

function formatScore(n)
{
	
	var nArray = n.toString().split("");
	var text = "";
	var total = nArray.length;
	
	var offset = (total % 3)-1;
	for(var i = 0; i < total; i++)
	{
		text += nArray[i];
		if((i - offset) % 3 == 0 && i != total-1)text+=",";	
	}
	
	return text;
};
/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.BestScore = function()
{
	PIXI.DisplayObjectContainer.call( this );
    
    this.LocalStorage = new Fido.LocalStorage(GAME.bundleId);
	this.ratio = 0;
	
	this.glyphs = {
        0 : "number_00.png",
        1 : "number_01.png",
        2 : "number_02.png",
        3 : "number_03.png",
        4 : "number_04.png",
        5 : "number_05.png",
        6 : "number_06.png",
        7 : "number_07.png",
        8 : "number_08.png",
        9 : "number_09.png",
        "," : "number_comma.png"
	};
	
	for(var i in this.glyphs) this.glyphs[i] = PIXI.Texture.fromFrameId(this.glyphs[i]);
	
	this.digits = [];
	
	for ( var i = 0; i < 8; i++) 
	{
		this.digits[i] = new PIXI.Sprite(this.glyphs[i]);
        this.digits[i].scale.set(0.36);
		this.addChild(this.digits[i]);
	}

	this.title = PIXI.Sprite.fromFrame("assets/hud/PersonalBest.png");
    this.title.anchor.x = 0;
    this.title.anchor.y = 0;
    this.title.position.y = 1;
	this.addChild(this.title); 
}


GAME.BestScore.constructor = PIXI.Score;
GAME.BestScore.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.BestScore.prototype.setScore = function(score)
{
	var split = formatScore(score).split("");
	var position = 0;
	var gap = 3;

	this.title.position.x = 0;
	position+=70+gap; 

	for ( var i = 0; i < split.length; i++) 
	{
		var digit = this.digits[i];
		digit.visible = true;
		digit.setTexture(this.glyphs[split[i]]);
		digit.position.x = position;
        digit.anchor.x = 0;
        digit.anchor.y = 0;
		position += digit.width - gap;
	}
	
	position = 150 + position / 2;
	this.title.position.x -= position;

	for ( var i = 0; i < this.digits.length; i++) 
	{
		this.digits[i].position.x -= position;
	}
	
	for ( var i = split.length; i < this.digits.length; i++) 
	{
		this.digits[i].visible = false;
	}
}

GAME.BestScore.prototype.jump = function()
{
	this.ratio = 2.2;
}

GAME.BestScore.prototype.update = function()
{
    
    this.setScore(Math.round(parseInt(this.LocalStorage.get('highscore'))) || 0);
};
/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.GameObjectPool = function(classType)
{
	this.classType = classType;
	this.pool = [];
}

// constructor
GAME.GameObjectPool.constructor = GAME.GameObjectPool;

GAME.GameObjectPool.prototype.getObject = function()
{
	var object = this.pool.pop();
	if(!object)
	{
		object =  new this.classType();
		
	}
	return object;
}

GAME.GameObjectPool.prototype.returnObject = function(object)
{
	//this.pool.push(object);
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

var laserCount = 0;

GAME.CollisionManager = function(engine)
{
	this.engine = engine;
}

// constructor
GAME.CollisionManager.constructor = GAME.CollisionManager;

GAME.CollisionManager.prototype.update = function()
{
	//if(this.engine.isPlaying) 
	this.playerVsBlock();
	this.playerVsPickup();
	this.playerVsFloor();
}

GAME.CollisionManager.prototype.playerVsBlock = function()
{
	var enemies = this.engine.enemyManager.enemies;
	var steve = this.engine.steve;
	
	for (var i = 0; i < enemies.length; i++) 
	{
		var enemy = enemies[i]
		
		var xdist = enemy.position.x - steve.position.x;
		if(xdist > -enemy.width/2 && xdist < enemy.width/2)
		{
			var ydist = enemy.position.y - steve.position.y;
		
			if(ydist > -enemy.height/2 - 20 && ydist < enemy.height/2 )
			{
				if(!steve.joyRiding)
				{
					steve.die();
					this.engine.gameover();
					enemy.hit();
				}
			}
		}
	}
}

GAME.CollisionManager.prototype.playerVsPickup = function()
{
	
	var pickups = this.engine.pickupManager.pickups;
	var steve = this.engine.steve;
	
	for (var i = 0; i < pickups.length; i++) 
	{
		var pickup = pickups[i]
		if(pickup.isPickedUp) continue;
        
		var xdist = pickup.position.x - steve.position.x;
		if(xdist > -pickup.width/2 && xdist < pickup.width/2)
		{
			var ydist = pickup.position.y - steve.position.y;
		
			if(ydist > -pickup.height/2 && ydist < pickup.height/2)
			{
				this.engine.pickupManager.removePickup(i);
				this.engine.pickup();
                
		//		i--;
			}
		}
	}
}

GAME.CollisionManager.prototype.playerVsFloor = function()
{
	var floors = this.engine.floorManager.floors;
	var steve = this.engine.steve;
	
	var max = floors.length;
	steve.onGround = false;
	
	if(steve.position.y > 610)
	{
		if(this.engine.isPlaying)
		{
			steve.boil();
			this.engine.view.doSplash();
			this.engine.gameover();
		}
		else
		{
			steve.speed.x *= 0.95;
			
            if(!interactive)
			{
                showGameover();
                interactive = true;
            }
            
            if(steve.bounce === 0) {
                steve.bounce++;
                steve.boil();
                this.engine.view.doSplash();
            }

			return;
		}
	}
	
	for (var i = 0; i < max; i++) 
	{
		var floor = floors[i];
		var xdist = floor.x - steve.position.x + 1135;
		
		if(steve.position.y > 477)
		{
			if(xdist > 0 && xdist < 1135)
			{
				if(steve.isDead)
				{
					steve.bounce++;
                    
					if(steve.bounce > 2)
					{						
						return;
					}
                    FidoAudio.play('thudBounce');
					steve.view.setTexture(steve.crashFrames[steve.bounce])
						
					steve.speed.y *= -0.7;
					steve.speed.x *= 0.8;
					
					if(steve.rotationSpeed > 0)
					{
						steve.rotationSpeed = Math.random() * -0.3;
					}
					else if(steve.rotationSpeed === 0)
					{
						steve.rotationSpeed = Math.random() * 0.3;
					}
					else
					{
						steve.rotationSpeed = 0;
					}
				}
				else
				{
					steve.speed.y = -0.3;
				}
				
				if(!steve.isFlying)
				{
					steve.position.y = 478;
					steve.onGround = true;
					
				}	
			}
		}
	}

    if(steve.position.y < 0)
    {
         steve.position.y = 0;
         steve.speed.y *= 0;
    }
};
/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.FloorManager = function(engine)
{
	this.engine = engine;
	this.count = 0;
	this.floors = [];
	this.floorPool = new GAME.GameObjectPool(GAME.Floor);
}

GAME.FloorManager.constructor = GAME.FloorManager;

GAME.FloorManager.prototype.update = function()
{
	for ( var i = 0; i < this.floors.length; i++) 
	{
		var floor = this.floors[i];
		floor.position.x = floor.x - GAME.camera.x -16;
		
		if(floor.position.x < -1135 - GAME.xOffset -16)
		{
			this.floorPool.returnObject(floor)
			this.floors.splice(i, 1);
			i--;
			this.engine.view.gameFront.removeChild(floor);
		}
	}
}

GAME.FloorManager.prototype.addFloor = function(floorData)
{
	var floor = this.floorPool.getObject();
	floor.x = floorData;
	floor.position.y = 640 - 158;
	this.engine.view.gameFront.addChild(floor);
	this.floors.push(floor);
}

GAME.FloorManager.prototype.destroyAll = function()
{
	for (var i = 0; i < this.floors.length; i++) 
	{
		var floor = this.floors[i];
		this.floorPool.returnObject(floor);
		this.engine.view.gameFront.removeChild(floor);
	}
	
	this.floors = [];
}

GAME.Floor = function()
{
	PIXI.Sprite.call(this, PIXI.Texture.fromFrameId("00_forest_floor.png"));
}



GAME.Floor.constructor = PIXI.Floor;
GAME.Floor.prototype = Object.create( PIXI.Sprite.prototype );
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.SegmentManager = function(engine)
{
	this.engine = engine;
	
	this.sections = data//[section1, section2];
	this.count = 0;
	this.currentSegment = data[0]
	//this.currentSegment.start = -10000
	this.startSegment = {length:1135 * 2, floor:[0,1135], blocks:[], coins:[]},
	this.chillMode = true;
	this.last = 0; 
	this.position = 0;
}

// constructor
GAME.SegmentManager.constructor = GAME.SegmentManager;

GAME.SegmentManager.prototype.reset = function(dontReset)
{
//	this.currentSegment.start;// = GAME.camera.x;
	if(dontReset)this.count = 0;
	this.currentSegment = this.startSegment;
	this.currentSegment.start = -200;
	
	for ( var i = 0; i < this.currentSegment.floor.length; i++) 
	{
		this.engine.floorManager.addFloor( this.currentSegment.start + this.currentSegment.floor[i]);
	}
}

GAME.SegmentManager.prototype.update = function()
{
	this.position = GAME.camera.x + width * 2;
	// look at where we are..
	var relativePosition = this.position - this.currentSegment.start;
	
//	console.log(Math.round(relativePosition) + " " +this.currentSegment.length);
	if(relativePosition > this.currentSegment.length)
	{
		
			
		if(this.engine.joyrideMode)
		{
			var nextSegment = this.startSegment
			nextSegment.start = this.currentSegment.start + this.currentSegment.length;
			this.currentSegment = nextSegment;
	
			for ( var i = 0; i < this.currentSegment.floor.length; i++) 
			{
				this.engine.floorManager.addFloor(this.currentSegment.start + this.currentSegment.floor[i]);
			}
			
			return;
		}
		
		
		var nextSegment = this.sections[this.count % this.sections.length];
//		if(this.chillMode)nextSegment =  this.sections[0];
	//	console.log( this.sections.length)
		// section finished!
		nextSegment.start = this.currentSegment.start + this.currentSegment.length;
		
		this.currentSegment = nextSegment;
	
		// add the elements!
		for ( var i = 0; i < this.currentSegment.floor.length; i++) 
		{
			this.engine.floorManager.addFloor(this.currentSegment.start + this.currentSegment.floor[i]);
		}
		
		var blocks = this.currentSegment.blocks;
		var length = blocks.length/2;
		
		for ( var i = 0; i < length; i++) 
		{
			this.engine.enemyManager.addEnemy(this.currentSegment.start + blocks[i*2], blocks[(i*2)+1]);
		}
		
		var pickups = this.currentSegment.coins;
		var length = pickups.length/2;
		
		for ( var i = 0; i < length; i++) 
		{
			this.engine.pickupManager.addPickup(this.currentSegment.start + pickups[i*2], pickups[(i*2)+1]);
		}
		
		this.count ++;
		
	}
	
};
var GAME = GAME || {};

var enemyFrames;

GAME.Enemy = function()
{
	this.position = new PIXI.Point();
	this.view = new PIXI.Sprite(PIXI.Texture.fromFrameId("spike_box.png"));
	this.view.anchor.x = 0.5;
	this.view.anchor.y = 0.5;
	this.isHit = false;
	this.width = 150;
	this.height = 150;
}

GAME.Enemy.constructor = GAME.Enemy;

GAME.Enemy.prototype.reset = function()
{
	if(this.explosion)
	{
		this.view.removeChild(this.explosion);
		this.explosion.reset();
	}
	
    this.isHit = false;
	this.view.width = 157;
}

GAME.Enemy.prototype.hit = function()
{   
    if(this.isHit) return;

    FidoAudio.stop('blockHit');
    FidoAudio.play('blockHit');
    
    this.isHit = true;
    
	if(!this.explosion) this.explosion = new GAME.Explosion();
    
	this.explosion.explode();
	this.view.addChild(this.explosion);
 
	this.view.setTexture(PIXI.Texture.fromImage("img/empty.png"))
}

GAME.Enemy.prototype.update = function()
{
	this.view.position.x = this.position.x - GAME.camera.x;
	this.view.position.y = this.position.y;
};
/**
 * @author Mat Groves
 */

var GAME = GAME || {};

var laserCount = 0;

GAME.EnemyManager = function(engine)
{
	this.engine = engine;
	this.enemies = [];
	this.enemyPool = new GAME.GameObjectPool(GAME.Enemy);
	this.spawnCount = 0;
}

GAME.EnemyManager.constructor = GAME.EnemyManager;

GAME.EnemyManager.prototype.update = function()
{
	for (var i = 0; i < this.enemies.length; i++) 
	{
		var enemy = this.enemies[i]
		enemy.update();
		
		if(enemy.view.position.x < -100 -GAME.xOffset && !this.engine.steve.isDead)
		{
			this.enemyPool.returnObject(enemy);
			this.enemies.splice(i, 1);
			
			this.engine.view.gameFront.removeChild(enemy.view);
			i--;
		}
	}
}

GAME.EnemyManager.prototype.addEnemy = function(x, y)
{
	var enemy = this.enemyPool.getObject();
	enemy.position.x = x
	enemy.position.y = y
	this.enemies.push(enemy);
	this.engine.view.gameFront.addChild(enemy.view);
}

GAME.EnemyManager.prototype.destroyAll = function()
{
	for (var i = 0; i < this.enemies.length; i++) 
	{
		var enemy = this.enemies[i];
		enemy.reset();
		this.enemyPool.returnObject(enemy);
		this.engine.view.gameFront.removeChild(enemy.view);
	}
	
	this.enemies = [];
}

GAME.EnemyManager.prototype.destroyAllOffScreen = function()
{
	for (var i = 0; i < this.enemies.length; i++) 
	{
		var enemy = this.enemies[i];
		
		if(enemy.x > GAME.camera.x + GAME.width)
		{
			this.enemyPool.returnObject(enemy);
			this.engine.view.game.removeChild(enemy.view);
			this.enemies.splice(i, 1);
			i--;
        }
	}
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

var enemyFrames;

var pickupTextures// = ["pickup_01.png", "pickup_02.png", "pickup_03.png", "pickup_04.png", "pickup_05.png", "pickup_06.png", "pickup_07.png", "pickup_08.png"];

GAME.Pickup = function()
{
	//pickup_03.png//
	if(!pickupTextures) pickupTextures = ["pickup_01.png", "pickup_02.png", "pickup_03.png", "pickup_04.png", "pickup_05.png", "pickup_06.png", "pickup_07.png", "pickup_08.png"];

	this.position = new PIXI.Point();
	
	this.view = new PIXI.DisplayObjectContainer();
	this.clip = new PIXI.Sprite(PIXI.Texture.fromFrameId(pickupTextures[Math2.randomInt(0, pickupTextures.length-1)]));
	
	this.clip.anchor.x = 0.5;
	this.clip.anchor.y = 0.5;
	
	this.shine = PIXI.Sprite.fromFrame("pickupShine.png");
	this.shine.anchor.x = this.shine.anchor.y = 0.5;
	//this.shine.blendMode = PIXI.blendModes.SCREEN
	this.shine.scale.x = this.shine.scale.y = 1;
	this.shine.alpha = 0.5;
	if(!GAME.lowMode)this.view.addChild(this.shine);
	this.view.addChild(this.clip);
	
	this.width = 100;
	this.height = 100;
	this.count = Math.random() * 300;
//	GAME.addHitArea(this);
}

// constructor
GAME.Pickup.constructor = GAME.Pickup;

GAME.Pickup.prototype.reset = function()
{
	
}


GAME.Pickup.prototype.update = function()
{
	if(!this.isPickedUp)
	{
		this.count += 0.1 * GAME.time.DELTA_TIME;
		this.clip.scale.x = 0.75 + Math.sin(this.count) * 0.1;
		this.clip.scale.y = 0.75 - Math.cos(this.count) * 0.1;
		this.clip.rotation = Math.sin(this.count * 1.5) * 0.2;
		
		this.shine.rotation = this.count * 0.2;
	}
	else
	{
		this.view.scale.x = 1-this.ratio;
		this.view.scale.y = 1-this.ratio;
		this.position.x = this.pickupPosition.x + (this.steve.position.x - this.pickupPosition.x) * this.ratio;
		this.position.y = this.pickupPosition.y + (this.steve.position.y - this.pickupPosition.y) * this.ratio;
	}
	
	this.view.position.x = this.position.x - GAME.camera.x;
	this.view.position.y = this.position.y;
	
};
/**
 * @author Mat Groves
 */

/**
 * @author Mat Groves
 */

var GAME = GAME || {};

var laserCount = 0;

GAME.PickupManager = function(engine)
{
	this.engine = engine;
	
	this.pickups = [];
	
	this.pickupPool = new GAME.GameObjectPool(GAME.Pickup);
	
	this.spawnCount = 0;
	
	this.pos = 0
}

// constructor
GAME.PickupManager.constructor = GAME.PickupManager;

GAME.PickupManager.prototype.update = function()
{
	if(this.engine.joyrideMode)
	{
		this.spawnCount += GAME.time.DELTA_TIME;
		
		if(this.spawnCount > 5)
		{
			this.pos += 0.15;
			this.spawnCount = 0;
			this.addPickup(GAME.camera.x + GAME.width, 280 + Math.sin(this.pos) * 180)
		}
	}
	
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i]
		
		pickup.update();
		
		if(pickup.isPickedUp)
		{

				
			pickup.ratio += (1-pickup.ratio)*0.3 * GAME.time.DELTA_TIME;
		//	pickup.view.scale.x = 1-pickup.ratio;
		//	pickup.view.scale.y = 1-pickup.ratio;
		//	pickup.position.x = pickup.pickupPosition.x + (this.engine.player.position.x - pickup.pickupPosition.x) * pickup.ratio;
		//	pickup.position.y = pickup.pickupPosition.y + (this.engine.player.position.y - pickup.pickupPosition.y) * pickup.ratio;
			
			if(pickup.ratio > 0.99)
			{
                            
				this.pickupPool.returnObject(pickup);
				this.pickups.splice(i, 1);
				this.engine.view.game.removeChild(pickup.view);
				i--;
			}
	
		}
		else
		{
			
			
			if(pickup.view.position.x < -100-GAME.xOffset)
			{
				// remove!
				this.engine.view.game.removeChild(pickup.view);
				this.pickupPool.returnObject(pickup);
				this.pickups.splice(i, 1);
				i--;
			}
		}
		
	}
}

GAME.PickupManager.prototype.addPickup = function(x, y)
{
	var pickup = this.pickupPool.getObject();
	pickup.position.x = x
	pickup.position.y = y
	
	this.pickups.push(pickup);
	this.engine.view.game.addChild(pickup.view);
}

GAME.PickupManager.prototype.removePickup = function(index)
{
	var pickup = this.pickups[index];
	pickup.isPickedUp = true;
	pickup.steve = this.engine.steve;
	pickup.pickupPosition = {x:pickup.position.x, y:pickup.position.y}//.clone();
	pickup.ratio = 0;
}


GAME.PickupManager.prototype.destroyAll = function()
{
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i]
			// remove!
		this.pickupPool.returnObject(pickup);
		this.engine.view.game.removeChild(pickup.view);
	}
	
	this.pickups = [];
}

GAME.PickupManager.prototype.destroyAllOffScreen = function()
{
	for (var i = 0; i < this.pickups.length; i++) 
	{
		var pickup = this.pickups[i];
		
		if(pickup.x > GAME.camera.x + GAME.width)
		{
			this.pickupPool.returnObject(pickup);
			this.engine.view.game.removeChild(pickup.view);
			this.pickups.splice(i, 1);
			i--;
		}
			// remove!
		
	}
	
};
/**
 * @author Mat Groves
 */

var GAME = GAME || {};

GAME.HIGH_MODE = true;
GAME.camera = new PIXI.Point();
GAME.height;
GAME.bundleId = "com.goodboy.runpixierun";
GAME.newHighScore = false;

GAME.RprEngine = function()
{	
    this.onGameover;
    
	this.steve              = new GAME.Steve();
	this.view               = new GAME.RprView(this);
	this.segmentManager     = new GAME.SegmentManager(this);
	this.enemyManager       = new GAME.EnemyManager(this);
	this.pickupManager      = new GAME.PickupManager(this);
	this.floorManager       = new GAME.FloorManager(this);
	this.collisionManager   = new GAME.CollisionManager(this);
    this.LocalStorage       = new Fido.LocalStorage(GAME.bundleId);
	
    this.steve.view.visible =  false;
    
	this.bulletMult = 1;
	this.pickupCount = 0;
	this.score = 0;
	this.joyrideMode = false;
	this.joyrideCountdown = 0;
	this.isPlaying = false;
	this.levelCount = 0;
    this.gameReallyOver = false;
    this.isDying = false;
    
    this.view.game.addChild(this.steve.view);
}

GAME.RprEngine.prototype.start = function()
{
    this.segmentManager.reset();
	this.enemyManager.destroyAll();
	this.pickupManager.destroyAll();
	this.isPlaying = true;
    this.gameReallyOver = false;
	this.score = 0;
	this.steve.level = 1;
	this.steve.position.y = 477;
	this.steve.speed.y = 0;
	this.steve.speed.x = this.steve.baseSpeed;
	this.steve.view.rotation = 0;
	this.steve.isFlying = false;
	this.steve.isDead = false;
	this.steve.view.play()
	this.steve.view.visible = true;
	this.segmentManager.chillMode = false;
	this.bulletMult = 1;

}

GAME.RprEngine.prototype.update = function()
{
	GAME.time.update();
	
	var targetCamY = 0;
	if(targetCamY > 0) targetCamY = 0;
	if(targetCamY < -70) targetCamY = -70;
	
	GAME.camera.y = targetCamY;
	
    if(gameMode !== GAME_MODE.PAUSED)
    {
        this.steve.update();
        this.collisionManager.update();
        this.segmentManager.update();
        this.floorManager.update();
        this.enemyManager.update();
        this.pickupManager.update();

        if(this.joyrideMode)
        {
            this.joyrideCountdown -= GAME.time.DELTA_TIME;

            if(this.joyrideCountdown <= 0)
            {
                this.joyrideComplete();
            }
        }
        
        this.levelCount += GAME.time.DELTA_TIME;
	
        if(this.levelCount > (60 * 60))
        {
            this.levelCount = 0;
            this.steve.level += 0.05;
            GAME.time.speed += 0.05;
        }
    }
    else
    {
        if(this.joyrideMode)
        {
            this.joyrideCountdown += GAME.time.DELTA_TIME;
        }
    }

	this.view.update();
}

GAME.RprEngine.prototype.reset = function()
{
	this.enemyManager.destroyAll();
	this.floorManager.destroyAll();
	
	this.segmentManager.reset();
	this.view.zoom = 1;
	this.pickupCount = 0;
	this.levelCount = 0;
	this.steve.level = 1;
	
	this.view.game.addChild(this.steve.view);
}

GAME.RprEngine.prototype.joyrideComplete = function()
{
	this.joyrideMode = false;
	this.pickupCount = 0;
	this.bulletMult += 0.3;
	this.view.normalMode();
	this.steve.normalMode();
	this.enemyManager.destroyAll();
}

GAME.RprEngine.prototype.gameover = function()
{
	this.isPlaying = false;
    this.isDying = true;
	this.segmentManager.chillMode = true;
    
    var nHighscore = this.LocalStorage.get('highscore');
    if(!nHighscore || this.score > nHighscore) 
    {
        this.LocalStorage.store('highscore', this.score);
        GAME.newHighscore = true;
    }
    
    this.onGameover();
	
	this.view.game.addChild(this.steve.view);
	
	TweenLite.to(this.view, 0.5, {
        zoom : 2, 
        ease : Cubic.easeOut
    });
}

GAME.RprEngine.prototype.gameoverReal = function()
{
    this.gameReallyOver = true;
    this.isDying = false;
	this.onGameoverReal();
}

GAME.RprEngine.prototype.pickup = function()
{
    if(this.steve.isDead) return; 
        
    this.score += 10;
    
	if(this.joyrideMode)
	{
        FidoAudio.stop('pickup');
        FidoAudio.play('pickup');	
		return;
	}
	
	this.view.score.jump();
	this.pickupCount++;
    
    FidoAudio.stop('pickup');
    FidoAudio.play('pickup');
    
	if(this.pickupCount >= 50 * this.bulletMult && !this.steve.isDead)
	{
		this.pickupCount = 0;
		this.joyrideMode = true;
		this.joyrideCountdown = 60 * 10;
		this.view.joyrideMode();
		this.steve.joyrideMode();
		this.steve.position.x = 0;
		GAME.camera.x = game.steve.position.x - 100;
		this.enemyManager.destroyAll();
		this.pickupManager.destroyAll();
		this.floorManager.destroyAll();	
		this.segmentManager.reset();
	}
}

Time = function()
{
	this.DELTA_TIME = 1;	
	this.lastTime = Date.now();
    this.speed = 1;
}

Time.constructor = Time;

Time.prototype.update = function()
{
    var time = Date.now();
    var currentTime =  time;
    var passedTime = currentTime - this.lastTime;

    this.DELTA_TIME = ((passedTime) * 0.06);
    this.DELTA_TIME *= this.speed;

    if(this.DELTA_TIME > 2.3) this.DELTA_TIME = 2.3;

    this.lastTime = currentTime;
}

GAME.time = new Time();
/**
 * @author Mat Groves
 */
var GAME = GAME || {};

GAME.Steve = function()
{
	this.position = new PIXI.Point();
	
	this.runningFrames = [
        PIXI.Texture.fromFrame("characterRUNscaled_01.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_02.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_03.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_04.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_05.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_06.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_07.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_08.png"),
        PIXI.Texture.fromFrame("characterRUNscaled_09.png")
    ];
	
	this.flyingFrames = [
        PIXI.Texture.fromFrame("characterFLATflying_01.png"),
        PIXI.Texture.fromFrame("characterFLATflying_02.png"),
        PIXI.Texture.fromFrame("characterFLATflying_03.png")
    ];
	
	this.crashFrames = [
        PIXI.Texture.fromFrame("characterFALLscaled3.png"),
        PIXI.Texture.fromFrame("characterFALLscaled1.png"),
        PIXI.Texture.fromFrame("characterFALLscaled3.png")
    ];
	
	this.view = new PIXI.MovieClip(this.flyingFrames);
	this.view.animationSpeed = 0.23;
	
	this.view.anchor.x = 0.5;
	this.view.anchor.y = 0.5;
	
	this.position.y = 477;
	this.ground = 477;
	this.gravity = 0.3;
	
	this.baseSpeed = 8;
	this.speed = new PIXI.Point(this.baseSpeed, 0);
	
	this.activeCount = 0;
	this.isFlying = false;
	this.accel =0;
	
	this.width = 26
	this.height = 37;
	
	this.onGround = false;
	this.rotationSpeed = 0;
	this.joyRiding = false;
	this.level = 1;
	this.realAnimationSpeed = 0.23;
    
    this.volume = 0.3;
}

GAME.Steve.constructor = GAME.Steve;

GAME.Steve.prototype.update = function()
{
	if(this.isDead)
	{
		this.updateDieing();
	}
	else
	{
		this.updateRunning();
	}
}

GAME.Steve.prototype.joyrideMode = function()
{
	this.joyRiding = true;
    FidoAudio.setVolume('runRegular', 0);
    FidoAudio.play('hyperMode');
	TweenLite.to(this.speed, 0.3, {
        x : 20, 
        ease : Cubic.easeIn
    });
	this.realAnimationSpeed = 0.23 * 4
}

GAME.Steve.prototype.normalMode = function()
{
	this.joyRiding = false;
    FidoAudio.setVolume('runFast', 0);
    if(this.onGround === true) FidoAudio.setVolume('runRegular', this.volume);
	TweenLite.to(this.speed, 0.6, {
        x : this.baseSpeed, 
        ease : Cubic.easeOut
    });
	this.realAnimationSpeed = 0.23;
}

GAME.Steve.prototype.updateRunning = function()
{
	this.view.animationSpeed = this.realAnimationSpeed * GAME.time.DELTA_TIME * this.level;

	if(this.isActive)
	{
		this.isFlying = true;
	}
	
	var oldSpeed = this.speed.y;
    
	if(this.isFlying)
	{
		this.accel = 0.6;
		this.speed.y -= this.accel  * GAME.time.DELTA_TIME;
		if(this.speed.y > 0) this.speed.y -= 0.3 * GAME.time.DELTA_TIME;
	}
	else
	{
		if(this.speed.y < 0) this.speed.y += 0.05 * GAME.time.DELTA_TIME;
	}
	
	this.speed.y += this.gravity  * GAME.time.DELTA_TIME;
	
	if(this.speed.y > 8) this.speed.y = 8;
	if(this.speed.y < -9) this.speed.y = -9;

    var accel = this.speed.y - oldSpeed;
	this.position.x += this.speed.x * GAME.time.DELTA_TIME * this.level;
	this.position.y += this.speed.y * GAME.time.DELTA_TIME;
	
	if(this.onGround !== this.onGroundCache)
	{
		this.onGroundCache = this.onGround;
		
		if(this.onGround)
		{
			this.view.textures = this.runningFrames;
            if(this.joyRiding === true) 
            {
                FidoAudio.setVolume('runFast', this.volume);
                FidoAudio.setVolume('runRegular', 0);
            }
            else
            {
                FidoAudio.setVolume('runRegular', this.volume);  
                FidoAudio.setVolume('runFast', 0);
            }
		}
		else
		{
            FidoAudio.setVolume('runFast', 0);
            FidoAudio.setVolume('runRegular', 0);   
			this.view.textures = this.flyingFrames;
		}
	}
	
	GAME.camera.x = this.position.x - 100;
	
	this.view.position.x = this.position.x - GAME.camera.x;
	this.view.position.y = this.position.y - GAME.camera.y;
	
	this.view.rotation += (this.speed.y * 0.05 - this.view.rotation) * 0.1;
}

GAME.Steve.prototype.updateDieing = function()
{
	this.speed.x *= 0.999;
	
	if(this.onGround) this.speed.y *= 0.99;
    
	this.speed.y += 0.1;
	this.accel += (0 - this.accel) * 0.1 * GAME.time.DELTA_TIME;
	
	this.speed.y += this.gravity  * GAME.time.DELTA_TIME;;
	
	this.position.x += this.speed.x  * GAME.time.DELTA_TIME;;
	this.position.y += this.speed.y  * GAME.time.DELTA_TIME;;

	GAME.camera.x = this.position.x - 100;
	
	this.view.position.x = this.position.x - GAME.camera.x;
	this.view.position.y = this.position.y - GAME.camera.y;
	
	if(this.speed.x < 5)
	{
		this.view.rotation += this.rotationSpeed * (this.speed.x / 5) * GAME.time.DELTA_TIME;
	}
	else
	{
		this.view.rotation += this.rotationSpeed * GAME.time.DELTA_TIME;
	}
}

GAME.Steve.prototype.jump = function()
{
	if(this.isDead)
	{
		if(this.speed.x < 5)
		{
			this.isDead = false
			this.speed.x = 10;
		}
	}

	if(this.position.y !== this.ground)
	{
		this.isFlying = true;
	}
	else
	{
		this.isActive = true;
		this.activeCount = 0;
	}
}

GAME.Steve.prototype.die = function()
{
	if(this.isDead) return;
    
    FidoAudio.setVolume('runFast', 0);
    FidoAudio.setVolume('runRegular', 0);
    FidoAudio.fadeOut('gameMusic');

	TweenLite.to(GAME.time, 0.5, {
        speed : 0.1, 
        ease : Cubic.easeOut, 
        onComplete : function()
        {
            FidoAudio.play('deathJingle');
            TweenLite.to(GAME.time, 2, {
                speed : 1, 
                delay : 1
            });
        }
    });

	this.isDead = true;
	this.bounce = 0;
	this.speed.x = 15;
	this.speed.y = -15;
	this.rotationSpeed = 0.3;
	this.view.stop();
}


GAME.Steve.prototype.boil = function()
{
	if(this.isDead) return;
    
    FidoAudio.setVolume('runFast', 0);
    FidoAudio.setVolume('runRegular', 0);
    FidoAudio.fadeOut('gameMusic');
    FidoAudio.play('lavaSplosh');
    FidoAudio.play('deathJingle');
    
	this.isDead = true;
}

GAME.Steve.prototype.fall = function()
{
	this.isActive = false;
	this.isFlying = false;
}

GAME.Steve.prototype.isAirbourne = function(){}

GAME.Steve.prototype.stop = function()
{
    this.view.stop();
    FidoAudio.setVolume('runRegular', 0);
}

GAME.Steve.prototype.resume = function()
{
    this.view.play();
    if(this.onGround) FidoAudio.setVolume('runRegular', this.volume);
};
GAME.SteveTrail = function(stage)
{
	this.stage = stage;
	this.target = new PIXI.Point();
	this.particals = [];
	this.particalPool = new GAME.GameObjectPool(Partical);
	this.max = 100
	this.count = 0;
}

GAME.SteveTrail.constructor = GAME.SteveTrail;

GAME.SteveTrail.prototype.update = function()
{	
	if(this.target.isFlying && !this.target.isDead )
	{
		this.count++;
		
		if(this.count % 3)
		{
			var partical = this.particalPool.getObject();
			
			this.stage.addChild(partical);
			partical.position.x = this.target.view.position.x + ( Math.random() * 10)-5 - 20;
			partical.position.y = this.target.view.position.y + 50;
			partical.direction = 0;
			partical.dirSpeed = Math.random() > 0.5 ? -0.1 : 0.1
			partical.sign = this.particals.length % 2 ? -1 : 1;
			partical.scaly = Math.random() *2 -1// - this.target.speed.x * 0.3;
			partical.speed.y = this.target.accel * 3;
			partical.alphay = 2;
			partical.rotation = Math.random() * Math.PI * 2;
			partical.scale.x = partical.scale.y = 0.2+Math.random() * 0.5;
			
			this.particals.push(partical);
		}
		
	}
	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		
		partical.dirSpeed += 0.003 * partical.sign;
		if(partical.dirSpeed > 2)partical.dirSpeed = 2;
		
		partical.direction += partical.dirSpeed;
		
		partical.speed.x = Math.sin(partical.direction);// *= 1.1;
		partical.speed.y = Math.cos(partical.direction);

		partical.position.x += partical.speed.x * 5 * partical.scaly;
		partical.position.y += partical.speed.y * 3;
		
		partical.alphay *= 0.85;
		partical.rotation += partical.speed.x * 0.1;
		
		partical.alpha = partical.alphay > 1 ? 1 : partical.alphay;
		
		if(partical.alpha < 0.01)
		{
			this.stage.removeChild(partical);
			this.particals.splice(i, 1);
			this.particalPool.returnObject(partical);
			i--;
		}
	}	
}

Partical = function()
{
	PIXI.Sprite.call(this, PIXI.Texture.fromFrameId("starPops0004.png"));
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this.speed = new PIXI.Point();
}

Partical.constructor = Partical;
Partical.prototype = Object.create( PIXI.Sprite.prototype );
GAME.Explosion = function()
{
	PIXI.DisplayObjectContainer.call( this );
	
	this.particals = [];

	this.top = 	new ExplosionPartical("asplodeInner02.png");
	this.bottom = new ExplosionPartical("asplodeInner01.png");
	
	this.top.position.y = -20;
	this.bottom.position.y = 20;
	
	this.top.position.x = 20;
	this.bottom.position.x = 20;
	
	this.anchor = new PIXI.Point();
	this.addChild(this.top);
	this.addChild(this.bottom);
	
	this.particals = [this.top , this.bottom];
	
	for (var i=0; i < 5; i++) 
	{
		this.particals.push(new ExplosionPartical("asplodeSpike_01.png"));
		this.particals.push(new ExplosionPartical("asplodeSpike_02.png"));
	}

	this.clouds = [];
	
	for (var i=0; i < 5; i++) 
	{
	 	var cloud = new PIXI.Sprite.fromFrame("dustSwirl.png");
	 	this.clouds.push(cloud);
		this.addChild(cloud);
	}

	this.reset();
}

GAME.Explosion.constructor = GAME.Explosion;

GAME.Explosion.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.Explosion.prototype.explode = function()
{
	this.exploding = true;
}

GAME.Explosion.prototype.reset = function()
{
	for (var i=0; i < 5; i++) 
	{
		var cloud =this.clouds[i];
		cloud.anchor.x = 0.5;
	 	cloud.anchor.y = 0.5;
	 	cloud.scaleTarget = 2 + Math.random() * 2;
	 	cloud.scale.x = cloud.scale.x = 0.5
	 	cloud.alpha = 0.75;
	 	cloud.position.x = (Math.random() -0.5) * 150;
	 	cloud.position.y = (Math.random() -0.5) * 150;
	 	cloud.speed = new PIXI.Point(Math.random() * 20 - 10, Math.random() * 20 - 10);
	 	cloud.state = 0;
	 	cloud.rotSpeed = Math.random() * 0.05;
	}
	 	 	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		this.addChild(partical);
		var angle = (i/this.particals.length) * Math.PI * 2;
		var speed = 7 + Math.random()
		partical.directionX = Math.cos(angle) * speed;	
		partical.directionY = Math.sin(angle) * speed;
		partical.rotation = -angle;	
		partical.rotationSpeed = Math.random() * 0.02	
	}	
}

GAME.Explosion.prototype.updateTransform = function()
{
	if(this.exploding)
	{
		for (var i=0; i < this.clouds.length; i++) 
		{
			var cloud = this.clouds[i];
			cloud.rotation += cloud.rotSpeed;
			if(cloud.state === 0)
			{
				cloud.scale.x += (cloud.scaleTarget - cloud.scale.x) * 0.4;
				cloud.scale.y = cloud.scale.x;
				
				if(cloud.scale.x > cloud.scaleTarget-0.1) cloud.state = 1;
			}
			else
			{
				cloud.position.x += cloud.speed.x * 0.05;
				cloud.position.y += cloud.speed.y * 0.05;
			}
		}
		
		for (var i=0; i < this.particals.length; i++) 
		{
			var partical =  this.particals[i];
			
			partical.directionY += 0.1;
			partical.directionX *= 0.99;
			partical.position.x += partical.directionX;
			partical.position.y += partical.directionY;
			partical.rotation += partical.rotationSpeed;
		}
	}
	
	PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
}

ExplosionPartical = function(id)
{
	PIXI.Sprite.call(this, PIXI.Texture.fromFrame(id));
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	
	this.speed = new PIXI.Point();
}

ExplosionPartical.constructor = ExplosionPartical;
ExplosionPartical.prototype = Object.create( PIXI.Sprite.prototype );


GAME.SteveTrailFire = function(stage)
{
	this.stage = stage;
	this.target = new PIXI.Point();
	
	this.particals = [];
	this.particalPool = new GAME.GameObjectPool(ParticalFire);
	this.max = 100
	this.count = 0;
	
	this.mOffset = PIXI.mat3.create()//PIXI.mat3.identity(PIXI.mat3.create());
	this.mOffset[2] = -30//this.position.x;
	this.mOffset[5] = 30//this.position.y;
	this.spare = PIXI.mat3.create()//PIXI.mat3.identity();
}

// constructor
GAME.SteveTrailFire.constructor = GAME.SteveTrailFire;

GAME.SteveTrailFire.prototype.update = function()
{
	//PIXI.Rope.prototype.updateTransform.call(this);
	
	if(this.target.isDead)
	{
		this.mOffset
		
		PIXI.mat3.multiply(this.mOffset, this.target.view.localTransform, this.spare);
	
		this.count++;
		
		if(this.count % 3)
		{
			
			var partical = this.particalPool.getObject();
			
			
			this.stage.addChild(partical);
			partical.position.x =this.spare[2]
			partical.position.y = this.spare[5]
			
			partical.speed.x = 1+Math.random()*2;
			partical.speed.y = 1+Math.random()*2;
			
			partical.speed.x *= -1
			partical.speed.y *=1
			/*
			partical.direction = 0;
			partical.dirSpeed = Math.random() > 0.5 ? -0.1 : 0.1
			partical.sign = this.particals.length % 2 ? -1 : 1;
			partical.scaly = Math.random() *2 -1// - this.target.speed.x * 0.3;
			partical.speed.y = this.target.accel * 3;
			partical.alphay = 2;
			*/
			partical.alphay = 2;
			partical.rotation = Math.random() * Math.PI * 2;
			partical.scale.x = partical.scale.y = 0.2+Math.random() * 0.5;
			this.particals.push(partical);
		}
		
	}// add partical!
	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		
		partical.scale.x = partical.scale.y *= 1.02;
			partical.alphay *= 0.85;
		
		partical.alpha = partical.alphay > 1 ? 1 : partical.alphay;
		partical.position.x += partical.speed.x * 2 
		partical.position.y += partical.speed.y * 2
		
		if(partical.alpha < 0.01)
		{
			this.stage.removeChild(partical);
			this.particals.splice(i, 1);
			this.particalPool.returnObject(partical);
			i--;
		}
	};	
}

ParticalFire = function()
{
	PIXI.Sprite.call(this, PIXI.Texture.fromFrameId("fireCloud.png"));
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	
	this.speed = new PIXI.Point();
}

ParticalFire.constructor = ParticalFire;
ParticalFire.prototype = Object.create( PIXI.Sprite.prototype );


GAME.PixiDust = function()
{
	PIXI.DisplayObjectContainer.call(this);
	
	this.particals = [];
	this.particalPool = new GAME.GameObjectPool(ParticalDust);
	this.max = GAME.HIGH_MODE ? 100 : 10;
	this.count = 0;
	
	for (var i=0; i < this.max; i++) 
	{
		var partical = this.particalPool.getObject();
			
		partical.home.x = Math.random() * -GAME.width;
		partical.position.y = partical.home.y = Math.random() * 110640;
partical.speed = new PIXI.Point((Math.random() -0.5)*0.2, (Math.random() -0.5) *0.4 );
		this.particals.push(partical);
		
		this.addChild(partical);
	};
			
			
	this.focalLength = 150
}

// constructor
GAME.PixiDust.constructor = GAME.PixiDust;
GAME.PixiDust.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.PixiDust.prototype.update = function()
{
	//PIXI.Rope.prototype.updateTransform.call(this);
	
	for (var i=0; i < this.particals.length; i++) 
	{
		var partical =  this.particals[i];
		var scaleRatio = this.focalLength/(this.focalLength + partical.z);
		var scaleRatio = this.focalLength/(this.focalLength + partical.z);
		
		partical.scale.x = partical.scale.y = scaleRatio// * 0.5;
		
		partical.home.x += partical.speed.x;
		partical.position.y += partical.speed.y;
		partical.position.x = (partical.home.x - GAME.camera.x) *scaleRatio  * 1.5;
		
		partical.position.x %= GAME.width;
		if(partical.position.x < 0)partical.position.x += GAME.width;
		
		partical.position.y %= 640;
		if(partical.position.y < 0)partical.position.y +=640;
		
		//partical.rotation += partical.rotationSpeed
		
	};	
}


ParticalDust = function()
{
	ParticalDust.globalCount++;
	
	PIXI.Sprite.call(this, PIXI.Texture.fromFrameId(ParticalDust.frames[ParticalDust.globalCount % 3]));
	
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this.z = Math.random() * 500;
	this.rotation = Math.random() * Math.PI * 2;
//	this.rotationSpeed =(Math.random()-0.5) * 0.1;
	//this.scale.x = this.scale.y = this.z * 0.2 ;
	this.home = new PIXI.Point();
	
	this.alpha = 0.5;
}

ParticalDust.globalCount = 0;
ParticalDust.frames = ["mote01.png", "mote02.png", "mote03.png"];

ParticalDust.constructor = Partical;
ParticalDust.prototype = Object.create( PIXI.Sprite.prototype );
