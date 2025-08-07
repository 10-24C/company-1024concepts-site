import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Laptop, 
  Target, 
  Video,
  TrendingUp,
  Shield,
  Lightbulb,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Business Advisory and Consulting",
      description: "Our business advisory and consulting services are designed to guide clients and partners in achieving measurable success within set timelines and budgets. Through strategic planning, market positioning, and tailored guidance, we ensure that each engagement is outcome-driven and aligned with clear objectives. Our teams are committed to delivering value that enhances competitiveness and drives sustainable growth in African markets.",
      icon: Users,
    },
    {
      title: "Technology Solutions and Support",
      description: "We develop technology platforms that connect communities, services, and products across value chains, fostering integration and collaboration. Each platform is tailored to improve accessibility, streamline processes, and support inclusive growth. By focusing on scalability and ease of use, we help clients deploy digital solutions that enhance operational efficiency and empower stakeholders across sectors. We also provide the necessary support to our clients to navigate the constantly changing landscape of software, programs and apps to ensure that their tech investments align to their real needs.",
      icon: Laptop,
    },
    {
      title: "Project Development and Execution",
      description: "We transform market insights into high-impact projects, overseeing each stage from initial concept to execution. Our services span feasibility studies, strategic roadmaps, and project management, ensuring that projects are delivered efficiently and align with regional market demands. Guided by our core values, we work collaboratively to bring innovative ideas to life, creating solutions that resonate with local needs and drive long-term impact.",
      icon: Target,
    },
    {
      title: "Content Production and Marketing",
      description: "Audiovisual content continues to gain importance and prominence in Africa. With increasing mobile Internet penetration and reducing data costs, video content is increasingly consumed by Africa's youth population and has become an effective means of information dissemination. From conceptualization to production, we work with clients to effectively tell their stories and speak to their audiences using this powerful, persuasive and pervasive medium.",
      icon: Video,
    },
  ];

  const additionalServices = [
    {
      title: "Market Research & Analysis",
      description: "Comprehensive market research to identify gaps and opportunities",
      icon: TrendingUp,
    },
    {
      title: "Risk Assessment",
      description: "Strategic risk evaluation and mitigation planning",
      icon: Shield,
    },
    {
      title: "Innovation Consulting",
      description: "Ideation and innovation strategy development",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions designed to drive growth and foster integration across African markets
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our core services are built around driving measurable success and sustainable growth 
              for our clients across Africa's dynamic markets.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Additional Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting services that complement our core offerings and enhance project outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                A systematic approach that ensures every project delivers measurable value
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Research & Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive market research to identify opportunities and gaps
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Develop tailored strategies aligned with your objectives
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Execute solutions with precision and collaborative oversight
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Continuous Support</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing support to ensure sustainable success and growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive 
              sustainable growth in African markets.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;