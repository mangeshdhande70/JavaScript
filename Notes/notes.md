
* To View document in console
=> console.log(document) & for all details console.dir(document)

* To Select the particular heading or something by id in page and manipulate them
=> document.getElementById('firstHeading').innerHTML = "<h1>Abdul kalam Ji</h1>"

* innerHTML vs innerText vs innerContent
=> innerHTML show all the content inside the attribute with html tags.
   innerText show all the text except html tags & the text that are hide by using style attribute(ex=> style:display:none)
   innerContent show all include hide content but it won't show html tags


 ***** Imp functions ********

 1. querySelector() => for class use . , for id use #, to select input where type is pass then  querySelector('input[type="pass"]') 
 2. HTMLCollection  => You can't apply forEach, you need to convert it to array using..Array.from(HTMLCollection)
 3. NodeList        => You can apply forEach

  

  \n

********** DOM Imp(Document Object Model) ****************

  1. document      => it is used to select all the body of html
  2. createElement => it is used to create new Elements such as "li,div,h1,h2 and all....etc"
  3. createTextNode => it is used to create new text by using it we optimize the way to update or create new Element
  4. querySelector  => used to select any class or id.
  5. querySelectorAll
  6. eventPropagation => capturing & bubbling. 
     1. Bubbling:- When an event happens on a component, it first runs the event handler on it, then on its parent component, then all the way up on other ancestors’ components. By default, all event handles through this order from center component event to outermost component event.
   
     2. Capturing:- It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler. In short, it means that the event is first captured by the outermost element and propagated to the inner elements. It is also called trickle down.


```
   Topics To Learn
     type, timestamp, defaultPrevented
     target, toElement, srcElement, currentTarget,
     clientX, clientY, screenX, screenY
     altkey, ctrlkey, shiftkey, keyCode

```