export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    github?: string;
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
  ];