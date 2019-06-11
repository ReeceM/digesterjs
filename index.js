/**
 * generates hash strings for using to logic data things
 * 
 * @description wrapper for the Crypto API, digest method
 * @version 0.1.0
 * @author ReeceM 0_o 2019 (c)
 * @exports default
 */
const map = new Map();

export default {
    /**
     * generates hash strings with passed strings and objects
     * 
     * @description wrapper for the Crypto API, digest method
     * @version 0.1.0
     * @author ReeceM 0_o 2019 (c)
     * @package digesterjs
     */

    /**
     * Converts the array buffer to a string hash
     * @param {ArrayBuffer} buffer the hash
     */
    hexString(buffer) {
        const byteArray = new Uint8Array(buffer);
    
        const hexCodes = [...byteArray].map(value => {
            const hexCode = value.toString(16);
            const paddedHexCode = hexCode.padStart(2, '0');
            return paddedHexCode;
        });
    
        return hexCodes.join('');
    },
    /**
     * Digests the string to array buffer hash
     * @param {mixed} message the string to hash
     * @param {String} algorithm sha-1 sha-256 sha-128...
     * @returns {Promise}
     */
    digestMessage(message, algorithm = 'SHA-1') {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        return window.crypto.subtle.digest(algorithm, data);
    },
    /**
     * Convert a given string to sha-1 hash and return it to the callbck when resolved
     * @param {String|Object} message the string to digest
     * @param {callback} callback(result, err)
     */
    __sha1Hash(message, callback = () => { }) {
        this.digestMessage(message).then(buffer => {
            
            callback(this.hexString(buffer))
            this.buffer = {
                key: this.hexString(buffer),
                value: message
            }
        }).catch(error => {
            console.error(error)
            callback(null, error)
        })
        return this
    },
    /**
     * Generates a sha1 hash of the payload
     * @param {mixed} payload the data to hash
     * @return {Promise} the result from the hash...
     */
    sha1(payload) {
        return new Promise((resolve, reject) => {
            this.__sha1Hash(payload, (result, error = null) => {
                if (error != null) {
                    reject(error)
                }
                resolve(result)
            })
        })
    },
    /**
     * The buffer optject with the keys
     * @returns {Map} buffer mapper
     */
    get buffer() {
        return this.$data.buffer
    }, 
    /**
     * Setter for the buffer in the MAP
     * @param {Object}
     */
    set buffer({key, value}) {
        if (this.$data.buffer == undefined) {
            this.$data.buffer = new Map()
        }
        this.$data().buffer.set(key, value)
        return this
    },
    $data(){
        return {
            buffer: map 
        }
    }    
}
