/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Box, HStack, Text, useRadio, useRadioGroup } from "@chakra-ui/react";

interface Props {
  onChangeValue: (newChannel: string) => void;
  channelList: string[];
}

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

const ChallengeChannelRadio = ({ onChangeValue, channelList }: Props) => {
  const channels = channelList;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "channel",
    defaultValue: channels[0],
    onChange: onChangeValue ? onChangeValue : console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} spacing="20px">
      {channels &&
        channels.map((channelName: any) => {
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
