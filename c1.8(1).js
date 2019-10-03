jQuery.prototype.html = function(html){
  this.each(element => element.innerHTML = html);
return this;
};