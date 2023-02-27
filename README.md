A few basic assumptions here:

1. This app will be used on desktop, with various different window sizes.


# Mobile Devices

In a mobile application, the notifications section is typically not a drop-down due to limited screen size. Instead, it takes up the entire main div. See Twitter and NextDoor for examples.

Making it mobile-friendly would involve changing the spec for the notifications component entirely.

Implementing the notifications on mobile would mostly involve copying 80% of the code already written, but changing widths and text overflow thresholds.
