import { getWorkspaces } from "@/features/workspaces/actions";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const workspaces = await getWorkspaces();

  if (workspaces.total === 0) {
    redirect("/workspaces/create");
  } else {
    redirect(`/workspaces/${workspaces.documents[0].$id}`);
  }

  return <div>Home Page</div>;
};

export default HomePage;
