import React from "react";
import { Heading, Text, Flex } from "@chakra-ui/layout";
import InputLayout from "@layout/InputLayout";
import Card from "@base/Card";

const dummyData = [{}, {}, {}, {}, {}, {}, {}, {}];

const HomePage = () => {
  return (
    <InputLayout placeholder="@김땡땡">
      <>
        <Flex paddingTop="48px" justifyContent="space-between">
          <Heading size="xl">💪운동</Heading>
          <Text size="sm" color="#ff7900" alignSelf={"end"}>
            more{">"}
          </Text>
        </Flex>
        {dummyData.slice(0, 2).map((challange) => {
          return (
            <Card
              type="challange"
              heading="헬스장에서 30분 이상 운동"
              text="가지고 싶었던 운동화 구입"
              commentCount={12}
              cheerCount={23}
              margin="16px 0"
            ></Card>
          );
        })}
      </>
    </InputLayout>
  );
};

export default HomePage;
