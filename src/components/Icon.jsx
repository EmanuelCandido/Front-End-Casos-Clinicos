const icons = {
  home: (
    <path d="M3 8.4 8 4l5 4.4v6.1a.5.5 0 0 1-.5.5H9.7v-4.1H6.3V15H3.5a.5.5 0 0 1-.5-.5V8.4Z" />
  ),
  case: (
    <path d="M8 2.7a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Zm0 2.5v5.6M5.2 8h5.6" />
  ),
  folder: (
    <path d="M2.3 5.2h4l1.1 1.4h6.3v6.2a1.2 1.2 0 0 1-1.2 1.2h-9a1.2 1.2 0 0 1-1.2-1.2V5.2Zm0 0V4a1 1 0 0 1 1-1h2.5l1.1 1.2h5.4a1 1 0 0 1 1 1v1.4" />
  ),
  people: (
    <path d="M6.7 7.7a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm5.1-.4a1.9 1.9 0 1 0 0-3.8M2.7 13.6c.4-2 1.8-3.2 4-3.2s3.7 1.2 4.1 3.2m.4-2.8c1.3.1 2.1 1 2.4 2.3" />
  ),
  chart: (
    <path d="M3 13.5h10M4.5 11V7.5m3.5 3.5V4m3.5 7V6" />
  ),
  settings: (
    <path d="M8 10.4A2.4 2.4 0 1 0 8 5.6a2.4 2.4 0 0 0 0 4.8Zm5.4-1.7V7.3l-1.6-.5-.4-1 1-1.5-1-1-1.5 1-.9-.4L8.6 2H7.4L7 3.9l-.9.4-1.5-1-1 1 1 1.5-.4 1-1.6.5v1.4l1.6.5.4 1-1 1.5 1 1 1.5-1 .9.4.4 1.9h1.2l.4-1.9.9-.4 1.5 1 1-1-1-1.5.4-1 1.6-.5Z" />
  ),
  info: (
    <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0-6.5V11m0-6h.01" />
  ),
  logout: (
    <path d="M6.4 4.2H4.2a1 1 0 0 0-1 1v5.6a1 1 0 0 0 1 1h2.2M9.8 5.2 12.6 8l-2.8 2.8M12.4 8H6.8" />
  ),
  note: (
    <path d="M5 2.8h5l2 2v8.4H5a1 1 0 0 1-1-1V3.8a1 1 0 0 1 1-1Zm5 .1V5h2M6.4 10h3.2" />
  ),
  lamp: (
    <path d="M8 2.6a3.8 3.8 0 0 0-2.3 6.8c.5.4.8 1 .8 1.6h3c0-.6.3-1.2.8-1.6A3.8 3.8 0 0 0 8 2.6Zm-1.2 10h2.4" />
  ),
  chevronDown: <path d="m4 6 4 4 4-4" />,
  chevronRight: <path d="m6 4 4 4-4 4" />,
  arrowLeft: <path d="M10.5 4 6.5 8l4 4M7 8h6" />,
  check: <path d="m4 8.2 2.4 2.4L12 5" />,
  man: (
    <path d="M10.6 3.4h2v2M12.3 3.7 9.8 6.2M7.1 13.4V9.5M5 11.4h4.2M7.1 9.6a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" />
  ),
  woman: (
    <path d="M8 9.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm0 0v4.1M6.1 11.7h3.8" />
  ),
  maximize: <path d="M5.8 3.2H3.2v2.6M3.2 3.2 6 6m4.2 6.8h2.6v-2.6M12.8 12.8 10 10" />,
  upload: (
    <path d="M5.3 5.8 8 3.1l2.7 2.7M8 3.2v7.1M4.2 7.4H3.1a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h9.8a1 1 0 0 0 1-1V8.4a1 1 0 0 0-1-1h-1.1" />
  ),
  sparkle: (
    <path d="M8.2 2.6 9.6 6l3.5 1.4-3.5 1.4-1.4 3.6-1.4-3.6-3.5-1.4L6.8 6l1.4-3.4Zm4.1 8.3.4 1 .9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4.4-1Z" />
  ),
  refresh: <path d="M12.4 6.4A4.5 4.5 0 1 0 11.1 11M12.4 3.4v3h-3" />,
  minus: <path d="M4 8h8" />,
  arrowUp: <path d="M8 12V4m0 0L4.8 7.2M8 4l3.2 3.2" />,
  edit: <path d="M9.7 3.2 12.8 6.3 6 13.1H2.9V10L9.7 3.2Zm-1.2 1.2 3.1 3.1" />,
};

export default function Icon({ name, size = 16, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`}
      fill="none"
      height={size}
      viewBox="0 0 16 16"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35">
        {icons[name]}
      </g>
    </svg>
  );
}
