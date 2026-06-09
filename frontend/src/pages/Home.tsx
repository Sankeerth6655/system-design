import { Link } from "react-router-dom";

export default function Home() {
  const isAuthenticated = !!localStorage.getItem("sdtoken");
  const features = [
    {
      title: "Architecture Design",
      description:
        "Generate complete system architecture including frontend, backend, database interactions and overall application flow. Get a clear blueprint before writing a single line of code.",
    },
    {
      title: "Database Schema",
      description:
        "Create production-ready database designs with collections, tables, fields and relationships tailored to your project's requirements and chosen technology stack.",
    },
    {
      title: "API Generation",
      description:
        "Automatically generate REST API specifications including endpoints, request payloads, response structures and authentication requirements.",
    },
    {
      title: "Folder Structure",
      description:
        "Receive a scalable project structure organized according to industry best practices for maintainability and long-term development.",
    },
    {
      title: "User Stories",
      description:
        "Generate detailed user stories and functional requirements that help transform ideas into clearly defined development tasks.",
    },
    {
      title: "Development Roadmap",
      description:
        "Break the project into manageable phases with implementation milestones, priorities and recommended development sequence.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#09090B] text-[#FAFAFA]">

      {/* Hero */}

      <section className="py-16">
        <div className="mx-auto max-w-[1800px] px-8">

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left */}

            <div>

              <div className="inline-flex rounded-full border border-[#27272A] bg-[#18181B] px-4 py-2 text-sm text-[#D4D4D8]">
                AI Powered Software Architecture Generator
              </div>

              <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight">
                Design Software Systems
                <br />
                Before Writing
                <span className="text-[#E4E4E7]">
                  {" "}Code
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#A1A1AA]">
                Transform project ideas into production-ready
                software blueprints. Generate architecture,
                database schemas, APIs, folder structures,
                user stories and implementation roadmaps
                in seconds using AI.
              </p>

              <div className="mt-4 flex flex-wrap gap-4">

                <Link
                  to={isAuthenticated?'/dashboard':'/generate-design'}
                  className="rounded-xl bg-[#E4E4E7] px-6 py-3 text-sm font-medium text-black hover:bg-white"
                >
                  Get Started
                </Link>

                {/* <Link
                  to="/dashboard"
                  className="rounded-xl border border-[#27272A] bg-[#18181B] px-6 py-3 text-sm"
                >
                  Dashboard
                </Link> */}

              </div>
              {/* <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#A1A1AA]">

                <span>✓ Architecture Design</span>

                <span>✓ Database Schema</span>

                <span>✓ API Generation</span>

              </div> */}

              <div className="mt-8 flex gap-10">
                <div>
                  <h3 className="text-2xl font-semibold">
                    AI
                  </h3>

                  <p className="mt-1 text-sm text-[#A1A1AA]">
                    Generated Designs
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    6
                  </h3>

                  <p className="mt-1 text-sm text-[#A1A1AA]">
                    Generated Modules
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    PDF
                  </h3>

                  <p className="mt-1 text-sm text-[#A1A1AA]">
                    Export Support
                  </p>
                </div>

              </div>

            </div>

            {/* Preview Card */}

            <div>

              <div className="rounded-3xl border border-[#27272A] bg-[#18181B] p-6 h-full">

                <div className="mb-4 text-sm text-[#A1A1AA]">
                  Preview
                </div>

                <div className="space-y-4">

                  <div className="rounded-xl bg-[#27272A] p-4">

                    <h3 className="text-base font-medium">
                      Food Delivery Platform
                    </h3>

                    <p className="mt-2 text-sm text-[#A1A1AA]">
                      MERN • Payments • Orders • Authentication
                    </p>

                  </div>

                  <div className="rounded-xl bg-[#27272A] p-4">

                    <div className="mb-3 text-sm font-medium">
                      Generated Modules
                    </div>

                    <div className="rounded-xl bg-[#27272A] p-4">

                      <div className="mb-3 text-sm font-medium">
                        Collections
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs">

                        <span className="rounded-md bg-[#18181B] px-3 py-2">
                          User
                        </span>

                        <span className="rounded-md bg-[#18181B] px-3 py-2">
                          Order
                        </span>

                        <span className="rounded-md bg-[#18181B] px-3 py-2">
                          Payment
                        </span>

                        <span className="rounded-md bg-[#18181B] px-3 py-2">
                          Product
                        </span>

                      </div>

                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">

                      <div className="rounded-lg bg-[#18181B] p-3">
                        Architecture
                      </div>

                      <div className="rounded-lg bg-[#18181B] p-3">
                        Database
                      </div>

                      <div className="rounded-lg bg-[#18181B] p-3">
                        APIs
                      </div>

                      <div className="rounded-lg bg-[#18181B] p-3">
                        Roadmap
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="py-16">
        <div className="mx-auto max-w-[1800px] px-8">

          <div className="mb-10">

            <h2 className="text-2xl font-semibold">
              Everything You Need To Start Building
            </h2>

            <p className="mt-3 text-sm text-[#A1A1AA]">
              Generate complete software documentation in seconds.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[#27272A] bg-[#18181B] p-5 transition hover:border-[#52525B]"
              >
                <h3 className="text-base font-medium">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* How It Works */}

      <section className="py-16">
        <div className="mx-auto max-w-[1800px] px-8">

          <div className="mb-10">

            <h2 className="text-2xl font-semibold">
              How It Works
            </h2>

            <p className="mt-3 text-sm text-[#A1A1AA]">
              Generate system designs in three simple steps.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                step: "01",
                title: "Describe Your Project",
                description:
                  "Enter project name, tech stack and required features.",
              },
              {
                step: "02",
                title: "AI Generates Design",
                description:
                  "Our AI creates architecture, schemas, APIs and roadmap.",
              },
              {
                step: "03",
                title: "Save & Download",
                description:
                  "Save designs to dashboard or export documentation.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-[#27272A] bg-[#18181B] p-5 transition hover:border-[#52525B]"
              >
                <div className="text-sm text-[#A1A1AA]">
                  {item.step}
                </div>

                <h3 className="mt-3 text-base font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[#A1A1AA] leading-6">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


    </div>
  );
}