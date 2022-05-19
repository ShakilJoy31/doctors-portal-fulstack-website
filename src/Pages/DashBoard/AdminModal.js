import React from 'react';

const AdminModal = ({admin}) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-4xl text-green-500 flex justify-center">Congratulations! </h3>
                    <p class="py-4 flex justify-center text-xl">You're now a part of admin panel.</p>
                    <div class="modal-action flex justify-center">
                    <label for="my-modal-6" class="btn btn-outline btn-error">Thank You</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AdminModal;