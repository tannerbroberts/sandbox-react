import React, { useReducer } from 'react'
import { css } from '@emotion/core'

import Space from './Space'
import Item from './Item'

const overflowContainerCss = css`
  overflow-y: scroll;
  height: 100%;
`

const s = 1000
const m = 60 * s
const h = 60 * m
const d = 24 * h
const mo = 30 * h
const y = 365 * d

export default function ScheduleItemList({ length, zoom, json }) {
  const scheduleItemListCss = css`
    position: relative;
    width: 100%;
    background-color: rgb(200, 255, 200);
  `

  function itemReducer(state, action) {
    switch (action.property) {
      case 'length':
        state[action.index].length = action.value
        return state
      case 'priority': {
        state[action.index].priority = action.value
        return state
      }
      case 'position':
        state[action.index].position = action.value
        return state
      default:
        return state
    }
  }
  const [itemStates, setItemStates] = useReducer(itemReducer, json)

  let spaceCount
  let unit
  let unitSize
  if (length > y) {
    spaceCount = length / y
    unit = 'y'
    unitSize = y
  } else if (length > mo) {
    spaceCount = length / mo
    unit = 'mo'
    unitSize = mo
  } else if (length > d) {
    spaceCount = length / d
    unit = 'd'
    unitSize = d
  } else if (length > h) {
    spaceCount = length / h
    unit = 'h'
    unitSize = h
  } else if (length > m) {
    spaceCount = length / m
    unit = 'm'
    unitSize = m
  } else if (length > s) {
    spaceCount = length / s
    unit = 's'
    unitSize = s
  } else {
    spaceCount = length / 10
    unit = '0.01s'
    unitSize = 10
  }

  const spaceComponents = []
  for (let i = 0; i < spaceCount; i++) {
    spaceComponents.push(<Space key={100000 + i} zoom={zoom} position={i} unit={unit} />)
  }

  const items = []
  for (let i = 0; i < itemStates.length; i++) {
    items.push(
      <Item
        key={i}
        unit={unit}
        unitSize={unitSize}
        index={i}
        zoom={zoom}
        propPosition={itemStates[i].position}
        propLength={itemStates[i].length}
        propPriority={itemStates[i].priority}
        setter={setItemStates}
      />
    )
  }

  return (
    <div css={overflowContainerCss}>
      <div css={scheduleItemListCss}>{[...items, ...spaceComponents]}</div>
    </div>
  )
}
