const printNumbersASC = (n: number) => {
   if (n >= 0) {
      printNumbersASC(n - 1);
     console.log(n);
   }
 };

 const printNumbersDSC = (n: number) => {
   if (n >= 0) {
     console.log(n);
     printNumbersASC(n - 1);
   }
 };

 console.log(printNumbersASC(20));
 console.log(printNumbersDSC(50))