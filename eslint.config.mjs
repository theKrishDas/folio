import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// DOCS:
// https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
const eslintConfig = [
  ...compat.config({
    extends: ["next", "next/core-web-vitals", "next/typescript"],
    rules: {
      eqeqeq: "off",
      quotes: ["warn", "double"],
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
    },
  }),
]

export default eslintConfig
