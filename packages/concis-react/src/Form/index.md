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

<code src="./demos/index1.tsx"/>

## Layout

Configure the layout property as horizontal | vertical to change the layout method.

<code src="./demos/index2.tsx"/>

## Controlled forms and asynchronous verification

To make a form controlled, you need to do two steps:

1. useRef creates a ref and passes it to the Form with the formField parameter;

2. Configure the field attribute in Form.Item to make it a controlled item. The field attribute name cannot be duplicate;

In this way, you can use the const form=Form. useForm(); Use the internal methods provided by the form to obtain the information of the form. When the onSubmit method is triggered, the verification will be performed automatically, but you can also manually trigger validateFields for verification.

In rules, you can add a custom method {fn: ()=>, message: 'custom prompt'} to pass custom verification rules.

<code src="./demos/index3.tsx"/>

## Form Reset

Use Form. useForm() The resetFields method resets the controlled items in the form.

<code src="./demos/index4.tsx"/>

## Global Disable

Set the disabled attribute to disable it globally.

<code src="./demos/index5.tsx"/>

## Single row disabling

Set the disabled attribute of Form.Item to disable a single line.

<code src="./demos/index7.tsx" />

## Registration Form

Registration form case.

<code src="./demos/index8.tsx" />

## Pop up feedback

Submit feedback through the Message component.

<code src="./demos/index9.tsx" />

## Get form context

Use Form. useForm() UseFormContext gets the controlled parameters of the form.

<code src="./demos/index10.
