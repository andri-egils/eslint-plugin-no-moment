module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Forbid the use of momentjs.",
            category: "Best Practices",
            recommended: false,
        },
        fixable: "code",
        schema: [],
        messages: {
          noMoment: "Use of moment.js is forbidden." 
        }
    },
    create(context) {
        return {
            ImportDeclaration(node) {
              if (node.source.value === 'moment') {
                context.report({
                  node,
                  messageId: 'noMoment',
                });
              }
            },
            CallExpression(node) {
              if (node.callee.name === 'require' &&
                  node.arguments.length > 0 &&
                  node.arguments[0].value === 'moment') {
                context.report({
                  node,
                  messageId: 'noMoment',
                });
              }
            }
          };
    }
};