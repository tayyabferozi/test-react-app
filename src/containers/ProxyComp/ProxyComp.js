import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const ProxyComp = () => {
  const history = useHistory();
  const { sessionId, status } = useParams();

  useEffect(() => {
    history.replace(`/orders/${sessionId}/${status}`);
  }, [history, sessionId, status]);

  return <div></div>;
};

export default ProxyComp;
