"use client";
import CreateWorkspaceForm from "@/features/workspaces/components/create-workspace-form";

const HomePage = () => {
  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceForm onCancel={() => {}} />
    </div>
  );
};

export default HomePage;
