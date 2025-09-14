import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Community() {
  const cardTitleStyling = "text-xl font-semibold text-primary mt-4";
  const cardContentStyling = "text-lg";

  return (
    <section className="max-w-[1000px] mx-auto py-12 px-4">
      <h2>Our Amazing Community</h2>
      <div className="gap-2 md:gap-8 pb-8 grid max-[450px]:grid-cols-1 grid-cols-2 md:grid-cols-3">
        <Card>
          <CardHeader>
            <img
              src="/images/community.jpg"
              alt="woman holds dog and ribbon"
              className="rounded-full"
            />
            <CardTitle>
              <h3 className={cardTitleStyling}>Person & Dog!</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={cardContentStyling}>
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
              <h3 className={cardTitleStyling}>Person & Dog!</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={cardContentStyling}>
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
              <h3 className={cardTitleStyling}>Person & Dog!</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={cardContentStyling}>
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
