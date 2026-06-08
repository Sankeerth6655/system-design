import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Api = {
  method: string;
  endpoint: string;
  description: string;
};

type ApiSectionProps = {
  apis: Api[];
};

export default function Api({
  apis,
}: ApiSectionProps) {
  return (
    <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-5">

      <h2 className="text-xl font-semibold">
        APIs
      </h2>

      <p className="mt-2 text-sm text-[#A1A1AA]">
        REST API endpoints generated for the application.
      </p>

      <div className="mt-5 space-y-4">

        {apis.map((api, index) => (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-xl
              border
              border-[#27272A]
              bg-[#09090B]
            "
          >
            <div className="border-b border-[#27272A] px-4 py-3">

              <div className="flex flex-wrap items-center gap-2">

                <span
                  className="
                    rounded-md
                    bg-[#27272A]
                    px-2
                    py-1
                    text-xs
                    font-medium
                  "
                >
                  {api.method}
                </span>

                <span className="text-sm">
                  {api.endpoint}
                </span>

              </div>

              <p className="mt-2 text-sm text-[#A1A1AA]">
                {api.description}
              </p>

            </div>

            <SyntaxHighlighter
              language="json"
              style={oneDark}
              customStyle={{
                margin: 0,
                background: "#09090B",
                fontSize: "13px",
              }}
            >
              {JSON.stringify(api, null, 2)}
            </SyntaxHighlighter>

          </div>
        ))}

      </div>

    </div>
  );
}

