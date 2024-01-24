import {
  Squares2X2Icon,
  TicketIcon,
  PuzzlePieceIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const navigationLinks = [
  {
    title: "Dashboard",
    icon: <Squares2X2Icon width={23} height={23} color="#34BFF1" />,
    slug: "/",
  },
  {
    title: "Perks",
    icon: <TicketIcon width={23} height={23} color="#34BFF1" />,
    slug: "/perks",
  },
  {
    title: "Addons",
    icon: <PuzzlePieceIcon width={23} height={23} color="#34BFF1" />,
    slug: "/addons",
  },
  {
    title: "FAQ",
    icon: <ChatBubbleLeftRightIcon width={23} height={23} color="#34BFF1" />,
    slug: "/faq",
  },
  {
    title: "Support",
    icon: <UserIcon width={23} height={23} color="#34BFF1" />,
    slug: "/support",
  },
];
