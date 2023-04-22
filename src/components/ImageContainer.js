import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function ImageContainer(props) {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoading(false);
      setImageSrc(props.src);
    };
    image.src = props.src;
  }, [props.src]);

  const { src, alt, ...rest } = props;

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <img src={imageSrc} alt={props.alt} {...rest} />
      )}
    </div>
  );
}