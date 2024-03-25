"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[92695],{92695:(re,x,l)=>{l.r(x),l.d(x,{DashboardModule:()=>ne});var i=l(81180),q=l(8387),y=l(40031),m=l(12236),S=l(41840),g=l(44328),c=l(64716),e=l(99468),f=l(69862),D=l(37398),A=l(20553);let R=(()=>{var a;class r{constructor(n){(0,i.Z)(this,"jsonParseReviver",void 0),(0,i.Z)(this,"http",void 0),(0,i.Z)(this,"baseUrl",void 0),this.http=n,this.baseUrl=A.N.remoteServiceBaseUrl}getReportByQuoteStatus(n,o,s){let p=this.baseUrl+"/api/services/app/QuoteService/GetReportByQuoteStatus";p=p.replace(/[?&]$/,"");let u=new f.LE;return n&&(u=u.append("QuoteStatusId",n)),o&&(u=u.append("From",o)),s&&(u=u.append("To",s)),this.http.get(p,{params:u}).pipe((0,D.U)(h=>h))}getReportByQuoteStatusPerWeek(n,o,s){let p=this.baseUrl+"/api/services/app/QuoteService/GetReportByQuoteStatusPerWeek";p=p.replace(/[?&]$/,"");let u=new f.LE;return n&&(u=u.append("QuoteStatusId",n)),o&&(u=u.append("From",o)),s&&(u=u.append("To",s)),this.http.get(p,{params:u}).pipe((0,D.U)(h=>h))}}return a=r,(0,i.Z)(r,"\u0275fac",function(n){return new(n||a)(e.LFG(f.eN))}),(0,i.Z)(r,"\u0275prov",e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})),r})();var d=l(96814),T=l(56223),v=l(73552),U=l(94901),Z=l(56916),Q=l(85219),F=l(51712),b=l(60357),C=l(96760),w=l(3291);const P=["dashboardTabs"],L=["paginator"],M=["dataTable"],_=function(a){return{"active-filter":a}};function z(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"div",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.onSalesFilter(null==s?null:s.id))}),e._uU(1),e.ALo(2,"titlecase"),e.qZA()}if(2&a){const t=r.$implicit,n=e.oxw();e.Q6J("ngClass",e.VKq(4,_,n.salesFilter===(null==t?null:t.id))),e.xp6(1),e.hij(" Quotes ",e.lcZ(2,2,null==t?null:t.shortName)," ")}}function j(a,r){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"span"),e._uU(4),e.qZA()),2&a){const t=r.model;e.xp6(1),e.hij("Day ",t.name,""),e.xp6(3),e.Oqu(t.value)}}function N(a,r){if(1&a&&(e.TgZ(0,"div",39)(1,"span",23),e._uU(2," Quote Won "),e.qZA(),e.TgZ(3,"span",24),e._uU(4),e.ALo(5,"currency"),e.qZA()()),2&a){const t=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,1,null==t.salesReporteportDetails?null:t.salesReporteportDetails.quoteWon)," ")}}function J(a,r){if(1&a&&(e.TgZ(0,"div",22)(1,"span",23),e._uU(2," In Progress "),e.qZA(),e.TgZ(3,"span",24),e._uU(4),e.ALo(5,"currency"),e.qZA()()),2&a){const t=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,1,null==t.salesReporteportDetails?null:t.salesReporteportDetails.inProgress)," ")}}function B(a,r){if(1&a&&(e.TgZ(0,"div",22)(1,"span",23),e._uU(2," Qoute lost "),e.qZA(),e.TgZ(3,"span",24),e._uU(4),e.ALo(5,"currency"),e.qZA()()),2&a){const t=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,1,null==t.salesReporteportDetails?null:t.salesReporteportDetails.quoteLost)," ")}}function I(a,r){if(1&a){const t=e.EpF();e.TgZ(0,"div",38),e.NdJ("click",function(){const s=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.onQuoteFilter(null==s?null:s.id))}),e._uU(1),e.ALo(2,"titlecase"),e.qZA()}if(2&a){const t=r.$implicit,n=e.oxw();e.Q6J("ngClass",e.VKq(4,_,n.quotesFilter===(null==t?null:t.id))),e.xp6(1),e.hij(" ",e.lcZ(2,2,null==t?null:t.shortName)," ")}}function H(a,r){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"span"),e._uU(4),e.qZA()),2&a){const t=r.model;e.xp6(1),e.hij("Day ",t.name,""),e.xp6(3),e.Oqu(t.value)}}function Y(a,r){if(1&a&&(e.TgZ(0,"div",39)(1,"span",23),e._uU(2),e.qZA()()),2&a){const t=e.oxw();e.xp6(2),e.hij(" Won (",null==t.quoteReportDetails?null:t.quoteReportDetails.quoteWon,") ")}}function O(a,r){if(1&a&&(e.TgZ(0,"div",22)(1,"span",23),e._uU(2),e.qZA()()),2&a){const t=e.oxw();e.xp6(2),e.hij(" In Progress (",null==t.quoteReportDetails?null:t.quoteReportDetails.inProgress,") ")}}function E(a,r){if(1&a&&(e.TgZ(0,"div",22)(1,"span",23),e._uU(2),e.qZA()()),2&a){const t=e.oxw();e.xp6(2),e.hij(" Lost (",null==t.quoteReportDetails?null:t.quoteReportDetails.quoteLost,") ")}}function W(a,r){1&a&&(e.TgZ(0,"tr")(1,"th",40),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"th",41),e._uU(5),e.ALo(6,"localize"),e._UZ(7,"p-sortIcon",42),e.qZA(),e.TgZ(8,"th",43),e._uU(9),e.ALo(10,"localize"),e._UZ(11,"p-sortIcon",44),e.qZA(),e.TgZ(12,"th",45),e._uU(13),e.ALo(14,"localize"),e._UZ(15,"p-sortIcon",46),e.qZA(),e.TgZ(16,"th",47),e._uU(17),e.ALo(18,"localize"),e._UZ(19,"p-sortIcon",48),e.qZA(),e.TgZ(20,"th",49),e._uU(21),e.ALo(22,"localize"),e._UZ(23,"p-sortIcon",50),e.qZA(),e.TgZ(24,"th",51),e._uU(25),e.ALo(26,"localize"),e._UZ(27,"p-sortIcon",52),e.qZA()()),2&a&&(e.xp6(2),e.hij(" ",e.lcZ(3,7,"Actions")," "),e.xp6(3),e.hij(" ",e.lcZ(6,9,"Title/Number")," "),e.xp6(4),e.hij(" ",e.lcZ(10,11,"Client")," "),e.xp6(4),e.hij(" ",e.lcZ(14,13,"Status")," "),e.xp6(4),e.hij(" ",e.lcZ(18,15,"Shared")," "),e.xp6(4),e.hij(" ",e.lcZ(22,17,"Creation time")," "),e.xp6(4),e.hij(" ",e.lcZ(26,19,"Created By")," "))}function k(a,r){1&a&&(e.TgZ(0,"ul",60)(1,"li",61)(2,"a",62),e._uU(3),e.ALo(4,"localize"),e.qZA()(),e.TgZ(5,"li",61)(6,"a",62),e._uU(7),e.ALo(8,"localize"),e.qZA()()()),2&a&&(e.xp6(3),e.hij(" ",e.lcZ(4,2,"Edit")," "),e.xp6(4),e.hij(" ",e.lcZ(8,4,"Delete")," "))}const G=function(a,r,t,n){return{danger:a,success:r,pending:t,"in-progress":n}},$=function(a,r){return{danger:a,success:r}};function K(a,r){if(1&a&&(e.TgZ(0,"tr")(1,"td",40)(2,"div",53)(3,"button",54),e._UZ(4,"span",55),e._uU(5),e.ALo(6,"localize"),e.qZA(),e.YNc(7,k,9,6,"ul",56),e.qZA()(),e.TgZ(8,"td",57)(9,"span",58),e._uU(10),e.ALo(11,"localize"),e.qZA(),e._uU(12),e.qZA(),e.TgZ(13,"td",57)(14,"span",58),e._uU(15),e.ALo(16,"localize"),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"td",57)(19,"span",58),e._uU(20),e.ALo(21,"localize"),e.qZA(),e.TgZ(22,"span",59),e._uU(23),e.qZA()(),e.TgZ(24,"td",57)(25,"span",58),e._uU(26),e.ALo(27,"localize"),e.qZA(),e.TgZ(28,"span",59),e._uU(29),e.qZA()(),e.TgZ(30,"td",57)(31,"span",58),e._uU(32),e.ALo(33,"localize"),e.qZA(),e._uU(34),e.ALo(35,"date"),e.qZA(),e.TgZ(36,"td",57)(37,"span",58),e._uU(38),e.ALo(39,"localize"),e.qZA(),e._uU(40),e.qZA()()),2&a){const t=r.$implicit;e.xp6(5),e.hij(" ",e.lcZ(6,15,"Actions")," "),e.xp6(5),e.Oqu(e.lcZ(11,17,"number")),e.xp6(2),e.hij(" ",t.number||"-"," "),e.xp6(3),e.Oqu(e.lcZ(16,19,"clientName")),e.xp6(2),e.hij(" ",t.clientName||"-"," "),e.xp6(3),e.Oqu(e.lcZ(21,21,"quoteStatus")),e.xp6(2),e.Q6J("ngClass",e.l5B(32,G,"Lost"===(null==t?null:t.quoteStatus),"Accepted"===(null==t?null:t.quoteStatus),"0"===(null==t?null:t.quoteStatus),"InProgress"===(null==t?null:t.quoteStatus))),e.xp6(1),e.hij(" ","InProgress"===t.quoteStatus?"In Progress":"Accepted"===t.quoteStatus?"Accepted":"Lost"===t.quoteStatus?"Lost":"0"," "),e.xp6(3),e.Oqu(e.lcZ(27,23,"isShared")),e.xp6(2),e.Q6J("ngClass",e.WLB(37,$,!1===(null==t?null:t.isShared),!0===(null==t?null:t.isShared))),e.xp6(1),e.hij(" ",t.isShared?"Yes":"No"," "),e.xp6(3),e.Oqu(e.lcZ(33,25,"creationTime")),e.xp6(2),e.hij(" ",e.xi3(35,27,t.creationTime,"MM/dd/yyyy, hh:mm:ss aa")," "),e.xp6(4),e.Oqu(e.lcZ(39,30,"creatorUserName")),e.xp6(2),e.hij(" ",t.creatorUserName||"-"," ")}}function V(a,r){1&a&&(e.TgZ(0,"div",63),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&a&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NoData")," "))}const X=function(){return{"min-width":"50rem"}},ee=[{path:"",component:(()=>{var a;class r extends S.c{constructor(n,o,s,p,u,h){super(n),(0,i.Z)(this,"_activatedRoute",void 0),(0,i.Z)(this,"dashboardService",void 0),(0,i.Z)(this,"datePipe",void 0),(0,i.Z)(this,"_quoteServiceProxy",void 0),(0,i.Z)(this,"_quotesStatusServiceProxy",void 0),(0,i.Z)(this,"dashboardTabs",void 0),(0,i.Z)(this,"paginator",void 0),(0,i.Z)(this,"dataTable",void 0),(0,i.Z)(this,"filterText",""),(0,i.Z)(this,"defaultSalesChartData",void 0),(0,i.Z)(this,"defaultQuotesChartData",void 0),(0,i.Z)(this,"salesReporteportDetails",void 0),(0,i.Z)(this,"saleStatuses",[]),(0,i.Z)(this,"salesChartScheme",void 0),(0,i.Z)(this,"salesChartData",void 0),(0,i.Z)(this,"salesFilter",""),(0,i.Z)(this,"salesFromDate",void 0),(0,i.Z)(this,"salesToDate",void 0),(0,i.Z)(this,"quoteReportDetails",void 0),(0,i.Z)(this,"quotesChartData",void 0),(0,i.Z)(this,"quotesChartScheme",void 0),(0,i.Z)(this,"quotesFilter",""),(0,i.Z)(this,"quotesFromDate",void 0),(0,i.Z)(this,"quotesToDate",void 0),(0,i.Z)(this,"rangeDates",void 0),(0,i.Z)(this,"quotesRangeDate",void 0),this._activatedRoute=o,this.dashboardService=s,this.datePipe=p,this._quoteServiceProxy=u,this._quotesStatusServiceProxy=h,this.filterText=this._activatedRoute.snapshot.queryParams.filterText||""}ngOnInit(){this.getQuoteStatuses(),this.salesChartScheme={name:"Sales",selectable:!0,group:"Ordinal",domain:["#2D69F6"]},this.quotesChartScheme={name:"Quotes",selectable:!0,group:"Ordinal",domain:["#164E63"]},this.defaultSalesChartData=[{name:"Jan",value:0},{name:"Feb",value:0},{name:"Mar",value:0},{name:"Apr",value:0},{name:"May",value:0},{name:"Jun",value:0},{name:"Jul",value:0},{name:"Aug",value:0},{name:"Sep",value:0},{name:"Oct",value:0},{name:"Nov",value:0},{name:"Dec",value:0}],this.defaultQuotesChartData=[{name:"Sunday",value:0},{name:"Monday",value:0},{name:"Tuesday",value:0},{name:"Wednesday",value:0},{name:"Thursday",value:0},{name:"Friday",value:0},{name:"Saturday",value:0}],this.getSalesReports(),this.getQuotesReports()}getQuoteStatuses(){this._quotesStatusServiceProxy.getAllQuoteStatus().pipe((0,c.x)(()=>this.hideMainSpinner())).subscribe(n=>{this.saleStatuses=n})}getSalesReports(){this.dashboardService.getReportByQuoteStatus(this.salesFilter,this.salesFromDate,this.salesToDate).pipe((0,c.x)(()=>this.hideMainSpinner())).subscribe(n=>{var o;this.salesChartData=this.defaultSalesChartData,this.salesReporteportDetails=null==n?void 0:n.result,this.salesChartData=[...this.salesChartData,...null===(o=this.salesReporteportDetails)||void 0===o?void 0:o.quoteReports]})}getQuotesReports(){this.dashboardService.getReportByQuoteStatusPerWeek(this.quotesFilter,this.quotesFromDate,this.quotesToDate).pipe((0,c.x)(()=>this.hideMainSpinner())).subscribe(n=>{var o;this.quotesChartData=this.defaultQuotesChartData,this.quoteReportDetails=null==n?void 0:n.result,this.quotesChartData=[...this.quotesChartData,...null===(o=this.quoteReportDetails)||void 0===o?void 0:o.quoteReports]})}getQuotes(n){this.primengTableHelper.shouldResetPaging(n)&&(this.paginator.changePage(0),this.primengTableHelper.records&&this.primengTableHelper.records.length>0)||this._quoteServiceProxy.getQuotes(new g.und({filter:this.filterText,sorting:this.primengTableHelper.getSorting(this.dataTable),maxResultCount:this.primengTableHelper.getMaxResultCount(this.paginator,n),skipCount:this.primengTableHelper.getSkipCount(this.paginator,n)})).pipe((0,c.x)(()=>this.primengTableHelper.hideLoadingIndicator())).subscribe(o=>{this.primengTableHelper.totalRecordsCount=o.totalCount,this.primengTableHelper.records=o.items})}onSalesFilter(n){this.salesFilter=n,this.getSalesReports()}onFilterSalesByDate(){this.salesFromDate=this.datePipe.transform(new Date(this.rangeDates[0]),"yyyy-MM-dd"),this.salesToDate=this.datePipe.transform(new Date(this.rangeDates[1]),"yyyy-MM-dd"),this.rangeDates[0]&&this.rangeDates[1]&&this.getSalesReports()}onClearSalesDateFilter(){this.salesFromDate="",this.salesToDate="",this.getSalesReports()}onQuoteFilter(n){this.quotesFilter=n,this.getQuotesReports()}onFilterQuotesByDate(){this.quotesFromDate=this.datePipe.transform(new Date(this.quotesRangeDate[0]),"yyyy-MM-dd"),this.quotesToDate=this.datePipe.transform(new Date(this.quotesRangeDate[1]),"yyyy-MM-dd"),this.quotesRangeDate[0]&&this.quotesRangeDate[1]&&this.getQuotesReports()}onClearQuotesDateFilter(){this.quotesFromDate="",this.quotesToDate="",this.getQuotesReports()}}return a=r,(0,i.Z)(r,"\u0275fac",function(n){return new(n||a)(e.Y36(e.zs3),e.Y36(m.gz),e.Y36(R),e.Y36(d.uU),e.Y36(g.k_Y),e.Y36(g.aHc))}),(0,i.Z)(r,"\u0275cmp",e.Xpm({type:a,selectors:[["ng-component"]],viewQuery:function(n,o){if(1&n&&(e.Gf(P,5),e.Gf(L,7),e.Gf(M,7)),2&n){let s;e.iGM(s=e.CRH())&&(o.dashboardTabs=s.first),e.iGM(s=e.CRH())&&(o.paginator=s.first),e.iGM(s=e.CRH())&&(o.dataTable=s.first)}},features:[e.qOj],decls:68,vars:47,consts:[[1,"dashboard-container"],[1,"container"],[1,"c-route-page-container"],[1,"p-28"],[1,"d-flex","search","justify-content-between","align-items-center"],[1,"text-header"],[1,"row"],[1,"sub-title"],[1,"card-layout"],[1,"col-md-12"],[1,"w-100","d-flex","justify-content-between","align-items-center"],[1,"d-flex","graph-header"],["class","filter-summary graph-info-description",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"card","flex","justify-content-center","graph-date-picker"],["selectionMode","range","placeholder","Select a date range",3,"ngModel","showButtonBar","ngModelChange","onSelect","onClearClick"],[1,"row","my-10"],[1,"col",2,"max-height","200px"],[3,"results","scheme","yAxis","xAxis","showYAxisLabel","barPadding"],["tooltipTemplate",""],[1,"graph-footer","w-100","d-flex"],["class","total-summary ps-0",4,"ngIf"],["class","total-summary",4,"ngIf"],[1,"total-summary"],[1,"graph-label"],[1,"graph-info-description"],[1,"d-flex","justify-content-between","align-items-center"],[1,"graph-header","d-flex"],[1,"graph-footer","d-flex"],[1,"row","align-items-center"],[1,"primeng-datatable-container",3,"busyIf"],["sortMode","multiple","ScrollWidth","100%","scrollDirection","horizontal",3,"value","rows","paginator","lazy","scrollable","tableStyle","resizableColumns","onLazyLoad"],["dataTable",""],["pTemplate","header"],["pTemplate","body"],["class","primeng-no-data",4,"ngIf"],[1,"primeng-paging-container"],[3,"rows","totalRecords","rowsPerPageOptions","showCurrentPageReport","currentPageReportTemplate","onPageChange"],["paginator",""],[1,"filter-summary","graph-info-description",3,"ngClass","click"],[1,"total-summary","ps-0"],[2,"min-width","130px"],["pSortableColumn","number",2,"min-width","150px"],["field","number"],["pSortableColumn","clientName",2,"min-width","150px"],["field","clientName"],["pSortableColumn","quoteStatus",2,"min-width","150px"],["field","quoteStatus"],["pSortableColumn","isShared",2,"min-width","150px"],["field","isShared"],["pSortableColumn","creationTime",2,"min-width","150px"],["field","creationTime"],["pSortableColumn","creatorUserName",2,"min-width","150px"],["field","creatorUserName"],["dropdown","","placement","bottom left","container","body",1,"btn-group"],["id","dropdownButton","type","button","dropdownToggle","","aria-controls","dropdownMenu",1,"btn","btn-transparent","btn-sm","btn-actions","dropdown-toggle"],[1,"caret"],["id","dropdownMenu","class","dropdown-menu","role","menu","aria-labelledby","dropdownButton",4,"dropdownMenu"],[2,"min-width","150px"],[1,"p-column-title"],[3,"ngClass"],["id","dropdownMenu","role","menu","aria-labelledby","dropdownButton",1,"dropdown-menu"],["role","menuitem"],["href","javascript:;",1,"dropdown-item"],[1,"primeng-no-data"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Dashboard"),e.qZA()()()(),e.TgZ(7,"div",6)(8,"h5",7),e._uU(9,"Sales overview"),e.qZA(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11),e.YNc(14,z,3,6,"div",12),e.qZA(),e.TgZ(15,"div",13)(16,"p-calendar",14),e.NdJ("ngModelChange",function(p){return o.rangeDates=p})("onSelect",function(){return o.onFilterSalesByDate()})("onClearClick",function(){return o.onClearSalesDateFilter()}),e.qZA()()(),e.TgZ(17,"div",15)(18,"div",16)(19,"ngx-charts-bar-vertical",17),e.YNc(20,j,5,2,"ng-template",null,18,e.W1O),e.qZA()()(),e.TgZ(22,"div",19),e.YNc(23,N,6,3,"div",20),e.YNc(24,J,6,3,"div",21),e.TgZ(25,"div",22)(26,"span",23),e._uU(27," Total quote "),e.qZA(),e.TgZ(28,"span",24),e._uU(29),e.ALo(30,"currency"),e.qZA()(),e.YNc(31,B,6,3,"div",21),e.qZA()()(),e.TgZ(32,"h5",7),e._uU(33,"Quotes Status"),e.qZA(),e.TgZ(34,"div",8)(35,"div",9)(36,"div",25)(37,"div",26),e.YNc(38,I,3,6,"div",12),e.qZA(),e.TgZ(39,"div",13)(40,"p-calendar",14),e.NdJ("ngModelChange",function(p){return o.quotesRangeDate=p})("onSelect",function(){return o.onFilterQuotesByDate()})("onClearClick",function(){return o.onClearQuotesDateFilter()}),e.qZA()()(),e.TgZ(41,"div",15)(42,"div",16)(43,"ngx-charts-bar-vertical",17),e.YNc(44,H,5,2,"ng-template",null,18,e.W1O),e.qZA()()(),e.TgZ(46,"div",27),e.YNc(47,Y,3,1,"div",20),e.YNc(48,O,3,1,"div",21),e.YNc(49,E,3,1,"div",21),e.TgZ(50,"div",22)(51,"span",23),e._uU(52),e.qZA()()()()(),e.TgZ(53,"h5",7),e._uU(54,"Latest Quotes"),e.qZA(),e.TgZ(55,"div",8)(56,"div",9)(57,"div",28)(58,"div",29)(59,"p-table",30,31),e.NdJ("onLazyLoad",function(p){return o.getQuotes(p)}),e.YNc(61,W,28,21,"ng-template",32),e.YNc(62,K,41,40,"ng-template",33),e.qZA(),e.YNc(63,V,3,3,"div",34),e.TgZ(64,"div",35)(65,"p-paginator",36,37),e.NdJ("onPageChange",function(p){return o.getQuotes(p)}),e.ALo(67,"localize"),e.qZA()()()()()()()()()),2&n&&(e.Q6J("@routerTransition",void 0),e.xp6(14),e.Q6J("ngForOf",o.saleStatuses),e.xp6(2),e.Q6J("ngModel",o.rangeDates)("showButtonBar",!0),e.xp6(3),e.Q6J("results",o.salesChartData)("scheme",o.salesChartScheme)("yAxis",!0)("xAxis",!0)("showYAxisLabel",!0)("barPadding",50),e.xp6(4),e.Q6J("ngIf",null==o.salesReporteportDetails?null:o.salesReporteportDetails.quoteWon),e.xp6(1),e.Q6J("ngIf",null==o.salesReporteportDetails?null:o.salesReporteportDetails.inProgress),e.xp6(5),e.hij(" ",e.lcZ(30,41,(null==o.salesReporteportDetails?null:o.salesReporteportDetails.total)||0)," "),e.xp6(2),e.Q6J("ngIf",null==o.salesReporteportDetails?null:o.salesReporteportDetails.quoteLost),e.xp6(7),e.Q6J("ngForOf",o.saleStatuses),e.xp6(2),e.Q6J("ngModel",o.quotesRangeDate)("showButtonBar",!0),e.xp6(3),e.Q6J("results",o.quotesChartData)("scheme",o.quotesChartScheme)("yAxis",!0)("xAxis",!0)("showYAxisLabel",!0)("barPadding",55),e.xp6(4),e.Q6J("ngIf",null==o.quoteReportDetails?null:o.quoteReportDetails.quoteWon),e.xp6(1),e.Q6J("ngIf",null==o.quoteReportDetails?null:o.quoteReportDetails.inProgress),e.xp6(1),e.Q6J("ngIf",null==o.quoteReportDetails?null:o.quoteReportDetails.quoteLost),e.xp6(3),e.hij(" Total quotes (",(null==o.quoteReportDetails?null:o.quoteReportDetails.total)||0,") "),e.xp6(6),e.Q6J("busyIf",o.primengTableHelper.isLoading),e.xp6(1),e.s9C("rows",o.primengTableHelper.predefinedRecordsCountPerPage[0]),e.Q6J("value",o.primengTableHelper.records)("paginator",!1)("lazy",!0)("scrollable",!0)("tableStyle",e.DdM(46,X))("resizableColumns",o.primengTableHelper.resizableColumns),e.xp6(4),e.Q6J("ngIf",0==o.primengTableHelper.totalRecordsCount),e.xp6(2),e.Q6J("rows",o.primengTableHelper.predefinedRecordsCountPerPage[0])("totalRecords",o.primengTableHelper.totalRecordsCount)("rowsPerPageOptions",o.primengTableHelper.predefinedRecordsCountPerPage)("showCurrentPageReport",!0)("currentPageReportTemplate",e.xi3(67,43,"TotalRecordsCount",o.primengTableHelper.totalRecordsCount)))},dependencies:[d.mk,d.sg,d.O5,T.JJ,T.On,v.Hz,v.Mq,v.TO,U.U,Z.iA,Q.jx,Z.lQ,Z.fz,F.D,b.K$,C.f,d.rS,d.H9,d.uU,w.F],styles:[".sub-title{font-size:16px;font-style:normal;font-weight:600;line-height:24px;color:#183455;margin-bottom:16px}.card-layout{min-height:200px;border-radius:12px;border:1px solid #E9EBED;background:#FFF;padding:32px 26px;margin-bottom:32px}.card-layout th{font-size:14px!important;font-style:normal!important;font-weight:400!important;line-height:140%!important;color:#4e6685!important}.card-layout td{padding-top:22px!important;padding-bottom:22px!important;font-size:16px;font-style:normal;font-weight:400;line-height:24px;color:#4e6685}.btn-actions{border-radius:4px!important;border:1px solid #164E63!important;font-size:16px!important;font-style:normal!important;font-weight:400!important;line-height:24px!important;color:#164e63!important;background-color:transparent!important;height:32px!important;display:flex!important;align-items:center!important;justify-content:center!important}.btn-actions:hover{background-color:#164e63!important;color:#fff!important}.btn-actions:after{color:#164e63!important}.success{color:#3cd856;background:#F0FDF4;padding:5px 10px;border-radius:12px}.danger{color:#eb5757;background:#FEF2F2;padding:5px 10px;border-radius:12px}.pending{background:#fff3e0;color:#ff9500;padding:5px 10px;border-radius:12px}.in-progress{background:rgba(0,122,255,.08);color:#007aff;padding:5px 10px;border-radius:12px}.graph-header{gap:32px}.graph-footer{padding-top:24px;border-top:1px solid #E9EBED}.graph-label{font-size:16px;font-style:normal;font-weight:500;line-height:24px;color:#183455}.graph-info-description{font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#4e6685}.filter-summary{cursor:pointer}.active-filter{color:#2d69f6;border-bottom:1px solid #2D69F6}.total-summary{padding:5px 55px;border-right:1px solid #E9EBED;display:flex;flex-direction:column;row-gap:5px}.total-summary:last-child{border:none}.p-datepicker{left:-155px!important}.dashboard-container{background-color:#f5f8ff}.dashboard-container .c-route-page-container{font-family:Roboto,sans-serif}.dashboard-container .c-route-page-container .content{margin-top:1.14rem}.p-28{padding-top:28px;padding-bottom:28px}.search p{opacity:50%;padding-bottom:0!important;margin-bottom:0!important}.card .card-body{flex-shrink:0;border-radius:12px;background:var(--Primary-Base-White, #FFF);box-shadow:0 25.787px 53.723px 4.298px #5a52800d}.text-header{color:#000624;font-family:Roboto;font-size:18px;font-style:normal;font-weight:600;line-height:normal}\n"],encapsulation:2})),r})(),pathMatch:"full"}];let te=(()=>{var a;class r{}return a=r,(0,i.Z)(r,"\u0275fac",function(n){return new(n||a)}),(0,i.Z)(r,"\u0275mod",e.oAB({type:a})),(0,i.Z)(r,"\u0275inj",e.cJS({imports:[m.Bz.forChild(ee),m.Bz]})),r})();var oe=l(1911),ae=l(35024);let ne=(()=>{var a;class r{}return a=r,(0,i.Z)(r,"\u0275fac",function(n){return new(n||a)}),(0,i.Z)(r,"\u0275mod",e.oAB({type:a})),(0,i.Z)(r,"\u0275inj",e.cJS({imports:[y.o,q.g,te,oe.u,ae.IX,b.Zk,b.pT,C._8]})),r})()}}]);