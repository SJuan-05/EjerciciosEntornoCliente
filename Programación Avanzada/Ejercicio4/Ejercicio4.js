let versionN = navigator.userAgent.indexOf("MSIE") > -1 || 
navigator.userAgent.indexOf("Trident") > -1;

if (versionN){
    resizeTo(500, 500);
}else{
    alert("Operación no permitida con este navegador");
}