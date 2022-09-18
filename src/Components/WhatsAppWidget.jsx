import React from 'react'
import WhatsAppWidgett from "react-whatsapp-widget";
import 'react-whatsapp-widget/dist/index.css';
 
const WhatsAppWidget = () => {
  return <WhatsAppWidgett phoneNumber='923110369359' sendButton='send' companyName = 'E - Rising Trainer' message = 'Type your query and send to me'/>
}
 
export default WhatsAppWidget;