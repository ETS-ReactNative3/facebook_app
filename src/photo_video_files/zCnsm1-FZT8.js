if (self.CavalryLogger) { CavalryLogger.start_js(["TB66z"]); }

__d("LiveVideoBroadcastFinishedActions.react",["cx","fbt","FBConfirmDialog.react","Link.react","LiveVideoBroadcastActions","LiveVideoBroadcastAPIActions","React","XUIButton.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={showConfirmDeleteDialog:!1},this.$1=function(){this.props.inputSource==="CAMERA"||this.props.inputSource==="EDIT"?b("LiveVideoBroadcastActions").deleteReplayVideo():b("LiveVideoBroadcastAPIActions").deleteAPIReplayVideo(),b("LiveVideoBroadcastActions").cleanup()}.bind(this),this.$2=function(){this.setState({showConfirmDeleteDialog:!1})}.bind(this),this.$3=function(){this.setState({showConfirmDeleteDialog:!0})}.bind(this),c}a.prototype.render=function(){var a=h._("Done"),c=h._("If you continue, this live video and its post will be permanently deleted."),d=h._("Delete video?");c=this.state.showConfirmDeleteDialog?b("React").createElement(b("FBConfirmDialog.react"),{content:c,shown:!0,title:d,onCancel:this.$2,onConfirm:this.$1,onToggle:this.$2}):null;return b("React").createElement("div",null,b("React").createElement(b("XUIButton.react"),{className:"_yjt","data-testid":"done-button",label:a,size:"xlarge",onClick:function(){return b("LiveVideoBroadcastActions").cleanup()}}),b("React").createElement("div",null,b("React").createElement(b("Link.react"),{className:"_4ozm",onClick:this.$3},h._("Delete Video"))),c)};e.exports=a}),null);