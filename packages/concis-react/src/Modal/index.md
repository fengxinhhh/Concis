---
title: Modal
nav:
  title: Component
  path: /common
group:
  title: Feedback
mobile: false
---

# Modal

Open a floating layer on the current page to carry related operations.

## Basic use

The most basic dialog box.

<code src="./demos/index1.tsx" />

## Asynchronous shutdown

Support `onOk` and `onCancel` to use `Promise` to asynchronously close dialog boxes.

<code src="./demos/index2.tsx" />

## Functional call

Through ` Modal Confirm ` Quick call to enable Modal. Asynchronous closing is also supported.

The difference between functional calling and component calling is that the former gives the Modal display status to the component hosting, and the latter places the Modal display status in the calling end hosting.

<code src="./demos/index4.tsx" />

## Message prompt

There are four types of message prompts: `info`, `success`,` warning `, and` error `.

<code src="./demos/index3.tsx" />

## Custom Footer

Pass in `okButtonProps` and` cancelButtonProps` to customize the props of the OK button and the Cancel button respectively. If `okButtonProps` and` cancelButtonProps` still cannot meet the needs, you can directly pass in `footer` to customize the footer content.

`Footer ` Incoming `<></>` means there is no footer.

<code src="./demos/index5.tsx" />

## Custom Width

Use `width` to configure the percentage width of the dialog box.

Set string to represent px value and number to represent percentage value.

<code src="./demos/index9.tsx" />

## Customize button text

Set `okText` and `cancelText` to customize button text.

<code src="./demos/index6.tsx" />

## Delay loading data

The loading effect is displayed in the dialog box.

<code src="./demos/index7.tsx" />

## With step bar dialog box

Steps are displayed in the dialog box.

<code src="./demos/index8.tsx" />

<API />
