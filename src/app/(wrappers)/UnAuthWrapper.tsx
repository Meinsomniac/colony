import { redirect } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";

function UnAuthWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) redirect("/chat");
  else return children;
}

export default UnAuthWrapper;
