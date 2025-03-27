export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    github?: string;
    website?: string;
    nuget?: string;
    tech?: string[];
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js.",
      image: "/images/AZDOI.PNG",
      github: "https://github.com/yourusername/ecommerce-platform",
      website: "https://yourwebsite.com/ecommerce-platform",
    },
    {
      id: "2",
      title: "AZDOI",
      description:
        "AZDOI is a NuGet package developed during my internship at WCOM. It streamlines the process of generating markdown documentation and visual representations for Azure DevOps organization, making it easier to integrate and report on DevOps data.",
      image: "/images/AZDOI.PNG",
      github: "https://github.com/WCOMAB/AZDOI",
      nuget: "https://www.nuget.org/packages/AZDOI",
      tech: ["C#", ".NET", "Azure DevOps", "NuGet"],
    },
  ];