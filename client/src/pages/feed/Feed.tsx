import {
  CornerDownLeft,
  MessageCircle,
  Mic,
  Paperclip,
  Speech,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Feed() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const item = {
      id: "001",
      name: title,
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      text: description,
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["meeting", "work", "important"],
    };

    console.log(item);

    items.push(item);
  };

  return (
    <div className="flex">
      <div>
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-lg border bg-background p-2 mr-4 focus-within:ring-1 focus-within:ring-ring"
        >
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>

          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg border-none focus-visible:ring-0"
            placeholder="Title"
          />
          <Textarea
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            className="border-none focus-visible:ring-0 resize-none"
            placeholder="Type your message here.."
          />

          <div className="flex items-center p-3 pt-0  mt-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Use Microphone</TooltipContent>
            </Tooltip>
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              New Post
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>

        <div className="h-screen mt-12">
          <div className="flex flex-col gap-2 pr-4 pt-0">
            {items.map((item) => (
              <button
                // key={item.id}
                className={cn(
                  "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all bg-white hover:bg-accent"
                )}
              >
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{item.name}</div>
                      {!item.read && (
                        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <div
                      className={cn("ml-auto text-xs text-muted-foreground")}
                    >
                      over a year ago
                    </div>
                  </div>
                  {/* <div className="text-xs font-medium">{item.subject}</div> */}
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground">
                  {item.text.substring(0, 300)}
                </div>
                <img src="https://placehold.co/1000x200" alt="Logo" />

                {item.labels.length ? (
                  <div className="flex items-center gap-2 mt-4">
                    {item.labels.map((label) => (
                      <Badge key={label}>work</Badge>
                    ))}
                  </div>
                ) : null}

                <div className="flex gap-2 mt-2">
                  <Button className="text-xs h-8" variant="outline">
                    <Star className="mr-2 h-4 w-4" /> Star (138)
                  </Button>
                  <Button className="text-xs h-8" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" /> Comments (36)
                  </Button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-3/4">
        <Card>
          <div className="flex items-center p-4">
            {/* <BellRing /> */}
            <div className="flex-1">
              <p className="text-sm font-medium">Suggested accounts</p>
              <p className="text-sm">Send notifications to device.</p>

              <div className="grid gap-8 mt-8">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <Button className="ml-auto" variant="secondary">
                    Secondary
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      jackson.lee@email.com
                    </p>
                  </div>
                  <Button className="ml-auto" variant="secondary">
                    Secondary
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                      isabella.nguyen@email.com
                    </p>
                  </div>
                  <Button className="ml-auto" variant="secondary">
                    Secondary
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      William Kim
                    </p>
                    <p className="text-sm text-muted-foreground">
                      will@email.com
                    </p>
                  </div>
                  <Button className="ml-auto" variant="secondary">
                    Secondary
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Sofia Davis
                    </p>
                    <p className="text-sm text-muted-foreground">
                      sofia.davis@email.com
                    </p>
                  </div>
                  <Button className="ml-auto" variant="secondary">
                    Secondary
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="mt-10">
          <div className="flex items-center p-4">
            {/* <BellRing /> */}
            <div className="flex-1">
              <p className="text-sm font-medium">Discover</p>
              <div>
                {items.map((item) => (
                  <div>
                    {item.labels.length ? (
                      <div className="flex gap-2 mt-4">
                        {item.labels.map((label) => (
                          <Badge key={label}>work</Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export const items = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "How to find apartments in Sweden?",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi everyone I am going to study in Helsingborg and i am looking for two room apartment in Helsingborg for one year with furniture. Thank your for message.",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Residency permit for doctoral studies in Sweden",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "Hello there, I am yet to apply for Resi­dence permit for doctoral studies, I am confused about what comprehensive health insurance policy is. Is it same as the travel insurance that available in India? if so can someone please suggest me a good insurance company?",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["work", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Student loans in Sweden",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "Hello, I'm Remy from Nigeria. I just got admitted to Mid Sweden University for my graduate studies. Please I need information on funding organisations that give out student loans or support international students coming to Sweden.",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["work", "important"],
  },
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "How to find apartments in Sweden?",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi everyone I am going to study in Helsingborg and i am looking for two room apartment in Helsingborg for one year with furniture. Thank your for message.",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Residency permit for doctoral studies in Sweden",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "Hello there, I am yet to apply for Resi­dence permit for doctoral studies, I am confused about what comprehensive health insurance policy is. Is it same as the travel insurance that available in India? if so can someone please suggest me a good insurance company?",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["work", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Student loans in Sweden",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "Hello, I'm Remy from Nigeria. I just got admitted to Mid Sweden University for my graduate studies. Please I need information on funding organisations that give out student loans or support international students coming to Sweden.",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["work", "important"],
  },
];
