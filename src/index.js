import React, { useCallback } from "react";

const Component = props => {
  const prepEllipse = node => {
      const parent = node.parentNode,
        child = parent.querySelector(".constrainedChild"),
        txtToEllipse = parent.querySelector(".constrainedEllipse");

      if (child !== null && txtToEllipse !== null) {
        // (Re)-set text back to data-original-text if it exists.
        if (txtToEllipse.hasAttribute("data-original")) {
          txtToEllipse.textContent = txtToEllipse.getAttribute("data-original");
        }

        ellipse(
          // Use the smaller width.
          node.offsetWidth > parent.offsetWidth ? parent : node,
          child,
          txtToEllipse
        );
      }
    },
    measuredParent = useCallback(node => {
      if (node !== null) {
        window.addEventListener("resize", () => {
          prepEllipse(node);
        });
        prepEllipse(node);
      }
    });

  return (
    <div ref={measuredParent} style={{ width: "100%" }}>
      {props.children}
    </div>
  );
};

const ellipse = (parentNode, childNode, txtNode) => {
  const childWidth = childNode.offsetWidth,
    containerWidth = parentNode.offsetWidth;

  if (childWidth > containerWidth) {
    const str = txtNode.textContent,
      childChars = str.length,
      avgLetterSize = childWidth / childChars,
      canFit = containerWidth / avgLetterSize,
      delEachSide = (childChars - canFit + 5) / 2,
      endLeft = Math.floor(childChars / 2 - delEachSide),
      startRight = Math.ceil(childChars / 2 + delEachSide);

    txtNode.setAttribute("data-original", txtNode.textContent);
    txtNode.textContent =
      str.substr(0, endLeft) + "..." + str.substr(startRight);
  }
};

export default Component;
