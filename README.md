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

## Summary

### Thought process
- The implementation is inspired by the Google Tag scripts. Consumers of widgets can have varying levels of coding experience. Therefore, it should be as easy as possible to use/copy and be able to live in any page without it affecting the main content. 

### Technical decisions
- Usage of JSON files as config files - This is mainly to save time so that I can avoid setting up a backend from scratch. It's not the most user-friendly way of configuring questions, but for the purpose of the demo, I think it's sufficient.
- Namespace - While the html file does not contain any other content aside from the poll itself, I applied the `op-` prefix on classes, as well as scoped the styles under the `#poll` id, to make sure that other content within the page will not be affected by poll-specific styles.
- No framework - The widget is relatively simple enough that using a framework would be a bit overkill. The advantage is that the overall package size is very small. The disadvantage could be that it looks more verbose and harder to perceive.

### What could be improved
- File exports
- Developer experience (eslint, prettier, etc)
- Preventing poll from being shown twice
- Loading state


## Create new configs

1. Duplicate `example-config.json` found at the root directory. Rename the new file into to something else.
2. Replace empty strings with preferred values.
3. On `package.json`, change the `config` env variables to the name of the file you just created.
4. Run command.
