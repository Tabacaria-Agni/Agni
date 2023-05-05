import { useState, useEffect } from "react";
import { FadeLoader, SyncLoader } from "react-spinners";
import { StyledLoading } from "./styledLoading";

export const LoadingComponent = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <StyledLoading>
      {loading ? (
        <FadeLoader
          color="#CDB587"
          loading={loading}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
          <p>Carregando...</p>
        
      )}
    </StyledLoading>
  );
};