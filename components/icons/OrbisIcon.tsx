export function OrbisIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="orbis-back">
          <rect x="0" y="60" width="120" height="60" />
        </clipPath>
        <clipPath id="orbis-front">
          <rect x="0" y="0" width="120" height="60" />
        </clipPath>
      </defs>
      <ellipse
        cx="60" cy="60" rx="57" ry="15"
        stroke="rgba(74,222,128,0.28)" strokeWidth="1.5"
        transform="rotate(-22 60 60)"
        clipPath="url(#orbis-back)"
      />
      <ellipse
        cx="60" cy="60" rx="45" ry="11"
        stroke="#4a4a50" strokeWidth="2.5"
        transform="rotate(-22 60 60)"
        clipPath="url(#orbis-back)"
      />
      <circle cx="60" cy="60" r="29" fill="#3a3a3f" />
      <circle cx="60" cy="60" r="29" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
      <path
        d="M 42 47 A 20 20 0 0 1 57 39"
        stroke="rgba(255,255,255,0.38)" strokeWidth="2" strokeLinecap="round"
      />
      <ellipse cx="60" cy="60" rx="29" ry="7" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <ellipse
        cx="60" cy="60" rx="45" ry="11"
        stroke="#7a7a82" strokeWidth="2.5"
        transform="rotate(-22 60 60)"
        clipPath="url(#orbis-front)"
      />
      <ellipse
        cx="60" cy="60" rx="57" ry="15"
        stroke="rgba(74,222,128,0.5)" strokeWidth="1.5"
        transform="rotate(-22 60 60)"
        clipPath="url(#orbis-front)"
      />
      <circle cx="60" cy="60" r="2.5" fill="rgba(255,255,255,0.45)" />
    </svg>
  );
}
