import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homemaker, Delhi",
    rating: 5,
    text: "Sankalp made getting health insurance so simple! The entire process took just 5 minutes and the support team was incredibly helpful.",
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Mumbai",
    rating: 5,
    text: "I insured my entire business fleet through Sankalp. Transparent pricing, no hidden charges, and the claim process was seamless.",
  },
  {
    name: "Anita Desai",
    role: "IT Professional, Bangalore",
    rating: 4,
    text: "Best experience I've had with an insurance provider. The app is intuitive and I love how I can manage everything from my phone.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding gradient-section">
    <div className="container">
      <div className="text-center">
        <span className="badge-accent">Customer Love</span>
        <h2 className="section-title mt-4">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it — hear from the families we've protected.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {testimonials.map(({ name, role, rating, text }) => (
          <div key={name} className="card-elevated relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/8" />

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "text-accent fill-accent" : "text-border"}`}
                />
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed italic">"{text}"</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
