"use strict";(self.webpackChunkbillit=self.webpackChunkbillit||[]).push([[680],{6627:(L,M,a)=>{a.d(M,{Hw:()=>j,Ps:()=>Q});var d=a(7716),s=a(2458),_=a(9490),S=a(8583),t=a(5917),F=a(205),D=a(5758),y=a(5319),b=a(3342),P=a(8002),B=a(5304),V=a(8939),H=a(8819),w=a(5257),Z=a(1841),T=a(9075);const N=["*"];function R(u){return Error(`Unable to find icon with the name "${u}"`)}function U(u){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${u}".`)}function A(u){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${u}".`)}class f{constructor(p,e,o){this.url=p,this.svgText=e,this.options=o}}let g=(()=>{class u{constructor(e,o,i,l){this._httpClient=e,this._sanitizer=o,this._errorHandler=l,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=i}addSvgIcon(e,o,i){return this.addSvgIconInNamespace("",e,o,i)}addSvgIconLiteral(e,o,i){return this.addSvgIconLiteralInNamespace("",e,o,i)}addSvgIconInNamespace(e,o,i,l){return this._addSvgIconConfig(e,o,new f(i,null,l))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,o,i,l){const n=this._sanitizer.sanitize(d.q3G.HTML,i);if(!n)throw A(i);return this._addSvgIconConfig(e,o,new f("",n,l))}addSvgIconSet(e,o){return this.addSvgIconSetInNamespace("",e,o)}addSvgIconSetLiteral(e,o){return this.addSvgIconSetLiteralInNamespace("",e,o)}addSvgIconSetInNamespace(e,o,i){return this._addSvgIconSetConfig(e,new f(o,null,i))}addSvgIconSetLiteralInNamespace(e,o,i){const l=this._sanitizer.sanitize(d.q3G.HTML,o);if(!l)throw A(o);return this._addSvgIconSetConfig(e,new f("",l,i))}registerFontClassAlias(e,o=e){return this._fontCssClassesByAlias.set(e,o),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){const o=this._sanitizer.sanitize(d.q3G.RESOURCE_URL,e);if(!o)throw U(e);const i=this._cachedIconsByUrl.get(o);return i?(0,t.of)(I(i)):this._loadSvgIconFromConfig(new f(e,null)).pipe((0,b.b)(l=>this._cachedIconsByUrl.set(o,l)),(0,P.U)(l=>I(l)))}getNamedSvgIcon(e,o=""){const i=C(o,e);let l=this._svgIconConfigs.get(i);if(l)return this._getSvgFromConfig(l);if(l=this._getIconConfigFromResolvers(o,e),l)return this._svgIconConfigs.set(i,l),this._getSvgFromConfig(l);const n=this._iconSetConfigs.get(o);return n?this._getSvgFromIconSetConfigs(e,n):(0,F._)(R(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?(0,t.of)(I(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe((0,P.U)(o=>I(o)))}_getSvgFromIconSetConfigs(e,o){const i=this._extractIconWithNameFromAnySet(e,o);if(i)return(0,t.of)(i);const l=o.filter(n=>!n.svgText).map(n=>this._loadSvgIconSetFromConfig(n).pipe((0,B.K)(h=>{const c=`Loading icon set URL: ${this._sanitizer.sanitize(d.q3G.RESOURCE_URL,n.url)} failed: ${h.message}`;return this._errorHandler.handleError(new Error(c)),(0,t.of)(null)})));return(0,D.D)(l).pipe((0,P.U)(()=>{const n=this._extractIconWithNameFromAnySet(e,o);if(!n)throw R(e);return n}))}_extractIconWithNameFromAnySet(e,o){for(let i=o.length-1;i>=0;i--){const l=o[i];if(l.svgText&&l.svgText.indexOf(e)>-1){const n=this._svgElementFromConfig(l),h=this._extractSvgIconFromSet(n,e,l.options);if(h)return h}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe((0,b.b)(o=>e.svgText=o),(0,P.U)(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?(0,t.of)(null):this._fetchIcon(e).pipe((0,b.b)(o=>e.svgText=o))}_extractSvgIconFromSet(e,o,i){const l=e.querySelector(`[id="${o}"]`);if(!l)return null;const n=l.cloneNode(!0);if(n.removeAttribute("id"),"svg"===n.nodeName.toLowerCase())return this._setSvgAttributes(n,i);if("symbol"===n.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(n),i);const h=this._svgElementFromString("<svg></svg>");return h.appendChild(n),this._setSvgAttributes(h,i)}_svgElementFromString(e){const o=this._document.createElement("DIV");o.innerHTML=e;const i=o.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){const o=this._svgElementFromString("<svg></svg>"),i=e.attributes;for(let l=0;l<i.length;l++){const{name:n,value:h}=i[l];"id"!==n&&o.setAttribute(n,h)}for(let l=0;l<e.childNodes.length;l++)e.childNodes[l].nodeType===this._document.ELEMENT_NODE&&o.appendChild(e.childNodes[l].cloneNode(!0));return o}_setSvgAttributes(e,o){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),o&&o.viewBox&&e.setAttribute("viewBox",o.viewBox),e}_fetchIcon(e){var o;const{url:i,options:l}=e,n=null!==(o=null==l?void 0:l.withCredentials)&&void 0!==o&&o;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==i)throw Error(`Cannot fetch icon from URL "${i}".`);const h=this._sanitizer.sanitize(d.q3G.RESOURCE_URL,i);if(!h)throw U(i);const r=this._inProgressUrlFetches.get(h);if(r)return r;const c=this._httpClient.get(h,{responseType:"text",withCredentials:n}).pipe((0,V.x)(()=>this._inProgressUrlFetches.delete(h)),(0,H.B)());return this._inProgressUrlFetches.set(h,c),c}_addSvgIconConfig(e,o,i){return this._svgIconConfigs.set(C(e,o),i),this}_addSvgIconSetConfig(e,o){const i=this._iconSetConfigs.get(e);return i?i.push(o):this._iconSetConfigs.set(e,[o]),this}_svgElementFromConfig(e){if(!e.svgElement){const o=this._svgElementFromString(e.svgText);this._setSvgAttributes(o,e.options),e.svgElement=o}return e.svgElement}_getIconConfigFromResolvers(e,o){for(let i=0;i<this._resolvers.length;i++){const l=this._resolvers[i](o,e);if(l)return G(l)?new f(l.url,null,l.options):new f(l,null)}}}return u.\u0275fac=function(e){return new(e||u)(d.LFG(Z.eN,8),d.LFG(T.H7),d.LFG(S.K0,8),d.LFG(d.qLn))},u.\u0275prov=d.Yz7({factory:function(){return new u(d.LFG(Z.eN,8),d.LFG(T.H7),d.LFG(S.K0,8),d.LFG(d.qLn))},token:u,providedIn:"root"}),u})();function I(u){return u.cloneNode(!0)}function C(u,p){return u+":"+p}function G(u){return!(!u.url||!u.options)}const O=(0,s.pj)(class{constructor(u){this._elementRef=u}}),Y=new d.OlP("mat-icon-location",{providedIn:"root",factory:function(){const u=(0,d.f3M)(S.K0),p=u?u.location:null;return{getPathname:()=>p?p.pathname+p.search:""}}}),x=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],q=x.map(u=>`[${u}]`).join(", "),z=/^url\(['"]?#(.*?)['"]?\)$/;let j=(()=>{class u extends O{constructor(e,o,i,l,n){super(e),this._iconRegistry=o,this._location=l,this._errorHandler=n,this._inline=!1,this._currentIconFetch=y.w.EMPTY,i||e.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(e){this._inline=(0,_.Ig)(e)}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){const o=this._cleanupFontValue(e);o!==this._fontSet&&(this._fontSet=o,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){const o=this._cleanupFontValue(e);o!==this._fontIcon&&(this._fontIcon=o,this._updateFontIconClasses())}_splitIconName(e){if(!e)return["",""];const o=e.split(":");switch(o.length){case 1:return["",o[0]];case 2:return o;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const e=this._elementsWithExternalReferences;if(e&&e.size){const o=this._location.getPathname();o!==this._previousPath&&(this._previousPath=o,this._prependPathToReferences(o))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();const o=e.querySelectorAll("style");for(let l=0;l<o.length;l++)o[l].textContent+=" ";const i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){const e=this._elementRef.nativeElement;let o=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();o--;){const i=e.childNodes[o];(1!==i.nodeType||"svg"===i.nodeName.toLowerCase())&&e.removeChild(i)}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const e=this._elementRef.nativeElement,o=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();o!=this._previousFontSetClass&&(this._previousFontSetClass&&e.classList.remove(this._previousFontSetClass),o&&e.classList.add(o),this._previousFontSetClass=o),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return"string"==typeof e?e.trim().split(" ")[0]:e}_prependPathToReferences(e){const o=this._elementsWithExternalReferences;o&&o.forEach((i,l)=>{i.forEach(n=>{l.setAttribute(n.name,`url('${e}#${n.value}')`)})})}_cacheChildrenWithExternalReferences(e){const o=e.querySelectorAll(q),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let l=0;l<o.length;l++)x.forEach(n=>{const h=o[l],r=h.getAttribute(n),c=r?r.match(z):null;if(c){let m=i.get(h);m||(m=[],i.set(h,m)),m.push({name:n,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){const[o,i]=this._splitIconName(e);o&&(this._svgNamespace=o),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,o).pipe((0,w.q)(1)).subscribe(l=>this._setSvgElement(l),l=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${o}:${i}! ${l.message}`))})}}}return u.\u0275fac=function(e){return new(e||u)(d.Y36(d.SBq),d.Y36(g),d.$8M("aria-hidden"),d.Y36(Y),d.Y36(d.qLn))},u.\u0275cmp=d.Xpm({type:u,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(e,o){2&e&&(d.uIk("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet),d.ekj("mat-icon-inline",o.inline)("mat-icon-no-color","primary"!==o.color&&"accent"!==o.color&&"warn"!==o.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[d.qOj],ngContentSelectors:N,decls:1,vars:0,template:function(e,o){1&e&&(d.F$t(),d.Hsn(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),u})(),Q=(()=>{class u{}return u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({imports:[[s.BQ],s.BQ]}),u})()},9670:(L,M,a)=>{a.d(M,{zC:()=>d,ib:()=>s,R$:()=>_});const d=[{name:"January",value:1},{name:"February",value:2},{name:"March",value:3},{name:"April",value:4},{name:"May",value:5},{name:"June",value:6},{name:"July",value:7},{name:"August",value:8},{name:"September",value:9},{name:"October",value:10},{name:"November",value:11},{name:"December",value:12}],s={order:{width:1e3,disableClose:!0,autoFocus:!1},item:{width:500,disableClose:!0},customer:{width:500,disableClose:!0},confirmationDialog:{width:400,disableClose:!0,autoFocus:!1},spinner:{disableClose:!0,position:{top:"0",right:"40px"},hasBackdrop:!1,panelClass:"spinner-dialog"},spinnerBig:{disableClose:!0,hasBackdrop:!0},changePassword:{width:500,disableClose:!0}},_={success:{horizontalPosition:"end",verticalPosition:"top",duration:2e3,panelClass:"success-snackbar"},error:{horizontalPosition:"end",verticalPosition:"top",duration:2e3,panelClass:"error-snackbar"},warning:{horizontalPosition:"end",verticalPosition:"top",duration:2e3,panelClass:"warning-snackbar"}}},3680:(L,M,a)=>{a.r(M),a.d(M,{DashboardModule:()=>l});var d=a(8583),s=a(3679),_=a(8295),S=a(2458),t=a(7716),F=a(521);const D=["*",[["mat-toolbar-row"]]],y=["*","mat-toolbar-row"],b=(0,S.pj)(class{constructor(n){this._elementRef=n}});let P=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275dir=t.lG2({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),n})(),B=(()=>{class n extends b{constructor(r,c,m){super(r),this._platform=c,this._document=m}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(t.SBq),t.Y36(F.t4),t.Y36(d.K0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["mat-toolbar"]],contentQueries:function(r,c,m){if(1&r&&t.Suo(m,P,5),2&r){let v;t.iGM(v=t.CRH())&&(c._toolbarRows=v)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(r,c){2&r&&t.ekj("mat-toolbar-multiple-rows",c._toolbarRows.length>0)("mat-toolbar-single-row",0===c._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[t.qOj],ngContentSelectors:y,decls:2,vars:0,template:function(r,c){1&r&&(t.F$t(D),t.Hsn(0),t.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),n})(),H=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[S.BQ],S.BQ]}),n})();var w=a(1095),Z=a(6627),T=a(4885),N=a(7001),R=a(9983),E=a(3738),U=a(1436),A=a(2238),f=a(4655),g=a(4762),W=a(7165),J=a(8312),I=a(9067),C=a(9670),G=a(1841),O=a(7048);let Y=(()=>{class n{constructor(r,c,m,v){this.http=r,this.router=c,this._snackBar=m,this.dialogService=v,this.shopUrl=J.a.shopUrl}initShops(){return(0,g.mG)(this,void 0,void 0,function*(){if(!I.cQ.storageHelper.shopId||!this.currentShop){const r=J.a.allShopsUrl,c=this.dialogService.openDialog(T.$g,C.ib.spinner);return this.allShops=yield this.http.get(r).toPromise(),c.close(),this.allShops&&this.allShops.length?(this.setDefaultShop(),!0):(this.router.navigateByUrl("/dashboard/shop"),!1)}return!0})}setDefaultShop(){I.cQ.storageHelper.shopId=this.allShops[0]._id,this.currentShop=this.allShops[0]}addShop(r){return(0,g.mG)(this,void 0,void 0,function*(){const c=this.dialogService.openDialog(T.$g,C.ib.spinner),m=yield this.http.post(this.shopUrl,r).toPromise();c.close(),I.cQ.storageHelper.shopId=m._id,this.currentShop=m,this.router.navigateByUrl("/dashboard/orders")})}getCurrentShop(){return(0,g.mG)(this,void 0,void 0,function*(){if(this.currentShop)return this.currentShop;if(I.cQ.storageHelper.shopId){const r=`${this.shopUrl}/${I.cQ.storageHelper.shopId}`,c=this.dialogService.openDialog(T.$g,C.ib.spinner),m=yield this.http.get(r).toPromise();return c.close(),m}})}updateShop(r,c){return(0,g.mG)(this,void 0,void 0,function*(){const m=this.dialogService.openDialog(T.$g,C.ib.spinner),v=yield this.http.patch(`${this.shopUrl}/${r}`,c).toPromise();m.close(),this.currentShop=v,this.router.navigateByUrl("/dashboard/orders"),this._snackBar.open("Shop updated successfully!",null,C.R$.success)})}getShopName(){return this.currentShop.name}}return n.\u0275fac=function(r){return new(r||n)(t.LFG(G.eN),t.LFG(f.F0),t.LFG(N.ux),t.LFG(O.x))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var K=a(4416);let x=(()=>{class n{constructor(r,c,m,v){this.http=r,this.router=c,this.dialogService=m,this._snackBar=v,this.userUrl=I.ap.userUrl}logout(){return(0,g.mG)(this,void 0,void 0,function*(){const r=I.ap.logoutUrl,c=this.dialogService.openDialog(T.$g,C.ib.spinner);yield this.http.post(r,null).toPromise(),c.close(),I.cQ.storageHelper.clear(),this.router.navigate(["auth"]),location.reload()})}changePassword(r,c){return(0,g.mG)(this,void 0,void 0,function*(){const m=I.ap.loginUrl,v={username:I.cQ.storageHelper.userInfo.username,password:r},k=this.dialogService.openDialog(T.$g,C.ib.spinner);(yield this.http.post(m,v).toPromise())?(yield this.http.patch(this.userUrl,c).toPromise(),k.close(),this._snackBar.open("Password Changed Successfully!",null,C.R$.success)):(k.close(),this._snackBar.open("Invalid Current Password!",null,C.R$.error))})}}return n.\u0275fac=function(r){return new(r||n)(t.LFG(G.eN),t.LFG(f.F0),t.LFG(O.x),t.LFG(N.ux))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function $(n,h){if(1&n){const r=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){return t.CHM(r),t.oxw().backToDashboard()}),t.TgZ(1,"mat-icon"),t._uU(2,"first_page"),t.qZA(),t.qZA()}}function q(n,h){if(1&n){const r=t.EpF();t.TgZ(0,"mat-card",10),t.TgZ(1,"mat-card-header"),t.TgZ(2,"mat-card-title"),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"mat-card-content"),t.TgZ(5,"form",11),t.TgZ(6,"div",12),t.TgZ(7,"mat-form-field",13),t.TgZ(8,"mat-label"),t._uU(9,"Name"),t.qZA(),t._UZ(10,"input",14),t.qZA(),t.qZA(),t.TgZ(11,"div",12),t.TgZ(12,"mat-form-field",15),t.TgZ(13,"mat-label"),t._uU(14,"Mobile"),t.qZA(),t._UZ(15,"input",16),t.qZA(),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"mat-form-field",13),t.TgZ(18,"mat-label"),t._uU(19,"Address"),t.qZA(),t._UZ(20,"textarea",17),t.qZA(),t.qZA(),t.TgZ(21,"div",12),t.TgZ(22,"mat-form-field",13),t.TgZ(23,"mat-label"),t._uU(24,"Email"),t.qZA(),t._UZ(25,"input",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"mat-card-actions"),t.TgZ(27,"button",19),t.NdJ("click",function(){return t.CHM(r),t.oxw().executeAction()}),t._uU(28),t.qZA(),t.qZA(),t.qZA()}if(2&n){const r=t.oxw();t.xp6(3),t.hij(" ",r.formType," shop "),t.xp6(2),t.Q6J("formGroup",r.shopForm),t.xp6(22),t.Q6J("disabled",!r.enableAction()),t.xp6(1),t.hij(" ",r.formType," ")}}let z=(()=>{class n{constructor(r,c,m,v){this.shopService=r,this.helperService=c,this.userService=m,this.router=v,this.isLoading=!0}ngOnInit(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.initForm(),this.isLoading=!1})}enableAction(){return this.shopForm.valid&&this.shopForm.dirty}executeAction(){"Add"===this.formType?this.addShop():this.updateShop()}backToDashboard(){this.router.navigateByUrl("/dashboard/orders")}logout(){this.userService.logout()}initForm(){return(0,g.mG)(this,void 0,void 0,function*(){this.currentShop=yield this.shopService.getCurrentShop(),this.currentShop?(this.shopForm=new s.cw({name:new s.NI(this.currentShop.name,[s.kI.required.bind(this),W.F]),mobile:new s.NI(this.currentShop.mobile,s.kI.required.bind(this)),address:new s.NI(this.currentShop.address),email:new s.NI(this.currentShop.email,s.kI.email.bind(this))}),this.formType="Update"):(this.shopForm=new s.cw({name:new s.NI(null,[s.kI.required.bind(this),W.F]),mobile:new s.NI(null,s.kI.required.bind(this)),address:new s.NI(null),email:new s.NI(null,s.kI.email.bind(this))}),this.formType="Add")})}addShop(){return(0,g.mG)(this,void 0,void 0,function*(){const r=this.getFormData();this.helperService._removeEmptyKeys(r),yield this.shopService.addShop(r)})}updateShop(){return(0,g.mG)(this,void 0,void 0,function*(){const r=this.helperService._removeNonUpdatedData(this.currentShop,this.getFormData());this.helperService._removeEmptyKeys(r),Object.keys(r).length&&(yield this.shopService.updateShop(this.currentShop._id,r))})}getFormData(){return this.helperService._clone(this.shopForm.value)}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(Y),t.Y36(K.W),t.Y36(x),t.Y36(f.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop-form"]],decls:14,vars:2,consts:[["color","primary"],["src","assets/images/common/logo.png","alt","",1,"toolbar-icon"],[1,"mar-hr-16"],[1,"spacer"],["mat-icon-button","","matTooltip","Back to orders",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Logout",3,"click"],[1,"full-height","flex-centered-con","flex-col","pad-32","mar-top-32"],["color","primary",1,"shop-icon","pad-right-32","mar-right-32"],["class","shop-form-container pad-top-32 mar-top-32",4,"ngIf"],["mat-icon-button","","matTooltip","Back to orders",3,"click"],[1,"shop-form-container","pad-top-32","mar-top-32"],[3,"formGroup"],[1,"mar-vr-16"],["appearance","fill",1,"full-width"],["matInput","","placeholder","Ex: A1 Restaurant","formControlName","name","required",""],["appearance","fill"],["matInput","","type","number","formControlName","mobile","required",""],["matInput","","formControlName","address","placeholder","Ex: Tesla Road, 160022"],["matInput","","type","email","placeholder","Ex. nikola@tesla.com","formControlName","email"],["mat-raised-button","","color","primary",1,"add-shop-button",3,"disabled","click"]],template:function(r,c){1&r&&(t.TgZ(0,"mat-toolbar",0),t._UZ(1,"img",1),t.TgZ(2,"span",2),t._uU(3,"Bill.it"),t.qZA(),t._UZ(4,"a",3),t.YNc(5,$,3,0,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return c.logout()}),t.TgZ(7,"mat-icon"),t._uU(8,"logout"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",6),t.TgZ(10,"div"),t.TgZ(11,"mat-icon",7),t._uU(12,"storefront"),t.qZA(),t.qZA(),t.YNc(13,q,29,4,"mat-card",8),t.qZA()),2&r&&(t.xp6(5),t.Q6J("ngIf","Update"===c.formType),t.xp6(8),t.Q6J("ngIf",!c.isLoading))},directives:[B,d.O5,w.lW,U.gM,Z.Hw,E.a8,E.dk,E.n5,E.dn,s._Y,s.JL,s.sg,_.KE,_.hX,R.Nt,s.Fj,s.JJ,s.u,s.Q7,s.wV,E.hq],styles:[".shop-form-container[_ngcontent-%COMP%]{width:350px}.add-shop-button[_ngcontent-%COMP%]{float:right}.shop-icon[_ngcontent-%COMP%]{font-size:125px!important}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.toolbar-icon[_ngcontent-%COMP%]{height:30px}"]}),n})();var j=a(7176);let Q=(()=>{class n{constructor(r,c){this.dialogRef=r,this.userService=c}ngOnInit(){this.initForm()}initForm(){this.passwordForm=new s.cw({currentPassword:new s.NI(null,s.kI.required.bind(this)),newPassword:new s.NI(null,s.kI.required.bind(this)),retypeNewPassword:new s.NI(null,s.kI.required.bind(this))})}enableAction(){return this.passwordForm.valid&&this.passwordForm.dirty&&this.compareNewPasswords()}changePassword(){const r=this.passwordForm.get("currentPassword").value,c={password:this.passwordForm.get("newPassword").value};this.userService.changePassword(r,c),this.closeDialog()}compareNewPasswords(){return this.passwordForm.get("newPassword").value===this.passwordForm.get("retypeNewPassword").value}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(A.so),t.Y36(x))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-change-password-form"]],decls:24,vars:2,consts:[["mat-dialog-title",""],[3,"formGroup"],[1,"mar-vr-16"],["appearance","fill",1,"full-width"],["matInput","","formControlName","currentPassword","type","password","required",""],["matInput","","formControlName","newPassword","type","password","required",""],["matInput","","formControlName","retypeNewPassword","type","password","required",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(r,c){1&r&&(t.TgZ(0,"h2",0),t._uU(1,"Change Password"),t.qZA(),t.TgZ(2,"mat-dialog-content"),t.TgZ(3,"form",1),t.TgZ(4,"div",2),t.TgZ(5,"mat-form-field",3),t.TgZ(6,"mat-label"),t._uU(7,"Current Password"),t.qZA(),t._UZ(8,"input",4),t.qZA(),t.qZA(),t.TgZ(9,"div",2),t.TgZ(10,"mat-form-field",3),t.TgZ(11,"mat-label"),t._uU(12,"New Password"),t.qZA(),t._UZ(13,"input",5),t.qZA(),t.qZA(),t.TgZ(14,"div",2),t.TgZ(15,"mat-form-field",3),t.TgZ(16,"mat-label"),t._uU(17,"Retype New Password"),t.qZA(),t._UZ(18,"input",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"mat-dialog-actions",7),t.TgZ(20,"button",8),t._uU(21,"Cancel"),t.qZA(),t.TgZ(22,"button",9),t.NdJ("click",function(){return c.changePassword()}),t._uU(23," Change "),t.qZA(),t.qZA()),2&r&&(t.xp6(3),t.Q6J("formGroup",c.passwordForm),t.xp6(19),t.Q6J("disabled",!c.enableAction()))},directives:[A.uh,A.xY,s._Y,s.JL,s.sg,_.KE,_.hX,R.Nt,s.Fj,s.JJ,s.u,s.Q7,A.H8,w.lW,A.ZT],styles:[""]}),n})();function u(n,h){if(1&n){const r=t.EpF();t.TgZ(0,"a",11),t.NdJ("click",function(){const v=t.CHM(r).$implicit;return t.oxw().updateRoute(v)}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&n){const r=h.$implicit,c=t.oxw();t.ekj("current-route",r===c.selectedRoute),t.Q6J("routerLink",r),t.xp6(1),t.Oqu(t.lcZ(2,4,r))}}function p(n,h){1&n&&(t.TgZ(0,"div",12),t._UZ(1,"router-outlet"),t.qZA())}const o=[{path:"",component:(()=>{class n{constructor(r,c,m,v){this.router=r,this.shopService=c,this.userService=m,this.dialogService=v,this.dashboardRoutes=["orders","customers","items","reports"],this.selectedRoute="orders",this.isLoading=!0,this.shopName=""}ngOnInit(){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.shopService.initShops())&&(this.shopName=this.shopService.getShopName(),this.selectedRoute=this.router.url.split("/").pop()),this.isLoading=!1})}updateRoute(r){this.selectedRoute=r}logout(){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.dialogService.openDialog(j.z,Object.assign(Object.assign({},C.ib.confirmationDialog),{data:{type:"confirmation",action:"logout",entity:"user"}})).afterClosed().toPromise())&&this.userService.logout()})}editShop(){this.router.navigateByUrl("dashboard/shop")}changePassword(){this.dialogService.openDialog(Q,C.ib.changePassword)}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(f.F0),t.Y36(Y),t.Y36(x),t.Y36(O.x))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:19,vars:3,consts:[["color","primary"],["src","assets/images/common/logo.png","alt","",1,"toolbar-icon"],[1,"mar-hr-16"],[1,"title-separator"],[1,"mar-hr-16","brand-name"],["mat-button","","class","toolbar-buttons",3,"routerLink","current-route","click",4,"ngFor","ngForOf"],[1,"spacer"],["mat-icon-button","","matTooltip","Update Shop",3,"click"],["mat-icon-button","","matTooltip","Change Password",3,"click"],["mat-icon-button","","matTooltip","Logout",3,"click"],["class","dashboard-container full-height pad-32",4,"ngIf"],["mat-button","",1,"toolbar-buttons",3,"routerLink","click"],[1,"dashboard-container","full-height","pad-32"]],template:function(r,c){1&r&&(t.TgZ(0,"mat-toolbar",0),t._UZ(1,"img",1),t.TgZ(2,"span",2),t._uU(3,"Bill.it"),t.qZA(),t._UZ(4,"div",3),t.TgZ(5,"span",4),t._uU(6),t.qZA(),t.YNc(7,u,3,6,"a",5),t._UZ(8,"a",6),t.TgZ(9,"button",7),t.NdJ("click",function(){return c.editShop()}),t.TgZ(10,"mat-icon"),t._uU(11,"storefront"),t.qZA(),t.qZA(),t.TgZ(12,"button",8),t.NdJ("click",function(){return c.changePassword()}),t.TgZ(13,"mat-icon"),t._uU(14,"key"),t.qZA(),t.qZA(),t.TgZ(15,"button",9),t.NdJ("click",function(){return c.logout()}),t.TgZ(16,"mat-icon"),t._uU(17,"logout"),t.qZA(),t.qZA(),t.qZA(),t.YNc(18,p,2,0,"div",10)),2&r&&(t.xp6(6),t.Oqu(c.shopName),t.xp6(1),t.Q6J("ngForOf",c.dashboardRoutes),t.xp6(11),t.Q6J("ngIf",!c.isLoading))},directives:[B,d.sg,w.lW,U.gM,Z.Hw,d.O5,w.zs,f.yS,f.lC],pipes:[d.rS],styles:[".dashboard-container[_ngcontent-%COMP%]{width:80%;margin:auto}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.current-route[_ngcontent-%COMP%]{background-color:#0003}.toolbar-buttons[_ngcontent-%COMP%]:hover{background-color:#0006!important}.toolbar-icon[_ngcontent-%COMP%]{height:30px}.title-separator[_ngcontent-%COMP%]{height:18px;width:2px;background-color:#fff;margin:0 2px}.brand-name[_ngcontent-%COMP%]{color:gold}"]}),n})(),children:[{path:"",redirectTo:"orders",pathMatch:"full"},{path:"orders",loadChildren:()=>Promise.all([a.e(455),a.e(40),a.e(592),a.e(430)]).then(a.bind(a,8430)).then(n=>n.OrdersModule)},{path:"customers",loadChildren:()=>Promise.all([a.e(455),a.e(592),a.e(12)]).then(a.bind(a,12)).then(n=>n.CustomersModule)},{path:"items",loadChildren:()=>Promise.all([a.e(455),a.e(592),a.e(124)]).then(a.bind(a,8124)).then(n=>n.ItemsModule)},{path:"reports",loadChildren:()=>Promise.all([a.e(40),a.e(549)]).then(a.bind(a,6549)).then(n=>n.ReportsModule)}]},{path:"shop",component:z,pathMatch:"full"},{path:"**",redirectTo:"",pathMatch:"full"}];let i=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.Bz.forChild(o)],f.Bz]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,i,s.UX,_.lN,R.c,Z.Ps,w.ot,H,T.Cq,N.ZX,E.QW,U.AV,A.Is]]}),n})()},7176:(L,M,a)=>{a.d(M,{z:()=>t});var d=a(2238),s=a(7716),_=a(1095),S=a(8583);let t=(()=>{class F{constructor(y){this.dialogData=y}ngOnInit(){this.type=this.dialogData.type,this.entity=this.dialogData.entity,this.action=this.dialogData.action}}return F.\u0275fac=function(y){return new(y||F)(s.Y36(d.WI))},F.\u0275cmp=s.Xpm({type:F,selectors:[["app-confirmation-dialog"]],decls:13,vars:13,consts:[["mat-dialog-title",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",3,"mat-dialog-close","color"]],template:function(y,b){1&y&&(s.TgZ(0,"h2",0),s._uU(1),s.ALo(2,"titlecase"),s.ALo(3,"titlecase"),s.qZA(),s.TgZ(4,"mat-dialog-content"),s.TgZ(5,"span"),s._uU(6),s.qZA(),s.qZA(),s.TgZ(7,"mat-dialog-actions",1),s.TgZ(8,"button",2),s._uU(9,"Cancel"),s.qZA(),s.TgZ(10,"button",3),s._uU(11),s.ALo(12,"titlecase"),s.qZA(),s.qZA()),2&y&&(s.xp6(1),s.AsE("",s.lcZ(2,7,b.action)," ",s.lcZ(3,9,b.entity),""),s.xp6(5),s.AsE("Are you sure you want to ",b.action," this ",b.entity,"?"),s.xp6(4),s.Q6J("mat-dialog-close",!0)("color","warning"===b.type?"warn":"primary"),s.xp6(1),s.hij(" ",s.lcZ(12,11,b.action)," "))},directives:[d.uh,d.xY,d.H8,_.lW,d.ZT],pipes:[S.rS],styles:[""]}),F})()},7165:(L,M,a)=>{function d(){return _=>""==(!_.value||_.value.trim())?{required:!0}:null}a.d(M,{F:()=>d})}}]);