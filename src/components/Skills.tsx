import { motion } from 'motion/react';
import { Cloud, Server, Terminal, Database, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Technologies',
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: 'AWS', logo: '/icons/aws.svg' },
      { name: 'Azure', logo: '/icons/azure.svg' },
    ],
  },
  {
    title: 'Containerization',
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: 'Docker', logo: '/icons/docker.svg' },
      { name: 'Kubernetes', logo: '/icons/kubernetes.svg' },
      { name: 'Helm', logo: '/icons/helm.svg' },
    ],
  },
  {
    title: 'CI/CD & VCS',
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    skills: [
      { name: 'GitHub Actions', logo: '/icons/github action.png' },
      { name: 'Jenkins', logo: '/icons/jenkins.svg' },
      { name: 'Azure DevOps', logo: '/icons/azuredevops.svg' },
      { name: 'Git', logo: '/icons/git.svg' },
      { name: 'GitHub', logo: '/icons/github.svg' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: <Code2 className="w-6 h-6 text-yellow-400" />,
    skills: [
      { name: 'Terraform', logo: '/icons/terraform.svg' },
      { name: 'Ansible', logo: '/icons/ansible.svg' },
    ],
  },
  {
    title: 'Monitoring & Analytics',
    icon: <Database className="w-6 h-6 text-orange-400" />,
    skills: [
      { name: 'Prometheus', logo: '/icons/prometheus.svg' },
      { name: 'Grafana', logo: '/icons/grafana.svg' },
      { name: 'SonarQube', logo: '/icons/sonarqube.svg' },
      { name: 'Power BI', logo: '/icons/PowerBIlogo.png' },
    ],
  },
  {
    title: 'Programming',
    icon: <Terminal className="w-6 h-6 text-red-400" />,
    skills: [
      { name: 'Python', logo: '/icons/python.svg' },
      { name: 'Linux', logo: '/icons/linux.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A curated selection of my expertise in DevOps and Cloud Computing, and plenty more technologies I'm exploring & mastering every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6 group-hover:text-primary transition-colors">{category.title}</h3>
              <ul className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.li 
                    key={skill.name} 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="flex flex-col items-center gap-2 text-text-muted text-sm p-3 rounded-lg bg-background/50 border border-white/5 transition-colors cursor-pointer"
                  >
                    <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300" referrerPolicy="no-referrer" />
                    <span className="text-center font-medium">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
