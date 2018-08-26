window.addEventListener("load", function(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var resp = JSON.parse(this.responseText);
			if(resp['geoplugin_continentCode'] == 'EU'){
				var headers = document.getElementsByTagName('header');
				
				var cLink = document.createElement("link"); 
				cLink.rel = 'stylesheet'; 
				cLink.type = 'text/css'; 
				cLink.href = '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css'; 
				
				var cJs = document.createElement("script"); 
				cJs.src = '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js'; 
				
				var cCode = document.createElement("script");
				
				cCode.innerHTML = 'window.cookieconsent.initialise({"palette": {"popup": {"background": "#edeff5","text": "#838391"},"button": {"background": "#4b81e8"}},"theme": "classic","position": "top","static": true,"content": {"dismiss": "Accept","href": "https://www.msghero.com/privacy-policy/"}});';
				
				headers[0].appendChild(cLink);
				headers[0].appendChild(cJs);
				setTimeout(function(){ headers[0].appendChild(cCode); }, 500);
			}
		}
	  };
	xhttp.open("GET", "https://www.msghero.com/home/access_visitor_detail", true);
	xhttp.send();
});