import { useEffect, useState } from "react"
import useAxios from "../hooks/useAxios";
import update from 'immutability-helper';
import ImgUploadInput from "./ImgeUploadInput";
import SystemInfo from "../util/SystemInfo";
import { useCreatePlan } from "../contexts/CreatePlanContext";

const ImageCrudComponent = ({ defaultImages, ownerId, title, modelName }) => {

    const { data, setData } = useCreatePlan();

    const [currentImages, setCurrentImages] = useState([]);

    const [{ loading: createLoading }, createImage] = useAxios({ url: `/${modelName}/${ownerId}/images`, method: 'POST' }, { manual: true, useCache: false });

    const [{ loading: deleteLoading }, deleteImage] = useAxios({ method: 'DELETE' }, { manual: true, useCache: false });

    useEffect(() => {
        setCurrentImages(defaultImages);
    }, [defaultImages]);

    const handleAddImage = () => {
        if (createLoading || deleteLoading) return;
        setCurrentImages((oldImages) => {
            return [...oldImages, null]
        });
    }

    const onImageChange = (e, i, image) => {
        if (createLoading || deleteLoading) return;
        const data = new FormData();
        data.append('image', e.target?.files[0], e.target?.files[0].name)
        createImage({ data }).then((res) => {
            const { path, id, ...rest } = res?.data;
            const imageCreated = {
                id,
                path: `${SystemInfo?.api}${path}`
            }
            var newArrayValues = update(currentImages, { [i]: { $set: imageCreated } });
            setCurrentImages(newArrayValues)
        })
    }

    const removeImage = (index, imageId) => {

        if (createLoading || deleteLoading) return;

        if (!imageId) {
            currentImages?.splice(index, 1);
            setCurrentImages([...currentImages])
            return;
        }

        deleteImage({ url: `/${modelName}/${ownerId}/images/${imageId}` })
            .then((resp) => {
                currentImages?.splice(index, 1);
                setCurrentImages([...currentImages]);
            })
    }

    return (
        <div className="w-full mb-4 pb-2" style={{ borderBottom: '1px solid' }}>
            <h3>
                {title}
            </h3>
            <div className="grid w-full md:grid-cols-3 items-center lg:grid-cols-5 grid-cols-2 gap-4">
                {
                    currentImages?.map((image, i) => {
                        return (
                            <div className="my-4 text-center m-auto w-full" key={i}>
                                <ImgUploadInput
                                    disabled={image?.id}
                                    previewImage={image?.path}
                                    description="drag or click"
                                    name="images"
                                    className="h-48"
                                    change={(e) => { onImageChange(e, i, image) }}
                                />
                                <button
                                    disabled={deleteLoading || createLoading}
                                    type="button" onClick={() => { removeImage(i, image?.id) }}
                                    className="bg-red-500 px-8 py-2 text-white rounded-xl mt-1"
                                >
                                    Remove
                                </button>
                            </div>
                        )
                    })
                }
                <div className="text-center">
                    <button disabled={createLoading || deleteLoading} onClick={handleAddImage} type="button" className="bg-main px-8 py-2 text-white rounded-xl">
                        Add Image
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageCrudComponent;