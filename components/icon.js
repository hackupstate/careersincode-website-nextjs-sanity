import React from 'react'

// https://icons.getbootstrap.com/ This is where the social media icons are from

const getIcon = (name, color) => {
  switch (name) {
    case 'Logo':
      return (
        <>
        </>
      )
    case 'Apple':
      return (
        <path
          d="M65.8,49.692c-0.027-4.875,2.179-8.555,6.642-11.265-2.5-3.573-6.27-5.539-11.251-5.925-4.716-.372-9.87,2.75-11.756,2.75-1.993,0-6.562-2.617-10.149-2.617C31.877,32.756,24,38.547,24,50.33a33.088,33.088,0,0,0,1.913,10.786c1.7,4.875,7.837,16.831,14.24,16.631,3.348-.08,5.712-2.378,10.069-2.378,4.224,0,6.416,2.378,10.149,2.378C66.827,77.655,72.379,66.789,74,61.9c-8.661-4.078-8.2-11.955-8.2-12.208h0ZM58.285,27.881a12.511,12.511,0,0,0,3.188-9.631,14.086,14.086,0,0,0-9.02,4.636,12.707,12.707,0,0,0-3.4,9.551C52.52,32.7,55.682,30.923,58.285,27.881Z"
          fill={color}
        />
      )
    case 'Facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
      )
    case 'Instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>
      )
    case 'Soundcloud':
      return (
        <path
          d="M28.816,50.025l0.589,6.6-0.589,6.938a0.48,0.48,0,0,1-.447.447,0.44,0.44,0,0,1-.427-0.447l-0.569-6.938,0.569-6.6a0.436,0.436,0,0,1,.427-0.427A0.487,0.487,0,0,1,28.816,50.025Zm2.174-4.632a0.523,0.523,0,0,0-.508.508L29.974,56.628l0.508,6.938a0.523,0.523,0,0,0,.508.508,0.5,0.5,0,0,0,.477-0.508l0.589-6.938L31.467,45.9A0.5,0.5,0,0,0,30.99,45.393Zm2.59-2.448a0.562,0.562,0,0,0-.569.538L32.564,56.689l0.447,6.887a0.562,0.562,0,0,0,.569.538,0.535,0.535,0,0,0,.538-0.538l0.538-6.887L34.118,43.484a0.535,0.535,0,0,0-.538-0.538h0ZM18.231,52.758a0.273,0.273,0,0,0-.254.254L17.5,56.628l0.477,3.555a0.254,0.254,0,0,0,.508,0l0.569-3.555-0.569-3.616a0.273,0.273,0,0,0-.254-0.254h0Zm2.4-2.225a0.251,0.251,0,0,0-.254.254l-0.65,5.841,0.65,5.7a0.26,0.26,0,0,0,.254.284,0.3,0.3,0,0,0,.284-0.254l0.731-5.729-0.731-5.841A0.3,0.3,0,0,0,20.629,50.533Zm2.57-1.158a0.352,0.352,0,0,0-.335.335l-0.589,6.917,0.589,6.684a0.366,0.366,0,0,0,.335.315,0.316,0.316,0,0,0,.315-0.315l0.7-6.684-0.7-6.917a0.321,0.321,0,0,0-.315-0.335h0Zm2.57-.223a0.358,0.358,0,0,0-.366.366l-0.589,7.11L25.4,63.515a0.358,0.358,0,0,0,.366.366,0.4,0.4,0,0,0,.4-0.366l0.65-6.887-0.65-7.11a0.4,0.4,0,0,0-.4-0.366h0ZM50.289,37.887a0.794,0.794,0,0,0-.427-0.142,0.934,0.934,0,0,0-.569.193,1.041,1.041,0,0,0-.335.681V38.7L48.624,56.648l0.173,3.3,0.173,3.22a0.928,0.928,0,0,0,.9.874,0.88,0.88,0,0,0,.874-0.874l0.4-6.521-0.4-18.03a0.978,0.978,0,0,0-.457-0.731h0Zm-2.712,1.554A0.893,0.893,0,0,0,47.13,39.3a0.862,0.862,0,0,0-.447.142,0.8,0.8,0,0,0-.366.681l-0.03.173L46,56.628s0,0.03.315,6.664v0.03a0.766,0.766,0,0,0,.173.477,0.871,0.871,0,0,0,.65.315,0.824,0.824,0,0,0,.569-0.254,0.7,0.7,0,0,0,.254-0.569l0.03-.681,0.315-5.952L47.974,40.122a0.911,0.911,0,0,0-.4-0.681h0ZM36.262,41.726a0.617,0.617,0,0,0-.589.62L35.225,56.628l0.447,6.826a0.6,0.6,0,0,0,1.209,0l0.508-6.826L36.881,42.346a0.636,0.636,0,0,0-.62-0.62h0Zm38.265,6.379a8.158,8.158,0,0,0-3.108.62,14.117,14.117,0,0,0-14.048-12.84,13.852,13.852,0,0,0-5.109.955,0.89,0.89,0,0,0-.792.935V63.139a0.957,0.957,0,0,0,.874.935H74.516a7.984,7.984,0,0,0,.01-15.968h0ZM44.388,41.98a0.806,0.806,0,0,0-.792.792L43.26,56.658,43.6,63.322a0.8,0.8,0,0,0,.792.762,0.754,0.754,0,0,0,.762-0.762l0.4-6.664-0.4-13.886a0.781,0.781,0,0,0-.762-0.792h0Zm-5.445-.792a0.689,0.689,0,0,0-.65.681L37.9,56.628l0.4,6.8a0.666,0.666,0,0,0,1.331,0l0.447-6.8L39.624,41.869A0.716,0.716,0,0,0,38.943,41.188Zm2.712,0.345a0.7,0.7,0,0,0-.7.7l-0.4,14.394,0.4,6.745a0.716,0.716,0,0,0,.7.7,0.7,0.7,0,0,0,.7-0.7l0.427-6.745L42.356,42.234a0.69,0.69,0,0,0-.7-0.7h0Z"
          fill={color}
        />
      )
    case 'Spotify':
      return (
        <>
          <path
            d="M65.92,68.165a2.971,2.971,0,0,1-1.666-.561c-9.717-5.855-21.022-6.1-32.187-3.815a10.055,10.055,0,0,1-1.853.4,2.424,2.424,0,0,1-2.46-2.46,2.468,2.468,0,0,1,2.118-2.616C42.624,56.3,55.658,56.548,66.776,63.2a2.633,2.633,0,0,1,1.51,2.569,2.353,2.353,0,0,1-2.367,2.4h0Z"
            fill={color}
          />
          <path
            d="M70.108,57.949a3.845,3.845,0,0,1-1.915-.654c-9.732-5.762-24.245-8.082-37.155-4.578a6.413,6.413,0,0,1-1.853.4A3.024,3.024,0,0,1,26.164,50.1a3.064,3.064,0,0,1,2.414-3.223A52.377,52.377,0,0,1,43.807,44.76c10.106,0,19.87,2.507,27.562,7.085a3.246,3.246,0,0,1,1.76,3.068A3.017,3.017,0,0,1,70.108,57.949Z"
            fill={color}
          />
          <path
            d="M74.936,46.084a3.581,3.581,0,0,1-2.009-.607c-11.087-6.618-30.91-8.206-43.742-4.625a7.4,7.4,0,0,1-2.009.4,3.594,3.594,0,0,1-3.628-3.675,3.679,3.679,0,0,1,2.71-3.722,65.264,65.264,0,0,1,18.3-2.367c11.367,0,23.28,2.367,31.985,7.443a3.656,3.656,0,0,1,2.009,3.519,3.608,3.608,0,0,1-3.613,3.628h0Z"
            fill={color}
          />
        </>
      )
    case 'Twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      )
    case 'YouTube':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
      )
    case 'Github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      )
    case 'Arrow':
      return (
        <polygon
          points="51.829 7.172 46.172 12.828 79.343 46 4 46 4 54 79.343 54 46.172 87.172 51.829 92.828 94.658 50 51.829 7.172"
          fill={color}
        />
      )
    case 'Plus':
      return (
        <polygon
          points="80 46 54 46 54 20 46 20 46 46 20 46 20 54 46 54 46 80 54 80 54 54 80 54 80 46"
          fill={color}
        />
      )
    case 'Slack':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="bi bi-slack">
          <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
        </svg>
      )
    case 'Medium':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
          <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
        </svg>
      )
    case 'LinkedIn':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
        </svg>
      )
    case 'Minus':
      return <rect x="20" y="46" width="60" height="8" fill={color} />
    case 'Checkmark':
      return (
        <path
          fill="none"
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M12.1 52.1l24.4 24.4 53-53"
        />
      )
    case 'Chevron Down':
      return (
        <polygon
          points="51.5 85.657 8.672 42.828 14.328 37.172 51.5 74.343 88.672 37.172 94.328 42.828 51.5 85.657"
          fill={color}
        />
      )
    default:
      return <path />
  }
}

const Icon = (props) => {
  const { id = '', name, color, viewBox = '0 0 100 100', className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      aria-labelledby={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}
      className={className || 'icon'}
      style={{
        paddingLeft: 5
      }}
    >
      <title id={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}>
        {name}
      </title>
      {getIcon(name, color)}
    </svg>
  )
}

export default Icon
