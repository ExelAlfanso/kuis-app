import { quizDatas } from "../datas/quizDatas";
import InputDropdown from "./InputDropdown";
interface CategoryInputDropdownProps {
  onChange?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const CategoryInputDropdown: React.FC<CategoryInputDropdownProps> = ({
  onChange,
}) => {
  const categories = quizDatas.map((data) => data.name);
  return (
    <InputDropdown
      values={categories}
      onChange={onChange}
      label="Category (optional)"
    />
  );
};
export default CategoryInputDropdown;
