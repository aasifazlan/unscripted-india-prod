export default function ContributePage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Contribute</h1>

      <p className="mb-4 text-lg">
        Unscripted India is built for the people — and by the people.
      </p>

      <p className="mb-4">
        We welcome researchers, writers, students, and professionals who want to
        simplify complex topics and make information more accessible.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How You Can Contribute</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Write simplified summaries of laws and policies</li>
        <li>Break down government schemes</li>
        <li>Review and improve existing content</li>
        <li>Suggest topics that need coverage</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Guidelines</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Content must be factual and verifiable</li>
        <li>No political bias or propaganda</li>
        <li>Keep explanations simple and structured</li>
        <li>Sources must be cited wherever possible</li>
      </ul>

      <p className="mt-6">
        To contribute, reach out to us at{" "}
        <span className="font-semibold">contribute@unscriptedindia.in</span>
      </p>
    </main>
  );
}