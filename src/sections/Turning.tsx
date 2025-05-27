import { SplitText } from "../components";
import { useTurningAnimation } from "../hooks";
import NumberFlow from "@number-flow/react";

const IpadMidSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1176"
    height="269"
    style={{ width: "100%", height: "100%", contentVisibility: "visible" }}
    viewBox="0 0 1176 269"
  >
    <defs>
      <clipPath id="__lottie_element_944">
        <path d="M0 0h1176v269H0z"></path>
      </clipPath>
      <clipPath id="__lottie_element_949">
        <path d="M0 0h1166v394H0z"></path>
      </clipPath>
      <clipPath id="__lottie_element_953">
        <path d="M0 0h1166v310H0z"></path>
      </clipPath>
    </defs>
    <g clipPath="url(#__lottie_element_944)">
      <image
        xlinkHref="data:image/png;base64,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bu1xFkzERNEPZrFvIiaKsoCJv07C8EqFceLGYmL7DsXUfoCJmCj6ASZioigLmHhLJb6yg3b/XEue/C8mYqLoB/vxpTMmirKAib9I2rcgLj2qvPH8yvAS2/YWRfcmYqLoB5iIiaIsYOINlfgMZdpf7W2G04oxetIZE0U/wERMFGUBE++XduPDUQoCrm2GM/nr9k3ERNEPMBETRVnAxN+Gicde5pxDjGH13c6YiImiH2AiJoqygIl3Y+LeZjiH8se/PxxiTBT9ABMxUZQFTJQ5E60mYqLoB5iIiaIsYKJgIiaKfoCJmCjKAiYKJmKi6AeYiImiLGCiYCImin6AiZgoygImCiZiougHmIiJoixgomAiJop+gImYKMoCJgomYqLoB5gomKgsCCZiomCifoCJgonKgmAiJgom6geYKJioLAgmYqJgon6AiYKJyoJgIiYKJuoHmCiYqCwIJmKiYKJ+gImCicqCYCImCibqB5gomKgsCCZiomCifiCYiImiLGCiYCImin6AiZgoygImCiZiougHmIiJoixgomAiJop+gImYKMoCJsppJv5wEDBR9ANMxERRFjBR5ky0moiJoh9gIiaKsoCJgomYKPoBJmKiKAuYKJiIiaIfYCImirKAiYKJmCj6ASZioigLmCiYiImiH2AiJoqygImCiZgo+gEmYqIoC5goP5+JNsTBRNEPMBETRVnARFlgotVETBT9ABMxUZQFTBRMxETRDzARE0VZwETBREwU/QATMVGUBUwUTMRE0Q8wERNFWcBEwURMFP0AEzFRlAVMFEzERNEPMBETRVnARMFETBT9ABMFE5UFwcRvwUT7JmKi6AeYiImiLGCiLDDRaiImin6AiZgoygImygITrSZiougHmIiJoixgomAiJop+gImYKMoCJsoxJvrSGRNFP8BETBRlARMFEzFR9ANMxERRFjBRjjHRl86YKPoBJmKiKAuYKAtMtJqIiaIfYCImirKAiYKJmCj6ASZioigLmCiYiImiH2AiJoqygImCiZgo+gEmYqIoC5gomIiJoh9gIiaKsoCJgomYKPrBz83fjgcmirKAiYKJmCj6wTxWEzFRlAVMFEzERNEPMBETRVnARMFETBT9ABMxUZQFTBRMxETRDzARE0VZwETBREwU/QATMVGUBUwUTMRE0Q8wERNFWcBEwURMFP0AEzFRlAVMFEzERNEPMFEwUVkQTPw2TPzhIGCi6AeYiImiLGCizJloNRETRT/AREwUZQETBRMxUfSD/XhZHyaKsoCJgomYKPrBQqwmYqIoC5gomIiJoh9gIiaKsoCJgomYKPoBJmKiKAuYKJiIiaIfYCImirKAiYKJmCj6ASZioigLmCiYiImiH2AiJoqygInyE5hoe21MFP0AEzFRlAVMlAUmWk3ERNEPMBETRVnARMFETPyPvTtIUhgGgiB4l/7/X+6eJjSAbDCR9QQO0xn2ssgeYCImylnARGEiJsoeYCImylnARGEiJsoeYCImylnARGEiJsoeYCImylnARGEiJsoeYCImylnARGEiJsoeYKIw0VkQJmKiMNEeYKIw0VkQJmKiMNEeYKIw0VkQJmKiMNEeYKIw0VkQJmKiMNEeYKIw0VkQJmKiMNEeYKIw0VkQJmKiMNEeYKIw0VkQJmKiMNEeCBMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJuo1Jg4fAibKHmAiJspZwERVJnqaiImyB5iIiXIWMFGYiImyB+umzwMT5SxgojARE2UPMBET5SxgojIT/W0iJsoeHPLSGRPlLGCiPE3ERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTMREOQuYqAuY6JvOmCh7gImYKGcBExWY6GkiJsoeYCImylnARAUmepqIibIHmIiJchYwUZiIibIHmIiJchYwUT0meumMibIHmIiJchYwUZiIibIH6/ymMybKWcBEYSImyh6EPE3ERDkLmChMxETZA0zERDkLmChMxETZA0zERDkLmChMxETZA0zERDkLmChMxETZA0zERDkLmChMxETZA0zERDkLmChMxETZA0zERDkLmChMxETZA0wUJjoLwkRMFCbaA0wUJjoLwkRMFCbaA0wUJjoLwkRMFCbaA0wUJjoLwsT7M3H4EDBR9gATMVHOAiaqMtHTREyUPcBETJSzgInCREyUPcBETJSzgInqMdFLZ0yUPcBETJSzgInCREyUPcBETJSzgInqMdFLZ0yUPcBETJSzgInCREyUPVg3fR6YKGcBE+WlMybKHtQ8TcREOQuYKE8TMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABOFic6CMBEThYn2ABOFic6CMBEThYn2ABOFic6CMBEThYn2ABOFic6CMBEThYn2ABOFic6CMBEThYn2ABOFic6CMBEThYn2ABOFic6CMBEThYn2QJiIiXIWMFGYiImyB5iIiXIWMFGYiImyB5iIiXIWMFGYiImyB5iIiXIWMFFbmDh8CJgoe4CJmChnARNVmehpIibKHmAiJspZwERhIibKHmAiJspZwERhIibKHmAiJspZwES9zUR/m4iJsgeYiIlyFjBRgYmeJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7AEmChOdBWEiJgoT7QEmChOdBWEiJgoT7QEmChOdBWHijZjoV1gwUfYAEzFRzgImChMxUfYAEzFRzgImqsdEL50xUfbg0PR5YKKcBUwUJmKi7EHN00RMlLOAifLSGRNlDzARE+UsYKKeMNHTREyUPTjkpTMmylnARGEiJsoehDxNxEQ5C5goL50xUfYAEzFRzgIm6gkTPU3ERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTMREOQuYKEzERNkDTBQmOgvCREwUJtoDTBQmOgvCREwUJtoDTBQmOgvCREwUJtoDTBQmOgvCREwUJtoDTBQmOgvCxL9jot90xkTZA0zERDkLmKjARE8TMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJupkJvqmMybKHmAiJspZwEQFJnqaiImyB5iIiXIWMFGYiImyB5iIiXIWMFGYiImyB5iIiXIWMFGYiImyB5iIiXIWMFGYiImyB5iIiXIWMFGYiImyB5iIiXIWMFHXM9E/xMFE2QNMxEQ5C5goTMRE2QNMxEQ5C5ioHhO9dMZE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5io65noH+JgouwBJmKinAVMVGCip4mYKHuAiZgoZwETFZjoaSImyh5gIibKWcBEYSImyh5gIibKWcBE9ZjopTMmyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gojDRWRAmYqIw0R5gojDRWRAmYqIw0R5gojDRWRAm3oiJfoUFE2UPMBET5SxgojARE2UPMBET5SxgojARE2UPMBET5SxgojARE2UPMBET5SxgonYy0VdYMFH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABMxUc4CJgoTMVH2ABOFic6CMBEThYn2ABOFic6CMPFXmejfa2Oi7AEmYqKcBUwUJmKi7AEmYqKcBUxUj4leOmOi7AEmYqKcBUwUJmKi7MG66fPARDkLmCgvnTFR9qDmaSImylnARHmaiImyB5iIiXIWMFGYiImyB5iIiXIWMFGYiImyB5iIiXIWMFEfMdHfJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUxUj4leOmOi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7AEmYqKcBUwUJmKi7MGJ+bE+TJSzgInCREyUPQh5moiJchYwUZiIibIHmIiJchYwUZiIibIHmIiJchYwUZiIibIHmIiJchYwUZiIibIHmIiJchYwUZiIibIHmIiJchYwUZiIibIHmIiJchYwUd9h4vAhYKLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTNS5TPRNZ0yUPcBETJSzgInCREyUPcBETJSzgInqMdFLZ0yUPcBETJSzgIkKTPQ0ERNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlDzARE+UsYKJ2MtFXWDBR9gATMVHOAiYKEzFR9gATMVHOAiaqx0QvnTFR9gATMVHOAiYqMNHTREyUPcBETJSzgIkKTPQ0ERNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlD3Y1fR6YKGcBE4WJmCh7UPM0ERPlLGCiMBETZQ8wERPlLGCiMBETZQ8wERPlLGCiMBETZQ8wERPlLGCiMBETZQ8wERPlLGCiMBETZQ8wERPlLGCiMBETZQ8wERPlLGCiMBETZQ8wUZjoLAgTMVGYaA8wUZjoLAgTMVGYaA8wUZjoLOjRzr3kuo4DQRScGRBF73+7nqtyULCtD6Q4SxBwKwN0v8ZETBQm2gNMFCY6C8JETBQm2gNMFCY6C8LEWzJx+AiYKHuAiZgoZwEThYmYKHuAiZgoZwET1WKiH50xUfYAEzFRzgImKjDRayImyh5gIibKWcBEBSZ6TcRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNhIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBE7cHE4SNgouwBJmKinAVMVGWi10RMlD3YtPoemChnAROFiZgoe1DzmoiJchYwUX50xkTZg5DXREyUs4CJ8pqIibIHIa+JmChnAROFiZgoe4CJmChnAROFiZgoe4CJmChnAROFiZgoe4CJmChnARP1ExP9ExZMlD3AREyUs4CJCkz0moiJsgeYiIlyFjBRmIiJsgeYiIlyFjBRmIiJsgeYiIlyFjBRmIiJsgeYiIlyFjBRmIiJsgeYiIlyFjBRmIiJsgeYiIlyFjBRxzPR/xAHE2UPMBET5SxgogITvSZiouwBJmKinAVMFCZiouwBJmKinAVMFCZiouwBJmKinAVMFCZiouwBJmKinAVMFCZiouzBjq2+BybKWcBEYSImyh7UvCZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASZiopwFTBQmYqLsASYKE50FYeJlmDh8BEyUPcBETJSzgImqTPSaiImyB5iIiXIWMFGBiV4TMVH2ABMxUc4CJiow0WsiJsoeYCImylnARGEiJsoeYCImylnARGEiJsoeYCImylnARGEiJsoeYCImylnARP2Tif4JCybKHmAiJspZwEQFJnpNxETZA0zERDkLmChMxETZA0zERDkLmKgeE/3ojImyB5iIiXIWMFGYiImyB5iIiXIWMFE9JvrRGRNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlDzARE+UsYKIwERNlDzARE+UsYKKOZ6L/IQ4myh5gIibKWcBEBSZ6TcRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMxEQ5C5goTMRE2QNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNMFCY6C8JETBQm2gNhIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gIibKWcBEYSImyh5gojDRWRAmYqIw0R5gojDRWRAmYqIw0R5gojDRWRAmYqIw0R5gojDRWRAmYqIw0R5gojDRWRAmYqIw0R5gojDRWRAmYqIw0R5gojDRWRAmPpyJw0fARNkDTMREOQuYqMpEr4mYKHuAiZgoZwEThYmYKHuAiZgoZwET1WOiH50xUfYAEzFRzgImKjDRayImyh5gIibKWcBEYSImyh5gIibKWcBE9ZjoR2dMlD3AREyUs4CJCkz0moiJsgeYiIlyFjBRgYleEzFR9gATMVHOAiYqMNFrIibKHmAiJspZwEQFJnpNxETZA0zERDkLmKjARK+JmCh7gImYKGcBE4WJmCh7gImYKGcBE4WJmCh7gImYKGcBE/U1E/23iZgoe4CJmChnARMVmOg1ERNlDzARE+UsYKICE70mYqLsASZiopwFTFRgotdETJQ9wERMlLOAicJETJQ9wERMlLOAicJETJQ9wERMlLOAicJETJQ9wERMlLOAicJETJQ9wERMlLOAicJETJQ9wERMlLOAicJETJQ9wERhorMgTMREYaI9uOT3mL7H2c3pG/gz8Gfgz+DslvfLR/CHoDvswQfOvpwbuAk38gAAAABJRU5ErkJggg=="
        width="2598"
        height="429"
        display="block"
        preserveAspectRatio="xMidYMid slice"
        transform="matrix(.40082 0 0 .403 129.239 15.662)"
      ></image>
      <g
        clipPath="url(#__lottie_element_949)"
        display="block"
        transform="translate(4.68 -22.198)"
      >
        <path
          fill="#F2F2F2"
          d="M77.758 204.362v72.766c0 7.762-6.302 14.064-14.064 14.064h-49.63C6.302 291.192 0 284.89 0 277.128v-72.766c0-7.762 6.302-14.064 14.064-14.064h49.63c7.762 0 14.064 6.302 14.064 14.064"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M155.515 172.162v104.966c0 7.762-6.302 14.064-14.064 14.064h-49.63c-7.762 0-14.064-6.302-14.064-14.064V172.162c0-7.762 6.302-14.064 14.064-14.064h49.63c7.762 0 14.064 6.302 14.064 14.064"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M233.272 134.952v142.176c0 7.762-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.301-14.064-14.063V134.952c0-7.762 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.301 14.064 14.063"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M311.03 117.064v160.064c0 7.762-6.302 14.064-14.064 14.064h-49.63c-7.762 0-14.064-6.302-14.064-14.064V117.064c0-7.762 6.302-14.064 14.064-14.064h49.63c7.762 0 14.064 6.302 14.064 14.064"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M388.787 144.97v132.158c0 7.762-6.302 14.064-14.064 14.064h-49.63c-7.762 0-14.064-6.302-14.064-14.064V144.97c0-7.762 6.302-14.064 14.064-14.064h49.63c7.762 0 14.064 6.302 14.064 14.064"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M466.544 165.006v112.122c0 7.762-6.302 14.064-14.064 14.064h-49.63c-7.762 0-14.064-6.302-14.064-14.064V165.006c0-7.762 6.302-14.064 14.064-14.064h49.63c7.762 0 14.064 6.302 14.064 14.064M544.302 180.033v97.096c0 7.762-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.301-14.064-14.063v-97.096c0-7.762 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.301 14.064 14.063"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M622.059 200.068v77.06c0 7.761-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.302-14.064-14.063v-77.06c0-7.761 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.302 14.064 14.063M699.817 189.335v87.794c0 7.761-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.302-14.064-14.063v-87.794c0-7.761 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.302 14.064 14.063"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M777.574 157.135V277.13c0 7.761-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.302-14.064-14.063V157.135c0-7.761 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.302 14.064 14.063M855.332 133.521V277.13c0 7.761-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.302-14.064-14.063V133.52c0-7.761 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.302 14.064 14.063"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M933.089 157.135V277.13c0 7.761-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.302-14.064-14.063V157.135c0-7.761 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.302 14.064 14.063"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M1010.846 189.335v87.794c0 7.761-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.302-14.064-14.063v-87.794c0-7.761 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.302 14.064 14.063"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M1088.603 180.033v97.096c0 7.762-6.302 14.063-14.064 14.063h-49.63c-7.762 0-14.064-6.301-14.064-14.063v-97.096c0-7.762 6.302-14.063 14.064-14.063h49.63c7.762 0 14.064 6.301 14.064 14.063"
          display="block"
        ></path>
        <path
          fill="#F2F2F2"
          d="M1166.36 205.078v72.05c0 7.762-6.301 14.064-14.063 14.064h-49.63c-7.762 0-14.064-6.302-14.064-14.064v-72.05c0-7.762 6.302-14.064 14.064-14.064h49.63c7.762 0 14.064 6.302 14.064 14.064"
          display="block"
        ></path>
      </g>
      <g
        clipPath="url(#__lottie_element_953)"
        display="block"
        transform="translate(4.68 44.489)"
      >
        <path
          fill="#FE4A23"
          d="M77.758 179.005v31.312c0 6.975-6.302 12.639-14.064 12.639h-49.63C6.302 222.956 0 217.292 0 210.316v-31.311c0-6.976 6.302-12.64 14.064-12.64h49.63c7.762 0 14.064 5.664 14.064 12.64"
          display="block"
          className="path1"
        ></path>
        <path
          fill="#FE4A23"
          d="M155.515 136.658v69.051c0 9.518-6.302 17.247-14.064 17.247h-49.63c-7.762 0-14.064-7.729-14.064-17.247v-69.051c0-9.519 6.302-17.247 14.064-17.247h49.63c7.762 0 14.064 7.728 14.064 17.247"
          display="block"
          className="path2"
        ></path>
        <path
          fill="#FE4A23"
          d="M233.272 138.492v71.825c0 6.975-6.302 12.639-14.064 12.639h-49.63c-7.762 0-14.064-5.664-14.064-12.64v-71.824c0-6.976 6.302-12.64 14.064-12.64h49.63c7.762 0 14.064 5.664 14.064 12.64"
          display="block"
          className="path3"
        ></path>
        <path
          fill="#FE4A23"
          d="M311.03 73.478v132.231c0 9.519-6.302 17.247-14.064 17.247h-49.63c-7.762 0-14.064-7.728-14.064-17.247V73.478c0-9.518 6.302-17.246 14.064-17.246h49.63c7.762 0 14.064 7.728 14.064 17.246"
          display="block"
          className="path4"
        ></path>
        <path
          fill="#FE4A23"
          d="M388.787 138.492v71.825c0 6.975-6.302 12.639-14.064 12.639h-49.63c-7.762 0-14.064-5.664-14.064-12.64v-71.824c0-6.976 6.302-12.64 14.064-12.64h49.63c7.762 0 14.064 5.664 14.064 12.64"
          display="block"
          className="path5"
        ></path>
        <path
          fill="#FE4A23"
          d="M466.544 136.658v69.051c0 9.518-6.302 17.247-14.064 17.247h-49.63c-7.762 0-14.064-7.729-14.064-17.247v-69.051c0-9.519 6.302-17.247 14.064-17.247h49.63c7.762 0 14.064 7.728 14.064 17.247M544.302 122.618v83.092c0 9.519-6.302 17.247-14.064 17.247h-49.63c-7.762 0-14.064-7.728-14.064-17.247v-83.092c0-9.519 6.302-17.247 14.064-17.247h49.63c7.762 0 14.064 7.728 14.064 17.247"
          display="block"
          className="path6"
        ></path>
        <path
          fill="#FE4A23"
          d="M622.059 180.934v29.383c0 6.976-6.302 12.64-14.064 12.64h-49.63c-7.762 0-14.064-5.664-14.064-12.64v-29.383c0-6.975 6.302-12.638 14.064-12.638h49.63c7.762 0 14.064 5.663 14.064 12.638M699.817 148.064v57.646c0 9.518-6.302 17.246-14.064 17.246h-49.63c-7.762 0-14.064-7.728-14.064-17.246v-57.646c0-9.518 6.302-17.246 14.064-17.246h49.63c7.762 0 14.064 7.728 14.064 17.246"
          display="block"
          className="path7"
        ></path>
        <path
          fill="#FE4A23"
          d="M777.574 138.492v71.825c0 6.975-6.302 12.639-14.064 12.639h-49.63c-7.762 0-14.064-5.664-14.064-12.64v-71.824c0-6.976 6.302-12.64 14.064-12.64h49.63c7.762 0 14.064 5.664 14.064 12.64M855.332 73.478v132.231c0 9.519-6.302 17.247-14.064 17.247h-49.63c-7.762 0-14.064-7.728-14.064-17.247V73.478c0-9.518 6.302-17.246 14.064-17.246h49.63c7.762 0 14.064 7.728 14.064 17.246"
          display="block"
          className="path8"
        ></path>
        <path
          fill="#FE4A23"
          d="M933.089 138.492v71.825c0 6.975-6.302 12.639-14.064 12.639h-49.63c-7.762 0-14.064-5.664-14.064-12.64v-71.824c0-6.976 6.302-12.64 14.064-12.64h49.63c7.762 0 14.064 5.664 14.064 12.64"
          display="block"
          className="path9"
        ></path>
        <path
          fill="#FE4A23"
          d="M1010.846 163.86v41.85c0 9.518-6.302 17.246-14.064 17.246h-49.63c-7.762 0-14.064-7.728-14.064-17.246v-41.85c0-9.519 6.302-17.247 14.064-17.247h49.63c7.762 0 14.064 7.728 14.064 17.246"
          display="block"
          className="path10"
        ></path>
        <path
          fill="#FE4A23"
          d="M1088.603 136.658v69.051c0 9.518-6.302 17.247-14.064 17.247h-49.63c-7.762 0-14.064-7.729-14.064-17.247v-69.051c0-9.519 6.302-17.247 14.064-17.247h49.63c7.762 0 14.064 7.728 14.064 17.247"
          display="block"
          className="path11"
        ></path>
        <path
          fill="#FE4A23"
          d="M1166.36 188.651v21.666c0 6.975-6.301 12.639-14.063 12.639h-49.63c-7.762 0-14.064-5.664-14.064-12.64v-21.665c0-6.975 6.302-12.639 14.064-12.639h49.63c7.762 0 14.064 5.664 14.064 12.64"
          display="block"
          className="path12"
        ></path>
      </g>
    </g>
  </svg>
);

