webpackJsonp([0xc23565d713b7],{223:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){z.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var l=a(23),o=s(l),n=a(34),r=s(n),d=a(33),c=s(d),u=a(82),f=s(u),p=a(81),m=s(p),h=a(1),b=s(h),y=a(2),g=s(y),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},E={},w=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!E[a]||(E[a]=!0,!1)},S=void 0,z=[],N=function(e,t){i().observe(e),z.push([e,t])},L=null,j=function(){if(null!==L)return L;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return L=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",r=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+o+n+t+a+l+i+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+r+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},R=function(e){var t=e.style,a=e.onLoad,s=(0,f.default)(e,["style","onLoad"]);return b.default.createElement("img",(0,m.default)({},s,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};R.propTypes={style:g.default.object,onLoad:g.default.func};var T=function(e){function t(a){(0,o.default)(this,t);var s=(0,r.default)(this,e.call(this,a)),i=!0,l=!0,n=!1,d=w(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,l=!1,n=!0),"undefined"==typeof window&&(i=!1,l=!1),s.state={isVisible:i,imgLoaded:l,IOSupported:n},s.handleRef=s.handleRef.bind(s),s}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&N(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,s=t.alt,i=t.className,l=t.outerWrapperClassName,o=t.style,n=void 0===o?{}:o,r=t.imgStyle,d=void 0===r?{}:r,c=t.placeholderStyle,u=void 0===c?{}:c,f=t.sizes,p=t.resolutions,h=t.backgroundColor,y=t.Tag,g=void 0;g="boolean"==typeof h?"lightgray":h;var E=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,u),w=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var S=f;return S.srcWebp&&S.srcSetWebp&&j()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),b.default.createElement(y,{className:(l?l:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},b.default.createElement(y,{className:(i?i:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef},b.default.createElement(y,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&b.default.createElement(R,{alt:s,title:a,src:S.base64,style:E}),S.tracedSVG&&b.default.createElement(R,{alt:s,title:a,src:S.tracedSVG,style:E}),g&&b.default.createElement(y,{title:a,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&b.default.createElement(R,{alt:s,title:a,srcSet:S.srcSet,src:S.src,sizes:S.sizes,style:w,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,m.default)({alt:s,title:a},S))}})))}if(p){var z=p,N=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete N.display,z.srcWebp&&z.srcSetWebp&&j()&&(z.src=z.srcWebp,z.srcSet=z.srcSetWebp),b.default.createElement(y,{className:(l?l:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},b.default.createElement(y,{className:(i?i:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},z.base64&&b.default.createElement(R,{alt:s,title:a,src:z.base64,style:E}),z.tracedSVG&&b.default.createElement(R,{alt:s,title:a,src:z.tracedSVG,style:E}),g&&b.default.createElement(y,{title:a,style:{backgroundColor:g,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&b.default.createElement(R,{alt:s,title:a,width:z.width,height:z.height,srcSet:z.srcSet,src:z.src,style:w,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,m.default)({alt:s,title:a,width:z.width,height:z.height},z))}})))}return null},t}(b.default.Component);T.defaultProps={fadeIn:!0,alt:"",Tag:"div"},T.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,placeholderStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},t.default=T},129:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var i=a(1),l=s(i),o=a(2),n=s(o),r=a(223),d=s(r),c={paddingBottom:"30px"},u=function(e){var t=e.data,a=t.dataJson,s=t.heroImage,i=a.heroTitle,o=a.heroSubtitle,n=a.heroTitleAbout,r=a.heroSubtitleAbout;return l.default.createElement("div",{style:c},l.default.createElement("section",{className:"hero has-text-centered"},l.default.createElement("div",{className:"hero-body"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"columns is-centered"},l.default.createElement("div",{className:"column"},l.default.createElement("h1",{className:"title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile"},i),l.default.createElement("h2",{className:"subtitle is-size-4-desktop"},o),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement(d.default,{resolutions:s.resolutions,alt:"shadez avatar"})))))),l.default.createElement("section",null,l.default.createElement("div",{className:"hero is-white has-text-centered"},l.default.createElement("div",{className:"hero-body"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"columns is-centered"},l.default.createElement("div",{className:"column"},l.default.createElement("h2",{className:"title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile"},n),l.default.createElement("h3",{className:"subtitle is-size-4-desktop"},r))))))),l.default.createElement("section",null,l.default.createElement("div",{className:"container has-text-centered"},l.default.createElement("div",{className:"columns is-centered"},l.default.createElement("div",{className:"column"},l.default.createElement("p",{className:"title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile"},"Interested in hiring me?"),l.default.createElement("p",{className:"subtitle is-size-4-desktop"},"My resume is available upon request. Shoot me an email."))))))};t.default=u,u.propTypes={data:n.default.object.isRequired};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-b4668de467bd97356351.js.map