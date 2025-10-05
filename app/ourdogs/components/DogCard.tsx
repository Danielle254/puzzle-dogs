"use client";

import { useState } from "react";
import {
  Card,
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
import { calculateAge } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DogCard({ dog }: { dog: DogDetailsType }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Tabs defaultValue="about">
      <div className="flex justify-end">
        <TabsList>
          <TabsTrigger className="px-4 cursor-pointer" value="about">
            About
          </TabsTrigger>
          <TabsTrigger className="px-4 cursor-pointer" value="photos">
            Photos
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="about">
        <Card>
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle className="text-xl font-bold">{`"${dog.kennelName}"`}</CardTitle>
              <Badge>{dog.status}</Badge>
            </div>
            <CardDescription className="text-lg">
              <p>
                {dog.registeredName} {dog.titles}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{dog.parents}</p>
            <p className="text-lg">{dog.owners}</p>

            <p className="text-lg">
              {calculateAge(dog.dob)} years old, {dog.breed} -{" "}
              {dog.physicalDesc}
            </p>
            <br />
            <p>{dog.about}</p>
          </CardContent>
          <CardFooter className="flex gap-4">
            {dog.links.map((link) => (
              <Button variant="link" asChild key={link.path}>
                <a href={link.path}>{link.name}</a>
              </Button>
            ))}
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="photos">
        <Card>
          <Carousel></Carousel>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
