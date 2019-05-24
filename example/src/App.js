import React from "react";
import MiddleEllipsis from "react-middle-ellipsis";

const Component = props => {
  const longText =
    "https://thisIsAVeryLongUrl/that/needs/to/be/truncated/in/the/middle/so/that/the/important/end/matter/is/preserved/here.html";
  return (
    <div
      style={{
        margin: "100px",
        fontFamily: "sans-serif",
        lineHeight: "2em",
        whiteSpace: "nowrap",
      }}
    >
      <h3 style={{ color: "#666" }}>
        Let's do some middle ellipsing in React!
      </h3>
      <p style={{ color: "#666" }}>
        We are constraining the width of the following lines (view source). Note
        the long URL ellipses in the middle.
      </p>
      <p style={{ color: "#666" }}>
        Try resizing the browser window for some extra fun!
      </p>
      <div>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "550px", maxWidth: "100%" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "450px", maxWidth: "100%" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "350px", maxWidth: "100%" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "250px", maxWidth: "100%" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "150px", maxWidth: "100%" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>

      <p style={{ color: "#666" }}>
        We also work in odd corner cases (note there shouldn't be an ellipse in
        the following):
      </p>
      <div
        style={{
          width: "150px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">/</span>
          </span>
        </MiddleEllipsis>
      </div>

      <p style={{ color: "#666" }}>
        You can also add text that we *don't* want ellipsed at all, too:
      </p>

      <div style={{ width: "350px" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            Don't ellipse me though.{" "}
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "250px" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            Don't ellipse me though.{" "}
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
        <p style={{ color: "#666" }}>
          Brought to you by the friendly folks at{" "}
          <a href="https://foxandgeese.com">Fox and Geese</a>
        </p>
      </div>
    </div>
  );
};

export default Component;
