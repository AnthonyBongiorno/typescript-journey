/* Create an enum Day for days of the week (Sunday, Monday, etc.). 
   Write a function isWeekend(day: Day): boolean that returns true if the given day is a weekend day, and false otherwise. */

   enum Day {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,};

   function isWeekend(day: Day): boolean {
       if ( day === Day.Saturday || day === Day.Sunday) {
           return true;
       }
       else {
           return false;
       }
   };
   
   export { Day, isWeekend };