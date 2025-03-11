"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus, Search, Shield, User } from "lucide-react"

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

// Sample user data
const users = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@acmecoworking.com",
    company: "Acme Coworking",
    role: "Admin",
    status: "Active",
    lastLogin: "Today at 10:30 AM",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@startuphub.com",
    company: "Startup Hub",
    role: "Admin",
    status: "Active",
    lastLogin: "Yesterday at 3:45 PM",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@techspace.io",
    company: "Tech Space",
    role: "Admin",
    status: "Active",
    lastLogin: "2 days ago",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@creativeloft.co",
    company: "Creative Loft",
    role: "Staff",
    status: "Active",
    lastLogin: "3 days ago",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@coworkcentral.com",
    company: "Cowork Central",
    role: "Admin",
    status: "Inactive",
    lastLogin: "2 weeks ago",
  },
  {
    id: "6",
    name: "Jessica Taylor",
    email: "jessica@officeshare.net",
    company: "Office Share",
    role: "Staff",
    status: "Active",
    lastLogin: "Today at 9:15 AM",
  },
  {
    id: "7",
    name: "Robert Martinez",
    email: "robert@deskconnect.co",
    company: "Desk Connect",
    role: "Admin",
    status: "Active",
    lastLogin: "Yesterday at 11:20 AM",
  },
  {
    id: "8",
    name: "Jennifer Anderson",
    email: "jennifer@workspacepro.com",
    company: "Workspace Pro",
    role: "Admin",
    status: "Active",
    lastLogin: "Today at 8:45 AM",
  },
  {
    id: "9",
    name: "Admin User",
    email: "admin@coworkhub.com",
    company: "CoworkHub",
    role: "Super Admin",
    status: "Active",
    lastLogin: "Today at 7:30 AM",
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage all users across the platform</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>All Users</CardTitle>
            <CardDescription>You have {users.length} total users</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Role
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Super Admin</DropdownMenuItem>
                <DropdownMenuItem>Admin</DropdownMenuItem>
                <DropdownMenuItem>Staff</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.company}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {user.role === "Super Admin" && <Shield className="h-3 w-3 text-primary" />}
                        {user.role === "Admin" && <User className="h-3 w-3 text-blue-500" />}
                        <span>{user.role}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {user.status}
                      </div>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
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
                          <DropdownMenuItem>Edit user</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Reset password</DropdownMenuItem>
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

