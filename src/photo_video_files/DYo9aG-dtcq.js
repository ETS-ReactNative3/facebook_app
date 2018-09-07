if (self.CavalryLogger) { CavalryLogger.start_js(["GO0SH"]); }

__d("UFITimelineBlingBox.react",["cx","fbt","ProfileBrowserLink","ProfileBrowserTypes","React","UFIBlingItem.react","URI"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){__p&&__p();var a=[];if(this.props.likes&&this.props.enableShowLikes){var c=this.$1(),d=h._("See who likes this");c=b("React").createElement("a",{ajaxify:c.dialog,className:this.$2(a),"data-ft":this.props["data-ft"],"data-gt":this.props["data-gt"],"data-hover":"tooltip","data-tooltip-alignh":"right","data-tooltip-uri":this.$3(),href:c.page,key:"like",rel:"dialog",role:"button",title:d},b("React").createElement(b("UFIBlingItem.react"),{count:this.props.likes,countreduced:this.props.likesreduced,iconClassName:"UFIBlingBoxTimelineLikeIcon",itemKey:"like"}));a.push(c)}if(this.props.comments&&this.props.enableShowComments){d=h._("Show comments");c=b("React").createElement("a",{"aria-label":d,className:this.$2(a),"data-ft":this.props["data-ft"],"data-hover":"tooltip","data-tooltip-alignh":"right","data-tooltip-content":d,href:"#",key:"comment",onClick:this.props.commentOnClick},b("React").createElement(b("UFIBlingItem.react"),{count:this.props.comments||0,countreduced:this.props.commentsreduced,iconClassName:"UFIBlingBoxTimelineCommentIcon",itemKey:"comment"}));a.push(c)}if(this.props.reshares){d=h._("Show shares");c=this.$4();d=b("React").createElement("a",{ajaxify:c.dialog,"aria-label":d,className:this.$2(a),"data-ft":this.props["data-ft"],"data-hover":"tooltip","data-tooltip-alignh":"right","data-tooltip-content":d,href:c.page,key:"reshare",rel:"async"},b("React").createElement(b("UFIBlingItem.react"),{contextArgs:this.props.contextArgs,count:this.props.reshares,countreduced:this.props.resharesreduced,iconClassName:"UFIBlingBoxTimelineReshareIcon",itemKey:"reshare"}));a.push(d)}return b("React").createElement("span",null,a)};a.prototype.$2=function(a){return(a.length>0?"mls":"")+" UFIBlingBoxTimelineItem"};a.prototype.$3=function(){if(this.props.feedbackFBID){var a=new(b("URI"))("/ajax/like/tooltip.php").setQueryData({comment_fbid:this.props.feedbackFBID});return a.toString()}else return null};a.prototype.$1=function(){if(this.props.feedbackFBID){var a=b("ProfileBrowserTypes").LIKES,c={id:this.props.feedbackFBID,actorid:this.props.actorid},d=b("ProfileBrowserLink").constructDialogURI(a,c);a=b("ProfileBrowserLink").constructPageURI(a,c);return{dialog:d.toString(),page:a.toString()}}return{dialog:null,page:null}};a.prototype.$4=function(){if(this.props.feedbackFBID){var a=new(b("URI"))("/ajax/shares/view").setQueryData({target_fbid:this.props.feedbackFBID}),c=new(b("URI"))("/shares/view").setSubdomain("www").setQueryData({id:this.props.feedbackFBID});return{dialog:a.toString(),page:c.toString()}}return{dialog:null,page:null}};function a(){i.apply(this,arguments)}a.propTypes={contextArgs:c.object.isRequired,"data-ft":c.string,"data-gt":c.string,actorid:c.any,commentOnClick:c.func,comments:c.number,commentsreduced:c.string,enableShowComments:c.bool,enableShowLikes:c.bool,feedbackFBID:c.any,likes:c.number,likesreduced:c.string,reshares:c.number,resharesreduced:c.string};e.exports=a}),null);