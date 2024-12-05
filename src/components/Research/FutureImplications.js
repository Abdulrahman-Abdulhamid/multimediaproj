import React from "react";
import Card from "../common/Card";

const FutureImplications = () => {
  return (
    <section id="future" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Future Implications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="AI Literacy"
          content="Integration of AI understanding as a core academic skill."
          link="future-implications"
        />
        <Card
          title="Assessment Evolution"
          content="Development of new methods for evaluating student work in an AI-enhanced environment."
          link="future-implications"
        />
      </div>
    </section>
  );
};

export default FutureImplications;
