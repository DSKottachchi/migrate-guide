import { Menu, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

const openFeedPage = () => {
  console.log("Hello world")

};

type CardProps = React.ComponentProps<typeof Card>

const Tile = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader className="p-0">
        <img src="https://placehold.co/600x400" alt="Logo" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center p-4">
          {/* <BellRing /> */}
          <div className="flex-1">
            <p className="text-sm font-medium">
              Sri Lankan's in Sweden
            </p>
            <p className="text-sm">
              Send notifications to device.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="space-x-4">
        <Button onClick={openFeedPage} className="w-full">
          <Eye className="mr-2 h-4 w-4" /> View
        </Button>

        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Tile;
