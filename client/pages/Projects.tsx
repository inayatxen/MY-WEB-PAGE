import Layout from "@/components/Layout";
import { Github, ExternalLink, Download } from "lucide-react";

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "PESCO Theft Guard",
      description: "Real-time Electrical Theft Reporting Application for Android Mobile Devices. The application helps to report Electricity theft with proofs of Picture and Video",
      tags: ["Kotlin", "Android Studio", "Supabase", "PostgreSQL"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2Fc2c483697d5f42cba275568cb0651e70?format=webp&width=800&height=1200",
      year: 2023,
      downloadUrl: "https://cdn.builder.io/o/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2Fa3a58a83dfa144e09a89012aa95e3356?alt=media&token=e1738b95-f077-4443-80bb-154f86a6ff0f&apiKey=cdf8698cb7bb47508b0ba42324c3a1c8",
      downloadName: "PESCO THEFT DETECTOR.apk",
    },
    {
      id: 3,
      title: "Theft Reports Management Dashboard",
      description: "Interactive analytics dashboard for tracking energy theft reports reported through PESCO Theft Guard Application.",
      tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      year: 2023,
      demoUrl: "https://pesco-theft.lovable.app",
    },
    {
      id: 4,
      title: "Field Theft Reporting Mobile App",
      description: "Mobile application Android based for reporting theft.",
      tags: ["React Native", "Expo", "Firebase", "Google Maps API"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2F75f1fea3f6fd4303a15519b62733db4c?format=webp&width=800&height=1200",
      year: 2022,
      downloadUrl: "https://cdn.builder.io/o/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2F3e9a2117f1074d058ed51e190f38164c?alt=media&token=8ac47dfb-9b1a-4610-8886-b460abcad045&apiKey=cdf8698cb7bb47508b0ba42324c3a1c8",
      downloadName: "PESCO THEFT GUARD.apk",
    },
    {
      id: 5,
      title: "Theft Navigator",
      description: "Specialized mobile application for field technicians at PESCO. Enables job tracking, customer communication, spare parts management, and offline functionality.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2F5d3945f153614f4bb471d568053af54d?format=webp&width=800&height=1200",
      year: 2024,
      demoUrl: "https://theft-navigator.vercel.app",
      githubUrl: "",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">My Projects</h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            A selection of web and mobile applications I've developed, combining electrical engineering insights with modern software development practices.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {allProjects.map((project) => (
              <div key={project.id} className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-border hover:border-primary/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex gap-6 pt-6 border-t border-border">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group/btn">
                        <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        View Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-semibold group/btn">
                        <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    )}
                    {project.downloadUrl && (
                      <a href={project.downloadUrl} download={project.downloadName} className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold group/btn">
                        <Download className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        Download
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 p-8 bg-card rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Other Contributions</h3>
            <p className="text-muted-foreground mb-6">
              Beyond the projects listed above, I've worked on numerous smaller applications, utilities, and open-source contributions. My expertise spans:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Frontend Technologies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React & React Native</li>
                  <li>• TypeScript & JavaScript</li>
                  <li>• Tailwind CSS & Material UI</li>
                  <li>• State Management (Redux, Zustand)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Backend Technologies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node.js & Express</li>
                  <li>• PostgreSQL & MongoDB</li>
                  <li>• REST APIs & GraphQL</li>
                  <li>• Cloud Services (AWS, Firebase)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
