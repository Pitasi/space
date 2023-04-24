import { ClassAttributes, TextareaHTMLAttributes, forwardRef } from "react";
import { UploadResponse } from "~/app/files/route";

const placeholder = "![Uploading image...]()";

const isPastingImage = (items: DataTransferItemList) =>
  Array.from(items).some((item) => item.type.startsWith("image/"));

type EditorTextareaProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLTextAreaElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

function _EditorTextarea(
  props: EditorTextareaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  let isUploading = false;
  const onPaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData.items;
    const textarea = e.currentTarget;
    if (!isUploading && items.length > 0 && isPastingImage(items)) {
      e.preventDefault();

      isUploading = true;
      const start = textarea.selectionStart;
      textarea.value =
        textarea.value.slice(0, start) +
        "\n" +
        placeholder +
        "\n" +
        textarea.value.slice(textarea.selectionEnd);
      textarea.selectionStart = start + placeholder.length;
      textarea.selectionEnd = textarea.selectionStart;

      const item = items[0] as DataTransferItem;
      const file = item.getAsFile();
      if (file) {
        const formdata = new FormData();
        formdata.append("file", file);
        const res = await fetch("/files", {
          method: "POST",
          body: formdata,
        });
        if (!res.ok) {
          throw new Error("Failed to upload image");
        }

        const data = (await res.json()) as UploadResponse;

        textarea.value = textarea.value.replace(
          placeholder,
          `![image](${data.path})`
        );

        isUploading = false;
      }
    }
  };
  return <textarea ref={ref} onPaste={onPaste} {...props} />;
}

export const EditorTextarea = forwardRef(_EditorTextarea);
