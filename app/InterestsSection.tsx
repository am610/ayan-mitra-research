"use client";

import { useState } from "react";

export type PersonalInterest = {
  id: string;
  title: string;
  category: string;
  description: string;
  mediaType: "youtube" | "image";
  youtubeUrl?: string;
  youtubeId?: string;
  imageUrl?: string;
};

const defaultInterests: PersonalInterest[] = [
  {
    id: "1",
    title: "Supernova Cosmology & Astronomy Talks",
    category: "Presentations & Videos",
    description: "Invited talks, seminars, and astrophysics presentations on supernova cosmology and machine learning.",
    mediaType: "youtube",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Travel & Personal Photography",
    category: "Hobbies & Exploration",
    description: "Capturing landscapes and moments during research trips, workshops, and conferences.",
    mediaType: "image",
    imageUrl: "/photos/photo1.jpg",
  },
];

export default function InterestsSection() {
  const [interests] = useState<PersonalInterest[]>(defaultInterests);

  return (
    <section className="academicSection interestsSection" id="interests" aria-labelledby="interestsHeading">
      <div className="academicSectionTitle">
        <h2 id="interestsHeading">Personal Interests & Media</h2>
      </div>

      <div className="interestsGrid">
        {interests.map((item) => (
          <article className="interestCard" key={item.id}>
            {item.mediaType === "youtube" && item.youtubeId ? (
              <div className="videoEmbedContainer">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : item.imageUrl ? (
              <div className="interestImageContainer">
                <img src={item.imageUrl} alt={item.title} className="interestImage" />
              </div>
            ) : null}

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
