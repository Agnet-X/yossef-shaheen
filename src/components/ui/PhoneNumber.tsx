import { cn, formatPhoneDisplay } from "@/lib/utils";

interface PhoneNumberProps {
  phone?: string;
  className?: string;
}

export function PhoneNumber({ phone, className }: PhoneNumberProps) {
  return (
    <span dir="ltr" className={cn("inline-block [unicode-bidi:embed]", className)}>
      {formatPhoneDisplay(phone ?? "+971556267779")}
    </span>
  );
}
