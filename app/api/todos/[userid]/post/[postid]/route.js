import {NextResponse} from "next/server";

export  function  GET (request , { params }){
    const { userId ,postId} = params;
    console.log(`user Id: ${userId}`);
    console.log(`user Id: ${postId}`);
    return NextResponse.json(params)
}