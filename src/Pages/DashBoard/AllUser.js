import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from './../Shered/Loading';
import { useState } from 'react';
import AdminModal from './AdminModal';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const AllUser = () => {
    const [admin, setAdmin] = useState(false);
    let { data: users, isLoading, refetch } = useQuery('alluser', () => fetch('http://localhost:5000/alluser', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleMakeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('You are not an Admin'); 
                    setAdmin(false); 
                }
                else{
                    toast.success('Making Admin successful'); 
                    setAdmin(true); 
                }
                return res.json()
            })
            .then(data => {
                refetch();
            })
    }

    const handlAdmin = () => {
        return <div>
            
        </div>
    }


    const handleRemoveUser = (id) =>{
        fetch(`http://localhost:5000/deleteUser/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                refetch(); 
            }
        })
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Decision</th>
                        </tr>
                    </thead>
                    {
                        users?.map((singleUser, index) => <tbody>
                            <tr>
                                <th>{index + 1}</th>
                                <td>User name</td>
                                <td>{singleUser.email}</td>
                                <td>{singleUser?.role ? <label onClick={() => handlAdmin(singleUser?.email)} for="my-modal-6" class="btn btn-xs btn-outline btn-success modal-button">Admin</label> : <label onClick={() => handleMakeAdmin(singleUser?.email)} for="my-modal-6" class="btn btn-xs btn-outline btn-success modal-button">Make Admin</label>}</td>
                                <td><button onClick={()=>handleRemoveUser(singleUser?._id)} class="btn btn-outline btn-xs btn-error">Remove User</button></td>

                            </tr>
                        </tbody>)
                    }
                </table>
                {admin && <AdminModal></AdminModal>}
            </div>
        </div>
    );
};

export default AllUser;