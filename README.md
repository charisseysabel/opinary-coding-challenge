# Opinary Poll

A poll widget made with webpack, typescript, and CSS.

## Quickstart
### Prerequisites:
- Node 16

#### Install dependencies

```
npm install
```

#### Run locally

```
npm start
```

#### Generate production bundle

```
npm run build
```

This creates 3 files in the `dist` directory:
- `bundle.js` - The actual file where all the logic is stored. In a real world example, this file would probably come from a CDN.
- `index.html` - a basic html file.
- `widget.js` - The embed script that needs to be added to `index.html` via `script` tags. This will "inject" `bundle.js` into the file.

## Summary

### Thought process
- The implementation is inspired by the Google Tag scripts. Consumers of widgets can have varying levels of coding experience. Therefore, it should be as easy as possible to use/copy and be able to live in any page without it affecting the main content. 

### Technical decisions
- Usage of JSON files as config files - This is mainly to save time so that I can avoid setting up a backend from scratch. It's not the most user-friendly way of configuring questions, but for the purpose of the demo, I think it's sufficient.
- Namespace - While the html file does not contain any other content aside from the poll itself, I applied the `op-` prefix on classes, as well as scoped the styles under the `#poll` id, to make sure that other content within the page will not be affected by poll-specific styles.
- No framework - The widget is relatively simple enough that using a framework could be a bit overkill. Another reason is that I also would like to try not using any framework. The advantage is that the overall package size is very small. The disadvantage could be that it looks more verbose and harder to perceive.

### What could be improved
- File exports
- Developer experience (eslint, prettier, etc)
- Preventing poll from being shown twice
- Loading state
- More tests to cover the generated HTML

## Create new configs

1. Duplicate `example-config.json` found at the root directory. Rename the new file into to something else.
2. Replace empty strings with preferred values.
3. On `package.json`, change the `config` env variables in `start` and `build:bundle` scripts to the name of the file you just created.
4. Run commands.
5. (Optional) To create a new demo file with the new config, run `npm run build:bundle`. This will create a new `dist` directory containing 3 files. To show the poll in the html, copy the contents of `widget.js` and add it as a script in the html. (This is really only to demonstrate that you only need `widget.js` when adding a poll.)
