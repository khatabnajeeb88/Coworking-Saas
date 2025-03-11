import { ArrowDown, ArrowUp, Building2, CreditCard, DollarSign, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminAnalyticsPage() {
  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Platform Analytics</h1>
          <p className="text-muted-foreground">Track platform performance and growth</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Data</Button>
          <Button variant="outline">Print Report</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$152,890</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+12.5%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Companies</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+7.8%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">End Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,845</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+5.2%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4%</div>
                <p className="flex items-center text-xs text-muted-foreground">
                  <ArrowDown className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">-0.3%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Revenue Growth</CardTitle>
                <CardDescription>Monthly revenue over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Revenue Growth Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Company Growth</CardTitle>
                <CardDescription>New companies over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Company Growth Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Platform Usage</CardTitle>
                <CardDescription>Active users by time of day</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Platform Usage Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="companies" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Companies by Plan</CardTitle>
                <CardDescription>Distribution of companies by subscription plan</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Companies by Plan Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Company Retention</CardTitle>
                <CardDescription>Company retention rates over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Company Retention Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Company Activity</CardTitle>
                <CardDescription>Company activity metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Company Activity Chart</p>
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

        <TabsContent value="usage" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Feature Usage</CardTitle>
                <CardDescription>Most used platform features</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Feature Usage Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Peak Usage Times</CardTitle>
                <CardDescription>Platform usage by time of day</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Peak Usage Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Platform performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="h-full w-full rounded-md bg-muted/50 flex items-center justify-center">
                  <p className="text-muted-foreground">System Performance Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

