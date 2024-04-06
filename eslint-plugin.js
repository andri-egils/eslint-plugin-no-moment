const noMomentRule = require("./forbid-moment");
const plugin = { rules: { "forbid-moment": noMomentRule } };
module.exports = plugin;