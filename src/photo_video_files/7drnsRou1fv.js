if (self.CavalryLogger) { CavalryLogger.start_js(["gyM7g"]); }

__d("FBStoryLiveSidePaneContainer.react",["FBStoriesDispatcher","FBStoriesLiveVideoUIStore","FBStoriesStore","FBStoryLiveSidePane.react","FluxContainer","LoadObject","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={isCommercialBreakRunning:!1,isOwnBucket:!1,isSelectedBucketLiveAndEnded:!1,liveVideoData:null,uiComponents:b("LoadObject").empty()};c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){g.constructor.call(this),b("FBStoriesDispatcher").explicitlyRegisterStores([b("FBStoriesLiveVideoUIStore")])}a.getStores=function(){return[b("FBStoriesStore"),b("FBStoriesLiveVideoUIStore")]};a.calculateState=function(a){a=b("FBStoriesStore").getThreadDataForSelectedLiveBucket();if(!a)return h;var c=b("FBStoriesStore").isOwnBucket(),d=b("FBStoriesStore").isSelectedBucketLiveAndEnded(),e=a.media.id,f=b("FBStoriesLiveVideoUIStore").get(e);e=b("FBStoriesStore").getIsCommercialBreakRunning(e);return{isOwnBucket:c,isSelectedBucketLiveAndEnded:d,liveVideoData:a,uiComponents:f,isCommercialBreakRunning:e}};a.prototype.render=function(){return b("React").createElement(b("FBStoryLiveSidePane.react"),babelHelpers["extends"]({},this.props,this.state))};e.exports=b("FluxContainer").create(a)}),null);