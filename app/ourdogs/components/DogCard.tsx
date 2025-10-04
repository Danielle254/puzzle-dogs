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

export default function DogCard({ dog }: { dog: DogDetailsType }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article>
      <Card>
        <CardHeader>
          <CardTitle>{dog.kennelName}</CardTitle>
          <CardDescription>
            {dog.registeredName} {dog.titles}
          </CardDescription>
          <Badge>{dog.status}</Badge>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <CardAction>See more..</CardAction>
        </CardFooter>
      </Card>
    </article>
  );
}
