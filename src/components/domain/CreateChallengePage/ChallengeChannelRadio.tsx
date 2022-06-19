/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Box, HStack, Text, useRadio, useRadioGroup } from "@chakra-ui/react";

type ChallengeChannelRadioType = {
  onChangeValue?: any;
};

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
        padding="10px 20px"
        bg="#F4F6F8"
        _checked={{
          bg: "#FF7900",
          color: "#F4F6F8",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const ChallengeChannelRadio = ({
  onChangeValue,
}: ChallengeChannelRadioType) => {
  const channels = ["운동", "독서", "공부", "루틴", "자기계발"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "channel",
    defaultValue: "운동",
    onChange: onChangeValue ? onChangeValue : console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} spacing="20px">
      {channels.map((channelName) => {
        const radio = getRadioProps({ value: channelName });
        return (
          <RadioCard key={channelName} {...radio}>
            <Text fontSize="lg">{channelName}</Text>
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default ChallengeChannelRadio;
