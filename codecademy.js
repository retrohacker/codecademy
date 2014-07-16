var scrap = require('scrap')

var url = "http://www.codecademy.com"

var codecademy = module.exports = {}
codecademy.getProgress = getProgress
function getProgress(username,course,cb) {
  console.log("Starting request")
  scrap(url+"/"+username, function(e,$) {
    if(e) {
      if(e.message === "HTTP response code is not 200.") {
        var EEUSER = new Error("EEUSER")
        return cb(EEUSER)
      }
      return cb(e)
    }
    try {
      var found = false
      $('.card').find('a').each(function(i,v) {
        if(found) return //only call callback once
        if(v.attribs.href=='/tracks/'+course) {
          cb(null,parseJSCard($(v)))
          found = true
        }
      })
      if(!found) cb(null,0)
    } catch(e) {}
  })
}

function parseJSCard(card) {
  var progress = card.siblings().find('.progress').children('.progress__indicator').text()
  if(typeof progress != "undefined") progress = 0 | progress.slice(0,progress.length-1)
  return progress || 0
}
