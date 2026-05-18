## HTML Validation for index.html (as obtained from 'Nu Html Checker'):

### 1.
#### *Error*: 
The heading h3 (with computed level 3) follows the heading h1 (with computed level 1), skipping 1 heading level.   
From line 20, column 9; to line 20, column 28   

  `<p class="warning">Choose the wrong answer!</p>`
    

  
#### *Solution*:
  Considering that this leads to an error of broken hierarchy, and possible screen reader confusion, I changed the element type from 'h3' to 'p', keeping its existing class name, and adjusting its font size in CSS. 
  
----

### 2. 
#### *Error*:  
Self-closing syntax (/>) used on a non-void HTML element. Ignoring the slash and treating as a start tag.  
From line 40, column 1; to line 40, column 43 

#### *Error*:  
Unclosed element script.
  From line 40, column 1; to line 40, column 43  

  `<script type="module" src="src/index.js" />`

#### *Solution*:
  Upon realising that I wrongly used the 'script' element as a self closing tag, I learnt that the code only ran as intended because the 'script' element was the last item in the body of the HTML file, and if it were placed anywhere else, it would read the rest of the document as part of the script which can lead to a break of the document's parsing.   

  I corrected this by changing ` <script type="module" src="src/index.js" /> `  to ` <script type="module" src="src/index.js"></script> `.