import ReactDOM from "react-dom/client";
import React from "react";
import QRCodeCardComponent from "./scan-qr/QRCodeCardComponent";
import FolderFileStructureClone from "./folder-file-structure/FolderFileStructureClone";
import AutoComplete from "./auto-complete/AutoComplete";
import PaginationMain from "./pagination/PaginationMain"

const AppLayout = () => {
    return (<div className="components-container">
        {/* <QRCodeCardComponent/> */}
        {/* <FolderFileStructureClone /> */}
        {/* <AutoComplete /> */}
        <PaginationMain />
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);