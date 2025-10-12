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
import Link from "next/link";

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
          <CardHeader className="flex justify-between">
            <CardTitle>
              <h3 className="text-xl font-bold py-1">"{dog.kennelName}"</h3>
            </CardTitle>
            <Chip customClasses={modifyChip(dog.status)}>{dog.status}</Chip>
          </CardHeader>
          <CardContent className="flex justify-between gap-8">
            <div className="text-foreground text-lg">
              <p>
                {calculateAge(dog.dob)} years old, {dog.breed}
                <br />
                {dog.physicalDesc}
              </p>
              <br />
              <p>{dog.owners}</p>
              <br />
              <p>
                Registered Name: {dog.registeredName} {dog.titles}
              </p>
              <p>Parents: {dog.parents}</p>
              <br />
              <p className="text-base text-foreground mt-4">{dog.about}</p>
            </div>
            <img
              src={dog.profile}
              alt={dog.physicalDesc}
              className="h-full max-w-[300px] border-primary border-2 shadow rounded"
            />
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
          <Button asChild variant="link">
            <Link href="https://www.facebook.com/media/set/?set=a.107599764601568&type=3">
              Gallery
            </Link>
          </Button>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
