import React, { useState } from 'react'
import { css } from '@emotion/core'

export default function Item({ index, /* unit, */ unitSize, zoom, propLength, propPosition, propPriority, setter }) {
  const [length, setLength] = useState(propLength)
  const [position, setPosition] = useState(propPosition)
  const [priority, setPriority] = useState(propPriority)
  const [focused, setFocused] = useState(false)
  const itemCss = css`
    height: ${(length / unitSize) * zoom}vh;
    position: absolute;
    top: ${(position / unitSize) * zoom}vh;
    left: ${50 * priority + 50}px;
    background-color: rgb(200, 200, 255);
    width: 300px;
    border: 5px solid rgb(100, 100, 255);
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  `

  return (
    <div css={itemCss} onClick={() => setFocused(!focused)}>
      {focused ? 'focused' : ''}
      <label htmlFor="length">
        Length
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => {
            setter({ index, property: 'length', value: e.target.value })
            setLength(e.target.value)
          }}
        />
      </label>
      <br />
      <label htmlFor="position">
        Position
        <input
          type="number"
          id="position"
          value={position}
          onChange={(e) => {
            setter({ index, property: 'position', value: e.target.value })
            setPosition(e.target.value)
          }}
        />
      </label>
      <br />
      <label htmlFor="priority">
        Priority
        <input
          type="number"
          id="priority"
          value={priority}
          onChange={(e) => {
            setter({ index, property: 'priority', value: e.target.value })
            setPriority(e.target.value)
          }}
        />
      </label>
    </div>
  )
}
