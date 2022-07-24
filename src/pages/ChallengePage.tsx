import { useEffect, useState } from "react";

import { Circle, Flex } from "@chakra-ui/react";
import { add, differenceInDays, format } from "date-fns";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { Like } from "src/types";

import { fetchDeleteLikeByPostId, fetchPostLikeByPostId } from "@/api/like";
import { fetchPostNotification } from "@/api/notification";
import { fetchDeletePostByPostId, fetchPutPost } from "@/api/post";
import Icon from "@/base/Icon";
import CertificationButton from "@/domain/ChallengePage/CertificationButton";
import CertificationTable from "@/domain/ChallengePage/CertificationTable";
import ChallengeReward from "@/domain/ChallengePage/ChallengeReward";
import CheerUpButton from "@/domain/ChallengePage/CheerUpButton";
import CommentButton from "@/domain/ChallengePage/CommentButton";
import useGetChallenge from "@/hooks/quries/useGetChallenge";
import titleAtom from "@/store/pageTitle";
import userAtom from "@/store/user";

const ChallengePage = () => {
  const [myUser] = useAtom(userAtom);
  const [, setPageTitle] = useAtom(titleAtom);
  const navigate = useNavigate();
  const [isGuest, setIsGuest] = useState(true);
  const [isWorking, setIsWorking] = useState(true);
  const [challengeId, setChallengeId] = useState("");
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
  const { data: contents } = useGetChallenge(postId);

  useEffect(() => {
    if (contents?.status === 200) {
      const { author, title: Content, comments, likes } = contents.data;
      const {
        days,
        reward,
        startDate: date,
        challengeTitle,
      } = JSON.parse(Content);

      setPageTitle(challengeTitle);
      setChallengeId(contents.data._id);

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
  }, [contents]);

  useEffect(() => {
    setRestDay(30 - presentDay);
    setShow(true);
  }, [presentDay]);

  const validateGuest = (postUserId: string) => {
    if (myUser && myUser._id === postUserId) {
      setIsGuest(false);
      setIsWorking(false);
    }
  };
  const validateDate = (calculatedPresentDay: number) => {
    if (calculatedPresentDay < 0 || 29 < calculatedPresentDay)
      setIsWorking(true);
    if (calculatedPresentDay < 0) setPresentDay(0);
    if (29 < calculatedPresentDay) setPresentDay(30);
  };
  const checkIsCheered = (cheerUpList: Like[]) => {
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

  const setCheerUpYes = (cheerUpId: string) => {
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

  const challengeDelete = async (_id: string) => {
    const { data, status } = await fetchDeletePostByPostId(_id);
    status === 200 ? navigate("/my/profile") : alert("다시 시도바랍니다!");
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

  const onCheerUpNotificationEvent = async (cheerUpId: string) => {
    if (myUser._id === authorId) return;
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

    const { title } = contents.data;
    const newTitle = { ...JSON.parse(title), days: updatedDays };

    const updatedPost = {
      postId,
      title: JSON.stringify(newTitle),
      image: null as null,
      channelId,
    };

    const { status } = await fetchPutPost(updatedPost);
    status === 200 ? setDays(updatedDays) : console.log("다시 시도해주세요!");
  };

  const onDeleteChallengeEvent = () => {
    if (confirm("목표를 포기하시겠습니까?")) {
      void challengeDelete(challengeId);
    }
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
              <Flex
                onClick={() => {
                  void onCheerUpEvent();
                }}
              >
                <CheerUpButton
                  isCheered={isCheered}
                  count={cheerUpCount}
                ></CheerUpButton>
              </Flex>
            </Flex>
            {show && !isGuest && (
              <Circle
                position="relative"
                left={256}
                top={4}
                padding={1.5}
                _hover={{ cursor: "pointer" }}
                bg="#FFFFFF"
                boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                onClick={onDeleteChallengeEvent}
              >
                <Icon name="trash-2" size={32} color="#FF5A5A" />
              </Circle>
            )}
          </Flex>
        </>
      )}
      {show && !isWorking && (
        <Circle
          position="absolute"
          left="50%"
          transform="translate(-50%, 0%)"
          bottom="58px"
          zIndex={2}
          onClick={() => {
            void onCertificationEvent();
          }}
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
