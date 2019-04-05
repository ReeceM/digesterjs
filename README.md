# digesterjs
Generates SHA digests using browsers Crypto API for getting hashes :)


## Usage

```html 
<script src="https://reecem.github.io/digesterjs/digesterjs.js"></script>
```
## Example usage

This is how you can use the thing to generate a hash for a payload of data where you don't always have a repeatable ID

```js
// import for ES6 type projects
import digesterjs from 'digesterjs';

/**
 * Using the digest to version internal information of a queue
 * 
 */
var payload = {
    data: {
        //... random unknown structure
    },
    ...
}

let stateHolder = new Map()

digesterjs.__sha1Hash(payload.data, (result, err = null) => {

    let count = 0;

    if (err) {
        console.error('[ERROR - digesterjs] %o', err)
        new Error(err)
    }

    if (result != null) {
        count = stateHolder.get(result) || count
        count++ // increment the occurances...
        stateHolder.set(result, count + 1)
    }
    
    // example of the stack count...

    if (count > 10) {
        
        console.error('[perminent failure] I have given up stacking this %o', removed_stack)
        // remove the payload from the queue
        stateHolder.delete(result)
    }

})

```
