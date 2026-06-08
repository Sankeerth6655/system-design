export function systemDesignPrompt(data: {
    projectName: string;
    techStack: string;
    features: string[];}) {
    return `
            You are a senior software architect.

            Generate a complete software blueprint.

            Project Name:
            ${data.projectName}

            Tech Stack:
            ${data.techStack}

            Features:
            ${data.features.join(", ")}

            Warning : Above detils(mainly techstack) are given by the user which may not be clear and with spelling errors, while giving response give the projectname,techstack and features in a neat,technical representing way.

            Return ONLY valid JSON.

            {
            "projectName": "",
            "techStack": "",
            "features": [],
            "generatedDesign":{
            
            "overview": "",

            "architecture": {
                "frontend": "",
                "backend": "",
                "database": ""
            },

            "database": [
                {
                "name": "",
                "fields": []
                }
            ],

            "apis": [
                {
                "method": "",
                "endpoint": "",
                "description": ""
                }
            ],

            "folderStructure": {
                "client":{},
                "server":{}
            },

            "userStories": [],

            "roadmap": [
                {
                "phase": "",
                "tasks": []
                }
            ]
            }

            }

            Rules:

            1. overview
            - Short project description.

            2. architecture
            - Describe frontend.
            - Describe backend.
            - Describe database.

            3. databaseDesign
            - MongoDB: collections and fields.
            - MySQL: tables and columns.

            4. apis
            - method
            - endpoint
            - description

            5. folderStructure
            - Array of folders/files.
            - Return folderStructure as nested JSON.
            Ex: {
                "folderStructure": {
                    "client": {
                    "src": [
                        "components",
                        "pages",
                        "services"
                    ]
                    },
                    "server": {
                    "controllers": [],
                    "models": [],
                    "routes": []
                    }
                }
                }

            6. userStories
            - Array of user stories.

            7. roadmap
            - Multiple phases with tasks.

            
            Do not include explanations.
            Do not wrap response inside \`\`\`json.
            Return parsable JSON only.

            CRITICAL:

            Return STRICT JSON ONLY.

            Every property name MUST be enclosed in double quotes.

            Do not use trailing commas.

            Do not include comments.

            Do not include markdown.

            Do not include code fences.

            The response MUST be directly parsable by JSON.parse().
            `;
}