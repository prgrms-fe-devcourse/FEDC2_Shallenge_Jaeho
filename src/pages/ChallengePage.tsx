/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";

import { Circle, Flex } from "@chakra-ui/react";
import { add, differenceInDays, format } from "date-fns";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { fetchDeleteLikeByPostId, fetchPostLikeByPostId } from "@/api/like";
import { fetchPostNotification } from "@/api/notification";
import { fetchPutPost } from "@/api/post";
import CertificationButton from "@/domain/ChallengePage/CertificationButton";
import CertificationTable from "@/domain/ChallengePage/CertificationTable";
import ChallengeReward from "@/domain/ChallengePage/ChallengeReward";
import CheerUpButton from "@/domain/ChallengePage/CheerUpButton";
import CommentButton from "@/domain/ChallengePage/CommentButton";
import useGetChallenge from "@/hooks/quries/useGetChallenge";
import usePageTitle from "@/hooks/usePageTitle";
import userAtom from "@/store/user";

const ChallengePage = () => {
  const [myUser] = useAtom(userAtom);
  usePageTitle("30일 챌린지 만들기");

  const navigate = useNavigate();
  const [isGuest, setIsGuest] = useState(true);
  const [reward, setReward] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const [cheerUpCount, setCheerUpCount] = useState(0);
  const [days, setDays] = useState(
    Array.from({ length: 30 }, (_, index) => ({
      day: index,
      isChecked: false,
    }))
  );
  const [startDate, setStartDate] = useState("");
  const [presentDay, setPresentDay] = useState(0);
  const [restDay, setRestDay] = useState(30);
  const [endDate, setEndDate] = useState("");
  const [isCheered, setIsCheered] = useState(false);
  const [cheerUpId, setCheerUpId] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [show, setShow] = useState(false);

  const [, , channelId, postId] = window.location.pathname.split("/");
  const { data: Contents } = useGetChallenge(postId);
  useEffect(() => {
    if (Contents?.status === 200) {
      const { author, title: Content, comments, likes } = Contents?.data;
      const { days, reward, startDate: date } = JSON.parse(Content);
      const calculatedPresentDay = differenceInDays(
        new Date(format(new Date(), "yyyy-MM-dd")),
        new Date(date)
      );
      setAuthorId(author._id);
      validateGuest(author._id);
      setReward(reward);
      setCommentCount(comments.length);
      setCheerUpCount(likes.length);
      checkIsCheered(likes);
      setDays(days);
      setStartDate(date);
      setPresentDay(calculatedPresentDay);
      validateDate(calculatedPresentDay);
      setEndDate(format(add(new Date(date), { days: 29 }), "yyyy-MM-dd"));
    }
  }, [Contents]);

  useEffect(() => {
    setRestDay(30 - presentDay);
    setShow(true);
  }, [presentDay]);

  const validateGuest = (postUserId) => {
    if (myUser && myUser._id === postUserId) setIsGuest(false);
  };
  const validateDate = (calculatedPresentDay: number) => {
    if (calculatedPresentDay < 0 || 29 < calculatedPresentDay) setIsGuest(true);
    if (calculatedPresentDay < 0) setPresentDay(0);
    if (29 < calculatedPresentDay) setPresentDay(30);
  };
  const checkIsCheered = (cheerUpList) => {
    const userCheerUp = cheerUpList.filter((cheerUpUser) => {
      return myUser && cheerUpUser.user === myUser._id;
    });
    if (userCheerUp.length === 0) {
      setIsCheered(false);
    } else {
      setIsCheered(true);
      setCheerUpId(userCheerUp[0]._id);
    }
  };

  const setCheerUpYes = (cheerUpId) => {
    setCheerUpCount(cheerUpCount + 1);
    setIsCheered(true);
    setCheerUpId(cheerUpId);
    void onCheerUpNotificationEvent(cheerUpId);
  };

  const setCheerUpNo = () => {
    setCheerUpCount(cheerUpCount - 1);
    setIsCheered(false);
    setCheerUpId("");
  };

  const checkUser = () => {
    return myUser === null || myUser === undefined ? false : true;
  };

  const onCheerUpEvent = async () => {
    if (checkUser()) {
      if (isCheered) {
        const { status } = await fetchDeleteLikeByPostId(cheerUpId);
        status === 200 ? setCheerUpNo() : alert("다시 시도바랍니다.");
      } else {
        const { data, status } = await fetchPostLikeByPostId(postId);
        status === 200 ? setCheerUpYes(data._id) : alert("다시 시도바랍니다.");
      }
    } else {
      alert("로그인 후 이용가능합니다!");
    }
  };

  const onCheerUpNotificationEvent = async (cheerUpId) => {
    const { status } = await fetchPostNotification({
      notificationType: "LIKE",
      notificationTypeId: cheerUpId,
      userId: authorId,
    });
    status === 200
      ? console.log("success like-notification")
      : console.log("fail like-notification");
  };

  const onCertificationEvent = async () => {
    const updatedDays = days.map((item) =>
      item.day === presentDay ? { ...item, isChecked: true } : item
    );

    const { title } = Contents?.data;
    const newTitle = { ...JSON.parse(title), days: updatedDays };

    const updatedPost = {
      postId,
      title: JSON.stringify(newTitle),
      image: null,
      channelId,
    };

    const { status } = await fetchPutPost(updatedPost);
    status === 200 ? setDays(updatedDays) : console.log("다시 시도해주세요!");
  };
  return (
    <>
      {show && (
        <>
          <Flex marginTop="16px">
            <ChallengeReward
              startDate={startDate}
              endDate={endDate}
              reward={reward}
              restDay={restDay}
            ></ChallengeReward>
          </Flex>
          <Flex
            margin="40px 45px"
            direction="column"
            alignItems="center"
            maxWidth="520px"
            w="100%"
            bg="#FFFFFF"
            borderRadius="15px"
          >
            <Flex margin="60px 90px">
              <CertificationTable>{days}</CertificationTable>
            </Flex>
            <Flex gap="160px" marginBottom="26px">
              <Flex
                onClick={() =>
                  navigate(`/challenges/${channelId}/${postId}/comment`)
                }
              >
                <CommentButton count={commentCount}></CommentButton>
              </Flex>
              <Flex onClick={onCheerUpEvent}>
                <CheerUpButton
                  isCheered={isCheered}
                  count={cheerUpCount}
                ></CheerUpButton>
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
      {show && !isGuest && (
        <Circle
          position="absolute"
          left="50%"
          transform="translate(-50%, 0%)"
          bottom="58px"
          zIndex={2}
          onClick={onCertificationEvent}
        >
          <CertificationButton
            isActive={!days[presentDay].isChecked}
          ></CertificationButton>
        </Circle>
      )}
    </>
  );
};

export default ChallengePage;
