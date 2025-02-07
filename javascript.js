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

   // Criando um novo elemento de histórico
   var newHistory = document.createElement("div");
   newHistory.textContent = `${num1} ${operacao} ${num2} = ${resultado}`;

   var history = document.getElementById("history");
   
   // Adiciona o novo item no início do histórico
   history.prepend(newHistory);

   // Limita o histórico a 10 operações
   while (history.children.length > 10) {
       history.removeChild(history.lastElementChild); // Remove o último elemento
   }
}