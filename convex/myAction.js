"use node";
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";

export const ingest = action({
  args: {
    splitText:v.any(),
    fileId:v.string()
  },
  handler: async (ctx,args) => {
    await ConvexVectorStore.fromTexts(
      args.splitText, //array..
      { fileId: args.fileId }, //string..
      new GoogleGenerativeAIEmbeddings({
        apiKey:"AIzaSyCK8A6LW0QYamFGX3Gg4P5BOhZlbQ8cea0",
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );
    return 'Completed...'
  },
});


export const search = action({
  args: {
    query: v.string(),
    fileId:v.string()
  },
  handler: async (ctx, args) => {
    const vectorStore = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey:"AIzaSyCK8A6LW0QYamFGX3Gg4P5BOhZlbQ8cea0",
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }), { ctx });
//This query present the result of answer if want 1 answer then 1 if want 2 ans then 2
    const resultOne = await(await vectorStore.similaritySearch(args.query,1)).filter(q=>q.metadata.fileId==args.fileId);
    console.log(resultOne);
    //convert JSON object to string...
    return JSON.stringify(resultOne)
  },
});