/**
 * 🪞 Mirror - Creates a proxy for one or multiple HTML elements
 *
 * @param  {String|Array} selectors The selector(s) for the target elements
 * @param  {String} property The property to watch (innerText or innerHTML)
 * @param  {Boolean} isHTML Indicates if the element should be treated as HTML or not
 * @returns {Array} Returns a getter to obtain the property and a setter to define the property of each element
 */
function Mirror(selectors, property, isHTML = false) {
    selectors = Array.isArray(selectors) ? selectors : [selectors];
  
    const elements = selectors.map(selector => {
      const element = document.querySelector(selector);
      if (!element) {
        console.warn(`The element "${selector}" does not exist in the document.`);
        return null;
      }
      return element;
    }).filter(Boolean); 
  
    // Creates the handler for the Proxy
    const handler = {
      get(target, prop) {
        if (prop === property) {
          return isHTML ? elements[0].innerHTML : elements[0].innerText;
        }
        return Reflect.get(...arguments);
      },
      set(target, prop, value) {
        if (prop === property) {
          for (const element of elements) {
            element[isHTML ? 'innerHTML' : 'innerText'] = value;
          }
          return true;
        }
        return false;
      }
    };
  
    // Creates the Proxy
    const obj = { [property]: isHTML ? elements[0].innerHTML : elements[0].innerText };
    const proxy = new Proxy(obj, handler);
  
    // Creates the getter and the setter
    const get = () => proxy[property];
    const set = value => { proxy[property] = value; };
  
    return [get, set];
  }
  

  export  default Mirror;