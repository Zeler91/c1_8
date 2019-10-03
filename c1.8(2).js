jQuery.prototype.text = function(text){
  this.each(element => element.innerText = text);
return this;
};