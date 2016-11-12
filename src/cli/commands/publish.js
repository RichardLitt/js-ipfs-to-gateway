var Command = require('ronin').Command
var fs = require('fs')
var ipfsAPI = require('ipfs-api')
var path = require('path')

module.exports = Command.extend({
  desc: 'Publish your project',

  run: function (name) {

    publish(name)

    function publish (name) {
      // TODO check if daemon is running
      var ipfs = ipfsAPI('localhost', '5001')

      ipfs.files.add(name, { recursive: true, 'stream-channels': false }, function (err, res) {
      	console.log(err, res)

//        if (err || !res) {
//          return console.error('err', err)
//        }
//
//        var hash = res[res.length - 2].Hash
//
//        console.log('Published', name, 'with the following hash:', hash)
//        console.log('You can access it through your local node or through a public IPFS gateway:')
//        console.log('http://localhost:8080/ipfs/' + hash)
//        console.log('http://ipfs.io/ipfs/' + hash)
//
      })
    }
  }
})
