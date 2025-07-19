import React, { createContext, useEffect, useState } from 'react'
  const notification=createContext({
        notification:null,
        showNotification:function(notificationData){},
           hidenNotification:function(){}
    })
export  function Notification(props) {
    const[activenotif,setActivenotif]=useState()

    useEffect(()=>{
        if(activenotif && activenotif.status==='success' || activenotif.status='error'){
            const time=setInterval(()=>{
                setActivenotif(null)
            },3000)
            return()=>{
                clearTimeout(time)
            }
        }
    },[activenotif])
    function showNotificationhandler(notificationData){
        setActivenotif(notificationData)
    }
   function hideNotificationhandler(notificationData){
        setActivenotif(null)
    }
    const context={
        notification:activenotif,
        showNotification:showNotificationhandler,
        hidenNotification:hideNotificationhandler
    }
  return (
    <Notification.Provider value={context}>
        {props.children}
    </Notification.Provider>
  )
}
export default notification