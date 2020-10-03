### EX-2 pt. 5


**Use developer-tools in your browser and it’s network options to monitor the AJAX-request. Explain why, what you did above, is even possible, when we know the Same Origin Policy governs when/where AJAX-request can go**  
  
It is possible because the only way to overcome the same-origin policy is to ensure that the requested resource from other origins includes the right HTTP headers such as Access-Control-Allow-Origin. 
In this case, the headers are set with wildcard '*' which means allow all.