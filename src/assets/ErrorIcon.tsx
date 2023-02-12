import * as React from "react";

function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.705 14.703L9.191 3.737a1.531 1.531 0 012.618 0l6.486 10.966A1.532 1.532 0 0116.985 17H4.015a1.531 1.531 0 01-1.31-2.297zm7.008-7.648a.8.8 0 011.574 0l.013.144v4l-.013.143a.8.8 0 01-1.574 0l-.013-.144v-4l.013-.143zm0 6.801a.8.8 0 011.574 0L11.3 14l-.013.144a.8.8 0 01-1.574 0L9.7 14l.013-.144z"
        fill="#B42318"
      />
    </svg>
  );
}

const MemoErrorIcon = React.memo(ErrorIcon);
export default MemoErrorIcon;
