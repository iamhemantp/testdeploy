"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[81314],{81314:(M,c,i)=>{i.r(c),i.d(c,{ChangeEmailModule:()=>C});var n=i(81180),h=i(91860),d=i(40031),u=i(12236),m=i(41840),r=i(44328),e=i(99468),p=i(26658);const g=[{path:"",component:(()=>{var o;class t extends m.c{constructor(a,s,f,E,Z){super(a),(0,n.Z)(this,"_accountService",void 0),(0,n.Z)(this,"_router",void 0),(0,n.Z)(this,"_activatedRoute",void 0),(0,n.Z)(this,"_appAuthService",void 0),(0,n.Z)(this,"waitMessage",void 0),(0,n.Z)(this,"model",new r.R0p),this._accountService=s,this._router=f,this._activatedRoute=E,this._appAuthService=Z}ngOnInit(){this.waitMessage=this.l("PleaseWaitToConfirmYourEmailMessage"),this.model.c=this._activatedRoute.snapshot.queryParams.c,this._accountService.resolveTenantId(new r.jKd({c:this.model.c})).subscribe(a=>{this.appSession.changeTenantIfNeeded(a)||this._accountService.changeEmail(this.model).subscribe(()=>{this.notify.success(this.l("YourEmailIsChangedMessage"),"",{willClose:()=>{this.appSession.user?this._appAuthService.logout(!0,"/account/login"):this._router.navigate(["account/login"])}})})})}parseTenantId(a){let s=a?parseInt(a,10):void 0;return Number.isNaN(s)&&(s=void 0),s}}return o=t,(0,n.Z)(t,"\u0275fac",function(a){return new(a||o)(e.Y36(e.zs3),e.Y36(r.k4Y),e.Y36(u.F0),e.Y36(u.gz),e.Y36(p.K))}),(0,n.Z)(t,"\u0275cmp",e.Xpm({type:o,selectors:[["ng-component"]],features:[e.qOj],decls:4,vars:1,consts:[[1,"login-form"],["role","alert",1,"alert","alert-success","text-center"],[1,"alert-text"]],template:function(a,s){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA()()()),2&a&&(e.xp6(3),e.Oqu(s.waitMessage))},encapsulation:2})),t})(),pathMatch:"full"}];let v=(()=>{var o;class t{}return o=t,(0,n.Z)(t,"\u0275fac",function(a){return new(a||o)}),(0,n.Z)(t,"\u0275mod",e.oAB({type:o})),(0,n.Z)(t,"\u0275inj",e.cJS({imports:[u.Bz.forChild(g),u.Bz]})),t})(),C=(()=>{var o;class t{}return o=t,(0,n.Z)(t,"\u0275fac",function(a){return new(a||o)}),(0,n.Z)(t,"\u0275mod",e.oAB({type:o})),(0,n.Z)(t,"\u0275inj",e.cJS({imports:[d.o,h.y,v]})),t})()}}]);