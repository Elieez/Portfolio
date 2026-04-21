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
      description: "AktieKoll is a full-stack system for tracking Swedish insider trades — a .NET 10 REST API with automated data pipelines, real-time email and Discord alerts, and a Next.js frontend with live stock charts and a personal follow system.",
      longDescription: `AktieKoll is a full-stack app for tracking Swedish insider trades, sourced directly from Finansinspektionen.

Every 6 hours, a GitHub Actions pipeline fetches the latest trade data, matches each transaction to a stock ticker via a PostgreSQL company table, and saves any new records. Users who follow those companies are then notified automatically.

Alerts are sent via HTML email or Discord webhooks. Each user can follow up to 3 companies and toggle each notification channel independently.

Auth includes JWT access tokens, HTTP-only refresh cookies, Google OAuth, email verification, password reset, account lockout, and GDPR-compliant account deletion.

The backend follows Clean Architecture — split into the main API, a trade-fetching cron job, a monthly company-sync job, and a test suite with xUnit, Moq, and FluentAssertions.

The Next.js frontend shows a paginated trade feed, company pages with 1-year price charts, buy/sell markers, donut charts, and a debounced search — with full auth flows and dark/light mode.`, 
      
      image: "/images/Ak_preview.PNG",
      githubBackend: "https://github.com/Elieez/AktieKoll",
      githubFrontend: "https://github.com/Elieez/aktiekollwebb",
      website: "https://www.aktiekoll.com",
      tech: [
        "C#",
        ".NET",
        "PostgreSQL",
        "Next.js",
        "TypeScript",
        "Docker",
        "Azure",
        "Vercel",
        "GitHub Actions",
        "xUnit",
        "Azure"
      ]
    }
  ];
