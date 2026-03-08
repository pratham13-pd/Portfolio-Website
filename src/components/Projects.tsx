import { motion } from 'motion/react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'Insurance Application Cloud Deployment',
    description: 'Implemented end-to-end CI/CD pipelines and AWS cloud infrastructure for a secure, scalable insurance application using Kubernetes, Helm, Docker, Terraform, and Jenkins.',
    tags: ['AWS', 'EKS', 'Jenkins', 'Terraform', 'Docker', 'Helm', 'SonarQube'],
    github: '#',
    live: '#',
  },
  {
    title: 'Automated AWS Infrastructure Provisioning & CI/CD Pipeline',
    description: 'Designed and implemented an Infrastructure as Code (IaC) pipeline to provision and manage AWS resources by integrating Terraform with Jenkins. Configured modular Terraform configurations to automate the deployment of AWS services.',
    tags: ['EC2', 'S3', 'DynamoDB', 'IAM', 'Jenkins', 'Terraform', 'Linux'],
    github: '#',
    live: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A collection of innovative projects showcasing technical expertise & creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group flex flex-col h-full cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex gap-4">
                  <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href={project.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href={project.live} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-text-muted border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
