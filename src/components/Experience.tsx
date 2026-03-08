import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Associate - Cloud DevOps Engineer',
    company: 'Cognizant Technology Solutions Corporation (CTS)',
    location: 'Pune, India',
    period: 'June 2023 - Present',
    description: [
      'Architected and managed scalable cloud solutions using AWS services to support business-critical applications.',
      'Automated infrastructure provisioning and deployment across environments with Terraform and Jenkins, reducing deployment time by 60%.',
      'Integrated SonarQube for static code analysis and enforced quality gates before promotion to Nexus.',
      'Worked on microservices based applications deployment to Kubernetes clusters and enabled consistent application deployments through Jenkins CI/CD pipelines and Helm-based configurations.',
      'Wrote and optimized Docker files for microservices, reducing image size by 40% and improving build time by 25%.',
      'Supported AWS cost optimization efforts by developing Python (Boto3) scripts to improve resource efficiency and reduce cloud costs by 20%.',
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-text-muted">
            Highlights of my career and key projects showcasing my skills & impact.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                {/* Timeline line and dot for mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden">
                  <div className="absolute top-2 -left-1.5 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className="md:col-span-1 md:text-right mb-4 md:mb-0 pt-1">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium md:justify-end mb-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="text-sm text-text-muted">{exp.location}</div>
                </div>

                <div className="md:col-span-4 relative">
                  {/* Timeline line and dot for desktop */}
                  <div className="hidden md:block absolute -left-[2.35rem] top-0 bottom-0 w-px bg-white/10">
                    <motion.div 
                      whileHover={{ scale: 1.5 }}
                      className="absolute top-2 -left-1.5 w-3 h-3 rounded-full bg-primary border-4 border-background cursor-pointer" 
                    />
                  </div>

                  <div className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center border border-white/5 text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                        <div className="text-text-muted">{exp.company}</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-muted text-sm leading-relaxed">
                          <span className="text-primary mt-1.5 text-xs">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
