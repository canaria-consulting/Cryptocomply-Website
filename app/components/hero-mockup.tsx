"use client"

import { useState } from "react"
import { Search, Plus, ChevronDown, FileX } from "lucide-react"

interface Profile {
  status:
    | "Pending Review"
    | "Under Review"
    | "RFI Sent"
    | "RFI Responded"
    | "Escalated"
    | "Approved"
    | "Declined"
    | "Archived"
  name: string
  type: "Individual" | "Entity"
  group: string
  created: string
  modified: string
}

const profiles: Profile[] = [
  {
    status: "Pending Review",
    name: "J. Anderson",
    type: "Individual",
    group: "Bug Bounty Payees",
    created: "2025-03-14 10:32:38 PM",
    modified: "2025-03-14 10:32:38 PM",
  },
  {
    status: "Under Review",
    name: "BV Limited",
    type: "Entity",
    group: "Grant Recipients",
    created: "2025-03-14 09:41:04 PM",
    modified: "2025-03-14 09:28:12 PM",
  },
  {
    status: "RFI Sent",
    name: "DeFi Labs",
    type: "Entity",
    group: "Internal Partners",
    created: "2025-03-14 08:37:01 PM",
    modified: "2025-03-14 08:39:25 PM",
  },
  {
    status: "Approved",
    name: "Web3 Tech",
    type: "Entity",
    group: "Vendors",
    created: "2025-03-14 07:24:59 PM",
    modified: "2025-03-14 07:25:40 PM",
  },
  {
    status: "Escalated",
    name: "CR Fund",
    type: "Entity",
    group: "Token Purchasers",
    created: "2025-03-14 06:20:10 PM",
    modified: "2025-03-14 06:21:10 PM",
  },
]

// Redesigned status styles - more subtle and delicate
const statusColors: Record<Profile["status"], { bg: string; text: string; border?: string }> = {
  "Pending Review": { bg: "bg-gray-50", text: "text-gray-600", border: "border border-gray-200" },
  "Under Review": { bg: "bg-[#64748B]/10", text: "text-[#64748B]" },
  "RFI Sent": { bg: "bg-[#bed903]/10", text: "text-[#2c2e2e]" },
  "RFI Responded": { bg: "bg-purple-50", text: "text-purple-600" },
  Escalated: { bg: "bg-orange-50", text: "text-orange-600" },
  Approved: { bg: "bg-green-50", text: "text-green-600" },
  Declined: { bg: "bg-red-50", text: "text-red-600" },
  Archived: { bg: "bg-gray-50", text: "text-gray-500" },
}

export default function HeroMockup() {
  const [searchQuery, setSearchQuery] = useState("")

  // Enhanced search function that searches across all columns
  const filteredProfiles = profiles.filter((profile) => {
    if (!searchQuery.trim()) return true

    const query = searchQuery.toLowerCase()

    // Search across all relevant fields
    return (
      profile.name.toLowerCase().includes(query) ||
      profile.type.toLowerCase().includes(query) ||
      profile.group.toLowerCase().includes(query) ||
      profile.status.toLowerCase().includes(query) ||
      profile.created.toLowerCase().includes(query) ||
      profile.modified.toLowerCase().includes(query)
    )
  })

  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 min-h-[400px] sm:min-h-[500px] flex flex-col">
      {/* Header */}
      <div className="border-b px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between bg-white">
        <h2 className="text-sm sm:text-base md:text-lg font-medium text-[#2c2e2e]">Profiles</h2>
        <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#bed903] text-[#2c2e2e] rounded-md text-xs sm:text-sm font-medium flex items-center select-none pointer-events-none">
          <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5" />
          <span className="hidden xs:inline">Create Profile</span>
          <span className="xs:hidden">Create</span>
        </button>
      </div>

      <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-6 flex-1 flex flex-col">
        {/* Search */}
        <div className="flex items-center">
          <div className="relative w-full xs:w-[280px] sm:w-[320px]">
            <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search all columns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-7 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 border rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#bed903] focus:border-transparent"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto flex-1 flex flex-col min-h-[250px] sm:min-h-[300px] -mx-3 sm:-mx-0">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 sm:py-3 px-3 text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Status
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left py-2 sm:py-3 px-3 text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Name
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left py-2 sm:py-3 px-3 text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  <div className="flex items-center">
                    Type
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left py-2 sm:py-3 px-3 text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  <div className="flex items-center">
                    Group
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left py-2 sm:py-3 px-3 text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  <div className="flex items-center">
                    Created
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </th>
                <th className="text-left py-2 sm:py-3 px-3 text-[10px] xs:text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  <div className="flex items-center">
                    Last Modified
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="relative">
              {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 sm:py-3 px-3">
                      <span
                        className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-[10px] xs:text-xs font-medium ${
                          statusColors[profile.status].bg
                        } ${statusColors[profile.status].text} ${statusColors[profile.status].border || ""}`}
                      >
                        {profile.status}
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 px-3 text-xs sm:text-sm font-medium text-[#2c2e2e]">{profile.name}</td>
                    <td className="py-2 sm:py-3 px-3 text-xs sm:text-sm hidden sm:table-cell">{profile.type}</td>
                    <td className="py-2 sm:py-3 px-3 text-xs sm:text-sm hidden sm:table-cell">{profile.group}</td>
                    <td className="py-2 sm:py-3 px-3 text-xs text-gray-500 hidden lg:table-cell">{profile.created}</td>
                    <td className="py-2 sm:py-3 px-3 text-xs text-gray-500 hidden lg:table-cell">{profile.modified}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 sm:py-16">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FileX className="h-8 w-8 sm:h-12 sm:w-12 text-gray-300 mb-2" />
                      <h3 className="text-base sm:text-lg font-medium text-gray-500">No profiles found</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Try adjusting your search criteria</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
