import { Link } from "react-router-dom";

const snapshotItems = [
  {
    label: "Target roles",
    value: "Gameplay / Tools / Software",
  },
  {
    label: "Core stack",
    value: "Unreal / Unity / C++ / React",
  },
  {
    label: "Education",
    value: "SMU Guildhall / Programming",
  },
];

const buildAreas = [
  "Gameplay Systems",
  "Engine / Tools",
  "Frontend / Full-stack",
];

const RecruiterSnapshot = () => {
  return (
    <section className="border-y border-[#302d27] py-7">
      <div className="grid gap-7 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div className="grid gap-5 sm:grid-cols-3">
          {snapshotItems.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold text-[#8e9a91]">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold leading-6 text-[#f2efe8]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
          {buildAreas.map((area) => (
            <Link
              key={area}
              to="/work-samples"
              className="text-sm font-semibold text-[#d6c6a8] transition hover:text-[#f2efe8]"
            >
              {area}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterSnapshot;
