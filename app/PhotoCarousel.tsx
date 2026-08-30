"use client";

import { useState, useEffect } from "react";
import { photosData } from "./photosData";

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % photosData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) => (current + photosData.length - 1) % photosData.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % photosData.length);
  };

  return (
    <section className="photoSection" id="photos" aria-labelledby="photosHeading">
      <div className="photoHeader">
        <div>
          <p className="sectionKicker">PHOTOS AND EVENTS</p>
          <h2 id="photosHeading">Moments from the collaboration and beyond.</h2>
        </div>
        <p>
          Moments from research workshops, conferences, and DESC team events.
        </p>
      </div>

      <div className="photoCarousel">
        <div className="photoViewport" aria-live="polite">
          <div
            className="photoTrack"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {photosData.map((photo, index) => (
              <article className="photoSlide" key={photo.src}>
                <div className="photoPlaceholder">
                  <img
                    src={photo.src}
                    alt={photo.title || `Research and collaboration photo ${index + 1}`}
                    className="photoCardImage"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="photoCaption">
                  <h3>{photo.title}</h3>
                  <p>{photo.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="photoControls">
          <div className="photoDotsScrollable">
            {photosData.map((photo, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
          <div className="photoArrows">
            <button type="button" onClick={showPrevious} aria-label="Previous photo">
              ←
            </button>
            <button type="button" onClick={showNext} aria-label="Next photo">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}





