import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <span className="text-2xl">{icon}</span>
        </div>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ValueCard;