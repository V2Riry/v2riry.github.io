function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}
var l = getUrlVars()["l"];
var w = getUrlVars()["w"];
var h = getUrlVars()["h"];
window.open(l,'name','width='+w+',height='+h);
window.open('','_self').close();