import React from "react";
import { Link } from "react-router-dom";

const WritingAnalysisDetail = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Back to Overview
      </Link>

      <h1 className="text-4xl font-bold mb-8">Student Writing Analysis</h1>

      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Writing Pattern Analysis</h2>
          <p className="mb-6">
            Reich and Baumer (2023) present comprehensive research on how
            writing pattern analysis serves as a crucial tool in maintaining
            academic integrity. Their studies show that individual writing
            styles, much like fingerprints, contain unique characteristics that
            can be tracked and analyzed over time.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Establishing Writing Baselines
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Individual Style Profiling</h4>
              <p className="mb-4">
                The process of establishing a writing baseline involves several
                key components:
              </p>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">Initial Assessment:</span>{" "}
                  Students complete a series of controlled writing tasks under
                  supervised conditions. These assignments span different genres
                  and topics to capture style variations across contexts.
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Pattern Documentation:</span>{" "}
                  The system records specific aspects of writing style,
                  including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Typical sentence length and variation</li>
                  <li>Vocabulary preferences and range</li>
                  <li>Common grammatical constructions</li>
                  <li>Characteristic error patterns</li>
                  <li>Transition word usage</li>
                </ul>
                <p>
                  <span className="font-semibold">Ongoing Calibration:</span>{" "}
                  The baseline is continuously updated with new verified writing
                  samples, allowing the profile to evolve with the student's
                  developing skills.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">
                Pattern Recognition Systems
              </h4>
              <p className="mb-4">
                Holmes et al. (2019) describe sophisticated pattern recognition
                systems that analyze multiple dimensions of writing:
              </p>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">Linguistic Analysis:</span>{" "}
                  Advanced algorithms examine the structural elements of
                  writing, including:
                </p>
                <div className="pl-6 mb-4">
                  <p>• Syntax patterns and preferences</p>
                  <p>• Word choice tendencies</p>
                  <p>• Punctuation habits</p>
                  <p>• Paragraph organization</p>
                </div>
                <p className="mb-2">
                  <span className="font-semibold">
                    Stylometric Measurements:
                  </span>{" "}
                  Quantitative analysis of writing style through:
                </p>
                <div className="pl-6">
                  <p>• Vocabulary richness metrics</p>
                  <p>• Sentence complexity scores</p>
                  <p>• Readability indices</p>
                  <p>• Function word usage patterns</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Advanced Analysis Methods</h2>
          <p className="mb-6">
            Major and Francis (2023) outline several sophisticated methods for
            analyzing student writing:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Computational Linguistics Approaches
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  Natural Language Processing
                </h4>
                <p className="mb-4">
                  Modern writing analysis employs advanced NLP techniques to
                  understand writing patterns:
                </p>
                <div className="pl-6">
                  <p className="mb-2">
                    <span className="font-semibold">Semantic Analysis:</span>{" "}
                    Examines how ideas are connected and developed throughout
                    the text, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Topic coherence and progression</li>
                    <li>Argument structure development</li>
                    <li>Idea linking patterns</li>
                    <li>Contextual relationships</li>
                  </ul>
                  <p className="mb-2">
                    <span className="font-semibold">Discourse Analysis:</span>{" "}
                    Studies how language is used in extended written
                    communication:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Rhetorical strategies</li>
                    <li>Voice consistency</li>
                    <li>Argumentative patterns</li>
                    <li>Organizational preferences</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  Machine Learning Integration
                </h4>
                <p className="mb-4">
                  Cobbe et al. (2023) discuss how machine learning enhances
                  writing analysis:
                </p>
                <div className="pl-6">
                  <p className="mb-2">
                    <span className="font-semibold">Pattern Recognition:</span>{" "}
                    ML algorithms identify complex patterns in:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Writing style evolution over time</li>
                    <li>Response patterns to different prompts</li>
                    <li>Adaptation to various writing contexts</li>
                  </ul>
                  <p>
                    <span className="font-semibold">Predictive Analysis:</span>{" "}
                    Systems can predict expected writing patterns and flag
                    significant deviations that might indicate external
                    assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Practical Implementation</h2>
          <p className="mb-6">
            The practical implementation of writing analysis systems requires
            careful consideration of various factors:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Integration Strategies
              </h3>
              <p className="mb-4">
                Research by Holmes et al. (2019) identifies key implementation
                considerations:
              </p>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">System Integration:</span>{" "}
                  Writing analysis tools must be seamlessly integrated with:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Learning management systems</li>
                  <li>Assignment submission platforms</li>
                  <li>Feedback systems</li>
                  <li>Assessment tools</li>
                </ul>
                <p className="mb-2">
                  <span className="font-semibold">Privacy Considerations:</span>{" "}
                  Implementation must address:
                </p>
                <ul className="list-disc pl-6">
                  <li>Data protection regulations</li>
                  <li>Student privacy rights</li>
                  <li>Secure storage of writing profiles</li>
                  <li>Ethical use of collected data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WritingAnalysisDetail;
