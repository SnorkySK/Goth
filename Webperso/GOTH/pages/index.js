// pages/index.js
export default function Home() {
    return (
      <>
        {/* Section Hero */}
        <section className="hero-section" data-aos="fade-up">
          <div className="hero-content">
            <h1>Bienvenue chez GOTH</h1>
            <p>Global Online Tech Hub - Connecter la technologie et l'innovation.</p>
          </div>
          <div className="hero-image">
            {/* Espace réservé pour une image de présentation */}
          </div>
        </section>
  
        {/* Section Services */}
        <section className="services-section" data-aos="fade-up">
          <h2>Nos Services</h2>
          <div className="services-container">
            <div className="service">
              <h3>Développement Web</h3>
              <p>Création de sites et d'applications performants et adaptatifs.</p>
            </div>
            <div className="service">
              <h3>Consulting IT</h3>
              <p>Stratégies technologiques sur mesure pour optimiser votre entreprise.</p>
            </div>
            <div className="service">
              <h3>Maintenance & Sécurité</h3>
              <p>Assurer la pérennité et la sécurité de vos infrastructures numériques.</p>
            </div>
          </div>
        </section>
  
        {/* Section Réalisations */}
        <section className="portfolio-section" data-aos="fade-up">
          <h2>Nos Réalisations</h2>
          <div className="portfolio-container">
            <div className="portfolio-item">
              <div className="image-placeholder"></div>
              <h3>Projet 1</h3>
            </div>
            <div className="portfolio-item">
              <div className="image-placeholder"></div>
              <h3>Projet 2</h3>
            </div>
            <div className="portfolio-item">
              <div className="image-placeholder"></div>
              <h3>Projet 3</h3>
            </div>
          </div>
        </section>
  
        {/* Section Call-to-Action */}
        <section className="cta-section" data-aos="fade-up">
          <h2>Prêt à booster votre présence en ligne ?</h2>
          <button>Contactez-nous</button>
        </section>
      </>
    )
  }
  