# TotoJS
TotoJS is a javascript library that makes your code more
efficient and boost productibity as well as performance.
So how this can be done you only need to implement CDN in your code and you can able to use TotoJS.
TotoJS have some inbuilt functions and features thats really makes your code more efficient and lighter.
### Functions include:
- alle()
- ele()
- createTag()
- createStyle()
- setEvent()
- load()
- loadHTML()
- toggle()
- saveData()
- getData()
- updateData()
- removeData()
- center()
- hide()
- how()
- eventOff()
- eventOn()
- glow()
- glowTxt()
- putHTML()
- putValue()
- putText()
more one is coming
## CDN 
Copy this cdn link and implement in your code https://cdn.jsdelivr.net/gh/sameervegas/dist@latest/TotoJS.js.

## Demo
### Creating Tag
```javascript
createTag({
    element: "div",
    attribute: { class: "ele" , id: "ele"},
    append: "body",
});
```
### Creating Style
```javascript
createStyle(".ele",{
    width: "50px",
    height: "50px",
    background: "black",
    borderRadius: "10px",
    position: "fixed",
    bottom: "100px",
    color: "white",
    left: "calc(50% - 30px)",
    transform: "scale(3,3)",
});
```
### Creating Event
```javascript
setEvent({
    element: "div",
    event: "click",
    do: () => {
        alert("Hey You Just Created An Event")
    },
});
```
### Now Using Functions
```javascript
ele(".ele") //Select element 
createTag({/*scroll top*/}) //Create a tag
createStyle({/*scroll top*/}) //Create a stylesheet 
setEvent({/*scroll top*/}) //Create a event
load(".ele","link") //load a document
loadHTML(".ele","link")  //load a html document
toggle(".eleA",".eleB")  //toggle between two elements
saveData("name","TotoJS")  //Save data in the system virtual storage by providing specific string or variable
getData("name")   //the output is TotoJS , you need to implement this function in alert or console or in any other element to display the result
updateData("name","Hello World")  //update the save data
removeData("name")   //remove saved data
center(".ele")  //align the element in center according to your parent element
hide(".ele") //hide a element
show(".ele") //show the hided element
eventOff(".ele") //turn off event , now you can not get the alert because you just turned off the event
eventOn(".ele") //now you get the alert because you just turn on the event
glow(".ele",7) //glow the element by providing the desire intensity
glowTxt(".ele",7) //glow the text by providing the desire intensity
putHTML(".ele","i am a div") //put html in your desire element
putValue(".ele","i am a div") //put value in your desire element
putText(".ele","i am a div") //put text in your desire element
```
### Creating a simple audio player using TotoJS 
so you get an idea how this can boost performance
```javascript
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://cdn.jsdelivr.net/gh/sameervegas/dist@latest/TotoJS.min.js"></script>
<title>TotoJs Example</title>
</head>
<body>
<script>
//TotoJS Is Case Sensitive
//You Can Build More Optimized Code.
createTag({
    element: "audio",
    attribute: {
        src: "https://www.fesliyanstudios.com/download-link.php?src=e&id=215",
    },
    append: "body",
});
createTag({
    element: "div",
    attribute: { class: "ele" },
    append: "body",
});
createTag({
    element: "span",
    attribute: { class: "eleA" },
    append: "div",
    text: "Play",
});
createTag({
    element: "span",
    attribute: { class: "eleB" },
    append: "div",
    text: "Pause",
});
createStyle({
    element:".eleA",
    font: "30px arial",
    position: "fixed",
});
createStyle({
    element:"body",
    background: "#222222",
});
createStyle({
    element:".eleB",
    font: "30px arial",
    position: "fixed",
});
createStyle({
    element:"div",
    width: "50px",
    height: "50px",
    background: "black",
    borderRadius: "10px",
    position: "fixed",
    bottom: "100px",
    color: "white",
    left: "calc(50% - 30px)",
    transform: "scale(3,3)",
});
hide(".eleB");
putHTML(".eleA", '<i class="fa fa-play" aria-hidden="true"></i>');
putHTML(".eleB", '<i class="fa fa-pause" aria-hidden="true"></i>');
setEvent({
    element: ".eleA",
    event: "click",
    do: () => {
        toggle(".eleB", ".eleA");
    },
});
setEvent({
    element: ".eleB",
    event: "click",
    do: () => {
        toggle(".eleB", ".eleA");
    },
});
setEvent({
    element: ".eleA",
    event: "click",
    do: () => {
        ele("audio").play();
    },
});
setEvent({
    element: ".eleB",
    event: "click",
    do: () => {
        ele("audio").pause();
    },
});

center("span");

</script>
</body>
</html>
```
### Pros
-Your code look so optimised and boost the productivity.
-You can do basic css and html in just few lines and easy to learn.
-Toggling between elements is so easy.
-You can align anything in center by using center().
-This can save you time and build more in just less time.
-The script is not bulky so the cdn loads in under microsecond.
-This is easy to learn and everything is just look perfect.

### Cons
-You need internet connection to load the cdn.
-This is case-sensitive.

### Limitations 
but we improving
-You can only apply stylesheet on a single element at once if you need to apply the stylesheet for other then you need to write it again.
-You can not implement variable in function you only need a string value like class|id|tag only.
-You can not bring whole stylesheet in variable.
-You can not create multiple elements and stylesheet at once.
-There is a limited function that can fulfill your requirement.
-You can not load link data in variable or can not just console the loaded value by using load().
-Stylesheet is limited you just do basic styling of element

## Conclusion 
You can use this script to save your time and build more in less time and in less line.You can easily create everything by using your skill and logic you can build almost everything and if you really want to increase productivity then you can implement this.
-We are working on new functions that can take decisions for you so cheers.
-Happy Programming.
 
 Developed and managed by sameervegas.
