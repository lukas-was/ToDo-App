(this.webpackJsonptodopro=this.webpackJsonptodopro||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(22),d=a.n(i),r=a(13),c=a(6),s=a(7),o=a(9),u=a(8),m=(a(29),a(10)),h=a(1),f=(a(30),function(){return l.a.createElement("ul",{className:"navigation"},l.a.createElement("li",null,l.a.createElement(m.c,{exact:!0,to:"/"},"to do")),l.a.createElement("li",null,l.a.createElement(m.c,{to:"/done"},"done")),l.a.createElement("li",null,l.a.createElement(m.c,{to:"/add"},"Add+")))}),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={currentTime:(new Date).getTime()},e.setTime=function(){var t=(new Date).getTime();e.setState({currentTime:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.indexOfInterval=setInterval(this.setTime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.indexOfInterval)}},{key:"render",value:function(){var e=this.state.currentTime,t=(new Date(this.props.deadlineDate+" 23:59").getTime()-e)/864e5,a=24*(t-Math.floor(t)),n=60*(a-Math.floor(a)),i=60*(n-Math.floor(n)),d=Math.floor(t),r=Math.floor(a),c=Math.floor(n),s=Math.floor(i);return l.a.createElement("p",null,"pozosta\u0142o: ",d," ",1===d?"dzie\u0144":"dni",", ",r<10?"0"+r:r,":",c<10?"0"+c:c,":",s<10?"0"+s:s)}}]),a}(n.Component),p=function(e){var t=e.task,a=t.id,n=t.title,i=t.text,d=t.date,r=t.active,c=t.deadline,s=t.deadlineDate,o=t.doneDate;return l.a.createElement("div",{className:"task"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{id:"title"},n),l.a.createElement("div",{className:"btnpanel"},r&&l.a.createElement("button",{title:"zrobione",onClick:function(){return e.done(a)}},l.a.createElement("i",{className:"far fa-check-square"})),l.a.createElement("button",{title:"usu\u0144",onClick:function(){return e.delete(a)}},l.a.createElement("i",{className:"far fa-trash-alt"})),r&&l.a.createElement(m.b,{title:"edytuj",to:"edit/".concat(a)},l.a.createElement("i",{className:"far fa-edit"})))),l.a.createElement("p",{className:"text"},i),l.a.createElement("p",null,"dodano: ",new Date(d).toLocaleString()),c,c&&l.a.createElement("p",null,"termin: ",s),c&&r&&l.a.createElement(E,{deadlineDate:s}),!r&&l.a.createElement("p",null,"wykonano: ",new Date(o).toLocaleString()))},v=(a(20),function(e){var t=e.tasks.filter((function(e){return e.active}));return t=t.map((function(t){return l.a.createElement(p,{key:t.id,task:t,delete:e.delete,done:e.done})})),l.a.createElement("div",{className:"taskslist"},t)}),k=function(e){var t=e.tasks.filter((function(e){return!e.active}));return t=t.map((function(t){return l.a.createElement(p,{key:t.id,task:t,delete:e.delete})})),l.a.createElement("div",{className:"taskslist"},t)},b=a(12),g=(a(21),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={title:"",text:"",deadline:!1,deadlineDate:(new Date).toISOString().slice(0,10),isAdded:!1},e.handleChange=function(t){var a=t.target.value,n=t.target.name;"checkbox"===t.target.type?e.setState(Object(b.a)({},n,!e.state[n])):e.setState(Object(b.a)({},n,a))},e.toggleIsAdded=function(){return e.setState({isAdded:!1})},e.handleSubmit=function(t){var a=e.state,n=a.title,l=a.text,i=a.deadline,d=a.deadlineDate;e.props.add(n,l,i,d,t)&&e.setState({title:"",text:"",deadline:!1,deadlineDate:(new Date).toISOString().slice(0,10),isAdded:!0}),setTimeout(e.toggleIsAdded,600)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.text,n=e.deadline,i=e.deadlineDate,d=e.isAdded;return l.a.createElement("div",{className:"taskform"},l.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("label",{htmlFor:"title"},"Tytu\u0142 zadania"),l.a.createElement("input",{onChange:this.handleChange,value:t,name:"title",type:"text",id:"title",maxLength:25}),l.a.createElement("label",{htmlFor:"text"},"Opis zadania"),l.a.createElement("textarea",{onChange:this.handleChange,value:a,name:"text",id:"text"}),l.a.createElement("input",{onChange:this.handleChange,checked:n,type:"checkbox",name:"deadline",id:"deadline"}),l.a.createElement("label",{htmlFor:"deadline"},"Deadline"),n&&l.a.createElement("input",{value:i,onChange:this.handleChange,type:"date",name:"deadlineDate",id:"deadlineDate"}),t&&a?l.a.createElement("button",null,"Dodaj zadanie"):l.a.createElement("button",{style:{backgroundColor:"#bbb"},disabled:!0},"Dodaj zadanie"),d&&l.a.createElement("p",{className:"taskmessage"},"Dodano")))}}]),a}(n.Component)),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state=e.getEditTask(),e.handleChange=function(t){var a=t.target.value,n=t.target.name;"checkbox"===t.target.type?e.setState(Object(b.a)({},n,!e.state[n])):e.setState(Object(b.a)({},n,a))},e.toggleIsEdited=function(){return e.setState({isEdited:!1})},e.handleSubmit=function(t){var a=e.state,n=a.id,l=a.title,i=a.text,d=a.date,r=a.deadline,c=a.deadlineDate;e.props.edit(n,l,i,d,r,c,t)&&e.setState({title:"",text:"",deadline:!1,deadlineDate:(new Date).toISOString().slice(0,10),isEdited:!0}),setTimeout(e.toggleIsEdited,600)},e}return Object(s.a)(a,[{key:"getEditTask",value:function(){var e=parseInt(this.props.match.params.id),t=Object(r.a)(this.props.tasks).filter((function(t){return t.id===e}));return{id:e,title:t[0].title,text:t[0].text,date:t[0].date,deadline:t[0].deadline,deadlineDate:t[0].deadlineDate,isEdited:!1}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.text,n=e.deadline,i=e.deadlineDate,d=e.isEdited;return l.a.createElement("div",{className:"taskform",style:{backgroundColor:"rgb(70, 70, 70)"}},l.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},l.a.createElement("label",{htmlFor:"title"},"Tytu\u0142 zadania"),l.a.createElement("input",{onChange:this.handleChange,value:t,name:"title",type:"text",id:"title",maxLength:25}),l.a.createElement("label",{htmlFor:"text"},"Opis zadania"),l.a.createElement("textarea",{onChange:this.handleChange,value:a,name:"text",id:"text"}),l.a.createElement("input",{onChange:this.handleChange,checked:n,type:"checkbox",name:"deadline",id:"deadline"}),l.a.createElement("label",{htmlFor:"deadline"},"Deadline"),n&&l.a.createElement("input",{value:i,onChange:this.handleChange,type:"date",name:"deadlineDate",id:"deadlineDate"}),t&&a?l.a.createElement("button",null,"Zapisz"):l.a.createElement("button",{style:{backgroundColor:"#bbb"},disabled:!0},"Zapisz"),d&&l.a.createElement("p",{className:"taskmessage"},"Zapisano")))}}]),a}(n.Component),x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).index=3,e.state={tasks:[{id:0,title:"Auto",text:"Umyj Kangura",date:"2020-07-20",active:!0,deadline:!1,deadlineDate:"",doneDate:""},{id:1,title:"Auto",text:"Umyj Fabi\u0119",date:"2020-08-10",active:!1,deadline:!1,deadlineDate:"",doneDate:"2020-08-12"},{id:2,title:"Nauka",text:"Przeczytaj ksi\u0105\u017ck\u0119",date:"2020-12-28",active:!0,deadline:!1,deadlineDate:"",doneDate:""}]},e.deleteTask=function(t){var a=Object(r.a)(e.state.tasks);a=a.filter((function(e){return e.id!==t})),e.setState({tasks:a})},e.makeTaskDone=function(t){var a=[].concat(e.state.tasks);a.forEach((function(e){e.id===t&&(e.active=!1,e.doneDate=(new Date).getTime())})),e.setState({tasks:a})},e.editTask=function(t,a,n,l,i,d,c){c.preventDefault();var s={id:t,title:a,text:n,date:l,active:!0,deadline:i,deadlineDate:d,doneDate:""},o=Object(r.a)(e.state.tasks);return(o=o.filter((function(e){return e.id!==t}))).push(s),e.setState({tasks:o}),!0},e.addTask=function(t,a,n,l,i){i.preventDefault();var d={id:e.index,title:t,text:a,date:(new Date).getTime(),active:!0,deadline:n,deadlineDate:l,doneDate:""};e.index++;var c=Object(r.a)(e.state.tasks);return c.push(d),e.setState({tasks:c}),!0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(m.a,{basename:"/ToDo-App"},l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement(f,null)),l.a.createElement("main",null,l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/"},l.a.createElement(v,{tasks:this.state.tasks,delete:this.deleteTask,done:this.makeTaskDone})),l.a.createElement(h.a,{path:"/done"},l.a.createElement(k,{tasks:this.state.tasks,delete:this.deleteTask})),l.a.createElement(h.a,{exact:!0,path:"/add"},l.a.createElement(g,{add:this.addTask})),l.a.createElement(h.a,{path:"/edit/:id",render:function(t){var a=t.match;return l.a.createElement(D,{match:a,tasks:e.state.tasks,edit:e.editTask})}})))))}}]),a}(l.a.Component);d.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0f056972.chunk.js.map