import connectToDatabase from '../../db';
import User from '../../model/User';
import bcrypt from 'bcrypt';

export const POST = async (request) => { // Exporter la fonction POST
    await connectToDatabase();  // Assurez-vous que la connexion à la base de données est asynchrone si nécessaire
    console.log("Successfully connected to the database");

    try {
        // Extraction des données du corps de la requête (requête asynchrone)
        const { name, email, password } = await request.json();
        console.log("User data: ", { name, email, password });

        // Vérifier si l'utilisateur existe déjà
        const userAlreadyExist = await User.findOne({ email });

        if (userAlreadyExist) {
            console.log("User already exists");
            return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
        }

        // Hacher le mot de passe
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashPassword });

        // Sauvegarder le nouvel utilisateur dans la base de données
        await newUser.save();
        console.log("User successfully registered");

        return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });

    } catch (error) {
        console.log("Error:", error);
        return new Response(JSON.stringify({ message: "An error occurred" }), { status: 500 });
    }
};
