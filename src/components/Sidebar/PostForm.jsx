import { useState } from "react";
import postService from "../../appwrite/databaseService/postService";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, deletePosts, addPosts } from "../../features/posts/posts";
import { useForm } from "react-hook-form";
import { LocationEditIcon, ContactIcon, ChevronDownIcon } from "lucide-react";
import { Toast } from "../index";

function PostForm() {
    const auth = useSelector((state) => state.auth.userData);
    const { register, handleSubmit } = useForm();
    const [count, setCount] = useState(0);
    const [states, setStates] = useState({
        isToast: false
    });

    return (
        <div className='w-full py-2'>
            {states.isToast && <Toast />}
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="w-full flex items-center gap-2">
                    <div className="rounded-full w-[10px] overflow-hidden"><img className="w-full" src="abc" alt="" /></div>
                    <p className="text-custom-white2 text-xs font-sans">{auth.$id}</p>
                </div>
                <div className="w-full">
                    <textarea
                        className="w-full h-40 border-none outline-none resize-none text-custom-white2"
                        maxLength={1000}
                        name="Caption"
                        id="caption"
                        onInput={(e) => {
                            if (count == e.target.maxLength) return;
                            setCount(e.target.value.length);
                        }}
                    ></textarea>
                    <div className="flex justify-end font-light">
                        <div className="text-xs text-gray-200 opacity-50">
                            <span>{count}</span>/<span>1000</span>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center py-2 px-1 rounded-sm">
                        <input className="border-none outline-none w-full text-neutral-200 text-sm" type="text" placeholder="Add location" />
                        <LocationEditIcon size={20} color="white" />
                    </div>
                    <div className="flex items-center py-2 px-1 rounded-sm">
                        <input
                            className="border-none outline-none w-full text-neutral-200 text-sm" type="text"
                            placeholder="Add collaborators" />
                        <ContactIcon size={20} color="white" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex justify-between items-center py-2 px-1 rounded-sm">
                        <p className="text-custom-white2 text-sm">Accessiblity</p>
                        <ChevronDownIcon
                            className="cursor-pointer"
                            size={20}
                            color="white"
                            onClick={() => {
                                setStates((prev) => ({ ...prev, isToast: true }));

                                setTimeout(() => {
                                    setStates((prev) => ({ ...prev, isToast: false }));
                                }, 2000);
                            }}

                        />
                    </div>
                    <div className="w-full flex justify-between items-center py-2 px-1 rounded-sm">
                        <p className="text-custom-white2 text-sm">Advanced Settings</p>
                        <ChevronDownIcon
                            className="cursor-pointer"
                            size={20} color="white"
                            onClick={() => {
                                setStates((prev) => ({ ...prev, isToast: true }));

                                setTimeout(() => {
                                    setStates((prev) => ({ ...prev, isToast: false }));
                                }, 2000);
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostForm;