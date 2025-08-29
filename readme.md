1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans:
   getElementById: By using getElementById() we can access any element by its Id in JavaScript file.

getElementsByClassName: By using getElementsByClassName() we can access elements by their Class in JavaScript file.

querySelector: By using querySelector() we can access elements by their Id, Class or tagName in JavaScript file.
When we need first value of the element(Class/tagName), we can get it by using querySelector().

querySelectorAll: By using querySelectorAll() we can access elements by their Id, Class or tagName in JavaScript file.
When we need all values of the element(Class/tagName), we can get it by using querySelectorAll().

2. How do you **create and insert a new element into the DOM**?
Ans:
<body>
  <div id="container"></div>
  <script>
    let para = document.createElement("p");  
    para.textContent = "This is a new paragraph.";  
    document.getElementById("container").appendChild(para);  
  </script>
</body>
[This will create a <p> element inside the container div]

3. What is **Event Bubbling** and how does it work?
   Ans:
   Event bubbling means an event moves from the innermost element externaly through its ancestors.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans:
   Instead of attaching event listeners to many child elements, just attach a single event listener to a parent element, and let event bubbling handle the rest. This is called event delegation.
   Usefulness:
   (a)Saves memory and improve performance
   (b)if new child elements are added later (via JavaScript), the parent’s listener will still catch their events.
   (c)Easier to manage one listener instead of many.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Ans:
   preventDefault():
   (a)Prevents reload(default browser behavior) of an element.
   (b)Does not stop the event from bubbling.
   stopPropagation():
   (a)Stops the event from bubbling up.
   (b)Does not affect default browser behavior.
