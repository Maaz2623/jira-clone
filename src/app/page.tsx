import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const HomePage = () => {
  return (
    <div className="p-10 gap-6">
      <div className="gap-4 flex">
        <Button variant={`primary`}>Primary</Button>
        <Button variant={`secondary`}>Secondary</Button>
        <Button variant={`destructive`}>Destructive</Button>
        <Button variant={`ghost`}>Ghost</Button>
        <Button variant={`muted`}>Muted</Button>
        <Button variant={`outline`}>Outline</Button>
        <Button variant={`tertiary`}>Tertiary</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="mt-8">
        <Input className="w-1/4"/>
      </div>
    </div>
  );
};

export default HomePage;
