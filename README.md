# `useScreenDetector` Hook

## Overview

`useScreenDetector` is a custom React hook that helps you determine the current screen size and orientation (landscape or portrait) based on predefined breakpoints. It is designed to be used for responsive web development, where you need to handle different screen sizes like mobile, tablet, and desktop.

The hook allows you to dynamically adjust UI elements based on the screen size and orientation.

![example](./demo.gif)

## Installation

You can install the package via npm:

```bash
npm install @adrihfly/screen-detector-hook
```

Or via yarn:

```bash
yarn add @adrihfly/screen-detector-hook
```

## Usage

### Example

Here’s how to use the useScreenDetector hook:

```jsx
import React from 'react';
import { useScreenDetector } from '@adrihfly/use-screen-detector';

const MyComponent = () => {
  const { screen, landscape } = useScreenDetector({
    breakpoints: {
      mobile: 400,
      tablet: 768,
      desktop: 1024,
    },
  });

  return (
    <div>
      <p>Current screen size: {screen}</p>
      <p>Landscape: {landscape ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default MyComponent;
```

## Hook API

useScreenDetector(options):

#### Parameters:

	•	options: An object containing the breakpoints for different screen sizes.
	•	breakpoints: Object with keys as screen types (mobile, tablet, desktop) and values as width breakpoints in pixels.

#### Returns: An object containing:

	•	screen: The current screen type based on the breakpoints (mobile, tablet, desktop).
	•	landscape: A boolean value indicating if the current orientation is landscape (true) or portrait (false).


### Contribution

Feel free to open issues or submit pull requests if you’d like to improve the hook or add new features. Contributions are always welcome!


### License

This project is licensed under the MIT License - see the LICENSE file for details.
