import { useEffect } from "react";

import pageTitleAtom from "@store/pageTitle";
import { useAtom } from "jotai";

const usePageTitle = (title: string) => {
  const [, setPageTitleAtom] = useAtom(pageTitleAtom);
  useEffect(() => {
    setPageTitleAtom(title);
  }, []);
};

export default usePageTitle;
