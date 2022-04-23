# Random Square Color
 
 This excercise demonstrates how to create a square using HTML/CSS and manipulate the background color using Javascript.

 ## How To Run

 Simply open up `index.html` using Google Chrome, Firefox, or any other web browser. The `index.html` file is alreadly linked to
 the `.css` and `.js` files via the following code:
 ```
 <head>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">       
</head>
```
## Events
In this excercise we write code that listens to a `click` event and then responds to it. Javascript allows us to listen to a large variety of different events in a similar manner that we do here. You can find a few more examples of this here: https://www.w3schools.com/js/js_htmldom_events.asp

For a full list of document (DOM) browser events you can listen to, check out this list:
https://developer.mozilla.org/en-US/docs/Web/API/Document#events


## Notes
Since we must ensure the HTML loads before our script runs, we use the below code to listen to the `DOMContentLoaded` event. This events lets us know that the HTML has loaded. When trying to run Javascript before this event, this can result in `Property of element is undefined` errors.
```
document.addEventListener('DOMContentLoaded', function() {
    // Javascript functions should be called here.
}
```
