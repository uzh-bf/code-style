# @uzh-bf/code-style

This repository contains the shared code style configurations for Web Development @ [DBF UZH](https://www.bf.uzh.ch).

## Packages 

The following packages are currently available:

- `@uzh-bf/code-style-react-js` for basic Javascript projects
- `@uzh-bf/code-style-react-ts` for basic Typescript projects

More packages for specific use cases will be added as needed (e.g., for NextJS projects).

## Usage

Install the package that is relevant in your context and add some or all of the following scripts to your `package.json` (customizations might be needed depending on your context):

```
"check": "npm-run-all --parallel check:ts format:ci lint",
"check:ts": "tsc",
"check:fix": "npm-run-all check:ts format lint:fix",
"format": "prettier --write \"src/**/*.(js|ts|tsx|graphql|json)\" \"*.(js|ts)\"",
"format:ci": "prettier --list-different \"src/**/*.(js|ts|tsx|graphql|json)\" \"*.(js|ts)\"",
"lint": "eslint --ext .js,.ts,.tsx src/",
"lint:fix": "eslint --fix --ext .js,.ts,.tsx src/"
```

Next, you need to create top-level configuration files for `prettier` and `eslint`. Create a file `.prettierrc.js` with the following contents (and take to import from the package you have actually installed):

```
// .prettierrc.js
const { prettier } = require('@uzh-bf/code-style-react-ts')
module.exports = prettier
```

Also, create an anologous file `.eslintrc.js` with the following contents:

```
// .eslintrc.js
const { eslint } = require('@uzh-bf/code-style-react-ts')
module.exports = eslint
```

Finally, create or extend your `.eslintignore` to include `.eslintrc.js`, as that will prevent your ESLint config from causing lint errors itself.

Once you have performed the setup as described above, simply run `npm run format` to execute `prettier` with the shared configuration, or `npm run lint` ro execute `eslint` similarly.

## Project-Level Customization

Configurations can be customized on a project-level by merging the configuration object as imported with one containing your own rules, and exporting the newly merged configuration.

## License

MIT
