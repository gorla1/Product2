(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[0],{115:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),s=(a(115),a(23)),o=a(11),l=a(13),d=a(19),j=a.n(d),b=a(29),h=a(30),x=a.n(h),u=a(171),m=a(173),p=a(92),O=a(175),g=a(176),f=a(145),v=a(177),y=a(178),N=a(179),C=a(10),w=a(1),S=Object(u.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%"},cardMedia:{paddingTop:e.spacing(4),margin:e.spacing(8),height:e.spacing(80)},cardcontent:{width:"50%",marginTop:e.spacing(2),marginLeft:e.spacing(10)},button:{justifyContent:"center",alignItems:"center"}}})),k=function(e){var t=S(),a=Object(n.useState)({}),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(!0),l=Object(o.a)(s,2),d=l[0],h=l[1],u=Object(n.useCallback)(Object(b.a)(j.a.mark((function t(){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.jsonbin.io/b/611f4110c5159b35ae01202b");case 2:a=t.sent,n=a.data.find((function(t){return t.id===parseInt(e.match.params.id)})),console.log(n),i(n),h(!1);case 7:case"end":return t.stop()}}),t)}))),[e.match.params.id]);return Object(n.useEffect)((function(){return u(),function(){console.log("cleaned up")}}),[u]),Object(w.jsx)("div",{children:d?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("center",{children:Object(w.jsx)("b",{children:Object(w.jsx)("h3",{children:"Loading"})})})," "]}):Object(w.jsx)("div",{children:Object(w.jsxs)(m.a,{className:t.card,children:[Object(w.jsx)(p.a,{elevation:3,children:Object(w.jsx)(O.a,{className:t.cardMedia,image:r.img,title:"Image title"})}),Object(w.jsxs)(g.a,{className:t.cardcontent,children:[Object(w.jsx)(f.a,{variant:"h3",color:"secondary",children:"CAR DETAILS"}),Object(w.jsxs)(v.a,{container:!0,justifyContent:"center",padding:"5px",margin:"10px",children:[Object(w.jsx)(v.a,{item:!0,padding:"5px",margin:"5px",xs:6,md:6,children:Object(w.jsxs)(f.a,{color:"secondary",variant:"h6",children:["MODEL: ",r.Model]})}),Object(w.jsx)(v.a,{item:!0,padding:"5px",margin:"5px",xs:6,md:6,children:Object(w.jsxs)(f.a,{color:"secondary",variant:"h6",children:["PRICE: ",r.price,"RS"]})}),Object(w.jsx)(v.a,{item:!0,padding:"5px",margin:"5px",xs:6,md:6,children:Object(w.jsxs)(f.a,{color:"secondary",variant:"h6",children:["YEAR OF PURCHASE:  ",r.year]})}),Object(w.jsx)(v.a,{item:!0,padding:"5px",margin:"5px",xs:6,md:6,children:Object(w.jsxs)(f.a,{color:"secondary",variant:"h6",children:["FUEL TYPE ",r.FuelType]})}),Object(w.jsx)(v.a,{item:!0,padding:"5px",margin:"5px",xs:6,md:6,children:Object(w.jsxs)(f.a,{color:"secondary",variant:"h6",children:["KILOMETERS DRIVEN: ",r.KMs,"Km"]})}),Object(w.jsx)(v.a,{item:!0,padding:"5px",margin:"5px",xs:6,md:6,children:Object(w.jsx)(f.a,{color:"secondary",variant:"h6"})})]})]}),Object(w.jsx)(y.a,{className:t.button,children:Object(w.jsx)(C.b,{to:"/Checkout",children:Object(w.jsx)(N.a,{size:"large",variant:"contained",color:"secondary",onClick:function(){return e.getPrice(r.price)},children:"Buy Now"})})})]})})})},F=Object(u.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},content:{textAlign:"center"},cardaction:{textAlign:"center",justifyContent:"center"}}})),T=function(e){var t=F(),a=e.product;return Object(w.jsx)(v.a,{item:!0,xs:12,sm:6,md:4,children:Object(w.jsx)(C.b,{to:"/product/".concat(a.id),style:{textDecoration:"none"},children:Object(w.jsxs)(m.a,{className:t.card,children:[Object(w.jsx)(O.a,{className:t.cardMedia,image:a.img,title:"Image title"}),Object(w.jsx)(g.a,{className:t.content,children:Object(w.jsx)(f.a,{variant:"caption",children:a.Model})}),Object(w.jsx)(y.a,{className:t.cardaction,children:Object(w.jsx)(N.a,{variant:"contained",size:"large",color:"secondary",children:"View"})})]})})})},E=a(180),D=Object(u.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),marginTop:e.spacing(2),backgroundColor:"#C2FFD9"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"}}})),L=function(){var e=D(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),l=s[0],d=s[1],h=Object(n.useCallback)(Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.jsonbin.io/b/611f4110c5159b35ae01202b");case 2:t=e.sent,r(t.data),d(!1);case 5:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){h()}),[h]),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(E.a,{className:e.cardGrid,maxWidth:"lg",children:Object(w.jsx)(v.a,{container:!0,spacing:5,children:l?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("center",{children:Object(w.jsx)("b",{children:Object(w.jsx)("h3",{children:"Loading"})})})," "]}):c.map((function(e){return Object(w.jsx)(T,{product:e},e.id)}))})})})},I=Object(u.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),marginTop:e.spacing(2),backgroundColor:"#C2FFD9"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"}}})),R=function(){var e=I(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),l=s[0],d=s[1],h=Object(n.useCallback)(Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/carsList.json");case 2:t=e.sent,r(t.data),d(!1);case 5:case"end":return e.stop()}}),e)}))),[]);Object(n.useEffect)((function(){h()}),[h]);var u=c.filter((function(e){return"Mahindra"===e.Brand}));return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(E.a,{className:e.cardGrid,maxWidth:"lg",children:Object(w.jsx)(v.a,{container:!0,spacing:5,children:l?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("center",{children:Object(w.jsx)("b",{children:Object(w.jsx)("h3",{children:"Loading"})})})," "]}):u.map((function(e){return Object(w.jsx)(T,{product:e},e.id)}))})})})},A=Object(u.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),marginTop:e.spacing(2),backgroundColor:"#C2FFD9"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"}}})),M=function(){var e=A(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),l=s[0],d=s[1],h=Object(n.useCallback)(Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/carsList.json");case 2:t=e.sent,r(t.data),d(!1);case 5:case"end":return e.stop()}}),e)}))),[]);Object(n.useEffect)((function(){h()}),[h]);var u=c.filter((function(e){return"Ford"===e.Brand}));return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(E.a,{className:e.cardGrid,maxWidth:"lg",children:Object(w.jsx)(v.a,{container:!0,spacing:5,children:l?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("center",{children:Object(w.jsx)("b",{children:Object(w.jsx)("h3",{children:"Loading"})})})," "]}):u.map((function(e){return Object(w.jsx)(T,{product:e},e.id)}))})})})},P=a(35),W=a(15),B=a(181),G=a(182),z=a(183),U=a(85),H=a.n(U),Y=a(86),q=a.n(Y),V=a(189),K=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(3)},title:{flexGrow:1,color:"blue",width:e.spacing(25)},header:{backgroundColor:"#CDF0EA",marginTop:e.spacing(2)},button:{color:"blue",marginLeft:e.spacing(30),padding:e.spacing(3),textAlign:"center",justifyContent:"flex-end"},search:Object(P.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(W.a)(e.palette.common.white,.25),"&:hover":{backgroundColor:Object(W.a)(e.palette.common.white,.35)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(25),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"blue"},inputRoot:{color:"blue"},inputInput:Object(P.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(3),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("lg"),{width:"200px","&:focus":{width:"200px"}})}}));function J(e){var t=K();return Object(w.jsx)("div",{className:t.root,children:Object(w.jsx)(B.a,{position:"static",className:t.header,children:Object(w.jsxs)(G.a,{justifyContent:"center",alignItems:"center",children:[Object(w.jsx)(z.a,{edge:"start",className:t.menuButton,children:Object(w.jsx)(H.a,{fontSize:"large"})}),Object(w.jsx)(C.b,{to:"/",style:{textDecoration:"none"},children:Object(w.jsx)(f.a,{variant:"h5",className:t.title,children:"Cars"})}),Object(w.jsxs)("div",{className:t.search,children:[Object(w.jsx)("div",{className:t.searchIcon,children:Object(w.jsx)(q.a,{})}),Object(w.jsx)(V.a,{placeholder:"Find your dream car....",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),e.auth?Object(w.jsx)(N.a,{onClick:function(){return e.logoutHandler()},className:t.button,children:" LOGOUT "}):Object(w.jsx)(C.b,{to:"/signin",style:{textDecoration:"none"},children:Object(w.jsx)(N.a,{className:t.button,children:" Login / SingUp"})})]})})})}var Q=a(87),Z=a(88),_=a(90),X=a(89),$=function(e){Object(_.a)(a,e);var t=Object(X.a)(a);function a(){return Object(Q.a)(this,a),t.apply(this,arguments)}return Object(Z.a)(a,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"row",style:{fontSize:"18px",marginTop:"20px",height:"80px",backgroundColor:"#6E85B2"},children:Object(w.jsx)("div",{className:"col",children:Object(w.jsxs)("ul",{className:"nav justify-content-center m-3",children:[Object(w.jsx)("li",{className:"nav-item",style:{color:"white"},children:Object(w.jsx)("a",{className:"nav-link active text-light",children:"Terms"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link text-light",children:"Privacy and Cookie Police"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link text-light",children:"Intellectual Property"})})]})})})})}}]),a}(c.a.Component),ee=a(190),te=a(184),ae=a(186),ne=a(185),ce=a(188),re=a(187),ie=a(59),se=a.n(ie);function oe(){return Object(w.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(C.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var le=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function de(e){var t=le(),a=Object(n.useState)({email:"gorladineshyadav1@gmail.com",password:9440544350}),c=Object(o.a)(a,2),r=c[0],i=c[1],l=Object(n.useState)({email:"",password:""}),d=Object(o.a)(l,2),j=(d[0],d[1]),b=function(e){i(Object(s.a)(Object(s.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(w.jsxs)(E.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(te.a,{}),Object(w.jsxs)("div",{className:t.paper,children:[Object(w.jsx)(ee.a,{className:t.avatar,children:Object(w.jsx)(se.a,{})}),Object(w.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),"gorladineshyadav1@gmail.com"==r.email&&9440544350===r.password?(e.loginHandler(),console.log(e),e.history.push("/Checkout")):j({email:"you have entered wrong email",password:"either email or password is incorrect"})},className:t.form,noValidate:!0,children:[Object(w.jsx)(ae.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:r.email,autoComplete:"email",autoFocus:!0,onChange:function(e){return b(e)}}),Object(w.jsx)(ae.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:r.password,label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return b(e)}}),Object(w.jsx)(ne.a,{control:Object(w.jsx)(ce.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(w.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(w.jsxs)(v.a,{container:!0,children:[Object(w.jsx)(v.a,{item:!0,xs:!0,children:Object(w.jsx)(C.b,{variant:"body2",children:"Forgot password?"})}),Object(w.jsx)(v.a,{item:!0,children:Object(w.jsx)(C.b,{to:"/SignUp",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(w.jsx)(re.a,{mt:8,children:Object(w.jsx)(oe,{})})]})}function je(){return Object(w.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(C.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var be=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function he(){var e=be();return Object(w.jsxs)(E.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(te.a,{}),Object(w.jsxs)("div",{className:e.paper,children:[Object(w.jsx)(ee.a,{className:e.avatar,children:Object(w.jsx)(se.a,{})}),Object(w.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(w.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(w.jsxs)(v.a,{container:!0,spacing:2,children:[Object(w.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(ae.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(w.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(w.jsx)(v.a,{item:!0,xs:12,children:Object(w.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(w.jsx)(v.a,{item:!0,xs:12,children:Object(w.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})}),Object(w.jsx)(v.a,{item:!0,xs:12,children:Object(w.jsx)(ne.a,{control:Object(w.jsx)(ce.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(w.jsx)(C.b,{to:"/Checkout",children:Object(w.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"})}),Object(w.jsx)(v.a,{container:!0,justifyContent:"flex-end",children:Object(w.jsx)(v.a,{item:!0,children:Object(w.jsx)(C.b,{to:"/SignIn",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(w.jsx)(re.a,{mt:5,children:Object(w.jsx)(je,{})})]})}var xe=Object(u.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#F9F9F9",height:"auto"},paper:{padding:e.spacing(3),textAlign:"center",color:e.palette.text.secondary},card:{height:e.spacing(65)},media:{height:"70%"},button:{margin:e.spacing(5)}}}));function ue(){var e=xe();return Object(w.jsx)("div",{className:e.root,children:Object(w.jsx)(E.a,{children:Object(w.jsx)(v.a,{container:!0,spacing:3,children:Object(w.jsx)(v.a,{item:!0,xs:12,children:Object(w.jsx)(p.a,{className:e.paper,children:Object(w.jsxs)(m.a,{className:e.card,children:[Object(w.jsx)(O.a,{className:e.media,image:"https://i.ibb.co/3NRdQSV/new-car-hd-wallpapers1589891906.jpg",title:"Collection Of Cars"}),Object(w.jsxs)(g.a,{children:[Object(w.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"A WHOLE NEW WORLD OF CARS"}),Object(w.jsx)(C.b,{to:"/cars",style:{textDecoration:"none"},children:Object(w.jsx)(N.a,{className:e.button,size:"lg",variant:"contained",color:"secondary",children:"VIEW ALL CARS"})}),Object(w.jsx)(C.b,{to:"/mahindra",style:{textDecoration:"none"},children:Object(w.jsx)(N.a,{className:e.button,size:"lg",variant:"contained",color:"secondary",children:"Mahindra"})}),Object(w.jsx)(C.b,{to:"/ford",style:{textDecoration:"none"},children:Object(w.jsx)(N.a,{className:e.button,size:"lg",variant:"contained",color:"secondary",children:"Ford"})}),Object(w.jsx)(C.b,{to:"/maruthi",style:{textDecoration:"none"},children:Object(w.jsx)(N.a,{className:e.button,size:"lg",variant:"contained",color:"secondary",children:"Maruthi"})})]})]})})})})})})}var me=Object(u.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),marginTop:e.spacing(2),backgroundColor:"#C2FFD9"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"}}})),pe=function(){var e=me(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),l=s[0],d=s[1],h=Object(n.useCallback)(Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/carsList.json");case 2:t=e.sent,r(t.data),d(!1);case 5:case"end":return e.stop()}}),e)}))),[]);Object(n.useEffect)((function(){h()}),[h]);var u=c.filter((function(e){return"Maruthi"===e.Brand}));return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(E.a,{className:e.cardGrid,maxWidth:"lg",children:Object(w.jsx)(v.a,{container:!0,spacing:5,children:l?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("center",{children:Object(w.jsx)("b",{children:Object(w.jsx)("h3",{children:"Loading"})})})," "]}):u.map((function(e){return Object(w.jsx)(T,{product:e},e.id)}))})})})};function Oe(e){var t=Object(n.useState)({firstname:"",lastname:"",address1:"",address2:"",city:"",state:"",zip:"",country:"",nameoncard:"",cardnumber:"",expirydate:"",cvv:""}),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(1),l=Object(o.a)(i,2),d=l[0],j=l[1],b=function(e){r(Object(s.a)(Object(s.a)({},c),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col-8 m-auto",children:[Object(w.jsxs)("form",{children:[Object(w.jsx)("h2",{className:"text-center",children:"Checkout"}),Object(w.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(w.jsx)("span",{children:"Shipping address"}),Object(w.jsx)("span",{children:"Payment details"}),Object(w.jsx)("span",{children:"Review your order"})]}),1===d?Object(w.jsx)("div",{className:"border table-borderless",children:Object(w.jsx)("table",{className:"table table-borderless",children:Object(w.jsxs)("tbody",{children:[Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:"2",children:Object(w.jsx)("h4",{children:"Shipping address"})})}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.firstname,name:"firstname",className:"form-control",placeholder:"First name*",onChange:b})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.lastname,name:"lastname",className:"form-control",placeholder:"Last name*",onChange:b})})]}),Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:"2",children:Object(w.jsx)("input",{type:"text",value:c.address1,name:"address1",className:"form-control",placeholder:"Address line 1*",onChange:b})})}),Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:"2",children:Object(w.jsx)("input",{type:"text",value:c.address2,name:"address2",className:"form-control",placeholder:"Address line 2",onChange:b})})}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.city,name:"city",className:"form-control",placeholder:"City *",onChange:b})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.state,name:"state",className:"form-control",placeholder:"State/Province*",onChange:b})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.zip,name:"zip",className:"form-control",placeholder:"Zip / Postal code*",onChange:b})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.country,name:"country",className:"form-control",placeholder:"Country*",onChange:b})})]}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:"2",children:[Object(w.jsx)("input",{type:"checkbox",name:"checked"})," Use this address for payment details"]})})]})})}):null,2===d?Object(w.jsx)("div",{className:"border table-borderless",children:Object(w.jsx)("table",{className:"table table-borderless",children:Object(w.jsxs)("tbody",{children:[Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:"2",children:Object(w.jsx)("h4",{children:"Payment Method"})})}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.nameoncard,name:"nameoncard",className:"form-control",placeholder:"name on card*",onChange:b})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.cardnumber,name:"cardnumber",className:"form-control",placeholder:"card number*",onChange:b})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.expirydate,name:"expirydate",className:"form-control",placeholder:"expiry date*",onChange:b})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{type:"text",value:c.cvv,name:"cvv",className:"form-control",placeholder:"cvv*",onChange:b})})]}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:"2",children:[Object(w.jsx)("input",{type:"checkbox",name:"checked"})," Remember credit card details for next time"]})})]})})}):null,3===d?Object(w.jsx)("div",{className:"border table-borderless",children:Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col-9 m-auto",children:[Object(w.jsx)("h4",{style:{textAlign:"center",padding:"10px",margin:"10px"},children:"Order Summary"}),Object(w.jsx)("h3",{children:"YOUR REGESTIRATION HAS BEEN COMPLETED!"}),Object(w.jsx)("h6",{children:"we will reach you back soon!!!!"}),Object(w.jsxs)("h3",{children:["PRICE:",e.price]})]})})})}):null,3===d?Object(w.jsx)("div",{children:Object(w.jsx)(C.b,{to:"/",children:Object(w.jsx)("button",{style:{marginLeft:"35%",marginTop:"10px",marginBottom:"20%"},className:"btn btn-lg btn-warning",type:"submit",onClick:function(){return alert("Thanks for booking!!!!")},children:"Place Order"})})}):null]}),Object(w.jsx)("div",{children:3===d?null:Object(w.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return j(d+1)},children:"Next"})})]})})})}function ge(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),d=i[0],j=i[1],b=function(e){j(e)},h=function(){c(!0)};return console.log(d),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(E.a,{children:[Object(w.jsx)(J,{logoutHandler:function(){c(!1)},auth:a}),Object(w.jsxs)(l.d,{children:[Object(w.jsx)(l.b,{exact:!0,path:"/",component:ue}),Object(w.jsx)(l.b,{path:"/cars",component:L}),Object(w.jsx)(l.b,{path:"/product/:id",render:function(e){return Object(w.jsx)(k,Object(s.a)(Object(s.a)({},e),{},{getPrice:b}))}}),Object(w.jsx)(l.b,{path:"/signup",component:he}),Object(w.jsx)(l.b,{path:"/signin",render:function(e){return Object(w.jsx)(de,Object(s.a)(Object(s.a)({},e),{},{loginHandler:h}))}}),Object(w.jsx)(l.b,{path:"/mahindra",component:R}),Object(w.jsx)(l.b,{path:"/ford",component:M}),Object(w.jsx)(l.b,{path:"/maruthi",component:pe}),!0===a?Object(w.jsx)(l.b,{path:"/checkout",render:function(e){return Object(w.jsx)(Oe,Object(s.a)(Object(s.a)({},e),{},{price:d}))}}):Object(w.jsx)(l.a,{to:"/signin"}),Object(w.jsx)(l.b,{render:function(){return Object(w.jsx)(fe,{})}})]}),Object(w.jsx)($,{})]})})}function fe(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("img",{src:"https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg",alt:"not found"})})}var ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,193)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(C.a,{children:Object(w.jsx)(ge,{})})}),document.getElementById("root")),ve()}},[[142,1,2]]]);
//# sourceMappingURL=main.99879fb1.chunk.js.map