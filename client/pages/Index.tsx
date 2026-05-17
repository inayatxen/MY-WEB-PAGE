import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Zap, Hammer, Rocket, Github, ExternalLink, Download } from "lucide-react";

export default function Index() {
  const featuredProjects = [
    {
      id: 1,
      title: "PESCO Theft Guard",
      description: "Real-time Electrical Theft Reporting Application for Android Mobile Devices. The application helps to report Electricity theft with proofs of Picture and Video",
      tags: ["Kotlin", "Android Studio", "Supabase", "PostgreSQL"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2Fc2c483697d5f42cba275568cb0651e70?format=webp&width=800&height=1200",
      year: 2025,
      downloadUrl: "https://cdn.builder.io/o/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2Fa3a58a83dfa144e09a89012aa95e3356?alt=media&token=e1738b95-f077-4443-80bb-154f86a6ff0f&apiKey=cdf8698cb7bb47508b0ba42324c3a1c8",
      downloadName: "PESCO THEFT DETECTOR.apk",
    },
    {
      id: 3,
      title: "Theft Reports Management Dashboard",
      description: "Interactive analytics dashboard for tracking energy theft reports reported through PESCO Theft Guard Application.",
      tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      year: 2025,
      demoUrl: "https://electricity-theft-navigator.vercel.app",
    },
    {
      id: 5,
      title: "Theft Navigator",
      description: "Specialized mobile application for field technicians at PESCO. Enables job tracking, customer communication, spare parts management, and offline functionality.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2F5d3945f153614f4bb471d568053af54d?format=webp&width=800&height=1200",
      year: 2026,
      demoUrl: "https://theft-navigator.vercel.app",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl text-foreground mb-6 leading-[55px] text-left flex flex-col justify-start items-start font-normal">
                Engr. Inayatullah Electrical Engineer & <span className="text-primary mt-5 inline-block">Software Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Superintendent Engineer at Peshawar Electric Supply Company with expertise in Electrical Engineering and web/mobile Application development. Building innovative digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary">
                  Explore My Work
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>

              {/* Hobbies/Interests */}
              <div className="mt-12 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Hammer className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Building & Making</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium">Tech Innovation</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Rocket className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Outdoor Adventures</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-fade-in hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-2xl blur-xl"></div>
                <span className="text-2xl font-semibold text-foreground mb-4 block">Engr. Inayat ullah</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2F34f5606b05354e16b8689d378642af21?format=webp&width=800&height=1200"
                  alt="Inayat Ullah"
                  className="relative rounded-2xl w-full object-cover border-4 border-primary/20 m-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Combining Electrical Engineering knowledge with Modern Software Development Practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Electrical Engineering</h3>
              <p className="text-muted-foreground">Power systems, Grid Management, Electrical Safety, and Infrastructure Design</p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Code2Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-muted-foreground">React, Node.js, TypeScript, Databases, and Cloud Deployment</p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
              <p className="text-muted-foreground">Cross-platform Apps, Responsive Design, and User Experience Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Showcasing My Latest Work and Innovative Solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card overflow-hidden relative">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  {project.year && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-4 pt-4 border-t border-border">
                    {project.downloadUrl && (
                      <a href={project.downloadUrl} download={project.downloadName} className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium">
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a project idea, need technical consultation, or want to discuss engineering solutions, I'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
}

function Code2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4"></path>
      <path d="m6 8-4 4 4 4"></path>
      <path d="M9.5 4h5"></path>
    </svg>
  );
}
