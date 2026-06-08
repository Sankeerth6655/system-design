type PDFDesignTemplateProps = {
  design: any;
};

export default function PDFDesignTemplate({
  design,
}: PDFDesignTemplateProps) {
  return (
    <div
      className="
        bg-white
        text-black
        p-10
        w-full
      "
    >
      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          {design.projectName}
        </h1>

        <p className="mt-2 text-gray-600">
          {design.techStack}
        </p>

      </div>

      {/* Features */}

      <div className="mb-10">

        <h2 className="mb-4 text-2xl font-semibold">
          Features
        </h2>

        <div className="flex flex-wrap gap-2">

          {design.features.map((feature: string) => (
            <span
              key={feature}
              className="
                rounded-md
                border
                border-gray-300
                px-3
                py-1
                text-sm
              "
            >
              {feature}
            </span>
          ))}

        </div>

      </div>

      {/* Overview */}

      <section className="pdf-section mb-10">

        <h2 className="mb-3 text-2xl font-semibold">
          Overview
        </h2>

        <p className="leading-8 text-gray-700">
          {design.generatedDesign.overview}
        </p>

      </section>

      {/* Architecture */}

      <section className="pdf-section mb-10">

        <h2 className="mb-4 text-2xl font-semibold">
          Architecture
        </h2>

        <div className="space-y-4">

          <div>
            <strong>Frontend</strong>
            <p>{design.generatedDesign.architecture.frontend}</p>
          </div>

          <div>
            <strong>Backend</strong>
            <p>{design.generatedDesign.architecture.backend}</p>
          </div>

          <div>
            <strong>Database</strong>
            <p>{design.generatedDesign.architecture.database}</p>
          </div>

        </div>

      </section>

      {/* Database */}

      <section className="pdf-section mb-10">

        <h2 className="mb-4 text-2xl font-semibold">
          Database Design
        </h2>

        <div className="space-y-4">

          {design.generatedDesign.database.map(
            (collection: any) => (
              <div
                key={collection.name}
                className="
                  rounded-lg
                  border
                  border-gray-300
                  p-4
                "
              >
                <h3 className="font-semibold">
                  {collection.name}
                </h3>

                <ul className="mt-2 list-disc pl-6">

                  {collection.fields.map(
                    (field: string) => (
                      <li key={field}>
                        {field}
                      </li>
                    )
                  )}

                </ul>

              </div>
            )
          )}

        </div>

      </section>

      {/* APIs */}

      <section className="pdf-section mb-10">

        <h2 className="mb-4 text-2xl font-semibold">
          APIs
        </h2>

        <table className="w-full border-collapse">

          <thead>

            <tr>

              <th className="border p-2 text-left">
                Method
              </th>

              <th className="border p-2 text-left">
                Endpoint
              </th>

              <th className="border p-2 text-left">
                Description
              </th>

            </tr>

          </thead>

          <tbody>

            {design.generatedDesign.apis.map(
              (api: any, index: number) => (
                <tr key={index}>

                  <td className="border p-2">
                    {api.method}
                  </td>

                  <td className="border p-2">
                    {api.endpoint}
                  </td>

                  <td className="border p-2">
                    {api.description}
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </section>

      <section className="pdf-section mb-10">

        <h2 className="mb-4 text-2xl font-semibold">
            Folder Structure
        </h2>

        <pre
            className="
            overflow-hidden
            rounded-lg
            border
            border-gray-300
            bg-gray-50
            p-4
            text-sm
            "
        >
            {JSON.stringify(
            design.generatedDesign.folderStructure,
            null,
            2
            )}
        </pre>

        </section>

        <section className="pdf-section mb-10">

        <h2 className="mb-4 text-2xl font-semibold">
            User Stories
        </h2>

        <ul className="space-y-3">

            {design.generatedDesign.userStories.map(
            (story: string, index: number) => (
                <li
                key={index}
                className="
                    rounded-lg
                    border
                    border-gray-300
                    p-4
                "
                >
                {story}
                </li>
            )
            )}

        </ul>

        </section>

        <section className="pdf-section mb-10">

        <h2 className="mb-4 text-2xl font-semibold">
            Development Roadmap
        </h2>

        <div className="space-y-6">

            {design.generatedDesign.roadmap.map(
            (phase: any, index: number) => (
                <div
                key={index}
                className="
                    rounded-lg
                    border
                    border-gray-300
                    p-4
                "
                >

                <h3 className="font-semibold">
                    {phase.phase}
                </h3>

                <ul className="mt-3 list-disc pl-6">

                    {phase.tasks.map(
                    (task: string) => (
                        <li key={task}>
                        {task}
                        </li>
                    )
                    )}

                </ul>

                </div>
            )
            )}

        </div>

        </section>

    </div>
  );
}