/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Input } from "@chakra-ui/react";
import { format } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type StartDateCalendarProps = {
  onChangeValue?: any;
};

const StartDateCalendar = ({ onChangeValue }: StartDateCalendarProps) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const newStartDate = String(format(startDate, "yyyy-MM-dd"));
    onChangeValue ? onChangeValue(newStartDate) : undefined;
  }, [startDate]);

  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
      dateFormat="yyyy년 MM월 dd일 (eee)"
      minDate={new Date()}
      showPopperArrow={false}
      customInput={
        <Input
          placeholder="시작일을 선택해주세요 \(*°▽°*)/"
          variant="outline"
          width="100%"
          size="lg"
          bg="#FFFFFF"
          border="2px solid"
          borderColor="#E2E8F0"
          _hover={{ bg: "#FFFFFF" }}
        />
      }
    />
  );
};

export default StartDateCalendar;
{
  /* <ChakraInput
  placeholder="시작일을 선택해주세요 \(*°▽°*)/"
  variant="outline"
  width="100%"
></ChakraInput> */
}