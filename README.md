React Image Lazy Load Component
=========================

React Image Lazy Load is easy to use React component which helps you defer loading Images in predictable way. It's fast, works in IE8+, 6KB minified and uses debounce function by default. You can also use component inside scrolling container, such as div with scrollbar. It will be found automatically. Check out an example.

[![build status](https://img.shields.io/travis/loktar00/react-lazy-load.svg?style=flat-square)](https://travis-ci.org/loktar00/react-lazy-load)
[![dependency status](https://david-dm.org/loktar00/react-lazy-load.svg?style=flat-square)](https://david-dm.org/loktar00/react-lazy-load)
[![npm downloads](https://img.shields.io/npm/dm/react-lazy-load.svg?style=flat-square)](https://www.npmjs.com/package/react-lazy-load)

## Installation
React Lazy Load requires **React 0.14 or later.**

```
npm install --save react-image-lazy-load
```

## Examples
* [Basic](https://github.com/vikash-bhardwaj/react-image-lazy-load/tree/master/examples/basic)

## Usage

```jsx
import React from 'react';
import LazyLoad from 'react-image-lazy-load';

const MyComponent = () => (
  <div>
    Scroll to load images.
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={300} loaderImage originalSrc="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" imageProps={{
      src: require('../../images/ring.gif'),
      alt: "DR_MVMQ20Feb2015ouellet1024.jpg",
      ref: "image",
      className: "className"
    }} />
    <div className="filler" />
    <LazyLoad height={683} offsetTop={200} imageProps={{
      src: "http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg",
      alt: "2015_02_20_conj_bourque1024.jpg",
      ref: "image",
      className: "className"
    }} />
    <div className="filler" />
    <LazyLoad height={480} offsetHorizontal={50} imageProps={{
      src: "http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif",
      alt: "1502/MarsPlume_jaeschke_480.gif",
      ref: "image",
      className: "className"
    }} />
    <div className="filler" />
    <LazyLoad
      height={720}
      onContentVisible={() => console.log('look ma I have been lazyloaded!')} originalSrc="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" loaderImage={true} imageProps={{
        src: require('../../images/ring.gif'),
        alt: "ToadSky_Lane_1080_annotated.jpg",
        ref: "image",
        className: "image"
      }} />
    <div className="filler" />
  </div>
);
```

## Props

### imageProps
Type: `Object` Required: `Yes`

The `imageProps` is a required props for this plug-in to work. This can except any possible HTML attributes for `img` tag which also includes data attributes and React specific `ref` and `className`.

### loaderImage
Type: `Boolean` Default: `false`

The `loaderImage` is a Boolean prop to define if the image has to have a loader/placeholder image. If this set to true then prop `originalSrc` becomes required. <br />
If `loaderImage` is set to true then loader/placeholder image can be set to 'src' attribute of `imageProps` prop.

### originalSrc
Type: `String`

`originalSrc` is useful when you want the image tag to load first any loader/placeholder image. This prop becomes required if prop `loaderImage` is set to true for the component.

#### offset
Type: `Number|String` Default: `0`

Aliases: `threshold`

The `offset` option allows you to specify how far below, above, to the left, and to the right of the viewport you want to _begin_ displaying your content. If you specify `0`, your content will be displayed as soon as it is visible in the viewport, if you want to load _1000px_ below or above the viewport, use `1000`.

#### offsetVertical
Type: `Number|String` Default: `offset`'s value

The `offsetVertical` option allows you to specify how far above and below the viewport you want to _begin_ displaying your content.

#### offsetHorizontal
Type: `Number|String` Default: `offset`'s value

The `offsetHorizontal` option allows you to specify how far to the left and right of the viewport you want to _begin_ displaying your contet.

#### offsetTop
Type: `Number|String` Default: `offsetVertical`'s value

The `offsetTop` option allows you to specify how far above the viewport you want to _begin_ displaying your content.

#### offsetBottom
Type: `Number|String` Default: `offsetVertical`'s value

The `offsetBottom` option allows you to specify how far below the viewport you want to _begin_ displaying your content.

#### offsetLeft
Type: `Number|String` Default: `offsetVertical`'s value

The `offsetLeft` option allows you to specify how far to left of the viewport you want to _begin_ displaying your content.

#### offsetRight
Type: `Number|String` Default: `offsetVertical`'s value

The `offsetRight` option allows you to specify how far to the right of the viewport you want to _begin_ displaying your content.

#### throttle
Type: `Number|String` Default: `250`

The throttle is managed by an internal function that prevents performance issues from continuous firing of `scroll` events. Using a throttle will set a small timeout when the user scrolls and will keep throttling until the user stops. The default is `250` milliseconds.

#### debounce
Type: `Boolean` Default: `true`

By default the throttling function is actually a [debounce](https://lodash.com/docs#debounce) function so that the checking function is only triggered after a user stops scrolling. To use traditional throttling where it will only check the loadable content every `throttle` milliseconds, set `debounce` to `false`.

### height
Type: `String|Number` Default: `100`

This is used to set the elements height even when it has no content.

### onContentVisible
Type `Function`

A callback function to execute when the content appears on the screen.