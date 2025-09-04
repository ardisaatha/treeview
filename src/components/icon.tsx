export function FolderIcon({ width, height, ...props }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="64;0"
          ></animate>
        </path>
        <path d="M12 7h-9v0c0 0 0.45 0 1 0h6z" opacity={0}>
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.2s"
            dur="0.2s"
            values="M12 7h-9v0c0 0 0.45 0 1 0h6z;M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z"
          ></animate>
          <set fill="freeze" attributeName="opacity" begin="0.2s" to={1}></set>
        </path>
      </g>
    </svg>
  );
}

export function FolderOpenIcon({ width, height, ...props }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        {/* Folder body */}
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M3 8h18c0.55 0 1 0.45 1 1v9c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="64;0"
          />
        </path>

        {/* Folder flap (opens upward) */}
        <path d="M3 8l3-3h6l2 2h7" opacity={0}>
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.2s"
            dur="0.3s"
            values="M3 8l3-3h6l2 2h7;
                    M3 5l3-3h6l2 2h7"
          />
          <set fill="freeze" attributeName="opacity" begin="0.2s" to={1} />
        </path>
      </g>
    </svg>
  );
}
export function DocumentIcon({ width, height, ...props }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M13 3l6 6v12h-14v-18h8"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="64;0"
          ></animate>
        </path>
        <path
          strokeDasharray={14}
          strokeDashoffset={14}
          strokeWidth={1}
          d="M12.5 3v5.5h6.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="14;0"
          ></animate>
        </path>
        <path strokeDasharray={6} strokeDashoffset={6} d="M9 13h4">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.2s"
            values="6;0"
          ></animate>
        </path>
        <path strokeDasharray={8} strokeDashoffset={8} d="M9 16h6">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
