"use client";

import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DogDetailsType } from "@/app/types/types";
import { Carousel } from "@/components/ui/carousel";

export default function DogCard({ dog }: { dog: DogDetailsType }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Tabs defaultValue="about">
      <TabsList className="grid w-full lg:w-1/2 grid-cols-2">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="photos">Photos</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{`"${dog.kennelName}"`}</CardTitle>
            <CardDescription>
              {dog.registeredName} {dog.titles}
            </CardDescription>
            <Badge>{dog.status}</Badge>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <CardAction onClick={() => setShowDetails(true)}>
              See more..
            </CardAction>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="photos">
        <Carousel></Carousel>
      </TabsContent>
    </Tabs>
  );
}
