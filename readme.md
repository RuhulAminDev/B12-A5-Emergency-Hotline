6. Answer the following questions clearly

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

* getElementById → Selects a single element by its unique ID. Returns one element.

* getElementsByClassName → Selects all elements with a specific class name. Returns an HTMLCollection.

* querySelector → Selects the first element that matches a CSS selector (ID, class, tag, etc.). Returns one element.

* querySelectorAll → Selects all elements that match a CSS selector. Returns a NodeList.

2. How do you create and insert a new element into the DOM?

Answer:

1. Create a new element:let newDiv = document.createElement("div");
2. Add text/content to the element:newDiv.innerText = "Hello, I’m a new div!";
3. Insert the element into the DOM:document.body.appendChild(newDiv);


3. What is Event Bubbling and how does it work?

Answer:

* Event Bubbling occurs when an event (e.g., click) happens on a child element first.

* The event then propagates upwards to its parent elements, eventually reaching the document.

* In other words, the event “bubbles up” from the target element to the top of the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

* Event Delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements.

* Benefits:

     * You don’t need to attach listeners to each child element individually.

    * It works for dynamically added child elements as well.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:

* preventDefault() → Prevents the default action of an element.

    * Example: Prevents a form from submitting or a link from opening.

* stopPropagation() → Stops the event from bubbling up to parent elements.

