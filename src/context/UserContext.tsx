import { createContext } from "react";

export const UserContext = createContext<string | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const user = "Budi";

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
