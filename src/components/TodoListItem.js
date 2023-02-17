import { Chip, Button } from "@mui/material";
import classNames from "classnames";

export default function TodoListItem({
  onCompletedBtnClicked,
  todo,
  index,
  openDrawer
}) {
  return (
    <>
      <li key={todo.id} className="mt-6 sm:mt-10">
        <div className="flex gap-2">
          <Chip
            label={`번호 : ${todo.id}`}
            variant="outlined"
            className="!pt-1"
          />
          <Chip
            label={todo.performDate.substr(2, 14)}
            variant="outlined"
            color="primary"
            className="!pt-1"
          />
        </div>
        <div className="flex shadow mt-2 sm:mt-5 rounded-[20px]">
          <Button className="!rounded-[20px_0_0_20px] !items-start flex-shrink-0 w-[130px]"
            color="inherit"
            onClick={() => onCompletedBtnClicked(todo.id)}
          >
            <span
              className={classNames(
                "text-3xl",
                "flex items-center",
                "h-[50px]",
                {
                  "text-[color:var(--mui-color-primary-main)]": todo.completed,
                },
                { "text-[#dcdcdc]": !todo.completed }
              )}
            >
              <i className="fa-solid fa-check"></i>
            </span>
          </Button>
          <div className="flex-shrink-0 w-[2px] bg-[color:var(--mui-color-primary-main)] my-5 mr-6"></div>
          <div className="flex-grow whitespace-pre-wrap leading-relaxed hover:text-[color:var(--mui-color-primary-main)] my-5 flex items-center">
            {todo.content}
          </div>
          <Button
            onClick={() => openDrawer(todo.id)}
            className="!items-start flex-shrink-0 w-[130px] !rounded-[0_20px_20px_0]"
            color="inherit">
            <span className="text-xl 
                    text-[color:var(--mui-color-primary-main)] flex items-center h-[50px]">
              <i className="fa-solid fa-ellipsis"></i>
            </span>
          </Button>
        </div>
      </li>
    </>
  );
}