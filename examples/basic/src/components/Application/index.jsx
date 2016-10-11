import React, { Component } from 'react';
import LazyLoad from 'react-image-lazy-load';

import './style.css'

class Application extends Component {
  render() {
    return (
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
        <LazyLoad height={683} offsetVertical={300} imageProps={{
            src: "http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg",
            alt: "2015_02_20_conj_bourque1024.jpg",
            ref: "image",
            className: "className"
          }} />
        <div className="filler" />
        <div className="ScrollableContainer">
          <div className="filler" />
          <div className="filler" />
          <div className="filler" />
          <LazyLoad height={480} imageProps={{
            src: "http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif",
            alt: "1502/MarsPlume_jaeschke_480.gif",
            ref: "image",
            className: "className"
          }} />
        </div>
        <div className="filler" />
        <LazyLoad height={720} offsetVertical={300} originalSrc="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" loaderImage={true} imageProps={{
            src: require('../../images/ring.gif'),
            alt: "ToadSky_Lane_1080_annotated.jpg",
            ref: "image",
            className: "image"
          }} />
        <div className="filler" />
      </div>
    );
  }
}

export default Application;