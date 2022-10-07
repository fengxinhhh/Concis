---
title: Drawer
nav:
  title: Component
  path: /common
group:
  title: Feedback
mobile: false
---

# Drawer

A drawer type panel that slides out from one side of the screen after a command is triggered.

## Basic use

For the basic drawer, click the trigger button to slide the drawer out from the right side, and click the mask area to close it.

<code src="./demos/index1.tsx" />

## Different directions

Configure 'align' to change the drawer location. You can select 'left', 'right', 'top', and 'bottom'. The default is' right '.

<code src="./demos/index2.tsx" />

## Asynchronous shutdown

'onCancel' and 'onOk' are supported for Promise writing, and asynchronous control drawer display status.

<code src="./demos/index3.tsx" />

## Custom Footer

Pass in 'okButtonProps' and' cancelButtonProps' to customize the 'props' of the OK button and the Cancel button respectively. If 'okButtonProps' and' cancelButtonProps' still cannot meet the needs, you can directly pass in 'footer' to customize the footer content.

`Footer ` Incoming '<></>' means there is no footer.

<code src="./demos/index4.tsx" />

## Custom Width

Use 'width' to configure the percentage width of the dialog box.

Set 'string' to represent the px value, and set 'number' to represent the percentage value.

<code src="./demos/index5.tsx" />

## Drawer Form

An instance of 'Form'+'Drawer'.

<code src="./demos/index6.tsx" />

<API />
