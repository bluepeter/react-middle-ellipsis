import React, { useCallback } from "react";

const Component = props => {
  const prepEllipse = node => {
      const parent = node.parentNode,
        child =
          parent.querySelector(".constrainedChild") /* Legacy. */ ||
          node.childNodes[0],
        txtToEllipse =
          parent.querySelector(".ellipseMe") ||
          parent.querySelector(".constrainedEllipse") /* Legacy. */ ||
          child;

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
    <div
      ref={measuredParent}
      style={{ ...(props.width && { width: props.width }) }}
    >
      {props.children}
    </div>
  );
};

const ellipse = (parentNode, childNode, txtNode) => {
  const childWidth = childNode.offsetWidth,
    containerWidth = parentNode.offsetWidth,
    txtWidth = txtNode.offsetWidth,
    targetWidth = childWidth > txtWidth ? childWidth : txtWidth;

  if (targetWidth > containerWidth) {
    const str = txtNode.textContent,
      txtChars = str.length,
      avgLetterSize = txtWidth / txtChars,
      canFit = (containerWidth - (targetWidth - txtWidth)) / avgLetterSize,
      delEachSide = (txtChars - canFit + 5) / 2,
      endLeft = Math.floor(txtChars / 2 - delEachSide),
      startRight = Math.ceil(txtChars / 2 + delEachSide);

    txtNode.setAttribute("data-original", txtNode.textContent);
    txtNode.textContent =
      str.substr(0, endLeft) + "..." + str.substr(startRight);
  }
};

export default Component;
