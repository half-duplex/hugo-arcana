# Hugo HTML5 UP Arcana

This is a [Hugo](https://gohugo.io/) port of the
[Arcana template](https://html5up.net/arcana) from
[HTML5 UP](https://html5up.net/).
Check out the [live demo](https://sec.gd/hugo/themes/arcana/).

[![Screenshot](https://raw.githubusercontent.com/half-duplex/hugo-arcana/main/images/tn.png)](https://raw.githubusercontent.com/half-duplex/hugo-arcana/main/images/screenshot.png)

## Configuration
See the exampleSite folder. The elements on the homepage are defined in
`data/homepage.yml`, where you can choose which appear and configure them.

In case of multilingual websites, you can define your homepage within
the language directory of the specific language,
e.g. `data/en/homepage.yml` for English.
If the configuration does not exist, the content in `data/homepage.yml` is used.

The mostly-empty `_index.md` files are required for marking of the active menu
item to work correctly.

You can add your own styles in your site's `assets/sass/custom.scss`, which is
included at the end of the theme's `main.scss`.

## Multilingual
Translations for template content like the contact form
are located in the `i18n` directory.
Please feel free to contribute more languages into this directory.

## Showcase
If you use this theme and would like to be listed here, add your site in a pull
request!
- [Theme Demo Site](https://sec.gd/hugo/themes/arcana/)
- [Alichampi](https://alichampi.com/)
- [Odesa Regional Organization of Red Cross Society of Ukraine](https://od.redcross.org.ua/)
- [BOMnipotent Supply Chain Security Hosting](https://www.bomnipotent.de)

## Contributing
Pull requests welcome! This is my first Hugo theme, and I expect there are some
things I've done sub-optimally.

## Thanks
I borrowed a good amount of structure and useful bits from
[hugo-html5up-alpha](https://github.com/dewittn/hugo-html5up-alpha)
