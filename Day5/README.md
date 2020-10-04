# General part

**Explain about the Object Model and why it's (Very) relevant for modern web-development**  
The **Document object model** or "DOM" refers to the "Live" version of the website the user is seeing.  
The browser parses our code and markup to a webpage that (Can) consist of HTML, CSS, Javascript, etc.  
The combination of the elements that make the webpage is refered to as the DOM.  
  
Years back, a browser would parse HTML and CSS and display a completely static website once everything was loaded.  
With programming like Javascript we are able to manipulate the webpage on the client-side (Done by the browser engine) *after* the page is loaded!.  
<br>  

**Explain (using an example of your own choice) about JavaScript events, and Event Bubbling**  
Event bubbling is a way to propogate an event through a "Hierocracy" of elements.  
An event can propogate or "Bubble" up through elements which allows for detecting where the event took place.  
This snippet clearly demonstrates the functionality:
  
[<img src="/codepen.png">](https://codepen.io/grevmivlos/pen/ExKqLvr)
  
<br>

**Elaborate on how JSON or XML supports communication between subsystems, even when the subsystems are implemented on diﬀerent platforms.**  
When exchanging data between a browser and a server, the data can only be text. JSON and XML are both text formats that are easily readable by humans.  
In order for different platforms to read this, we need some kind of handling in order for the platform to understand how to handle that data.  
  
JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.  
The same can be said for XML even though there's a bit more handling to be done for this.  
  
In short, the sending and recieving data, most platforms can be easily modified in order to work with JSON and XML communication regardless of the platforms make and programming.
<br>

**Explain the topic AJAX and how it has changed the way modern web-applications are created**  
Also known as **A**synchronous **J**avascript **A**nd **X**ML.  
Clearly explained by W3 Schools it says:

- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

These three facts alone were revolutionizing for websites and web-applications, especially due to fact no. 2.  
  
To elaborate, AJAX is also a way for the browser to make additional HTTP requests with Javascript that prevents us from having to reload the webpage

<br>

**Explain the Same Origin Policy (for AJAX), and different ways to work around it**  
CORS is a security mechanism that allows a web page from one domain or Origin to access a resource with a different domain (a cross-domain request). CORS is a relaxation of the same-origin policy implemented in modern browsers. Without features like CORS, websites are restricted to accessing resources from the same origin through what is known as same-origin policy.  
To "Relax" the S.O.P. we can configure the receiving end (i.e. API server) to allow cross-origin requests.

<br>

**It was possible to obtain data right from restcountries.eu via an AJAX call made from within your Browser. Use Chrome Developer tools to explain (with focus on the Same Origin Policy) why this is possible**
Reading the HEADERS, the servers response header allows for all GET methods, irregardless of origin.
