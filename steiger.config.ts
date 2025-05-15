import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/shared/lib/types/router/**'],
    rules: {
      'fsd/forbidden-imports': 'off',
      'fsd/no-public-api-sidestep': 'off'
    }
  }
])
