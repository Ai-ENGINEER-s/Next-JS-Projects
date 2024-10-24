import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import connectionToDatabase from "@/utils/mongodb";

export async function post(request) {
    try {
        console.log("Starting user registration...");

        await connectionToDatabase();
        co 

        const { name, email, password } = await request.json();
        console.log("Received data:", { name, email });

        const userAlreadyExist = await User.findOne({ email });
        console.log("User already exists:", userAlreadyExist);

        if (userAlreadyExist) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed.");

        const newUser = new User({ name, email, password: hashPassword });
        await newUser.save();
        console.log("User registered:", newUser);

        return NextResponse.json({ message: "User Registered" }, { status: 201 });

    } catch (error) {
        console.error("Error occurred:", error); // Log the complete error for more detail
        return NextResponse.json({ error: "Error in Server", details: error.message }, { status: 500 });
    }
}
