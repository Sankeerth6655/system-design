import { useNavigate, useParams } from "react-router-dom";
import Api from "../components/design/Api";
import Architecture from "../components/design/Architecture";
import Database from "../components/design/Database";
import FolderStructure from "../components/design/FolderStructure";
import Roadmap from "../components/design/Roadmap";
import UserStories from "../components/design/UserStories";
import { useDeleteDesignMutation, useGetDesignByIdQuery } from "../redux/features/designApi";
import { useRef } from "react";
import toast from "react-hot-toast";
import PDFDesignTemplate from "../components/PDFDesignTemplate";
import Loader from "../components/Loader";
import { useReactToPrint } from "react-to-print";


export default function DesignDetails() {

    const pdfTemplateRef = useRef<HTMLDivElement>(null);

    const pdfRef = useRef<HTMLDivElement>(null);

    const {designId} = useParams();

    const [deleteDesign] = useDeleteDesignMutation();

    const {data,isLoading} = useGetDesignByIdQuery(designId);

    const navigate = useNavigate();

    const handleDownloadPDF = useReactToPrint({
        contentRef: pdfTemplateRef,
        documentTitle: data?.projectName || "System Design",

        onAfterPrint: () => {
            toast.success("PDF downloaded successfully!");
        },
    });

    const handleDeleteDesign = async()=>{
        try {
            let response = await deleteDesign(designId).unwrap();
            toast.success(response.message);
            navigate('/dashboard');
        } catch (error:any) {
            toast.error(error.data.message);
        }
    }

    if(isLoading) return <Loader></Loader>


    return (
        <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">

            <div ref={pdfRef} className="mx-auto max-w-[1800px] px-6 py-8">

                {/* Header */}

                <div
                    className="
            rounded-2xl
            border
            border-[#27272A]
            bg-[#18181B]
            p-6
          "
                >

                    <h1 className="text-3xl font-bold tracking-[-0.04em]">
                        {data.projectName}
                    </h1>

                    <p className="mt-3 text-sm text-[#A1A1AA]">
                        {data.techStack}
                    </p>

                    {/* Features */}

                    <div className="mt-5 flex flex-wrap gap-2">

                        {data.features.map((feature:any) => (
                            <span
                                key={feature}
                                className="
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
                            </span>
                        ))}

                    </div>

                </div>

                {/* Overview */}

                <div
                    className="
            mt-6
            rounded-2xl
            border
            border-[#27272A]
            bg-[#18181B]
            p-6
          "
                >
                    <h2 className="text-xl font-semibold">
                        Overview
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#A1A1AA]">
                        {data.generatedDesign.overview}
                    </p>
                </div>

                {/* Sections */}

                <div className="mt-6 space-y-6">

                    <Architecture
                        architecture={
                            data.generatedDesign.architecture
                        }
                    />

                    <Database
                        databaseDesign={
                            data.generatedDesign.database
                        }
                    />

                    <Api
                        apis={
                            data.generatedDesign.apis
                        }
                    />

                    <FolderStructure
                        folderStructure={
                            data.generatedDesign.folderStructure
                        }
                    />

                    <UserStories
                        userStories={
                            data.generatedDesign.userStories
                        }
                    />

                    <Roadmap
                        roadmap={
                            data.generatedDesign.roadmap
                        }
                    />

                </div>

                {/* Actions */}

                <div className="mt-8 flex flex-wrap gap-4">

                    <button
                        onClick={handleDownloadPDF}
                        className="
                        rounded-xl
                        bg-[#E4E4E7]
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-black
                        transition
                        hover:bg-white
                        cursor-pointer
                    "
                    >
                        Download PDF
                    </button>



                    <button
                        className="
                        cursor-pointer
                rounded-xl
                border
                border-[#27272A]
                bg-[#18181B]
                px-5
                py-3
                text-sm
                font-medium
                text-[#FAFAFA]
                transition
                hover:border-[#52525B]
                hover:bg-[#09090B]
            "
            onClick={handleDeleteDesign}
                    >
                        Delete Design
                    </button>

                </div>

            </div>
        <div className="hidden">

            <div ref={pdfTemplateRef}>
                <PDFDesignTemplate
                design={data}
                />
            </div>
            </div>
        </div>
        
    );
}