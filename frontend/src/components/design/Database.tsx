type Collection = {
  name: string;
  fields: string[];
};

type DatabaseSectionProps = {
  databaseDesign: Collection[];
};

export default function Database({
  databaseDesign,
}: DatabaseSectionProps) {
  return (
    <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-5">

      <h2 className="text-xl font-semibold">
        Database Design
      </h2>

      <p className="mt-2 text-sm text-[#A1A1AA]">
        Collections and fields required for the application.
      </p>

      <div className="space-y-4">

        {databaseDesign.map((collection) => (
          <div
            key={collection.name}
            className="
              rounded-xl
              border
              border-[#27272A]
              bg-[#09090B]
              p-4
              transition
              hover:border-[#52525B]
            "
          >
            <h3 className="text-base font-medium">
              {collection.name}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">

              {collection.fields.map((field) => (
                <span
                  key={field}
                  className="
                    rounded-full
                    border
                    border-[#27272A]
                    bg-[#18181B]
                    px-3
                    py-1.5
                    text-xs
                    text-[#A1A1AA]
                  "
                >
                  {field}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

