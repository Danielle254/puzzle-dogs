"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DogDetailsType } from "@/app/types/types";
import { Carousel } from "@/components/ui/carousel";
import { calculateAge } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Chip from "@/components/Chip";
import type { Status } from "@/app/types/types";

export default function DogCard({ dog }: { dog: DogDetailsType }) {
  function modifyChip(status: Status) {
    switch (status) {
      case "Active":
        return "bg-primary text-white";
      case "Upcoming":
        return "bg-primary/40 text-foreground";
      case "Outside":
        return "bg-blue-500 text-foreground";
      default:
        return "bg-primary text-white";
    }
  }

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
        <Card className={dog.status == "Active" ? "border-primary" : ""}>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>
                <h3 className="text-xl font-bold">"{dog.kennelName}"</h3>
              </CardTitle>
              <Chip customClasses={modifyChip(dog.status)}>{dog.status}</Chip>
            </div>
            <p className="text-lg text-muted-foreground">
              {calculateAge(dog.dob)} years old, {dog.breed} -{" "}
              {dog.physicalDesc}
            </p>
            <p>{dog.owners}</p>
            <img
              src={dog.profile}
              alt={dog.physicalDesc}
              className="h-[150px] w-[150px] border-primary border-2 shadow"
            />
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              {dog.registeredName} {dog.titles}
            </p>
            <p className="text-lg">{dog.parents}</p>
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
