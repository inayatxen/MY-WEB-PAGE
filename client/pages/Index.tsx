import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Zap, Hammer, Rocket, Github, ExternalLink } from "lucide-react";

export default function Index() {
  const featuredProjects = [
    {
      id: 1,
      title: "Smart Power Grid Monitor",
      description: "Real-time electrical grid monitoring system for PESCO",
      tags: ["React", "Node.js", "IoT"],
      image: "https://images.unsplash.com/photo-1581092162392-8c6c97f1f4c6?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Mobile App Builder",
      description: "Cross-platform mobile application development suite",
      tags: ["React Native", "Firebase"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Energy Management Dashboard",
      description: "Interactive dashboard for energy consumption tracking",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl text-foreground mb-6 leading-tight flex flex-col justify-start items-start font-normal">
                Electrical Engineer & <span className="text-primary mt-5 inline-block">Software Developer</span>
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
            Combining electrical engineering knowledge with modern software development practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Electrical Engineering</h3>
              <p className="text-muted-foreground">Power systems, grid management, electrical safety, and infrastructure design</p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Code2Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-muted-foreground">React, Node.js, TypeScript, databases, and cloud deployment</p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
              <p className="text-muted-foreground">Cross-platform apps, responsive design, and user experience optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Showcasing my latest work and innovative solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
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
