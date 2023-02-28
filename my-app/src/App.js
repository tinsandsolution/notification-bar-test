import React, { useState } from 'react';

// we're going to create a dummy object to represent our notifications
// each notification has a message, a user, and a timestamp
const notifications = [
  {
    message: "Hey, I just met you",
    user: "Carly",
    timestamp: Date.now(),
    type: "reply",
    read: false,
  },
  {
    message: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.",
    user: "Jerry",
    timestamp: (Date.now()-60000*((Math.floor(Math.random() * 9) + 1))),
    type: "comment",
    read: false,
  },
  {
    message: "The Industrial Revolution and its consequences have been a disaster for the human race. They have greatly increased the life-expectancy of those of us who live in “advanced” countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world.",
    user: "Ted",
    timestamp: (Date.now()-3600000*(Math.floor(Math.random() * 9) + 1)),
    type: "reply",
    read: false,
  },
  {
    message: "Oh wow the aliens are coming for me",
    user: "Cixin",
    timestamp: (Date.now()-86400000*(Math.floor(Math.random() * 9) + 1)),
    type: "comment",
    read: true
  },
];

let timePhrase = (providedUnixtime) => {
  let unixTime = Date.now()-providedUnixtime
  // console.log(Date(dateTimeString))

  if (unixTime >= 31536000000) {
    return "Over a year ago"
  }
  if (unixTime >= 2628000000) {
      let phrase = "month"
      let properUnit = (Math.round(unixTime / 2628000000))
      if (properUnit >= 2) phrase = "months"
      return `${properUnit} ${phrase} ago`
  }
  if (unixTime >= 604800000) {
      let phrase = "week"
      let properUnit = (Math.round(unixTime / 604800000))
      if (properUnit >= 2) phrase = "weeks"
      return `${properUnit} ${phrase} ago`
  }
  if (unixTime >= 86400000) {
      let phrase = "day"
      let properUnit = (Math.round(unixTime / 86400000))
      if (properUnit >= 2) phrase = "days"
      return `${properUnit} ${phrase} ago`
  }
  else if (unixTime >= 3600000) {
      let phrase = "hour"
      let properUnit = (Math.round(unixTime / 3600000))
      if (properUnit >= 2) phrase = "hours"
      return `${properUnit} ${phrase} ago`
  }
  else if (unixTime >= 60000) {
      let phrase = "minute"
      let properUnit = (Math.round(unixTime / 60000))
      if (properUnit >= 2) phrase = "minutes"
      return `${properUnit} ${phrase} ago`
  }
  else {
      return "Moments ago"
  }

}

function detailedNotifications() {
  return (
    notifications.map((notification, idx) => {
      let notification_text = notification.user + " " + (notification.type == "comment" ? "commented" : "replied") + ": " + notification.message
      if (notification_text.length > 80) {
        notification_text = notification_text.substring(0, 80) + "..."
      }

      let notification_class = "notification-item"
      if (idx == 0) notification_class += " n-i-1st"
      if (notification.read) notification_class += " notification-read"

      const notification_item = (
        <div className={notification_class}>
          <span className='notification-timestamp'>{timePhrase(notification.timestamp)}</span>
          <span className='notification-text'>{notification_text}</span>
        </div>
      )
      return notification_item
    })
  )
}


function App() {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="App">
      <div className="notification-wrapper" onMouseOver={()=>setHovered(true)} onMouseOut={()=>{
        setHovered(false)
        notifications.forEach((notification) => notification.read = true)
      }}>
        <div className="notification-header">
          <div className="notification-left">
            Notifications
          </div>
          <div className="notification-right">
            {notifications.reduce((acc, notification) => acc + (notification.read ? 0 : 1), 0)}
          </div>
        </div>
        {hovered && <div className='notification-items'>{detailedNotifications(notifications)}</div>}
        {hovered && <div className='all-notifications-button'>All Notifications</div>}
      </div>
    </div>
  );
}

export default App;
