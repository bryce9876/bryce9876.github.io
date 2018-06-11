var app = angular.module('app', []);

app.controller('Ctrl', function ($scope) {
  
  Expand = function (obj){
    if (!obj.savesize) obj.savesize=obj.size;
    if (obj.size < 100){
      obj.size=Math.max(obj.savesize,obj.value.length);
    }
   }

});

app.filter('memeIt', function() {
    return function(input) {

      if (input === undefined) return "";
      var output = "", ind=0, capitalise = false;

      while(ind < input.length){

        if (isAlpha(input.charAt(ind))){
          if (capitalise){
            output += input.charAt(ind).toUpperCase();
          }
          else{
            output += input.charAt(ind).toLowerCase();
          }
          capitalise = !capitalise; 
        }
        else{
          output += input.charAt(ind);
        }
        ind++;
      }
      return output;
    }
});

// Returns true if that character is a letter of the alphabet
function isAlpha(ch){
  return /^[A-Z]$/i.test(ch);
}