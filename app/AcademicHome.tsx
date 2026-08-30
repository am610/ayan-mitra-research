import PhotoCarousel from "./PhotoCarousel";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaOrcid } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";

type ResearchPaper = {
  number: string;
  venue: string;
  title: string;
  text: string;
  href: string;
};

type Project = {
  title: string;
  category: string;
  highlight?: string;
  text: string;
  href: string;
};

type Publication = {
  year: string;
  title: string;
  venue: string;
  bibcode: string;
  featured: boolean;
};

type AcademicHomeProps = {
  researchAreas: ResearchPaper[];
  flagshipProjects: Project[];
  additionalProjects: Project[];
  publications: Publication[];
  featuredPublications: Publication[];
};

const recentNews = [
  {
    date: "Jul 2026",
    title: "Fully photometric LSST supernova cosmology analysis published in The Astrophysical Journal",
    href: "https://doi.org/10.3847/1538-4357/ae7a41",
  },
  {
    date: "2026",
    title: "FlowSN published in Monthly Notices of the Royal Astronomical Society",
    href: "https://ui.adsabs.harvard.edu/abs/2026MNRAS.550g1046B/abstract",
  },
  {
    date: "2026",
    title: "Joint cosmological probes study with Srinivasan Raghunathan published in The Astrophysical Journal",
    href: "https://ui.adsabs.harvard.edu/abs/2026ApJ..1003..246R/abstract",
  },
  {
    date: "2026",
    title: "Recognized as an LSST DESC Builder",
    href: "https://lsstdesc.org/pages/builders.html",
  },
];

