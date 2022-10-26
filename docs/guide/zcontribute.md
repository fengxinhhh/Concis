---
nav:
  title: Guide
  path: /guide
---

# Contribution Guidelines

This guide will guide you on how to contribute to Concis. Please take a few minutes to read this guide before you file an issue or pull request.

## Project Introduction

If you want to contribute, but have no way to start, here you can start faster and focus on component writing.

The project is currently divided into PC components and Mobile components. The technology stack is React+TypeScript. The main business is stored in the project root directory - >packages directory.

- Concis react contains the component code on the PC side and some configuration files.

- Concis react mobile contains the mobile side`s build code and some configuration files (not yet started).

In the directory of all components in the project, you can write component cases in demos under each component. For example, Button component has six cases. Finally, it is in the index under the component directory The component page is automatically generated in md.

For more information, please refer to the writing method of online components in the project.

## Start writing

After clone finishes the project, install all dependencies in the project directly in the root directory:

```tsx pure

pnpm install

```

You can now open the local document server by

```tsx pure

pnpm run start

```

## Packaging

Packaging methods include document packaging and npm packaging:

```tsx pure

Pnpm run docs:build   //The document is packaged and produced in docs dist

```

Execute in the packages or sub package directory:

```tsx pure

Pnpm run build    //npm package, produced in web react

```

## Testing

Perform unit tests and e2e tests on the components of the specified package in the packages/self package directory.

```tsx pure

Pnpm run test:unit   //Unit test, corresponding/__tests__/ unit

Pnpm run test:e2e   //e2e test, corresponding/__tests__/ e2e

```

## Branch management

Please follow the commonly used branch guidelines, use the keywords feat, fix bug, docs, etc., open a new branch, and submit a pull request to <a href="https://github.com/fengxinhhh/Concis">In the master branch of the project</a>, all pull requests are reviewed every evening.

## Recommendations and bug fixes

If you have any good ideas, such as new components, style fixes, project architecture design, you can go to <a href="https://github.com/fengxinhhh/Concis/issues">github issue</a> Report and we will respond positively on the same day.

## Development Process

After you have cloned the Concis code and installed all dependencies with npm install, you can also run the following common commands:

- pnpm start runs the Concis website locally.

- pnpm test:jest tests unit, e2e tests for all packages.

- pnpm docs:build to package the website web package.

For the component library npm package, you can view the corresponding command in package.json in the corresponding subpackage in the packages directory.

## Local experience

In the example folder, there is a `vite` + `react` project runtime environment, in which you can experience the `concis` component, run the command in the project root directory:

```tsx pure
pnpm example:dev
```

Visit `http://localhost:5173`.

<img src="https://concis.org.cn/images/examplepic.jpeg" />

<img src="https://concis.org.cn/images/example-darkpic.jpeg" />

## Feedback

f you encounter any problems or suggestions for improvement, please contact and leave a message.

<img src="https://concis.org.cn/images/wechat-self.jpg" width="50%" />
