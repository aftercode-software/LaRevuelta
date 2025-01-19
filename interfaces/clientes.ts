export interface ClienteCardProps {
  name: string;
  image: string;
  logo: string;
  href: string;
  category: string;
  year: string;
}

export interface Cliente {
  name: string;
  image: string;
  logo: string;
  href: string;
  category: string;
  year: string;
  description: React.ReactNode;
  startingPoint: React.ReactNode;
  stats: {
    title: string;
    description: string;
  }[];
}
