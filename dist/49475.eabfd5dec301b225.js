"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[49475],{6663:(P,y,r)=>{r.r(y),r.d(y,{EditionsModule:()=>ye});var l=r(81180),w=r(8387),J=r(40031),E=r(12236),S=r(47530),Z=r(41840),x=r(64716),e=r(99468),g=r(44328),h=r(96814),C=r(73552),N=r(94901),U=r(56916),L=r(85219),I=r(68989);let T=(()=>{class o{}return(0,l.Z)(o,"DeactiveTenant","DeactiveTenant"),(0,l.Z)(o,"AssignToAnotherEdition","AssignToAnotherEdition"),o})();var s=r(56223),A=r(14647),b=r(45513),c=r(42152),p=r(24142),m=r(39387);const f=["editModal"],_=["featureTree"];function v(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.save())}),e.TgZ(2,"div",7)(3,"h5",8)(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"button",9),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.close())}),e.qZA()(),e.TgZ(7,"div",10)(8,"tabset")(9,"tab",11)(10,"div",12)(11,"label",13),e._uU(12),e.qZA(),e.TgZ(13,"input",14,15),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.edition.edition.displayName=i)}),e.qZA(),e._UZ(15,"validation-messages",16),e.qZA()(),e.TgZ(16,"tab",11),e._UZ(17,"feature-tree",null,17),e.qZA()()(),e.TgZ(19,"div",18)(20,"button",19),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.close())}),e._uU(21),e.qZA(),e.TgZ(22,"button",20),e._UZ(23,"i",21),e.TgZ(24,"span"),e._uU(25),e.qZA()()()()}if(2&o){const n=e.MAs(1),t=e.MAs(14),i=e.oxw();e.xp6(5),e.AsE("",i.l("EditEdition"),": ",i.edition.edition.displayName,""),e.xp6(1),e.Q6J("disabled",i.saving),e.uIk("aria-label",i.l("Close")),e.xp6(3),e.s9C("heading",i.l("EditionProperties")),e.xp6(3),e.hij("",i.l("EditionName")," *"),e.xp6(1),e.Q6J("ngClass",i.edition.edition.displayName)("ngModel",i.edition.edition.displayName),e.xp6(2),e.Q6J("formCtrl",t),e.xp6(1),e.s9C("heading",i.l("Features")),e.xp6(4),e.Q6J("disabled",i.saving),e.xp6(1),e.hij(" ",i.l("Cancel")," "),e.xp6(1),e.Q6J("disabled",!n.form.valid)("buttonBusy",i.saving)("busyText",i.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(i.l("Save"))}}const q=function(o){return{backdrop:"static",keyboard:o}};let D=(()=>{var o;class d extends Z.c{constructor(t,i,a){super(t),(0,l.Z)(this,"_editionService",void 0),(0,l.Z)(this,"_commonLookupService",void 0),(0,l.Z)(this,"modal",void 0),(0,l.Z)(this,"featureTree",void 0),(0,l.Z)(this,"modalSave",new e.vpe),(0,l.Z)(this,"active",!1),(0,l.Z)(this,"saving",!1),(0,l.Z)(this,"edition",new g.idn),(0,l.Z)(this,"expiringEditions",[]),(0,l.Z)(this,"expireAction",T.DeactiveTenant),(0,l.Z)(this,"expireActionEnum",T),(0,l.Z)(this,"isFree",!1),(0,l.Z)(this,"isTrialActive",!1),(0,l.Z)(this,"isWaitingDayActive",!1),this._editionService=i,this._commonLookupService=a}show(t){this.active=!0,this._commonLookupService.getEditionsForCombobox(!0).subscribe(i=>{this._editionService.getEditionForEdit(t).subscribe(a=>{this.featureTree.editData=a,this.edition.edition=a.edition,this.modal.show()})})}onShown(){document.getElementById("EditionDisplayName").focus()}save(){if(!this.featureTree.areAllValuesValid())return void this.message.warn(this.l("InvalidFeaturesWarning"));const t=new g.idn;t.edition=this.edition.edition,t.featureValues=this.featureTree.getGrantedFeatures(),this.saving=!0,this._editionService.updateEdition(t).pipe((0,x.x)(()=>this.saving=!1)).subscribe(()=>{this.notify.info(this.l("SavedSuccessfully")),this.close(),this.modalSave.emit(null)})}close(){this.active=!1,this.modal.hide()}}return o=d,(0,l.Z)(d,"\u0275fac",function(t){return new(t||o)(e.Y36(e.zs3),e.Y36(g.GnT),e.Y36(g.P0Z))}),(0,l.Z)(d,"\u0275cmp",e.Xpm({type:o,selectors:[["editEditionModal"]],viewQuery:function(t,i){if(1&t&&(e.Gf(f,7),e.Gf(_,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.modal=a.first),e.iGM(a=e.CRH())&&(i.featureTree=a.first)}},outputs:{modalSave:"modalSave"},features:[e.qOj],decls:5,vars:4,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","editModal","aria-hidden","true",1,"modal","fade",3,"config","onShown"],["editModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],["novalidate","",3,"ngSubmit",4,"ngIf"],["novalidate","",3,"ngSubmit"],["editionForm","ngForm"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"p-5",3,"heading"],[1,"mb-5"],["for","EditionDisplayName",1,"form-label"],["id","EditionDisplayName","type","text","name","EditionDisplayName","required","","maxlength","64",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["editionNameInput","ngModel"],[3,"formCtrl"],["featureTree",""],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","fw-bold",3,"disabled","click"],["type","submit",1,"btn","btn-primary","fw-bold",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-save"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1),e.NdJ("onShown",function(){return i.onShown()}),e.TgZ(2,"div",2)(3,"div",3),e.YNc(4,v,26,16,"form",4),e.qZA()()()),2&t&&(e.Q6J("config",e.VKq(2,q,!i.saving)),e.xp6(4),e.Q6J("ngIf",i.active))},dependencies:[h.mk,h.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.On,s.F,A.wW,A.AH,b.L,c.s,p.Z,m.y],encapsulation:2})),d})();var Q=r(8447),k=r(3291);const z=["createModal"],F=["featureTree"],M=function(o){return{edited:o}};function G(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",41)(1,"div",42)(2,"div",12)(3,"label",43),e._uU(4),e.ALo(5,"localize"),e.qZA(),e.TgZ(6,"div",44)(7,"span",45),e._uU(8),e.qZA(),e.TgZ(9,"input",46,47),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw(2);return e.KtG(a.edition.edition.dailyPrice=i)}),e.qZA()(),e._UZ(11,"validation-messages",16),e.qZA()(),e.TgZ(12,"div",42)(13,"div",12)(14,"label",48),e._uU(15),e.ALo(16,"localize"),e.qZA(),e.TgZ(17,"div",44)(18,"span",45),e._uU(19),e.qZA(),e.TgZ(20,"input",49,50),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw(2);return e.KtG(a.edition.edition.weeklyPrice=i)}),e.qZA()(),e._UZ(22,"validation-messages",16),e.qZA()(),e.TgZ(23,"div",42)(24,"div",12)(25,"label",51),e._uU(26),e.ALo(27,"localize"),e.qZA(),e.TgZ(28,"div",44)(29,"span",45),e._uU(30),e.qZA(),e.TgZ(31,"input",52,53),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw(2);return e.KtG(a.edition.edition.monthlyPrice=i)}),e.qZA()(),e._UZ(33,"validation-messages",16),e.qZA()(),e.TgZ(34,"div",42)(35,"div",12)(36,"label",54),e._uU(37),e.ALo(38,"localize"),e.qZA(),e.TgZ(39,"div",44)(40,"span",45),e._uU(41),e.qZA(),e.TgZ(42,"input",55,56),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw(2);return e.KtG(a.edition.edition.annualPrice=i)}),e.qZA()(),e._UZ(44,"validation-messages",16),e.qZA()()()}if(2&o){const n=e.MAs(10),t=e.MAs(21),i=e.MAs(32),a=e.MAs(43),u=e.oxw(2);e.xp6(4),e.Oqu(e.lcZ(5,28,"DailyPrice")),e.xp6(4),e.hij(" ",u.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(36,M,u.edition.edition.dailyPrice))("required",!u.isFree)("ngModel",u.edition.edition.dailyPrice)("imask",u.currencyMask),e.xp6(2),e.Q6J("formCtrl",n),e.xp6(4),e.hij(" ",e.lcZ(16,30,"WeeklyPrice")," "),e.xp6(4),e.hij(" ",u.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(38,M,u.edition.edition.weeklyPrice))("required",!u.isFree)("ngModel",u.edition.edition.weeklyPrice)("imask",u.currencyMask),e.xp6(2),e.Q6J("formCtrl",t),e.xp6(4),e.hij(" ",e.lcZ(27,32,"MonthlyPrice")," "),e.xp6(4),e.hij(" ",u.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(40,M,u.edition.edition.monthlyPrice))("required",!u.isFree)("ngModel",u.edition.edition.monthlyPrice)("imask",u.currencyMask),e.xp6(2),e.Q6J("formCtrl",i),e.xp6(4),e.hij(" ",e.lcZ(38,34,"AnnualPrice")," "),e.xp6(4),e.hij(" ",u.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(42,M,u.edition.edition.annualPrice))("required",!u.isFree)("ngModel",u.edition.edition.annualPrice)("imask",u.currencyMask),e.xp6(2),e.Q6J("formCtrl",a)}}function H(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",57)(1,"label",58),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"input",59,60),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw(2);return e.KtG(a.edition.edition.trialDayCount=i)}),e.qZA(),e._UZ(6,"validation-messages",16),e.qZA()}if(2&o){const n=e.MAs(5),t=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,5,"TrialDayCount")," "),e.xp6(2),e.Q6J("required",t.isTrialActive)("ngModel",t.edition.edition.trialDayCount)("ngClass",e.VKq(7,M,t.edition.edition.trialDayCount)),e.xp6(2),e.Q6J("formCtrl",n)}}function j(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",61)(1,"label",62),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"input",63,64),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw(2);return e.KtG(a.edition.edition.waitingDayAfterExpire=i)}),e.qZA(),e._UZ(6,"validation-messages",16),e.qZA()}if(2&o){const n=e.MAs(5),t=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,5,"WaitingDayAfterExpire")," "),e.xp6(2),e.Q6J("required",t.isWaitingDayActive)("ngModel",t.edition.edition.waitingDayAfterExpire)("ngClass",e.VKq(7,M,t.edition.edition.waitingDayAfterExpire)),e.xp6(2),e.Q6J("formCtrl",n)}}function K(o,d){if(1&o&&(e.TgZ(0,"option",68),e._uU(1),e.qZA()),2&o){const n=d.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.displayText," ")}}function Y(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",65)(1,"select",66),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw(2);return e.KtG(a.edition.edition.expiringEditionId=i)}),e.YNc(2,K,2,2,"option",67),e.qZA()()}if(2&o){const n=e.oxw(2);e.xp6(1),e.Q6J("ngModel",n.edition.edition.expiringEditionId),e.uIk("min",n.expireAction==n.expireActionEnum.AssignToAnotherEdition?1:0),e.xp6(1),e.Q6J("ngForOf",n.expiringEditions)}}function O(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.save())}),e.TgZ(2,"div",7)(3,"h5",8)(4,"span"),e._uU(5),e.ALo(6,"localize"),e.qZA()(),e.TgZ(7,"button",9),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.close())}),e.qZA()(),e.TgZ(8,"div",10)(9,"tabset")(10,"tab",11),e.ALo(11,"localize"),e.TgZ(12,"div",12)(13,"label",13),e._uU(14),e.ALo(15,"localize"),e.qZA(),e.TgZ(16,"input",14,15),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.edition.edition.displayName=i)}),e.qZA(),e._UZ(18,"validation-messages",16),e.qZA(),e.TgZ(19,"label",17),e._uU(20),e.ALo(21,"localize"),e.qZA(),e.TgZ(22,"div",18)(23,"label",19)(24,"input",20),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.isFree=i)})("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.resetPrices(i))}),e.qZA(),e.TgZ(25,"span",21),e._uU(26),e.ALo(27,"localize"),e.qZA()(),e.TgZ(28,"label",22)(29,"input",23),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.isFree=i)}),e.qZA(),e.TgZ(30,"span",21),e._uU(31),e.ALo(32,"localize"),e.qZA()()(),e.YNc(33,G,45,44,"div",24),e.TgZ(34,"div",25)(35,"label",26)(36,"input",27),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.isTrialActive=i)}),e.qZA(),e.TgZ(37,"span",21),e._uU(38),e.ALo(39,"localize"),e.qZA()(),e.YNc(40,H,7,9,"div",28),e.TgZ(41,"label",26)(42,"input",29),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.isWaitingDayActive=i)}),e.qZA(),e.TgZ(43,"span",21),e._uU(44),e.ALo(45,"localize"),e.qZA()(),e.YNc(46,j,7,9,"div",30),e.TgZ(47,"label",17),e._uU(48),e.ALo(49,"localize"),e.qZA(),e.TgZ(50,"div",18)(51,"label",31)(52,"input",32),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.expireAction=i)})("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.removeExpiringEdition(i))}),e.qZA(),e.TgZ(53,"span",21),e._uU(54),e.ALo(55,"localize"),e.qZA()(),e.TgZ(56,"label",33)(57,"input",34),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.expireAction=i)}),e.qZA(),e.TgZ(58,"span",21),e._uU(59),e.ALo(60,"localize"),e.qZA()()(),e.YNc(61,Y,3,3,"div",35),e.qZA()(),e.TgZ(62,"tab",11),e.ALo(63,"localize"),e._UZ(64,"feature-tree",null,36),e.qZA()()(),e.TgZ(66,"div",37)(67,"button",38),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.close())}),e._uU(68),e.ALo(69,"localize"),e.qZA(),e.TgZ(70,"button",39),e._UZ(71,"i",40),e.TgZ(72,"span"),e._uU(73),e.ALo(74,"localize"),e.qZA()()()()}if(2&o){const n=e.MAs(1),t=e.MAs(17),i=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,37,"CreateNewEdition")),e.xp6(2),e.Q6J("disabled",i.saving),e.uIk("aria-label",i.l("Close")),e.xp6(3),e.s9C("heading",e.lcZ(11,39,"EditionProperties")),e.xp6(4),e.hij(" ",e.lcZ(15,41,"EditionName")," * "),e.xp6(2),e.Q6J("ngModel",i.edition.edition.displayName),e.xp6(2),e.Q6J("formCtrl",t),e.xp6(2),e.Oqu(e.lcZ(21,43,"SubscriptionPrice")),e.xp6(4),e.Q6J("ngModel",i.isFree)("value",!0),e.xp6(2),e.hij(" ",e.lcZ(27,45,"Free")," "),e.xp6(3),e.Q6J("ngModel",i.isFree)("value",!1),e.xp6(2),e.hij(" ",e.lcZ(32,47,"Paid")," "),e.xp6(2),e.Q6J("ngIf",!i.isFree),e.xp6(1),e.Q6J("hidden",i.isFree),e.xp6(2),e.Q6J("ngModel",i.isTrialActive),e.xp6(2),e.hij(" ",e.lcZ(39,49,"IsTrialActive")," "),e.xp6(2),e.Q6J("ngIf",i.isTrialActive),e.xp6(2),e.Q6J("ngModel",i.isWaitingDayActive),e.xp6(2),e.hij(" ",e.lcZ(45,51,"WaitAfterSubscriptionExpireDate")," "),e.xp6(2),e.Q6J("ngIf",i.isWaitingDayActive),e.xp6(2),e.Oqu(e.lcZ(49,53,"WhatWillDoneAfterSubscriptionExpiry")),e.xp6(4),e.Q6J("ngModel",i.expireAction)("value",i.expireActionEnum.DeactiveTenant),e.xp6(2),e.hij(" ",e.lcZ(55,55,"DeactiveTenant")," "),e.xp6(3),e.Q6J("ngModel",i.expireAction)("value",i.expireActionEnum.AssignToAnotherEdition),e.xp6(2),e.hij(" ",e.lcZ(60,57,"AssignToAnotherEdition")," "),e.xp6(2),e.Q6J("ngIf",i.expireAction==i.expireActionEnum.AssignToAnotherEdition),e.xp6(1),e.s9C("heading",e.lcZ(63,59,"Features")),e.xp6(5),e.Q6J("disabled",i.saving),e.xp6(1),e.hij(" ",e.lcZ(69,61,"Cancel")," "),e.xp6(2),e.Q6J("disabled",!n.form.valid)("buttonBusy",i.saving)("busyText",i.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(e.lcZ(74,63,"Save"))}}const W=function(o){return{backdrop:"static",keyboard:o}};let B=(()=>{var o;class d extends Z.c{constructor(t,i,a){super(t),(0,l.Z)(this,"_editionService",void 0),(0,l.Z)(this,"_commonLookupService",void 0),(0,l.Z)(this,"modal",void 0),(0,l.Z)(this,"featureTree",void 0),(0,l.Z)(this,"modalSave",new e.vpe),(0,l.Z)(this,"active",!1),(0,l.Z)(this,"saving",!1),(0,l.Z)(this,"currencyMask",{mask:Number,scale:2,signed:!0,radix:"."}),(0,l.Z)(this,"edition",new g.de3),(0,l.Z)(this,"expiringEditions",[]),(0,l.Z)(this,"expireAction",T.DeactiveTenant),(0,l.Z)(this,"expireActionEnum",T),(0,l.Z)(this,"isFree",!0),(0,l.Z)(this,"isTrialActive",!1),(0,l.Z)(this,"isWaitingDayActive",!1),this._editionService=i,this._commonLookupService=a}show(t){this.active=!0,this._commonLookupService.getEditionsForCombobox(!0).subscribe(i=>{this.expiringEditions=i.items,this.expiringEditions.unshift(new g.p3d({value:null,displayText:this.l("NotAssigned"),isSelected:!0})),this._editionService.getEditionForEdit(t).subscribe(a=>{this.featureTree.editData=a,this.modal.show()})})}onShown(){document.getElementById("EditionDisplayName").focus()}resetPrices(t){this.edition.edition.annualPrice=void 0,this.edition.edition.monthlyPrice=void 0}removeExpiringEdition(t){this.edition.edition.expiringEditionId=null}save(){if(!this.featureTree.areAllValuesValid())return void this.message.warn(this.l("InvalidFeaturesWarning"));const t=new g.de3;t.edition=this.edition.edition,t.featureValues=this.featureTree.getGrantedFeatures(),this.isTrialActive||(this.edition.edition.trialDayCount=null),this.saving=!0,this._editionService.createEdition(t).pipe((0,x.x)(()=>this.saving=!1)).subscribe(()=>{this.notify.info(this.l("SavedSuccessfully")),this.close(),this.modalSave.emit(null)})}close(){this.active=!1,this.modal.hide()}}return o=d,(0,l.Z)(d,"\u0275fac",function(t){return new(t||o)(e.Y36(e.zs3),e.Y36(g.GnT),e.Y36(g.P0Z))}),(0,l.Z)(d,"\u0275cmp",e.Xpm({type:o,selectors:[["createEditionModal"]],viewQuery:function(t,i){if(1&t&&(e.Gf(z,7),e.Gf(F,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.modal=a.first),e.iGM(a=e.CRH())&&(i.featureTree=a.first)}},outputs:{modalSave:"modalSave"},features:[e.qOj],decls:5,vars:4,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","createModal","aria-hidden","true",1,"modal","fade",3,"config","onShown"],["createModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],["novalidate","",3,"ngSubmit",4,"ngIf"],["novalidate","",3,"ngSubmit"],["editionForm","ngForm"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"p-5",3,"heading"],[1,"mb-5"],["for","EditionDisplayName",1,"form-label"],["id","EditionDisplayName","type","text","name","EditionDisplayName","required","","maxlength","64",1,"form-control",3,"ngModel","ngModelChange"],["editionNameInput","ngModel"],[3,"formCtrl"],[1,"form-label"],[1,"d-flex","mb-5"],["for","EditEdition_IsFree",1,"form-check","form-check-custom","form-check-solid","me-5"],["id","EditEdition_IsFree","name","SubscriptionPrice","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],[1,"form-check-label"],["for","EditEdition_IsPaid",1,"form-check","form-check-custom","form-check-solid"],["id","EditEdition_IsPaid","name","SubscriptionPrice","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],["class","row",4,"ngIf"],[1,"paid-features",3,"hidden"],[1,"form-check","form-check-custom","form-check-solid","py-1","mb-5"],["id","EditEdition_IsTrialActive","type","checkbox","name","isTrialActive",1,"form-check-input",3,"ngModel","ngModelChange"],["class","mb-5 trial-day-count",4,"ngIf"],["id","EditEdition_IsWaitingDayActive","type","checkbox","name","IsWaitingDayActive",1,"form-check-input",3,"ngModel","ngModelChange"],["class","mb-5 waiting-day-after-expire",4,"ngIf"],["for","EditEdition_ExpireAction_DeactiveUser",1,"form-check","form-check-custom","form-check-solid","me-5"],["id","EditEdition_ExpireAction_DeactiveUser","name","ExpireAction","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],["for","EditEdition_ExpireAction_AssignEdition",1,"form-check","form-check-custom","form-check-solid","me-5"],["id","EditEdition_ExpireAction_AssignEdition","name","ExpireAction","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],["class","mb-5 edition-list",4,"ngIf"],["featureTree",""],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","fw-bold",3,"disabled","click"],["type","submit",1,"btn","btn-primary","fw-bold",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-save"],[1,"row"],[1,"col-md-6"],["for","DailyPrice",1,"form-label"],[1,"input-group"],[1,"input-group-text"],["type","text","name","DailyPrice","id","DailyPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["dailyPriceInput","ngModel"],["for","WeeklyPrice",1,"form-label"],["type","text","name","WeeklyPrice","id","WeeklyPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["weeklyPriceInput","ngModel"],["for","MonthlyPrice",1,"form-label"],["type","text","name","MonthlyPrice","id","MonthlyPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["monthlyPriceInput","ngModel"],["for","AnnualPrice",1,"form-label"],["type","text","name","AnnualPrice","id","AnnualPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["annualPriceInput","ngModel"],[1,"mb-5","trial-day-count"],["for","TrialDayCount",1,"form-label"],["type","number","name","TrialDayCount","id","TrialDayCount",1,"form-control",3,"required","ngModel","ngClass","ngModelChange"],["trialDayCountInput","ngModel"],[1,"mb-5","waiting-day-after-expire"],["for","WaitingDayAfterExpire",1,"form-label"],["type","number","name","WaitingDayAfterExpire","id","WaitingDayAfterExpire",1,"form-control",3,"required","ngModel","ngClass","ngModelChange"],["waitingDayAfterExpireInput","ngModel"],[1,"mb-5","edition-list"],["name","expiringEdition",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1),e.NdJ("onShown",function(){return i.onShown()}),e.TgZ(2,"div",2)(3,"div",3),e.YNc(4,O,75,65,"form",4),e.qZA()()()),2&t&&(e.Q6J("config",e.VKq(2,W,!i.saving)),e.xp6(4),e.Q6J("ngIf",i.active))},dependencies:[h.mk,h.sg,h.O5,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.Wl,s.EJ,s._,s.JJ,s.JL,s.Q7,s.nD,s.On,s.F,A.wW,A.AH,b.L,c.s,Q.An,p.Z,m.y,k.F],encapsulation:2})),d})();var R=r(15047);const V=["editModal"];function $(o,d){if(1&o&&(e.TgZ(0,"option",20),e._uU(1),e.qZA()),2&o){const n=d.$implicit;e.Q6J("value",n.value),e.xp6(1),e.hij(" ",n.displayText," ")}}const X=function(){return["/app/admin/tenants"]},ee=function(o){return{editionId:o}};function ie(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.save())}),e.TgZ(2,"div",7)(3,"h5",8)(4,"span"),e._uU(5),e.ALo(6,"localize"),e.qZA()(),e.TgZ(7,"button",9),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.close())}),e.qZA()(),e.TgZ(8,"div",10)(9,"div",11)(10,"a",12),e._uU(11),e.ALo(12,"localize"),e.qZA()(),e.TgZ(13,"div",11)(14,"label"),e._uU(15),e.ALo(16,"localize"),e.qZA(),e.TgZ(17,"select",13),e.NdJ("ngModelChange",function(i){e.CHM(n);const a=e.oxw();return e.KtG(a.moveTenantsInput.targetEditionId=i)}),e.TgZ(18,"option",14),e._uU(19),e.ALo(20,"localize"),e.qZA(),e.YNc(21,$,2,2,"option",15),e.qZA()()(),e.TgZ(22,"div",16)(23,"button",17),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.close())}),e._uU(24),e.qZA(),e.TgZ(25,"button",18),e._UZ(26,"i",19),e.TgZ(27,"span"),e._uU(28),e.qZA()()()()}if(2&o){const n=e.MAs(1),t=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,16,"MoveTenantsOfEdition")),e.xp6(2),e.uIk("aria-label",t.l("Close")),e.xp6(3),e.Q6J("href",t.appBaseUrl+"/app/admin/tenants?editionId="+t.moveTenantsInput.sourceEditionId,e.LSH)("routerLink",e.DdM(25,X))("queryParams",e.VKq(26,ee,t.moveTenantsInput.sourceEditionId)),e.xp6(1),e.hij(" ",e.xi3(12,18,"MoveTenantsOfEditionDescription",t.tenantCount)," "),e.xp6(4),e.Oqu(e.lcZ(16,21,"Edition")),e.xp6(2),e.Q6J("ngModel",t.moveTenantsInput.targetEditionId),e.xp6(2),e.Oqu(e.lcZ(20,23,"Select")),e.xp6(2),e.Q6J("ngForOf",t.targetEditions),e.xp6(2),e.Q6J("disabled",t.saving),e.xp6(1),e.hij(" ",t.l("Cancel")," "),e.xp6(1),e.Q6J("disabled",!n.form.valid)("buttonBusy",t.saving)("busyText",t.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(t.l("Save"))}}const te=function(){return{backdrop:"static"}};let ne=(()=>{var o;class d extends Z.c{constructor(t,i,a){super(t),(0,l.Z)(this,"_editionService",void 0),(0,l.Z)(this,"_commonLookupService",void 0),(0,l.Z)(this,"modal",void 0),(0,l.Z)(this,"active",!1),(0,l.Z)(this,"saving",!1),(0,l.Z)(this,"appBaseUrl",""),(0,l.Z)(this,"tenantCount",0),(0,l.Z)(this,"moveTenantsInput",new g.U92),(0,l.Z)(this,"targetEditions",[]),this._editionService=i,this._commonLookupService=a}show(t){this.active=!0,this.moveTenantsInput.sourceEditionId=t,this._commonLookupService.getEditionsForCombobox(void 0).subscribe(i=>{this.targetEditions=i.items,this.modal.show()}),this._editionService.getTenantCount(t).subscribe(i=>{this.tenantCount=i,this.appBaseUrl=R.g.appBaseUrl})}save(){this.saving=!0,this._editionService.moveTenantsToAnotherEdition(this.moveTenantsInput).pipe((0,x.x)(()=>this.saving=!1)).subscribe(()=>{this.notify.info(this.l("MoveTenantsToAnotherEditionStartedNotification")),this.close()})}close(){this.active=!1,this.modal.hide()}}return o=d,(0,l.Z)(d,"\u0275fac",function(t){return new(t||o)(e.Y36(e.zs3),e.Y36(g.GnT),e.Y36(g.P0Z))}),(0,l.Z)(d,"\u0275cmp",e.Xpm({type:o,selectors:[["moveTenantsToAnotherEditionModal"]],viewQuery:function(t,i){if(1&t&&e.Gf(V,7),2&t){let a;e.iGM(a=e.CRH())&&(i.modal=a.first)}},features:[e.qOj],decls:5,vars:3,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","editModal","aria-hidden","true",1,"modal","fade",3,"config"],["editModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],["novalidate","",3,"ngSubmit",4,"ngIf"],["novalidate","",3,"ngSubmit"],["MoveTenantsForm","ngForm"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mb-5"],["target","_blank",3,"href","routerLink","queryParams"],["name","expiringEdition","required","",1,"form-select",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","fw-bold",3,"disabled","click"],["type","submit",1,"btn","btn-primary","fw-bold",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-save"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3),e.YNc(4,ie,29,28,"form",4),e.qZA()()()),2&t&&(e.Q6J("config",e.DdM(2,te)),e.xp6(4),e.Q6J("ngIf",i.active))},dependencies:[h.sg,h.O5,s._Y,s.YN,s.Kr,s.EJ,s.JJ,s.JL,s.Q7,s.On,s.F,E.rH,b.L,p.Z,k.F],encapsulation:2})),d})();var oe=r(83410),ae=r(98155);const le=["createEditionModal"],de=["editEditionModal"],re=["moveTenantsToAnotherEditionModal"],se=["dataTable"],ce=["paginator"];function pe(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.createEdition())}),e._UZ(1,"i",18),e._uU(2),e.ALo(3,"localize"),e.qZA()}2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"CreateNewEdition")," "))}const ue=function(){return["Pages.Editions.Edit","Pages.Editions.Delete"]};function me(o,d){1&o&&(e.TgZ(0,"tr")(1,"th",19),e.ALo(2,"permissionAny"),e._uU(3),e.ALo(4,"localize"),e.qZA(),e.TgZ(5,"th"),e._uU(6),e.ALo(7,"localize"),e.qZA(),e.TgZ(8,"th"),e._uU(9),e.ALo(10,"localize"),e.qZA(),e.TgZ(11,"th"),e._uU(12),e.ALo(13,"localize"),e.qZA(),e.TgZ(14,"th"),e._uU(15),e.ALo(16,"localize"),e.qZA(),e.TgZ(17,"th"),e._uU(18),e.ALo(19,"localize"),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("hidden",!e.lcZ(2,7,e.DdM(21,ue))),e.xp6(2),e.hij(" ",e.lcZ(4,9,"Actions")," "),e.xp6(3),e.hij(" ",e.lcZ(7,11,"EditionName")," "),e.xp6(3),e.hij(" ",e.lcZ(10,13,"Price")," "),e.xp6(3),e.hij(" ",e.lcZ(13,15,"IsTrialActive")," "),e.xp6(3),e.hij(" ",e.lcZ(16,17,"WaitingDayAfterExpire")," "),e.xp6(3),e.hij(" ",e.lcZ(19,19,"ExpiringEdition")," "))}function _e(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"li",30)(1,"a",31),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(2).$implicit;e.oxw();const a=e.MAs(21);return e.KtG(a.show(i.id))}),e._uU(2),e.ALo(3,"localize"),e.qZA()()}2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"Edit")," "))}function ge(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"li",30)(1,"a",31),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(2).$implicit,a=e.oxw();return e.KtG(a.deleteEdition(i))}),e._uU(2),e.ALo(3,"localize"),e.qZA()()}2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"Delete")," "))}function fe(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"li",30)(1,"a",31),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(2).$implicit;e.oxw();const a=e.MAs(23);return e.KtG(a.show(i.id))}),e._uU(2),e.ALo(3,"localize"),e.qZA()()}2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"MoveTenantsToAnotherEdition")," "))}function he(o,d){1&o&&(e.TgZ(0,"ul",28),e.YNc(1,_e,4,3,"li",29),e.ALo(2,"permission"),e.YNc(3,ge,4,3,"li",29),e.ALo(4,"permission"),e.YNc(5,fe,4,3,"li",29),e.ALo(6,"permission"),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,3,"Pages.Editions.Edit")),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,5,"Pages.Editions.Delete")),e.xp6(2),e.Q6J("ngIf",e.lcZ(6,7,"Pages.Editions.MoveTenantsToAnotherEdition")))}function ve(o,d){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.ALo(3,"localize"),e.ALo(4,"localize"),e.ALo(5,"localize"),e.qZA()),2&o){const n=e.oxw().$implicit,t=e.oxw();e.xp6(1),e.qoO([" ",t.appSession.application.currencySign,"",n.dailyPrice," ",e.lcZ(2,12,"Daily")," / ",t.appSession.application.currencySign,"",n.weeklyPrice," ",e.lcZ(3,14,"Weekly")," / ",t.appSession.application.currencySign,"",n.monthlyPrice," ",e.lcZ(4,16,"Monthly")," / ",t.appSession.application.currencySign,"",n.annualPrice," ",e.lcZ(5,18,"Annual")," "])}}function Ze(o,d){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"Free")," "))}function xe(o,d){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.ALo(3,"localize"),e.qZA()),2&o){const n=e.oxw().$implicit;e.xp6(1),e.lnq(" ",e.lcZ(2,3,"Yes"),", ",n.trialDayCount," ",e.lcZ(3,5,"Days")," ")}}function Te(o,d){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"No")," "))}function Ae(o,d){if(1&o&&(e.TgZ(0,"tr")(1,"td",20)(2,"div",21)(3,"button",22),e._UZ(4,"i",23)(5,"span",24),e._uU(6),e.ALo(7,"localize"),e.qZA(),e.YNc(8,he,7,9,"ul",25),e.qZA()(),e.TgZ(9,"td")(10,"span",26),e._uU(11),e.ALo(12,"localize"),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"td")(15,"span",26),e._uU(16),e.ALo(17,"localize"),e.qZA(),e.YNc(18,ve,6,20,"span",27),e.YNc(19,Ze,3,3,"span",27),e.qZA(),e.TgZ(20,"td")(21,"span",26),e._uU(22),e.ALo(23,"localize"),e.qZA(),e.YNc(24,xe,4,7,"span",27),e.YNc(25,Te,3,3,"span",27),e.qZA(),e.TgZ(26,"td")(27,"span",26),e._uU(28),e.ALo(29,"localize"),e.qZA(),e._uU(30),e.qZA(),e.TgZ(31,"td")(32,"span",26),e._uU(33),e.ALo(34,"localize"),e.qZA(),e._uU(35),e.qZA()()),2&o){const n=d.$implicit;e.xp6(6),e.hij(" ",e.lcZ(7,13,"Actions")," "),e.xp6(5),e.Oqu(e.lcZ(12,15,"EditionName")),e.xp6(2),e.hij(" ",n.displayName," "),e.xp6(3),e.Oqu(e.lcZ(17,17,"Price")),e.xp6(2),e.Q6J("ngIf",n.dailyPrice||n.weeklyPrice||n.monthlyPrice||n.annualPrice),e.xp6(1),e.Q6J("ngIf",!(n.dailyPrice||n.weeklyPrice||n.monthlyPrice||n.annualPrice)),e.xp6(3),e.Oqu(e.lcZ(23,19,"IsTrialActive")),e.xp6(2),e.Q6J("ngIf",n.trialDayCount),e.xp6(1),e.Q6J("ngIf",!n.trialDayCount),e.xp6(3),e.Oqu(e.lcZ(29,21,"WaitingDayAfterExpire")),e.xp6(2),e.hij(" ",n.waitingDayAfterExpire," "),e.xp6(3),e.Oqu(e.lcZ(34,23,"ExpiringEdition")),e.xp6(2),e.hij(" ",n.expiringEditionDisplayName," ")}}function Me(o,d){1&o&&(e.TgZ(0,"div",32),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NoData")," "))}const Ee=function(){return{"min-width":"50rem"}},Ce=[{path:"",component:(()=>{var o;class d extends Z.c{constructor(t,i){super(t),(0,l.Z)(this,"_editionService",void 0),(0,l.Z)(this,"createEditionModal",void 0),(0,l.Z)(this,"editEditionModal",void 0),(0,l.Z)(this,"moveTenantsToAnotherEditionModal",void 0),(0,l.Z)(this,"dataTable",void 0),(0,l.Z)(this,"paginator",void 0),this._editionService=i}getEditions(){this.primengTableHelper.showLoadingIndicator(),this._editionService.getEditions().pipe((0,x.x)(()=>this.primengTableHelper.hideLoadingIndicator())).subscribe(t=>{this.primengTableHelper.totalRecordsCount=t.items.length,this.primengTableHelper.records=t.items,this.primengTableHelper.hideLoadingIndicator()})}createEdition(){this.createEditionModal.show()}deleteEdition(t){this.message.confirm(this.l("EditionDeleteWarningMessage",t.displayName),this.l("AreYouSure"),i=>{i&&this._editionService.deleteEdition(t.id).subscribe(()=>{this.getEditions(),this.notify.success(this.l("SuccessfullyDeleted"))})})}}return o=d,(0,l.Z)(d,"\u0275fac",function(t){return new(t||o)(e.Y36(e.zs3),e.Y36(g.GnT))}),(0,l.Z)(d,"\u0275cmp",e.Xpm({type:o,selectors:[["ng-component"]],viewQuery:function(t,i){if(1&t&&(e.Gf(le,7),e.Gf(de,7),e.Gf(re,7),e.Gf(se,7),e.Gf(ce,7)),2&t){let a;e.iGM(a=e.CRH())&&(i.createEditionModal=a.first),e.iGM(a=e.CRH())&&(i.editEditionModal=a.first),e.iGM(a=e.CRH())&&(i.moveTenantsToAnotherEditionModal=a.first),e.iGM(a=e.CRH())&&(i.dataTable=a.first),e.iGM(a=e.CRH())&&(i.paginator=a.first)}},features:[e.qOj],decls:24,vars:20,consts:[[3,"title","description"],["role","actions"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"card","card-custom","gutter-b"],[1,"card-body"],[1,"row","align-items-center"],[1,"col","primeng-datatable-container",3,"busyIf"],[3,"value","rows","paginator","lazy","tableStyle","onLazyLoad"],["dataTable",""],["pTemplate","header"],["pTemplate","body"],["class","primeng-no-data",4,"ngIf"],[1,"ui-table-footer"],[3,"modalSave"],["createEditionModal",""],["editEditionModal",""],["moveTenantsToAnotherEditionModal",""],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus"],[2,"width","130px",3,"hidden"],[2,"width","130px","text-align","center"],["dropdown","","placement","bottom left","container","body",1,"btn-group"],["id","dropdownButton","type","button","dropdownToggle","","aria-controls","dropdownMenu",1,"btn","btn-primary","btn-sm","dropdown-toggle"],[1,"fa","fa-cog"],[1,"caret"],["id","dropdownMenu","class","dropdown-menu","role","menu","aria-labelledby","dropdownButton",4,"dropdownMenu"],[1,"p-column-title"],[4,"ngIf"],["id","dropdownMenu","role","menu","aria-labelledby","dropdownButton",1,"dropdown-menu"],["role","menuitem",4,"ngIf"],["role","menuitem"],["href","javascript:;",1,"dropdown-item",3,"click"],[1,"primeng-no-data"]],template:function(t,i){1&t&&(e.TgZ(0,"div")(1,"sub-header",0),e.ALo(2,"localize"),e.ALo(3,"localize"),e.TgZ(4,"div",1),e.YNc(5,pe,4,3,"button",2),e.ALo(6,"permission"),e.qZA()(),e.TgZ(7,"div")(8,"div",3)(9,"div",4)(10,"div",5)(11,"div",6)(12,"p-table",7,8),e.NdJ("onLazyLoad",function(){return i.getEditions()}),e.YNc(14,me,20,22,"ng-template",9),e.YNc(15,Ae,36,25,"ng-template",10),e.qZA(),e.YNc(16,Me,3,3,"div",11),e._UZ(17,"div",12),e.qZA()()()()(),e.TgZ(18,"createEditionModal",13,14),e.NdJ("modalSave",function(){return i.getEditions()}),e.qZA(),e.TgZ(20,"editEditionModal",13,15),e.NdJ("modalSave",function(){return i.getEditions()}),e.qZA(),e._UZ(22,"moveTenantsToAnotherEditionModal",null,16),e.qZA()),2&t&&(e.Q6J("@routerTransition",void 0),e.xp6(1),e.Q6J("title",e.lcZ(2,13,"Editions"))("description",e.lcZ(3,15,"EditionsHeaderInfo")),e.xp6(4),e.Q6J("ngIf",e.lcZ(6,17,"Pages.Editions.Create")),e.xp6(2),e.Tol(i.containerClass),e.xp6(4),e.Q6J("busyIf",i.primengTableHelper.isLoading),e.xp6(1),e.s9C("rows",i.primengTableHelper.defaultRecordsCountPerPage),e.Q6J("value",i.primengTableHelper.records)("paginator",!1)("lazy",!0)("tableStyle",e.DdM(19,Ee)),e.xp6(4),e.Q6J("ngIf",0==i.primengTableHelper.totalRecordsCount))},dependencies:[h.O5,C.Hz,C.Mq,C.TO,N.U,U.iA,L.jx,I.$,D,B,ne,k.F,oe.a,ae.G],encapsulation:2,data:{animation:[(0,S.MH)()]}})),d})(),pathMatch:"full"}];let be=(()=>{var o;class d{}return o=d,(0,l.Z)(d,"\u0275fac",function(t){return new(t||o)}),(0,l.Z)(d,"\u0275mod",e.oAB({type:o})),(0,l.Z)(d,"\u0275inj",e.cJS({imports:[E.Bz.forChild(Ce),E.Bz]})),d})(),ye=(()=>{var o;class d{}return o=d,(0,l.Z)(d,"\u0275fac",function(t){return new(t||o)}),(0,l.Z)(d,"\u0275mod",e.oAB({type:o})),(0,l.Z)(d,"\u0275inj",e.cJS({imports:[J.o,w.g,be]})),d})()},43136:(P,y,r)=>{r.d(y,{Z:()=>b});var l=r(94138),w=r(45920);var S=r(14818);const g=function e(c,p){return p.length<2?c:(0,S.Z)(c,function Z(c,p,m){var f=-1,_=c.length;p<0&&(p=-p>_?0:_+p),(m=m>_?_:m)<0&&(m+=_),_=p>m?0:m-p>>>0,p>>>=0;for(var v=Array(_);++f<_;)v[f]=c[f+p];return v}(p,0,-1))};var h=r(77801);const N=function C(c,p){return p=(0,w.Z)(p,c),null==(c=g(c,p))||delete c[(0,h.Z)(function J(c){var p=null==c?0:c.length;return p?c[p-1]:void 0}(p))]};var U=r(19229),I=Array.prototype.splice;const b=function A(c,p){var m=[];if(!c||!c.length)return m;var f=-1,_=[],v=c.length;for(p=(0,l.Z)(p,3);++f<v;){var q=c[f];p(q,f,c)&&(m.push(q),_.push(f))}return function T(c,p){for(var m=c?p.length:0,f=m-1;m--;){var _=p[m];if(m==f||_!==v){var v=_;(0,U.Z)(_)?I.call(c,_,1):N(c,_)}}}(c,_),m}}}]);