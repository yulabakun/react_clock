(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),o=n(2),s=n(3),r=n(5),i=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),d=function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={clockName:t.props.name,today:new Date},t.timerId=0,t.onUpdate=function(e){e(t.props.name)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({today:new Date}),this.timerId=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=this;this.props.name!==t.name&&(this.onUpdate((function(t){e.setState({clockName:t})})),console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name)))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.state.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.today.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var p=function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={clockName:"Clock-0",hasClock:!0},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(e){e.preventDefault(),t.setState({hasClock:!0})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(d,{name:this.state.clockName})]})}}]),n}(u.a.PureComponent);c.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.270759e3.chunk.js.map