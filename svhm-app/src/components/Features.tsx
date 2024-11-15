import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import blog1 from "../assets/t-shirt_01.png";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: blog1,
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

const featureList: string[] = ["Bekanntmachungen", "Aktionen", "Unterstützung"];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">
        Einige{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          großartige Aktionen
        </span>
      </h2>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, image }: FeatureProps, index) => (
          <div className="mx-auto max-w-sm">
            <Card key={title} className="group overflow-hidden bg-muted/50">
              <div className="relative overflow-hidden">
                <a key={`post_${index}`} href="#">
                  <img
                    className="aspect-[16/9] size-full rounded-t-lg object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                    src={image}
                    alt=""
                  />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <CardTitle>{title}</CardTitle>
                </a>
                <p className="mb-3 font-normal text-muted-foreground">
                  {" "}
                  {description}
                </p>
                <Button variant="outline" className="w-full md:w-auto">
                  Read more
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
