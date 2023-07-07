# 🎉🔮 Mirror.js: Your Fun, Lightweight, Reactive Library! 🪞🎈

Mirror.js is a *snazzy* and *lightweight* JavaScript library that is designed to simplify the process of creating proxies for one or multiple HTML elements. 🌠 Inspired by the mighty React, but made light as a feather, Mirror.js was born out of the desire for simplicity. 🕊️🍃

## 💡 ¿ yhW

Have you ever found yourself tired of using hefty libraries such as React or Vue just for their reactivity? 🤔😴 Well, so did I. It was around that time I discovered the interesting concept of JavaScript Proxies. 🧐🎁 Proxies offer the reactive properties I needed, but were a tad complex for beginners to set up and handle. 😥💼 That's why I created Mirror.js - to help my students, and anyone else out there, use Proxies in the simplest way possible! 😃🎯

With Mirror.js, you can *read* and *modify* HTML elements with the properties of an object. Yes, it's just as simple and cool as it sounds! 😎🎩

## 🚀 detratS gnitteG

You can start using Mirror.js by calling the Mirror function to create a getter and setter for each of the target element's properties. Watch out for either `innerText` or `innerHTML` properties. 🧭🔍

```javascript
const [get, set] = Mirror('#myElement', 'innerText');
```

Monitor multiple elements by passing an array of selectors, as shown below:

```javascript
const [get, set] = Mirror(['#myElement1', '#myElement2'], 'innerText');
```

If you want to treat the element as HTML, set the isHTML parameter to true

```javascript
const [get, set] = Mirror('#myElement', 'innerHTML', true);
```

## ⚠️⛑️ tsriF ytefaS

Using innerHTML might open a window to some potential security risks especially if the content is user-supplied or from an untrusted source. 😱🔓 To ensure your application remains as secure as a vault, remember to sanitize the HTML content. 🧼🔒 We recommend using a library like DOMPurify to scrub your HTML clean! ✨🛡️


## 🎮  egasU

After creating your magical getters and setters, you can get or set the value of the property as easy as this:

```javascript
// Get the current value
console.log(get());

// Set a new value
set('Hello, world!');
````


## elpmexE

```javascript
import Mirror from './mirror.js';

const [title, setTitle] = Mirror(['#subtitle','#title'], 'title');

setInterval(() => {
    setTitle(`Tada : ${new Date().toLocaleString()}`);
}, 2000);
```

The new value will be updated for all the target elements at once, like a perfect mirror! 🪞🎊

## 🤝 Contribute || etubirtnoC

Mirror.js is my first-ever library! It's the humble work of an average developer who enjoys making things easier for himself and others. 😊👨‍💻 If you have any ideas or improvements, or if you'd like to contribute to this project, don't hesitate at all! All help is greatly appreciated! 💖👥

Happy coding, and remember - keep it simple and fun! 🎉🔮

