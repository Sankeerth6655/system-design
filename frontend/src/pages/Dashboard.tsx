import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import DesignCard from "../components/DesignCard";
import { Link } from "react-router-dom";
import { useGetDesignsByUserIdQuery } from "../redux/features/designApi";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const {data} = useGetDesignsByUserIdQuery();
  console.log("saved designs ::: ",data);


  const filteredDesigns = useMemo(() => {
    return data?.filter(
      (design) =>
        design.projectName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        design.techStack
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">

      <div className="mx-auto max-w-[1800px] px-6 py-8">

        {/* Header */}

        <div>

          <h1 className="text-3xl font-bold tracking-[-0.04em]">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#A1A1AA]">
            View and manage your generated system designs.
          </p>

        </div>

        {/* Search */}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="relative w-full sm:max-w-lg">

                <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#71717A]
                "
                />

                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search designs..."
                className="
                    w-full
                    rounded-xl
                    border
                    border-[#27272A]
                    bg-[#18181B]
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    focus:border-[#52525B]
                "
                />

            </div>

            {/* Generate Button */}

            <Link
                to="/generate-design"
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#E4E4E7]
                    px-3
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition
                    hover:bg-white
                    whitespace-nowrap
                "
                >
                <Plus size={16} />
                <span>Generate Design</span>
                </Link>

            </div>

        {/* Designs */}

        {filteredDesigns && filteredDesigns.length > 0 ? (
          <div
            className="
              mt-8
              grid
              gap-6
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
            "
          >
            {filteredDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              mt-10
              rounded-2xl
              border
              border-[#27272A]
              bg-[#18181B]
              p-8
              text-center
            "
          >
            <h2 className="text-lg font-medium">
              No Designs Found
            </h2>

            <p className="mt-2 text-sm text-[#A1A1AA]">
              Try a different search or generate
              your first system design.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}