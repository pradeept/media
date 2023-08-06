import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store/store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    const header = (
        <>
            <Button loading={isLoading} onClick={handleClick} className='mr-3'>
                <GoTrash />
            </Button>
            {error && <div>Error Deleting User...</div>}
            {user.name}
        </>
    );

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    );
}

export default UsersListItem;
