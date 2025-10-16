"use client"

export default function PlatformMockup() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm" />

      {/* Platform mockup - simulating the CryptoComply interface */}
      <div className="absolute inset-0 opacity-30 blur-[2px]">
        {/* Top Navigation Bar */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <div className="flex items-center gap-4">
            <div className="w-32 h-8 bg-gray-300 rounded" />
            <div className="w-24 h-6 bg-gray-200 rounded" />
            <div className="w-24 h-6 bg-gray-200 rounded" />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="w-32 h-8 bg-[#bed903] rounded" />
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900 p-4 space-y-2">
            <div className="h-10 bg-gray-800 rounded" />
            <div className="h-10 bg-gray-800 rounded" />
            <div className="h-10 bg-gray-700 rounded" />
            <div className="h-10 bg-gray-800 rounded" />
          </div>

          {/* Main Panel */}
          <div className="flex-1 p-8 space-y-6 overflow-hidden">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-8 w-48 bg-gray-300 rounded" />
                <div className="h-10 w-32 bg-[#bed903] rounded" />
              </div>
              <div className="h-6 w-64 bg-gray-200 rounded" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm space-y-3">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-8 w-32 bg-gray-300 rounded" />
                <div className="h-3 w-20 bg-red-200 rounded" />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm space-y-3">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-8 w-32 bg-gray-300 rounded" />
                <div className="h-3 w-20 bg-gray-200 rounded" />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm space-y-3">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-8 w-32 bg-gray-300 rounded" />
                <div className="h-3 w-20 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Risk Analysis Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
              <div className="h-6 w-40 bg-gray-300 rounded" />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-24 bg-red-200 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-24 bg-yellow-200 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-24 bg-green-200 rounded" />
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
              <div className="h-6 w-48 bg-gray-300 rounded" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-100">
                    <div className="h-4 w-full bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
