## Decreepifier

Browsers provide pages/apps ways to monitor whether a given tab/document are
visible, have focus, etc.  There are legitimate uses for these capabilities.
However, they are also frequently misused to spy on the user.

A page/app should not be able to report you to the authorities because you
clicked away from what it thinks you should be paying attention to.

This extension aims to stop this surveillance.

### Compatibility and installation

This extension is a standard manfiest version 3 webextension.  In theory, any
browser can use it, though some make it harder than others.

#### Firefox

In practice, this is a problem for Firefox, because the extension uses the service
worker API which is part of the manifest v3 standard, but service workers have
not yet been implemented/enabled in Firefox.

Although Firefox is my primary browser, I'm currently only worried about
surveillance in some apps that I happen to use a Blink-based browser (Vivaldi)
for, so I haven't implemented a manifest v2 version for Firefox compatibility.  
I may do so at some point.

<!--
If I ever do create a version for Firefox, I'll add this:
This should be installable from [this extension's Mozilla add-ons page](https://addons.mozilla.org/en-US/firefox/addon/EXTENSION_NAME/) .
-->

#### Chrome, Vivaldi, Brave, Opera and other browsers

This works on Blink-based browsers (Chomium/Chrome, Vivaldi, Brave, etc).

This extension is not currently available through the Chrome Web Store, so it's
not a one-click install-and-run, unfortunately.

You can install this by turning developer-mode on in Chrome/etc, downloading
this repository, and adding this "unpacked extension" to your browser.
When it prompts for a directory, select the "decreepifier" subdirectory in
this project dir (not the project dir itself).

Apparently using it with Safari requires you to run it through an 
[automatic web extension converter with Xcode](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari) ,
though I haven't tried it.

It may also work on other non-Blink WebKit browsers, but I haven't tried any.

### Why isn't this in the Chrome web store?

It's not in the Chrome store because in order to publish an extension through
the store -- even if you're not charging money for it -- you have to pay an
up-front fee to Google, in addition to giving them every personal bit of
information about yourself, your life, your friends, your email, and the
rights to your first-born child (there's that advertising business again).

### Support / bugs

If you have problems with this extension, please let me know.  Open an issue
on the [Github project page](https://github.com/ccazabon/decreepifier) .

### Manifest V3

Note: I disapprove of the changes Google introduced in manifest V3.  The
declarativeNetRequest change seems explicitly designed to break ad- and
tracking-blocker extensions like uBlock Origin, AdBlock Plus, Privacy Badger,
etc.  The fact that those types of extensions impact Google's bottom line --
because it is primarily an advertising company -- I'm sure had no impact
on their decision.

See [Mozilla's take on this](https://blog.mozilla.org/addons/2019/09/03/mozillas-manifest-v3-faq/)
for more information.
