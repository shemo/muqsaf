<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="49"
    height="49"
    viewBox="0 0 49 49"
  >
    <defs>
      <filter
        id="Ellipse_1"
        x="0"
        y="0"
        width="49"
        height="49"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood flood-opacity="0.431" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_11436" data-name="Group 11436" transform="translate(-98 -49)">
      <g transform="matrix(1, 0, 0, 1, 98, 49)" filter="url(#Ellipse_1)">
        <circle
          id="Ellipse_1-2"
          data-name="Ellipse 1"
          cx="15.5"
          cy="15.5"
          r="15.5"
          transform="translate(9 6)"
          fill="#1c1d21"
        />
      </g>
      <line
        id="Line_130"
        data-name="Line 130"
        x2="7"
        y2="5"
        transform="translate(120 66)"
        fill="none"
        stroke="#f5f5f5"
        stroke-linecap="round"
        stroke-width="2"
      />
      <line
        id="Line_131"
        data-name="Line 131"
        y1="5.268"
        x2="7"
        transform="translate(120 71)"
        fill="none"
        stroke="#f5f5f5"
        stroke-linecap="round"
        stroke-width="2"
      />
    </g>
  </svg>
</template>

<script>
export default {};
</script>
