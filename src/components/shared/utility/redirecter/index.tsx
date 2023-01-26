import { CircularProgress } from "@mui/material";
import { addToHistory } from "@redux/slices/navigation";
import { useAppDispatch } from "@redux/store";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface RedirecterProps {
  children: ReactNode;
}

/* used for route protection */
const Redirecter: React.FC<RedirecterProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [session, loading] = useSession();
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress size={60} variant="indeterminate" />
      </div>
    );
  }

  if (!session) {
    dispatch(addToHistory(router.route));
    router.push("/login");
    return null;
  }

  return <>{children}</>;
};

export default Redirecter;
