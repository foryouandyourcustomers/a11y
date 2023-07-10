# How to test for accessibility

When you prepare a project for accessibity, the most common things you need to take into account are these:

- blind people or people with bad or different vision
- cognitive impairements
- degraded motor skills

See the [list of disabilities](./disabilities) to get a sense of what common disabilities are that you might not take into account.

Luckily, there are improvements that you can make to your app that will benefit people with any of these restrictions. For these, checkout the [a11y low hanging fruits](low-hanging-fruits).

This document will help you test your app, to make sure it is well suited for anybody.

## Keyboard accessibility

The most important thing you _have_ to test, is that your website can be navigated with the keyboard.

If all menu items and page sections are accessible via keyboard, then that's the first most important step, since most other a11y features depend on this.

In most cases, navigatin on a page is done via Tab, Space and Enter.

On **Safari** however, tab only navigates between input fields and popups. To actually navigate the individual _clickable items_ you need to use `⌥⇥` (Option-Tab)
