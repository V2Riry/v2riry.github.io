function myFunction() {
	var url = document.getElementById("url").value;
	var height = document.getElementById("height").value;
	var width = document.getElementById("width").value;
	resultArea = document.getElementById("result");
	if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url) && /^[0-9]*$/.test(height) && /^[0-9]*$/.test(width)) {
		get_short_url("https://v2riry.github.io/RunHTML/newwinresize.html?l="+url+"&h="+height+"&w="+width, function(short_url) {
		document.getElementById("result").value =short_url;
		});
		if (resultArea.style.display = "none") {
	    	resultArea.style.display = "block";
			resultArea.style.color = "black";
			document.getElementById("copy").style.display = "block";
		}
	} else {
		resultArea.style.color = "red";
		resultArea.value = "input incorrect;"
		if (resultArea.style.display = "none") {
			resultArea.style.display = "block";
			resultArea.style.color = "red";
			resultArea.value = "input incorrect";
		}
	}

}

function get_short_url(long_url, func)
{
	$ = jQuery;
    $.getJSON(
        "http://api.bitly.com/v3/shorten?callback=?", 
        { 
            "format": "json",
            "apiKey": "R_c6fb57ec4ac344daac703d9a64f65702",
            "login": "v2riry",
            "longUrl": long_url
        },
        function(response)
        {
            func(response.data.url);
        }
    );
}

function copyFunc() {
  var copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
