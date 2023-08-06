import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import UsersListItem from "./UsersListeItem";

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    };


    let content;

    if(isLoadingUsers){
        content =  <Skeleton times={6} className='h-10 w-full' />;
    }
    else if(loadingUsersError){
        content = <div>Error Fetching Data...</div>;
    }else{
        content = data.map((user) => {
            return <UsersListItem user={user} key={user.id}/>
        
        });
    }


    return (
        <div>
            <div className='flex flex-row justify-between items-center m-3'>
                <h1 className='m-2 text-xl'>Users</h1>

                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add User
                </Button>

                {creatingUserError && "Error creating user"}
            </div>
            {content}
        </div>
    );
}

export default UsersList;
