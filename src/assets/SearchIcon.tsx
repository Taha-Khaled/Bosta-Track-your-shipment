import * as React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" {...props}>
      <path
        d="M21 21l7 7"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle cx={13} cy={13} r={11} stroke="#fff" strokeWidth={3} />
    </svg>
  );
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
