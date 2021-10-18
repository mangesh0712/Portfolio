import React, { useEffect, useState } from "react";

function MyCv() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center h-96">
          <div className="w-28 h-28 border-4 border-gray-900  animate-spin"></div>
        </div>
      )}
      <iframe
        title="MyCv"
        className={`${loading && "hidden"} h-screen rounded-md bg-white w-full`}
        src="https://drive.google.com/file/d/15WakUkvN7IIBKzCBtL3h5AnQjwDgJSSn/preview"
        allow="autoplay"
      ></iframe>
    </>
  );
}

export default MyCv;
