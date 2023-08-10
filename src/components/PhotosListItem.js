import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store/apis/photosApi";

function PhotosListItem({ photo }) {
    const [removePhoto] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    };

    return (
        <div className='relative m-2' onClick={handleRemovePhoto}>
            <img className='h-20 w-20' src={photo.url} alt='random pic' />
            <div className='absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80'>
                <GoTrash className='text-3xl' />
            </div>
        </div>
    );
}

export default PhotosListItem;
