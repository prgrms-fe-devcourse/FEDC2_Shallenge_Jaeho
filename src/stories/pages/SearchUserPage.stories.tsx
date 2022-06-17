import InputLayout from "@layout/InputLayout";
import SearchUserPage from "@pages/SearchUserPage";
export default {
  title: "Pages/SearchUserPage",
  compoenent: "SearchUserPage",
};

export const Default = () => {
  return (
    <InputLayout placeholder="@김땡땡">
      <SearchUserPage></SearchUserPage>
    </InputLayout>
  );
};
