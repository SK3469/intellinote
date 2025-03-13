import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

//check backend in next js 
// const pdfUrl = "https://mild-albatross-700.convex.cloud/api/storage/dd3c02e8-f743-406a-833f-412988275e15"
export async function GET(req) {
    //Getting pdfurl
    const reqUrl = req.url
    const { searchParams } = new URL(reqUrl);
    const pdfUrl = searchParams.get('pdfUrl')
    console.log("apiroute",pdfUrl)
    //Load the pdf file
    const res = await fetch(pdfUrl)
    const data = await res.blob();
    const loader = new WebPDFLoader(data);
    const docs = await loader.load()
    let pdfTextContent = '';
    docs.forEach(doc => {
        pdfTextContent = pdfTextContent + doc.pageContent + "";
    })
    //Split into small chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
    });
    const output = await textSplitter.createDocuments([pdfTextContent])
    //return into the  list of array 
    let splitterList = []
    output.forEach(
        doc => {
            splitterList.push(doc.pageContent)
        }
    )
    return NextResponse.json({ result: splitterList })
}