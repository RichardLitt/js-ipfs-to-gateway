var Command = require('ronin').Command
var ipfsAPI = require('ipfs-api')
const path = require('path')
const opn = require('opn')

module.exports = Command.extend({
  desc: 'Add your file and open it in the browser',

  run: function (pathToFile) {
    const goodPath = path.join(process.cwd(), pathToFile)

    open(goodPath)

    function open (goodPath) {
      // TODO check if daemon is running
      var ipfs = ipfsAPI('localhost', '5001')

      ipfs.util.addFromFs(goodPath, /* {recursive: true}, */ function (err, res) {
        if (err || !res) {
          return console.error('err', err)
        }

        // TODO Why does this add your entire path
        var hash = res[0].hash

        console.log('Opening http://ipfs.io/ipfs/' + hash)
        opn('http://ipfs.io/ipfs/' + hash)

        // TODO This shouldn't be needed, but it is. Why?
        process.exit()
      })
    }
  }
})
