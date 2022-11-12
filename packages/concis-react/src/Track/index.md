---
title: Track
nav:
  title: Component
  path: /common
group:
  title: Business
mobile: false
---

# Track

Buried points injected on the page are used to count page visits, performance parameters, network requests, and resources.

## Basic use

The `Track` component exposes the `callbackTrackData` method, which can be called where you want to collect the current page data.

Usually, the interface report push operation is performed after the collection.

<code src="./demos/index1.tsx" />

The `App` component in your project looks like this:

```tsx pure
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import A from './pages/A';
import B from './pages/B';
import { Track } from 'concis';

function App() {
  const trackRef = React.useRef();

  // 用在项目根目录，定时上报，如每隔一小时上报一次
  setInterval(() => {
    getTrackData();
  }, 60 * 60 * 1000);

  function getTrackData() {
    const res = trackRef.current.callbackTrackData();
    //接口上报...
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<A />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
      </Routes>
      <Track ref={trackRef} />
    </div>
  );
}
```

Of course, based on the generality of the `Track` component itself, you can also call the `callbackTrackData` method anywhere you want to collect data by passing down the `ref` of the `Track`.
