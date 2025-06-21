"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoDesc from "./_components/LogoDesc";
import LogoColorPallete from "./_components/LogoPallete";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";
import PricingModel from "./_components/PricingModel";

const CreateLogo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      field: value,
    }));
  };

  return (
    <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
          formData={formData}
        />
      ) : step == 2 ? (
        <LogoDesc onHandleInputChange={(v) => onHandleInputChange("desc", v)} 
        formData={formData}
        />
      ) : step == 3 ? (
        <LogoColorPallete
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
          formData={formData}
        />
      ) : step == 4 ? (
        <LogoDesigns
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
          formData={formData}
        />
      ) : step == 5 ? (
        <LogoIdea onHandleInputChange={(v) => onHandleInputChange("idea", v)} 
        formData={formData}
        />
      ): step == 6 ? (
        <PricingModel
        formData={formData}
        onHandleInputChange={(v)=>onHandleInputChange('pricing', v)}
        />
      )
      : null}
      <div className="flex justify-between items-center">
        {step != 1 && (
          <Button onClick={() => setStep(step - 1)} variant="outline">
            <ArrowLeft /> Previous
          </Button>
        )}
        <Button onClick={() => setStep(step + 1)}>
          Continue <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CreateLogo;
