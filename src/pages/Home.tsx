import { Button } from "@/components/ui/button";
import { HeroAnimation } from "@/components/HeroAnimation";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { ArrowRight, BookOpen, Users, Award, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  // Function to simulate the AOS (Animate On Scroll) behavior
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          (el as HTMLElement).classList.add("animate-fade-in");
          (el as HTMLElement).style.opacity = "1";
          
          // Apply transition delay if data-delay attribute exists
          const delay = (el as HTMLElement).dataset.delay;
          if (delay) {
            (el as HTMLElement).style.transitionDelay = delay;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once to check initial elements in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Take Your Career to the{" "}
                  <span className="text-primary">Next Level</span>
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect with expert mentors and access world-class courses
                  designed to help you achieve your professional goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link to="/blog">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Become a Mentor</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-accent/30">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="About StepSmart"
            subtitle="We're on a mission to democratize access to high-quality mentorship and education"
            centered
          />

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4 animate-on-scroll opacity-0" data-delay="100ms">
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                At StepSmart, we believe that everyone deserves access to quality
                mentorship and education regardless of their background. We're
                building a community where knowledge sharing and personal growth
                go hand in hand.
              </p>
              <p className="text-muted-foreground">
                Our platform connects ambitious learners with experienced
                mentors, creating relationships that foster professional
                development and accelerate career growth.
              </p>
            </div>
            <div className="space-y-4 animate-on-scroll opacity-0" data-delay="300ms">
              <h3 className="text-2xl font-bold">Our Approach</h3>
              <p className="text-muted-foreground">
                We've developed a unique matching system that pairs mentees with
                the perfect mentor based on their goals, industry, and learning
                style.
              </p>
              <p className="text-muted-foreground">
                Our courses are designed by industry experts and undergo a
                rigorous review process to ensure they deliver practical,
                up-to-date knowledge that you can apply immediately in your
                career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Why Choose StepSmart"
            subtitle="Our platform offers everything you need to accelerate your professional growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Expert Mentors"
              description="Connect with industry professionals who have walked the path you're on."
              icon={<Users className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="100ms"
            />
            <FeatureCard
              title="Quality Courses"
              description="Access comprehensive learning materials designed for practical application."
              icon={<BookOpen className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="300ms"
            />
            <FeatureCard
              title="Skill Certification"
              description="Earn recognized certificates to showcase your newly acquired skills."
              icon={<Award className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="500ms"
            />
            <FeatureCard
              title="Progress Tracking"
              description="Monitor your development with detailed analytics and feedback."
              icon={<BarChart className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="700ms"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Success Stories"
            subtitle="Hear from professionals who have transformed their careers with StepSmart"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatarUrl={testimonial.avatarUrl}
                className="animate-on-scroll opacity-0 transition-all"
                data-delay={`${index * 200}ms`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/80">
            Join thousands of professionals who are accelerating their careers
            with StepSmart's mentorship and courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/blog">
                Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/about">Learn About Mentorship</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
