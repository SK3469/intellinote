import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorExtension from "@/app/workspace/_components/EditorExtension"
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";


const TextEditor = ({ fileId }) => {
    const notes = useQuery(api.notes.GetNotes, {
        fileId: fileId
    })
    // console.log('Getnote=>',GetNoteQuery)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Take your notes here'
            })
        ],
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-screen p-5'
            }
        },
        immediatelyRender: false // Prevents SSR hydration issues
    });
    useEffect(() => {
        editor && editor.commands.setContent(notes)
    }, [notes && editor])
   

    return (
        <div>
            <div className="">
                <EditorExtension editor={editor} />
            </div>

            <div className="overflow-scroll h-[80vh]">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default TextEditor