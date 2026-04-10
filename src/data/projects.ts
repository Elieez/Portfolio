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
      longDescription: `AktieKoll is a full-stack application for monitoring Swedish insider trading data sourced directly from Finansinspektionen.
      The .NET 10 backend runs a 6-hour GitHub Actions pipeline that fetches the latest trade CSV, resolves each transaction to a stock ticker and ISIN via a local PostgreSQL company table, persists new records idempotently, and dispatches alerts to users who follow those companies.
      Authentication covers JWT access tokens with HTTP-only refresh cookies, Google OAuth, email verification, password reset, account lockout after failed attempts, and GDPR-compliant two-step account deletion.
      Users can follow up to 3 companies and receive trade alerts via HTML email or Discord webhooks, with independent per-user toggles for each channel.
      The backend follows Clean Architecture — split into the main API, a trade-fetching cron app, a monthly company-sync job, and a test suite using xUnit, Moq, FluentAssertions, and Verify.
      The Next.js 16 frontend delivers a paginated trade feed, company pages with 1-year price charts and buy/sell trade markers, donut charts for transaction ratios, debounced autocomplete search, and full auth flows — all served via ISR-cached API calls with dark/light mode support.
      The project is live at aktiekoll.com.`,
      
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
