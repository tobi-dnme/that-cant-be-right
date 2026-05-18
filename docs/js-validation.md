## JS Validation for app.js (as obtained from 'JSHint'):

### 1.  
#### *Errors*:
(Line) 26	'questionElement' has already been declared.  
(Line) 26	Expected an identifier and instead saw '.'.  
(Line) 26	Expected an assignment or function call and instead saw an expression

#### *Solution*:
  This issue occured owing to the fact that 'questionElement' had already been declared on line 25 as:

    (25) const questionElement = document.getElementById("question");
    (26) let questionElement.textContent = myQuestion.question;

  Therefore the variable declaration on line 26 is trying to reassign an already declared constant. My mistake was in assuming that 'questionElement' and 'questionElement.textContent' were two different variables, and not that '.textContent' is a property of the initially declared constant.  

  To fix this error, I simply removed the 'let' keyword on line 26 in order to properly reassign a property of the element, and not make a new assignment of the element itself.  

----  

### 2.  
#### *Error*:
(Line) 49	Expected a conditional expression and instead saw an assignment.

#### *Solution*:
  This error resulted from the intended inclusion of a conditional if...else statement which was initialized as:

    (49)  if (index = myQuestion.answer) { 
    
  The error is as a result of the fact that 'index = myQuestion.answer' is a direct reassignment of index, and doesn't compare both values on either side of the '=' to assess the condition that follows.  

  In order to fix this error, I could use either of the equating comparison operators, '=='(loose equality) or '==='(strict equality). For the purpose of avoiding any future errors or inaccuracies, I replaced the '=' with '==='.

----

### 3.  
#### *Warning*:
(Line) 78	Missing semicolon 

#### *Solution*:
  This as a warning might not lead to any syntax errors in compiling, but I understand adding semicolons makes my intentions clear to other developers and ensures my script executes predictably across all browsers. 
    
    (78) document.getElementById("score").textContent = (currentScore * 10) + "%"

  To remove this warning, I added a semicolon( ; )  at the end of the line.