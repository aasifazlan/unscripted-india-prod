export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">About Unscripted India</h1>

      <p className="mb-4 text-lg">
        Unscripted India is a platform built to simplify how Indians understand
        laws, policies, and governance. We believe that access to clear,
        unbiased, and simplified information is essential for a functioning
        democracy.
      </p>

      <p className="mb-4">
        Every day, important policies, laws, and decisions are made that affect
        millions — yet most people struggle to understand them due to complex
        language, legal jargon, or lack of accessible summaries.
      </p>

      <p className="mb-4">
        Our mission is to bridge that gap by breaking down complex topics into
        simple, structured, and easy-to-read content — without political bias,
        noise, or manipulation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Simplify laws, policies, and government decisions</li>
        <li>Provide structured and searchable content</li>
        <li>Enable users to explore topics across states and sectors</li>
        <li>Use AI responsibly to enhance understanding, not replace truth</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Our Vision</h2>
      <p>
        To become India’s most trusted platform for understanding public policy,
        governance, and legal frameworks — in a way that is accessible to
        everyone, not just experts.
      </p>
    </main>
  );
}