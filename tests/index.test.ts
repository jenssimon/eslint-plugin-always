import { describe, expect, test } from "vite-plus/test"
import { ESLint } from "eslint"
import plugin from "../src/index.ts"
import always from "../src/rules/always.ts"

const runAlwaysRule = async (source: string, option?: { message?: string }) => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    plugins: {
      always: plugin,
    },
    overrideConfig: {
      rules: {
        "always/always": ["error", option ?? {}],
      },
    },
  })

  const [result] = await eslint.lintText(source, { filePath: "input.js" })
  return result?.messages ?? []
}

describe("always rule", () => {
  test("reports with default message", async () => {
    const reports = await runAlwaysRule("const value = 1")

    expect(reports).toHaveLength(1)
    expect(reports[0]?.message).toBe("This rule reports always.")
  })

  test("reports with configured custom message", async () => {
    const reports = await runAlwaysRule("const value = 1", {
      message: "No ESLint config found.",
    })

    expect(reports).toHaveLength(1)
    expect(reports[0]?.message).toBe("No ESLint config found.")
  })
})

test("plugin exports the always rule", () => {
  expect(plugin.rules.always).toBe(always)
})
