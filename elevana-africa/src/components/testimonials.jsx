import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina Okafor",
      location: "Lagos, Nigeria",
      role: "Data Analyst",
      quote:
        "Elevana helped me learn Data Analytics, connect with an amazing mentor, and land my first job. It's truly a game-changer!",
      avatar: "AO",
      rating: 4,
    },
    {
      name: "Kwame Mensah",
      location: "Accra, Ghana",
      role: "Software Developer",
      quote:
        "The networking opportunities on Elevana are unmatched. I connected with industry leaders who guided my career path.",
      avatar: "KM",
      rating: 4,
    },
    {
      name: "Sarah Ndlovu",
      location: "Johannesburg, South Africa",
      role: "Marketing Manager",
      quote:
        "From learning digital marketing to finding my dream job, Elevana was with me every step of the way. Highly recommended!",
      avatar: "SN",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Success{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people, real transformations, real impact
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Avatar */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light dark:from-primary-light dark:to-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md transition-all duration-300">
                  {testimonial.avatar}
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div>
                <h4 className="font-bold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-primary">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
