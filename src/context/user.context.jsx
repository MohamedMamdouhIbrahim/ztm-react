import { createContext, useEffect, useState } from "react";
import { onAuthChangeStateListener } from "../utilities/firebase/firebase.utility";

//as the actual value youy want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscripe = onAuthChangeStateListener((user) => {
      console.log("the user");
      console.log(user);
      setCurrentUser(user);
    });

    return () => {
      unsubscripe();
    };
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
