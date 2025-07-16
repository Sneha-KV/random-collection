import React, { useState } from "react";
import { mockFolderStructure } from "./mockFileData";

/**
 * Folder file structure clone
 * Main features
 * - Folders
 *   - Contains Files
 *   - Contains Folders
 * - Open and close folders (expand feature)
 * - Create and delete files / folders
 */
const FolderFileStructureClone = () => {
  const [data, setData] = useState(mockFolderStructure);
  // Folder open - close status state
  const [folderStatus, setFolderStatus] = useState({});

  const updateFolderStatus = (folderId) => {
    setFolderStatus((prev) => ({ ...prev, [folderId]: !!!prev[folderId] }));
  };

  const ListStructure = ({ nodes }) => {
    return (
      <div className="node-list-container">
        {nodes.map(({ id, name, isFolder, children }) => {
          return (
            <div className="node-element" key={id}>
              {isFolder && (
                <button
                  className="node-expand"
                  onClick={() => updateFolderStatus(id)}
                >
                  {folderStatus[id] ? "-" : "+"}
                </button>
              )}
              <span>{name}</span>
              {isFolder && children && folderStatus[id] && (
                <ListStructure nodes={children} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="vs-file-explorer-clone">
      <ListStructure nodes={data} />
    </div>
  );
};

export default FolderFileStructureClone;
