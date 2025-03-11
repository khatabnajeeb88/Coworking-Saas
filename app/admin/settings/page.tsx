"use client"

import { useState } from "react"
import { Bell, CreditCard, Database, Globe, Lock, Mail, Server, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function AdminSettingsPage() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Platform Settings</h1>
          <p className="text-muted-foreground">Configure global settings for the CoworkHub platform</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general">
            <Settings className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="system">
            <Server className="mr-2 h-4 w-4" />
            System
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
              <CardDescription>Configure general platform settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="CoworkHub" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="platform-url">Platform URL</Label>
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                    <Input id="platform-url" defaultValue="https://coworkhub.com" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <Input id="support-email" defaultValue="support@coworkhub.com" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="platform-description">Platform Description</Label>
                  <Textarea
                    id="platform-description"
                    defaultValue="CoworkHub is a B2B2B SaaS platform for coworking space management."
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium">Default Company Settings</h3>
                <p className="text-sm text-muted-foreground mb-4">Default settings for new companies</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="trial-period">Free Trial Period</Label>
                      <p className="text-sm text-muted-foreground">Enable free trial for new companies</p>
                    </div>
                    <Switch id="trial-period" defaultChecked />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="trial-days">Trial Days</Label>
                    <Input id="trial-days" type="number" defaultValue="14" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-approve">Auto-approve Companies</Label>
                      <p className="text-sm text-muted-foreground">Automatically approve new company registrations</p>
                    </div>
                    <Switch id="auto-approve" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure platform security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Authentication</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Require Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all admin users</p>
                    </div>
                    <Switch id="two-factor" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-complexity">Enhanced Password Requirements</Label>
                      <p className="text-sm text-muted-foreground">
                        Require complex passwords (min 12 chars, special chars, etc.)
                      </p>
                    </div>
                    <Switch id="password-complexity" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                    </div>
                    <Switch id="session-timeout" defaultChecked />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="timeout-minutes">Timeout (minutes)</Label>
                    <Input id="timeout-minutes" type="number" defaultValue="30" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Data Protection</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-encryption">Data Encryption</Label>
                      <p className="text-sm text-muted-foreground">Enable encryption for sensitive data</p>
                    </div>
                    <Switch id="data-encryption" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="audit-logging">Audit Logging</Label>
                      <p className="text-sm text-muted-foreground">Log all admin actions for audit purposes</p>
                    </div>
                    <Switch id="audit-logging" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ip-restriction">IP Restrictions</Label>
                      <p className="text-sm text-muted-foreground">Restrict admin access to specific IP addresses</p>
                    </div>
                    <Switch id="ip-restriction" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure technical platform settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Database</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Database Status</Label>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <p className="text-sm">Connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Database className="mr-2 h-4 w-4" />
                      Test Connection
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-backup">Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">Schedule regular database backups</p>
                    </div>
                    <Switch id="auto-backup" defaultChecked />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                    <select
                      id="backup-frequency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Maintenance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                      <p className="text-sm text-muted-foreground">Put the platform in maintenance mode</p>
                    </div>
                    <Switch id="maintenance-mode" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="maintenance-message">Maintenance Message</Label>
                    <Textarea
                      id="maintenance-message"
                      defaultValue="We're currently performing scheduled maintenance. Please check back soon."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="allow-admin-access">Allow Admin Access During Maintenance</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow admins to access the platform during maintenance
                      </p>
                    </div>
                    <Switch id="allow-admin-access" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">System Logs</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="log-level">Log Level</Label>
                      <p className="text-sm text-muted-foreground">Set the system logging level</p>
                    </div>
                    <select
                      id="log-level"
                      defaultValue="info"
                      className="flex h-10 w-40 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="error">Error</option>
                      <option value="warning">Warning</option>
                      <option value="info">Info</option>
                      <option value="debug">Debug</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="log-retention">Log Retention</Label>
                      <p className="text-sm text-muted-foreground">Number of days to keep logs</p>
                    </div>
                    <Input id="log-retention" type="number" defaultValue="30" className="w-40" />
                  </div>

                  <Button variant="outline">
                    <Server className="mr-2 h-4 w-4" />
                    View System Logs
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

