
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { team } from "@/data/team";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Company Info Section */}
      <section className="py-10">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="About StepSmart"
            subtitle="Our mission is to connect people with knowledge and mentorship to achieve their professional goals"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Story</h3>
                <p className="text-muted-foreground">
                  StepSmart was founded in 2020 with a simple yet powerful vision: to make
                  high-quality mentorship accessible to everyone, regardless of their
                  background or location.
                </p>
                <p className="text-muted-foreground">
                  What began as a small network of tech professionals offering guidance to
                  newcomers has evolved into a comprehensive platform connecting mentors
                  and learners across industries and borders.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      1
                    </div>
                    <div>
                      <span className="font-semibold">Accessibility</span> - We believe
                      quality education and mentorship should be available to all.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      2
                    </div>
                    <div>
                      <span className="font-semibold">Community</span> - We foster
                      meaningful connections that extend beyond individual mentorships.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      3
                    </div>
                    <div>
                      <span className="font-semibold">Excellence</span> - We maintain high
                      standards for our courses, mentors, and platform.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Active Mentors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-primary-foreground/80">Learners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-primary-foreground/80">Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-primary-foreground/80">Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate people behind StepSmart"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                social={member.social}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Journey"
            subtitle="The milestones that define our growth"
            centered
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-border transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative">
                <div className="md:w-1/2 md:pr-8 md:text-right ml-6 md:ml-0">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2020</div>
                  <p className="text-muted-foreground">
                    StepSmart was founded with a small network of tech mentors helping
                    newcomers navigate the industry.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative">
                <div className="md:w-1/2 md:pl-8 md:ml-auto ml-6">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2021</div>
                  <p className="text-muted-foreground">
                    Launched our first set of curated courses and expanded mentorship to
                    multiple industries including design and marketing.
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative">
                <div className="md:w-1/2 md:pr-8 md:text-right ml-6 md:ml-0">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2022</div>
                  <p className="text-muted-foreground">
                    Reached 5,000 active users and introduced our matching algorithm to
                    better connect mentors with mentees.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="md:w-1/2 md:pl-8 md:ml-auto ml-6">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2023</div>
                  <p className="text-muted-foreground">
                    Expanded globally, now serving learners and mentors in over 50
                    countries with localized content and support.
                  </p>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative">
                <div className="md:w-1/2 md:pr-8 md:text-right ml-6 md:ml-0">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2024</div>
                  <p className="text-muted-foreground">
                    Launched enterprise solutions for companies looking to implement
                    internal mentorship programs and upskilling initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
