import React, { useState } from "react";
import { mockFolderStructure } from "./mockFileData";
import {
  FaFolderPlus,
  FaTrash,
  FaAngleRight,
  FaAngleDown,
  FaFileCirclePlus,
} from "react-icons/fa6";

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

  const addAFolder = (nodeList, parentId, newFolder) => {
    nodeList.forEach((item) => {
      if (item.id === parentId) {
        setFolderStatus((prev) => ({ ...prev, [parentId]: true }));
        return item.children.push(newFolder);
      }
      if (item.children) {
        addAFolder(item.children, parentId, newFolder);
      }
    });
  };

  const addFolderHandler = (parentId, isFolder = true) => {
    const name = prompt("Enter a name");
    if (!name?.length) return;
    const newNode = {
      id: Date.now(),
      name,
      isFolder,
      children: [],
    };

    setData((prev) => {
      addAFolder(prev, parentId, newNode);
      return prev;
    });
  };

  const deleteFileOrFolder = (nodeList, id) => {
    const list = nodeList?.filter((item) => {
      item.children = deleteFileOrFolder(item.children, id);
      return item.id !== id;
    });

    return list;
  };

  const deleteHandler = (id) => {
    setData((prev) => {
      return deleteFileOrFolder(prev, id);
    });
  };

  const ListStructure = ({ nodes }) => {
    return (
      <div className="node-list-container">
        {nodes?.map(({ id, name, isFolder, children }) => {
          return (
            <div className="node-element" key={id}>
              {isFolder && (
                <button
                  className="node-expand"
                  onClick={() => updateFolderStatus(id)}
                >
                  {folderStatus[id] ? <FaAngleDown /> : <FaAngleRight />}
                </button>
              )}
              <span className={`${isFolder ? "folder" : "file"}-name`}>
                {name}
              </span>
              {isFolder && (
                <>
                  <button
                    className="node-create-folder"
                    onClick={() => addFolderHandler(id)}
                  >
                    <FaFolderPlus />
                  </button>
                  <button
                    className="node-create-folder"
                    onClick={() => addFolderHandler(id, false)}
                  >
                    <FaFileCirclePlus />
                  </button>
                </>
              )}
              <button
                className="node-create-folder"
                onClick={() => deleteHandler(id)}
              >
                <FaTrash />
              </button>
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
      <h2>File Explorer</h2>
      <ListStructure nodes={data} />
    </div>
  );
};

export default FolderFileStructureClone;
