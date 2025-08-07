import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ValueCard from "@/components/ValueCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientsPartners from "@/components/ClientsPartners";
import { ArrowRight, Target, Users, Globe } from "lucide-react";

const Index = () => {
  const coreValues = [
    {
      title: "Posterity",
      description: "We always keep the 'long view' in mind. While profit and gain are very important, we are in for the long haul and won't sacrifice long-term benefit for short-term gain!",
      icon: "🌱"
    },
    {
      title: "Relationships",
      description: "We regard all our relationships as precious, something to be jealously guarded and nurtured, be they with our clients, our employees or our partners.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We mean what we say and say what we mean. We also expect the same of our clients & partners.",
      icon: "⚖️"
    },
    {
      title: "Value",
      description: "If we can't add value, we have no business at the table!",
      icon: "💎"
    },
    {
      title: "Attitude",
      description: "We recognize that our attitude matters in all we are involved in. We have a can-do spirit that is the secret sauce of our successes.",
      icon: "🚀"
    },
    {
      title: "Trust",
      description: "It's the basis for all we do. We work hard to earn it and strive even harder to keep it!",
      icon: "🔒"
    },
    {
      title: "Equity",
      description: "We strive for just and equitable solutions to our clients' needs that benefit all concerned. It's the only win-win there is.",
      icon: "⚖️"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted/50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Driving Growth Across
              <span className="text-primary block">Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Since 2012, we've been a leading catalyst for economic development, 
              promoting sustainable progress and unlocking vast potential within African markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/services">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                1024 Concepts is a business development firm and ideation centre focused on Africa, 
                committed to driving growth and fostering integration throughout the continent.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To become a leading catalyst for economic development across Africa
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                <p className="text-muted-foreground">
                  Technology-driven platforms that link individuals, communities, and services
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Focus</h3>
                <p className="text-muted-foreground">
                  Primary focus on media and healthcare sectors across African markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships with clients, partners, and employees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Operating Ethos */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Operating Ethos</h2>
          <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
            "Think like a person of action, act like a person of thought"
          </blockquote>
          <p className="text-lg opacity-90">Adapted from a quote by Henri Bergson</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Drive Growth?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to unlock the potential in your business and create 
              sustainable solutions for African markets.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <ClientsPartners />

      <Footer />
    </div>
  );
};

export default Index;
