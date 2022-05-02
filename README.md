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
Copy this cdn link and implement in your code [https:cdn.jsdelivr.net/gh/sameervegas/dist@latest/toto.min.j](https:cdn.jsdelivr.net/gh/sameervegas/dist@latest/toto.min.js).

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
createStyle({
    element:".ele",
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
