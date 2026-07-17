import React from "react";

import { Button } from "./ui/button";
import { scroller } from "react-scroll";

interface TableOfContentProps {
  details: Detail[];
}

const TableOfContent: React.FC<TableOfContentProps> = ({ details }) => {
  return (
    <div className="fixed hidden xl:block left-6 top-30">
      <div className="flex flex-col">
        {details.map((detail) => (
          <Button
            key={detail?.title}
            variant="ghost"
            onClick={() => {
              scroller.scrollTo(detail?.title, {
                duration: 800,
                smooth: true,
                offset: -100,
              });
            }}
          >
            {detail?.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
