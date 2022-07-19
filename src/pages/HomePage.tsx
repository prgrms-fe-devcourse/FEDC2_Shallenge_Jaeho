import { Suspense } from "react";

import Loading from "@base/Loading";
import PostList from "@domain/HomePage/PostList";
import useGetChannelList from "@hooks/quries/useGetChannelList";

const HomePage = () => {
  const { data: channelList } = useGetChannelList();

  return (
    <Suspense fallback={<Loading />}>
      {channelList.map((channel) => (
        <PostList channel={channel} key={channel._id} />
      ))}
    </Suspense>
  );
};

export default HomePage;
