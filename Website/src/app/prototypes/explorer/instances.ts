export interface ExplorerInstance {
  slug: string;
  name: string;
  company: string;
  industry: string;
  prototypeFile: string;
  logo?: string;
  accentColor: string;
  createdAt: string;
}

export const instances: ExplorerInstance[] = [
  {
    slug: "phil",
    name: "PHIL Aggregates",
    company: "Philippi-Hagenbuch",
    industry: "Aggregates",
    prototypeFile: "/brand/explorer-prototype_phil.html",
    logo: "/brand/phil-logo.png",
    accentColor: "#F16A21",
    createdAt: "2025-03-15",
  },
  {
    slug: "cat",
    name: "CAT Electric Power",
    company: "Caterpillar",
    industry: "Electric Power",
    prototypeFile: "/brand/explorer-prototype_cat.html",
    logo: undefined,
    accentColor: "#FFCC00",
    createdAt: "2025-02-20",
  },
];
