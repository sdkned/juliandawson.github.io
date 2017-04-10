webpackJsonp([0],{100:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CONFIG={baseUrls:{jobs:"http://api.juliandawson.co.uk:31801/jobs",projects:"http://api.juliandawson.co.uk:31801/projects"}}},101:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),c=function(){function e(){}return e}();c=n([r.Component({selector:"no-content",template:o(112),host:{class:"[ c-page c-page--no-content ] o-layout-flex"}})],c),t.NoContentComponent=c},102:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),c=function(){function e(){}return e}();c=n([r.Component({selector:"spinner",template:o(113),host:{class:"[ c-page c-page--spinner ] o-layout-flex"}})],c),t.SpinnerComponent=c},103:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(54))},104:function(e,t,o){"use strict";function n(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}Object.defineProperty(t,"__esModule",{value:!0}),n(o(55)),n(o(105)),n(o(106))},105:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=o(4),s=o(55),i=function(){function e(e){this.jobsService=e}return e.prototype.getJobs=function(){var e=this;return this.jobsService.getJobs().subscribe(function(t){return e.jobs=t},function(e){console.log("Error occurred here"),console.log(e)},function(){console.log("Jobs retrieval completed")})},e.prototype.ngOnInit=function(){this.jobs=[],this.getJobs()},e}();i=n([c.Component({selector:"jobs",template:o(115),host:{class:"c-jobs c-band"}}),r("design:paramtypes",[s.JobsService])],i),t.JobsComponent=i},106:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),c=function(){function e(){}return e.prototype.transform=function(e,t){return e&&e.sort?e.sort(function(e,t){return e.start_date<t.start_date?1:e.start_date>t.start_date?-1:0}):e},e}();c=n([r.Pipe({name:"sortJobs"})],c),t.SortJobsPipe=c},107:function(e,t,o){"use strict";function n(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}Object.defineProperty(t,"__esModule",{value:!0}),n(o(56)),n(o(108))},108:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=o(4),s=o(56),i=function(){function e(e){this.projectsService=e}return e.prototype.getProjects=function(){var e=this;return this.projectsService.getProjects().subscribe(function(t){return e.projects=t},function(e){console.log("Error occurred here"),console.log(e)},function(){console.log("Projects retrieval completed")})},e.prototype.ngOnInit=function(){this.projects=[],this.getProjects()},e}();i=n([c.Component({selector:"projects",template:o(116),host:{class:"c-projects [ c-band c-band--tint ]"}}),r("design:paramtypes",[s.ProjectsService])],i),t.ProjectsComponent=i},109:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4),r=o(37),c=o(94);n.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(c.AppModule)},112:function(e,t){e.exports="<h1>Page Not Found</h1> "},113:function(e,t){e.exports='<div class="c-spinner"> <div class="jawn"></div> </div> '},114:function(e,t){e.exports='<div class="c-page-left o-layout-flex__item u-flex-1/2"> <div class="c-band"> <h1 class="o-headline">Hello, I\'m Julian Dawson.</h1> <p class="c-page-left__text">I’m an IT Management Consultant, Architect and Developer in South West England.</p> </div> <footer class="[ c-social c-social--large ] c-page-left__social"> <ul class="o-list-inline"> <li class="o-list-inline__item"> <a class="c-social__link" target="_blank" href="https://github.com/juliandawson"> <svg class="c-social__icon"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-github"></use> </svg> </a> </li> <li class="o-list-inline__item"> <a class="c-social__link" target="_blank" href="https://twitter.com/julianoutloud"> <svg class="c-social__icon"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter"></use> </svg> </a> </li> <li class="o-list-inline__item"> <a class="c-social__link" target="_blank" href="https://www.linkedin.com/in/jmdawson/"> <svg class="c-social__icon"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-linkedin"></use> </svg> </a> </li> <li class="o-list-inline__item"> <a class="c-social__link" target="_blank" href="https://www.behance.net/juliandawson"> <svg class="c-social__icon"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-behance"></use> </svg> </a> </li> </ul> </footer> </div> <div class="c-page-right o-layout-flex__item u-flex-1/2"> <header class="[ c-band c-band--highlight ]"> <h2 class="o-headline">Introduction</h2> <p class="c-text-ui">I work with small and middle-market enterprises in consulting engagements focused on IT Service Management, Enterprise and Solution Architecture, Information Security, and IT Project Delivery. I\'m a big fan of ITIL, CMMI, ISO, TOGAF and SCRUM. </p> <p class="c-text-ui">I also write code in HTML5, CSS3, PHP, TypeScript and JavaScript. I build apps with SQL and NoSQL databases and use front-end frameworks like Angular and React.</p> <p>Fancy a chat over coffee? Get in touch! <a href="mailto:coffee@juliandawson.co.uk">coffee@juliandawson.co.uk</a></p> </header> <jobs></jobs> <projects></projects> <footer class="[ c-band c-band--highlight ]"> <p>&copy; Julian Dawson. Made with <svg class="c-heart"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-heart"></use> </svg> in Bath.</p> </footer> </div> '},115:function(e,t){e.exports='<h2 class="o-headline">Work History</h2> <ul class="c-list-ui o-list-bare"> <li class="c-list-ui__item" *ngFor="let job of jobs | sortJobs"> <h3>{{job.role}}</h3> <p *ngIf="job.end_date; else elseJobDates">{{job.start_date | date:"MMM y"}} - {{job.end_date | date:"MMM y"}}</p> <ng-template #elseJobDates>{{job.start_date | date:"MMM y"}} - Present</ng-template> </li> </ul> '},116:function(e,t){e.exports='<h2 class="o-headline">Projects</h2> <ul class="c-project__content c-list-ui o-list-bare"> <li class="c-list-ui__item" *ngFor="let project of projects"> <div class="[ o-layout-flex o-layout-flex--space-between ]"> <a class="[ o-layout-flex__item o-layout-flex__item--fixed ]" href="{{project.url}}"> <h3>{{project.name}}</h3> </a> <ul class="o-list-inline [ o-layout-flex__item o-layout-flex__item--fixed ]"> <li class="o-list-inline__item" *ngFor="let social of project.social"> <a class="c-social__link" href="{{social.url}}" target="_blank"> <svg class="c-social__icon"> <use xmlns:xlink="http://www.w3.org/1999/xlink" attr.xlink:href="{{social.icon}}"></use> </svg> </a> </li> </ul> </div> <p>{{project.description}}</p> </li> </ul> '},26:function(e,t,o){"use strict";function n(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}Object.defineProperty(t,"__esModule",{value:!0}),n(o(100)),n(o(101)),n(o(102))},54:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),c=function(){function e(){}return e}();c=n([r.Component({selector:"home",template:o(114),host:{class:"[ c-page c-page--home ] o-layout-flex"}})],c),t.HomeComponent=c},55:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=o(4),s=o(25),i=o(0);o(41),o(40);var a=o(26),l=a.CONFIG.baseUrls.jobs,u=function(){function e(e){this.http=e}return e.prototype.getJobs=function(){return this.http.get(l).map(function(e){return e.json()}).catch(this.handleError)},e.prototype.getJob=function(e){return this.http.get(l+"/"+e).map(function(e){return e.json()}).catch(this.handleError)},e.prototype.handleError=function(e){console.error(e);var t="Error status code "+e.status+" at "+e.url;return i.Observable.throw(t)},e}();u=n([c.Injectable(),r("design:paramtypes",[s.Http])],u),t.JobsService=u},56:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var c=o(4),s=o(25),i=o(0);o(41),o(40);var a=o(26),l=a.CONFIG.baseUrls.projects,u=function(){function e(e){this.http=e}return e.prototype.getProjects=function(){return this.http.get(l).map(function(e){return e.json()}).catch(this.handleError)},e.prototype.getProject=function(e){return this.http.get(l+"/"+e).map(function(e){return e.json()}).catch(this.handleError)},e.prototype.handleError=function(e){console.error(e);var t="Error status code "+e.status+" at "+e.url;return i.Observable.throw(t)},e}();u=n([c.Injectable(),r("design:paramtypes",[s.Http])],u),t.ProjectsService=u},94:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),c=o(15),s=o(51),i=o(25),a=o(98),l=o(99),u=o(103),f=o(26),p=o(104),d=o(107),h=function(){function e(){}return e}();h=n([r.NgModule({imports:[c.BrowserModule,s.FormsModule,a.AppRoutingModule,i.HttpModule],declarations:[l.AppComponent,u.HomeComponent,f.NoContentComponent,f.SpinnerComponent,p.JobsComponent,d.ProjectsComponent,p.SortJobsPipe],providers:[p.JobsService,d.ProjectsService],bootstrap:[l.AppComponent]})],h),t.AppModule=h},98:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),c=o(52),s=o(54),i=o(26),a=[{path:"",component:s.HomeComponent},{path:"**",component:i.NoContentComponent}],l=function(){function e(){}return e}();l=n([r.NgModule({imports:[c.RouterModule.forRoot(a)],exports:[c.RouterModule]})],l),t.AppRoutingModule=l},99:function(e,t,o){"use strict";var n=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,o,s):r(t,o))||s);return c>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),c=function(){function e(){}return e}();c=n([r.Component({selector:"app",template:"<router-outlet></router-outlet>",host:{class:"c-app"}})],c),t.AppComponent=c}},[109]);
//# sourceMappingURL=app.bundle.js.map