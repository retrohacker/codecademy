Codecademy Screen Scrapper
===

[![Greenkeeper badge](https://badges.greenkeeper.io/retrohacker/codecademy.svg)](https://greenkeeper.io/)

This is a simple tool for determining a student's progress on a codecademy tutorial.

# Usage

```js
var codecademy = require('codecademy')

/**
 * This should be the user name from the user's profile.
 * It will resolve to http://www.codecademy.com/[user]
 */
var user = "UserName"

/**
 * This should be the unique course name.
 * If you hover a card on a user's profile, your browser will show the url.
 * It will resolve to http://www.codecademy.com/tracks/[course]
 */
var course = "CourseName"

codecademy.getProgress(user,course,function(e,progress) {
  if(e.message === "EEUSER") return console.log("User Does Not Exist!")
  if(e) return console.log(e)
  console.log(user+" has completed "+progress+"% of "+course)
})
```

# Test Integrety

As a screen scraper, this tool is inherently fragile. If Codecademy changes up their website, this tool will stop working. As such, I have included a solid set of tests that cover the use cases for this app. Simply run `npm test` to make sure the tool still works. These tasks *require* network, and will fail if not present.
