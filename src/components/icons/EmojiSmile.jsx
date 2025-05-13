export function EmojiSmile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="full"
      height="full"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="64"
          strokeDashoffset="64"
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"
        >
          <animate
            begin="10.2s"
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </path>
        <path
          strokeDasharray="2"
          strokeDashoffset="2"
          d="M9 9v1"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="10.7s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <path
          strokeDasharray="2"
          strokeDashoffset="2"
          d="M15 9v1"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="11s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <path
          strokeDasharray="12"
          strokeDashoffset="12"
          d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="11.3s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
