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
      <div>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "550px" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "450px" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "350px" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "250px" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
      <div style={{ width: "150px" }}>
        <MiddleEllipsis>
          <span className="constrainedChild">
            <span className="constrainedEllipse">{longText}</span>
          </span>
        </MiddleEllipsis>
      </div>
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
      </div>
    </div>
  );
};

export default Component;
