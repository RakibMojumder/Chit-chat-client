
import axios from "axios"

export const getUserFromDB = async (email) => {
    const data = await axios.get(`http://localhost:5000/register?email=${email}`);
    return data.data.user
};
