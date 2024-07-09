document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.getElementById('addForm');
    const editForm = document.getElementById('editForm');
    const studentTable = document.querySelector('.studentTable');

    let students = [];
    let editIndex = -1;

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newStudent = {
            Name: addForm.StudentAddName.value,
            Age: addForm.StudentAddAge.value,
            Email: addForm.StudentAddEmail.value,
            Phoneno: addForm.StudentAddPhoneno.value,
            Address: addForm.StudentAddAddress.value,
        };
        students.push(newStudent);
        addForm.reset();
        renderTable();
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const updateStudent = {
            Name: editForm.StudentConfirmName.value,
            Age: editForm.StudentConfirmAge.value,
            Email: editForm.StudentConfirmEmail.value,
            Phoneno: editForm.StudentConfirmPhoneno.value,
            Address: editForm.StudentConfirmAddress.value,
        };
        students[editIndex] = updateStudent;
        editIndex = -1;
        editForm.reset();
        renderTable();
    });

    const renderTable = () => {
        const tableHTML = `
            <table border = "10px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${students.map((student, index) => `
                        <tr>
                            <td>${student.Name}</td>
                            <td>${student.Age}</td>
                            <td>${student.Email}</td>
                            <td>${student.Phoneno}</td>
                            <td>${student.Address}</td>
                            <td>
                                <button onclick='editStudent(${index})'>Edit</button>
                                <button onclick='deleteStudent(${index})'>Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        studentTable.innerHTML = tableHTML;
    };

    window.editStudent = (index) => {
        editIndex = index;
        const student = students[index];
        editForm.StudentConfirmName.value = student.Name;
        editForm.StudentConfirmAge.value = student.Age;
        editForm.StudentConfirmEmail.value = student.Email;
        editForm.StudentConfirmPhoneno.value = student.Phoneno;
        editForm.StudentConfirmAddress.value = student.Address;
    };

    window.deleteStudent = (index) => {
        students.splice(index, 1);
        renderTable();
    };
});
