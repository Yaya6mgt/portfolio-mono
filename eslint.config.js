import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']), // Ajout de node_modules par sécurité
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Force l'utilisation de 'const' au lieu de 'let' si la variable n'est jamais réassignée
      'prefer-const': 'error',

      // Alerte si une variable est déclarée mais jamais utilisée (sauf si elle commence par un underscore)
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Alerte en cas d'utilisation du type 'any' (on pousse à typer correctement)
      '@typescript-eslint/no-explicit-any': 'warn',

      // Force les égalités strictes (=== et !==) plutôt que (== et !=)
      'eqeqeq': ['error', 'always'],

      // Alerte s'il reste des console.log (évite de polluer la console en production)
      // On autorise quand même console.warn et console.error
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
])