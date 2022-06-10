import React from 'react'
import { css } from '@emotion/core'

const scheduleViewHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  padding-left: 50px;
  padding-right: 50px;
`

const priorityToggleCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

const priorityToggle__BoxCss = css`
  width: 50px;
  height: 50px;
`

const priorityToggle__pCss = css`
  font-size: 50px;
  margin-block-start: 0;
  margin-block-end: 0;
`

const timePickerCss = css`
  label {
    height: 50px;
  }
  input {
    height: 50px;
    width: 50px;
    margin-right: 10px;
    margin-left: 4px;
    font-size: 5vh;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export default function Header({ zoomSetter, zoom, maxZoom, minZoom, priorityOnly, setPriority }) {
  return (
    <div css={scheduleViewHeaderCss}>
      <div css={priorityToggleCss}>
        <input
          css={priorityToggle__BoxCss}
          type="checkbox"
          value={priorityOnly}
          onChange={(e) => setPriority(e.target.checked)}
        />
      </div>
      <div css={timePickerCss} aria-hidden="true">
        <label value="year" htmlFor="year">
          yrs
          <input type="number" id="year" />
        </label>
        <label value="year" htmlFor="year">
          mon
          <input type="number" id="year" />
        </label>
        <label value="year" htmlFor="year">
          days
          <input type="number" id="year" />
        </label>
        <label value="year" htmlFor="year">
          hrs
          <input type="number" id="year" />
        </label>
        <label value="year" htmlFor="year">
          mins
          <input type="number" id="year" />
        </label>
        <label value="year" htmlFor="year">
          seconds
          <input type="number" id="year" />
        </label>
      </div>
      <input
        value={zoom}
        type="range"
        min={minZoom}
        max={maxZoom}
        onChange={(e) => {
          zoomSetter(e.target.value)
        }}
      />
    </div>
  )
}