export default function AcademicHome({
  researchAreas,
  flagshipProjects,
  additionalProjects,
  publications,
  featuredPublications,
}: AcademicHomeProps) {
  return (
    <div className="academicPage" id="home">
      <nav className="academicNav" aria-label="Primary navigation">
        <div className="academicNavInner">
          <a className="academicBrand" href="#home">Ayan Mitra</a>
          <div className="academicNavLinks">
            <a href="#home">Home</a>
            <a href="#research">Research</a>
            <a href="#updates">News</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#photos">Photos</a>
            <a href="/Ayan_Mitra_CV.pdf">CV</a>
          </div>
        </div>
      </nav>

      <div className="academicFrame">
        <main className="academicMain">
          <header className="academicIntro">
            <h1>Ayan Mitra</h1>
            <p>
              <strong>Ayan Mitra</strong> is a Pipeline Scientist for the LSST Dark
              Energy Science Collaboration and a CAPS Fellow at the National Center
              for Supercomputing Applications, University of Illinois Urbana Champaign.
              He develops reliable scientific workflows for supernova cosmology,
              time domain analysis, machine learning, and statistical inference.
            </p>
            <p>
              His work connects realistic simulations, data validation, photometric
              classification, uncertainty propagation, bias correction, and cosmological
              parameter estimation across large computing systems.
            </p>
            <div className="academicContactLinks">
              <a className="contactEmail" href="mailto:ayan@illinois.edu" aria-label="Email Ayan Mitra">
                <FaEnvelope aria-hidden="true" />
                <span>Email</span>
              </a>
              <a className="contactGithub" href="https://github.com/am610/" aria-label="Ayan Mitra on GitHub">
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a className="contactLinkedin" href="https://www.linkedin.com/in/ayan-mitra-supernova/" aria-label="Ayan Mitra on LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a className="contactOrcid" href="https://orcid.org/0000-0002-9436-8871" aria-label="Ayan Mitra on ORCID">
                <FaOrcid aria-hidden="true" />
                <span>ORCID</span>
              </a>
              <a className="contactAds" href="https://ui.adsabs.harvard.edu/user/libraries/LiNzugQqT8O3JaIcS3XMeQ" aria-label="Ayan Mitra publications on ADS">
                <HiOutlineBookOpen aria-hidden="true" />
                <span>ADS</span>
              </a>
            </div>
          </header>

          <section className="academicSection" id="updates">
            <div className="academicSectionTitle">
              <h2>News</h2>
            </div>
            <div className="academicNewsList">
              {recentNews.map((item) => (
                <article key={item.title}>
                  <time>{item.date}</time>
                  <a href={item.href}>{item.title}</a>
                </article>
              ))}
            </div>
          </section>

          <section className="academicSection" id="research">
            <div className="academicSectionTitle">
              <h2>Current Research</h2>
            </div>
            <div className="academicResearchList">
              {researchAreas.map((paper) => (
                <article key={paper.number}>
                  <span>{paper.number}</span>
                  <div>
                    <p className="academicMeta">{paper.venue}</p>
                    <h3><a href={paper.href}>{paper.title}</a></h3>
                    <p>{paper.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="academicSection" id="projects">
            <div className="academicSectionTitle">
              <h2>Software and Projects</h2>
              <a href="https://github.com/am610?tab=repositories">All public repositories</a>
            </div>
            <div className="academicProjectList">
              {flagshipProjects.map((project) => (
                <article key={project.title}>
                  <p className="academicMeta">{project.category}</p>
                  <h3><a href={project.href}>{project.title}</a></h3>
                  <p>{project.text}</p>
                  {project.highlight ? <span>{project.highlight}</span> : null}
                </article>
              ))}
            </div>
            <details className="academicDetails">
              <summary>More applied machine learning and quantitative projects</summary>
              <div className="academicMoreProjects">
                {additionalProjects.map((project) => (
                  <a href={project.href} key={project.title}>
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </a>
                ))}
              </div>
            </details>
          </section>

          <section className="academicSection" id="publications">
            <div className="academicSectionTitle">
              <h2>Selected Publications</h2>
              <a href="https://ui.adsabs.harvard.edu/user/libraries/LiNzugQqT8O3JaIcS3XMeQ">ADS library</a>
            </div>
            <div className="academicPublicationList">
              {featuredPublications.map((publication, index) => (
                <article key={publication.bibcode}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>
                      <a href={`https://ui.adsabs.harvard.edu/abs/${publication.bibcode}/abstract`}>
                        {publication.title}
                      </a>
                    </h3>
                    <p>{publication.venue}, {publication.year}</p>
                  </div>
                </article>
              ))}
            </div>
            <details className="academicDetails">
              <summary>Complete supplied ADS library with {publications.length} records</summary>
              <div className="academicAllPublications">
                {publications.map((publication) => (
                  <a
                    href={`https://ui.adsabs.harvard.edu/abs/${publication.bibcode}/abstract`}
                    key={publication.bibcode}
                  >
                    <time>{publication.year}</time>
                    <span>{publication.title}</span>
                  </a>
                ))}
              </div>
            </details>
          </section>

          <PhotoCarousel />
        </main>

        <aside className="academicSidebar" aria-label="Profile information">
          <img className="academicPortrait" src="/ayan-mitra.jpg" alt="Ayan Mitra" />

          <section>
            <h2>Position</h2>
            <p><strong>Pipeline Scientist</strong><br />LSST Dark Energy Science Collaboration</p>
            <p>CAPS Fellow<br />NCSA, University of Illinois Urbana Champaign</p>
          </section>

          <section>
            <h2>Research Areas</h2>
            <p>Supernova cosmology</p>
            <p>Scientific machine learning</p>
            <p>Time domain analysis</p>
            <p>Bayesian inference</p>
            <p>Large scale scientific workflows</p>
          </section>

          <section>
            <h2>Open Software</h2>
            <p>
              Contributor to <a href="https://github.com/RickKessler/SNANA">SNANA</a>,
              a software package for supernova and time domain simulation, analysis,
              and cosmology workflows.
            </p>
            <p><strong>74</strong> merged contributions to this collaboration software.</p>
          </section>

          <section>
            <h2>Recognition</h2>
            <p><a href="https://lsstdesc.org/pages/builders.html">LSST DESC Builder</a>, 2026</p>
            <p>CAPS Fellow</p>
            <p>Rubin Postdoctoral Fellow</p>
            <p><strong>Lagrange Fellow</strong><br />Institut d’Astrophysique de Paris, during PhD</p>
          </section>

          <section>
            <h2>Experience</h2>
            <p><strong>2023 to present</strong><br />Pipeline Scientist, Rubin Observatory and LSST DESC</p>
            <p><strong>2021 to 2023</strong><br />LSST Postdoctoral Fellow, IUCAA</p>
            <p><strong>2019 to 2020</strong><br />Postdoctoral Researcher, Energy Cosmos Laboratory</p>
          </section>

          <section>
            <h2>Education</h2>
            <div className="academicEducationEntry">
              <a className="academicInstitutionLogo academicLogoSorbonne" href="https://www.sorbonne-universite.fr/en" aria-label="Sorbonne Université official website">
                <img src="https://www.sorbonne-universite.fr/sites/default/files/media/2019-10/logo_4.svg" alt="Sorbonne Université" />
              </a>
              <p><strong>PhD, 2016</strong><br />Supernova Cosmology, Sorbonne Université</p>
            </div>
            <div className="academicEducationEntry">
              <a className="academicInstitutionLogo academicLogoSussex" href="https://www.sussex.ac.uk/" aria-label="University of Sussex official website">
                <img src="https://www.sussex.ac.uk/images/logo.png" alt="University of Sussex" />
              </a>
              <p><strong>MSc, 2013</strong><br />Astronomy and Astrophysics, University of Sussex</p>
            </div>
            <div className="academicEducationEntry">
              <a className="academicInstitutionLogo academicLogoCalcutta" href="https://www.caluniv.ac.in/" aria-label="University of Calcutta official website">
                <img src="https://www.caluniv.ac.in/assets/images/CU_LOGO-large-PNG.png" alt="University of Calcutta" />
              </a>
              <p>
                <strong>2008 to 2011</strong><br />
                <a href="https://www.sxccal.edu/">St. Xavier’s College</a><br />
                <a href="https://www.caluniv.ac.in/">University of Calcutta</a>
              </p>
            </div>
          </section>

          <section>
            <h2>Research Record</h2>
            <p><strong>33</strong> records in the supplied ADS library</p>
            <p><strong>79</strong> public GitHub repositories</p>
          </section>
        </aside>
      </div>

      <footer className="academicFooter">
        <p>© 2026 Ayan Mitra</p>
        <a href="mailto:ayan@illinois.edu">ayan@illinois.edu</a>
      </footer>
    </div>
  );
}
