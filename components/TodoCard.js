import { useState } from "react";

export default function TodoCard(props) {
  const {
    children,
    edit,
    handleAddEdit,
    edittedValue,
    setEdittedValue,
    todoKey,
    handleEditTodoInline,
    handleDelete,
  } = props;

  const [copied, setCopied] = useState(false);

  const handleChange = async (e) => {
    setEdittedValue(e.target.value);
    await handleEditTodoInline(e.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="p-2 relative sm:p-3 border flex items-stretch border-white border-solid ">
      <div className="flex-1 flex">
        {!(edit === todoKey) ? (
          <>{children}</>
        ) : (
          <input
            className="bg-inherit flex-1 text-white outline-none"
            value={edittedValue}
            onChange={handleChange}
            onBlur={handleChange}
          />
        )}
        {/* {children} */}
      </div>
      <div className="flex items-center">
        {copied ? (
          <i className="fa-solid fa-check px-4 duration-300" title="Copied"></i>
        ) : (
          <i
            onClick={handleCopy}
            className="fa-solid fa-copy px-4 duration-300 hover:scale-125 cursor-pointer"
            title="Copy"
          ></i>
        )}

        <i
          onClick={handleAddEdit(todoKey)}
          className="fa-solid fa-pencil px-2 duration-300 hover:scale-125 cursor-pointer"
        ></i>

        <i
          onClick={handleDelete(todoKey)}
          className="fa-solid fa-trash-can px-4 duration-300 hover:scale-125 cursor-pointer"
        ></i>
      </div>
    </div>
  );
}
