import Layout from "@/components/Layout";
import { Trophy, Award, BookOpen, Zap } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">About Me</h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between electrical engineering and software development
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Background */}
          <div className="mb-16 pb-16 border-b border-border">
            <h2 className="text-4xl font-bold mb-8">Professional Background</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="rounded-xl border-4 border-primary/20 w-full"
                />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  I am <strong>Inayat Ullah</strong>, a dedicated professional working as Superintendent Engineer at <strong>Peshawar Electric Supply Company (PESCO)</strong>.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  With extensive experience in electrical engineering and power system management, I've developed a unique perspective on technology integration in the energy sector.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion for technology extends beyond electrical systems. I'm a full-stack developer proficient in modern web and mobile technologies, consistently building innovative solutions that bridge traditional engineering with digital innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-16 pb-16 border-b border-border">
            <h2 className="text-4xl font-bold mb-8">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Electrical Engineering</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Power systems design & analysis</li>
                      <li>• Grid management & optimization</li>
                      <li>• Electrical safety standards</li>
                      <li>• Infrastructure planning</li>
                      <li>• Energy efficiency solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <Trophy className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Software Development</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Full-stack web development</li>
                      <li>• Mobile app development</li>
                      <li>• IoT solutions</li>
                      <li>• System architecture</li>
                      <li>• Database design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technologies</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• React, React Native, Vue.js</li>
                      <li>• Node.js, Express</li>
                      <li>• TypeScript, JavaScript</li>
                      <li>• PostgreSQL, MongoDB</li>
                      <li>• AWS, Firebase, Docker</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hobbies & Interests</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Hunting & outdoor activities</li>
                      <li>• Building & making projects</li>
                      <li>• Web application development</li>
                      <li>• Mobile app innovation</li>
                      <li>• Technical mentoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16 pb-16 border-b border-border">
            <h2 className="text-4xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-transparent mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">Superintendent Engineer</h3>
                  <p className="text-primary font-semibold">Peshawar Electric Supply Company (PESCO)</p>
                  <p className="text-muted-foreground text-sm mt-1">Current Position</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Leading electrical infrastructure projects, managing grid optimization, and implementing digital transformation initiatives for improved operational efficiency.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  <div className="w-1 h-24 bg-gradient-to-b from-secondary to-transparent mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <p className="text-secondary font-semibold">Independent / Freelance</p>
                  <p className="text-muted-foreground text-sm mt-1">Ongoing</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Developing innovative web and mobile applications for clients across various industries, with focus on creating scalable and user-friendly solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Software Engineering Education</h3>
                  <p className="text-muted-foreground text-sm mt-1">Continuous Learning</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Actively pursuing advanced certifications and learning the latest technologies in web development, cloud architecture, and emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Matrix */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Skill Proficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                <div className="space-y-3">
                  {[
                    { name: "React & React Native", level: 95 },
                    { name: "TypeScript", level: 90 },
                    { name: "Tailwind CSS", level: 95 },
                    { name: "Vue.js", level: 80 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Backend & Tools</h3>
                <div className="space-y-3">
                  {[
                    { name: "Node.js & Express", level: 90 },
                    { name: "PostgreSQL & MongoDB", level: 85 },
                    { name: "AWS & Cloud Services", level: 80 },
                    { name: "Electrical Systems", level: 95 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
