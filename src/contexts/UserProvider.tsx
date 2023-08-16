import { Dispatch, SetStateAction, createContext, useState } from "react";

interface UserContextValues {
  user: ValidUser;
  setUser: Dispatch<SetStateAction<ValidUser>>; 
}

export const UserContext = createContext({} as UserContextValues);

export default function AuthProvider({
  children,
}: { children: JSX.Element | JSX.Element[] }) {
  const [user, setUser] = useState<ValidUser>({
    user_id: 0,
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    token: "",
  });

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
