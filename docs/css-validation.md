## CSS Validation for app.css (as obtained from 'The W3C CSS Validation Service'):

### 1.
#### *Error*:
(Line) 28 button	  Value Error : border Missing a semicolon before the property name border-radius.

#### *Solution*:
  This error points directly to line 28 in app.css which contains the property:value pair of 'border-radius: 10px' under the 'button' ruleset. 
  
    (28) border-radius: 10px
    (29) font-weight: 600;

  The error stems from the fact that the missing semicolon will cause the browser to misunderstand the ruleset, because the end of the rule hasn't been indicated by a ';'.

  I corrected this error by including a semicolon at the end of line 28.