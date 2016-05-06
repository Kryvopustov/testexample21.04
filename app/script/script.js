var myModule = (function(){
	
  var myArr = ["test",5,7,"lol"];

  var result = {
    setInArr: setInArr,
    showArr: showArr  	
  };

  return result;

  function setInArr(itemOfArr) {
    myArr.push(itemOfArr);  
  }

  function showArr() {
    alert(myArr)
  }
})();