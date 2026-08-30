"use client";

import { useState } from "react";

export type MediaItem = {
  id: string;
  title: string;
  category: "Talks & Seminars" | "Piano & Music";
  description: string;
  youtubeId: string;
};

const talkItems: MediaItem[] = [
  {
    id: "talk-1",
    title: "Photometric Supernova Ia Cosmology Tutorial",
    category: "Talks & Seminars",
    description: "LSST DESC Dark Energy School (2025) tutorial covering photometric classification and supernova cosmology workflows.",
    youtubeId: "I5OdaIvIwe0",
  },
  {
    id: "talk-2",
    title: "Using Host Galaxy Photo-z to Improve Cosmological Constraints with Type Ia SNe",
    category: "Talks & Seminars",
    description: "Astronomy Illinois presentation on host galaxy photo-z systematics and SNIa cosmological parameter estimation.",
    youtubeId: "CfPI4mSFGcg",
  },
  {
    id: "talk-3",
    title: "Rethinking Cosmology | Raman Research Institute",
    category: "Talks & Seminars",
    description: "Invited presentation at Raman Research Institute (RRI) on observational cosmology and supernova data.",
    youtubeId: "HVkd8q4_xio",
  },
  {
    id: "talk-4",
    title: "Cosmology with Supernova Ia (SNIa)",
    category: "Talks & Seminars",
    description: "Cheenta Mathematical Science Seminar presenting supernova cosmology in the LSST era.",
    youtubeId: "66drHoeZ3zs",
  },
];

const musicItems: MediaItem[] = [
  {
    id: "music-1",
    title: "Chopin - Nocturne No. 20 in C-sharp Minor",
    category: "Piano & Music",
    description: "Piano performance of Frédéric Chopin's Nocturne in C-sharp minor, Op. posth.",
    youtubeId: "aQJsi0P10-U",
  },
  {
    id: "music-2",
    title: "Bach-Siloti - Prelude in B Minor",
    category: "Piano & Music",
    description: "Piano performance of J.S. Bach's Prelude in B minor (transcribed by Alexander Siloti).",
    youtubeId: "HZ9amDPu-dg",
  },
  {
    id: "music-3",
    title: "Chopin - Nocturne Op. 72, No. 1 in E Minor",
    category: "Piano & Music",
    description: "Piano performance of Chopin's Nocturne Op. 72, No. 1.",
    youtubeId: "u8A5qng2yRU",
  },
  {
    id: "music-4",
    title: "Tchaikovsky - Op. 37a No. 6 (June: Barcarolle)",
    category: "Piano & Music",
    description: "Piano performance of Pyotr Ilyich Tchaikovsky's The Seasons, Op. 37a: June (Barcarolle).",
    youtubeId: "S-9e1v_oMHQ",
  },
  {
    id: "music-5",
    title: "Love Story (Piano Performance)",
    category: "Piano & Music",
    description: "Piano performance by Ayan Mitra.",
    youtubeId: "Qi84TGw5I5I",
  },
  {
    id: "music-6",
    title: "Your Memory (Original & Instrumental)",
    category: "Piano & Music",
    description: "Instrumental piano composition performed by Ayan Mitra.",
    youtubeId: "KPZ13gpLIUQ",
  },
];

export default function InterestsSection() {
  const [activeCategory, setActiveCategory] = useState<"Talks & Seminars" | "Piano & Music">("Talks & Seminars");
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItems = activeCategory === "Talks & Seminars" ? talkItems : musicItems;
  const currentItem = currentItems[activeIndex % currentItems.length];

  const handleCategoryChange = (cat: "Talks & Seminars" | "Piano & Music") => {
    setActiveCategory(cat);
    setActiveIndex(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev + currentItems.length - 1) % currentItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % currentItems.length);
  };

  return (
    <section className="academicSection interestsSection" id="interests" aria-labelledby="interestsHeading">
      <div className="academicSectionTitle">
        <h2 id="interestsHeading">Talks & Media</h2>
      </div>

      <div className="interestsFilterBar">
        <button
          type="button"
          className={activeCategory === "Talks & Seminars" ? "active" : ""}
          onClick={() => handleCategoryChange("Talks & Seminars")}
        >
          🎓 Talks & Seminars ({talkItems.length})
        </button>
        <button
          type="button"
          className={activeCategory === "Piano & Music" ? "active" : ""}
          onClick={() => handleCategoryChange("Piano & Music")}
        >
          🎹 Piano Performances ({musicItems.length})
        </button>
      </div>

      <div className="videoCarouselContainer">
        <div className="videoCarouselCard">
          <div className="videoEmbedContainer">
            <iframe
              key={currentItem.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${currentItem.youtubeId}`}
              title={currentItem.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="videoCarouselInfo">
            <div className="videoHeaderMeta">
              <span className="interestCategory">{currentItem.category}</span>
              <span className="videoCounter">{activeIndex + 1} of {currentItems.length}</span>
            </div>
            <h3>{currentItem.title}</h3>
            <p>{currentItem.description}</p>
            <a
              href={`https://www.youtube.com/watch?v=${currentItem.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="openInYoutubeBtn"
            >
              Watch on YouTube ↗
            </a>
          </div>
        </div>

        <div className="videoCarouselControls">
          <div className="videoDots">
            {currentItems.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
          <div className="videoArrows">
            <button type="button" onClick={handlePrev} aria-label="Previous video">
              ← Previous
            </button>
            <button type="button" onClick={handleNext} aria-label="Next video">
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
