export default function Loader() {
  return (
    <div className="flex items-center justify-center py-16">

      <div className="flex flex-col items-center">

        <div
          className="
            h-10
            w-10
            animate-spin
            rounded-full
            border-[3px]
            border-[#27272A]
            border-t-[#E4E4E7]
          "
        />

        <p className="mt-4 text-sm text-[#A1A1AA]">
          Generating design...
        </p>

      </div>

    </div>
  );
}