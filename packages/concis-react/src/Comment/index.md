---
title: Comment
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
toc: content
---

# Comment

Feedback on website content and display comments.

## When to use

- The comment component can be used to discuss things, give feedback to the website, etc.

## Basic use

Basic comment component.

<code src='./demos/index1.tsx'></code>

## Nested comments

It can be nested.

<code src='./demos/index2.tsx'></code>

## Alignment

Configure align=right to align the date to the right.

<code src='./demos/index5.tsx'></code>

## Head Extra

Configure afterAuthor to personalize the content after the name.

<code src='./demos/index4.tsx'></code>

## Reply box

Implement a basic comment reply.

<code src='./demos/index3.tsx'></code>

## API

| Name        | Description                | Type            | Default |
| ----------- | -------------------------- | --------------- | ------- |
| style       | Custom styles              | `CSSProperties` | `--`    |
| className   | class name                 | `string`        | `--`    |
| author      | Author name                | `string`        | `--`    |
| afterAuthor | Extras after author name   | `ReactNode`     | `--`    |
| avatar      | Avatar                     | `JSX.Element`   | `--`    |
| content     | Comment content            | `ReactNode`     | `--`    |
| datetime    | time description           | `string`        | `--`    |
| actions     | Bottom configuration items | `ReactNode`     | `--`    |
| align       | title bar alignment        | `left / right`  | `left`  |
