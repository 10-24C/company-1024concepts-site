interface PartnerLogo {
  name: string;
  src: string;
  alt: string;
}

const ClientsPartners = () => {
  const partners: PartnerLogo[] = [
    {
      name: "Nigerian Women Business Network",
      src: "/lovable-uploads/396b93bf-617b-415b-950c-f4f29d8b9871.png",
      alt: "Association of Nigerian Women Business Network"
    },
    {
      name: "Agbenu Oil & Gas",
      src: "/lovable-uploads/e987e0e3-1b0a-4c71-a3eb-7ae3a32ba371.png",
      alt: "Agbenu Oil & Gas Limited"
    },
    {
      name: "ConsenSys",
      src: "/lovable-uploads/2274366d-a54a-46af-9054-d4ce99efcc63.png",
      alt: "ConsenSys Leadership Collaboration Business Improvement Specialists"
    },
    {
      name: "Foundation for Moral Value",
      src: "/lovable-uploads/88a0e98f-cf2d-4217-ba00-424264bb4cd1.png",
      alt: "Foundation for Moral Value Reorientation"
    },
    {
      name: "AWEP",
      src: "/lovable-uploads/67255147-0841-4a5a-b65c-c4054480238e.png",
      alt: "African Women's Entrepreneurship Program"
    },
    {
      name: "Posab Foods",
      src: "/lovable-uploads/51056ad8-d738-4408-ac31-c6c1d275b9dc.png",
      alt: "Posab Foods"
    },
    {
      name: "ENYE",
      src: "/lovable-uploads/41e9c4a6-c71d-4d59-b6ed-f08e0220fb29.png",
      alt: "ENYE"
    },
    {
      name: "Innovation Labs",
      src: "/lovable-uploads/22c7d881-4fad-4946-acfe-8d1eb35a476d.png",
      alt: "Innovation Labs - Where Innovation Happens"
    },
    {
      name: "Libera Partners",
      src: "/lovable-uploads/433fb59d-ca61-486b-99b4-2f450cf31597.png",
      alt: "Libera Partners Advisory Development Investments"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to partner with forward-thinking organizations across Africa, 
            driving innovation and sustainable growth together.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsPartners;