import {NextResponse} from "next/server";

export  function  DELETE (request , { params }){
    const { userId } = params;
    console.log(`user Id: ${userId}`);
    return NextResponse.json({
        message: "Testing Delete"
    })
}