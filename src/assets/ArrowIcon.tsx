import * as React from "react";

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 6"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 0L5 3.6 8.75 0 10 1.2 5 6 0 1.2 1.25 0z"
        fill="#98A2B3"
      />
    </svg>
  );
}

const MemoArrow = React.memo(ArrowIcon);
export default MemoArrow;
