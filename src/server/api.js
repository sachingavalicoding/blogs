import { account } from "./appwrite";

export const createUser = ({ email, password, username, userid }) => {
    try {
        const user = account.create(userid, email, password, username);
        console.log(user);
    } catch (e) {
        console.log("Create User Error :: ", e)
    }
}
