function calc(operacao) {
   var num1 = parseFloat(document.getElementById("num1").value);
   var num2 = parseFloat(document.getElementById("num2").value);
   var resultado = 0;

   switch (operacao) {
      case '+': resultado = (num1 + num2);         
         break;
      case '-': resultado = (num1 - num2);
         break;
      case '*': resultado = (num1 * num2);
         break;
      case '/': resultado = (num1 / num2);
         break;
      default:
         break;
   }
  

   document.getElementById("output").value = resultado;
}