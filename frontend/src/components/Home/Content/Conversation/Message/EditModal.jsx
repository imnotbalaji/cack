import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../../../../store/editmodal";
import { Link } from "react-router-dom/cjs/react-router-dom";

const EditModal = ({showEditForm}) => {

    const dispatch = useDispatch();
    const editModal = useSelector(state=> state.editModal);

    if (!editModal) 
    return null; 

    const handleModalClose = (e) => {
        e.preventDefault();
        dispatch(closeEditModal())
    }

    const handleClick = (e) => {
        e.preventDefault();
        showEditForm(prev_state => true);
        dispatch(closeEditModal());
    }

    
    return (


        <div className ="edit-modal-background" onClick = {handleModalClose}>
              <div className = "edit-modal-child" onClick ={e => e.stopPropagation()}>
                
                <Link onClick ={handleClick}>Edit</Link>
                
                

            </div>
        </div>

    )



}
export default EditModal