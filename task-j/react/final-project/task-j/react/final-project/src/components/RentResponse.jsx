export default function RentResponse({ response }) {
  if (!response) return null;

  return (
    <div className="mt-10 bg-orange-100 p-4 rounded max-w-lg mx-auto">
      <h3 className="text-lg font-semibold text-orange-900 mb-2">Form submitted successfully</h3>
      <pre className="text-sm bg-white p-3 rounded border border-orange-300 overflow-auto">
        {JSON.stringify(response.json, null, 2)}
      </pre>
    </div>
  );
}
