import React, { useContext } from 'react'
import notification, { Notification } from './Notification'
import Slider from './Slider'

export default function Usenotif() {
    const notif=useContext(notification)
    const active=notif.notification
  return (
    <div>
{active && <Slider
title={active.title}
message={active.message}
status={active.status}
/>}
    </div>
  )
}
