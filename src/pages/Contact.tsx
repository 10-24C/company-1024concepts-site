import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to drive growth in your business? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're here to help you unlock the potential in your business and create 
                sustainable solutions for African markets. Reach out to discuss your project 
                or learn more about our services.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office Location</h3>
                        <p className="text-muted-foreground">
                          Lekki Phase One<br />
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Address</h3>
                        <p className="text-muted-foreground">
                          info@1024concepts.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Operating Ethos */}
              <div className="mt-12 p-6 bg-primary/5 rounded-lg border">
                <h3 className="font-semibold text-primary mb-2">Our Operating Ethos</h3>
                <blockquote className="text-muted-foreground italic">
                  "Think like a person of action, act like a person of thought"
                </blockquote>
                <p className="text-sm text-muted-foreground mt-1">- Henri Bergson</p>
              </div>
            </div>

            {/* Email Contact Section */}
            <div>
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Send us an email and we'll get back to you within 24 hours. 
                    Include details about your project, timeline, and any specific requirements.
                  </p>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full" asChild>
                      <a href="mailto:info@1024concepts.com?subject=Project Inquiry&body=Hi 1024 Concepts team,%0D%0A%0D%0AI'm interested in learning more about your services. Here are some details about my project:%0D%0A%0D%0AProject Type: %0D%0ATimeline: %0D%0ABudget Range: %0D%0ASpecific Requirements: %0D%0A%0D%0APlease let me know when we can schedule a call to discuss further.%0D%0A%0D%0AThank you!">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email to info@1024concepts.com
                      </a>
                    </Button>
                    
                    <p className="text-sm text-muted-foreground">
                      Or copy this email address: 
                      <span className="font-medium text-primary ml-1">info@1024concepts.com</span>
                    </p>
                  </div>
                  
                  <div className="mt-8 p-4 bg-background/50 rounded-lg border">
                    <h3 className="font-semibold mb-2">What to Include in Your Email:</h3>
                    <ul className="text-sm text-muted-foreground text-left space-y-1">
                      <li>• Project overview and goals</li>
                      <li>• Timeline and budget considerations</li>
                      <li>• Specific requirements or challenges</li>
                      <li>• Preferred communication method</li>
                    </ul>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    <strong>Response Time:</strong> We typically respond within 24 hours during business days
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Africa-Focused Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of African markets and cultural nuances since 2012
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Technology-Driven Solutions</h3>
                <p className="text-muted-foreground">
                  Innovative platforms that connect communities and drive sustainable growth
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Long-term Partnerships</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships and focus on sustainable, long-term success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;