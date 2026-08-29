"use client";

import { useState } from "react";

const slides = [
  {
    number: "01",
    title: "Event photo placeholder",
    text: "Your first event photo, event name, date, location, and caption will appear here.",
  },
  {
    number: "02",
    title: "Conference photo placeholder",
    text: "A conference, collaboration meeting, presentation, or workshop photo can be added here.",
  },
  {
    number: "03",
    title: "Community photo placeholder",
    text: "A DESC community, mentoring, outreach, or team event photo can be added here.",
  },
];

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current + slides.length - 1) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="photoSection" id="photos" aria-labelledby="photosHeading">
      <div className="photoHeader">
        <div>
          <p className="sectionKicker">Photos and events</p>
          <h2 id="photosHeading">Moments from the collaboration and beyond.</h2>
        </div>
        <p>
          This gallery is ready for the photos and event details you will provide.
          Each image will have its own title, date, location, and caption.
        </p>
      </div>

      <div className="photoCarousel">
        <div className="photoViewport" aria-live="polite">
          <div
            className="photoTrack"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <article className="photoSlide" key={slide.number}>
                <div className="photoPlaceholder" aria-hidden="true">
                  <span>{slide.number}</span>
                  <strong>Photo coming soon</strong>
                </div>
                <div className="photoCaption">
                  <span>Gallery placeholder {slide.number}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="photoControls">
          <div>
            {slides.map((slide, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                key={slide.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo placeholder ${index + 1}`}
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
