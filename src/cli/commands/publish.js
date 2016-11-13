var Command = require('ronin').Command
var ipfsAPI = require('ipfs-api')

module.exports = Command.extend({
  desc: 'Publish your project',

  run: function (pathToAdd) {
    publish(pathToAdd)

    function publish (pathToAdd) {
      // TODO check if daemon is running
      var ipfs = ipfsAPI('localhost', '5001')

      ipfs.util.addFromFs(pathToAdd, {recursive: true}, function (err, res) {
        console.log(err, res)

        // if (err || !res) {
        //   return console.error('err', err)
        // }

        // var hash = res[res.length - 2].Hash

        // console.log('Published', pathToAdd, 'with the following hash:', hash)
        // console.log('You can access it through your local node or through a public IPFS gateway:')
        // console.log('http://localhost:8080/ipfs/' + hash)
        // console.log('http://ipfs.io/ipfs/' + hash)
      })
    }
  }
})
