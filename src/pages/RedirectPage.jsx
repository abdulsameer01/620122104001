import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RedirectPage() {
  const { shortId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOriginalUrl() {
      try {
        const res = await axios.get(`http://localhost:5000/${shortId}`);
        if (res.data.originalUrl) {
          window.location.href = res.data.originalUrl;
        }
      } catch (err) {
        setError("Invalid or expired shortcode");
      }
    }
    fetchOriginalUrl();
  }, [shortId]);

  return (
    <div className="text-center mt-12">
      {error ? <p className="text-red-600">{error}</p> : <p>Redirecting...</p>}
    </div>
  );
}

export default RedirectPage;
