import { Link } from "react-router-dom";

type DesignCardProps = {
  design: {
    id: string;
    projectName: string;
    techStack: string;
  };
};

export default function DesignCard({
  design,
}: DesignCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#27272A]
        bg-[#18181B]
        p-5
        transition
        hover:border-[#52525B]
      "
    >
      <h2 className="text-lg font-semibold">
        {design.projectName}
      </h2>

      <p className="mt-2 text-sm text-[#A1A1AA]">
        {design.techStack}
      </p>

      <div className="mt-6 flex gap-3">

        <Link
          to={`/design-details/${design.id}`}
          className="
            flex-1
            rounded-xl
            bg-[#E4E4E7]
            px-4
            py-2.5
            text-center
            text-sm
            font-medium
            text-black
          "
        >
          View
        </Link>

        {/* <button
          className="
            flex
            items-center
            justify-center
            rounded-xl
            border
            border-[#27272A]
            px-4
            py-2.5
          "
        >
          <Trash2 size={16} />
        </button> */}

      </div>

    </div>
  );
}