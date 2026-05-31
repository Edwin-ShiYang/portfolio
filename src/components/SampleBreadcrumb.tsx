import { useNavigate, useParams } from "react-router-dom";
import { SlashIcon, ChevronDownIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SampleBreadcrumb = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Breadcrumb className="flex justify-center mb-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Projects
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => navigate("/work-samples/DFS")}>
                DFS
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/work-samples/TGP1")}>
                TGP1
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/work-samples/TGP2")}>
                TGP2
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  navigate("/work-samples/library-management-system")
                }
              >
                Library Management System
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/work-samples/twitter-clone")}
              >
                Twitter Clone
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() =>
                  navigate("/work-samples/real-time-chat-application")
                }
              >
                Real-time Chat Application
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="w-[185px]">
            {params.projectId
              ?.split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default SampleBreadcrumb;
