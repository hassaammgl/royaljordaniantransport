import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(data) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <div className="font-1">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {children}
    </div>
  );
};

export default Wrapper;
