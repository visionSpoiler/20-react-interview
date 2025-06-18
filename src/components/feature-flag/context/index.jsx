import featureFlagsDataServiceCall from "../data";
import { FeatureFlagsContext } from "./feature-flag-context";
import { useEffect, useState } from "react";

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    setLoading(true)
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response)
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchFeatureFlags()
  },[])

  return (
    <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
