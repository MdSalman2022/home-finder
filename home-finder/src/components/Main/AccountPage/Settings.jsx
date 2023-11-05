import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div className="container-sm mx-auto min-h-[80vh] space-y-5">
      <h1 className="text-3xl font-semibold text-start">Settings</h1>
      <p>Manage your team and preferences here.</p>

      <Tabs defaultValue="password" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-5 gap-1">
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="plan">Plan</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team members</CardTitle>
              <CardDescription>
                Add or remove team members here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between w-full">
                  <span>1. Team member 1</span>
                  <span className="text-sm underline cursor-pointer">
                    Remove
                  </span>
                </div>
                <div className="flex justify-between w-full">
                  <span>2. Team member 2</span>
                  <span className="text-sm underline cursor-pointer">
                    Remove
                  </span>
                </div>
                <div className="flex justify-between w-full">
                  <span>3. Team member 3</span>
                  <span className="text-sm underline cursor-pointer">
                    Remove
                  </span>
                </div>
                <div className="flex justify-between w-full">
                  <span>4. Team member 4</span>
                  <span className="text-sm underline cursor-pointer">
                    Remove
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save team</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="plan">
          <Card>
            <CardHeader>
              <CardTitle>Subscribed Plan</CardTitle>
              <CardDescription>
                Change your plan here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-col gap-2">
                <h2>Basic Plan (Free) </h2>
                <p>Features</p>
                <ul className="list-disc list-inside">
                  <li>2 property list</li>
                  <li>Add upto 3 image</li>
                  <li>Basic support</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Join Premium</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Payment method</CardTitle>
              <CardDescription>
                Change your payment method here. After saving, you'll be logged
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-col gap-3">
                <p>Name on card</p>
                <input type="text" name="name" className="input-box w-full" />

                <div className="flex gap-2">
                  <div className="flex flex-col">
                    <p>Card number</p>
                    <input
                      type="number"
                      name="card"
                      className="input-box w-80"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>CVV</p>
                    <input
                      type="number"
                      name="cvv"
                      className="input-box w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>Expiry</p>
                    <input
                      type="number"
                      name="date"
                      className="input-box w-full"
                    />
                  </div>
                </div>
                <p>Billing address</p>
                <input
                  type="text"
                  name="address"
                  className="input-box w-full"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Change your notification settings here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between space-x-2">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Push notifications
                  </label>
                  <Checkbox id="terms" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email notifications
                  </label>
                  <Checkbox id="terms" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Text notifications
                  </label>
                  <Checkbox id="terms" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
