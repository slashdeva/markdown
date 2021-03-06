[![npm version](https://badge.fury.io/js/react-markdown2.svg)](https://badge.fury.io/js/react-markdown2)
[![Build Status](https://travis-ci.org/reactbits/markdown.svg?branch=master)](https://travis-ci.org/reactbits/markdown)
[![Total downloads](https://img.shields.io/npm/dt/react-markdown2.svg)](https://www.npmjs.com/package/react-markdown2)

[![Dependency Status](https://david-dm.org/reactbits/markdown.svg)](https://david-dm.org/reactbits/markdown)
[![devDependency Status](https://david-dm.org/reactbits/markdown/dev-status.svg)](https://david-dm.org/reactbits/markdown#info=devDependencies)

# markdown
Yet another react component to render markdown.

## Install

```
npm install --save react-markdown2
```

## Usage

```jsx
import React, {Component} from "react";
import Markdown from "react-markdown2";

class Example extends Component {
    render() {
        return (
            <div>
                {/* Pass Markdown source to the `source` prop */}
                <Markdown source="**Markdown is awesome!**" />

                {/* Or pass it as children */}
                {/* You can nest React components, too */}
                <Markdown>
                    {`
                    ## Header
                    1. One
                    2. Two
                    `}

                    <div>Nested component</div>

                    {`Test`}
                </Markdown>
            </div>
        )
    }
}
```

## Webpack build pipeline

See [webpack.config.js](https://github.com/reactbits/markdown/blob/master/webpack.config.js) as an example how to integrate this package into your webpack pipeline, i.e.
you need to use the following webpack plugins:
* extract-text-webpack-plugin
* style-loader
* sass-loader
* css-loader
* postcss-loader
* webpack-sources

## TODO
* [x] Use markdown-it to render markdown content
* [x] Use prismjs for syntax highlighting
* [ ] Diagrams
	* [x] [Sequance diagrams](https://github.com/bramp/js-sequence-diagrams)
	* [x] [Flowchart](https://github.com/adrai/flowchart.js)
	* [x] [Railroad diagrams](https://github.com/tabatkins/railroad-diagrams)
	* [ ] Buttons to show source code of diagram
* [ ] [KaTeX](https://github.com/Khan/KaTeX)
	* [x] basic integration
	* [ ] import katex css
* [ ] MathJax
* [ ] Auto-embeddable links
	* [ ] Video services
		* [x] youtube
		* [x] vimeo
		* [x] vine
		* [x] daylymotion
		* [ ] viddler
		* [ ] blip.tv
		* [ ] liveleak
		* [x] ted
		* [ ] ustream
	* [ ] Audio services
		* [x] soundcloud
	* [ ] Code snippets
		* [ ] github gist
		* [ ] codepen
		* [ ] ideone
		* [ ] jsbin
		* [ ] jsfiddle
		* [ ] plunker
	* [ ] Social media
		* [ ] twitter
		* [ ] facebook
	* [ ] Maps
		* [x] google maps
* [x] Unified diff fence blocks
* [ ] Automatically detect and render diff patch blocks
* [ ] Integrate/implement [embed.js](https://github.com/ritz078/embed.js) features
* [ ] render HTML content if content-type is not markdown
* [ ] allow to extend markdown rendering with markdown-it plugins

## Licence

MIT. See LICENSE.
