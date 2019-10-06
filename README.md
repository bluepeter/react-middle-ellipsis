# React Middle Ellipsis

[Check out the demo.](https://bluepeter.github.io/react-middle-ellipsis/)

Adding ellipses to the end of long text is cool. But not always!
Sometimes the end of the text contains vital information,
particularly for URLs or filenames.

This React component is designed with that use case in mind.

## Install

```bash
yarn add react-middle-ellipsis
```

## Usage

Once `import`ed, you can then wrap any node with `<MiddleEllipsis>`.
This will compute the width of the surrounding parent node. Then, it
will look for the child node (so make sure to add a `span` at
minimum internally): it will use this element to compute the width
of the child, and then shorten the text element whose class is
`ellipseMe` (optional) to fit within the parent.

The component re-computes things if the browser window is resized, too!

```jsx
import React from "react";
import MiddleEllipsis from "react-middle-ellipsis";

const Component = props => {
  return (
  <>
    <div style={{ width: "350px", whiteSpace: "nowrap" }}>
      <MiddleEllipsis>
        <span>
          I am some long text that should be ellipsed in the middle because
          the end contains important stuff.
        </span>
      </MiddleEllipsis>
    </div>
    <div style={{ width: "350px", whiteSpace: "nowrap" }}>
      <MiddleEllipsis>
        <span>
          Don't ellipse me.{" "}
          <span className="ellipseMe">
            I am some long text that should be ellipsed in the middle because
            the end contains important stuff.
          </span>
        </span>
      </MiddleEllipsis>
    </div>
  <>
  );
};

export default Component;
```

## Development

Notes for developing this component.

`yarn && yarn run start` in this directory and separately also in `/example`. This will
live reload any changes made in `/src`.

Change the version number in `package.json` and `npm publish` once complete.

## License

MIT © [bluepeter](https://github.com/bluepeter)
