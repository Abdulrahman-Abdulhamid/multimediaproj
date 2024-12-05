import React from "react";
import Card from "../common/Card";

const AIDetection = () => {
  return (
    <section id="detection" className="py-12">
      <h2 className="text-3xl font-bold mb-8">
        AI Detection and Validation Methods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Current Detection Tools"
          content="Modern tools like Turnitin and GPTZero employ sophisticated algorithms to identify AI-generated content through pattern analysis."
          link="detection-tools"
        />
        <Card
          title="Student Writing Analysis"
          content="Systems that track individual writing patterns over time to create baseline profiles and identify significant deviations."
          link="writing-analysis"
        />
      </div>
    </section>
  );
};

export default AIDetection;
