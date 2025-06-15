export function PauseIcon() {
  return (
    <svg
      width="63"
      height="64"
      viewBox="0 0 63 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_79_230)">
        <ellipse
          cx="31.5"
          cy="30.5"
          rx="31.5"
          ry="30.5"
          fill="url(#paint0_linear_79_230)"
        />
      </g>
      <rect
        x="21.875"
        y="17.7917"
        width="5.25"
        height="25.4167"
        rx="2.625"
        fill="white"
      />
      <rect
        x="35"
        y="17.7917"
        width="5.25"
        height="25.4167"
        rx="2.625"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_79_230"
          x="0"
          y="0"
          width="63"
          height="64"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.372549 0 0 0 0 0.541176 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_79_230"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_79_230"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_79_230"
          x1="31.5"
          y1="89.8056"
          x2="31.5"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF367E" />
          <stop offset="0.947115" stop-color="#FFD0E1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
