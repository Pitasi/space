import { ClassAttributes, TextareaHTMLAttributes, forwardRef } from "react";
import { UploadResponse } from "~/app/files/route";

const placeholder = "![Uploading image...]()";

const isImage = (file: File): boolean => file.type.startsWith("image/");

const upload = async (file: File): Promise<UploadResponse> => {
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
  return data;
};

const insertImagePlaceholder = (textarea: HTMLTextAreaElement) => {
  const start = textarea.selectionStart;
  textarea.value =
    textarea.value.slice(0, start) +
    "\n" +
    placeholder +
    "\n" +
    textarea.value.slice(textarea.selectionEnd);
  textarea.selectionStart = start + placeholder.length + 2; // +2 for '\n's
  textarea.selectionEnd = textarea.selectionStart;
};

const replaceImagePlaceholder = (
  textarea: HTMLTextAreaElement,
  path: string
) => {
  textarea.value = textarea.value.replace(placeholder, `![image](${path})`);
};

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
    const imageFiles = [...items]
      .flatMap((item) => item.getAsFile() || [])
      .filter(isImage);
    const textarea = e.currentTarget;
    if (!isUploading && imageFiles.length > 0) {
      e.preventDefault();
      isUploading = true;

      for (const file of imageFiles) {
        insertImagePlaceholder(textarea);
        const { path } = await upload(file);
        replaceImagePlaceholder(textarea, path);
      }

      isUploading = false;
    }
  };
  return <textarea ref={ref} onPaste={onPaste} {...props} />;
}

export const EditorTextarea = forwardRef(_EditorTextarea);
