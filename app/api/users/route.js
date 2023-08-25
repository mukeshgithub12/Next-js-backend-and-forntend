
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
export async function POST(request) {
    // fetch user detail from  request

    const { name, email, password, about, profileURL } = await request.json();

    console.log({ name, email, password, about, profileURL });

    // create user object with user model

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    });

    try {
        // save the object to  database
        user.password = bcrypt.hashSync(
            user.password,
            parseInt(process.env.BCRYPT_SALT)
        );

        console.log(user);
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
            status: 201,
        });
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "failed to create user !!",
                status: false,
            },
            {
                status: 500,
            }
        );
    }

    // const body = request.body;
    // console.log(body);
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextUrl.searchParams);

    // const jsonData = await request.json();

    // const textData = await request.text();

    // console.log(jsonData);

    // console.log(textData);

    // return NextResponse.json({
    //   message: "posting user data",
    // });
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