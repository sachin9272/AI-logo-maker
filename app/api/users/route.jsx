import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST (req){
    const {userEmail, userName} = await req.json();
    try {
        //If user already exist
        const docRef = doc(db,"users", userEmail);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return NextResponse.json(docSnap.data());
        }
        else{
            const data = {
                name: userName,
                email: userEmail,
                credits: 5
            }
            await setDoc(doc(db, "users", userEmail),{
                ...data
            })
            return NextResponse.json(data)
        }
    } catch (error) {
        return NextResponse.json({message:"Internal Server Error", success: false});
    }
}