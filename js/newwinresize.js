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
var l = getUrlParam('l','https://www.facebook.com/NguyenThaoRi');
var w = getUrlParam('w','800');
var h = getUrlParam('h','600');
window.open(l,'name','width='+w+',height='+h);
window.close();
