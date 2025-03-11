import { Check, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubscriptionsPage() {
  const plans = [
    {
      name: "Basic",
      description: "Essential features for small coworking spaces",
      price: "$99",
      features: [
        "Up to 50 client accounts",
        "Basic booking system",
        "Email notifications",
        "Payment processing",
        "Basic reporting",
      ],
      popular: false,
    },
    {
      name: "Standard",
      description: "Advanced features for growing spaces",
      price: "$199",
      features: [
        "Up to 200 client accounts",
        "Advanced booking system",
        "SMS notifications",
        "Payment processing",
        "Advanced reporting",
        "Custom branding",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Premium",
      description: "Complete solution for large operations",
      price: "$299",
      features: [
        "Unlimited client accounts",
        "Enterprise booking system",
        "SMS & push notifications",
        "Payment processing",
        "Advanced reporting & analytics",
        "Custom branding",
        "API access",
        "Dedicated support",
        "Multi-location support",
      ],
      popular: false,
    },
  ]

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscription Plans</h1>
          <p className="text-muted-foreground">Manage your subscription plans for clients</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Custom Plan
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? "border-primary" : ""}>
            {plan.popular && (
              <div className="absolute right-4 top-4 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <ul className="grid gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Edit Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Active Client Subscriptions</CardTitle>
          <CardDescription>Overview of your clients' current subscription plans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-3">
              <div className="text-2xl font-bold">42</div>
              <p className="text-sm text-muted-foreground">Basic Plan</p>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-2xl font-bold">58</div>
              <p className="text-sm text-muted-foreground">Standard Plan</p>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-2xl font-bold">27</div>
              <p className="text-sm text-muted-foreground">Premium Plan</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

