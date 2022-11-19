---
order: 9
title: Use in TypeScript
toc: false
---

# Use in TypeScript

Create a TypeScript project step by step using create-react-app and import concis.

:::warning{title=Warning}
concis is based on the latest stable version of TypeScript (>=4.0.0), make sure to use the matching version in your project.
:::

## Installation and initialization

```
create-react-app my-ts-app --typescript
```

## Configuring the TypeScript environment

```
npm i typescript --save-dev
Npx tsc --init     //Initialize the tsconfig.json file and configure it

npm i --save-dev @types/react @types/react-dom @types/node

```

This completes the installation of all the dependent packages of TypeScript in the create react app project.

## Configure typongs.d.ts

Create a new typeings.d.ts in the project root directory. For the type configuration of the default import module:

```
declare module 'concis';
```

## Installation

Install concis through the command:

```

npm i --save-dev concis

```

## Introduction and use

Create a new tsx file in the project and write it to:

```
import { Button, DatePicker, Loading } from 'concis';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);
```

Modify src/App.css. concis/web-react/style/index.css is introduced at the top of the file.

```

@import "~concis/web-react/style/index.css";

```

Ok, now you should see that the blue button component of Concis is already on the page, and you can continue to select other components to develop applications. For other development processes, you can refer to the official document of create react app.
