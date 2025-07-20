import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const PaginationBar = ({current, setCurrent, noOfPages}) => {
    const moveBack = () => {
        setCurrent(prev => prev - 1);
    }
    const moveForward = () => {
        setCurrent(prev => prev + 1);
    }
    return (
      <div className="pagination-bar">
        <button className="page-number" onClick={moveBack} disabled={current === 0}><FaAngleLeft/></button>
        {
          // Array.keys -> returns a new Array Iterator object that contains the keys for each index in the array.
          [...Array(noOfPages).keys()].map((n) => {
            return (
              <button
                className={`page-number ${current === n ? 'active' : ''}`}
                key={n}
                onClick={() => setCurrent(n)}
              >
                {n+1}
              </button>
            );
          })
        }
         <button className="page-number" onClick={moveForward} disabled={current === noOfPages -1}><FaAngleRight/></button>
      </div>
    );
  };

export default PaginationBar;