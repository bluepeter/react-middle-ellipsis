import React, { useCallback } from "react";

const Component = props => {
  const measuredParent = useCallback(node => {
    function ellipse(parentNode, childNode, txtNode) {
      const childWidth = childNode.offsetWidth,
        containerWidth = parentNode.offsetWidth;

      if (childWidth * 1.1 > containerWidth) {
        const str = txtNode.textContent,
          childChars = str.length,
          avgLetterSize = childWidth / childChars,
          canFit = containerWidth / avgLetterSize,
          delEachSide = (childChars - canFit + 5) / 2,
          endLeft = Math.floor(childChars / 2 - delEachSide),
          startRight = Math.ceil(childChars / 2 + delEachSide);

        txtNode.textContent =
          str.substr(0, endLeft) + "..." + str.substr(startRight);
      }
    }
    if (node !== null) {
      const parent = node.parentNode,
        child = parent.querySelector(".constrainedChild"),
        txtToEllipse = parent.querySelector(".constrainedEllipse");

      if (child !== null && txtToEllipse !== null) {
        ellipse(
          // Use the smaller width.
          node.offsetWidth > parent.offsetWidth ? parent : node,
          child,
          txtToEllipse
        );
      }
    }
  });

  return (
    <div ref={measuredParent} style={{ width: "100%" }}>
      {props.children}
    </div>
  );
};

export default Component;
