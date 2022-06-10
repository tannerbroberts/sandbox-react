import React, { useState } from 'react'
import { css } from '@emotion/core'
import ScheduleItemList from './ScheduleView_ItemList'
import Header from './ScheduleView_Header'

const scheduleViewCss = css`
  height: 80vh;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`

export default function ScheduleView({ json }) {
  const [zoom, setZoom] = useState(5)
  const [priorityOnly, setPriority] = useState()

  return (
    <>
      <div css={scheduleViewCss}>
        <Header
          zoom={zoom}
          minZoom={5}
          maxZoom={20}
          zoomSetter={setZoom}
          priorityOnly={priorityOnly}
          setPriority={setPriority}
        />
        <ScheduleItemList zoom={zoom} length={1000 * 60 * 60 * 10} json={json} />
      </div>
    </>
  )
}
