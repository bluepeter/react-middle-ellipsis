import React, { useCallback, useEffect, useRef } from "react";

const Component = props => {
  const nodeRef = useRef(null);
  const prepEllipse = useCallback(node => {
    const parent = node.parentNode;
    const child =
      parent.querySelector(".constrainedChild") /* Legacy. */ ||
      node.childNodes[0];
    const txtToEllipse =
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
  }, []);

  const measuredParent = useCallback(
    node => {
      nodeRef.current = node;
      if (node !== null) {
        prepEllipse(node);
      }
    },
    [prepEllipse]
  );

  useEffect(() => {
    const handleResize = () => {
      if (nodeRef.current) {
        prepEllipse(nodeRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [prepEllipse]);

  // Re-run ellipsis calculation when component re-renders (for prop/state changes)
  useEffect(() => {
    if (nodeRef.current) {
      prepEllipse(nodeRef.current);
    }
  });

  return (
    <div
      ref={measuredParent}
      style={{
        wordBreak: "keep-all",
        overflowWrap: "normal",
        ...(props.width && { width: props.width }),
      }}
    >
      {props.children}
    </div>
  );
};

const ellipse = (parentNode, childNode, txtNode) => {
  const childWidth = childNode.offsetWidth;
  const containerWidth = parentNode.offsetWidth;
  const txtWidth = txtNode.offsetWidth;
  const targetWidth = childWidth > txtWidth ? childWidth : txtWidth;

  if (targetWidth > containerWidth) {
    const str = txtNode.textContent;
    const txtChars = str.length;
    const avgLetterSize = txtWidth / txtChars;
    const canFit = (containerWidth - (targetWidth - txtWidth)) / avgLetterSize;
    const delEachSide = (txtChars - canFit + 5) / 2;
    const endLeft = Math.floor(txtChars / 2 - delEachSide);
    const startRight = Math.ceil(txtChars / 2 + delEachSide);

    txtNode.setAttribute("data-original", txtNode.textContent);
    txtNode.textContent =
      str.substr(0, endLeft) + "..." + str.substr(startRight);
  }
};

export default Component;
