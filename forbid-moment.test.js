const {RuleTester} = require("eslint");
const noMomentRule = require("./forbid-moment");

const ruleTester = new RuleTester();

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "forbid-moment", // rule name
  noMomentRule, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [
      { code: "import {getYear} from 'date-fns';", },
      { code: "const time = '10:00';"}, 
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "const moment = require('moment');",
        errors: [{ messageId: 'noMoment' }]
      },
      {
        code: "import moment from 'moment';",
        errors: [{ messageId: 'noMoment' }]
      }
    ],
  }
);

console.log("All tests passed!");