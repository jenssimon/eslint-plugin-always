module.exports = (context) => ({
  Program(node) {
    context.report({
      node,
      message: context.options && context.options.length && context.options[0].message
        ? context.options[0].message : 'This rule reports always.',
    });
  },
});
