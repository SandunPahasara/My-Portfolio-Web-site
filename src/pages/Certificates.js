import './Certificates.css';
import { FaAward, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Certificate Name 1",
      issuer: "Issuing Organization",
      date: "January 2024",
      description: "Brief description of what this certificate represents",
      credentialId: "CERT-12345",
      link: "https://example.com/certificate1"
    },
    {
      id: 2,
      title: "Certificate Name 2",
      issuer: "Issuing Organization",
      date: "December 2023",
      description: "Brief description of what this certificate represents",
      credentialId: "CERT-67890",
      link: "https://example.com/certificate2"
    },
    {
      id: 3,
      title: "Certificate Name 3",
      issuer: "Issuing Organization",
      date: "November 2023",
      description: "Brief description of what this certificate represents",
      credentialId: "CERT-11223",
      link: "https://example.com/certificate3"
    }
  ];

  return (
    <section className="certificates-section" id="certificates">
      <div className="section-header">
        <h2 className="section-title">
          <FaAward className="title-icon" /> Certificates & Achievements
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Professional certifications and accomplishments
        </p>
      </div>

      <div className="certificates-container">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-icon">
              <FaCertificate />
            </div>
            
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-description">{cert.description}</p>
              
              {cert.credentialId && (
                <p className="credential-id">
                  <strong>Credential ID:</strong> {cert.credentialId}
                </p>
              )}
              
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate <FaExternalLinkAlt className="link-icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
