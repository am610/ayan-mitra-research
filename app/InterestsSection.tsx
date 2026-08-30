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
  const [activeFilter, setActiveFilter] = useState<"All" | "Talks & Seminars" | "Piano & Music">("All");

  const allItems = [...talkItems, ...musicItems];

  const filteredItems =
    activeFilter === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeFilter);

  return (
    <section className="academicSection interestsSection" id="interests" aria-labelledby="interestsHeading">
      <div className="academicSectionTitle">
        <h2 id="interestsHeading">Talks, Media & Piano Performances</h2>
      </div>

      <div className="interestsFilterBar">
        <button
          type="button"
          className={activeFilter === "All" ? "active" : ""}
          onClick={() => setActiveFilter("All")}
        >
          All Videos ({allItems.length})
        </button>
        <button
          type="button"
          className={activeFilter === "Talks & Seminars" ? "active" : ""}
          onClick={() => setActiveFilter("Talks & Seminars")}
        >
          🎓 Academic Talks ({talkItems.length})
        </button>
        <button
          type="button"
          className={activeFilter === "Piano & Music" ? "active" : ""}
          onClick={() => setActiveFilter("Piano & Music")}
        >
          🎹 Piano Performances ({musicItems.length})
        </button>
      </div>

      <div className="interestsGrid">
        {filteredItems.map((item) => (
          <article className="interestCard" key={item.id}>
            <div className="videoEmbedContainer">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="interestContent">
              <span className="interestCategory">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
