import { useState } from "react";

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("fausmaggioni5@gmail.com");
    setHasCopied(true);

    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="xl:col-span-1 xl:row-span-2">
      <div className="grid-container">
        <img
          src="/assets/grid4.png"
          alt="grid4"
          className="w-full md:h-[126px] sm:object-top sm:h-[276px] h-fit object-contain"
        />

        <div className="space-y-2">
          <p className="grid-subtext text-center"> Get in touch </p>
          <div className="copy-container" onClick={handleCopy}>
            <img
              src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
              alt="copy"
            />

            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
              {" "}
              fausmaggioni5@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
