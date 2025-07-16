"use client"

import { useState } from "react"
import { Search, Plus, ChevronDown, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Profile {
  status: "Pending Review" | "Under Review" | "Approved" | "Rejected"
  name: string
  type: "Individual" | "Entity"
  group: string
  created: string
  modified: string
}

const profiles: Profile[] = [
  {
    status: "Pending Review",
    name: "John Anderson",
    type: "Individual",
    group: "Token Purchasers",
    created: "2025-03-14 10:32:38 PM",
    modified: "2025-03-14 10:32:38 PM",
  },
  {
    status: "Under Review",
    name: "Blockchain Ventures Ltd",
    type: "Entity",
    group: "Grant Recipients",
    created: "2025-03-14 09:41:04 PM",
    modified: "2025-03-14 09:28:12 PM",
  },
  {
    status: "Pending Review",
    name: "DeFi Solutions Group",
    type: "Entity",
    group: "Internal Partners",
    created: "2025-03-14 08:37:01 PM",
    modified: "2025-03-14 08:39:25 PM",
  },
  {
    status: "Pending Review",
    name: "Web3 Technologies Inc",
    type: "Entity",
    group: "Hackathon Winners",
    created: "2025-03-14 07:24:59 PM",
    modified: "2025-03-14 07:25:40 PM",
  },
  {
    status: "Pending Review",
    name: "Crypto Research Foundation",
    type: "Entity",
    group: "Grant Recipients",
    created: "2025-03-14 06:20:10 PM",
    modified: "2025-03-14 06:21:10 PM",
  },
]

export default function ProfilesMockup({ title }: { title: string }) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProfiles = profiles.filter((profile) => profile.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="border-b px-6 py-4">
        <h4 className="font-medium text-[#2c2e2e]">{title}</h4>
      </div>

      <div className="flex-1 p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative w-full sm:w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search profiles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#bed903] focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="text-[#2c2e2e] border-[#2c2e2e] hover:bg-[#bed903]/10">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button size="sm" className="bg-[#bed903] text-[#2c2e2e] hover:bg-[#bed903]/90 ml-auto sm:ml-0">
              <Plus className="h-4 w-4 mr-2" />
              Create Profile
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-auto border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">
                  Status
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Name
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  Type
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  Group
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </TableHead>
                <TableHead className="hidden lg:table-cell">
                  Created
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </TableHead>
                <TableHead className="hidden lg:table-cell">
                  Last Modified
                  <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProfiles.map((profile, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        profile.status === "Under Review"
                          ? "bg-[#bed903]/20 text-[#2c2e2e]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {profile.status}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">{profile.name}</TableCell>
                  <TableCell className="hidden sm:table-cell">{profile.type}</TableCell>
                  <TableCell className="hidden sm:table-cell">{profile.group}</TableCell>
                  <TableCell className="hidden lg:table-cell text-gray-600">{profile.created}</TableCell>
                  <TableCell className="hidden lg:table-cell text-gray-600">{profile.modified}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
