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

// Sample client data
const clients = [
  {
    id: "1",
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    company: "Acme Inc.",
    status: "Active",
    plan: "Premium",
    joinedDate: "Jan 12, 2023",
  },
  {
    id: "2",
    name: "Wade Warren",
    email: "wade.warren@example.com",
    company: "Startup LLC",
    status: "Active",
    plan: "Basic",
    joinedDate: "Feb 3, 2023",
  },
  {
    id: "3",
    name: "Esther Howard",
    email: "esther.howard@example.com",
    company: "Tech Solutions",
    status: "Active",
    plan: "Standard",
    joinedDate: "Mar 15, 2023",
  },
  {
    id: "4",
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    company: "Design Studio",
    status: "Active",
    plan: "Premium",
    joinedDate: "Apr 22, 2023",
  },
  {
    id: "5",
    name: "Brooklyn Simmons",
    email: "brooklyn.simmons@example.com",
    company: "Marketing Pro",
    status: "Inactive",
    plan: "Basic",
    joinedDate: "May 5, 2023",
  },
  {
    id: "6",
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    company: "Consulting Group",
    status: "Active",
    plan: "Standard",
    joinedDate: "Jun 10, 2023",
  },
  {
    id: "7",
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    company: "Freelance Co.",
    status: "Active",
    plan: "Basic",
    joinedDate: "Jul 18, 2023",
  },
  {
    id: "8",
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    company: "Agency Inc.",
    status: "Active",
    plan: "Premium",
    joinedDate: "Aug 24, 2023",
  },
]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">Manage your client accounts and subscriptions</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>All Clients</CardTitle>
            <CardDescription>You have {clients.length} total clients</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search clients..."
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
                      Name
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.company}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          client.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {client.status}
                      </div>
                    </TableCell>
                    <TableCell>{client.plan}</TableCell>
                    <TableCell>{client.joinedDate}</TableCell>
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
                          <DropdownMenuItem>Edit client</DropdownMenuItem>
                          <DropdownMenuSeparator />
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

