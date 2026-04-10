import { Phone, MessageCircle } from "lucide-react";

interface MobileStickyBarProps {
  phone?: string;
  messengerUrl?: string;
}

const MobileStickyBar = ({
  phone = "+1(800)555-0199",
  messengerUrl = "#",
}: MobileStickyBarProps) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t bg-background md:hidden">
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      <Phone className="h-4 w-4" /> Call Now
    </a>
    <div className="w-px bg-border" />
    <a
      href={messengerUrl}
      className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      <MessageCircle className="h-4 w-4" /> Message
    </a>
  </div>
);

export default MobileStickyBar;
