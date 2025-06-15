import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

const LogoColorPallete = ({ onHandleInputChange }) => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((palette, index) => (
          <div
            className={`flex p-1 ${
              selectedOption == palette.name &&
              "border-2 rounded-lg border-primary"
            }`}
            key={index}
          >
            {palette?.colors.map((color, index) => (
              <div
                className="h-24 w-full"
                key={index}
                onClick={() => {
                  setSelectedOption(palette.name);
                  onHandleInputChange(palette.name);
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoColorPallete;
