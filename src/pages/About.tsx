import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueCard from "@/components/ValueCard";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const coreValues = [{
    title: "Posterity",
    description: "We always keep the 'long view' in mind. While profit and gain are very important, we are in for the long haul and won't sacrifice long-term benefit for short-term gain!",
    icon: "🌱"
  }, {
    title: "Relationships",
    description: "We regard all our relationships as precious, something to be jealously guarded and nurtured, be they with our clients, our employees or our partners.",
    icon: "🤝"
  }, {
    title: "Integrity",
    description: "We mean what we say and say what we mean. We also expect the same of our clients & partners.",
    icon: "⚖️"
  }, {
    title: "Value",
    description: "If we can't add value, we have no business at the table!",
    icon: "💎"
  }, {
    title: "Attitude",
    description: "We recognize that our attitude matters in all we are involved in. We have a can-do spirit that is the secret sauce of our successes.",
    icon: "🚀"
  }, {
    title: "Trust",
    description: "It's the basis for all we do. We work hard to earn it and strive even harder to keep it!",
    icon: "🔒"
  }, {
    title: "Equity",
    description: "We strive for just and equitable solutions to our clients' needs that benefit all concerned. It's the only win-win there is.",
    icon: "⚖️"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About 1024 Concepts</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Driving economic development and fostering integration across Africa since 2012
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2012, 1024 Concepts is a business development firm and ideation centre 
                    focused on Africa, committed to driving growth and fostering integration throughout the continent.
                  </p>
                  <p>
                    With a vision to become a leading catalyst for economic development, we strive to promote 
                    sustainable progress and unlock the vast potential within African markets.
                  </p>
                  <p>
                    As an ideation centre, we identify critical gaps and untapped opportunities through 
                    comprehensive market research, converting these insights into effective technology-driven 
                    platforms that link individuals, communities, and services across value chains.
                  </p>
                </div>
              </div>
              <div>
                <Card className="p-8">
                  <CardContent className="p-0 space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">12+</div>
                      <div className="text-muted-foreground">Years of Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">3</div>
                      <div className="text-muted-foreground">Primary Sectors</div>
                      <div className="text-sm text-muted-foreground mt-1">Energy, Healthcare, Media </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">54</div>
                      <div className="text-muted-foreground">African Countries</div>
                      <div className="text-sm text-muted-foreground mt-1">Market Focus</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mission & Focus */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a leading catalyst for economic development across Africa by promoting 
                    sustainable progress and unlocking the vast potential within African markets through 
                    innovative technology-driven solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">In recent years, our primary focus has been on the Energy, Healthcare and Media sectors, working with clients and creating solutions that address urgent challenges in these industries and drive meaningful impact across African communities.</p>
                </CardContent>
              </Card>
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
              These seven values are the foundation of everything we do, guiding our decisions 
              and shaping our relationships with clients, partners, and employees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => <ValueCard key={index} title={value.title} description={value.description} icon={value.icon} />)}
          </div>
        </div>
      </section>

      {/* Operating Ethos */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Operating Ethos</h2>
          <blockquote className="text-2xl md:text-4xl font-light italic mb-6 max-w-4xl mx-auto leading-relaxed">
            "Think like a person of action, act like a person of thought"
          </blockquote>
          <p className="text-lg opacity-90">Adapted from a quote by Henri Bergson</p>
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-lg opacity-90 leading-relaxed">
              This philosophy guides our approach to every project and relationship. We combine 
              strategic thinking with decisive action, ensuring that our solutions are both 
              thoughtfully conceived and effectively executed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;