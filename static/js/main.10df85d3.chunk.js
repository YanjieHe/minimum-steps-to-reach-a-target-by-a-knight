(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(3),i=a.n(s);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(4),h=a(5),c=a(7),l=a(6),u=a(8),d=a(1),k=(a(16),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={sizeOfBoard:8,knightX:-1,knightY:-1,targetX:-1,targetY:-1,moves:-1},a.handleClicked=a.handleClicked.bind(Object(d.a)(Object(d.a)(a))),a.renderBoard=a.renderBoard.bind(Object(d.a)(Object(d.a)(a))),a.renderChess=a.renderChess.bind(Object(d.a)(Object(d.a)(a))),a.hint=a.hint.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"renderChess",value:function(t,e){return t===this.state.knightX&&e===this.state.knightY?r.a.createElement("span",{style:{fontSize:"30px"}},"\u2658"):t===this.state.targetX&&e===this.state.targetY?r.a.createElement("span",{style:{fontSize:"30px"}},"\u2022"):""}},{key:"handleClicked",value:function(t,a,n){if(-1===this.state.knightX)this.setState({knightX:a,knightY:n});else if(-1===this.state.targetX)if(a===this.state.knightX&&n===this.state.knightY);else{this.setState({targetX:a,targetY:n});var r=e.countMoves(this.state.sizeOfBoard,this.state.knightX,this.state.knightY,a,n);this.setState({moves:r})}else this.setState({knightX:-1,knightY:-1,targetX:-1,targetY:-1,moves:-1})}},{key:"renderBoard",value:function(){for(var t=this,e=[],a=this.state.sizeOfBoard,n=function(n){for(var s=[],i=function(e){(n+e)%2===1?s.push(r.a.createElement("td",{align:"center",onClick:function(r){return t.handleClicked(r,a-n-1,a-e-1)},key:[n,e],style:{backgroundColor:"grey"}},t.renderChess(a-n-1,a-e-1))):s.push(r.a.createElement("td",{align:"center",onClick:function(r){return t.handleClicked(r,a-n-1,a-e-1)},key:[n,e],position:[n,e]},t.renderChess(a-n-1,a-e-1)))},o=0;o<t.state.sizeOfBoard;o++)i(o);e.push(r.a.createElement("tr",{key:n},s))},s=0;s<this.state.sizeOfBoard;s++)n(s);return e}},{key:"hint",value:function(){return-1===this.state.knightX?"Please put a knight":-1===this.state.targetX?"Please put a target":r.a.createElement("span",null,"Number of steps: ",this.state.moves)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Minimum steps to reach a target by a Knight"),this.hint(),r.a.createElement("table",{border:"4"},r.a.createElement("tbody",null,this.renderBoard()))))}}],[{key:"countSteps",value:function(t,a,n,r,s){return a===r&&n===s?t[0][0]:0!==t[Math.abs(a-r)][Math.abs(n-s)]?t[Math.abs(a-r)][Math.abs(n-s)]:(a<=r?n<=s?(i=a+2,o=n+1,h=a+1,c=n+2):(i=a+2,o=n-1,h=a+1,c=n-2):n<=s?(i=a-2,o=n+1,h=a-1,c=n+2):(i=a-2,o=n-1,h=a-1,c=n-2),t[Math.abs(a-r)][Math.abs(n-s)]=Math.min(e.countSteps(t,i,o,r,s),e.countSteps(t,h,c,r,s))+1,t[Math.abs(n-s)][Math.abs(a-r)]=t[Math.abs(a-r)][Math.abs(n-s)],t[Math.abs(a-r)][Math.abs(n-s)]);var i,o,h,c}},{key:"createArray",value:function(t,e){for(var a=new Array(t),n=0;n<t;n++)a[n]=new Array(e);return a}},{key:"countMoves",value:function(t,a,n,r,s){for(var i=t*t,o=e.createArray(t,t),h=0;h<t;h++)for(var c=0;c<t;c++)o[h][c]=0;return 1===a&&1===n&&2===r&&2===s||2===a&&2===n&&1===r&&1===s?4:1===a&&n===i&&2===r&&s===i-1||2===a&&n===i-1&&1===r&&s===i?4:a===i&&1===n&&r===i-1&&2===s||a===i-1&&2===n&&r===i&&1===s?4:a===i&&n===i&&r===i-1&&s===i-1||a===i-1&&n===i-1&&r===i&&s===i?4:(o[1][0]=3,o[0][1]=3,o[1][1]=2,o[2][0]=2,o[0][2]=2,o[2][1]=1,o[1][2]=1,e.countSteps(o,a,n,r,s))}}]),e}(r.a.Component));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.10df85d3.chunk.js.map