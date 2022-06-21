import { useAtom } from "jotai";
import pageTitleAtom from "@store/pageTitle";

const usePageTitle = (title: string) => {
  const [, setPageTitleAtom] = useAtom(pageTitleAtom);
  setPageTitleAtom(title);
};

export default usePageTitle;
