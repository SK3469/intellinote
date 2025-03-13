"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAction, useMutation } from 'convex/react'
import React, { useState } from 'react'
import { api } from '@/convex/_generated/api'
import { Loader2 } from 'lucide-react'
import uuid4 from "uuid4"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { toast } from 'sonner'

const UploadPdf = ({ children,isMaxFile }) => {
  const [file, setFIle] = useState()
  const [loading, setLoading] = useState(false)
  const [fileName, setFileNmae] = useState("")
  const [open, setOpen] = useState(false)
  const { user } = useUser()
  const embeddDocument = useAction(api.myAction.ingest)
  const addFileEntry = useMutation(api.fileStorage.addFileEntrytoDB);
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadurl);
  const getFileUrl = useMutation(api.fileStorage.getFileUrl);
  const onFileSelect = (event) => {
    setFIle(event.target.files[0])
  }
  const onUpload = async () => {
    setLoading(true)
    const postUrl = await generateUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    const fileId = uuid4()
    const fileUrl = await getFileUrl({storageId:storageId})
    // Step 3: Save the newly allocated storage id to the database
    const resp = await addFileEntry({
      fileId: fileId,
      storageId: storageId,
      fileName: fileName ?? "",
      fileUrl:fileUrl,
      createdBy: user?.primaryEmailAddress.emailAddress
    })
    // console.log('resp =>', resp)
    //APi call to fetch PDF processing data
    const apiResponse = await axios.get('api/pdf-loader?pdfUrl='+fileUrl);
    console.log(apiResponse.data.result)
    let embeddResult=await embeddDocument({
      splitText: apiResponse.data.result,
      fileId: fileId
    })
    setLoading(false)
    setOpen(false)
    toast('File uploaded sucessfully...')
  }
  return (
    <div className=''>
      <Dialog open={open}>
        <DialogTrigger asChild>
         <Button className='w-full' disabled={isMaxFile} onClick={()=>setOpen(true)}>+ Upload PDF File</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload PDF</DialogTitle>
            <DialogDescription>Upload PDF to extract text</DialogDescription>
          </DialogHeader>
          <div className='flex gap-4 flex-col'>
            <div className=' '>
              <Label className='text-gray-900 pl-2 text-sm'>Select file to upload*</Label>
              <Input
                type='file'
                accept='application/pdf'
                onChange={(event) => onFileSelect(event)}
              />
            </div>
            <div className=' '>
              <Label className='text-gray-900 pl-2 text-sm'>File Name*</Label>
              <Input
                placeholder='eg. sunil'
                onChange={(e) => setFileNmae(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button disabled={loading} onClick={onUpload}>
              {
                loading ? <><Loader2 className=' animate-spin w-4 h-4' /> please wait... </> : " Upload"
              }
            </Button>
          </DialogFooter>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default UploadPdf