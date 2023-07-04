import type { Rule } from 'eslint'

const always: Rule.RuleModule = {
  create: (context) => ({
    Program(node) {
      const [option] = context.options

      context.report({
        node,
        message: option?.message ?? 'This rule reports always.',
      })
    },
  }),
}

export default always
