import { motion } from 'motion/react';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    logo: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png'
  },
  {
    name: 'Microsoft Certified Azure Administrator – Associate (AZ-104)',
    logo: '/public/icons/azure-administrator-associate.png'
  },
  {
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    logo: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png'
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    logo: '/public/icons/azure fundamental.png'
  },
  {
    name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    logo: '/public/icons/power bi.png'
  }
];

const awards = [
  'Academic Merit Award: Recognized for securing a spot in the top 15 of the Computer Engineering Department.',
  'CTS Appreciation Award: Awarded for exemplary contribution to project delivery (2024, 2025).',
  'CTS Applause Award: Honored for exceptional dedication, going above and beyond to meet critical project deadlines.'
];

export default function EducationAndCerts() {
  return (
    <section id="education" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education & Awards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> Education & Awards
            </h2>
            
            <div className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 mb-8 group cursor-pointer">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:translate-x-2 transition-transform">Bachelor of Engineering - Computer Science</h3>
              <p className="text-text-muted mb-2">Sant Gadge Baba Amravati University (SGBAU)</p>
              <div className="flex justify-between text-sm text-text-muted mt-4 pt-4 border-t border-white/10">
                <span>Graduated: May 2022</span>
              </div>
            </div>

            <div className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 group-hover:text-primary transition-colors">
                <Trophy className="text-yellow-500 w-5 h-5 group-hover:scale-125 transition-transform" /> Honors & Awards
              </h3>
              <ul className="space-y-4">
                {awards.map((award, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-text-muted text-sm leading-relaxed"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                    {award}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" /> Certifications
            </h2>
            
            <div className="grid gap-4">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-surface border border-white/5 rounded-xl p-4 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center gap-6 cursor-pointer group"
                >
                  <div className="w-20 h-20 shrink-0 flex items-center justify-center drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img src={cert.logo} alt="Cert Badge" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <p className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">{cert.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
