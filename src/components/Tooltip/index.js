import styled from "styled-components";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useHover,
  useInteractions,
  FloatingArrow,
  arrow,
} from "@floating-ui/react";
import { useState } from "react";
import { useRef } from "react";

const TOOLTIP_COLOR = "#BADA55";

export const StyledTooltip = styled.div`
  position: ${(props) => props.strategy};
  top: ${(props) => `${props.y}px` ?? 0};
  left: ${(props) => `${props.x}px` ?? 0};
  width: max-content;
  background: ${TOOLTIP_COLOR};
  color: white;
  padding: 5px 8px;
  border-radius: 3px;
  white-space: wrap;
`;

const Tooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const arrowRef = useRef(null);
  const { x, y, strategy, refs, context } = useFloating({
    placement: "right",
    middleware: [
      offset(7),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      {showButton && (
        <button
          {...getReferenceProps()}
          ref={refs.setReference}
          style={{
            margin: "20px 10px",
          }}
          // onClick={() => setShowButton(false)}
        >
          Some button
        </button>
      )}
      {isOpen && (
        <StyledTooltip
          strategy={strategy}
          x={x}
          y={y}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          Some tooltip text
          <FloatingArrow
            fill={TOOLTIP_COLOR}
            height={5}
            ref={arrowRef}
            context={context}
          />
        </StyledTooltip>
      )}
    </>
  );
};

export default Tooltip;
