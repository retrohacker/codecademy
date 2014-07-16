var test = require('tape')
var codecademy = require('../codecademy.js')

var user = "tlchack5"
test("Query JavaScript",function(t) {
  codecademy.getProgress(user,"javascript",function(e,progress) {
    t.error(e,"Should not error")
    t.equal(progress,16,"JavaScript progress should be 16")
    t.end()
  })
})
test("Query WebDev",function(t) {
  codecademy.getProgress(user,"web",function(e,progress) {
    t.error(e,"Should not error")
    t.equal(progress,3,"WebDev progress should be 3")
    t.end()
  })
})
test("Query JQuery",function(t) {
  codecademy.getProgress(user,"jquery",function(e,progress) {
    t.error(e,"Should not error")
    t.equal(progress,1,"JQuery progress should be 1")
    t.end()
  })
})
test("Query non-existant",function(t) {
  codecademy.getProgress(user,"lualualua",function(e,progress) {
    t.error(e,"Should not error")
    t.equal(progress,0,"If a user hasn't started a language, their progress should be 0")
    t.end()
  })
})
test("Incorrect User",function(t) {
 codecademy.getProgress("laksjdfkjdsfoirirriidsufiuewoiuoiewur","javascript",function(e,progress) {
    t.equal(e.message,"EEUSER","Query throws error")
    t.end()
 })
})
