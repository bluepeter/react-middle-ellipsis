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

Once `import`ed, you can then wrap any element with
`<MiddleEllipsis>`. This will compute the width of the surrounding
parent node. Then, it will look for a child node whose class is
`constrainedChild`: it will use this element to compute the width
of the child, and then shorten the text element whose class is
`constrainedEllipsis` to fit within the parent.

Why do we have both `constrainedChild` and `constrainedEllipsis`?
Because we want BOTH to fit within the parent, but only one of them
should be ellipse'd. This way, things such as icons or images won't
be ellipsed.

```jsx
import React, { Component } from "react";

import MiddleEllipsis from "react-middle-ellipsis";

class Example extends Component {
  render() {
    return (
      <div style={{ width: "350px", whiteSpace: "nowrap" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            Don't ellipse me.{" "}
            <span className="constrainedEllipse">
              I am some long text that should be ellipsed in the middle because
              the end contains important stuff.
            </span>
          </span>
        </MiddleEllipsis>
      </div>
    );
  }
}
```

## Development

Notes for developing this component.

`yarn run start` in this directory and separately also in `/example`. This will
live reload any changes made in `/src`.

Change the version number in `package.json` and `npm publish` once complete.

## License

MIT © [bluepeter](https://github.com/bluepeter)
