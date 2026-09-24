# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A Create React App (react-scripts 5.0.1) catalog of standalone React hook/pattern examples (useState, useEffect, useRef, useReducer, Context API, compound components, interview-prep snippets, etc.), each rendered on its own page with a toggleable source-code viewer.

## Commands

- `npm start` — run the dev server at http://localhost:3000
- `npm test` — run the CRA/Jest test runner in interactive watch mode (`npm test -- --watchAll=false` for a single non-watch run; pass a filename/pattern to target one test file)
- `npm run build` — production build into `build/`

There is no lint script beyond the CRA-bundled `eslintConfig` (`react-app`, `react-app/jest`) in `package.json`; `npm start`/`npm run build` surface lint errors in the console.

## Architecture

**Routing**: `src/router.js` defines a `createBrowserRouter` tree with `src/layouts/RootLayout.js` (nav + `<Outlet />`) as the shell, and one page per hook/topic under `src/pages/` (`UseState.js`, `UseEffects.js`, `UseRefs.js`, `Reducers.js`, `Contexts.js`). `src/App.js` is a separate, un-routed page that renders an older set of examples directly (tip calculator, star rating, text expander, currency converter, geolocation, date counter, bank account, compound accordion, dark mode context) — it is not wired into `router.js`/`index.js`'s render path is worth checking before assuming it's live.

**Example display pattern**: every catalog entry follows the same shape:

1. The live component lives under `src/components/<feature>/...` (or `src/components/hooks/<hookName>/...` for hook demos).
2. Its literal source is duplicated as a template-string export in a sibling `codes.js` file (e.g. `src/components/hooks/useRef/codes.js` exports `focusElement`, `timer`, etc. as raw source strings).
3. A page in `src/pages/` imports both the component and its code string, and wraps them in `<HeaderCard text="..." code={theCodeString}><TheComponent /></HeaderCard>`.
4. `HeaderCard` (`src/components/HeaderCard.js`) renders the title, a "See code" toggle button, the live component (`children`), and — when toggled — the raw source via `src/components/Code.js` (a `<pre><code>` dump).

When adding a new example: build the component, copy its exact source into the feature's `codes.js` as an exported template string, then register both in the relevant page under `src/pages/`. Keeping the `codes.js` string in sync with the actual component file is a manual, easy-to-forget step since nothing enforces it.

**Reducers**: all `useReducer` demos share one code-string module, `src/components/hooks/Reducers/codes.js`, with the reducer components themselves alongside it in `src/components/hooks/Reducers/`.

**Context**: `src/context/DarkModeContext.js` exposes a `DarkModeProvider` + `useDarkMode()` hook pair (throws if used outside the provider) — used as the reference pattern for other context-based examples under `src/components/hooks/useContext/`.

**Compound components**: `src/components/compoundComponents/accordion/` (`Accordion.js`, `Item.js`, `Header.js`, `Content.js`) demonstrates the compound-component pattern (`Accordion.Item`, `Accordion.Header`, `Accordion.Content` attached as static properties), driven by `index` props rather than internal shared state discovery.

**Interview prep**: `src/components/interview/InterviewPrep.js` is a currently untracked/uncommitted scratch area (per git status) not yet wired into a page or router entry.

## Checking Documentation

- **important:** When implementing any lib/framework-specific feature, always check the appropiate lid/framework documentation using the Context7 MCP server before writing any code.