const Turning = () => {
  const {
    feature1Number,
    setIsFeatureHovering,
    setCurrentFeature
  } = useTurningAnimation();
  return (
    <section className="mt-100 overflow-x-clip" id="turning-section">
      <div className="flex">
        <div>
          <p className="text-6xl text-dark-grey max-w-[20ch] ml-10">
            <SplitText
              text="Turning data into real actions and ideas"
              spansClassName="turning-p-word"
              wrapperClassName="overflow-clip inline-block p-2"
              to="words"
            ></SplitText>
          </p>
          <div className="relative">
            <div
              className="w-1/2 h-25 ml-30 mt-20 shadow-xl rounded-4xl px-10 py-5 absolute feature1 bg-white overflow-clip"
              onMouseEnter={() => {
                setIsFeatureHovering(true);
                setCurrentFeature("feature1")
              }}
              onMouseLeave={() => {
                setIsFeatureHovering(false);
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-2xl font-light font-outfit">A/B Testing</p>
                <div className="w-15 h-15 bg-grey-200 rounded-full grid place-content-center">
                  <i className="fa-solid fa-plus text-dark-grey plus-icon1"></i>
                </div>
              </div>
              <p className="mt-10">Improve marketing strategies</p>
              <p className="mt-5 text-grey">
                Test different campaigns to find the most effective approach
              </p>
              <p className="mt-10">Sales Trend</p>
              <NumberFlow
                value={feature1Number}
                format={{
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }}
                transformTiming={{ duration: 400, easing: "ease-out" }}
                spinTiming={{ duration: 2000, easing: "ease-out" }}
                opacityTiming={{ duration: 350, easing: "ease-out" }}
              ></NumberFlow>
            </div>
            <div
              className="w-1/2 h-25 ml-30 mt-5 shadow-xl rounded-4xl px-10 py-5 absolute top-45 feature2 bg-white overflow-clip"
              onMouseEnter={() => {
                setIsFeatureHovering(true);
                setCurrentFeature("feature2")
              }}
              onMouseLeave={() => {
                setIsFeatureHovering(false);
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-2xl font-light font-outfit">
                  Trend Analysis
                </p>
                <div className="w-15 h-15 bg-grey-200 rounded-full grid place-content-center">
                  <i className="fa-solid fa-plus text-dark-grey plus-icon2"></i>
                </div>
              </div>
              <p className="mt-10">Stay ahead of the competetion</p>
              <p className="mt-5 text-grey">
                Analyize emerging trends and adapt strategies based on real-time
                data
              </p>
            </div>
            <div
              className="w-1/2 h-25 ml-30 mt-5 shadow-xl rounded-4xl px-10 py-5 absolute top-75 feature3 bg-white overflow-clip"
              onMouseEnter={() => {
                setIsFeatureHovering(true);
                setCurrentFeature("feature3")
              }}
              onMouseLeave={() => {
                setIsFeatureHovering(false);
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-2xl font-light font-outfit">
                  User Segmentation
                </p>
                <div className="w-15 h-15 bg-grey-200 rounded-full grid place-content-center">
                  <i className="fa-solid fa-plus text-dark-grey plus-icon3"></i>
                </div>
              </div>
              <p className="mt-10">Personalize customer experiences</p>
              <p className="mt-5 text-grey">
                Detailed Insights allow segmentation for targeted marketing
                companies
              </p>
            </div>
          </div>
        </div>
        <div className="bg-bars h-[800px] w-[1200px] bg-contain bg-no-repeat ml-auto pt-8.5 px-12 -mr-100 mt-30 ipad">
          <img src="src/assets/ipad-top.png" alt="Ipad Top" />
          <div className="mt-5">
            <IpadMidSvg></IpadMidSvg>
          </div>
          <img
            src="src/assets/ipad-down.svg"
            alt="Ipad Down"
            className="mt-8"
          />
        </div>
      </div>
      <p className="text-primary text-[25rem] font-medium text-center leading-0 mt-20">Ramos</p>
    </section>
  );
};

export default Turning;
