var jq = document.createElement('script');
jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.js";
document.querySelector('head').appendChild(jq);
var black_bar_jQuery = null;
jq.onload = initialize_jQuery_black_bar;
var ExecuteWebSiteSearchQuery = null;
var appdrawermover = null;
var appdrawermout = null;

// Comment

function initialize_jQuery_black_bar(){
	black_bar_jQuery = jQuery.noConflict(true);
	black_bar_jQuery(document).mouseup(function (e)
	{
		var m = function (a, b) {
			for (var c = a.length, d = 0; d < c; d++) - 1 < a[d].className.indexOf("ucfhb-gold") ? a[d].className = "ucfhb-gold " + b : a[d].className = b
		};	
		var app_menu = black_bar_jQuery("#Drawer");
		var imgsrc = black_bar_jQuery("#ucf-research-apps");
		d = document.getElementById("ucfhb-signon-logo1");
		b = document.getElementById("ucfhb-right")
	
		if (!app_menu.is(e.target) && !imgsrc.is(e.target) // if the target of the click isn't the container...
			&& app_menu.has(e.target).length === 0) // ... nor a descendant of the container
		{
			black_bar_jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer.png");
			document.getElementById("ucf-research-apps").onmouseout = function(){
				  black_bar_jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer.png");
			};
			// black_bar_jQuery(app_button2).css("color", "#FFC904");

			m(shiftLeftElems, ""), searchField.removeAttribute("tabindex"), searchBtn.removeAttribute("tabindex");
		}
	});
	var searchResultsTarget = "content";
	var searchInputId = "ucfhb-search-field"; 
	var searchForm	= "ucfhb-search-form";
	var risappsaddress = "http://apps.research.ucf.edu/";
	var searchControl;

	if (window.location.href.indexOf("dev") > -1) {
		var address = "//header.dev.research.ucf.edu/";
	} else {
		var address = "//header.research.ucf.edu/";
	}
  

	ExecuteWebSiteSearchQuery = function(){
		document.getElementById('ucfhb-search-form').submit();
		document.getElementById('ucfhb-search-form').target="_blank";	
	}
	
	appdrawermover = function(){
		black_bar_jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer_hover.png");
		document.getElementById("ucf-research-apps").setAttribute("mouseoutflag","1");
	}
	
	appdrawermout = function(){
		black_bar_jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer.png");
	}

	var _gaq = _gaq || [];
	_gaq.push(["ucfhb._setAccount", "UA-1658069-22"]);
	_gaq.push(["ucfhb._setDomainName", "none"]);
	_gaq.push(["ucfhb._trackPageview"]);
	(function () {
		var f = document.createElement("script");
		f.type = "text/javascript";
		f.async = !0;
		f.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
		var l = document.getElementsByTagName("script")[0];
		l.parentNode.insertBefore(f, l)
	})();
	var ucfhbTrackAction = function (f, l, r) {
		null !== l && null !== r ? (_gaq.push(["ucfhb._trackEvent", "Header", l, r]), window.setTimeout(function () {
			document.location = f
		}, 200)) : document.location = f
	},
		ucfhbAssignTrackingListener = function (f, l, r, s, u) {
			l = String(l);
			s = s || null;
			u = u || null;
			f.addEventListener ? f.addEventListener(l, function (f) {
				f.preventDefault();
				ucfhbTrackAction(r, s, u)
			}, !1) : f.attachEvent("on" + l, function (f) {
				ucfhbTrackAction(r, s, u);
				return !1
			})
		};
		(function () {
			function f() {
				function c(b) {
					var a = 0,
						e;
					for (e in b) b.hasOwnProperty(e) && a++;
					return a;
				}
				function a(b) {
					return b.replace(/(<([^>]+)>)/ig, "")
				}
				var b = this;
				this.searchService = v;
				
				this.searchForm = document.getElementById("ucfhb-search-form");
				this.searchField = document.getElementById("ucfhb-search-field");

				var d;				
				
				this.searchOnKeyUp = function (a, c) {
					clearTimeout(d);
				};
				this.initialize = function () {
					var c = null,
						d = null;
					b.searchField.onfocus = function () {
						c = a(b.searchField.value);
						d = b.searchService + c;
						"" !== b.searchField.value && null !== b.searchField.value && b.searchOnKeyUp(c, d)
					};
				}
			}
			var l = "search",
				u = window.location.protocol + address+"styles/bar.css",
				A = window.location.protocol + "//universityheader.ucf.edu/bar/css/bar-bootstrap.css",
				v = window.location.protocol + "//universityheader.ucf.edu/bar/data/?search=",
				y = !1,
				z = null;
				document.getElementById("ucfhb-script") && (z = document.getElementById("ucfhb-script"), -1 < z.getAttribute("src").indexOf("use-bootstrap-overrides=1") && (y = !0));
			Array.prototype.indexOf || (Array.prototype.indexOf = function (c) {
				if (null == this) throw new TypeError;
		
				var a, f = Object(this),
					p = f.length >>> 0;
				if (0 === p) return -1;
				a = 0;
				1 < arguments.length && (a = Number(arguments[1]), a != a ? a = 0 : 0 != a && Infinity != a && -Infinity != a && (a = (0 < a || -1) * Math.floor(Math.abs(a))));
				if (a >= p) return -1;
				for (a = 0 <= a ? a : Math.max(p - Math.abs(a), 0); a < p; a++) if (a in f && f[a] === c) return a;
				return -1
			});
			var C = function (c, a, f) {
				var p = document.getElementsByTagName("head")[0],
					b = document.createElement("script");
				b.setAttribute("src", v + c);
				b.setAttribute("type", "text/javascript");
				b.id = "ucfhb-json";
				p.appendChild(b);
				"undefined" !== typeof a && null !== a && setTimeout(function () {
					a();
				}, f)
			};
						var D = function () {
					(new f).initialize();
					(function () {
						var c = document.getElementById("ucfhb"),
							a = document.getElementById("ucfhb-mobile-toggle"),
							f = document.getElementById("ucfhb-logo"),
							p = f.firstElementChild || f.firstChild,
							b = document.getElementById("ucfhb-right"),
							d = document.getElementById("ucfhb-signon-logo1");
							d2 = document.getElementById("ucfhb-signon-logo2");
						document.getElementById("ucfhb-signon");
						var l = document.getElementById("ucfhb-search");
						document.getElementById("ucfhb-search-form");
						searchField = document.getElementById("ucfhb-search-field");
						searchBtn = document.getElementById("ucfhb-search-submit");
						searchMinimal = document.getElementById("ucfhb-search-minimal");
						
						shiftLeftElems = [d];
						mobileToggleElems = [c, a, f, b];
						var m = function (a, b) {
							for (var c = a.length, d = 0; d < c; d++) - 1 < a[d].className.indexOf("ucfhb-gold") ? a[d].className = "ucfhb-gold " + b : a[d].className = b
						};

						black_bar_jQuery(d2).attr("clicked", 0);
		
						d.onclick = function() {
								document.getElementById("Drawer").style.marginTop = "-45px";
							  if(document.getElementById("ucf-research-apps").getAttribute("mouseoutflag") == "1"){
								  black_bar_jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer_hover.png");
								  document.getElementById("ucf-research-apps").onmouseout = function(){
									  
								  };
								  document.getElementById("ucf-research-apps").setAttribute("mouseoutflag","0");
								  m(shiftLeftElems, "ucfhb-shiftleft"), searchField.setAttribute("tabindex", "-1"), searchBtn.setAttribute("tabindex", "-1");
							  } else{
								  black_bar_jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer.png");
								  document.getElementById("ucf-research-apps").onmouseout = function(){
										black_bar_jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer.png");
								  };
								  document.getElementById("ucf-research-apps").setAttribute("mouseoutflag","1");
								  m(shiftLeftElems, ""), searchField.removeAttribute("tabindex"), searchBtn.removeAttribute("tabindex") ;
							  }
						};
						//Code for 2nd menu button
						var count;
						d2.onclick = function() {
							document.getElementById("Drawer").style.marginTop = "0px";
							if (this.getAttribute("clicked") == 0){
								black_bar_jQuery(this).css("color", "#F5D769");
								m(shiftLeftElems, "ucfhb-shiftleft"), searchField.setAttribute("tabindex", "-1"), searchBtn.setAttribute("tabindex", "-1");
								this.setAttribute("clicked", 1);
							}
							else{
								black_bar_jQuery(this).css("color", "#FFC904");
								m(shiftLeftElems, ""), searchField.removeAttribute("tabindex"), searchBtn.removeAttribute("tabindex") ;
								this.setAttribute("clicked", 0);
							}
						}
						
						searchMinimal.onclick = function () {
							m(shiftLeftElems, "");
							searchField.focus();
							searchField.removeAttribute("tabindex");
							searchBtn.removeAttribute("tabindex")
						};
						a.onclick = function () {
							if (a.className == "ucfhb-mobileslide" ){
								m(mobileToggleElems, "");
								black_bar_jQuery(this).css("color", "#FFC904");
							}
							else {
								m(mobileToggleElems, "ucfhb-mobileslide");
								black_bar_jQuery(this).css("color", "#F5D769");
							}

							//"ucfhb-mobileslide" == a.className ? m(mobileToggleElems, "") : m(mobileToggleElems, "ucfhb-mobileslide");
							d2.setAttribute("clicked",0);
						};
		
					})()
				};
			(function (c, a) {
				var f = !1,
					l = !0,
					b = c.document,
					d = b.documentElement,
					r = b.addEventListener ? "addEventListener" : "attachEvent",
					m = b.addEventListener ? "removeEventListener" : "detachEvent",
					e = b.addEventListener ? "" : "on",
					g = function (d) {
						if ("readystatechange" != d.type || "complete" == b.readyState)("load" == d.type ? c : b)[m](e + d.type, g, !1), !f && (f = !0) && a.call(c, d.type || d)
					},
					s = function () {
						try {
							d.doScroll("left")
						} catch (a) {
							setTimeout(s, 50);
							return
						}
						g("poll")
					};
				if ("complete" == b.readyState) a.call(c, "lazy");
				else {
					if (b.createEventObject && d.doScroll) {
						try {
							l = !c.frameElement
						} catch (h) {}
						l && s()
					}
					b[r](e + "DOMContentLoaded", g, !1);
					b[r](e + "readystatechange", g, !1);
					c[r](e + "load", g, !1)
				}
			})(window, function () {
				var c = document.getElementsByTagName("head")[0],
					a = document.createElement("link"),
					fa = document.createElement("link");
				a.setAttribute("href", u);
				a.setAttribute("rel", "stylesheet");
				a.setAttribute("type", "text/css");
				c.appendChild(a);

				u = "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
				fa.setAttribute("href", u);
				fa.setAttribute("rel", "stylesheet");
				fa.setAttribute("type", "text/css");
				c.appendChild(fa);
				c = null;
				document.getElementById("ucfhb") ? c = document.getElementById("ucfhb") : (c = document.createElement("div"), c.id = "ucfhb", document.body.insertBefore(c, document.body.firstChild));
				c.className += "preload";
				
			c.innerHTML = [
				'<div id="ucfhb-wrapper">\n' +
					'<div id="ucfhb-inner" style="display:none; height:50px;">\n' +
						'<div id="ucfhb-left" >\n' +
							//Menu bar buttons
							'<div id="ucfhb-button-menu">\n' +
							//Bring down RIS bar for search
							'<button id="ucfhb-signon-logo2" style="padding-right:10px;border:none;margin:0px;color:#FFC904;background-color:#000;float:right;" type="button">\n' +
								'<span style="font-size:18px;" class="fa fa-th" ></span>\n' +
							'</button>\n' +
							'<button id="ucfhb-mobile-toggle" style="border:none;margin:0px;color:#FFC904;background-color:#000;" type="button">\n' +
								'<span style="font-size:medium;" class="fa fa-search" ></span>\n' +
							'</button>\n' +
							'</div>\n' +
							//New App Hover
							'<div id="ucfhb-logo">' +
								'<div id="ucfhb-logo-main" style="max-width:100%;height:auto;position:fixed;width:77%;" class="hidden-md hidden-sm hidden-lg">\n' +
									'<img src="'+address+'/Images/ucf_research_logo.png" usemap="#logos" style="height:auto;">\n' +
										'<map name="logos"><area shape="rect" coords="0,0,321,27" href="http://www.ucf.edu/" title="UCF Main Site" alt="UCF Main Site">\n' +
										'<area shape="rect" coords="0,0,407,27" href="http://www.research.ucf.edu/" title="ORC Main Site" alt="ORC Main Site"></map>\n' +
								'</div>\n' +
								'<div id="ucfhb-logo-main" style="position: fixed;" class="hidden-xs">\n' +
									'<img src="'+address+'/Images/ucf_research_logo.png" usemap="#logos">\n' +
										'<map name="logos"><area shape="rect" coords="0,0,321,27" href="http://www.ucf.edu/" title="UCF Main Site" alt="UCF Main Site">\n' +
										'<area shape="rect" coords="0,0,407,27" href="http://www.research.ucf.edu/" title="ORC Main Site" alt="ORC Main Site"></map>\n' +
								'</div>\n' + 
								'</div>\n' +
						'</div>\n' +
						'<div id="ucfhb-services" style="z-index:9;">\n' +
							'<div id="Drawer" style="margin-top:-45px;">' +
							'<center>' +
							'<div class="arrow-up">' +
							'</div>' +
							'</center>\n\n' +
							'<div id="list">\n' +
								'<ul>\n' +
									'<li >\n<a href="https://ucf4.huronresearchsuite.com/" target="_blank"><img src="'+address+'images/huron_grants.png" width="135" height="60"/></a>\n</li>\n' +
									'<li >\n<a href="https://ucf2.huronresearchsuite.com/" target="_blank"><img src="'+address+'images/huron_agreements.png" width="135" height="60"/></a>\n</li>\n' +
									// '<li >\n<a href="https://argis.research.ucf.edu/index.cfm?fuseaction=home.main&Content=home.adminlogin" target="_blank"><img src="'+address+'images/ldg_argis.png" width="90" height="45"/></a>\n</li>\n' +
									// '<li class="removeSidebar"><a href="https://tera.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_tera.png" width="90" height="45"/></a>\n</li>\n' +
								'</ul>\n' +
								'<ul>\n' +
									'<li >\n<a href="https://ucf1.huronresearchsuite.com/IRB" target="_blank"><img src="'+address+'images/huron_irb.png" alt="" width="135" height="60"/></a>\n</li>\n' +
									'<li><a href="https://paris.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_paris.png" alt="" width="135" height="60"/></a>\n</li>\n' +
								'</ul>\n' + 
								'<ul>\n' +
									// '<li class="">\n<a href="https://iris.research.ucf.edu/" target="_blank"><img src="'+address+'images/ldg_iris.png" width="90" height="45"/></a>\n</li>\n' +
									'<li class="">\n<a href="https://reports.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_aurora.png" width="135" height="60"/></a>\n</li>\n' +
									'<li class="">\n<a href="https://ucf.huronecc.com/ecc/RedirectHome.do" target="_blank"><img src="'+address+'images/ldg_ecrt.png" width="135" height="60"/></a>\n</li>\n' +
								'</ul>\n'+
								'<center><div class="viewMore"><a href="'+risappsaddress+'">View more...</a></div></center></div></div></div>\n' +
							//Start Right Aligned Content (Apps & SearchBar)
							//RIS App Drawer
							'<div id="ucfhb-right" >\n' +
								'<div><div id="ucfhb-signon">\n' +
								'<a id="ucfhb-signon-logo1" href="#" style="min-height:50px;">' +
									'<span id="hover-area-for-menu" >' +
									'<img id="ucf-research-apps" src="'+address+'Images/appdrawer.png" onmouseover="appdrawermover()" onmouseout="appdrawermout()" mouseoutflag="1"/>' +
								'</span>\n\n</a>\n' +
								'<div id="ucfhb-services" style="z-index:9;">\n' +
								'<div id="Drawer" style="margin-top:-45px;">' +
								'<center>' +
								'<div class="arrow-up">' +
								'</div>' +
								'</center>\n\n' +
								'<div id="list">\n' +
									'<ul>\n' +
										'<li >\n<a href="https://ucf4.huronresearchsuite.com/" target="_blank"><img src="'+address+'images/huron_grants.png" width="135" height="60"/></a>\n</li>\n' +
										'<li >\n<a href="https://ucf2.huronresearchsuite.com/" target="_blank"><img src="'+address+'images/huron_agreements.png" width="135" height="60"/></a>\n</li>\n' +
										// '<li >\n<a href="https://argis.research.ucf.edu/index.cfm?fuseaction=home.main&Content=home.adminlogin" target="_blank"><img src="'+address+'images/ldg_argis.png" width="90" height="45"/></a>\n</li>\n' +
										// '<li class="removeSidebar"><a href="https://tera.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_tera.png" width="90" height="45"/></a>\n</li>\n' +
									'</ul>\n' +
									'<ul>\n' +
										'<li >\n<a href="https://ucf1.huronresearchsuite.com/IRB" target="_blank"><img src="'+address+'images/huron_irb.png" width="135" height="60"/></a>\n</li>\n' +
										'<li >\n<a href="https://ucf3.huronresearchsuite.com/" target="_blank"><img src="'+address+'images/huron_iacuc.png" width="135" height="60"/></a>\n</li>\n' +
									'</ul>\n' + 
									// '<ul>\n' +
									// 	'<li >\n<a target="_blank"><img src="'+address+'images/huron_safety.png" width="135" height="60"/></a>\n</li>\n' +
									// 	'<li >\n<a target="_blank"><img src="'+address+'images/huron_coi.png" width="135" height="60"/></a>\n</li>\n' +
									// '</ul>\n' + 
									'<ul>\n' +
										// '<li class="">\n<a href="https://iris.research.ucf.edu/" target="_blank"><img src="'+address+'images/ldg_iris.png" width="90" height="45"/></a>\n</li>\n' +
										'<li><a href="https://paris.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_paris.png" width="135" height="60"/></a>\n</li>\n' +
										'<li class="">\n<a href="https://reports.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_aurora.png" width="135" height="60"/></a>\n</li>\n' +
									'</ul>\n'+
									'<center><div class="viewMore"><a href="'+risappsaddress+'">View more...</a></div></center></div>\n' +
							'</div>\n</div>\n</div>\n</div>\n</div>' +
							//Search Bar
							'<div id="ucfhb-search">\n' + 
								'<form id="ucfhb-search-form" target="_blank" formtarget="_blank" name="ucfhb-search-form" id="ucfhb-search-form" autocomplete="off" '+ 
								  'action="https://search.ucf.edu/#" data-action-url="https://search.ucf.edu/%23?client=UCF_Main&amp;proxystylesheet=UCF_Main&amp;sitesearch=http%3A%2F%2Fresearch.ucf.edu&amp;q=" method="get" >\n' +
								'<label for="ucfhb-search-field">Search OR</label>\n'+
							//	'<input type="hidden" name="client" value="UCF_Main" />\n'+
							//	'<input type="hidden" name="proxystylesheet" value="UCF_Main" />\n'+
								'<input type="text" name="q" id="ucfhb-search-field" placeholder="Search OR" role="search"/>\n'+
								'<input name="sitesearch" value="https://www.research.ucf.edu" type="hidden">\n'+
								'<input id="ucfhb-search-submit" class="button-add fa fa-search" style="color:#000; padding: 0px 6px !important;" type="submit" />\n'+
							'</form>\n' + 
							'<span id="ucfhb-search-autocomplete-srhelp" role="status" aria-live="polite"></span>\n<a id="ucfhb-search-minimal" href="#">Search</a>\n</div>\n<ul id="ucfhb-search-autocomplete" tabindex="1" aria-hidden="true" role="listbox" ></ul>\n<a style="display:none;" id="ucfhb-search-autocomplete-close" href="#" alt="Close autocomplete results" title="Close autocomplete results">&times;</a>\n</div>\n</div>\n' +
					'</div>\n</div>\n' ].join("\n");


				//Adds space to compensate for the navbar.
				var divSpace = document.createElement("div");
				black_bar_jQuery(divSpace).attr("id","divSpace");
				divSpace.style.marginTop = "50px";
				black_bar_jQuery(divSpace).insertAfter(c);

				//Changes Glyphicon for the mobile-slide-toggle & animates and additional
				//margin-spacing for devices under 768px in width 
				black_bar_jQuery('#ucfhb-mobile-toggle').click(function() {
					if(divSpace.style.marginTop == '50px'){black_bar_jQuery(divSpace).animate({marginTop: '100px'});}
					else black_bar_jQuery(divSpace).animate({marginTop: '50px'});
				});

				black_bar_jQuery(window).resize(function() {
					if(black_bar_jQuery(window).width() > 767)
						black_bar_jQuery(divSpace).css({marginTop: '50px'});
				});
					//Attempt to Fix issues with iPhone 6: width = 375; length = 627;
				if (black_bar_jQuery(window).width() == 375){
					black_bar_jQuery("#ucfhb-mobile-toggle").css({paddingRight:'2px', paddingLeft: '6px'});
					black_bar_jQuery("#ucfhb-signon-logo2").css({paddingLeft:'0px', paddingTop: '2px'});


					
				}
			D()
			})
		})();
		
}



