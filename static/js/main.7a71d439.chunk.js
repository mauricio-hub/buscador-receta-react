(this["webpackJsonpsemiclon-airbnb"]=this["webpackJsonpsemiclon-airbnb"]||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(1),r=t(5),n=t.n(r),i=t(4),l=t.n(i),o=t(6),d=t(2),j=function(e){var c=e.receta,t=e.calorias,a=e.descripcion,r=e.img;return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"card mb-3",style:{width:"940px"},children:Object(s.jsxs)("div",{className:"row no-gutters",children:[Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsx)("img",{src:r,alt:""})}),Object(s.jsx)("div",{className:"col-md-8",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("h5",{className:"card-title",children:["Titulo: ",c]}),Object(s.jsxs)("p",{className:"card-text",children:["Calorias: ",t]}),Object(s.jsx)("p",{className:"card-text",children:Object(s.jsx)("ol",{children:a.map((function(e){return Object(s.jsx)("li",{children:e})}))})})]})})]})})})};t(13);var b=function(){var e=Object(a.useState)([]),c=Object(d.a)(e,2),t=c[0],r=c[1],n=Object(a.useState)(""),i=Object(d.a)(n,2),b=i[0],m=i[1],u=Object(a.useState)(""),h=Object(d.a)(u,2),p=h[0],O=h[1];Object(a.useEffect)((function(){x()}),[p]);var x=function(){var e=Object(o.a)(l.a.mark((function e(){var c,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("0bf55858","&app_key=").concat("00b1c148bf85e6d97d9528bb893bfa96"));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,r(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"row justify-content-center",children:[Object(s.jsxs)("div",{className:"col-12 col-md-10 col-lg-8",children:[Object(s.jsx)("h1",{children:"Bucador de Recetas"}),Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(b),m("")},className:"card card-sm",children:Object(s.jsxs)("div",{className:"card-body row no-gutters align-items-center",children:[Object(s.jsx)("div",{className:"col-auto",children:Object(s.jsx)("i",{className:"fas fa-search h4 text-body"})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("input",{className:"form-control form-control-lg form-control-borderless",type:"search",placeholder:"Search topics or keywords",value:b,onChange:function(e){m(e.target.value)}})}),Object(s.jsx)("div",{className:"col-auto",children:Object(s.jsx)("button",{className:"btn btn-lg btn-success",type:"submit",children:"Search"})})]})})]}),t.map((function(e){return Object(s.jsx)(j,{receta:e.recipe.label,calorias:e.recipe.calories,descripcion:e.recipe.ingredientLines,img:e.recipe.image},e.recipe.label)}))]})};n.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7a71d439.chunk.js.map