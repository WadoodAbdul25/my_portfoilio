"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { marked } from "marked";

marked.setOptions({ breaks: true });

export default function TiptapMessage({ content }: { content: string }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: marked(content) as string,
    editable: false,
    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor && !editor.isDestroyed) {
      editor.commands.setContent(marked(content) as string);
    }
  }, [content, editor]);

  return <EditorContent editor={editor} className="tiptap-message" />;
}
