"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DogDetailsType } from "@/app/types/types";
import { calculateAge } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Chip from "@/components/Chip";
import type { Status } from "@/app/types/types";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function DogCard({ dog }: { dog: DogDetailsType }) {
  function modifyChip(status: Status) {
    switch (status) {
      case "Active":
        return "bg-primary text-white";
      case "Upcoming":
        return "bg-primary/40 text-foreground";
      case "Other":
        return "bg-blue-300 text-foreground";
      default:
        return "bg-primary text-white";
    }
  }

  return (
    <>
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
            src={
              dog.profile
                ? dog.profile
                : "/images/profile/photo_placeholder.png"
            }
            alt={dog.physicalDesc}
            className="h-full max-w-[300px] border-primary border-2 shadow rounded"
          />
        </CardContent>
        <CardFooter>
          <div className="flex justify-between w-full">
            <div className="flex gap-8">
              {dog.links.map((link) => (
                <Button
                  variant="link"
                  asChild
                  key={link.path}
                  className="m-0 p-0"
                >
                  <Link href={link.path} target="_blank">
                    {link.name}
                    <ExternalLink aria-label="opens in new window" />
                  </Link>
                </Button>
              ))}
            </div>
            {dog.gallery && (
              <Button asChild variant="outline">
                <Link href={dog.gallery}>
                  PHOTO GALLERY
                  <ExternalLink
                    aria-label="opens in new window"
                    target="_blank"
                  />
                </Link>
              </Button>
            )}{" "}
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
