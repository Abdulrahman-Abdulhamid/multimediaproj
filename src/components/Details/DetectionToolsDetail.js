import React from "react";
import { Link } from "react-router-dom";

const DetectionToolsDetail = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Back to Overview
      </Link>

      <h1 className="text-4xl font-bold mb-8">
        AI Detection Tools in Education
      </h1>

      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Current Detection Methods</h2>
          <p className="mb-6">
            Reich and Baumer's (2023) comprehensive research reveals that modern
            AI detection tools have evolved significantly to meet the challenges
            of increasingly sophisticated AI writing systems. Unlike early
            detection methods that relied on simple pattern matching, current
            tools employ multiple layers of analysis to identify AI-generated
            content.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Key Detection Tools</h3>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">GPTZero</h4>
              <p className="mb-4">
                GPTZero employs two primary metrics in its analysis:
              </p>
              <p className="mb-2">
                <span className="font-semibold">Perplexity Analysis:</span> This
                measures how random or predictable the text appears. Human
                writing typically shows more variability in its randomness
                patterns compared to AI-generated text, which often maintains a
                more consistent level of predictability throughout.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Burstiness Evaluation:</span>{" "}
                This examines the variations in sentence complexity and
                structure. Human writers tend to have "bursts" of complexity
                followed by simpler sentences, while AI typically maintains more
                uniform complexity levels.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Turnitin AI Detection</h4>
              <p className="mb-4">
                According to Holmes et al. (2019), Turnitin's AI detection
                system integrates several approaches:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <p className="mb-2">
                  <span className="font-semibold">Pattern Analysis:</span> The
                  system examines writing patterns at multiple levels - word
                  choice, sentence structure, and paragraph organization. It
                  looks for telltale signs of AI generation, such as
                  consistently perfect grammar or unusual consistency in
                  sentence length.
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Cross-Reference System:</span>{" "}
                  Turnitin maintains a vast database of known AI-generated text
                  patterns, allowing it to identify similarities with new
                  submissions. This database is continuously updated as AI
                  language models evolve.
                </p>
                <p>
                  <span className="font-semibold">
                    Integration with Plagiarism Detection:
                  </span>{" "}
                  The system combines AI detection with traditional plagiarism
                  checking, creating a comprehensive content authenticity
                  assessment.
                </p>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Content Authentication Systems
              </h4>
              <p className="mb-4">
                Modern content authentication systems, as described by Major and
                Francis (2023), employ sophisticated algorithms that analyze
                multiple dimensions of writing:
              </p>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">
                    Linguistic Fingerprinting:
                  </span>{" "}
                  These systems create a unique "fingerprint" of a writer's
                  style based on numerous factors including vocabulary usage,
                  sentence structure preferences, and typical error patterns.
                  This baseline is then used to identify potential deviations
                  that might indicate AI assistance.
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Contextual Analysis:</span>{" "}
                  The systems examine how ideas flow and connect within the
                  text. Human writing often includes subtle contextual links and
                  references that AI systems might miss or implement
                  differently.
                </p>
                <p>
                  <span className="font-semibold">Statistical Modeling:</span>{" "}
                  Advanced statistical models analyze the probability
                  distributions of various text features, identifying patterns
                  that are more likely to come from AI models versus human
                  writers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
          <p className="mb-6">
            Cobbe et al. (2023) outline the technical framework necessary for
            effective AI detection in educational settings. Their research
            emphasizes the importance of a multi-layered approach that combines
            various detection methods:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Core Detection Mechanisms
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Language Model Analysis</h4>
                <p>
                  The detection systems employ their own language models to
                  analyze text probability distributions. These models are
                  trained on vast datasets of both human and AI-generated
                  writing, allowing them to identify subtle patterns that
                  differentiate between the two. The analysis includes:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Token probability distribution analysis</li>
                  <li>Semantic coherence evaluation</li>
                  <li>Stylistic consistency checking</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  Pattern Recognition Algorithms
                </h4>
                <p>
                  Advanced pattern recognition algorithms examine multiple
                  aspects of the text simultaneously:
                </p>
                <div className="pl-6">
                  <p className="mb-2">
                    <span className="font-semibold">Syntactic Analysis:</span>{" "}
                    Examines sentence structure patterns, identifying unusual
                    consistencies that might indicate AI generation.
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Semantic Analysis:</span>{" "}
                    Evaluates the meaning and context of words and phrases,
                    looking for patterns in how ideas are connected and
                    developed.
                  </p>
                  <p>
                    <span className="font-semibold">Stylometric Analysis:</span>{" "}
                    Measures various statistical features of the text, including
                    vocabulary richness, sentence length variation, and
                    punctuation usage patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections continue... */}
      </div>
    </div>
  );
};

export default DetectionToolsDetail;
