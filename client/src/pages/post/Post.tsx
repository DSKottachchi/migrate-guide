import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Post() {
  return (
    <div>
      <div className="font-semibold text-2xl">{item.name}</div>
      <div className="mt-1 text-xs text-muted-foreground">over a year ago</div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="text-sm/[17px]">{item.text}</div>
      <div className="font-semibold mt-12">2 Answers</div>

      <Card className="flex mt-4 bg-white p-4">
        <div className="text-center">
          <Button variant="outline" size="icon">
            <CircleChevronUp className="h-4 w-4" />
          </Button>
          8
          <Button variant="outline" size="icon">
            <CircleChevronDown className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="leading-6 ml-4 text-sm/[17px]">
          <div>
          <div className="flex items-center gap-4 mb-4">
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
                  {/* <Button className="ml-auto" variant="secondary">
                    Secondary
                  </Button> */}
                </div>
          </div>
          {item.subText}
        </div>
      </Card>

      {/* <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" /> */}

      <Card className="flex mt-4 bg-white p-4">
        <div className="text-center">
          <Button variant="outline" size="icon">
            <CircleChevronUp className="h-4 w-4" />
          </Button>
          8
          <Button variant="outline" size="icon">
            <CircleChevronDown className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="leading-6 ml-4 text-sm/[17px]">
          <div>
          <div className="flex items-center gap-4 mb-4">
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
                  {/* <Button className="ml-auto" variant="secondary">
                    Secondary
                  </Button> */}
                </div>
          </div>
          {item.subText}
        </div>
      </Card>

      <div className="font-semibold mt-12 mb-4">Your Answer</div>

      <Textarea
        className="resize-none"
        placeholder="Type your message here.."
      />
    </div>
  );
}

export const item = {
  id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
  name: "How to find apartments in Sweden?",
  email: "williamsmith@example.com",
  subject: "Meeting Tomorrow",
  text: "Hi everyone I am going to study in Helsingborg and i am looking for two room apartment in Helsingborg for one year with furniture. Thank your for message.",
  subText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  date: "2023-10-22T09:00:00",
  read: true,
  labels: ["meeting", "work", "important"],
};
