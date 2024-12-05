import React from "react";
import { Link } from "react-router-dom";

const FutureImplicationsDetail = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Back to Overview
      </Link>

      <h1 className="text-4xl font-bold mb-8">
        Future Implications of AI in Education
      </h1>

      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Emerging Educational Paradigms
          </h2>
          <p className="mb-6">
            Reich and Baumer (2023) identify fundamental shifts in educational
            approaches that will shape the future of learning:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">
              AI Literacy Development
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Core Competency Evolution</h4>
              <p className="mb-4">
                Research indicates several key areas where AI literacy will
                become fundamental:
              </p>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">
                    Technical Understanding:
                  </span>{" "}
                  Students will need to develop:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Understanding of AI capabilities and limitations</li>
                  <li>
                    Ability to effectively prompt and interact with AI systems
                  </li>
                  <li>Skills in evaluating AI-generated outputs</li>
                  <li>Knowledge of AI ethics and implications</li>
                </ul>
                <p className="mb-2">
                  <span className="font-semibold">
                    Critical Thinking Enhancement:
                  </span>{" "}
                  Focus areas include:
                </p>
                <ul className="list-disc pl-6">
                  <li>Analysis of AI-generated content reliability</li>
                  <li>Understanding of AI bias and limitations</li>
                  <li>Development of verification strategies</li>
                  <li>Integration of AI insights with human creativity</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Curriculum Integration</h4>
              <p className="mb-4">
                Holmes et al. (2019) outline how AI literacy will be integrated
                across subjects:
              </p>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">
                    Cross-Disciplinary Implementation:
                  </span>
                </p>
                <div className="pl-6 mb-4">
                  <p>• Language Arts: AI-assisted writing and editing</p>
                  <p>• Mathematics: Problem-solving with AI tools</p>
                  <p>• Sciences: Data analysis and experimentation</p>
                  <p>• Social Studies: Source evaluation and research</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Technological Advancements
          </h2>
          <p className="mb-6">
            Major and Francis (2023) identify key technological developments
            that will impact education:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Advanced Learning Systems
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  Personalized Learning Environments
                </h4>
                <p className="mb-4">
                  Future learning environments will feature:
                </p>
                <div className="pl-6">
                  <p className="mb-2">
                    <span className="font-semibold">
                      Adaptive Learning Paths:
                    </span>
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Real-time skill assessment and adjustment</li>
                    <li>Customized content delivery</li>
                    <li>Individual pace optimization</li>
                    <li>Learning style adaptation</li>
                  </ul>
                  <p className="mb-2">
                    <span className="font-semibold">
                      Interactive Assessment Systems:
                    </span>
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Continuous performance monitoring</li>
                    <li>Dynamic difficulty adjustment</li>
                    <li>Comprehensive skill evaluation</li>
                    <li>Immediate feedback mechanisms</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Integration Platforms</h4>
                <p className="mb-4">
                  Cobbe et al. (2023) predict the development of comprehensive
                  platforms that will:
                </p>
                <div className="pl-6">
                  <ul className="list-disc pl-6">
                    <li>Unify learning management systems with AI tools</li>
                    <li>Provide seamless content creation and assessment</li>
                    <li>Enable collaborative learning experiences</li>
                    <li>Support multi-modal learning approaches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pedagogical Evolution</h2>
          <p className="mb-6">
            Research indicates significant changes in teaching approaches:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                New Teaching Paradigms
              </h3>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">Role Transformation:</span>
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Teachers as learning facilitators and AI integration experts
                  </li>
                  <li>Focus on developing higher-order thinking skills</li>
                  <li>Emphasis on creativity and original thinking</li>
                  <li>Integration of AI-assisted teaching methods</li>
                </ul>
                <p className="mb-2">
                  <span className="font-semibold">Assessment Evolution:</span>
                </p>
                <ul className="list-disc pl-6">
                  <li>Process-oriented evaluation methods</li>
                  <li>Authentic assessment approaches</li>
                  <li>Continuous performance monitoring</li>
                  <li>Skills-based competency verification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Challenges and Opportunities
          </h2>
          <p className="mb-6">
            The future of AI in education presents both challenges and
            opportunities:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Key Considerations</h3>
              <div className="pl-6">
                <p className="mb-2">
                  <span className="font-semibold">Access and Equity:</span>
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Ensuring equal access to AI tools</li>
                  <li>Addressing technological disparities</li>
                  <li>Supporting diverse learning needs</li>
                  <li>Promoting inclusive AI integration</li>
                </ul>
                <p className="mb-2">
                  <span className="font-semibold">Ethical Considerations:</span>
                </p>
                <ul className="list-disc pl-6">
                  <li>Privacy protection frameworks</li>
                  <li>Data security measures</li>
                  <li>Ethical AI usage guidelines</li>
                  <li>Bias mitigation strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FutureImplicationsDetail;
