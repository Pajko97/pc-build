const createUser = async (user: User): Promise<User> => {
    const newUser = new User(user);
    return await newUser.save();
}
const getUser = async (id: string): Promise<User> => {
    
}