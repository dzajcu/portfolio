export function Lightbulb(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="full"
      height="full"
      {...props}
    >
      <rect
        width="6"
        height="0"
        x="9"
        y="20"
        fill="currentColor"
      >
        <animate
          fill="freeze"
          attributeName="height"
          begin="4.5s"
          dur="0.5s"
          values="0;2"
        ></animate>
      </rect>
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="48"
        strokeDashoffset="48"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z"
      >
        <animate
        begin="4.8s"
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.9s"
          values="48;0"
        ></animate>
      </path>
    </svg>
  );
}
