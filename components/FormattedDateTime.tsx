import React from "react";
import { cn, formatDateTime } from "@/lib/utils";

interface FormattedDateTimeProps {
  date?: string;
}

export const FormattedDateTime = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  return <p className={cn("body-1 text-light-100")}>{formatDateTime(date)}</p>;
};
export default FormattedDateTime;
