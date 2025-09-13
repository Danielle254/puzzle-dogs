import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Community() {
  return (
    <section className="max-w-[1000px] mx-auto py-12 px-4">
      <h2>Our Amazing Community</h2>
      <div className="flex gap-8 pb-8">
        <Card>
          <CardHeader>
            <img
              src="/images/community.jpg"
              alt="woman holds dog and ribbon"
              className="rounded-full"
            />
            <CardTitle>
              <h3 className="text-xl font-semibold text-primary mt-4">
                Person & Dog!
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              fun facts or special accomplishments of this team
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="/images/Kelli_Riggs.jpg"
              alt="woman holds dog and ribbon"
              className="rounded-full"
            />
            <CardTitle>
              <h3 className="text-xl font-semibold text-primary mt-4">
                Person & Dog!
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              fun facts or special accomplishments of this team
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="/images/Jaceil_Cora.jpg"
              alt="woman holds dog and ribbon"
              className="rounded-full"
            />
            <CardTitle>
              <h3 className="text-xl font-semibold text-primary mt-4">
                Person & Dog!
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              fun facts or special accomplishments of this team
            </p>
          </CardContent>
        </Card>
      </div>
      <Button asChild>
        <Link href="https://www.facebook.com/puzdog/">
          FOLLOW US ON FACEBOOK
        </Link>
      </Button>
    </section>
  );
}
