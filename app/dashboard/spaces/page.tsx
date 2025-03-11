"use client"

import { useState } from "react"
import { Building2, Calendar, Clock, Edit, MoreHorizontal, Plus, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample spaces data
const spaces = [
  {
    id: "1",
    name: "Executive Suite A",
    type: "Office",
    capacity: 4,
    amenities: ["Wi-Fi", "Projector", "Whiteboard", "Coffee Machine"],
    status: "Available",
    hourlyRate: "$25",
    dailyRate: "$150",
    monthlyRate: "$2,800",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    name: "Conference Room B",
    type: "Meeting Room",
    capacity: 12,
    amenities: ["Wi-Fi", "Projector", "Whiteboard", "Video Conferencing"],
    status: "Booked",
    hourlyRate: "$40",
    dailyRate: "$280",
    monthlyRate: "N/A",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    name: "Hot Desk Zone",
    type: "Desk",
    capacity: 20,
    amenities: ["Wi-Fi", "Power Outlets", "Shared Printer"],
    status: "Available",
    hourlyRate: "$5",
    dailyRate: "$30",
    monthlyRate: "$450",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    name: "Creative Studio",
    type: "Office",
    capacity: 8,
    amenities: ["Wi-Fi", "Whiteboard", "Standing Desks", "Lounge Area"],
    status: "Available",
    hourlyRate: "$35",
    dailyRate: "$200",
    monthlyRate: "$3,500",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    name: "Quiet Pod 1",
    type: "Phone Booth",
    capacity: 1,
    amenities: ["Wi-Fi", "Power Outlet", "Soundproofing"],
    status: "Available",
    hourlyRate: "$10",
    dailyRate: "$60",
    monthlyRate: "N/A",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    name: "Boardroom",
    type: "Meeting Room",
    capacity: 16,
    amenities: ["Wi-Fi", "Projector", "Whiteboard", "Video Conferencing", "Catering Available"],
    status: "Maintenance",
    hourlyRate: "$50",
    dailyRate: "$350",
    monthlyRate: "N/A",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function SpacesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSpaces = spaces.filter(
    (space) =>
      space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      space.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Spaces</h1>
          <p className="text-muted-foreground">Manage your coworking spaces and resources</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Space
        </Button>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <TabsList className="mb-4 sm:mb-0">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search spaces..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TabsContent value="grid" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSpaces.map((space) => (
              <Card key={space.id}>
                <div className="relative">
                  <img
                    src={space.image || "/placeholder.svg"}
                    alt={space.name}
                    className="w-full h-[150px] object-cover rounded-t-lg"
                  />
                  <div
                    className={`absolute top-2 right-2 rounded-full px-2 py-1 text-xs font-semibold ${
                      space.status === "Available"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : space.status === "Booked"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                    }`}
                  >
                    {space.status}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{space.name}</CardTitle>
                      <CardDescription>{space.type}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit space</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View bookings</DropdownMenuItem>
                        <DropdownMenuItem>Set maintenance</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Capacity: {space.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Hourly: {space.hourlyRate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Daily: {space.dailyRate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span>Monthly: {space.monthlyRate}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      <Edit className="mr-2 h-4 w-4" />
                      Manage Space
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="py-3 px-4 text-left font-medium">Name</th>
                      <th className="py-3 px-4 text-left font-medium">Type</th>
                      <th className="py-3 px-4 text-left font-medium">Capacity</th>
                      <th className="py-3 px-4 text-left font-medium">Status</th>
                      <th className="py-3 px-4 text-left font-medium">Hourly Rate</th>
                      <th className="py-3 px-4 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSpaces.map((space) => (
                      <tr key={space.id} className="border-b">
                        <td className="py-3 px-4 font-medium">{space.name}</td>
                        <td className="py-3 px-4">{space.type}</td>
                        <td className="py-3 px-4">{space.capacity}</td>
                        <td className="py-3 px-4">
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              space.status === "Available"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : space.status === "Booked"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                            }`}
                          >
                            {space.status}
                          </div>
                        </td>
                        <td className="py-3 px-4">{space.hourlyRate}</td>
                        <td className="py-3 px-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit space</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View bookings</DropdownMenuItem>
                              <DropdownMenuItem>Set maintenance</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

