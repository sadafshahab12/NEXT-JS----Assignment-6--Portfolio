import { Badge } from "@/components/ui/badge";

interface TBadge {
  badge: string;
 
}
export function Badges({ badge  }: TBadge) {
  return <Badge className={`bg-[#1079ce] font-normal cursor-pointer`}>{badge}</Badge>;
}
