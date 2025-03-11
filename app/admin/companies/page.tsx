"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus, Search } from "lucide-react"

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample company data
const companies = [
  {
    id: "1",
    name: "Acme Coworking",
    email: "admin@acmecoworking.com",
    locations: 3,
    status: "Active",
    plan: "Premium",
    clients: 127,
    joinedDate: "Jan 12, 2023",
  },
  {
    id: "2",
    name: "Startup Hub",
    email: "contact@startuphub.com",
    locations: 1,
    status: "Active",
    plan: "Basic",
    clients: 42,
    joinedDate: "Feb 3, 2023",
  },
  {
    id: "3",
    name: "Tech Space",
    email: "info@techspace.io",
    locations: 2,
    status: "Active",
    plan: "Standard",
    clients: 85,
    joinedDate: "Mar 15, 2023",
  },
  {
    id: "4",
    name: "Creative Loft",
    email: "hello@creativeloft.co",
    locations: 1,
    status: "Active",
    plan: "Premium",
    clients: 63,
    joinedDate: "Apr 22, 2023",
  },
  {
    id: "5",
    name: "Cowork Central",
    email: "support@coworkcentral.com",
    locations: 4,
    status: "Inactive",
    plan: "Basic",
    clients: 0,
    joinedDate: "May 5, 2023",
  },
  {
    id: "6",
    name: "Office Share",
    email: "contact@officeshare.net",
    locations: 2,
    status: "Active",
    plan: "Standard",
    clients: 74,
    joinedDate: "Jun 10, 2023",
  },
  {
    id: "7",
    name: "Desk Connect",
    email: "hello@deskconnect.co",
    locations: 1,
    status: "Active",
    plan: "Basic",
    clients: 31,
    joinedDate: "Jul 18, 2023",
  },
  {
    id: "8",
    name: "Workspace Pro",
    email: "admin@workspacepro.com",
    locations: 5,
    status: "Active",
    plan: "Premium",
    clients: 156,
    joinedDate: "Aug 24, 2023",
  },
]

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Companies</h1>
          <p className="text-muted-foreground">Manage coworking space companies using your platform</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Company
        </Button>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>All Companies</CardTitle>
            <CardDescription>You have {companies.length} total companies</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search companies..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Status
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Active</DropdownMenuItem>
                <DropdownMenuItem>Inactive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Plan
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Basic</DropdownMenuItem>
                <DropdownMenuItem>Standard</DropdownMenuItem>
                <DropdownMenuItem>Premium</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Button variant="ghost" className="p-0 hover:bg-transparent">
                      Company
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Locations</TableHead>
                  <TableHead>Clients</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompanies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.email}</TableCell>
                    <TableCell>{company.locations}</TableCell>
                    <TableCell>{company.clients}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          company.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {company.status}
                      </div>
                    </TableCell>
                    <TableCell>{company.plan}</TableCell>
                    <TableCell>{company.joinedDate}</TableCell>
                    <TableCell className="text-right">
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
                          <DropdownMenuItem>Edit company</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Login as company</DropdownMenuItem>
                          <DropdownMenuItem>Change plan</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

