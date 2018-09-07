if (self.CavalryLogger) { CavalryLogger.start_js(["i6PIa"]); }

__d("montageCardWithStandardTimer",["React","cancelAnimationFrame","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").PropTypes,h=5e3;function a(a){__p&&__p();var c,d;return d=c=function(){__p&&__p();var c,d;c=babelHelpers.inherits(e,b("React").Component);d=c&&c.prototype;function e(){__p&&__p();var a,c;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return c=(a=d.constructor).call.apply(a,[this].concat(f)),this.state={startedTime:0,pausedTime:0},this.$1=null,this.$3=function(){if(!this.props.paused){var a=(Date.now()-this.state.startedTime)/h*100;this.props.onProgress(a);if(a>=100){this.props.onEnded();return}}this.$1=b("requestAnimationFrame")(this.$3)}.bind(this),c}e.prototype.componentDidMount=function(){"use strict";this.$2()};e.prototype.componentDidUpdate=function(){"use strict";this.$2()};e.prototype.$2=function(){"use strict";!this.props.active&&(this.$1||this.state.pausedTime)?this.$4():!this.props.paused&&!this.$1?this.$5():this.$1&&this.props.paused&&this.$6()};e.prototype.$6=function(){"use strict";this.setState({pausedTime:Date.now()}),b("cancelAnimationFrame")(this.$1),this.$1=null};e.prototype.$5=function(){"use strict";__p&&__p();var a={startedTime:Date.now()};if(this.state.pausedTime){var c=a.startedTime-this.state.pausedTime;c=this.state.startedTime+c;a={pausedTime:0,startedTime:c}}this.setState(a);this.props.onStarted(a.startedTime);this.$1=b("requestAnimationFrame")(this.$3)};e.prototype.$4=function(){"use strict";this.setState({pausedTime:0,startedTime:0}),b("cancelAnimationFrame")(this.$1),this.$1=null};e.prototype.componentWillUnmount=function(){"use strict";b("cancelAnimationFrame")(this.$1)};e.prototype.render=function(){"use strict";var c=this.props;c.paused;c.onEnded;c.onProgress;c.onStarted;c=babelHelpers.objectWithoutProperties(c,["paused","onEnded","onProgress","onStarted"]);return b("React").createElement(a,c)};return e}(),c.propTypes={active:g.bool.isRequired,paused:g.bool.isRequired,onEnded:g.func.isRequired,onProgress:g.func.isRequired,onStarted:g.func.isRequired},d}e.exports=a}),null);