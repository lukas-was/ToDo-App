(this.webpackJsonptodopro=this.webpackJsonptodopro||[]).push([[0],{20:function(e,t,a){},23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),r=a.n(i),d=a(17),c=a(7),o=a(8),s=a(10),u=a(9),m=(a(28),a(11)),h=a(1),f=(a(29),function(){return l.a.createElement("ul",{className:"navigation"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/tasks"},"to do")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/done"},"done")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/add"},"Add+")))}),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={currentTime:(new Date).getTime()},e.setTime=function(){var t=(new Date).getTime();e.setState({currentTime:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.indexOfInterval=setInterval(this.setTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.indexOfInterval)}},{key:"render",value:function(){var e=this.state.currentTime,t=(new Date(this.props.deadlineDate+" 23:59").getTime()-e)/864e5,a=24*(t-Math.floor(t)),n=60*(a-Math.floor(a)),i=60*(n-Math.floor(n)),r=Math.floor(t),d=Math.floor(a),c=Math.floor(n),o=Math.floor(i);return l.a.createElement("p",null,"pozosta\u0142o: ",r," ",1===r?"dzie\u0144":"dni",", ",d<10?"0"+d:d,":",c<10?"0"+c:c,":",o<10?"0"+o:o)}}]),a}(n.Component),k=function(e){var t=e.task,a=t.id,n=t.title,i=t.text,r=t.date,d=t.active,c=t.deadline,o=t.deadlineDate,s=t.doneDate;return l.a.createElement("div",null,l.a.createElement("h3",{className:"title"},n,l.a.createElement("span",{className:"btnpanel"},d&&l.a.createElement("button",{title:"zrobione",onClick:function(){return e.done(a)}},l.a.createElement("i",{className:"far fa-check-square"})),l.a.createElement("button",{title:"usu\u0144",onClick:function(){return e.delete(a)}},l.a.createElement("i",{className:"far fa-trash-alt"})))),l.a.createElement("p",{className:"text"},i),l.a.createElement("p",null,"dodano: ",new Date(r).toLocaleString()),c,c&&l.a.createElement("p",null,"termin: ",o),c&&d&&l.a.createElement(E,{deadlineDate:o}),!d&&l.a.createElement("p",null,"wykonano: ",new Date(s).toLocaleString()))},v=(a(20),function(e){var t=e.tasks.filter((function(e){return e.active}));return t=t.map((function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete,done:e.done})})),l.a.createElement("div",{className:"taskslist"},t)}),p=function(e){var t=e.tasks.filter((function(e){return!e.active}));return t=t.map((function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete})})),l.a.createElement("div",{className:"taskslist"},t)},b=a(16),D=(a(35),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={title:"",text:"",deadline:!1,deadlineDate:(new Date).toISOString().slice(0,10),isAdded:!1},e.handleChange=function(t){var a=t.target.value,n=t.target.name;"checkbox"===t.target.type?e.setState(Object(b.a)({},n,!e.state[n])):e.setState(Object(b.a)({},n,a))},e.toggleIsAdded=function(){return e.setState({isAdded:!1})},e.handleSubmit=function(t){var a=e.state,n=a.title,l=a.text,i=a.deadline,r=a.deadlineDate;e.props.add(n,l,i,r,t)&&e.setState({title:"",text:"",deadline:!1,deadlineDate:(new Date).toISOString().slice(0,10),isAdded:!0}),setTimeout(e.toggleIsAdded,600)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.text,n=e.deadline,i=e.deadlineDate,r=e.isAdded;return l.a.createElement("div",{className:"taskform"},l.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("label",{htmlFor:"title"},"Tytu\u0142 zadania"),l.a.createElement("input",{onChange:this.handleChange,vlaue:t,name:"title",type:"text",id:"title"}),l.a.createElement("label",{htmlFor:"text"},"Opis zadania"),l.a.createElement("textarea",{onChange:this.handleChange,vlaue:a,name:"text",id:"text"}),l.a.createElement("input",{onChange:this.handleChange,checked:n,type:"checkbox",name:"deadline",id:"deadline"}),l.a.createElement("label",{htmlFor:"deadline"},"Deadline"),n&&l.a.createElement("input",{value:i,onChange:this.handleChange,type:"date",name:"deadlineDate",id:"deadlineDate"}),t&&a?l.a.createElement("button",null,"Dodaj zadanie"):l.a.createElement("button",{style:{backgroundColor:"#bbb"},disabled:!0},"Dodaj zadanie"),r&&l.a.createElement("p",{className:"taskmessage"},"Dodano")))}}]),a}(n.Component)),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).index=3,e.state={tasks:[{id:0,title:"Auto",text:"Umyj Kangura",date:"2020-07-20",active:!0,deadline:!1,deadlineDate:"",doneDate:""},{id:1,title:"Auto",text:"Umyj Fabi\u0119",date:"2020-08-10",active:!0,deadline:!1,deadlineDate:"",doneDate:""},{id:2,title:"Nauka",text:"Przeczytaj ksi\u0105\u017ck\u0119",date:"2020-12-28",active:!0,deadline:!1,deadlineDate:"",doneDate:""}]},e.deleteTask=function(t){var a=Object(d.a)(e.state.tasks);a=a.filter((function(e){return e.id!==t})),e.setState({tasks:a})},e.makeTaskDone=function(t){var a=[].concat(e.state.tasks);a.forEach((function(e){e.id===t&&(e.active=!1,e.doneDate=(new Date).getTime())})),e.setState({tasks:a})},e.addTask=function(t,a,n,l,i){i.preventDefault();var r={id:e.index,title:t,text:a,date:(new Date).getTime(),active:!0,deadline:n,deadlineDate:l,doneDate:""};e.index++;var c=Object(d.a)(e.state.tasks);return c.push(r),e.setState({tasks:c}),!0},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement(f,null)),l.a.createElement("main",null,l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/tasks"},l.a.createElement(v,{tasks:this.state.tasks,delete:this.deleteTask,done:this.makeTaskDone})),l.a.createElement(h.a,{path:"/done"},l.a.createElement(p,{tasks:this.state.tasks,delete:this.deleteTask})),l.a.createElement(h.a,{path:"/add"},l.a.createElement(D,{add:this.addTask}))))))}}]),a}(l.a.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7d7b7cdd.chunk.js.map