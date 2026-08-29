import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayan Mitra | Research Scientist",
  description:
    "Research scientist working across cosmology, scientific machine learning, and reproducible computing.",
};

export default function Home() {
  const researchAreas = [
    {
      number: "01",
      title: "Supernova cosmology",
      text: "Using Type Ia supernovae to measure cosmic expansion while accounting for redshift uncertainty, selection effects, and observational bias.",
    },
    {
      number: "02",
      title: "Scientific machine learning",
      text: "Developing and evaluating classifiers and simulation based inference methods with careful attention to robustness and uncertainty.",
    },
    {
      number: "03",
      title: "Research systems at scale",
      text: "Building reproducible workflows that connect simulation, data preparation, classification, bias correction, and statistical inference on national supercomputers.",
    },
  ];

  const projects = [
    {
      title: "SNANA Pipeline Assistant",
      label: "Agentic AI",
      text: "A source grounded assistant that diagnoses configuration, memory, lock, and scheduler problems in scientific computing workflows.",
      href: "https://github.com/am610/SNANA_PIPELINE_ASSISTANT",
    },
    {
      title: "Firecrown Wrapper",
      label: "Cosmology inference",
      text: "An open Python workflow connecting Firecrown and CosmoSIS for tested, structured, and reproducible analysis at NERSC.",
      href: "https://github.com/am610/Firecrown_wrapper_TD",
    },
    {
      title: "Supernova Gravitational Wave Classifier",
      label: "Neural classification",
      text: "A runnable convolutional neural network and interactive demo for classifying simulated gravitational wave signals.",
      href: "https://github.com/am610/GWCCSN_EOS_Ye",
    },
    {
      title: "SCONE Tools",
      label: "Scientific software",
      text: "Data extraction and visualization tools for neural supernova classifier outputs across millions of simulated events.",
      href: "https://github.com/am610/scone_tools",
    },
  ];

  const publications = [
    {
      year: "2026",
      title:
        "FlowSN: neural simulation based inference under realistic selection effects for supernova cosmology",
      venue: "arXiv 2603.11165",
      href: "https://arxiv.org/abs/2603.11165",
    },
    {
      year: "2025",
      title:
        "Fully photometric Type Ia supernova inference combining host galaxy redshift uncertainty and learned classification",
      venue: "arXiv 2512.06319",
      href: "https://arxiv.org/abs/2512.06319",
    },
    {
      year: "2025",
      title:
        "Evaluating machine learning models for supernova gravitational wave signal classification",
      venue: "Machine Learning: Science and Technology 5, 045077",
      href: "https://doi.org/10.1088/2632-2153/ada33a",
    },
    {
      year: "2024",
      title:
        "Probing nuclear physics with supernova gravitational waves and machine learning",
      venue: "Monthly Notices of the Royal Astronomical Society 529, 3582",
      href: "https://doi.org/10.1093/mnras/stae714",
    },
    {
      year: "2024",
      title:
        "Dark energy reconstruction with artificial neural networks on simulated Rubin Observatory supernova data",
      venue: "arXiv 2402.18124",
      href: "https://arxiv.org/abs/2402.18124",
    },
  ];

  return (
    <main>
      <nav className="siteNav" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="Ayan Mitra home">
          AM
        </a>
        <div className="navLinks">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="/Ayan_Mitra_CV.pdf">CV</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow">Research Scientist · Cosmology · Scientific AI</p>
          <h1>Ayan Mitra</h1>
          <p className="heroLead">
            I build reliable computational systems that connect simulation,
            machine learning, uncertainty, and inference for data intensive
            science.
          </p>
          <p className="heroBody">
            I am a CAPS Fellow and Pipeline Scientist at NCSA, UIUC and the Vera
            C. Rubin Observatory LSST Dark Energy Science Collaboration. My work
            focuses on supernova cosmology, reproducible research pipelines, and
            scientific machine learning at scale.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#research">
              Explore my research
            </a>
            <a className="textLink" href="mailto:ayan@illinois.edu">
              ayan@illinois.edu
            </a>
          </div>
        </div>

        <aside className="profileCard" aria-label="Ayan Mitra profile">
          <img src="/ayan-mitra.jpg" alt="Ayan Mitra" />
          <div className="profileCardBody">
            <p className="profileRole">CAPS Fellow and Pipeline Scientist</p>
            <p>NCSA · University of Illinois Urbana Champaign</p>
            <div className="profileLinks">
              <a href="https://github.com/am610/">GitHub</a>
              <a href="https://www.linkedin.com/in/ayan-mitra-supernova/">
                LinkedIn
              </a>
              <a href="https://orcid.org/0000-0002-9436-8871">ORCID</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="firstResearch" id="research">
        <div className="sectionIntro">
          <div>
            <p className="sectionKicker">Research agenda</p>
            <h2>Turning complex scientific workflows into trustworthy results.</h2>
          </div>
          <p>
            My research follows the full path from realistic simulations to
            classification, uncertainty propagation, bias correction, and
            cosmological inference.
          </p>
        </div>
        <div className="researchGrid">
          {researchAreas.map((area) => (
            <article className="researchCard" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="newsBand" aria-labelledby="news-heading">
        <div className="sectionHeadingRow">
          <div>
            <p className="sectionKicker lightKicker">Selected updates</p>
            <h2 id="news-heading">Recent work</h2>
          </div>
          <p className="newsIntro">
            Research across machine learning, uncertainty, and the analysis
            infrastructure needed for Rubin Observatory cosmology.
          </p>
        </div>
        <div className="newsList">
          <article>
            <time>2026</time>
            <div>
              <h3>FlowSN</h3>
              <p>
                Neural simulation based inference for supernova cosmology under
                realistic selection effects.
              </p>
            </div>
          </article>
          <article>
            <time>2025</time>
            <div>
              <h3>Fully photometric inference</h3>
              <p>
                Combining host galaxy redshift uncertainty with learned
                classification for Type Ia supernova analysis.
              </p>
            </div>
          </article>
          <article>
            <time>2024</time>
            <div>
              <h3>Gravitational wave classification</h3>
              <p>
                Machine learning methods for connecting simulated supernova
                signals to properties of dense nuclear matter.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="projectsSection" id="projects">
        <div className="sectionHeadingRow darkText">
          <div>
            <p className="sectionKicker">Selected software</p>
            <h2>Projects built for real research.</h2>
          </div>
          <p>
            Open tools for reproducibility, scientific machine learning, and
            dependable large scale analysis.
          </p>
        </div>
        <div className="projectsGrid">
          {projects.map((project, index) => (
            <a className="projectCard" href={project.href} key={project.title}>
              <div className="projectTopline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.label}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <span className="projectLink">View project ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="publicationsSection" id="publications">
        <div className="publicationHeader">
          <div>
            <p className="sectionKicker">Selected publications</p>
            <h2>Research in cosmology and scientific machine learning.</h2>
          </div>
          <a className="outlineButton" href="/Ayan_Mitra_CV.pdf">
            Full publication list in CV
          </a>
        </div>
        <div className="publicationList">
          {publications.map((publication, index) => (
            <a href={publication.href} className="publicationRow" key={publication.title}>
              <span className="publicationNumber">{index + 1}</span>
              <div>
                <h3>{publication.title}</h3>
                <p>{publication.venue}</p>
              </div>
              <time>{publication.year}</time>
            </a>
          ))}
        </div>
      </section>

      <section className="experienceSection" id="experience">
        <div className="experienceIntro">
          <p className="sectionKicker">Experience</p>
          <h2>Research across institutions, collaborations, and disciplines.</h2>
        </div>
        <div className="timeline">
          <article>
            <time>2023 to present</time>
            <div>
              <h3>CAPS Fellow and Pipeline Scientist</h3>
              <p>NCSA, UIUC and LSST Dark Energy Science Collaboration</p>
            </div>
          </article>
          <article>
            <time>2021 to 2023</time>
            <div>
              <h3>Rubin Postdoctoral Fellow</h3>
              <p>Inter University Centre for Astronomy and Astrophysics, India</p>
            </div>
          </article>
          <article>
            <time>2019 to 2020</time>
            <div>
              <h3>Postdoctoral Fellow</h3>
              <p>Energy Cosmos Laboratory, Nazarbayev University</p>
            </div>
          </article>
        </div>
        <div className="credentialsGrid">
          <article>
            <p className="miniLabel">Education</p>
            <h3>PhD in Supernova Cosmology</h3>
            <p>Sorbonne Université, France</p>
          </article>
          <article>
            <p className="miniLabel">Community</p>
            <h3>LSST DESC Builder and reviewer</h3>
            <p>Mentoring, collaboration review, and service across astronomy.</p>
          </article>
          <article>
            <p className="miniLabel">Recognition</p>
            <h3>CAPS and Rubin Fellowships</h3>
            <p>Research recognition spanning cosmology and computational science.</p>
          </article>
        </div>
      </section>

      <footer>
        <div className="footerLead">
          <p className="sectionKicker lightKicker">Contact</p>
          <h2>Let us talk about scientific AI, cosmology, or research systems.</h2>
          <a href="mailto:ayan@illinois.edu">ayan@illinois.edu</a>
        </div>
        <div className="footerBottom">
          <p>© 2026 Ayan Mitra</p>
          <div>
            <a href="https://github.com/am610/">GitHub</a>
            <a href="https://www.linkedin.com/in/ayan-mitra-supernova/">LinkedIn</a>
            <a href="https://orcid.org/0000-0002-9436-8871">ORCID</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
