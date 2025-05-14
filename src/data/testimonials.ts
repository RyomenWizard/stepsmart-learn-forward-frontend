
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    role: "UX Designer",
    content:
      "StepSmart's mentorship program completely transformed my career path. The personalized guidance I received helped me transition from a junior designer to a UX lead in just 18 months.",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "2",
    name: "Jason Kim",
    role: "Software Developer",
    content:
      "The courses on StepSmart are incredibly practical and up-to-date. I was able to apply what I learned immediately in my work, which led to recognition from my managers and a promotion.",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "3",
    name: "Olivia Taylor",
    role: "Product Manager",
    content:
      "Finding a mentor who understood my specific challenges was game-changing. StepSmart matched me with someone who had navigated the exact career path I was pursuing.",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "4",
    name: "Marcus Johnson",
    role: "Marketing Strategist",
    content:
      "The community aspect of StepSmart is what sets it apart. Beyond the courses and mentorship, I've built a network of professionals who continue to support and inspire me.",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
];
