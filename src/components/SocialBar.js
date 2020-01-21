import React from 'react'
import { Block } from '../utils/css/global'

import styled, { keyframes } from 'styled-components'

export default function SocialBar() {
  return (
    <SocialBlock>
      {/* GitHub */}
      <IconLink href="https://github.com/avikola">
        <div>
          <Icon>
            <path d="M8,12c-1.14,0-2,1.5-2,3.5S6.86,19,8,19s2-1.5,2-3.5S9.14,12,8,12Z" />
            <path d="M16,12c-1.14,0-2,1.5-2,3.5s.86,3.5,2,3.5,2-1.5,2-3.5S17.14,12,16,12Z" />
            <path d="M22.17,7.33a14.19,14.19,0,0,0-.86-6A.5.5,0,0,0,20.78,1c-.1,0-2.35.3-5.73,2.75a14.08,14.08,0,0,0-3-.28,14.09,14.09,0,0,0-3,.28C5.57,1.3,3.32,1,3.22,1a.51.51,0,0,0-.53.32,14.19,14.19,0,0,0-.86,6A8.17,8.17,0,0,0,0,12.67C0,19.33,3.49,23,9.83,23h4.33C20.51,23,24,19.33,24,12.67A8.17,8.17,0,0,0,22.17,7.33ZM20,14.76c0,4.4-2.8,5.24-8,5.24s-8-.83-8-5.24a4.06,4.06,0,0,1,1.18-3A3.34,3.34,0,0,1,7.75,11c.57,0,1.19,0,1.85.1s1.54.12,2.43.12,1.6-.06,2.36-.12,1.28-.1,1.85-.1a3.34,3.34,0,0,1,2.58.81A4.06,4.06,0,0,1,20,14.76Z" />
          </Icon>
        </div>
      </IconLink>

      {/* LinkedIn */}
      <IconLink href="https://linkedin.com/in/avikola">
        <div>
          <Icon>
            <path d="M21,1H3A2,2,0,0,0,1,3V21a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V3A2,2,0,0,0,21,1ZM8,19.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V9.5A.5.5,0,0,1,4.5,9h3a.5.5,0,0,1,.5.5ZM6,8A2,2,0,1,1,8,6,2,2,0,0,1,6,8ZM20,19.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V14c0-1.25-.56-2-1.5-2s-1.5.75-1.5,2v5.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V9.5A.5.5,0,0,1,9.5,9h3a.5.5,0,0,1,.5.5v.31A3.83,3.83,0,0,1,15.5,9c2.73,0,4.5,2,4.5,5Z" />
          </Icon>
        </div>
      </IconLink>

      {/* Instagram */}
      <IconLink href="https://instagram.com/avi.kola">
        <div>
          <Icon>
            <path d="M17,23H7a6,6,0,0,1-6-6V7A6,6,0,0,1,7,1H17a6,6,0,0,1,6,6V17A6,6,0,0,1,17,23ZM7,3A4,4,0,0,0,3,7V17a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V7a4,4,0,0,0-4-4Z" />
            <path d="M12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Z" />
            <circle cx="18" cy="5" r="1" />
          </Icon>
        </div>
      </IconLink>

      {/* Behance */}
      <IconLink href="https://behance.net/avikola">
        <div>
          <Icon>
            <path d="M18.5,8A5.77,5.77,0,0,0,13,14a5.77,5.77,0,0,0,5.5,6,5.44,5.44,0,0,0,4.9-3.29.5.5,0,0,0-.45-.71H20.24a.5.5,0,0,0-.4.2,1.71,1.71,0,0,1-1.34.8c-.84,0-1.59-.83-1.87-2h6.85a.5.5,0,0,0,.5-.46c0-.18,0-.36,0-.54A5.77,5.77,0,0,0,18.5,8ZM17,12a1.81,1.81,0,0,1,1.47-1A1.81,1.81,0,0,1,20,12Z" />
            <rect x="15" y="4" width="7" height="3" rx="0.5" ry="0.5" />
            <path d="M10.81,11.4a3.07,3.07,0,0,0,.48-.49,4,4,0,0,0,.75-2.52,4.51,4.51,0,0,0-.73-2.57A4.68,4.68,0,0,0,7.28,4H.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5H6.82a9.75,9.75,0,0,0,2.09-.21,4.22,4.22,0,0,0,1.79-.85,4.57,4.57,0,0,0,1.11-1.31A5.12,5.12,0,0,0,12.5,15a4.69,4.69,0,0,0-.62-2.45A3.5,3.5,0,0,0,10.81,11.4ZM7.68,9.73A2.4,2.4,0,0,1,6.46,10H4V8H6.1a5,5,0,0,1,1.46.18c.22.09.44.25.44.79S7.82,9.65,7.68,9.73ZM4,13.5H6.33a2.81,2.81,0,0,1,1.12.18.9.9,0,0,1,.55,1c0,.81-.34,1.07-.59,1.19A2.68,2.68,0,0,1,6.29,16H4Z" />
          </Icon>
        </div>
      </IconLink>

      {/* Flickr */}
      <IconLink href="https://www.flickr.com/people/avishkarkola/">
        <div>
          <Icon>
            <circle cx="6" cy="12" r="5" />
            <path d="M18,7a5,5,0,1,0,5,5A5,5,0,0,0,18,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,18,15Z" />
          </Icon>
        </div>
      </IconLink>

      {/* Twitter */}
      <IconLink href="https://twitter.com/avikola">
        <div>
          <Icon>
            <path d="M23.87,4.43a.5.5,0,0,0-.6-.1,4.76,4.76,0,0,1-.75.27A4.85,4.85,0,0,0,23.37,3a.5.5,0,0,0-.77-.53,10.59,10.59,0,0,1-2.53,1A5.05,5.05,0,0,0,16.5,2a5.71,5.71,0,0,0-3,.93C11.6,4,11.27,6.47,11.41,8a13,13,0,0,1-9-4.76A.53.53,0,0,0,2,3a.5.5,0,0,0-.4.25,5.35,5.35,0,0,0,.22,5.7c-.15-.1-.31-.22-.47-.35A.5.5,0,0,0,.5,9,5.73,5.73,0,0,0,3,13.64l-.39-.11A.5.5,0,0,0,2,14.2a6.48,6.48,0,0,0,4.19,3.62A9.22,9.22,0,0,1,.56,19a.5.5,0,0,0-.31.93A15.2,15.2,0,0,0,8,22H8a13.35,13.35,0,0,0,10-4.63,13.63,13.63,0,0,0,3.65-9.92A9.81,9.81,0,0,0,23.92,5,.5.5,0,0,0,23.87,4.43ZM8,21.5Z" />
          </Icon>
        </div>
      </IconLink>
    </SocialBlock>
  )
}

const SocialBlock = styled(Block)`
  position: fixed;
  bottom: -5vh;
  height: 200px;
  width: 315px;
  justify-content: space-evenly;
`

// SVGs

const popIcons = keyframes`
  30%, 100% {
    opacity: 1;
  }
  to {
    transform: translateY(0);
  }
`

const Icon = styled.svg.attrs(props => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: props.theme.svgsize,
  height: props.theme.svgsize,
}))`
  opacity: 0;
  transform: translateY(100px);
  animation: ${popIcons} 0.5s 7.3s ease-in forwards;

  path,
  rect,
  circle {
    fill: ${props => props.theme.white};
  }
`

const hoverIcons = keyframes`
  to {
    transform: translateY(-10px);
  }
`

const IconLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  padding: 6px;

  &:hover {
    div {
      animation: ${hoverIcons} 0.1s ease-out both;
    }

    path,
    rect,
    circle {
      fill: ${props => props.theme.accent};
    }
  }
`
