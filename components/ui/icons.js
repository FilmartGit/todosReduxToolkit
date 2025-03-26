import { RiChatSearchFill } from "react-icons/ri";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";

const Icons = {
    notFound: ({className})=>{
        return <RiChatSearchFill className={className} />
    },
    delete: ({className})=>{
        return <RiDeleteBin4Fill className={className} />
    },
    done: ({className})=>{
        return <MdOutlineDone className={className} />
    }
}

export default Icons;