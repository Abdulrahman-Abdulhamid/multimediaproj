import React from "react";
import Card from "../common/Card";

const TeachingStrategies = () => {
  return (
    <section id="strategies" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Teaching Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="AI-Assisted Brainstorming"
          content="Structured approaches for using AI in early stages of writing and research."
          link="teaching-strategies"
        />
        <Card
          title="Critical Evaluation"
          content="Methods for teaching students to analyze and modify AI-generated content."
          link="teaching-strategies"
        />
        <Card
          title="Documentation Process"
          content="Systems for tracking student contributions and learning progression."
          link="teaching-strategies"
        />
      </div>
    </section>
  );
};

export default TeachingStrategies;
