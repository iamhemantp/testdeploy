"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[64658],{64658:(Z,p,t)=>{t.r(p),t.d(p,{ForgotPasswordModule:()=>O});var e=t(81180),m=t(8387),f=t(40031),g=t(12236),_=t(47530),b=t(41840),u=t(44328),h=t(64716),o=t(99468),x=t(45522),a=t(56223),v=t(45513),P=t(32925),M=t(42152),y=t(3291);const C=[{path:"",component:(()=>{var i;class n extends b.c{constructor(r,l,s,d){super(r),(0,e.Z)(this,"_accountService",void 0),(0,e.Z)(this,"_appUrlService",void 0),(0,e.Z)(this,"_router",void 0),(0,e.Z)(this,"model",new u.J1R),(0,e.Z)(this,"saving",!1),this._accountService=l,this._appUrlService=s,this._router=d}save(){this.saving=!0,this._accountService.sendPasswordResetCode(this.model).pipe((0,h.x)(()=>{this.saving=!1})).subscribe(()=>{this.message.success(this.l("PasswordResetMailSentMessage"),this.l("MailSent")).then(()=>{this._router.navigate(["account/login"])})})}}return i=n,(0,e.Z)(n,"\u0275fac",function(r){return new(r||i)(o.Y36(o.zs3),o.Y36(u.k4Y),o.Y36(x.F),o.Y36(g.F0))}),(0,e.Z)(n,"\u0275cmp",o.Xpm({type:i,selectors:[["ng-component"]],features:[o.qOj],decls:36,vars:25,consts:[[1,"layout-public-page"],[1,"layout-public-page__header"],[1,"layout-public-page__header--logo"],["routerLink","/account"],["src","../../assets/common/images/new-logo.svg","alt","Company Quote Logo"],[1,"layout-public-page__header--title"],[1,"layout-public-page__header--description"],[1,"layout-public-page__body"],[1,"layout-public-page__body-wrap"],[1,"layout-public-page__body--info"],[1,"layout-public-page__form"],["method","post","novalidate","novalidate","id","kt_reset_form","action","#",1,"m-form--plain","m-form",3,"ngSubmit"],["forgotPassForm","ngForm"],[1,"m-form__fields"],[1,"m-form__field"],["autoFocus","","type","text","autocomplete","new-password","name","emailAddress","required","","maxlength","256","email","",1,"form-control","form-control-solid","h-auto","py-4","px-6","rounded-lg","fs-h6",3,"ngModel","placeholder","ngModelChange"],["emailAddressInput","ngModel"],[3,"formCtrl"],[1,"m-form__field","layout-public-page__form--action"],["type","submit",1,"layout-public-page__button--main","m-button--full-width",3,"disabled","buttonBusy","busyText"],[1,"m-button__content","m-button__content--primary"],[1,"fa","fa-check"],["routerLink","/account/login",1,"layout-public-page__button--main","m-button--full-width",3,"disabled"],[1,"m-button__content","m-button__content--outline"],[1,"fa","fa-arrow-left"]],template:function(r,l){if(1&r&&(o.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"a",3),o._UZ(4,"img",4),o.qZA()(),o.TgZ(5,"div",5),o._uU(6),o.ALo(7,"localize"),o.qZA(),o.TgZ(8,"div",6),o._uU(9),o.ALo(10,"localize"),o.qZA()(),o.TgZ(11,"div",7)(12,"div",8)(13,"div",9),o._uU(14),o.ALo(15,"localize"),o.qZA(),o.TgZ(16,"div",10)(17,"form",11,12),o.NdJ("ngSubmit",function(){return l.save()}),o.TgZ(19,"div",13)(20,"div",14)(21,"input",15,16),o.NdJ("ngModelChange",function(d){return l.model.emailAddress=d}),o.ALo(23,"localize"),o.qZA(),o._UZ(24,"validation-messages",17),o.qZA(),o.TgZ(25,"div",18)(26,"button",19)(27,"span",20),o._UZ(28,"i",21),o._uU(29),o.ALo(30,"localize"),o.qZA()(),o.TgZ(31,"button",22)(32,"span",23),o._UZ(33,"i",24),o._uU(34),o.ALo(35,"localize"),o.qZA()()()()()()()()()),2&r){const s=o.MAs(18),d=o.MAs(22);o.Q6J("@routerTransition",void 0),o.xp6(6),o.Oqu(o.lcZ(7,13,"ForgotPassword")),o.xp6(3),o.hij(" ",o.lcZ(10,15,"Enter your email to reset your password.")," "),o.xp6(5),o.hij(" ",o.lcZ(15,17,"SendPasswordResetLink_Information")," "),o.xp6(7),o.MGl("placeholder","",o.lcZ(23,19,"EmailAddress")," *"),o.Q6J("ngModel",l.model.emailAddress),o.xp6(3),o.Q6J("formCtrl",d),o.xp6(2),o.Q6J("disabled",!s.form.valid)("buttonBusy",l.saving)("busyText",l.l("SavingWithThreeDot")),o.xp6(3),o.hij(" ",o.lcZ(30,21,"Submit")," "),o.xp6(2),o.Q6J("disabled",l.saving),o.xp6(3),o.hij(" ",o.lcZ(35,23,"Back")," ")}},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.nD,a.on,a.On,a.F,g.rH,v.L,P.h,M.s,y.F],styles:['.layout-public-page-container-page__main[_ngcontent-%COMP%]{max-width:710px;width:100%;margin-block-start:25px;margin-inline:auto;box-shadow:-1px -1px 16px #0000000a,15px 29px 32.77px #0000000a,1px 1px 14.584px #0000000a;border-radius:23px;background:#fff}.layout-public-page[_ngcontent-%COMP%]{font-family:Roboto}.layout-public-page__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#000}.layout-public-page__header--title[_ngcontent-%COMP%]{font-size:33px;font-weight:600;color:#1c252c;text-align:center;margin-top:5px}.layout-public-page__header--logo[_ngcontent-%COMP%]{font-size:33px;font-weight:600;color:#1c252c;text-align:center}.layout-public-page__header--description[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#1c252c;text-align:center}.layout-public-page__body[_ngcontent-%COMP%]{margin-top:30px;display:grid;grid-template-columns:1fr;justify-items:center;color:#000}.layout-public-page__body-wrap[_ngcontent-%COMP%]{width:400px}.layout-public-page__body--info[_ngcontent-%COMP%]{font-size:15px;margin-bottom:15px;font-weight:400;line-height:18px;text-align:center;color:#1c252c}.layout-public-page__delimiter[_ngcontent-%COMP%]{width:100%;margin:30px auto}.layout-public-page__delimiter--line[_ngcontent-%COMP%]{display:flex;align-items:center}.layout-public-page__delimiter--line[_ngcontent-%COMP%]:before{content:"";display:flex;flex:1 1 auto;height:1px;background:#dcdcdc}.layout-public-page__delimiter--line[_ngcontent-%COMP%]:after{content:"";display:flex;flex:1 1 auto;height:1px;background:#dcdcdc}.layout-public-page__divider[_ngcontent-%COMP%]{margin:0 10px}.layout-public-page-providers[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.layout-public-page__termspolicies[_ngcontent-%COMP%]{margin-top:52px}.layout-public-page__extra[_ngcontent-%COMP%]{font-size:14px;line-height:18px;font-weight:400;text-align:center;margin-top:30px}.layout-public-page__extra--link[_ngcontent-%COMP%]{color:#326bf6;font-weight:500}button[_ngcontent-%COMP%]{margin:0;padding:0;border:0}.m-form__section--no-padding[_ngcontent-%COMP%], .m-form__section--no-border[_ngcontent-%COMP%]{padding:0}.m-form__fields[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr);gap:12px}.m-form__fields--gap-m[_ngcontent-%COMP%]{gap:20px}.m-form--plain[_ngcontent-%COMP%]{border-radius:0;background:transparent;box-shadow:none}.m-form__label[_ngcontent-%COMP%]{font-weight:500;font-size:16px;line-height:1.28;color:#000000a3;margin-bottom:5px}.m-form__label-m[_ngcontent-%COMP%]{font-size:13px}.m-form__label-l[_ngcontent-%COMP%]{font-size:15px}.m-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:#1c252c;border:1px solid #326bf6;padding:.7rem!important}.m-form__field--link[_ngcontent-%COMP%]{color:#1c252c;font-size:10px;font-weight:400;line-height:12px;margin-left:auto;float:right}.m-form__field--link[_ngcontent-%COMP%]:hover{color:#326bf6}.m-button[_ngcontent-%COMP%]{height:40px;margin-bottom:10px}.m-button--full-width[_ngcontent-%COMP%]{width:100%;background:none;margin-bottom:10px}.m-button__content[_ngcontent-%COMP%]{color:#fff;border:1px solid transparent;border-radius:20px;padding:8px 23px;width:100%;height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;cursor:pointer}.m-button__content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.m-button__content--primary[_ngcontent-%COMP%]{background:#326bf6}.m-button__content--primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.m-button__content--outline[_ngcontent-%COMP%]{background:#fff;border-color:#326bf6;color:#326bf6}.m-button__content--outline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#326bf6}.m-button-sign-in-provider[_ngcontent-%COMP%]{width:400px;max-width:450px;min-width:-webkit-min-content;min-width:min-content;margin:0;font-size:14px;height:40px;letter-spacing:.25px;outline:none;overflow:hidden;padding:0 12px;position:relative;text-align:center;vertical-align:middle;white-space:nowrap;background-color:#fff;color:#202020;cursor:pointer;border:1px solid #dcdcdc;border-radius:20px;transition:background-color .218s,border-color .218s}.m-button-sign-in-provider--focus[_ngcontent-%COMP%]{transition:background-color .218s;top:0;right:0;bottom:0;left:0;position:absolute}.m-button-sign-in-provider--label[_ngcontent-%COMP%]{flex-grow:1;font-family:Inter var,"system-ui";font-weight:500;overflow:hidden;text-overflow:ellipsis;vertical-align:top;color:#3c4043;cursor:pointer}.m-button-sign-in-provider--content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-flow:row nowrap;justify-content:space-between;gap:6px;height:100%;position:relative;width:100%}.m-button-sign-in-provider[_ngcontent-%COMP%]:hover{box-shadow:none;border-color:#d2e3fc;outline:none}.m-button-sign-in-provider[_ngcontent-%COMP%]:hover   [_ngcontent-%COMP%]:hover   .m-button-sign-in-provider--focus[_ngcontent-%COMP%], .m-button-sign-in-provider[_ngcontent-%COMP%]:hover   [_ngcontent-%COMP%]:focus   .m-button-sign-in-provider--focus[_ngcontent-%COMP%]{background:rgba(66,133,244,.04)}'],data:{animation:[(0,_.RP)()]}})),n})(),pathMatch:"full"}];let w=(()=>{var i;class n{}return i=n,(0,e.Z)(n,"\u0275fac",function(r){return new(r||i)}),(0,e.Z)(n,"\u0275mod",o.oAB({type:i})),(0,e.Z)(n,"\u0275inj",o.cJS({imports:[g.Bz.forChild(C),g.Bz]})),n})(),O=(()=>{var i;class n{}return i=n,(0,e.Z)(n,"\u0275fac",function(r){return new(r||i)}),(0,e.Z)(n,"\u0275mod",o.oAB({type:i})),(0,e.Z)(n,"\u0275inj",o.cJS({imports:[f.o,m.g,w]})),n})()}}]);