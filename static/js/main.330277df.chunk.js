(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[0],{119:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),i=a.n(r),s=(a(119),a(12)),o=a(48),l=a.n(o),d=a(56),j=a(38),b=a(14),u=a(57),h=a.n(u),p=a(175),m=a(177),x=a(96),O=a(179),g=a(180),f=a(149),v=a(181),y=a(182),N=a(9),C="GETPRODUCTSLIST",w="GETPRODUCTDETAIL",k="MAHINDRA",D="MARUTHI",L="FORD",S="ALLCARS",R=function(e){return function(t){return t({type:C,payload:e})}},T=function(e){return function(t){return t({type:w,payload:e})}},A=function(e){return function(t){return t({type:k,payload:e})}},F=function(e){return function(t){return t({type:D,payload:e})}},P=function(e){return function(t){return t({type:L,payload:e})}},I=function(e){return function(t){return t({type:S,payload:e})}},E=a(21),M=a(25),B=a(1),W=Object(p.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%"},cardMedia:{paddingTop:e.spacing(25),paddingBottom:e.spacing(10),marginTop:e.spacing(8),marginLeft:e.spacing(15),marginRight:e.spacing(15),height:e.spacing(70)},cardcontent:{width:"50%",marginTop:e.spacing(2),marginLeft:e.spacing(10)},button:{justifyContent:"center",alignItems:"center"},typography:{}}})),G=function(e){var t=W(),a=Object(E.c)((function(e){return e.productsReducer})),n=Object(E.b)(),r=Object(M.bindActionCreators)({dispatchProductDetail:T},n),i=Object(c.useCallback)(Object(d.a)(l.a.mark((function t(){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://api.jsonbin.io/b/6123b6e9076a223676affd99");case 2:a=t.sent,c=a.data.find((function(t){return t.id===parseInt(e.match.params.id)})),console.log(c),r.dispatchProductDetail(c);case 6:case"end":return t.stop()}}),t)}))),[e.match.params.id]);return Object(c.useEffect)((function(){return i(),function(){console.log("cleaned up")}}),[i]),Object(B.jsx)("div",{children:a.isProductDetailLoading?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("center",{children:Object(B.jsx)("b",{children:Object(B.jsx)("h3",{children:"Loading"})})})," "]}):Object(B.jsx)("div",{children:Object(B.jsxs)(m.a,{className:t.card,children:[Object(B.jsx)(x.a,{elevation:3,children:Object(B.jsx)(O.a,{className:t.cardMedia,image:a.productDetail.img,title:"Image title"})}),Object(B.jsxs)(g.a,{className:t.cardcontent,children:[Object(B.jsx)(f.a,{variant:"h3",style:{marginBottom:"10px"},children:"CAR DETAILS:"}),Object(B.jsxs)(f.a,{variant:"h6",children:["Model: ",a.productDetail.Model]}),Object(B.jsxs)(f.a,{variant:"h6",children:["Price: ",a.productDetail.price,"RS"]}),Object(B.jsxs)(f.a,{variant:"h6",children:["Year of purchase:  ",a.productDetail.year]}),Object(B.jsxs)(f.a,{variant:"h6",children:["Fuel Type: ",a.productDetail.FuelType]}),Object(B.jsxs)(f.a,{variant:"h6",children:["Kilometers Driven: ",a.productDetail.KMs,"Km"]})]}),Object(B.jsx)(v.a,{className:t.button,children:Object(B.jsx)(N.b,{to:"/Checkout",style:{textDecoration:"none"},children:Object(B.jsx)(y.a,{size:"large",variant:"contained",color:"secondary",children:"Buy Now"})})})]})})})},H=a(183),U=Object(p.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},content:{textAlign:"center"},cardaction:{textAlign:"center",justifyContent:"center"}}})),q=function(e){var t=U(),a=e.product;return Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,md:4,children:Object(B.jsx)(N.b,{to:"/product/".concat(a.id),style:{textDecoration:"none"},children:Object(B.jsxs)(m.a,{className:t.card,children:[Object(B.jsx)(O.a,{className:t.cardMedia,image:a.img,title:"Image title"}),Object(B.jsx)(g.a,{className:t.content,children:Object(B.jsx)(f.a,{variant:"h6",children:a.Model})}),Object(B.jsx)(v.a,{className:t.cardaction,children:Object(B.jsx)(y.a,{style:{backgroundColor:"Background"},children:"View"})})]})})})},z=a(184),Y=Object(p.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8),marginTop:e.spacing(2),backgroundColor:"#C2FFD9"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"}}})),V=function(){var e=Y(),t=Object(E.c)((function(e){return e.productsReducer}));return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(z.a,{className:e.cardGrid,maxWidth:"lg",children:Object(B.jsx)(H.a,{container:!0,spacing:5,children:t.isProductsLoading?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("center",{children:Object(B.jsx)("b",{children:Object(B.jsx)("h3",{children:"Loading"})})})," "]}):t.cars.map((function(e){return Object(B.jsx)(q,{product:e},e.id)}))})})})},K=a(32),J=a(17),Q=a(185),Z=a(186),_=a(187),X=a(87),$=a.n(X),ee=a(88),te=a.n(ee),ae=a(193),ce=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(3)},title:{flexGrow:1,color:"blue",width:e.spacing(25)},header:{backgroundColor:"#CDF0EA",marginTop:e.spacing(2)},button:{color:"blue",marginLeft:e.spacing(30),padding:e.spacing(3),textAlign:"center",justifyContent:"flex-end"},search:Object(K.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(J.a)(e.palette.common.white,.25),"&:hover":{backgroundColor:Object(J.a)(e.palette.common.white,.35)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(25),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"blue"},inputRoot:{color:"blue"},inputInput:Object(K.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(3),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("lg"),{width:"200px","&:focus":{width:"200px"}})}}));function ne(e){var t=ce();return Object(B.jsx)("div",{className:t.root,children:Object(B.jsx)(Q.a,{position:"static",className:t.header,children:Object(B.jsxs)(Z.a,{justifyContent:"center",alignItems:"center",children:[Object(B.jsx)(_.a,{edge:"start",className:t.menuButton,children:Object(B.jsx)($.a,{fontSize:"large"})}),Object(B.jsx)(N.b,{to:"/",style:{textDecoration:"none"},children:Object(B.jsx)(f.a,{variant:"h5",className:t.title,children:"Cars"})}),Object(B.jsxs)("div",{className:t.search,children:[Object(B.jsx)("div",{className:t.searchIcon,children:Object(B.jsx)(te.a,{})}),Object(B.jsx)(ae.a,{placeholder:"Find your dream car....",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),e.auth?Object(B.jsx)(y.a,{onClick:function(){return e.logoutHandler()},className:t.button,children:" LOGOUT "}):Object(B.jsx)(N.b,{to:"/signin",style:{textDecoration:"none"},children:Object(B.jsx)(y.a,{className:t.button,children:" Login / SingUp"})})]})})})}var re=a(89),ie=a(90),se=a(94),oe=a(93),le=function(e){Object(se.a)(a,e);var t=Object(oe.a)(a);function a(){return Object(re.a)(this,a),t.apply(this,arguments)}return Object(ie.a)(a,[{key:"render",value:function(){return Object(B.jsx)("div",{children:Object(B.jsx)("div",{className:"row",style:{fontSize:"18px",marginTop:"20px",height:"80px",backgroundColor:"#6E85B2"},children:Object(B.jsx)("div",{className:"col",children:Object(B.jsxs)("ul",{className:"nav justify-content-center mt-4",children:[Object(B.jsx)("li",{className:"nav-item ",style:{color:"white",marginLeft:"3%",marginRight:"3%"},children:Object(B.jsx)(N.b,{to:"#",className:"text-light",children:Object(B.jsx)(f.a,{variant:"h6",children:"Terms"})})}),Object(B.jsx)("li",{className:"nav-item",style:{color:"white",marginLeft:"3%",marginRight:"3%"},children:Object(B.jsx)(N.b,{to:"#",className:"text-light",children:Object(B.jsx)(f.a,{variant:"h6",children:"Privacy"})})}),Object(B.jsx)("li",{className:"nav-item",style:{color:"white",marginLeft:"3%",marginRight:"3%"},children:Object(B.jsx)("a",{href:"https://github.com/gorla1/Product2/tree/gh-pages",className:"text-light",children:Object(B.jsx)(f.a,{variant:"h6",children:"G.DINESH"})})})]})})})})}}]),a}(n.a.Component),de=a(194),je=a(188),be=a(190),ue=a(189),he=a(192),pe=a(191),me=a(61),xe=a.n(me);function Oe(){return Object(B.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(N.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ge=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function fe(e){var t=ge(),a=Object(c.useState)({email:"gorladineshyadav1@gmail.com",password:9440544350}),n=Object(j.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)({email:"",password:""}),l=Object(j.a)(o,2),d=l[0],b=l[1],u=function(e){i(Object(s.a)(Object(s.a)({},r),{},Object(K.a)({},e.target.name,e.target.value)))};return Object(B.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(B.jsx)(je.a,{}),Object(B.jsxs)("div",{className:t.paper,children:[Object(B.jsx)(de.a,{className:t.avatar,children:Object(B.jsx)(xe.a,{})}),Object(B.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),"gorladineshyadav1@gmail.com"===r.email&&9440544350===r.password?(e.loginHandler(),console.log(e),e.history.push("/Checkout"),console.log(d)):b({email:"you have entered wrong email",password:"either email or password is incorrect"})},className:t.form,noValidate:!0,children:[Object(B.jsx)(be.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:r.email,autoComplete:"email",autoFocus:!0,onChange:function(e){return u(e)}}),Object(B.jsx)(be.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:r.password,label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return u(e)}}),Object(B.jsx)(ue.a,{control:Object(B.jsx)(he.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(B.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(B.jsxs)(H.a,{container:!0,children:[Object(B.jsx)(H.a,{item:!0,xs:!0,children:Object(B.jsx)(N.b,{variant:"body2",children:"Forgot password?"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(N.b,{to:"/SignUp",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(B.jsx)(pe.a,{mt:8,children:Object(B.jsx)(Oe,{})})]})}function ve(){return Object(B.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(B.jsx)(N.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ye=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Ne(){var e=ye();return Object(B.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(B.jsx)(je.a,{}),Object(B.jsxs)("div",{className:e.paper,children:[Object(B.jsx)(de.a,{className:e.avatar,children:Object(B.jsx)(xe.a,{})}),Object(B.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(B.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(B.jsxs)(H.a,{container:!0,spacing:2,children:[Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(be.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(B.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(be.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})}),Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(ue.a,{control:Object(B.jsx)(he.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(B.jsx)(N.b,{to:"/Checkout",children:Object(B.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"})}),Object(B.jsx)(H.a,{container:!0,justifyContent:"flex-end",children:Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(N.b,{to:"/SignIn",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(B.jsx)(pe.a,{mt:5,children:Object(B.jsx)(ve,{})})]})}var Ce=Object(p.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#F9F9F9",height:"auto"},paper:{padding:e.spacing(3),textAlign:"center",color:e.palette.text.secondary},card:{height:e.spacing(65)},media:{height:"70%"}}}));function we(){var e=Object(E.b)(),t=Object(M.bindActionCreators)({dispatchMahindra:A,dispatchMaruthi:F,dispatchFord:P,allCars:I},e),a=Ce();return Object(B.jsx)("div",{className:a.root,children:Object(B.jsx)(z.a,{children:Object(B.jsx)(H.a,{container:!0,spacing:3,children:Object(B.jsx)(H.a,{item:!0,xs:12,children:Object(B.jsx)(x.a,{className:a.paper,children:Object(B.jsxs)(m.a,{className:a.card,children:[Object(B.jsx)(O.a,{className:a.media,image:"https://i.ibb.co/3NRdQSV/new-car-hd-wallpapers1589891906.jpg",title:"Collection Of Cars"}),Object(B.jsxs)(g.a,{children:[Object(B.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"A WHOLE NEW WORLD OF CARS"}),Object(B.jsx)(N.b,{to:"/cars",style:{textDecoration:"none"},children:Object(B.jsx)(y.a,{style:{backgroundColor:"Background",margin:"30px"},onClick:function(){t.allCars()},children:"ALL CARS"})}),Object(B.jsx)(N.b,{to:"/cars",style:{textDecoration:"none"},children:Object(B.jsx)(y.a,{style:{backgroundColor:"Background",margin:"30px"},onClick:function(){t.dispatchMahindra()},children:"MAHINDRA"})}),Object(B.jsx)(N.b,{to:"/cars",style:{textDecoration:"none"},children:Object(B.jsx)(y.a,{style:{backgroundColor:"Background",margin:"30px"},onClick:function(){t.dispatchMaruthi()},children:"MARUTHI"})}),Object(B.jsx)(N.b,{to:"/cars",style:{textDecoration:"none"},children:Object(B.jsx)(y.a,{style:{backgroundColor:"Background",margin:"30px"},onClick:function(){t.dispatchFord()},children:"FORD"})})]})]})})})})})})}function ke(e){var t=Object(E.c)((function(e){return e.productsReducer})),a=Object(c.useState)({firstname:"",lastname:"",address1:"",address2:"",city:"",state:"",zip:"",country:"",nameoncard:"",cardnumber:"",expirydate:"",cvv:""}),n=Object(j.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(1),l=Object(j.a)(o,2),d=l[0],b=l[1],u=function(e){i(Object(s.a)(Object(s.a)({},r),{},Object(K.a)({},e.target.name,e.target.value)))};return Object(B.jsx)("div",{className:"container",children:Object(B.jsx)("div",{className:"row",children:Object(B.jsxs)("div",{className:"col-8 m-auto",children:[Object(B.jsxs)("form",{children:[Object(B.jsx)("h2",{className:"text-center",children:"Checkout"}),Object(B.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(B.jsx)("span",{children:"Shipping address"}),Object(B.jsx)("span",{children:"Payment details"}),Object(B.jsx)("span",{children:"Review your order"})]}),1===d?Object(B.jsx)("div",{className:"border table-borderless",children:Object(B.jsx)("table",{className:"table table-borderless",children:Object(B.jsxs)("tbody",{children:[Object(B.jsx)("tr",{children:Object(B.jsx)("td",{colSpan:"2",children:Object(B.jsx)("h4",{children:"Shipping address"})})}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.firstname,name:"firstname",className:"form-control",placeholder:"First name*",onChange:u})}),Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.lastname,name:"lastname",className:"form-control",placeholder:"Last name*",onChange:u})})]}),Object(B.jsx)("tr",{children:Object(B.jsx)("td",{colSpan:"2",children:Object(B.jsx)("input",{type:"text",value:r.address1,name:"address1",className:"form-control",placeholder:"Address line 1*",onChange:u})})}),Object(B.jsx)("tr",{children:Object(B.jsx)("td",{colSpan:"2",children:Object(B.jsx)("input",{type:"text",value:r.address2,name:"address2",className:"form-control",placeholder:"Address line 2",onChange:u})})}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.city,name:"city",className:"form-control",placeholder:"City *",onChange:u})}),Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.state,name:"state",className:"form-control",placeholder:"State/Province*",onChange:u})})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.zip,name:"zip",className:"form-control",placeholder:"Zip / Postal code*",onChange:u})}),Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.country,name:"country",className:"form-control",placeholder:"Country*",onChange:u})})]}),Object(B.jsx)("tr",{children:Object(B.jsxs)("td",{colSpan:"2",children:[Object(B.jsx)("input",{type:"checkbox",name:"checked"})," Use this address for payment details"]})})]})})}):null,2===d?Object(B.jsx)("div",{className:"border table-borderless",children:Object(B.jsx)("table",{className:"table table-borderless",children:Object(B.jsxs)("tbody",{children:[Object(B.jsx)("tr",{children:Object(B.jsx)("td",{colSpan:"2",children:Object(B.jsx)("h4",{children:"Payment Method"})})}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.nameoncard,name:"nameoncard",className:"form-control",placeholder:"name on card*",onChange:u})}),Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.cardnumber,name:"cardnumber",className:"form-control",placeholder:"card number*",onChange:u})})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.expirydate,name:"expirydate",className:"form-control",placeholder:"expiry date*",onChange:u})}),Object(B.jsx)("td",{children:Object(B.jsx)("input",{type:"text",value:r.cvv,name:"cvv",className:"form-control",placeholder:"cvv*",onChange:u})})]}),Object(B.jsx)("tr",{children:Object(B.jsxs)("td",{colSpan:"2",children:[Object(B.jsx)("input",{type:"checkbox",name:"checked"})," Remember credit card details for next time"]})})]})})}):null,3===d?Object(B.jsx)("div",{className:"border table-borderless",children:Object(B.jsx)("div",{children:Object(B.jsx)("div",{className:"row",children:Object(B.jsxs)("div",{className:"col-9 m-auto",children:[Object(B.jsx)("h4",{style:{textAlign:"center",padding:"10px",margin:"10px"},children:"Order Summary"}),Object(B.jsx)("h3",{children:"YOUR REGESTIRATION HAS BEEN COMPLETED!"}),Object(B.jsx)("h6",{children:"we will reach you back soon!!!!"}),Object(B.jsxs)("h3",{children:["PRICE:",t.productDetail.price]})]})})})}):null,3===d?Object(B.jsx)("div",{children:Object(B.jsx)(N.b,{to:"/",children:Object(B.jsx)("button",{style:{marginLeft:"35%",marginTop:"10px",marginBottom:"20%"},className:"btn btn-lg btn-warning",type:"submit",onClick:function(){return alert("Thanks for booking!!!!")},children:"Place Order"})})}):null]}),Object(B.jsx)("div",{children:3===d?null:Object(B.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return b(d+1)},children:"Next"})})]})})})}function De(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],r=function(){n(!0)},i=Object(c.useCallback)(Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.jsonbin.io/b/6123b6e9076a223676affd99");case 2:t=e.sent,u.dispatchProductList(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);Object(c.useEffect)((function(){i()}),[i]);var o=Object(E.b)(),u=Object(M.bindActionCreators)({dispatchProductList:R},o);return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(z.a,{children:[Object(B.jsx)(ne,{logoutHandler:function(){n(!1)},auth:a}),Object(B.jsxs)(b.d,{children:[Object(B.jsx)(b.b,{exact:!0,path:"/",component:we}),Object(B.jsx)(b.b,{path:"/cars",component:V}),Object(B.jsx)(b.b,{path:"/product/:id",component:G}),Object(B.jsx)(b.b,{path:"/signup",component:Ne}),Object(B.jsx)(b.b,{path:"/signin",render:function(e){return Object(B.jsx)(fe,Object(s.a)(Object(s.a)({},e),{},{loginHandler:r}))}}),!0===a?Object(B.jsx)(b.b,{path:"/checkout",component:ke}):Object(B.jsx)(b.a,{to:"/signin"}),Object(B.jsx)(b.b,{render:function(){return Object(B.jsx)(Le,{})}})]}),Object(B.jsx)(le,{})]})})}function Le(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("img",{src:"https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg",alt:"not found"})})}var Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))},Re=a(91),Te=a(92),Ae={productsList:[],productDetail:{},cars:[],isProductsLoading:!0,isProductDetailLoading:!0},Fe=Object(M.combineReducers)({productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(s.a)(Object(s.a)({},e),{},{productsList:t.payload,isProductsLoading:!1});case S:return Object(s.a)(Object(s.a)({},e),{},{cars:e.productsList,isProductsLoading:!1});case k:return Object(s.a)(Object(s.a)({},e),{},{cars:e.productsList.filter((function(e){return"Mahindra"===e.Brand})),isProductsLoading:!1});case D:return Object(s.a)(Object(s.a)({},e),{},{cars:e.productsList.filter((function(e){return"Maruthi"===e.Brand})),isProductsLoading:!1});case L:return Object(s.a)(Object(s.a)({},e),{},{cars:e.productsList.filter((function(e){return"Ford"===e.Brand})),isProductsLoading:!1});case w:return Object(s.a)(Object(s.a)({},e),{},{productDetail:t.payload,isProductDetailLoading:!1});default:return Object(s.a)({},e)}}}),Pe=Object(M.createStore)(Fe,{},Object(Re.composeWithDevTools)(Object(M.applyMiddleware)(Te.a)));i.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(E.a,{store:Pe,children:Object(B.jsx)(N.a,{children:Object(B.jsx)(De,{})})})}),document.getElementById("root")),Se()}},[[146,1,2]]]);
//# sourceMappingURL=main.330277df.chunk.js.map