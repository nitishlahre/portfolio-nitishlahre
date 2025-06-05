import Image from "next/image";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loader ${!isVisible ? "hidden" : ""}`}>
      <div className="loader-content">
        <Image
          className="loader-image"
          src="/loader/sunflo.png"
          width={70}
          height={70}
          alt="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
