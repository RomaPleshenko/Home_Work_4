let a = prompt('введите свой возраст  ');
if (isNaN(a)) {
  alert('Нужно писать число!');
} else {
  if (a[a.length-1]==0,5<=a[a.length-1]<=9){
    alert(a+' '+'Лет'); 
  }
   else{
    if (a[a.length-1]==1){
      alert(a+' '+'Год'); 
    }
    else {
      if (2<=a[a.length-1]<=4){
        alert(a+' '+'Года'); 
      }
    }
   }  
}
