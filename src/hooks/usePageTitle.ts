import { useEffect } from "react";

import { useAtom } from "jotai";

import pageTitleAtom from "@/store/pageTitle";

const usePageTitle = (title: string) => {
  const [, setPageTitleAtom] = useAtom(pageTitleAtom);
  useEffect(() => {
    setPageTitleAtom(title);
  }, []);
};

export default usePageTitle;
