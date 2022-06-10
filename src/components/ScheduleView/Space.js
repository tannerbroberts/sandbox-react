import React from 'react'
import { css } from '@emotion/core'

export default function Space({ zoom, position, unit }) {
  const scheduleSpaceCss = css`
    box-sizing: border-box;
    width: 100%;
    height: ${zoom}vh;
    border-top: 1px solid lightgrey;
    font-size: 2vh;
    padding-left: 10px;
    color: lightgray;
    line-height: 0;
    padding-top: 15px;
  `
  return <div css={scheduleSpaceCss}>{position !== 0 ? `${position} ${unit}` : ''}</div>
}
