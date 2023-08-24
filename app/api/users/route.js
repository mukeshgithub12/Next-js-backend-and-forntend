
import {NextResponse} from "next/server";
import {connectDb} from "@/app/helper/db";
connectDb();
export  function GET(request) {
   const users =[
       {
           name: "Dev",
           course: "Mca",
           id: "525"
       },{
           name: "Nik",
           course: "MA",
           id: "25"
       },{
           name: "john",
           course: "BCA",
           id: "55"
       },
   ]
    return NextResponse.json(users);
}
export  function POST(request) {
    const body = request.body;
    console.log(body);
    console.log(request.method);
    return NextResponse.json({
        message: "posttin data",
    });
}
export  function DELETE(request) {
    console.log('Delete api called')
    return NextResponse.json(
        {
            message: "delete !!",
            status:true,
        },
        {status:201, statusText: "Hay change text"}

    )
}
export  function PUT(request) {}