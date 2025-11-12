var XMLHttpRequestObject = false;

if (window.XMLHttpRequest) {
    
  XMLHttpRequestObject = new XMLHttpRequest();
    
}
  
function sacardatos(datos, idDivContenedor){
  
  if(XMLHttpRequestObject) {

    var lugar = document.getElementById(idDivContenedor);

    XMLHttpRequestObject.open("GET", datos);

    XMLHttpRequestObject.onreadystatechange = function(){

      if (XMLHttpRequestObject.readyState == 4 &&

      XMLHttpRequestObject.status == 200) {

        lugar.innerHTML = XMLHttpRequestObject.responseText;

      }

    }

    XMLHttpRequestObject.send(null);

  }

}