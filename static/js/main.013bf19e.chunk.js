(this["webpackJsonptranslate-admin"]=this["webpackJsonptranslate-admin"]||[]).push([[0],{42:function(e,t,a){e.exports=a(73)},47:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),i=a.n(l),o=(a(47),a(48),a(49),a(20)),s=a(12),c=a(13),d=a(15),u=a(14),m=a(16),b=a(3),p=a(8),h=a(11),f=a.n(h),v=a(2),E=a.n(v);function g(e){return{type:"FETCH_NAV_SUCCESS",rolesData:e}}function D(e){return{type:"CHANGE_ROLE_SUCCESS",rolesData:e}}function y(e){return{type:"CHOICE_ROLE_SUCCESS",rolesData:e}}var S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).choiceRoleHandler=function(e){var t=e.target.getAttribute("data-role-choice");a.props.choiceRole(t)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{style:{marginTop:120}},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f (\u0434\u044d\u043c\u043e)"),r.a.createElement(b.b,{to:"/main-table",onClick:this.choiceRoleHandler,"data-role-choice":"moderator",type:"button",className:"btn btn-primary mt-5 d-block w-25 mx-auto"},r.a.createElement("i",{className:"fas fa-sign-in-alt mr-1"})," \u0412\u043e\u0439\u0442\u0438 \u043a\u0430\u043a \u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440"),r.a.createElement(b.b,{to:"/main-table",onClick:this.choiceRoleHandler,"data-role-choice":"editor",type:"button",className:"btn btn-primary mt-4 d-block w-25 mx-auto"},r.a.createElement("i",{className:"fas fa-sign-in-alt mr-1"})," \u0412\u043e\u0439\u0442\u0438 \u043a\u0430\u043a \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440"))}}]),t}(r.a.Component);var w=Object(p.b)((function(e){return{roles:e.auth.rolesData}}),(function(e){return{choiceRole:function(t){return e(function(e){return function(t){var a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:a={moderator:!1,editor:!1},"moderator"===e?(a.moderator=!0,a.editor=!1):"editor"===e&&(a.moderator=!1,a.editor=!0),E.a.put("https://translate-admin-add74.firebaseio.com/rolesData.json",a).then((function(e){var a=e.data;t(y(a))})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}))}}(t))}}}))(S);var T=function(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light mb-5"},r.a.createElement("div",{className:"container"},r.a.createElement(b.b,{to:"/main-table",className:"navbar-brand mb-0 h1 text-primary"},"Translate-admin"),e.isHideRole?null:r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-outline-primary btn-sm dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-user mr-2"})," \u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0440\u043e\u043b\u044c: ",e.currentRole),r.a.createElement("div",{className:"dropdown-menu w-100","aria-labelledby":"dropdownMenuButton"},r.a.createElement("button",{className:"dropdown-item ".concat(e.moderatorActive),onClick:e.changeRole,"data-role":"moderator"},"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440"),r.a.createElement("button",{className:"dropdown-item ".concat(e.editorActive),onClick:e.changeRole,"data-role":"editor"},"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440")))))},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeRoleHandler=function(e){var t=e.target.getAttribute("data-role");a.props.changeRole(t)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchNav()}},{key:"render",value:function(){return r.a.createElement(T,{currentRole:this.props.roles.moderator?"\u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440":"\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440",moderatorActive:this.props.roles.moderator?"active":"",editorActive:this.props.roles.editor?"active":"",changeRole:this.changeRoleHandler,isHideRole:this.props.isHideRole})}}]),t}(r.a.Component);var N=Object(p.b)((function(e){return{roles:e.auth.rolesData}}),(function(e){return{changeRole:function(t){return e(function(e){return function(t){var a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:a={moderator:!1,editor:!1},"moderator"===e?(a.moderator=!0,a.editor=!1):"editor"===e&&(a.moderator=!1,a.editor=!0),E.a.put("https://translate-admin-add74.firebaseio.com/rolesData.json",a).then((function(){return E.a.get("https://translate-admin-add74.firebaseio.com/rolesData.json")})).then((function(e){var a=e.data;t(D(a))})).catch((function(e){console.log(e)}));case 3:case"end":return n.stop()}}))}}(t))},fetchNav:function(){return e((function(e){return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:E.a.get("https://translate-admin-add74.firebaseio.com/rolesData.json").then((function(t){var a=t.data;e(g(a))})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}))}))}}}))(O);var C=function(e){return r.a.createElement("table",{className:"table table-striped mb-5"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{className:"align-middle",scope:"col"},"\u041a\u043b\u044e\u0447"),r.a.createElement("th",{className:"align-middle",scope:"col"},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434"),r.a.createElement("th",{className:"align-middle",scope:"col"},"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434"),r.a.createElement("th",{className:"align-middle",scope:"col"},"\u0421\u0442\u0430\u0442\u0443\u0441"),r.a.createElement("th",{className:"align-middle",scope:"col"},"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"),r.a.createElement("th",{className:"align-middle",scope:"col"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"))),r.a.createElement("tbody",null,e.tableRows))};var _=function(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:"align-middle"},e.translateKey),r.a.createElement("td",{className:"align-middle"},e.translateRu),r.a.createElement("td",{className:"align-middle"},e.translateEng),r.a.createElement("td",{className:"align-middle"},e.isTranslateDone?r.a.createElement("span",{className:"badge badge-pill badge-success"},"\u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043e"):r.a.createElement("span",{className:"badge badge-pill badge-danger"},"\u041d\u0435 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043e")),r.a.createElement("td",{className:"align-middle date-row"},e.translateDate),r.a.createElement("td",{className:"align-middle"},r.a.createElement(b.b,{to:"/edit-translation/".concat(e.translateKey),type:"button",className:"btn btn-link btn-sm d-block",style:{textAlign:"left"},"data-target-key":e.translateKey,onClick:e.onClickEdit},r.a.createElement("i",{className:"far fa-edit"})," \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("button",{type:"button",className:"btn btn-link btn-sm d-block","data-target-key":e.translateKey,onClick:e.onClickDelete},r.a.createElement("i",{className:"far fa-trash-alt"})," \u0423\u0434\u0430\u043b\u0438\u0442\u044c")))};function A(e,t){return{type:"FETCH_TABLE_SUCCESS",translateTableData:e,translateTableDataKeys:t}}function k(e,t,a){return function(n){var r,l=e.getAttribute("data-target-key");t.forEach((function(e,t){return e.key===l&&(r=t),r}));var i=a[r];E.a.delete("https://translate-admin-add74.firebaseio.com/translateTableData/".concat(i,".json")).then((function(){return E.a.get("https://translate-admin-add74.firebaseio.com/translateTableData.json")})).then((function(e){var t=[],a=[];null!==e.data&&(t=Object.values(e.data),a=Object.keys(e.data)),n(function(e,t){return{type:"DELETE_TABLE_ITEM",translateTableData:e,translateTableDataKeys:t}}(t,a))})).catch((function(e){console.log(e)}))}}var j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).deleteHandler=function(e){var t=e.target,n=a.props.translateTableData,r=a.props.translateTableDataKeys;a.props.deleteFromTable(t,n,r)},a.renderRows=function(){return a.props.translateTableData.map((function(e,t){return r.a.createElement(_,{key:t,translateKey:e.key,translateRu:e.ru,translateEng:e.eng,translateDate:e.date,isTranslateDone:e.ru.length>0&&e.eng.length>0,onClickDelete:a.deleteHandler,onClickEdit:a.editHandler})}))},a.renderAddBtn=function(){if(!0===a.props.roles.moderator)return r.a.createElement(b.b,{to:"/add-translation",type:"button",className:"btn btn-success float-right"},r.a.createElement("i",{className:"fas fa-plus mr-1"})," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u043e\u0432\u043e")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTable(),document.querySelectorAll(".tooltip").forEach((function(e){return e.remove()}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"float-left mb-5"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043b\u043e\u0432 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"),this.renderAddBtn(),r.a.createElement(C,{tableRows:this.renderRows()}),0===this.props.translateTableData.length?r.a.createElement("h5",{className:"text-secondary"},"C\u043b\u043e\u0432\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"):null))}}]),t}(r.a.Component);var L=Object(p.b)((function(e){return{translateTableData:e.table.translateTableData,translateTableDataKeys:e.table.translateTableDataKeys,roles:e.auth.rolesData}}),(function(e){return{fetchTable:function(){return e((function(e){return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:E.a.get("https://translate-admin-add74.firebaseio.com/translateTableData.json").then((function(t){var a=Object.values(t.data),n=Object.keys(t.data);e(A(a,n))})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}))}))},deleteFromTable:function(t,a,n){return e(k(t,a,n))}}}))(j);var R=function(e){return r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:e.id},e.label),r.a.createElement("input",{type:"text",className:"form-control",id:e.id,placeholder:e.placeholder,value:e.value,onChange:e.onChange,readOnly:e.isDisabled,"data-toggle":"tooltip","data-placement":"top",title:e.titleTooltip,required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"))};function H(){var e=document.querySelector("#key");if(""!==e.value&&e.classList.remove("is-invalid"),!1===e.hasAttribute("readonly")){!/^[a-zA-Z0-9_]+$/.test(e.value)&&e.value.length>0?(e.classList.add("is-invalid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u043a\u043b\u044e\u0447\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430, \u0446\u0438\u0444\u0440\u044b \u0438 \u0437\u043d\u0430\u043a \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f"):0===e.value.length?(e.classList.add("is-invalid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"):(e.classList.add("is-valid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}}function x(){var e=document.querySelector("#translateRu");""!==e.value&&e.classList.remove("is-invalid");!/^[\u0430-\u044f\u0410-\u042f ]+$/.test(e.value)&&e.value.length>0&&e.value.trim().length>0?(e.classList.add("is-invalid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u044b"):0===e.value.length||0===e.value.trim().length?(e.classList.add("is-invalid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"):(e.classList.add("is-valid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}function I(){var e=document.querySelector("#translateEng");if(""!==e.value&&e.classList.remove("is-invalid"),!1===e.hasAttribute("readonly")){!/^[a-zA-Z ]+$/.test(e.value)&&e.value.length>0?(e.classList.add("is-invalid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u044b"):0===e.value.length?(e.classList.add("is-invalid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"):(e.classList.add("is-valid"),e.nextSibling.innerHTML="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}}var M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).renderInputs=function(){return a.props.inputsData.map((function(e,t){return r.a.createElement(R,{key:t,id:e.id,label:e.label,placeholder:e.placeholder,isDisabled:e.isDisabled,onChange:"key"===e.id?H:"translateRu"===e.id?x:null,titleTooltip:"translateEng"===e.id&&e.isDisabled?"\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440":null})}))},a.showAlert=function(){return r.a.createElement("div",{className:"alert alert-success position-absolute text-center",role:"alert",style:{left:0,right:0,marginLeft:"auto",marginRight:"auto",width:360}},"\u0421\u043b\u043e\u0432\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 ",r.a.createElement(b.b,{to:"/main-table",className:"alert-link"},"\u0442\u0430\u0431\u043b\u0438\u0446\u0443"))},a.checkSubmitHandler=function(e){e.preventDefault();var t=document.querySelector("#key"),n=document.querySelector("#translateRu");""===t.value&&t.classList.add("is-invalid"),""===n.value&&n.classList.add("is-invalid"),t.classList.contains("is-valid")&&n.classList.contains("is-valid")&&(a.props.addNewWord(),t.classList.remove("is-valid"),n.classList.remove("is-valid"))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$('[data-toggle="tooltip"]').tooltip()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{isHideRole:!0}),r.a.createElement("div",{className:"container"},!0===this.props.isShowAlert?this.showAlert():null,r.a.createElement("h3",{className:"mb-5"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430"),r.a.createElement("form",{className:"w-50 needs-validation",noValidate:!0},this.renderInputs(),r.a.createElement("button",{className:"btn btn-success",type:"submit",onClick:this.checkSubmitHandler},r.a.createElement("i",{className:"fas fa-plus mr-1"})," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u043e\u0432\u043e"))))}}]),t}(r.a.Component);var W=Object(p.b)((function(e){return{inputsData:e.add.inputsData,isShowAlert:e.add.isShowAlert}}),(function(e){return{addNewWord:function(){return e((function(e){var t,a,n,r,l;return f.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:n=function(e){return e<10&&(e="0"+e),e},t=document.querySelector("#key"),a=document.querySelector("#translateRu"),r=n((new Date).getHours())+":"+n((new Date).getMinutes())+":"+n((new Date).getSeconds())+" "+(new Date).getDate()+"/"+(new Date).getMonth()+"1/"+(new Date).getFullYear(),l={key:t.value,ru:a.value,eng:"",date:r,isDone:!1},E.a.post("https://translate-admin-add74.firebaseio.com/translateTableData.json",l).catch((function(e){console.log(e)})),t.value="",a.value="",e({type:"ADD_NEW_WORD_SUCCESS",isShowAlert:!0}),setTimeout((function(){return e({type:"ADD_NEW_WORD_ALERT_CLOSE",isShowAlert:!1})}),2500);case 10:case"end":return i.stop()}}))}))}}}))(M),U=a(4),q=a(41);function K(e){return{type:"FETCH_EDIT_INPUTS_DATA_SUCCESS",inputsEditData:e}}var F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).renderEditInputs=function(){return a.props.fetchEditInputsData(),a.props.inputsEditData.map((function(e,t){return r.a.createElement(R,{key:t,id:e.id,label:e.label,placeholder:e.placeholder,isDisabled:e.isDisabled,onChange:"key"===e.id?H:"translateRu"===e.id?x:"translateEng"===e.id?I:null})}))},a.renderEditInputsData=function(){var e=window.location.pathname.split("/")[2];E.a.get("https://translate-admin-add74.firebaseio.com/translateTableData.json").then((function(t){var a,n=Object.values(t.data);n.forEach((function(t,n){return t.key===e&&(a=n),a}));var r=document.querySelectorAll("input");r[0].value=n[a].key,r[1].value=n[a].ru,r[2].value=n[a].eng})).catch((function(e){console.log(e)}))},a.checkSubmitHandler=function(e){e.preventDefault();var t=document.querySelector("#key"),n=document.querySelector("#translateEng"),r=document.querySelector("#translateRu");""===r.value&&r.classList.add("is-invalid"),r.classList.contains("is-invalid")||n.classList.contains("is-invalid")||t.classList.contains("is-invalid")||(a.editWordHandler(),n.classList.remove("is-valid"),r.classList.remove("is-valid"),t.classList.remove("is-valid"))},a.editWordHandler=function(){var e=document.querySelectorAll("input"),t=e[1].value,n=e[2].value,r=e[0].value,l=window.location.pathname.split("/")[2];E.a.get("https://translate-admin-add74.firebaseio.com/translateTableData.json").then((function(e){var i,o=Object.values(e.data),s=Object.keys(e.data);o.forEach((function(e,t){return e.key===l&&(i=t),i}));var c=s[i],d=Object(U.a)({},o[i],{key:r,eng:n,ru:t});a.props.editWord(d,c)})).catch((function(e){console.log(e)}))},a.showAlert=function(){return r.a.createElement("div",{className:"alert alert-success position-absolute text-center",role:"alert",style:{left:0,right:0,marginLeft:"auto",marginRight:"auto",width:360}},"\u0421\u043b\u043e\u0432\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e",r.a.createElement(b.b,{to:"/main-table",className:"alert-link"}," \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432"))},a.tooltipContent=function(){var e,t=document.querySelectorAll("input");e=!0===a.props.roles.editor?"\u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440":"\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440",t.forEach((function(t){!0===t.hasAttribute("readonly")?t.setAttribute("data-original-title","\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442 ".concat(e)):t.removeAttribute("data-original-title")})),window.$("[readonly]").tooltip({trigger:"hover"})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.renderEditInputsData()}},{key:"componentDidUpdate",value:function(){this.tooltipContent()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"container"},!0===this.props.isShowAlert?this.showAlert():null,r.a.createElement("h3",{className:"mb-5"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430"),r.a.createElement("form",{className:"w-50 needs-validation",noValidate:!0},this.renderEditInputs(),r.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:this.checkSubmitHandler},r.a.createElement("i",{className:"fas fa-save mr-1"})," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"))))}}]),t}(r.a.Component);var B=Object(p.b)((function(e){return{inputsEditData:e.edit.inputsEditData,isShowAlert:e.edit.isShowAlert,roles:e.auth.rolesData}}),(function(e){return{editWord:function(t,a){return e(function(e,t){return function(a){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:E.a.put("https://translate-admin-add74.firebaseio.com/translateTableData/".concat(t,".json"),e).catch((function(e){console.log(e)})),a({type:"EDIT_WORD_SUCCESS",isShowAlert:!0}),setTimeout((function(){return a({type:"EDIT_WORD_ALERT_CLOSE",isShowAlert:!1})}),2500);case 3:case"end":return n.stop()}}))}}(t,a))},fetchEditInputsData:function(){return e((function(e,t){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:E.a.get("https://translate-admin-add74.firebaseio.com/rolesData.json").then((function(a){var n=Object(q.a)(t().edit.inputsEditData);!0===a.data.editor?(n[0].isDisabled=!0,n[1].isDisabled=!1,n[2].isDisabled=!1):!0===a.data.moderator&&(n[0].isDisabled=!1,n[1].isDisabled=!1,n[2].isDisabled=!0),e(K(n))})).catch((function(e){console.log(e)}));case 1:case"end":return a.stop()}}))}))}}}))(F);var V=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/main-table",component:L}),r.a.createElement(o.a,{path:"/add-translation",component:W}),r.a.createElement(o.a,{path:"/edit-translation/:translateKey",component:B}),r.a.createElement(o.a,{path:"/",component:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(19),P=a(40),X={translateTableData:[],translateTableDataKeys:[]};var z={inputsData:[{id:"key",label:"\u041a\u043b\u044e\u0447",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447",isDisabled:!1},{id:"translateRu",label:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c",isDisabled:!1},{id:"translateEng",label:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c",isDisabled:!0}],isShowAlert:!1};var G={inputsEditData:[{id:"key",label:"\u041a\u043b\u044e\u0447",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447",isDisabled:!0},{id:"translateRu",label:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c",isDisabled:!1},{id:"translateEng",label:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c",isDisabled:!1}],isShowAlert:!1};var J={rolesData:{}};var Z=Object($.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHOICE_ROLE_SUCCESS":case"FETCH_NAV_SUCCESS":case"CHANGE_ROLE_SUCCESS":return Object(U.a)({},e,{rolesData:t.rolesData});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TABLE_SUCCESS":case"DELETE_TABLE_ITEM":return Object(U.a)({},e,{translateTableData:t.translateTableData,translateTableDataKeys:t.translateTableDataKeys});default:return e}},add:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_WORD_SUCCESS":case"ADD_NEW_WORD_ALERT_CLOSE":return Object(U.a)({},e,{isShowAlert:t.isShowAlert});default:return e}},edit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EDIT_INPUTS_DATA_SUCCESS":return Object(U.a)({},e,{inputsEditData:t.inputsEditData});case"EDIT_WORD_SUCCESS":case"EDIT_WORD_ALERT_CLOSE":return Object(U.a)({},e,{isShowAlert:t.isShowAlert});default:return e}}}),Y="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):$.d,Q=Object($.e)(Z,Y(Object($.a)(P.a))),ee=r.a.createElement(p.a,{store:Q},r.a.createElement(b.a,null,r.a.createElement(V,null)));i.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.013bf19e.chunk.js.map