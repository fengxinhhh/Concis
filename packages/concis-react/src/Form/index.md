---
title: Form
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# Form

- A form with data collection, verification and submission functions, including check boxes, radio boxes, input boxes, drop-down selection boxes and other elements.

- If you want to experience the full function directly, you can view the demo of the full function. For the following cases, you can refer to the code. The interaction is biased.

## Basic usage

The most basic form.

<code src="./demos/index1.tsx"></code>

## layout

Configure the `layout` property to `horizontal | vertical` to change the layout.

<code src="./demos/index2.tsx"></code>

## Controlled form and asynchronous validation

Making a form a controlled form requires two steps:

1. `useRef` creates a `ref` and passes it to `Form` with the `formField` parameter;
2. Configure the `field` property in `Form.Item` to make it a controlled item, and the `field` property name cannot be repeated;

In this way, you can use the internal methods provided by the form to get the information of the form through `const form = Form.useForm();`. Validation is performed automatically when the `onSubmit` method is triggered, but you can also manually trigger `validateFields` for validation.

In `rules`, you can add custom method `{fn: () => , message: 'custom prompt'}` to pass custom validation rules.

<code src="./demos/index3.tsx"></code>

## form reset

Use the `Form.useForm().resetFields` method to reset the controlled items in the form.

<code src="./demos/index4.tsx"></code>

## disable globally

Set the `disabled` property to disable it globally.

<code src="./demos/index5.tsx"></code>

## Single line disable

Set the `disabled` property of `Form.Item` to disable for a single line.

<code src="./demos/index7.tsx"></code>

## Registration form

Registration form case.

<code src="./demos/index8.tsx"></code>

## popup feedback

Submit feedback through the `Message` component.

<code src="./demos/index9.tsx"></code>

## Get form context

Use `Form.useForm().useFormContext` to get form controlled parameters.

<code src="./demos/index10.tsx"></code>

## full functionality

<code src="./demos/index6.tsx"></code>

## API

| Name           | Description                                                                             | Type                    | Default      |
| -------------- | --------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| style          | Custom styles                                                                           | `CSSProperties`         | `--`         |
| className      | class name                                                                              | `string`                | `--`         |
| layout         | layout                                                                                  | `horizontal / vertical` | `horizontal` |
| formField      | The unique ref of the form, the controlled form must be passed, declared through useRef | `any`                   | `--`         |
| disabled       | globally disabled                                                                       | `boolean`               | `false`      |
| useForm        | Hook exposed by the controlled form                                                     | `Function`              | `--`         |
| onSubmit       | useForm.onSubmit, submit event                                                          | `Function`              | `--`         |
| resetFields    | useForm.resetFields, resets form events                                                 | `Function`              | `No data`    |
| validateFields | useForm.validateFields, manual validation event                                         | `Function`              | `--`         |
| useFormContext | useForm.useFormContext, get the current controlled state event of the form              | `Function`              | `--`         |

## Form.Item API

| Name       | Description                           | Type              | Default |
| ---------- | ------------------------------------- | ----------------- | ------- |
| style      | Custom styles                         | `CSSProperties`   | `--`    |
| className  | class name                            | `string`          | `--`    |
| label      | title                                 | `string`          | `--`    |
| wrapperCol | Single line distance from top Item    | `number`          | `20px`  |
| wrapperTol | Single line distance from bottom Item | `number`          | `20px`  |
| field      | Single-line controlled unique name    | `string`          | `--`    |
| rules      | Single-line validation rules          | `Array<ruleType>` | `[]`    |
| disabled   | disabled                              | `boolean`         | `false` |

## rullType API

| Name      | Description             | Type       | Default |
| --------- | ----------------------- | ---------- | ------- |
| required  | required                | `boolean`  | `--`    |
| maxLength | maximum length          | `number`   | `--`    |
| minLength | minimum length          | `number`   | `--`    |
| message   | Message                 | `string`   | `--`    |
| fn        | Custom validation rules | `Function` | `--`    |
