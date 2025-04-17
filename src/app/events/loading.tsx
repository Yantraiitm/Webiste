export default function EventsLoading() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-t-blue-500 border-gray-700 animate-spin"></div>
        <p className="text-gray-400">Loading events...</p>
      </div>
    </div>
  )
}