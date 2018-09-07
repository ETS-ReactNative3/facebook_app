if (self.CavalryLogger) { CavalryLogger.start_js(["nkFrS"]); }

__d("LiveVideoBroadcastAPIToggle.react",["ix","cx","fbt","Image.react","LiveVideoBroadcastActions","LiveVideoBroadcastConstants","React","XUIButton.react","XUIButtonGroup.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("LiveVideoBroadcastConstants").INPUT_SOURCE;j=babelHelpers.inherits(a,b("React").PureComponent);j&&j.prototype;a.prototype.$1=function(){b("LiveVideoBroadcastActions").setInputSource(k.CAMERA),b("LiveVideoBroadcastActions").getWebcamStreamUrlRequest()};a.prototype.$2=function(){b("LiveVideoBroadcastActions").setInputSource(k.API)};a.prototype.$3=function(){b("LiveVideoBroadcastActions").setInputSource(k.VIDEO_GAME)};a.prototype.$4=function(){return!this.props.hasGamingContext?null:b("React").createElement(b("XUIButton.react"),{className:"_jzh _jzl"+(this.props.inputSource===k.VIDEO_GAME?" _jzj":"")+(this.props.inputSource!==k.VIDEO_GAME?" _jzk":""),disabled:this.props.inputSource===k.VIDEO_GAME,image:b("React").createElement(b("Image.react"),{src:g("383104")}),label:i._("Connect"),size:"xlarge",onClick:this.$3})};a.prototype.$5=function(){return this.props.hasGamingContext?null:b("React").createElement(b("XUIButton.react"),{className:"_jzh _jzl"+(this.props.inputSource===k.API?" _jzj":"")+(this.props.inputSource!==k.API?" _jzk":""),disabled:this.props.inputSource===k.API,image:b("React").createElement(b("Image.react"),{src:g("383104")}),label:i._("Connect"),size:"xlarge",onClick:this.$2})};a.prototype.render=function(){return b("React").createElement("div",{className:"_jzb"},b("React").createElement(b("XUIButtonGroup.react"),null,b("React").createElement(b("XUIButton.react"),{className:"_jzh _jzi"+(this.props.inputSource===k.CAMERA?" _jzj":"")+(this.props.inputSource!==k.CAMERA?" _jzk":""),disabled:this.props.inputSource===k.CAMERA,image:b("React").createElement(b("Image.react"),{src:g("114514")}),label:i._("Camera"),size:"xlarge",onClick:this.$1}),this.$5(),this.$4()))};function a(){j.apply(this,arguments)}e.exports=a}),null);