import { format, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ComponentProps } from "react";
import { MotionDiv } from "../motion-div";
import { Separator } from "../ui/separator";

type Props = ComponentProps<"ol"> & {
  startDate?: Date | null;
  endDate?: Date | null;
  index?: number;
};

export function TimeLineItem({
  index = 1,
  startDate,
  endDate,
  ...props
}: Props) {
  function formatDate(date: Date, isSameMonth: boolean) {
    return format(date, `${isSameMonth ? "dd" : ""} MMM 'de' yyyy`, {
      locale: ptBR,
    });
  }

  function formatDistanceFromStartAndEndDate(
    startDate: Date,
    endDate?: Date | null
  ) {
    return formatDistance(startDate, endDate || new Date(), { locale: ptBR });
  }

  return (
    <li className="flex flex-col max-w-2xl">
      <MotionDiv
        initial={{ x: index % 2 == 0 ? 25 : -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.6 }}
      >
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary" />

          <div className="flex items-center gap-3 text-sm text-muted-foreground italic">
            <div className="flex items-center gap-1">
              {!!startDate && !endDate && <span>Desde</span>}
              {!!startDate && (
                <span>
                  {formatDate(
                    startDate,
                    startDate.getMonth() === endDate?.getMonth()
                  )}
                </span>
              )}
              {!!startDate && !!endDate && <span>•</span>}
              {!!endDate && (
                <span>
                  {formatDate(
                    endDate,
                    startDate?.getMonth() === endDate.getMonth()
                  )}
                </span>
              )}
            </div>

            {!!startDate && (
              <Separator className="h-3" orientation="vertical" />
            )}

            {!!startDate && (
              <span>
                {formatDistanceFromStartAndEndDate(startDate, endDate)}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-3 p-3 mb-20">
          {props.children}
        </div>
      </MotionDiv>
    </li>
  );
}
