<template>
  <svg
    id="bell"
    xmlns="http://www.w3.org/2000/svg"
    width="20.997"
    height="23.198"
    viewBox="0 0 20.997 23.198"
  >
    <path
      id="Path_594"
      data-name="Path 594"
      d="M42.752,15.174a.6.6,0,0,1-.6-.6V10.324a7.505,7.505,0,0,0-5.262-7.153,2.369,2.369,0,1,0-4.462,0,7.505,7.505,0,0,0-5.26,7.152v4.249a.6.6,0,0,1-.6.6,2.405,2.405,0,1,0,0,4.811h5.611a2.565,2.565,0,1,0,4.964,0h5.611a2.405,2.405,0,0,0,0-4.811Zm-9.1-12.8a1,1,0,1,1,1.867.512,7.472,7.472,0,0,0-1.726,0A1,1,0,0,1,33.655,2.37Zm2.2,18.263a1.2,1.2,0,1,1-2.207-.648h2.016a1.19,1.19,0,0,1,.19.648Zm6.895-2.014H26.565a1.039,1.039,0,1,1,0-2.078,1.97,1.97,0,0,0,1.968-1.968V10.324a6.126,6.126,0,1,1,12.251,0v4.249a1.97,1.97,0,0,0,1.968,1.968,1.039,1.039,0,1,1,0,2.078Z"
      transform="translate(-24.16 0)"
      fill="#8a909d"
    />
    <g
      v-if="hasUnread"
      id="Ellipse_2"
      data-name="Ellipse 2"
      transform="translate(14.995 2.419)"
      fill="#e9b23e"
      stroke="#e9b23e"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <circle cx="2" cy="2" r="2" stroke="none" />
      <circle cx="2" cy="2" r="3" fill="none" />
    </g>
  </svg>
</template>

<script>
export default { props: { hasUnread: { type: Boolean, default: false } } };
</script>
