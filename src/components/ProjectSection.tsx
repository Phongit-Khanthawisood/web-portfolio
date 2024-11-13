import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, Download, LayoutGrid, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CardDetails, ProjectCard } from "./ProjectCard";

const temp: CardDetails = {
  projectName: "Project name",
  tag: ["Illustration", "3D Render"],
  tagColor: "white",
  imgUrl: "/profile/profile-icon.jpg",
  description:
    "This action cannot be undone. This will permanently delete youraccount and remove your data from our servers.",
};

export function ProjectSection({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={cn("mt-16 w-full", className)}>
      <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
        <Sparkles className="size-4 stroke-2" /> Project
      </p>
      <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold text-transparent">
        Check out my featured projects
      </h2>
      <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-8">
        <ProjectCard cardDetails={temp} />
        <ProjectCard cardDetails={temp} />
        <ProjectCard cardDetails={temp} />
        <ProjectCard cardDetails={temp} />
      </div>
    </div>
  );
}