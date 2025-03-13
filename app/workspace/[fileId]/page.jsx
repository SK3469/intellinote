'use client'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import TextEditor from "../_components/TextEditor"
import PdfViewer from "../_components/PdfViewer"
import {useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

const Workspace = () => {
  const { fileId } = useParams()
  const fileInfo= useQuery(api.fileStorage.GetFIleRecord ,{
    fileId:fileId
  })
  useEffect(()=>{
console.log(fileInfo)
  },[fileInfo])
  // const GetFileInfo = async () => {
  //   const result = await GetFileInfo({ fileId: fileId })
  // }
  return (
    <div className='md:h-screen overflow-scroll'>
      <div className='w-full '>
        <WorkspaceHeader fileName={fileInfo?.fileName}/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 h-[95vh] '>
        <div className='col-span-1 h-full'>
          <TextEditor fileId={fileId}/>
        </div>
        <div className='col-span-1 h-full'>
          <PdfViewer fileUrl={fileInfo?.fileUrl} />
        </div>

      </div>
    </div>
  )
}

export default Workspace