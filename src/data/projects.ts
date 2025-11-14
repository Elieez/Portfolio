export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    github?: string;
    githubBackend?: string;
    githubFrontend?: string;
    website?: string;
    nuget?: string;
    tech?: string[];
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      title: "AZDOI",
      description:`AZDOI is a .NET tool that automates documentation for Azure DevOps organizations 
      by inventorying projects and repositories via the Azure DevOps REST API, then generating structured Markdown files for static site creation.`,

      longDescription: `AZDOI is a .NET tool developed at WCOM that streamlines the documentation of Azure DevOps organizations. 
      It connects to the Azure DevOps REST API using a personal access token or Azure Entra ID, 
      inventories projects and repositories—including branches, tags, and README content—and organizes the data into Markdown files. 
      These files serve as a comprehensive source for building a static website.
      Future updates may expand documentation to cover work items, pipelines, and release definitions.`,
      
      image: "/images/azdoi.png",
      github: "https://github.com/WCOMAB/AZDOI",
      nuget: "https://www.nuget.org/packages/AZDOI",
      tech: ["C#", ".NET", "Azure DevOps", "NuGet"],
    },
    {
      id: "2",
      title: "AktieKoll",
      description: "AktieKoll — a C#/.NET system that fetches, stores and analyzes swedish insider trades, paired with a Next.js frontend for interactive exploration.",

      longDescription: `AktieKoll is a focused C#/.NET application for monitoring and analyzing insider transactions in public companies.
      The backend fetches and processes insider trading data on a scheduled basis through GitHub Actions, stores it in a structured database, and exposes an API for consumption.
      A separate Next.js frontend built with TypeScript provides fast searching, visualizations, and filtering to explore market activity.
      The project includes unit and integration tests as well as CI workflows to ensure reliability as the system evolves.`,
      
      image: "/images/aktiekoll3.png",
      githubBackend: "https://github.com/Elieez/AktieKoll",
      githubFrontend: "https://github.com/Elieez/aktiekollwebb",
      tech: [
        "C#",
        ".NET",
        "PostgreSQL",
        "Next.js",
        "TypeScript",
        "GitHub Actions",
        "xUnit"
      ]
    }
  ];