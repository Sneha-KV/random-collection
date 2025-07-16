
/**
 * List of files and folders
 * Each folder/ file is an element in the list
 * Fields in each element
 * - id, name, isFolder, children (also of same type)
 * 
 */
export const mockFolderStructure = [
    {
        id: 1,
        name: "public",
        isFolder: true,
        children: [
                {
                    id: 2,
                    name: "main",
                    isFolder: true,
                    children: [
                        {
                            id: 3,
                            name: "index.html",
                            isFolder: false
                        }
                    ]
            }
        ]
    }, 
    {
        id: 4,
        name: "src",
        isFolder: true,
        children: [
                {
                    id: 5,
                    name: "App.js",
                    isFolder: false
                },
                {
                    id: 6,
                    name: "index.js",
                    isFolder: false
                }
        ]
    },
    { id: 7, name: "package.json", isFolder: false }
]