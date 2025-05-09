'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Profile() {
    return (
      <div className="flex flex-col md:flex-row gap-6 p-6 ">
        {/* Left Card */}
        <Card className="w-full md:w-1/3 flex flex-col items-center py-6 text-center h-[500px]">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold mb-4">
            MM
          </div>
          <h2 className="text-lg font-semibold">Manaumidal</h2>
          <Button className="mt-4">Edit profile</Button>
        </Card>
  
        {/* Right Card */}
        <Card className="w-full md:w-2/3 p-6">
          <h3 className="text-md font-medium mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Name</Label>
              <Input placeholder="manu" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Email</Label>
              <Input placeholder="manaumidal@gmail.com" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1"> Feedback</Label>
              <Textarea placeholder="...." />
            </div>
          </div>
        </Card>
      </div>
    )
  }