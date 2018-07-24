/*
steps for adding this footer to a webapp or website
	0. an example can be found in the file "ris_footer_example.html" located in the current directory
	1. include this file along with jQuery (as well as certain google fonts)
	2. call the loadFooter() function
	3. create a div where you'd like the footer to be with the id = "ucf-orc-footer";
 */

var styles_link = "https://header.dev.research.ucf.edu/styles/footer.css";
var styles_link_mobile = "https://header.dev.research.ucf.edu/styles/footer_mobile.css";
var images_source_dev = "https://header.dev.research.ucf.edu/images/";
var images_source_prod = "https://header.research.ucf.edu/images/";

function loadFooter() {
	var f = document.getElementsByTagName("head")[0];
	var c = document.createElement("link");
        c.setAttribute("href", styles_link);
        c.setAttribute("rel", "stylesheet");
        c.setAttribute("type", "text/css");
        f.appendChild(c);
    var d = document.createElement("link");
        d.setAttribute("href", styles_link_mobile);
        d.setAttribute("rel", "stylesheet");
        d.setAttribute("type", "text/css");
        f.appendChild(d);

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
