import { ArrowDown, ArrowUp, Building2, CreditCard, DollarSign, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalyticsPage() {
  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track your business performance and growth</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Data</Button>
          <Button variant="outline">Print Report</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="spaces">Spaces</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+20.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+5.2%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Space Utilization</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+2.5%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscription Renewals</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500 font-medium">-1.2%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Monthly revenue by subscription type</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Revenue Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Client Growth</CardTitle>
                <CardDescription>New clients over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Client Growth Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Space Utilization</CardTitle>
                <CardDescription>Utilization rates by space type</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Space Utilization Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clients" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Client Demographics</CardTitle>
                <CardDescription>Breakdown of client types</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Client Demographics Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Client Retention</CardTitle>
                <CardDescription>Client retention rates over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Client Retention Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Client Activity</CardTitle>
                <CardDescription>Client activity by time of day</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Client Activity Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Revenue by Plan</CardTitle>
                <CardDescription>Revenue breakdown by subscription plan</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Revenue by Plan Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Monthly Recurring Revenue</CardTitle>
                <CardDescription>MRR growth over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">MRR Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Forecast</CardTitle>
                <CardDescription>Projected revenue for next 12 months</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Revenue Forecast Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="spaces" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Space Utilization</CardTitle>
                <CardDescription>Utilization by space type</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Space Utilization Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Peak Usage Times</CardTitle>
                <CardDescription>Space usage by time of day</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Peak Usage Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Space Revenue</CardTitle>
                <CardDescription>Revenue generated by each space</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Space Revenue Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

