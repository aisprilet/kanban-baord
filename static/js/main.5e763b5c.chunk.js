(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(9),s=a.n(c),i=(a(17),a(25));a(18);var l=()=>{const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)([]),[s,l]=Object(n.useState)("status"),[o,u]=Object(n.useState)("title"),[m,p]=Object(n.useState)([]);Object(n.useEffect)(()=>{(async()=>{try{const a=await i.a.get("https://api.quicksell.co/v1/internal/frontend-assignment");t(a.data.tickets),c(a.data.users)}catch(e){console.error("Error fetching the data",e)}})()},[]);const d=a.reduce((e,t)=>(e[t.id]=t.name,e),{}),E={4:"Urgent",3:"High",2:"Medium",1:"Low",0:"No priority"},y="status"===s?e.reduce((e,t)=>(e[t.status]=e[t.status]||[],e[t.status].push(t),e),{}):"user"===s?e.reduce((e,t)=>{const a=t.userId;return e[d[a]]=e[d[a]]||[],e[d[a]].push(t),e},{}):"priority"===s?e.reduce((e,t)=>{const a=t.priority;return e[a]=e[a]||[],e[a].push(t),e},{}):{},b=()=>{};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"controls"},r.a.createElement("select",{onChange:e=>l(e.target.value)},r.a.createElement("option",{value:"status"},"Group by Status"),r.a.createElement("option",{value:"user"},"Group by User"),r.a.createElement("option",{value:"priority"},"Group by Priority")),r.a.createElement("select",{onChange:e=>u(e.target.value)},r.a.createElement("option",{value:"title"},"Sort by Title"),r.a.createElement("option",{value:"priority"},"Sort by Priority")),r.a.createElement("button",{onClick:()=>t([...e])},"Display")),r.a.createElement("div",{className:"kanban"},Object.entries(y).map(e=>{let[t,a]=e;return r.a.createElement("div",{key:t,className:"column"},r.a.createElement("h2",{className:"column-header"},r.a.createElement("span",null,"priority"===s?E[t]:t,"status"===s&&r.a.createElement("i",{className:"fas fa-clipboard-list status-icon"})),r.a.createElement("button",{className:"add-button",onClick:b},"+")),(e=>e.sort((t,a)=>"priority"===o?a.priority-t.priority:"title"===o?t.title.localeCompare(a.title):e))(a).map(e=>r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("input",{type:"checkbox",checked:m.includes(e.id),onChange:()=>(e=>{p(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])})(e.id),className:"custom-radio"}),r.a.createElement("h2",{className:"ticket-title"},e.title)),r.a.createElement("p",{className:"ticket-tags"},e.tag.join(", ")))))})))};var o=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:c,getTTFB:s}=t;a(e),n(e),r(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null))),o()}},[[10,1,2]]]);
//# sourceMappingURL=main.5e763b5c.chunk.js.map