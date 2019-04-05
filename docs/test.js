
(function(){   
    let __digesterjs = {}

    import("./digesterjs.js").then(module => {
        __digesterjs = module.default
    })

    var plugin = function (hook, vm) {
        hook.doneEach(() => {
            document.getElementById('test-button').onclick = () => {
                let date = new Date().toLocaleString()
                let result_element = document.getElementById('result')

                __digesterjs.__sha1Hash(date, (result, err = null) => {

                    if (err) {
                        console.error('[ERROR - digesterjs] %o', err)
                        result_element.innerText = `[ERROR - digesterjs] ${err}`
                    }

                    result_element.innerText = `SHA-1: ${result} --- Time: ${date}`

                })
            }
        })
    }
        
    window.$docsify.plugins.push(plugin)
})();