var searchResultsTarget = "content";
var searchInputId = "ucfhb-search-field"; 
var searchForm	= "ucfhb-search-form";
var address = "https://myresearch.webdev1.research.ucf.edu/";
var addressWO = "//myresearch.webdev1.research.ucf.edu/";
var searchloc = "http://google.cc.ucf.edu"

var searchControl;
function ExecuteWebSiteSearchQuery(){
	document.getElementById('ucfhb-search-form').submit();
}

function appdrawermover(){
	jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer_hover.png");
}

function appdrawermout(){
	jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer.png");
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
	},
	ucfhbJsonp = null;

function ucfhbSetJsonp(f) {
	ucfhbJsonp = f ? f : null
}(function () {
	function f() {
		function c(b) {
			var a = 0,
				e;
			for (e in b) b.hasOwnProperty(e) && a++;
			return a
		}
		function a(b) {
			return b.replace(/(<([^>]+)>)/ig, "")
		}
		function w(b, a) {
			var e = b.target || b.srcElement,
				g = !1,
				c = !1;
			e.getBoundingClientRect().left >= a.getBoundingClientRect().left && e.getBoundingClientRect().right <= a.getBoundingClientRect().right && (g = !0);
			e.getBoundingClientRect().top >= a.getBoundingClientRect().top && e.getBoundingClientRect().bottom <= a.getBoundingClientRect().bottom && (c = !0);
			return g && c ? !1 : !0
		}
		function f(b, a) {
			var e = document.getElementById("ucfhb-json");
			e && e.parentNode.removeChild(e);
			C(b, function () {
				var b = JSON.parse(ucfhbJsonp);
				a(b)
			}, 600)
		}
		var b = this;
		this.searchService = v;
		this.autocompleteCloseBtn = document.getElementById("ucfhb-search-autocomplete-close");
		this.autocompleteHelp = document.getElementById("ucfhb-search-autocomplete-srhelp");
		this.autocompleteList = document.getElementById("ucfhb-search-autocomplete");
		this.autocompleteSelectedId = "ucfhb-autocomplete-selected";
		this.searchForm = document.getElementById("ucfhb-search-form");
		this.searchField = document.getElementById("ucfhb-search-field");
		this.searchSubmit = document.getElementById("ucfhb-search-submit");
		this.searchAction = this.searchForm.getAttribute("data-action-url");
		this.searchActiveClass = "search-is-active";
		this.searchKeytermLinkClass = "search-autocomplete-keyterm";
		this.searchResultsLinkClass = "search-autocomplete-result";
		this.keyterms = {
			terms: {
				t_1: "hous;housing;dorm;apartment;on-campus living;residence;nike;apollo;libra;tower;neptune;lake claire".split(";"),
				t_2: "cal;calendar;acad;academic calendar;fall;spring;summer;sched;schedule;deadline;deadlines;drop".split(";"),
				t_3: ["lib", "library", "libraries"],
				t_4: ["email", "knights", "mail"],
				t_5: ["email", "outlook"],
				t_6: "giv;giving;gift;donate;donation;giving to UCF;give to UCF".split(";"),
				t_7: ["schola", "scholarship"],
				t_8: ["aid", "finan", "financial"],
				t_9: ["web", "online", "webcourses"],
				t_10: ["book", "bookstore"],
				t_11: ["tuit", "tuition", "cost"],
				t_12: ["orien", "orientation"],
				t_13: ["job", "employment", "employ", "career"],
				t_14: ["career", "intern"],
				t_15: ["park", "parking"],
				t_16: ["map", "campus"],
				t_17: ["regist", "registrar"],
				t_18: ["transc", "transcript"],
				t_19: ["nurs", "nursing", "college"],
				t_20: ["educ", "education", "college"],
				t_21: ["art", "arts", "humanities", "college", "cah"],
				t_22: ["scien", "science", "college", "cos"],
				t_23: ["psy", "psych", "psychology"],
				t_24: ["heal", "health", "service", "well"],
				t_25: ["heal", "health", "public", "affairs", "college"],
				t_26: ["hosp", "hospitality", "rosen", "college"],
				t_27: ["busi", "business", "college", "coba"],
				t_28: ["med", "medic", "medicine", "college"],
				t_29: ["serv", "service", "stud", "student"],
				t_30: ["dining", "food", "serv", "service"],
				t_31: ["phon", "phone", "phonebook", "dir", "directory"],
				t_32: ["under", "undergrad", "undergraduate", "stud", "studies"],
				t_33: ["major", "minor", "degree", "prog", "program"],
				t_34: ["tour", "campus", "open", "open house"],
				t_35: ["stud", "student", "student union", "union", "food"],
				t_36: ["foot", "football", "athlet", "athletic"],
				t_37: ["under", "undergrad", "undergraduate", "admis", "admissions"],
				t_38: ["sga", "stud", "student", "gov", "govern"],
				t_39: "cat catal catalog cour course under undergrad".split(" "),
				t_40: "cat catal catalog cour course grad graduate".split(" "),
				t_41: "grad graduate master college admis admissions".split(" "),
				t_42: ["nid", "login", "pass", "password"],
				t_43: ["my ucf", "myucf"],
				t_44: ["hr", "hum", "human", "human resource", "human resources"],
				t_45: ["foundation", "UCF foundation"]
			},
			matches: {
				m_1: {
					name: "Housing and Residence Life",
					url: "http://housing.ucf.edu"
				},
				m_2: {
					name: "Academic Calendar",
					url: "http://calendar.ucf.edu"
				},
				m_3: {
					name: "UCF Libraries",
					url: "http://library.ucf.edu/"
				},
				m_4: {
					name: "Knights Email",
					url: "http://knightsemail.ucf.edu"
				},
				m_5: {
					name: "Faculty and Staff Webmail",
					url: "http://webmail.ucf.edu"
				},
				m_6: {
					name: "Giving to UCF",
					url: "https://giving.ucffoundation.org/ucffoundation"
				},
				m_7: {
					name: "Scholarship Information",
					url: "http://finaid.ucf.edu/scholarships/"
				},
				m_8: {
					name: "Financial Aid",
					url: "http://finaid.ucf.edu/types/"
				},
				m_9: {
					name: "Webcourses",
					url: "http://webcourses.ucf.edu"
				},
				m_10: {
					name: "UCF Bookstore",
					url: "bookstore.ucf.edu"
				},
				m_11: {
					name: "Tuition and Fees",
					url: "http://tuitionfees.smca.ucf.edu/"
				},
				m_12: {
					name: "Orientation",
					url: "http://orientation.ucf.edu/"
				},
				m_13: {
					name: "Jobs with UCF",
					url: "https://www.jobswithucf.com/"
				},
				m_14: {
					name: "Career Services",
					url: "http://career.sdes.ucf.edu/"
				},
				m_15: {
					name: "Parking Services",
					url: "http://parking.ucf.edu/"
				},
				m_16: {
					name: "Campus Map",
					url: "http://map.ucf.edu"
				},
				m_17: {
					name: "Registrar",
					url: "http://registrar.ucf.edu/"
				},
				m_18: {
					name: "Official Transcript Requests",
					url: "http://registrar.ucf.edu/transcript-request"
				},
				m_19: {
					name: "College of Nursing",
					url: "http://nursing.ucf.edu"
				},
				m_20: {
					name: "College of Education and Human Performance",
					url: "http://education.ucf.edu/"
				},
				m_21: {
					name: "College of Arts and Humanities",
					url: "http://www.cah.ucf.edu/"
				},
				m_22: {
					name: "College of Science",
					url: "http://www.cos.ucf.edu/"
				},
				m_23: {
					name: "Department of Psychology",
					url: "http://psychology.cos.ucf.edu/"
				},
				m_24: {
					name: "Health Services",
					url: "http://hs.ucf.edu/"
				},
				m_25: {
					name: "College of Health and Public Affairs",
					url: "http://cohpa.ucf.edu/"
				},
				m_26: {
					name: "Rosen College of Hospitality Management",
					url: "http://hospitality.ucf.edu/"
				},
				m_27: {
					name: "College of Business Administration",
					url: "http://www.bus.ucf.edu/"
				},
				m_28: {
					name: "College of Medicine",
					url: "http://med.ucf.edu/"
				},
				m_29: {
					name: "Student Services",
					url: "http://www.sdes.ucf.edu/list"
				},
				m_30: {
					name: "Dining Services",
					url: "http://www.ucfdining.com/"
				},
				m_31: {
					name: "UCF Phonebook",
					url: "http://www.ucf.edu/phonebook/"
				},
				m_32: {
					name: "Undergraduate Studies",
					url: "http://undergraduatestudies.ucf.edu/"
				},
				m_33: {
					name: "Undergraduate Catalog",
					url: "http://catalog.ucf.edu/programs"
				},
				m_34: {
					name: "Campus Visit",
					url: "http://admissions.ucf.edu/visit/"
				},
				m_35: {
					name: "Student Union",
					url: "http://studentunion.ucf.edu/"
				},
				m_36: {
					name: "UCF Knights | Athletics",
					url: "http://www.ucfknights.com/"
				},
				m_37: {
					name: "Undergraduate Admissions",
					url: "http://admissions.ucf.edu/"
				},
				m_38: {
					name: "Student Government",
					url: "http://sga.ucf.edu"
				},
				m_39: {
					name: "Undergraduate Catalog",
					url: "http://catalog.ucf.edu/programs"
				},
				m_40: {
					name: "Graduate Catalog",
					url: "http://www.graduatecatalog.ucf.edu/programs/"
				},
				m_41: {
					name: "Graduate Admissions",
					url: "http://www.admissions.graduate.ucf.edu/"
				},
				m_42: {
					name: "NID",
					url: "http://mynid.ucf.edu"
				},
				m_43: {
					name: "MyUCF",
					url: "https://my.ucf.edu"
				},
				m_44: {
					name: "Human Resources",
					url: "http://hr.ucf.edu/"
				},
				m_45: {
					name: "UCF Foundation",
					url: "http://ucffoundation.org/"
				}
			}
		};
		// code for disabling search button when string is null - Rob
		jQuery('#ucfhb-search-submit').attr('disabled','disabled');
		jQuery('input[type="text"]').keyup(function(){
			if(jQuery('input[type="text"]').val() == ""){
				jQuery('input[type="button"]').attr('disabled','disabled');
			}
			else{
				jQuery('input[type="button"]').removeAttr('disabled');
			}
		})
	
		var d;
		this.clearAutocompleteResults = function () {
			for (; b.autocompleteList.hasChildNodes();) b.autocompleteList.removeChild(b.autocompleteList.lastChild)
		};
		this.isSearchActive = function () {
			return b.autocompleteList.className == b.searchActiveClass
		};
		this.toggleAutocompleteList = function (a) {
			b.clearAutocompleteResults();
			!0 === a ? (b.autocompleteList.className = b.searchActiveClass, b.autocompleteList.setAttribute("aria-hidden", "false")) : (b.autocompleteList.className = "", b.autocompleteList.setAttribute("aria-hidden", "true"))
		};
		this.updateAutocompleteHelp = function (a, c) {
			var e = "";
			0 === a && null === c ? e = "Search field is empty." : (e = a, e = 1 === a ? e + " suggestion found" : e + " suggestions found", null !== c && (e += ' for "' + c + '"'), 0 < a && (e += ". Use up and down arrow keys to select a suggestion."));
			b.autocompleteHelp.innerHTML = e
		};
		this.outputResults = function (B, m) {
			var e = a(B),
				g = e.toLowerCase();
			urlq = encodeURIComponent(e);
			var x = function () {
				var a = document.createElement("li"),
					g = b.searchAction + urlq;
				a.innerHTML = '<a class="' + b.searchResultsLinkClass + '" href="' + g + '" tabindex="0">View More Results</a>';
				a.className = "ucfhb-search-autocomplete-more";
				a.setAttribute("data-name-val", e);
				var h = a.getElementsByTagName("a")[0];
				ucfhbAssignTrackingListener(h, "click", new String(g), l, "View more results: " + e);
				b.autocompleteList.appendChild(a)
			};
			if ("" !== e) {
				if (b.keyterms.terms) {
					i = 0;
					var h = b.keyterms.terms,
						k = b.keyterms.matches,
						q = 0;
					results = [];
					for (i = 0; i < c(h); i++) {
						var d = "m_" + (i + 1); - 1 < h["t_" + (i + 1)].indexOf(g) && (q++, results.push(k[d]))
					}
					if (0 < q) {
						b.toggleAutocompleteList(!0);
						for (i = i = 0; i < q; i++) g = a(results[i].name.trim()), k = '<span class="ucfhb-search-autocomplete-name">' + g + "</span>", h = "" !== results[i].url ? a(results[i].url.trim()) : b.searchAction + urlq, d = document.createElement("li"), d.innerHTML = '<a class="' + b.searchKeytermLinkClass + '" href="' + h + '" tabindex="0">' + k + "</a>", d.setAttribute("data-name-val", g), b.autocompleteList.appendChild(d), k = d.getElementsByTagName("a")[0], ucfhbAssignTrackingListener(k, "click", new String(h), r, "" + g);
						x();
						b.updateAutocompleteHelp(q, e)
					} else f(urlq, function (g) {
						if (g && null !== g.results && 0 < g.results.length) {
							b.toggleAutocompleteList(!0);
							for (i = i = 0; i < g.results.length; i++) {
								q++;
								var h = null !== g.results[i].name ? a(g.results[i].name.trim()) : "",
									c = '<span class="ucfhb-search-autocomplete-name">' + h + "</span>",
									k = null !== g.results[i].organization ? '<span class="ucfhb-search-autocomplete-org">' + a(g.results[i].organization.trim()) + "</span>" : "",
									d = b.searchAction + encodeURIComponent(h),
									m = document.createElement("li");
								m.innerHTML = '<a class="' + b.searchResultsLinkClass + '" href="' + d + '" tabindex="0" >' + c + k + "</a>";
								m.setAttribute("data-name-val", h);
								c = m.getElementsByTagName("a")[0];
								ucfhbAssignTrackingListener(c, "click", new String(d), s, "" + h);
								b.autocompleteList.appendChild(m)
							}
							x();
							b.updateAutocompleteHelp(q, e)
						} else b.toggleAutocompleteList(!1), b.updateAutocompleteHelp(0, e)
					})
				}
			} else b.toggleAutocompleteList(!1), b.updateAutocompleteHelp(0, null)
		};
		
		this.acListKeystrokeSelect =

		function (a) {
			var c = b.autocompleteList,
				e = c.firstChild,
				g = c.lastChild,
				d = b.autocompleteSelectedId,
				h = c = null,
				h = null,
				c = document.getElementById(d) ? document.getElementById(d) : e,
				k = function (a, c, h) {
					var k = "";
					a.id = "";
					e.id = "";
					g.id = "";
					null !== c ? (h.id = "", c.id = d, k = c.getAttribute("data-name-val")) : (h.id = d, k = h.getAttribute("data-name-val"));
					b.searchField.value = k;
					a = null;
					document.createEvent ? (a = document.createEvent("KeyboardEvent"), a["undefined" !== typeof a.initKeyboardEvent ? "initKeyboardEvent" : "initKeyEvent"]("keydown", !0, !0, window, !1, !1, !1, !1, 39, 0), document.dispatchEvent(a)) : document.createEventObject && (a = document.createEventObject("KeyboardEvent"), a.keyCode = 39, b.searchField.fireEvent("onkeydown", a))
				};
			b.isSearchActive() && document.activeElement == b.searchField && (40 == a ? (h = document.getElementById(d) ? c.nextSibling : e, k(c, h, e)) : 38 == a && (h = c.previousSibling, k(c, h, g)))
		};
		this.searchOnKeyUp = function (a, c) {
			clearTimeout(d);
			d = setTimeout(function () {
				b.outputResults(a, c)
			}, 550)
		};
		this.initialize = function () {
			var c = null,
				d = null;
			b.searchField.onkeyup =

			function (g) {
				g = g || window.event;
				keycode = g.which || g.keyCode;
				c = a(b.searchField.value);
				d = b.searchService + c;
				"number" == typeof keycode && (8 == keycode || 44 < keycode) || !1 === b.isSearchActive() && null !== b.searchField.value && "" !== b.searchField.value && 40 === keycode ? b.searchOnKeyUp(c, d) : b.acListKeystrokeSelect(keycode)
			};
			b.searchField.onfocus = function () {
				c = a(b.searchField.value);
				d = b.searchService + c;
				!1 === b.isSearchActive() && "" !== b.searchField.value && null !== b.searchField.value && b.searchOnKeyUp(c, d)
			};
			var e = function (a) {
				a.preventDefault ? a.preventDefault() : a.returnValue = !1;
				(a = document.getElementById(b.autocompleteSelectedId)) && !0 === b.isSearchActive() ? (a = a.getElementsByTagName("a")[0]) && (-1 < a.className.indexOf(b.searchKeytermLinkClass) ? ucfhbTrackAction(a.getAttribute("href"), r, b.searchField.value) : -1 < a.className.indexOf(b.searchResultsLinkClass) && ucfhbTrackAction(a.getAttribute("href"), s, b.searchField.value)) : (a = b.searchForm.getAttribute("data-action-url") + encodeURIComponent(b.searchField.value), ucfhbTrackAction(a, l, b.searchField.value))
			};
			b.searchForm.addEventListener ? b.searchForm.addEventListener("submit", e, !1) : b.searchForm.attachEvent && b.searchForm.attachEvent("onsubmit", e);
			b.autocompleteCloseBtn.onclick = function () {
				b.toggleAutocompleteList(!1)
			};
			document.addEventListener ? document.addEventListener("click", function (a) {
				(a.target || a.srcElement) && a.target.getAttribute("id") !== b.searchSubmit.getAttribute("id") && w(a, b.autocompleteList) && b.isSearchActive() && b.toggleAutocompleteList(!1)
			}) : document.attachEvent("onclick", function (a) {
				w(a, b.autocompleteList) && b.isSearchActive() && b.toggleAutocompleteList(!1)
			})
		}
	}
	var l = "search",
		r = "autocomplete-keyterm-search",
		s = "autocomplete-search",
		u = window.location.protocol + addressWO+"styles/bar.css",
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
	"object" !== typeof JSON && (JSON = {});
	(function () {
		function c(a) {
			return 10 > a ? "0" + a : a
		}
		function a(a) {
			b.lastIndex = 0;
			return b.test(a) ? '"' + a.replace(b, function (a) {
				var b = m[a];
				return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + a + '"'
		}
		function f(b, c) {
			var h, k, q, p, m = d,
				t, n = c[b];
			n && "object" === typeof n && "function" === typeof n.toJSON && (n = n.toJSON(b));
			"function" === typeof e && (n = e.call(c, b, n));
			switch (typeof n) {
			case "string":
				return a(n);
			case "number":
				return isFinite(n) ? String(n) : "null";
			case "boolean":
			case "null":
				return String(n);
			case "object":
				if (!n) return "null";
				d += l;
				t = [];
				if ("[object Array]" === Object.prototype.toString.apply(n)) {
					p =
					n.length;
					for (h = 0; h < p; h += 1) t[h] = f(h, n) || "null";
					q = 0 === t.length ? "[]" : d ? "[\n" + d + t.join(",\n" + d) + "\n" + m + "]" : "[" + t.join(",") + "]";
					d = m;
					return q
				}
				if (e && "object" === typeof e) for (p = e.length, h = 0; h < p; h += 1)"string" === typeof e[h] && (k = e[h], (q = f(k, n)) && t.push(a(k) + (d ? ": " : ":") + q));
				else for (k in n) Object.prototype.hasOwnProperty.call(n, k) && (q = f(k, n)) && t.push(a(k) + (d ? ": " : ":") + q);
				q = 0 === t.length ? "{}" : d ? "{\n" + d + t.join(",\n" + d) + "\n" + m + "}" : "{" + t.join(",") + "}";
				d = m;
				return q
			}
		}
		"function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON =

		function () {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + c(this.getUTCMonth() + 1) + "-" + c(this.getUTCDate()) + "T" + c(this.getUTCHours()) + ":" + c(this.getUTCMinutes()) + ":" + c(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
			return this.valueOf()
		});
		var p = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			d, l, m = {
				"\b": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			e;
		"function" !== typeof JSON.stringify && (JSON.stringify = function (a, b, c) {
			var k;
			l = d = "";
			if ("number" === typeof c) for (k = 0; k < c; k += 1) l += " ";
			else "string" === typeof c && (l = c);
			if ((e = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
			return f("", {
				"": a
			})
		});
		"function" !== typeof JSON.parse && (JSON.parse = function (a, b) {
			function c(a, e) {
				var d, g, k = a[e];
				if (k && "object" === typeof k) for (d in k) Object.prototype.hasOwnProperty.call(k, d) && (g = c(k, d), void 0 !== g ? k[d] = g : delete k[d]);
				return b.call(a, e, k)
			}
			var e;
			a = String(a);
			p.lastIndex = 0;
			p.test(a) && (a = a.replace(p, function (a) {
				return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			}));
			if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof b ? c({
				"": e
			}, "") : e;
			throw new SyntaxError("JSON.parse");
		})
	})();
	"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g, "")
	});
	var C = function (c, a, f) {
		var p = document.getElementsByTagName("head")[0],
			b = document.createElement("script");
		b.setAttribute("src", v + c);
		b.setAttribute("type", "text/javascript");
		b.id = "ucfhb-json";
		p.appendChild(b);
		"undefined" !== typeof a && null !== a && setTimeout(function () {
			a()
		}, f)
	},
		D = function () {
			(new f).initialize();
			(function () {
				var c = document.getElementById("ucfhb"),
					a = document.getElementById("ucfhb-mobile-toggle"),
					f = document.getElementById("ucfhb-logo"),
					p = f.firstElementChild || f.firstChild,
					b = document.getElementById("ucfhb-right"),
					d = document.getElementById("ucfhb-signon-logo1");
				document.getElementById("ucfhb-signon");
				var l = document.getElementById("ucfhb-search");
				document.getElementById("ucfhb-search-form");
				searchField = document.getElementById("ucfhb-search-field");
				searchBtn = document.getElementById("ucfhb-search-submit");
				searchMinimal = document.getElementById("ucfhb-search-minimal");
				searchAutocomplete = document.getElementById("ucfhb-search-autocomplete");
			//	linkMyucf = document.getElementById("ucfhb-myucf");
			//	linkKnightsmail = document.getElementById("ucfhb-knightsmail");
			//	linkWebcourses = document.getElementById("ucfhb-webcourses");

			//	linkmove = document.getElementById("ucfhb-move");
				
			//	shiftLeftElems = [d, l, searchMinimal, searchAutocomplete];
				shiftLeftElems = [d];
				mobileToggleElems = [c, a, f, b, searchAutocomplete];
				var m = function (a, b) {
					for (var c = a.length, d = 0; d < c; d++) - 1 < a[d].className.indexOf("ucfhb-gold") ? a[d].className = "ucfhb-gold " + b : a[d].className = b
				};
				d.onclick = function () {
					if(jQuery("#ucf-research-apps").attr("onmouseout")!=''){
						jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer_hover.png");
						jQuery("#ucf-research-apps").attr("onmouseout","");
					} else{
						jQuery("#ucf-research-apps").attr("src", ""+address+"Images/appdrawer.png");
						jQuery("#ucf-research-apps").attr("onmouseout","appdrawermout()");
					}
					"ucfhb-shiftleft" == d.className ? (m(shiftLeftElems, ""), searchField.removeAttribute("tabindex"), searchBtn.removeAttribute("tabindex")) : (m(shiftLeftElems, "ucfhb-shiftleft"), searchField.setAttribute("tabindex", "-1"), searchBtn.setAttribute("tabindex", "-1"))
				};
				searchMinimal.onclick = function () {
					m(shiftLeftElems, "");
					searchField.focus();
					searchField.removeAttribute("tabindex");
					searchBtn.removeAttribute("tabindex")
				};
				a.onclick = function () {
					"ucfhb-mobileslide" == a.className ? m(mobileToggleElems, "") : m(mobileToggleElems, "ucfhb-mobileslide")
				};
			//	ucfhbAssignTrackingListener(linkMyucf, "click", linkMyucf.getAttribute("href"), "signon", "MyUCF");
			//	ucfhbAssignTrackingListener(linkKnightsmail, "click", linkKnightsmail.getAttribute("href"), "signon", "Knightsmail");
			//	ucfhbAssignTrackingListener(linkWebcourses, "click", linkWebcourses.getAttribute("href"), "signon", "Webcourses");
				
			//	ucfhbAssignTrackingListener(move, "click", linkmove.getAttribute("href"), "signon", "Move");

			//	ucfhbAssignTrackingListener(p, "click", p.getAttribute("href"), "ucf-logo", "UCF Logo")
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
			a = document.createElement("link");
		a.setAttribute("href", u);
		a.setAttribute("rel", "stylesheet");
		a.setAttribute("type", "text/css");
		c.appendChild(a);
		!0 === y && (a = document.createElement("link"), a.setAttribute("href", A), a.setAttribute("rel", "stylesheet"), a.setAttribute("type", "text/css"), c.appendChild(a));
		c = null;
		document.getElementById("ucfhb") ? c = document.getElementById("ucfhb") : (c = document.createElement("div"), c.id = "ucfhb", document.body.insertBefore(c, document.body.firstChild));
		c.className += " preload";
		c.innerHTML = ['<div id="ucfhb-inner" style="display: none;">\n<div id="ucfhb-left">\n<div id="ucfhb-logo"></div>\n<div id="ucfhb-logo-main" style="max-width:100%;height:auto;" class="hidden-md hidden-sm hidden-lg">\n<img src="'+address+'Images/ucf_research_logo.png" usemap="#logos" style="max-width:85%;height:auto;"/><map name="logos"><area shape="rect" coords="0,0,321,27" href="http://www.ucf.edu/" title="UCF Main Site" alt="UCF Main Site" /><area shape="rect" coords="0,0,407,27" href="http://www.research.ucf.edu/" title="ORC Main Site" alt="ORC Main Site" /></map>\n</div><div id="ucfhb-logo-main" class="hidden-xs">\n<img src="'+address+'Images/ucf_research_logo.png" usemap="#logos"/><map name="logos"><area shape="rect" coords="0,0,321,27" href="http://www.ucf.edu/" title="UCF Main Site" alt="UCF Main Site" /><area shape="rect" coords="0,0,407,27" href="http://www.research.ucf.edu/" title="ORC Main Site" alt="ORC Main Site" /></map>\n</div>\n<a id="ucfhb-mobile-toggle" href="#">Open Mobile Menu</a>\n</div>\n<div id="ucfhb-right">\n<div class="hidden-sm hidden-xs"><div id="ucfhb-signon">\n<a id="ucfhb-signon-logo1" href="#"><img id="ucf-research-apps" src="'+address+'Images/appdrawer.png" onmouseover="appdrawermover()" onmouseout="appdrawermout()"/>\n\n</a>\n<div id="ucfhb-services" style="z-index:9;margin-top:-8px;position:relative;margin-left:-155px;">\n<div id="Drawer" style="margin-top:-45px;"><center><div class="arrow-up"></div></center>\n\n<div id="list">\n<ul>\n<li >\n<a href="https://argis.research.ucf.edu/index.cfm?fuseaction=home.main&Content=home.adminlogin" target="_blank"><img src="'+address+'images/ldg_argis.png" width="90" height="45"/></a>\n</li>\n<li><a href="https://paris.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_paris.png" width="90" height="45"/></a>\n</li>\n<li class="removeSidebar"><a href="https://tera.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_tera.png" width="90" height="45"/></a>\n</li>\n</ul>\n<ul>\n<li class="">\n<a href="https://reports.research.ucf.edu/mainmenu.cfm" target="_blank"><img src="'+address+'images/ldg_aurora.png" width="90" height="45"/></a>\n</li>\n<li class="">\n<a href="https://iris.research.ucf.edu/" target="_blank"><img src="'+address+'images/ldg_iris.png" width="90" height="45"/></a>\n</li>\n<li class="">\n<a href="https://ecrt4.research.ucf.edu/ecrt/" target="_blank"><img src="'+address+'images/ldg_ecrt.png" width="90" height="45"/></a>\n</li>\n</ul>\n<center><div class="viewMore"><a href="">View more...</a></div></center></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div id="ucfhb-search">', '<form target="_blank" action="http://google.cc.ucf.edu/search" data-action-url="http://google.cc.ucf.edu/search?client=UCF_Main&amp;proxystylesheet=UCF_Main&amp;sitesearch=http%3A%2F%2Fresearch.ucf.edu&amp;q="  method="get" name="ucfhb-search-form" id="ucfhb-search-form" autocomplete="off">', '<label for="ucfhb-search-field">Search ORC</label>\n<input type="hidden" name="client" value="UCF_Main" />\n<input type="hidden" name="proxystylesheet" value="UCF_Main" />\n<input type="text" name="q" id="ucfhb-search-field" placeholder="Search ORC" autocomplete="off" autocapitalize="off" aria-autocomplete="off" aria-owns="ucfhb-search-autocomplete" aria-activedescendant="ucfhb-autocomplete-selected" aria-haspopup="true" role="search" />\n<input name="sitesearch" value="http://research.ucf.edu" type="hidden">\n<input id="ucfhb-search-submit" class="button-add" type="button" value="Go" onclick="ExecuteWebSiteSearchQuery();"/>\n</form>\n<span id="ucfhb-search-autocomplete-srhelp" role="status" aria-live="polite"></span>\n<a id="ucfhb-search-minimal" href="#">Search</a>\n</div>\n<ul id="ucfhb-search-autocomplete" tabindex="1" aria-hidden="true" role="listbox" ></ul>\n<a style="display:none;" id="ucfhb-search-autocomplete-close" href="#" alt="Close autocomplete results" title="Close autocomplete results">&times;</a>\n</div>\n</div>'].join("\n");

		D()
	})
})();