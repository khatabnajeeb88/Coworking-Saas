'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Building2, CreditCard, DollarSign, Users } from "lucide-react"


export default function Dashboard() {
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/signin')
  }

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Acme Coworking!</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">112</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,389</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Spaces</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">3 currently occupied</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Overview of recent client activities</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              {
                client: "Jane Cooper",
                action: "Renewed subscription",
                date: "2 hours ago",
                plan: "Premium",
              },
              {
                client: "Wade Warren",
                action: "New client registration",
                date: "5 hours ago",
                plan: "Basic",
              },
              {
                client: "Esther Howard",
                action: "Changed subscription",
                date: "1 day ago",
                plan: "Standard to Premium",
              },
              {
                client: "Cameron Williamson",
                action: "Booked meeting room",
                date: "1 day ago",
                plan: "Premium",
              },
              {
                client: "Brooklyn Simmons",
                action: "Cancelled subscription",
                date: "2 days ago",
                plan: "Basic",
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{activity.client}</div>
                  <div className="text-sm text-muted-foreground">{activity.action}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-sm font-medium">{activity.plan}</div>
                  <div className="text-xs text-muted-foreground">{activity.date}</div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Activity
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Renewals</CardTitle>
            <CardDescription>Clients with subscriptions renewing soon</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              {
                client: "Robert Fox",
                plan: "Premium",
                date: "Tomorrow",
                amount: "$299",
              },
              {
                client: "Annette Black",
                plan: "Standard",
                date: "In 3 days",
                amount: "$199",
              },
              {
                client: "Jenny Wilson",
                plan: "Basic",
                date: "In 5 days",
                amount: "$99",
              },
              {
                client: "Darlene Robertson",
                plan: "Premium",
                date: "In 7 days",
                amount: "$299",
              },
            ].map((renewal, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{renewal.client}</div>
                  <div className="text-sm text-muted-foreground">{renewal.plan}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-sm font-medium">{renewal.amount}</div>
                  <div className="text-xs text-muted-foreground">{renewal.date}</div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Renewals
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

