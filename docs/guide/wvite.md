---
nav:
  title: Guide
  path: /guide
---

# Use in Vite

You can use vite to quickly build a react project and install preset packages, such as react and react-dom.

```tsx pure

npm run create vite

```

Then select the `react ts` template to install the default dependency of the project.

## Installation

Install Concis through the command:

```tsx pure

npm i --save-dev concis

```

## Introduction and use

```tsx pure

import { Button } from `concis/web-react`;

const App = () => (

<div className="App">

<Button type="primary">Button</Button>

</div>

);

```

Modify src/App Css. Antd/dist/antd.css is introduced at the top of the file.

```tsx pure

@import 'concis/web-react/style/index.css';

```

OK, now you can see that there are blue button components of Concis on the page, and you can continue to use other components to develop applications. For other development processes, you can refer to the official documents of vite.

Now that we have successfully run the Concis component, start developing your application!
