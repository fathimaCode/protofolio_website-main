import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/user";


interface UserState {
    userList: User[];
    selectedUser: User | null;
    userCount:number;
}

const initialState: UserState = {
    userList: [],
    selectedUser: null,
    userCount:0 
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
       
        addUser: (state, action: PayloadAction<User>) => {
            
            const user: User = { ...action.payload };
            console.log(user)
            state.userList.push(user);
            state.userCount = state.userList.length
            console.log("userCount:"+state.userCount)
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state.userList = state.userList.map(user =>
                user.id === action.payload.id ? action.payload : user
            );
            state.userCount = state.userList.length
        },
        deleteUser: (state, action) => {
            console.log("line 37 :delete user"+action.payload.id)
            state.userList = state.userList.filter(user =>
                user.id !== action.payload.id
            );
            state.userCount = state.userList.length
        },
        setSelectedUser: (state, action: PayloadAction<User | null>) => {
            state.selectedUser = action.payload;
        }
    }
});

export const { addUser, deleteUser, updateUser, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;