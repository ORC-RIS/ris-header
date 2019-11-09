/*
steps for adding this footer to a webapp or website
	0. an example can be found in the file "ris_footer_example.html" located in the current directory
	1. include this file along with jQuery (as well as certain google fonts)
	2. call the loadFooter() function
	3. create a div where you'd like the footer to be with the id = "ucf-orc-footer";
 */

var head = document.getElementsByTagName("head")[0];
var font_source = "https://fonts.googleapis.com/css?family=Bitter|Cabin|Montserrat";
var styles_link = "https://header.dev.research.ucf.edu/styles/footer.css";
var styles_link_mobile = "https://header.dev.research.ucf.edu/styles/footer_mobile.css";
var images_source_dev = "https://header.dev.research.ucf.edu/images/";
var images_source_prod = "https://header.research.ucf.edu/images/";

function loadFooter() {

	appendElementToHead(styles_link);
	appendElementToHead(styles_link_mobile);
	appendElementToHead(font_source);

	$(document).ready(function() {
		$('#ucf-orc-footer').html(
		'<div class="ucf-orc-footer-main">' +
			'<div class="ucf-orc-footer-sectionwrapper centered">' +
				'<ul id="no-bullets">' +
					'<li class="ucf-orc-footer-serif"><span style="color: white">&copy;</span> <a class="ucf-white white-underline" style="color: white;" href="http://www.research.ucf.edu" target="_blank">UCF Office of Research & Commercialization</a></li>' +
					'<li class="ucf-orc-footer-ribbon"><a class="ucf-white gold-underline" href="http://it.research.ucf.edu" target="_blank"><h5 class="ucf-orc-footer-sans-serif">Developed by Graduate and Research Information Technology</h5></a></li>' +
					'<li class="ucf-orc-footer-ribbon ucf-orc-footer-icons">' +
						'<img src="'+ images_source_dev + 'ldg_mail.png" width="20" height="12"/>&nbsp;<a id="ucf-white" href="mailto:GRITservicedesk@ucf.edu">GRITservicedesk@ucf.edu</a>&nbsp; ' +
						'<span style="margin-top:5px;"><img src="'+ images_source_dev + 'ldg_phone.png" width="16" height="25"/>&nbsp;407.823.5500</span>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</div>');
	});	
}

function appendElementToHead(element_source) {
	var element = document.createElement("link");
	element.setAttribute("href", element_source);
	element.setAttribute("rel", "stylesheet");
	element.setAttribute("type", "text/css");
	head.appendChild(element);
}
