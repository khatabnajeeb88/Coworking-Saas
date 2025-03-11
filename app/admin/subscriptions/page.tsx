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

// Sample subscription data
const subscriptions = [
  {
    id: "1",
    company: "Acme Coworking",
    plan: "Premium",
    status: "Active",
    amount: "$299",
    billingCycle: "Monthly",
    nextBilling: "Apr 15, 2023",
    startDate: "Jan 15, 2023",
  },
  {
    id: "2",
    company: "Startup Hub",
    plan: "Basic",
    status: "Active",
    amount: "$99",
    billingCycle: "Monthly",
    nextBilling: "Apr 3, 2023",
    startDate: "Feb 3, 2023",
  },
  {
    id: "3",
    company: "Tech Space",
    plan: "Standard",
    status: "Active",
    amount: "$199",
    billingCycle: "Monthly",
    nextBilling: "Apr 15, 2023",
    startDate: "Mar 15, 2023",
  },
  {
    id: "4",
    company: "Creative Loft",
    plan: "Premium",
    status: "Active",
    amount: "$299",
    billingCycle: "Monthly",
    nextBilling: "Apr 22, 2023",
    startDate: "Apr 22, 2022",
  },
  {
    id: "5",
    company: "Cowork Central",
    plan: "Basic",
    status: "Cancelled",
    amount: "$99",
    billingCycle: "Monthly",
    nextBilling: "N/A",
    startDate: "May 5, 2022",
  },
  {
    id: "6",
    company: "Office Share",
    plan: "Standard",
    status: "Active",
    amount: "$199",
    billingCycle: "Monthly",
    nextBilling: "Apr 10, 2023",
    startDate: "Jun 10, 2022",
  },
  {
    id: "7",
    company: "Desk Connect",
    plan: "Basic",
    status: "Active",
    amount: "$99",
    billingCycle: "Monthly",
    nextBilling: "Apr 18, 2023",
    startDate: "Jul 18, 2022",
  },
  {
    id: "8",
    company: "Workspace Pro",
    plan: "Premium",
    status: "Active",
    amount: "$3,588",
    billingCycle: "Annually",
    nextBilling: "Aug 24, 2023",
    startDate: "Aug 24, 2022",
  },
]

export default function SubscriptionsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSubscriptions = subscriptions.filter(
    (subscription) =>
      subscription.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subscription.plan.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
          <p className="text-muted-foreground">Manage company subscriptions and billing</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Subscription
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total MRR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,580</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4%</div>
            <p className="text-xs text-muted-foreground">-0.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Revenue Per Company</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$331</div>
            <p className="text-xs text-muted-foreground">+$12 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>All Subscriptions</CardTitle>
            <CardDescription>Manage company subscription plans</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search subscriptions..."
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
                <DropdownMenuItem>Cancelled</DropdownMenuItem>
                <DropdownMenuItem>Past Due</DropdownMenuItem>
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
                  <TableHead>Plan</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Billing Cycle</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Billing</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscriptions.map((subscription) => (
                  <TableRow key={subscription.id}>
                    <TableCell className="font-medium">{subscription.company}</TableCell>
                    <TableCell>{subscription.plan}</TableCell>
                    <TableCell>{subscription.amount}</TableCell>
                    <TableCell>{subscription.billingCycle}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          subscription.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : subscription.status === "Past Due"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {subscription.status}
                      </div>
                    </TableCell>
                    <TableCell>{subscription.nextBilling}</TableCell>
                    <TableCell>{subscription.startDate}</TableCell>
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
                          <DropdownMenuItem>Edit subscription</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Change plan</DropdownMenuItem>
                          <DropdownMenuItem>View invoices</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Cancel subscription</DropdownMenuItem>
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

