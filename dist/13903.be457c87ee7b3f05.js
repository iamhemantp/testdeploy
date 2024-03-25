"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[13903],{13903:(x,u,t)=>{t.r(u),t.d(u,{ValidateTwoFactorCodeModule:()=>y});var a=t(81180),p=t(40031),m=t(12236),h=t(47530),g=t(41840),v=t(99080),e=t(99468),f=t(3338),C=t(20005),T=t(96814),l=t(56223),S=t(32925),Z=t(42152),F=t(3291);function b(n,o){if(1&n){const c=e.EpF();e.TgZ(0,"div",12)(1,"label",13)(2,"input",14),e.NdJ("ngModelChange",function(r){e.CHM(c);const s=e.oxw();return e.KtG(s.loginService.authenticateModel.rememberClient=r)}),e.qZA(),e.TgZ(3,"span",15),e._uU(4),e.ALo(5,"localize"),e.qZA()()()}if(2&n){const c=e.oxw();e.xp6(2),e.Q6J("ngModel",c.loginService.authenticateModel.rememberClient),e.xp6(2),e.hij(" ",e.lcZ(5,2,"RememberThisBrowser")," ")}}function M(n,o){if(1&n&&(e.TgZ(0,"span",16),e._uU(1),e.ALo(2,"localize"),e.ALo(3,"localize"),e.qZA()),2&n){const c=e.oxw();e.xp6(1),e.AsE(" ",e.lcZ(2,2,"RemainingTime"),": ",e.xi3(3,4,"SecondShort{0}",c.remainingSeconds),". ")}}const w=[{path:"",component:(()=>{var n;class o extends g.c{constructor(i,r,s,d){super(i),(0,a.Z)(this,"loginService",void 0),(0,a.Z)(this,"_router",void 0),(0,a.Z)(this,"_recaptchaWrapperService",void 0),(0,a.Z)(this,"code",void 0),(0,a.Z)(this,"submitting",!1),(0,a.Z)(this,"remainingSeconds",90),(0,a.Z)(this,"timerSubscription",void 0),this.loginService=r,this._router=s,this._recaptchaWrapperService=d}canActivate(){return!(!this.loginService.authenticateModel||!this.loginService.authenticateResult)}ngOnInit(){if(!this.canActivate())return void this._router.navigate(["account/login"]);this.remainingSeconds=this.appSession.application.twoFactorCodeExpireSeconds;const i=(0,v.H)(1e3,1e3);this.timerSubscription=i.subscribe(()=>{this.remainingSeconds=this.remainingSeconds-1,0===this.remainingSeconds&&this.message.warn(this.l("TimeoutPleaseTryAgain")).then(()=>{this.loginService.authenticateModel.twoFactorVerificationCode=null,this._router.navigate(["account/login"])})})}ngAfterViewInit(){this._recaptchaWrapperService.setCaptchaVisibilityOnLogin()}ngOnDestroy(){this.timerSubscription&&(this.timerSubscription.unsubscribe(),this.timerSubscription=null)}submit(){let i=r=>{this.loginService.authenticateModel.twoFactorVerificationCode=this.code,this.loginService.authenticate(()=>{},null,r)};this._recaptchaWrapperService.useCaptchaOnLogin()?this._recaptchaWrapperService.getService().execute("login").subscribe(r=>i(r)):i(null)}}return n=o,(0,a.Z)(o,"\u0275fac",function(i){return new(i||n)(e.Y36(e.zs3),e.Y36(f.r),e.Y36(m.F0),e.Y36(C.o))}),(0,a.Z)(o,"\u0275cmp",e.Xpm({type:n,selectors:[["ng-component"]],features:[e.qOj],decls:18,vars:15,consts:[[1,"login-form"],[1,"pb-13","pt-lg-0","pt-5"],["method","post",1,"login-form","form",3,"ngSubmit"],["twoFactorForm","ngForm"],[1,"mb-5"],["autoFocus","","type","password","autocomplete","new-password","name","code","required","","maxlength","16",1,"form-control","form-control-solid","h-auto","py-7","px-6","rounded-lg","fs-h6",3,"ngModel","placeholder","ngModelChange"],["passwordInput","ngModel"],[3,"formCtrl"],["class","mb-5 mt-4",4,"ngIf"],[1,"pb-lg-0","pb-5"],["type","submit",1,"btn","btn-primary","fw-bolder","fs-h6","px-8","py-4","my-3","me-3",3,"disabled"],["class","remaining-time-counter ml-5",4,"ngIf"],[1,"mb-5","mt-4"],[1,"form-check","form-check-custom","form-check-solid","py-1"],["type","checkbox","name","rememberClient","value","true",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-label"],[1,"remaining-time-counter","ml-5"]],template:function(i,r){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3),e.ALo(4,"localize"),e.qZA()(),e.TgZ(5,"form",2,3),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(7,"div",4)(8,"input",5,6),e.NdJ("ngModelChange",function(d){return r.code=d}),e.ALo(10,"localize"),e.qZA(),e._UZ(11,"validation-messages",7),e.qZA(),e.YNc(12,b,6,4,"div",8),e.TgZ(13,"div",9)(14,"button",10),e._uU(15),e.ALo(16,"localize"),e.qZA(),e.YNc(17,M,4,7,"span",11),e.qZA()()()),2&i){const s=e.MAs(6),d=e.MAs(9);e.Q6J("@routerTransition",void 0),e.xp6(3),e.hij(" ",e.lcZ(4,9,"VerifySecurityCode")," "),e.xp6(5),e.MGl("placeholder","",e.lcZ(10,11,"Code")," *"),e.Q6J("ngModel",r.code),e.xp6(3),e.Q6J("formCtrl",d),e.xp6(1),e.Q6J("ngIf","true"===r.s("Abp.Zero.UserManagement.TwoFactorLogin.IsRememberBrowserEnabled")),e.xp6(2),e.Q6J("disabled",!s.form.valid),e.xp6(1),e.hij(" ",e.lcZ(16,13,"Submit")," "),e.xp6(2),e.Q6J("ngIf",r.remainingSeconds>=0)}},dependencies:[T.O5,l._Y,l.Fj,l.Wl,l.JJ,l.JL,l.Q7,l.nD,l.On,l.F,S.h,Z.s,F.F],styles:[".remaining-time-counter[_ngcontent-%COMP%]{color:red}"],data:{animation:[(0,h.RP)()]}})),o})(),pathMatch:"full"}];let V=(()=>{var n;class o{}return n=o,(0,a.Z)(o,"\u0275fac",function(i){return new(i||n)}),(0,a.Z)(o,"\u0275mod",e.oAB({type:n})),(0,a.Z)(o,"\u0275inj",e.cJS({imports:[m.Bz.forChild(w),m.Bz]})),o})();var A=t(91860);let y=(()=>{var n;class o{}return n=o,(0,a.Z)(o,"\u0275fac",function(i){return new(i||n)}),(0,a.Z)(o,"\u0275mod",e.oAB({type:n})),(0,a.Z)(o,"\u0275inj",e.cJS({imports:[p.o,A.y,V]})),o})()}}]);