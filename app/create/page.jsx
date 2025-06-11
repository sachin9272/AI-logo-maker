"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        />
      ) : null}
      <div className="flex justify-between items-center">
        {step != 1 && (
          <Button onClick={(prev) => setStep(prev - 1)} variant="outline">
           { console.log('Prev-->', state)}
            <ArrowLeft /> Previous
          </Button>
        )}
        <Button onClick={(prev) => setStep(prev + 1)}>
          Continue <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CreateLogo;
