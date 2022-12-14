---
order: 8
title: Use in Create-react-app
---

# Use in Create-react-app

You can use create-react-app or build a package management project directory by yourself, and install preset packages, such as react and react-dom.

```bash

create-react-app myapp

```

Or

```bash

mkdir myapp && cd myapp
npm init - y
npm i --save-dev react react-dom

```

## Installation

Install Concis through the command:

```bash

npm i --save-dev concis

```

## Introduction and use

```tsx pure
import { Button } from 'concis';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);
```

Modify `src/App.css`. `concis/web-react/style/index.css` is introduced at the top of the file.

```bash

@import 'concis/web-react/style/index.css';

```

OK, now you can see that there are blue button components of Concis on the page, and you can continue to use other components to develop applications. For other development processes, you can refer to the official document of create react app.

Now that we have successfully run the Concis component, start developing your application!
