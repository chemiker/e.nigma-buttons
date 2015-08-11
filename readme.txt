=== Plugin Name ===
Contributors: chemiker
Donate link: https://flattr.com/profile/chemiker
Tags: button, post, page, font awesome, icon
Requires at least: 3.0.1
Tested up to: 4.3
Stable tag: 1.0.1
License: MIT
License URI: http://opensource.org/licenses/MIT

e.nigma buttons allows you to easily add buttons to your posts, pages etc.

== Description ==

e.nigma buttons is a lightweight plugin that adresses a common problem that applies to many WordPress users: Visually highlight a link (e.g. a download link). One great solution is the use of buttons

The purpose of a button is clear. You press that button and something happens. This is a well known principle that most users are aware of. In contrast to regular text links (e.g. a download link), buttons are more likely to be noticed, especially if you use them in combination with an icon.

e.nigma buttons allows you to easily create those visually attractive buttons using a simple shortcode environment.

Development of the plugin is an open process. The current version is available on github:

https://github.com/chemiker/enigma-buttons

Feel free to contribute and to fix errors or send improvements via github.

== Installation ==
1. Upload the plugin folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Changelog ==

= 1.0.1 =
* Fix wrong line-height for various themes

= 1.0 =
* Initial release

== Frequently Asked Questions ==

= Are there any rendered examples of the buttons? =
Yes. I'm using them in my blog. See [this example](http://e.nigma.de/portfolio/podlove/).

= Are there any reserved CSS classes for the 'class' attribute? =
Yes. The original idea behind that class attribute was the ability to add additional Font Awesome CSS classes (for spinning, rotating etc.). Several examples can be found in the documentation of [Font Awesome](http://fontawesome.io/examples/).

== Shortcodes & Attributes ==
*e.nigma buttons* adds the shortcode `[button]` to your installation. The following options can be used to adjust the button for your needs:

* `label`: The label of your button
* `icon`: The icon of your button
* `link`: The link of your button
* `color`: The color of button
* `border`: yes (default) or no
* `size`: small, medium (default) or large
* `class`: Additional CSS classes that will be added to your buttons icon

Most of the shortcodes attributes are self explaining. However, it must be noted that the `icon` attribute can be filled by using modififed [Font Awesome shortcodes](http://fontawesome.io/icons/).

For instance: If you want to use the GitHub icon you would search for that icon in the [list of all icons](http://fontawesome.io/icons/). What you will find is the corresponding CSS class. For *e.nigma buttons* the name of the icon (which is obtained if stripping the "fa-" in the beginning of the CSS class) is used. For GitHub the CSS class would be `fa-github`. Thus, `github` is your value for the `icon` attribute.

= Colors =
The following colors are avaible:
* green
* orange
* purple
* cyan
* white
* red
* black

= Icons =
*e.nigma buttons* uses [Font Awesome](http://fontawesome.io/) as icon resource. [An overview over all available icons](http://fontawesome.io/icons/) can be found on their website.

= Examples =
`[button label="My GitHub account" icon="github" color="orange" link="https://github.com/chemiker"]`
Brings you an linked, medium-sized, orange button that has a GitHub icon and the label "My GitHub account".

`[button icon="github" color="orange" link="https://github.com/chemiker" size="large"]`
Brings you an orange, large-sized, linked GitHub icon.
