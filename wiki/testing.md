---
title: Foo
---

# How to test for accessibility

When you prepare a project for accessibity, the most common things you need to take into account are these:

- blind people or people with bad or different vision
- cognitive impairements
- degraded motor skills

See the [list of impairments](./impairments) to get a sense of what common disabilities are that you might not take into account.

Luckily, there are improvements that you can make to your app that will benefit people with any of these restrictions. For these, checkout the [a11y low hanging fruits](low-hanging-fruits).

This document will help you test your app, to make sure it is well suited for anybody.

## Manual testing

The most important thing in regards to a11y is manual testing. At this point in time, no automated tool will ever give you the necessary confidence to know that your site is fully accessible.

### Keyboard accessibility

The most important thing you _have_ to test, is that your website can be navigated with the keyboard.

Try to navigate your site to see if you can reach each section without looking at the page. You might notice that some sections are very difficult to reach, or that it's difficult to get past your MEGAMENU ™️ to your content. Address these issues.

In most cases, navigatin on a page is done via Tab, Space and Enter.

<details>
  <summary>Safari</summary>

On **Safari** tab only navigates between input fields and popups. To actually navigate the individual _clickable items_ you need to use `⌥⇥` (Option-Tab)

See [all keyboard shortcuts](https://support.apple.com/en-gb/guide/safari/cpsh003/mac)

</details>

> It's specifically important that you test things like the main menu and make sure that you can open it (if it is an expandable menu) and that each item is selectable via Space / Enter

### Screenreaders

Once everything can be reached via keyboard, the next thing to look out for, is that blind people know what they are focusing, and where a link would take them.

<details>
  <summary><h4>macOS</h4></summary>

That's where screenreaders come in. The easiest, most accessible and widely used screenreader is Apple's Voice Over. You'll find it in the accessiblity section in the system settings.

  <img width="827" alt="image" src="https://github.com/foryouandyourcustomers/a11y/assets/133277/2f54fa3b-48f9-4fe0-b011-d00ba968548f">

On a MacBook it is enabled by pressing TouchID 3 times.

</details>

Go back to your website and see if you could navigate your site without seeing it.

To get a feeling of how this technology works on an ideal page, visit the [best practices page](./best-practices)

## Automated testing

While manual testing is imperative, automated testing can make sure that you have no regression, and that small things you might miss during manual testing are caught (like sufficient color contrast, or missing aria labels).

For automated testing, we recommend to use the [Pa11y](https://pa11y.org) runner. It takes care of the wiring and can run common a11y testing tools (like [axe](https://www.deque.com/axe/)) automatically for you.

TODO: Real world example.
