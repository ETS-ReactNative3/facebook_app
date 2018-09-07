if (self.CavalryLogger) { CavalryLogger.start_js(["Xc4xD"]); }

__d("LiveVideoBroadcastStatusUpdateWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"1528668480484478",queryID:"213402205795051"})}),null);
__d("LiveVideoBroadcastStatusUpdateSubscription",["BaseGraphQLSubscription","LiveVideoBroadcastStatusUpdateWebGraphQLSubscription","uuid"],(function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("BaseGraphQLSubscription"),{_getTopic:function(a){return"gqls/live_video_broadcast_status_update_subscribe/video_id_"+a},_getQueryID:function(){return b("LiveVideoBroadcastStatusUpdateWebGraphQLSubscription").getDocID()},_getQueryParameters:function(a){return{input:JSON.stringify({client_subscription_id:b("uuid")(),video_id:a})}},_getSubscriptionCallName:function(){return"live_video_broadcast_status_update_subscribe"}});e.exports=a}),null);
__d("LiveVideoBroadcastStatusUpdateSubscriptionHack",["LiveVideoBroadcastStatusUpdateSubscription"],(function(a,b,c,d,e,f){__p&&__p();var g=new Map(),h=new Map();a={subscribe:function(a,c){__p&&__p();if(!g.has(a)){var d=[];g.set(a,d);var e=b("LiveVideoBroadcastStatusUpdateSubscription").subscribe(a,function(a){for(var b=0;b<d.length;b++){var c=d[b];c(a)}});h.set(a,e)}e=g.get(a);e&&e.push(c);return{unsubscribe:function(){__p&&__p();var b=g.get(a);if(b){b=b.filter(function(a){return a!==c});g.set(a,b);if(b.length===0){b=h.get(a);b&&b.unsubscribe&&b.unsubscribe();g["delete"](a);h["delete"](a)}}}}}};e.exports=a}),null);
__d("VideoBroadcastScheduleSetStartTimeWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"1142602422519364",queryID:"1333509503376136"})}),null);
__d("VideoBroadcastScheduleSetStartTimeSubscription",["BaseGraphQLSubscription","VideoBroadcastScheduleSetStartTimeWebGraphQLSubscription","uuid"],(function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("BaseGraphQLSubscription"),{_getTopic:function(a){return"gqls/video_broadcast_schedule_set_start_time_subscribe/video_broadcast_schedule_id_"+a},_getQueryID:function(){return b("VideoBroadcastScheduleSetStartTimeWebGraphQLSubscription").getDocID()},_getQueryParameters:function(a){return{input:JSON.stringify({client_subscription_id:b("uuid")(),video_broadcast_schedule_id:a})}},_getSubscriptionCallName:function(){return"video_broadcast_schedule_set_start_time_subscribe"}});e.exports=a}),null);
__d("LiveVideoScheduleCountdown",["cx","CSS","DOM","DOMQuery"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d){"use strict";this.$2=c,this.$3=a,this.$4=b("DOMQuery").find(this.$3,"#display_text"),b("CSS").removeClass(this.$4,"_32_g"),d!==null&&clearInterval(d),this.$5(),this.$1=setInterval(this.$5.bind(this),1e3)}a.prototype.$6=function(){"use strict";var a=this.$2-Date.now()/1e3,b=Math.floor(a%60),c=Math.floor(a/60%60);return{total:a,minutes:c,seconds:b}};a.prototype.$5=function(){"use strict";var a=this.$6(),c=("0"+a.minutes).slice(-2),d=("0"+a.seconds).slice(-2);c=c+":"+d;a.total<=0?(b("DOM").setContent(this.$4,"00:00"),b("CSS").addClass(this.$4,"_32_g"),clearInterval(this.$1)):b("DOM").setContent(this.$4,c)};a.prototype.getIntervalID=function(){"use strict";return this.$1};e.exports=a}),null);
__d("XLiveScheduleStatusTransitionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/schedule/status/",{story_dom_id:{type:"String"},story_target_id:{type:"String"},fb_feed_context:{type:"String"}})}),null);
__d("XLiveVideoBroadcastStatusController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_video/broadcast_status/",{video_id:{type:"FBID",required:!0}})}),null);
__d("LiveVideoScheduleNewsFeedTransitions",["AsyncRequest","DOM","FunnelLogger","LiveVideoBroadcastStatusUpdateSubscriptionHack","LiveVideoScheduleCountdown","Random","Run","VideoBroadcastScheduleSetStartTimeSubscription","VideoBroadcastStatus","Visibility","XLiveScheduleStatusTransitionController","XLiveVideoBroadcastStatusController","clearTimeout","ge","setTimeout"],(function(a,b,c,d,e,f){__p&&__p();var g="FACECAST_SCHEDULED_LIVE_FUNNEL";function a(a,c,d,e,f,g,h,i,j,k,l){"use strict";__p&&__p();this.$5=a;this.$7=c;this.$8=d;this.$1=e;this.$2=f;this.$4=g;this.$12=h;this.$13=i;this.$14=j;this.$6=!1;this.$9=[];this.$15=k;this.$16=b("Random").uint32();this.$3=l;var m=b("LiveVideoBroadcastStatusUpdateSubscriptionHack").subscribe(a,function(a){return this.$18(a)}.bind(this));this.$19();var n=b("VideoBroadcastScheduleSetStartTimeSubscription").subscribe(c,function(a){return this.$20(a)}.bind(this));b("Visibility").addListener(b("Visibility").VISIBLE,function(){return this.$19()}.bind(this));b("Run").onLeave(function(){m&&m.unsubscribe(),n&&n.unsubscribe(),this.$21("scheduled_feed_unit_left",!1,!0)}.bind(this));this.$22();this.$21("scheduled_feed_unit_shown",!0)}a.prototype.$23=function(){"use strict";__p&&__p();this.$1=new Map();for(var a=this.$9,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b("clearTimeout")(e)}this.$9=[]};a.prototype.$22=function(){__p&&__p();var a=this,c=Date.now()/1e3,d=function(){__p&&__p();if(f){if(g>=e.length)return"break";h=e[g++]}else{g=e.next();if(g.done)return"break";h=g.value}var d=h,i=d[0],j=d[1];d=parseInt(i,10);i=d-c;var k=a.$2.get(j);if(i<=0)a.$24(k,j);else{d=i*1e3;if(d<2147483647){i=b("setTimeout")(function(){this.$24(k,j)}.bind(a),d);a.$9.push(i)}}};for(var e=this.$1,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h,i=d();if(i==="break")break}};a.prototype.$24=function(a,c){"use strict";__p&&__p();if(!a)return;b("DOM").setContent(this.$4,a);a=document.getElementById("date_text"+this.$7);a&&this.$10&&b("DOM").setContent(a,this.$10);a=document.getElementById("live_video_countdown"+this.$7);if(a){var d=this.$11!==undefined?this.$11:this.$3;a=new(b("LiveVideoScheduleCountdown"))(a,d+this.$8,this.$17);this.$17=a.getIntervalID()}d=b("ge")("rescheduledBody"+this.$7);d&&this.$10&&b("DOM").setContent(d,this.$10);c==="RUNNING_LATE"?this.$21("didnt_go_live_on_time"):c==="TIMED_OUT"&&this.$21("expired")};a.prototype.$20=function(a){"use strict";__p&&__p();a=a.video_broadcast_schedule_set_start_time_subscribe.video_broadcast_schedule;var b=a.start_time,c=b-a.lobby_open_time,d=b+a.running_late_start_time,e=b+a.expiration_time;this.$10=a.formatted_start_time;this.$11=b;this.$23();this.$24(this.$2.get("RESCHEDULED"),"RESCHEDULED");this.$1.set(""+c,"LOBBY_OPEN");this.$1.set(""+d,"RUNNING_LATE");this.$1.set(""+e,"TIMED_OUT");this.$22()};a.prototype.$19=function(){"use strict";var a=b("XLiveVideoBroadcastStatusController").getURIBuilder().setFBID("video_id",this.$5).getURI();new(b("AsyncRequest"))().setURI(a).setHandler(function(a){a.payload.broadcast_status==b("VideoBroadcastStatus").LIVE?this.$25():this.$15&&!this.$6&&b("setTimeout")(this.$19.bind(this),1e3)}.bind(this)).setErrorHandler(function(){b("setTimeout")(this.$19.bind(this),1e3)}.bind(this)).send()};a.prototype.$18=function(a){"use strict";a=a.live_video_broadcast_status_update_subscribe;a=a.video_broadcast_status;a===b("VideoBroadcastStatus").LIVE?this.$25():a===b("VideoBroadcastStatus").SCHEDULED_CANCELED&&(this.$23(),this.$24(this.$2.get("CANCELED"),"CANCELED"))};a.prototype.$25=function(){"use strict";if(this.$6)return;this.$6=!0;var a=b("XLiveScheduleStatusTransitionController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setData({story_dom_id:this.$13,story_target_id:this.$14,fb_feed_context:this.$12}).setHandler(function(){return this.$21("transition_player",!1,!0)}.bind(this)).setMethod("POST").send()};a.prototype.$21=function(a,c,d){"use strict";c&&b("FunnelLogger").startFunnel(g,this.$16),b("FunnelLogger").appendAction(g,this.$16,a),d&&b("FunnelLogger").endFunnel(g,this.$16)};e.exports=a}),null);