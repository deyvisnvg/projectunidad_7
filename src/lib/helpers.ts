import bcrypt from "bcryptjs";

export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10); //Genera un cifrado hash
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

export const matchPassword = async (password: string, savedPassword: string) => { //Esto es para el login
    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (error) {
        console.error(error)
    }
};
