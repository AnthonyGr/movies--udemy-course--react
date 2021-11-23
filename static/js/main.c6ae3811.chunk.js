(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),r=a.n(n),i=(a(13),a(2)),l=a(3),o=a(5),h=a(4),j=a(0);var d=function(){return Object(j.jsx)("nav",{className:"cyan",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(j.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#l",children:"Repo"})})})]})})};var p=function(){return Object(j.jsx)("footer",{className:"page-footer cyan",children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," React Movies",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})},b=a(8);var u=function(e){var t=e.Title,a=e.Year,c=(e.imdbID,e.Type),s=e.Poster;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(j.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x430?text=".concat(t)}):Object(j.jsx)("img",{className:"activator",src:s})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(j.jsxs)("p",{children:[a," ",Object(j.jsx)("span",{className:"right",children:c})]})]})]})};var m=function(e){var t=e.movies,a=void 0===t?[]:t;return Object(j.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(j.jsx)(u,Object(b.a)({},e),e.imdbID)})):Object(j.jsx)("h4",{children:"Nothing found"})})};var v=function(){return Object(j.jsx)("div",{className:"preloader-wrapper big active",children:Object(j.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(j.jsx)("div",{className:"circle-clipper left",children:Object(j.jsx)("div",{className:"circle"})}),Object(j.jsx)("div",{className:"gap-patch",children:Object(j.jsx)("div",{className:"circle"})}),Object(j.jsx)("div",{className:"circle-clipper right",children:Object(j.jsx)("div",{className:"circle"})})]})})},O=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.updateMoviesFromSearch(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.updateMoviesFromSearch(e.state.search,e.state.type)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{id:"email_inline",placeholder:"search",type:"search",className:"validate",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onBlur:function(){return e.props.updateMoviesFromSearch(e.state.search,e.state.type)},onKeyDown:this.handleKey}),Object(j.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.updateMoviesFromSearch(e.state.search,e.state.type)},children:"Search"}),Object(j.jsxs)("p",{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"with-gap",name:"group1",type:"radio","data-type":"all",onClick:this.handleFilter,checked:"all"===this.state.type}),Object(j.jsx)("span",{children:"All"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"with-gap",name:"group1",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(j.jsx)("span",{children:"Movies"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"with-gap",name:"group1",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(j.jsx)("span",{children:"Series"})]})]})]})})}}]),a}(c.Component),x=O,f="ae6de1b6",y=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.updateMoviesFromSearch=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0});var c="";c="all"===a?"http://www.omdbapi.com/?apikey=".concat(f,"&s=").concat(t):"http://www.omdbapi.com/?apikey=".concat(f,"&type=").concat(a,"&s=").concat(t),fetch(c).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(f,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(j.jsxs)("main",{className:"container content",children:[Object(j.jsx)(x,{updateMoviesFromSearch:this.updateMoviesFromSearch}),a?Object(j.jsx)(v,{}):Object(j.jsx)(m,{movies:t})]})}}]),a}(c.Component),g=y,N=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(g,{}),Object(j.jsx)(p,{})]})}}]),a}(c.Component),w=N;r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c6ae3811.chunk.js.map