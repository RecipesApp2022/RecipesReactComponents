import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import update from 'immutability-helper';
import ImgUploadInput from "./ImgeUploadInput";
import { useEffect } from "react";
import imgUrl from "../helpers/imgUrl";
import ImageCrudComponent from "./ImageCrudComponent";
import { useState } from "react";

const StepThree = ({ defaultImages }) => {

    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (defaultImages?.length > 0) {
            setIsUpdating(true);
        }
    }, [defaultImages])

    const handleAddImage = () => {
        setData((oldData) => {
            return {
                ...oldData,
                images: [...oldData?.images, null]
            }
        });
    }

    const handleArrayChange = (e, index, arrayName) => {
        var newArrayValues = [];
        if (e.target.name === 'images') {
            newArrayValues = update(data?.[arrayName], { [index]: { $set: e.target.files[0] } });
        } else {
            newArrayValues = update(data?.[arrayName], { [index]: { [e.target.name]: { $set: e.target.type === 'file' ? e.target.files[0] : e.target.value } } });
        }
        setData((oldData) => {
            return {
                ...oldData,
                [arrayName]: newArrayValues
            }
        });
    }

    const removeFromArray = (index, arrayName) => {

        data?.[arrayName]?.splice(index, 1);

        setData((oldData) => {
            return {
                ...oldData,
                [arrayName]: data?.[arrayName]
            }
        });
    }

    return (
        <div>
            <h1 className="text-center text-xl font-semibold">
                Images
            </h1>
            {
                isUpdating ?
                    <>
                        <ImageCrudComponent
                            title={`📸 Images`}
                            modelName={"plans"}
                            defaultImages={defaultImages?.map((image) => {
                                return {
                                    id: image?.id,
                                    path: imgUrl(image?.path)
                                }
                            })}
                            ownerId={data?.id}
                        />
                        <br /><br />
                        <div className="text-center space-x-8">
                            <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Back
                            </button>
                            <button onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Next
                            </button>
                        </div>
                    </>
                    :
                    <>
                        <br />
                        <div className="grid w-full md:grid-cols-3 items-center lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-10">
                            {
                                data?.images?.map((image, i) => {
                                    return (
                                        <div key={i} className="text-center space-y-4">
                                            {
                                                image ?
                                                    <ImgUploadInput
                                                        previewImage={URL.createObjectURL(image)}
                                                        className="h-44 w-44"
                                                        description="drag or click"
                                                        name="images"
                                                        change={(e) => { handleArrayChange(e, i, 'images') }}
                                                    />
                                                    :
                                                    <ImgUploadInput
                                                        previewImage={image?.path && imgUrl(image?.path)}
                                                        className="h-44 w-44"
                                                        description="drag or click"
                                                        name="images"
                                                        change={(e) => { handleArrayChange(e, i, 'images') }}
                                                    />
                                            }
                                            <button type="button" onClick={() => { removeFromArray(i, 'images') }}
                                                className="bg-red-500 rounded px-8 py-2 text-white"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )
                                })
                            }

                            <div className="text-center">
                                <button onClick={handleAddImage} className="bg-main px-8 py-2 rounded text-white">
                                    Add Image
                                </button>
                            </div>
                        </div>
                        <br /><br />
                        {
                            data?.images?.length < 1 || !data?.images?.[0] ?
                                <div className="text-center text-red-500 my-8">
                                    At least one image is needed
                                </div>
                                :
                                null
                        }
                        <div className="text-center space-x-8">
                            <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Back
                            </button>
                            <button disabled={data?.images?.length < 1 || !data?.images?.[0]} onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                                Next
                            </button>
                        </div>
                    </>
            }
        </div>
    )
}

export default StepThree;