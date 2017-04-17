# e.nigma buttons

*e.nigma buttons* is a WordPress plugin that easily allows you to add buttons to your posts, pages etc.

## Installation

1. Download the bundle and move it to your WordPress plugin folder
2. Activate the plugin

## Shortcodes & Attributes
*e.nigma buttons* adds the shortcode `[button]` to your installation. The following options can be used to adjust the button for your needs:

* `label`: The label of your button
* `icon`: The icon of your button
* `link`: The link of your button
* `color`: The color of button
* `border`: yes (default) or no
* `size`: small, medium (default) or large
* `class`: Additional CSS classes that will be added to your buttons icon

### Colors
The following colors are avaible:
* green
* orange
* purple
* cyan
* white
* red
* black

### Icons
*e.nigma buttons* uses [Font Awesome](http://fontawesome.io/) as icon resource. [An overview over all available icons](http://fontawesome.io/icons/) can be found on their website.

## Usage
Most of the shortcodes attributes are self explaining. However, it must be noted that the `icon` attribute can be filled by using modififed [Font Awesome shortcodes](http://fontawesome.io/icons/).

For instance: If you want to use the GitHub icon you would search for that icon in the [list of all icons](http://fontawesome.io/icons/). What you will find is the corresponding CSS class. For *e.nigma buttons* the name of the icon (which is obtained if stripping the "fa-" in the beginning of the CSS class) is used. For GitHub the CSS class would be `fa-github`. Thus, `github` is your value for the `icon` attribute.

### Examples
`[button label="My GitHub account" icon="github" color="orange" link="https://github.com/chemiker"]`
Brings you an linked, medium-sized, orange button that has a GitHub icon and the label "My GitHub account".

`[button icon="github" color="orange" link="https://github.com/chemiker" size="large"]`
Brings you an orange, large-sized, linked GitHub icon.

## FAQ

See the FAQ in the repository [Wiki](https://github.com/chemiker/enigma-buttons/wiki).

## License & copyright
This project is released under the MIT license. It uses Font Awesome icons which is a project by Dave Gandy. Thanks for this Dave!

## Development
As the plugin this is real free software you are very welcome to fork this project and do whatever you want with it :)

### Requirements
* npm
* Bower
* Compass

### Installation
1. Download the zip archive or clone the repository
2. move to the project containing folder and run `npm install gulp gulp-util gulp-concat gulp-compass gulp-watch gulp-uglify gulp-browserify gulp-rename`
3. run `bower install`
4. run `gulp watch` to continiously watch the CSS files compile them if necessary

