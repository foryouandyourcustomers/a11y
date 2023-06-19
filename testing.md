# How to test accessibility

The first thing to do, when you want to improve the accessiblity of your site, is to test the current behavior to see what the most pressing issues are.

There are two ways to test sites for a11y:

1. [Manual testing](#manual-testing)  
   Useful during development to make sure changes are accessible.
3. [Automated testing](#automated-testing)  
   Safe guards that make sure the accessibility of the site isn't degraded over time.

In addition to these testing methods, it's important for you to understand the different types of disabilites that are common and that you need to look out for. Please refer to the [list of disabilities](./disabilities) to learn more, but to summarize, the disabilites that need to be considered most when creating websites are:

1. Visual impairements
2. Mobility impairements
3. Cognitive impairements

Each disability presents different challenges and small changes can have a big impact.

## Manual testing

When doing manual testing, there is nothing better than actually trying to use the website with the built in accessibility features.

### macOS

Open the system settings, and enable "VoiceOver" in the Accessibility section.

Then familiarize yourself with the [keyboard shortcuts](https://support.apple.com/en-gb/guide/safari/cpsh003/mac) to navigate a website.

Try to navigate your site to see if you can reach each section without looking at the page. You might notice that some sections are very difficult to reach, or that it's difficult to get past your MEGAMENU ™️ to your content. Address these issues.

### Accessibility Audit & Tree

TODO

## Automated testing

For automated testing, we recommend to use the [Pa11y](https://pa11y.org) runner. It takes care of the wiring and can run common a11y testing tools (like [axe](https://www.deque.com/axe/)) automatically for you.

TODO: Real world example.
