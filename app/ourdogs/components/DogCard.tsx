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
            <div className="flex justify-between">
              <CardTitle>
                <h3 className="text-xl font-bold">
                  {dog.registeredName} {dog.titles}
                </h3>
              </CardTitle>
              <Badge className="float-right">{dog.status}</Badge>
            </div>
            <p className="text-lg text-muted-foreground">{dog.parents}</p>
            <img
              src={dog.profile}
              alt={dog.physicalDesc}
              className="h-[150px] w-[150px] border-primary border-2 shadow"
            />
            <CardDescription>
              <p className="text-lg">{`"${dog.kennelName}"`}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{dog.owners}</p>
            <p className="text-lg">
              {calculateAge(dog.dob)} years old, {dog.breed} -{" "}
              {dog.physicalDesc}
            </p>
            <br />
            <p>{dog.about}</p>
          </CardContent>
          <CardFooter className="flex gap-8">
            {dog.links.map((link) => (
              <Button
                variant="link"
                asChild
                key={link.path}
                className="m-0 p-0"
              >
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
