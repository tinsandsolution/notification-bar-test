import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// we're going to create a dummy object to represent our notifications
// each notification has a message, a user, and a timestamp
const notifications = [
  {
    message: "Hey, I just met you",
    user: "Carly",
    timestamp: "2 minutes ago",
    type: "reply"
  },
  {
    message: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.",
    user: "Jerry",
    timestamp: "3 minutes ago",
    type: "comment"
  },
  {
    message: "The Industrial Revolution and its consequences have been a disaster for the human race. They have greatly increased the life-expectancy of those of us who live in “advanced” countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world.",
    user: "Ted",
    timestamp: "4 minutes ago",
    type: "reply"
  },
  {
    message: "Oh wow the aliens are coming for me",
    user: "Cixin",
    timestamp: "5 minutes ago",
    type: "comment"
  },
];

function detailedNotifications(notifications) {
  // we're going to do a map thing here
  // taking in the notifications object and turning them into boxes

  return (
    notifications.map((notification, idx) => {
      let notification_text = notification.user + " " + (notification.type == "comment" ? "commented" : "replied") + ": " + notification.message
      if (notification_text.length > 79) {
        notification_text = notification_text.substring(0, 76) + "..."
      }
      const notification_item = (
        <div className={idx == 0 ? 'notification-item n-i-1st' : 'notification-item'}>
          <span className='notification-timestamp'>{notification.timestamp}</span>
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
      <div className="notification-wrapper" onMouseOver={()=>setHovered(true)} onMouseOut={()=>setHovered(false)}>
        <div className="notification-header">
          <div className="notification-left">
            Notifications
          </div>
          <div className="notification-right">
            {hovered ? "" : notifications.length}
          </div>
        </div>
        {/* a div that only is displayed if hovered is set to true */}
        {hovered && <div className='notification-items'>{detailedNotifications(notifications)}</div>}
        {/* fadsfasdf */}
      </div>
      random body information
    </div>
  );
}

export default App;
