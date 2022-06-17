/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="10px"
        bg="#F4F6F8"
        _checked={{
          bg: "#FF7900",
          color: "#F4F6F8",
        }}
        padding="6px 16px"
      >
        {props.children}
      </Box>
    </Box>
  );
}

const ChallengeChannelRadio = () => {
  const channels = ["운동", "독서", "공부", "루틴", "자기계발"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "channel",
    defaultValue: "운동",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {channels.map((channelName) => {
        const radio = getRadioProps({ value: channelName });
        return (
          <RadioCard key={channelName} {...radio}>
            {channelName}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default ChallengeChannelRadio;
