if (self.CavalryLogger) { CavalryLogger.start_js(["w\/2QC"]); }

__d("LiveVideoBroadcastComposerRHCSphericalSection.react",["fbt","LiveVideoBroadcastAPIActions","LiveVideoBroadcastComposerRHCCheckbox.react","LiveVideoBroadcastComposerRHCNumberInput.react","LiveVideoBroadcastSphericalConfigurationSearchSource","React","SUIBusinessTheme","SUISearchableSelector.react","VideoProjection","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("gkx")("AT51O5UVO9BYW1meGSqjPe05WJ8dQztgiPCALDI2EVtLl_MM_V_k6UEF1cuU5VC19KY"),j=g._("Broadcast this as a spherical video"),k=g._("Go live with your 360 or 180 video."),l=g._("This broadcast has Audio 360 (ambix4)"),m=g._("Select only if your video has ambix4 audio format."),n=g._("Field Of View (FOV)"),o=g._("Required for the fisheye video type only. This is the original field of view of your fisheye lens.");h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.$1=function(event){b("LiveVideoBroadcastAPIActions").setIs360Audio(event.target.checked)};a.prototype.$2=function(event){b("LiveVideoBroadcastAPIActions").setIs360Video(event.target.checked)};a.prototype.$3=function(a){b("LiveVideoBroadcastAPIActions").update360Configuration(a)};a.prototype.$4=function(event){b("LiveVideoBroadcastAPIActions").setSingleFisheyeFOV(event)};a.prototype.render=function(){var a=!!(this.props.selectorValue&&this.props.selectorValue.getAuxiliaryData().projection===b("VideoProjection").SINGLE_FISH_EYE);return b("React").createElement("div",null,b("React").createElement(b("LiveVideoBroadcastComposerRHCCheckbox.react"),{checked:!!this.props.is360Video,label:j,tooltipText:k,onChange:this.$2}),b("React").createElement(b("SUISearchableSelector.react"),{dropdownWidth:"sameAsSelector",emptySearchResultsContent:"No matching results.",isDisabled:!this.props.is360Video,placeholder:"Select spherical video type",searchSource:b("LiveVideoBroadcastSphericalConfigurationSearchSource"),shouldShowSubtitleInSelector:!1,style:{margin:"12px 28px"},theme:b("SUIBusinessTheme"),value:this.props.selectorValue||null,width:300,onChange:this.$3}),b("React").createElement(b("LiveVideoBroadcastComposerRHCCheckbox.react"),{checked:!!this.props.is360Audio,disabled:!this.props.is360Video||!this.props.selectorValue||a,label:l,tooltipText:m,onChange:this.$1}),i&&a&&b("React").createElement(b("LiveVideoBroadcastComposerRHCNumberInput.react"),{defaultValue:180,label:n,maxValue:360,minValue:1,name:"singleFisheyeFOV",tooltipText:o,value:this.props.singleFisheyeFOV,onChange:this.$4}))};function a(){h.apply(this,arguments)}e.exports=a}),null);