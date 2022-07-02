import { useEffect, useState } from "react";

const useLoader = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return [loading, setLoading];
};
export default useLoader;
