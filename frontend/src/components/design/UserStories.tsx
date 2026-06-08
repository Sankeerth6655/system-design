type UserStoriesSectionProps = {
  userStories: string[];
};

export default function UserStories({
  userStories,
}: UserStoriesSectionProps) {
  return (
    <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-5">

      <h2 className="text-xl font-semibold">
        User Stories
      </h2>

      <p className="mt-2 text-sm text-[#A1A1AA]">
        Functional requirements generated from the project requirements.
      </p>

      <div className="mt-5 space-y-4">

        {userStories.map((story, index) => (
          <div
            key={index}
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
            <div className="mb-2 text-xs text-[#A1A1AA]">
              User Story {index + 1}
            </div>

            <p className="text-sm leading-7 text-[#FAFAFA]">
              {story}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

