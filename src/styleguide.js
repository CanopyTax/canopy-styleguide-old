require('./components.less');

var el = document.createElement('link'); 
el.setAttribute("rel", "stylesheet");
el.setAttribute("href", "https://fonts.googleapis.com/css?family=Asap:400italic,600italic,300,400,600");
el.setAttribute("type","text/css");
var head = document.getElementsByTagName('head')[0];
head.appendChild(el);
