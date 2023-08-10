import {
    useAddAlbumMutation,
    useFetchAlbumsQuery,
} from "../store/apis/albumsApi";
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        //user is passed so to bind user id with with newly created album.

        addAlbum(user);
    };

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className='w-full h-10' />;
    } else if (error) {
        content = <div>Error loading albums.</div>;
    } else {
        content = data.map((album) => {
            return <AlbumsListItem album={album} key={album.id} />;
        });
    }
    return (
        <div>
            <div className='m-2 flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
                <Button onClick={handleAddAlbum} loading={results.isLoading}>
                    + Add Album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    );
}

export default AlbumsList;
