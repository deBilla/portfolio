import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function AboutImg() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the gifs here
    setLoading(false);
  }, []);

  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {loading ? (
        <Spinner />
      ) : (
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./coding.svg"
        />
      )}
    </div>
  );
}
