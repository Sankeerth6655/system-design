import { useState } from "react";
import { Plus, X } from "lucide-react";
import Architecture from "../components/design/Architecture";
import Api from "../components/design/Api";
import FolderStructure from "../components/design/FolderStructure";
import UserStories from "../components/design/UserStories";
import Roadmap from "../components/design/Roadmap";
import Database from "../components/design/Database";
import Loader from "../components/Loader";
import { useGenerateDesignMutation } from "../redux/features/aiApi";
import toast from "react-hot-toast";
import { useCreateDesignMutation } from "../redux/features/designApi";

export default function GenerateDesign() {
    
    const isAuthenticated = !!localStorage.getItem("sdtoken");

    const [projectName, setProjectName] = useState("");
    const [selectedTechStack, setSelectedTechStack] = useState("");

    const [featureInput, setFeatureInput] = useState("");
    const [features, setFeatures] = useState<string[]>([]);

    const [loading, setLoading] = useState(false);
    const [generatedDesign, setGeneratedDesign] = useState<any>(null);

    const [generateDesign] = useGenerateDesignMutation();

    const [createDesign] = useCreateDesignMutation();

    const addFeature = () => {
        const value = featureInput.trim();

        if (!value) return;

        if (features.includes(value)) return;

        setFeatures((prev) => [...prev, value]);

        setFeatureInput("");
        };

        const handleAddFeature = (
        e: React.KeyboardEvent<HTMLInputElement>
        ) => {
        if (e.key !== "Enter") return;

        e.preventDefault();

        addFeature();
        };

    const removeFeature = (feature: string) => {
        setFeatures((prev) =>
            prev.filter((f) => f !== feature)
        );
    };

    const handleSaveDesign = async()=>{
        try {
            let response = await createDesign({projectName,techStack:selectedTechStack,features,generatedDesign}).unwrap();
            toast.success(response.message);
        } catch (error:any) {
            toast.error(error.data.message)
        }
    }

    const handleGenerate = async () => {
        setLoading(true);
        try {
            let response = await generateDesign({projectName,techStack:selectedTechStack,features}).unwrap();
            setGeneratedDesign(response.generatedDesign);
        } catch (error:any) {
            const message = error?.data?.error?.message ||  'This model is currently experiencing high demand, please try again later!'|| error?.data?.message 
            toast.error(message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">

            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">

                {/* Header */}

                <div>
                    <h1 className="text-3xl font-bold tracking-[-0.04em]">
                        Generate System Design
                    </h1>

                    {/* <p className="mt-2 text-sm text-[#A1A1AA]">
                        Describe your project and let AI
                        generate a complete software blueprint.
                    </p> */}

                </div>
                {!isAuthenticated && <div className="mt-4 rounded-xl border border-[#27272A] bg-[#18181B] p-3">
                <p className="text-sm text-[#A1A1AA]">
                    Sign in to save designs to your dashboard and download PDF reports.
                </p>
                </div>}
                

                {/* Form */}

                <div className="mt-8 rounded-2xl border border-[#27272A] bg-[#18181B] p-5">

                    {/* Project Name */}

                    <div>
                        <label className="mb-2 block text-sm text-[#A1A1AA]">
                            Project Name
                        </label>

                        <input
                            value={projectName}
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                            placeholder="Food Delivery Platform"
                            className="
                w-full
                rounded-xl
                border
                border-[#27272A]
                bg-[#09090B]
                px-4
                py-3
                text-sm
                outline-none
                focus:border-[#52525B]
              "
                        />
                    </div>

                    {/* Tech Stack */}
                        <div className="mt-5">
                        <label className="mb-2 block text-sm text-[#A1A1AA]">
                            Tech Stack
                        </label>

                        <input
                            value={selectedTechStack}
                            onChange={(e) =>
                            setSelectedTechStack(e.target.value)
                            }
                            placeholder="MERN, Spring Boot + React..."
                            className="
                            w-full
                            rounded-xl
                            border
                            border-[#27272A]
                            bg-[#09090B]
                            px-4
                            py-3
                            text-sm
                            outline-none
                            focus:border-[#52525B]
                            "
                        />
                        </div>

                    {/* Features */}

                    <div className="mt-5">
                        <label className="mb-2 block text-sm text-[#A1A1AA]">
                            Features
                        </label>

                        <div className="flex gap-2">

                            <input
                                value={featureInput}
                                onChange={(e) =>
                                setFeatureInput(e.target.value)
                                }
                                onKeyDown={handleAddFeature}
                                placeholder="Add feature"
                                className="
                                flex-1
                                rounded-xl
                                border
                                border-[#27272A]
                                bg-[#09090B]
                                px-4
                                py-3
                                text-sm
                                outline-none
                                focus:border-[#52525B]
                                "
                            />

                            <button
                                type="button"
                                onClick={addFeature}
                                className="
                                flex
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#E4E4E7]
                                px-4
                                text-black
                                transition
                                hover:bg-white
                                "
                            >
                                <Plus size={18} />
                            </button>

                            </div>

                        {features.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2">

                                {features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#27272A]
                      bg-[#09090B]
                      px-3
                      py-2
                      text-sm
                    "
                                    >
                                        {feature}

                                        <button
                                            onClick={() =>
                                                removeFeature(feature)
                                            }
                                            className="cursor-pointer"
                                        >
                                            <X size={14} />
                                        </button>

                                    </div>
                                ))}

                            </div>
                        )}
                    </div>

                    {/* Generate */}

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="
              mt-6
              w-full
              rounded-xl
              bg-[#E4E4E7]
              px-4
              py-3
              text-sm
              font-medium
              text-black
              hover:bg-white
              cursor-pointer
            "
                    >
                        Generate Design
                    </button>

                </div>

                {loading && (
                    <div className="-mt-4">
                        <Loader />
                    </div>
                )}
                    

                {/* Generated Preview */}

                {generatedDesign && (
                    <div className="mt-8 space-y-6">

                        <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-5">
                            <h2 className="text-xl font-semibold">
                                Overview
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
                                {generatedDesign.overview}
                            </p>
                        </div>

                        <Architecture
                            architecture={
                                generatedDesign.architecture
                            }
                        />

                        <Database
                            databaseDesign={
                                generatedDesign.database
                            }
                        />

                        <Api
                            apis={generatedDesign.apis}
                        />

                        <FolderStructure
                            folderStructure={
                                generatedDesign.folderStructure
                            }
                        />

                        <UserStories
                            userStories={
                                generatedDesign.userStories
                            }
                        />

                        <Roadmap
                            roadmap={
                                generatedDesign.roadmap
                            }
                        />

                        <div className="flex flex-wrap gap-4">

                            {isAuthenticated &&
                             <button
                            onClick={handleSaveDesign}
                                className="
                                rounded-xl
                                bg-[#E4E4E7]
                                px-5
                                py-3
                                text-sm
                                font-medium
                                cursor-pointer
                                text-black
                                "
                                            >
                                Save Design
                            </button>}

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}