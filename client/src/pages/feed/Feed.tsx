import {
  CornerDownLeft,
  MessageCircle,
  Mic,
  Paperclip,
  Star,
  EllipsisVertical,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

import { Card } from "../../components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Badge } from "../../components/ui/badge";
import { cn } from "../../lib/utils";
import { Input } from "../../components/ui/input";
import { useState, useEffect } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export default function Feed() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<any>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9090/api/posts", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();

    const item = {
      title: title,
      description: description,
    };

    if (file) {
      data.append("title", title);
      data.append("description", description);
      data.append("image", file[0]);
    }

    console.log(item);

    fetch(`http://localhost:9090/api/posts`, {
      method: "POST",
      body: data,
      headers: {
        // 'Content-Type': 'multipart/form-data'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setItems([...items, data]);
        setTitle("");
        setDescription("");
        setFile(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex">
      <div className="w-3/5">
        <form
          onSubmit={handleSubmit}
          className=" overflow-hidden rounded-lg border bg-background p-2 mr-4 focus-within:ring-1 focus-within:ring-ring"
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
            {/* <Tooltip>
              <TooltipTrigger asChild>
              */}

            <input
              type="file"
              accept=".jpeg, .png, .jpg"
              onChange={(e: any) => setFile(e.target.files)}
              className="text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700
              hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700"
            />

            {/* </TooltipTrigger>
              <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip> */}

            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              New Post
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>

        <div className="w-full h-screen mt-12">
          <div className="flex flex-col gap-2 pr-4 pt-0">
            {items.map((item: any) => (
              <div
                // key={item.id}
                className={cn(
                  "flex flex-col items-start gap-2 rounded-lg border px-8 py-8 text-left text-sm transition-all bg-white "
                )}
              >
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src="/avatars/01.png" alt="Avatar" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">
                        Olivia Martin
                      </p>
                      {/* <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p> */}

                      <div
                        className={cn("text-xs mb-auto text-muted-foreground")}
                      >
                        over a year ago
                      </div>
                    </div>

                    <button
                      className={cn("ml-auto text-xs text-muted-foreground")}
                    >
                      <EllipsisVertical className="mr-2 h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center mt-5">
                    {/* <div className="flex items-center gap-2">
                      <div className=" text-lg font-semibold">{item.title}</div>
                      {!item.title && (
                        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                      )}
                    </div> */}
                  </div>
                  {/* <div className="text-xs font-medium">{item.subject}</div> */}
                </div>
                <div className="line-clamp-2 mb-4 text-sm text-muted-foreground">
                  {item.description.substring(0, 300)}
                </div>
                <img className="rounded-lg" src={item.image} alt="Logo" />
                {/* <img src={URL.createObjectURL(item.image)} /> */}

                {/* {item.labels.length ? (
                  <div className="flex items-center gap-2 mt-4">
                    {item.labels.map((label) => (
                      <Badge key={label}>work</Badge>
                    ))}
                  </div>
                ) : null} */}

                <div className="flex gap-2 mt-2">
                  <Button className="text-xs h-8" variant="outline">
                    <Star className="mr-2 h-4 w-4" /> Star (138)
                  </Button>
                  <Button className="text-xs h-8" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" /> Comments (36)
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-2/5 ml-auto">
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
                  <div className="grid gap-1 ">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-xs text-muted-foreground">
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
                    <p className="text-xs text-muted-foreground">
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
                    <p className="text-xs text-muted-foreground">
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
                    <p className="text-xs text-muted-foreground">
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
                    <p className="text-xs text-muted-foreground">
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
        {/* <Card className="mt-10">
          <div className="flex items-center p-4">
            <div className="flex-1">
              <p className="text-sm font-medium">Discover</p>
              <div>
                {items.map(() => (
                  <div>
                    <div className="flex gap-2 mt-4">
                      <Badge>work</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card> */}
      </div>
    </div>
  );
}

// export const items = [
//   {
//     id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
//     name: "How to find apartments in Sweden?",
//     email: "williamsmith@example.com",
//     subject: "Meeting Tomorrow",
//     text: "Hi everyone I am going to study in Helsingborg and i am looking for two room apartment in Helsingborg for one year with furniture. Thank your for message.",
//     date: "2023-10-22T09:00:00",
//     read: true,
//     labels: ["meeting", "work", "important"],
//   },
//   {
//     id: "110e8400-e29b-11d4-a716-446655440000",
//     name: "Residency permit for doctoral studies in Sweden",
//     email: "alicesmith@example.com",
//     subject: "Re: Project Update",
//     text: "Hello there, I am yet to apply for Resi­dence permit for doctoral studies, I am confused about what comprehensive health insurance policy is. Is it same as the travel insurance that available in India? if so can someone please suggest me a good insurance company?",
//     date: "2023-10-22T10:30:00",
//     read: true,
//     labels: ["work", "important"],
//   },
//   {
//     id: "110e8400-e29b-11d4-a716-446655440000",
//     name: "Student loans in Sweden",
//     email: "alicesmith@example.com",
//     subject: "Re: Project Update",
//     text: "Hello, I'm Remy from Nigeria. I just got admitted to Mid Sweden University for my graduate studies. Please I need information on funding organisations that give out student loans or support international students coming to Sweden.",
//     date: "2023-10-22T10:30:00",
//     read: true,
//     labels: ["work", "important"],
//   },
//   {
//     id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
//     name: "How to find apartments in Sweden?",
//     email: "williamsmith@example.com",
//     subject: "Meeting Tomorrow",
//     text: "Hi everyone I am going to study in Helsingborg and i am looking for two room apartment in Helsingborg for one year with furniture. Thank your for message.",
//     date: "2023-10-22T09:00:00",
//     read: true,
//     labels: ["meeting", "work", "important"],
//   },
//   {
//     id: "110e8400-e29b-11d4-a716-446655440000",
//     name: "Residency permit for doctoral studies in Sweden",
//     email: "alicesmith@example.com",
//     subject: "Re: Project Update",
//     text: "Hello there, I am yet to apply for Resi­dence permit for doctoral studies, I am confused about what comprehensive health insurance policy is. Is it same as the travel insurance that available in India? if so can someone please suggest me a good insurance company?",
//     date: "2023-10-22T10:30:00",
//     read: true,
//     labels: ["work", "important"],
//   },
//   {
//     id: "110e8400-e29b-11d4-a716-446655440000",
//     name: "Student loans in Sweden",
//     email: "alicesmith@example.com",
//     subject: "Re: Project Update",
//     text: "Hello, I'm Remy from Nigeria. I just got admitted to Mid Sweden University for my graduate studies. Please I need information on funding organisations that give out student loans or support international students coming to Sweden.",
//     date: "2023-10-22T10:30:00",
//     read: true,
//     labels: ["work", "important"],
//   },
// ];
