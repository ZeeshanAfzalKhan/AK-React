import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {

    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    }
}, []);

  return isOnline;
}

export default useOnlineStatus;