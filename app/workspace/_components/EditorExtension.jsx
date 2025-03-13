import { api } from '@/convex/_generated/api';
import { useAction, useMutation, useQuery } from 'convex/react';
import { Bold, Italic, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';
import React from 'react';
import { chatSession } from '@/configs/AIModel';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';

export default function EditorExtension({ editor }) {
    const { fileId } = useParams();
    const searchAi = useAction(api.myAction.search);
    const saveNotes=  useMutation(api.notes.AddNote)
  
    const {user} = useUser()

    const onAiClick = async () => {
        toast("Processing...")
        let AiModelResult; // Declare variable at the start

        try {
            // Get selected text from editor
            const selectedText = editor.state.doc.textBetween(
                editor.state.selection.from,
                editor.state.selection.to,
                ''
            );
            console.log('Selected Text:', selectedText);

            if (!selectedText) {
                console.error("No text selected!");
                return;
            }

            // Fetch AI search result
            const result = await searchAi({
                query: selectedText,
                fileId: fileId
            });

            console.log("AI Search Result:", result);

            if (!result) {
                console.error("searchAi returned null or undefined!");
                return;
            }

            let UnformattedAns = [];
            try {
                UnformattedAns = typeof result === "string" ? JSON.parse(result) : result;
            } catch (error) {
                // console.error("Error parsing searchAi result:", error);
                return;
            }

            let ALlUnformattedAns = '';
            if (Array.isArray(UnformattedAns)) {
                UnformattedAns.forEach(item => {
                    ALlUnformattedAns += item.pageContent;
                });
            } else {
                // console.error("UnformattedAns is not an array:", UnformattedAns);
            }

            const PROMPT = `For question: ${selectedText} and with the given content as answer, 
            please give an appropriate answer in HTML format. The answer content is: ${ALlUnformattedAns}`;

            console.log("Generated Prompt:", PROMPT);

            if (!chatSession) {
                console.error("chatSession is undefined!");
                return;
            }

            // Send the prompt to AI model
            AiModelResult = await chatSession.sendMessage(PROMPT);
            console.log("AiModelResult:", AiModelResult);

            const responseText = await AiModelResult?.response?.text();
            console.log("AI Response:", responseText);
            const finalAnswer= AiModelResult?.response?.text().replace('```','').replace('html','')
            const AllText = editor.getHTML();
            editor.commands.setContent(AllText+'<p><strong>Answer:</strong>'+finalAnswer+'</p>')
            saveNotes({
                notes:editor.getHTML(),
                fileId:fileId,
                createdBy:user?.primaryEmailAddress.emailAddress
            })
        } catch (error) {
            console.error("Error in onAiClick:", error);
        }
    };

    return editor && (
        <div className='p-5 '>
            <div className="control-group">
                <div className="button-group flex gap-4">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'text-blue-500' : ''}
                    >
                        <Bold />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'text-blue-500' : ''}
                    >
                        <Italic />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'text-blue-500 ' : ''}
                    >
                        <span className='text-2xl'>H1</span>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'text-blue-500' : ''}
                    >
                        <span className='text-xl'>H2</span>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'text-blue-500' : ''}
                    >
                        H3
                    </button>
                    <button
                        onClick={onAiClick}
                        className={'hover:text-blue-500 hover:animate-pulse'}
                    >
                        <Sparkles />
                    </button>
                </div>
            </div>
        </div>
    );
}
