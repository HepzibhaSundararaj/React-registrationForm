import { useCallback, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { HookForm } from "./HookForm";

const App = () => {
  //nested data is ok, see accessorKeys in ColumnDef below
  const [data, setData] = useState([
    {
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      email: "john.doe@gmail.com",
      mobile: "4590892345",
      category: "Student",
    },
    {
      name: {
        firstName: "Jane",
        lastName: "Denver",
      },
      email: "jane@yahoo.com",
      mobile: "9089767898",
      category: "Working Professional",
    },
    {
      name: {
        firstName: "Joe",
        lastName: "Doe",
      },
      email: "jane@yahoo.com",
      mobile: "9089767898",
      category: "Working Professional",
    },
    {
      name: {
        firstName: "Kevin",
        lastName: "Vandy",
      },
      email: "jane@yahoo.com",
      mobile: "9089767898",
      category: "Working Professional",
    },
    {
      name: {
        firstName: "Joshua",
        lastName: "Rolluffs",
      },
      email: "jane@yahoo.com",
      mobile: "9089767898",
      category: "Working Professional",
    },
  ]);
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email", //normal accessorKey
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "mobile",
        header: "Mobile",
        size: 150,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        size: 150,
      },
      { accessorKey: "skills", header: "Skills", size: 150 },
    ],
    []
  );
  console.log(data, "data");
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableGlobalFilter: true,
    enableClickToCopy: true,
    enableEditing: false,
    enableGrouping: false,
    enableResizing: false,
    enableRowDragging: false,
    enableTopToolbar: false,
    enableSorting: false,
    enableColumnActions: false,
    enablePagination: false,

    // enableTopToolbar: true,
    // renderTopToolbar: () => <div>Here it is toolbar</div>
    renderTopToolbarCustomActions: () => <div>Data</div>,
  });

  const handleCallbackForAddData = useCallback(
    (temp) => {
      setData([
        ...data,
        {
          name: {
            firstName: temp.firstName,
            lastName: temp.lastName,
          },
          email: temp.email,
          mobile: temp.mobileNumber,
          category: temp.category,
          gender: temp.gender,
          skills: temp.skills.toString(),
        },
      ]);
      // console.log({
      //   name: {
      //     firstName: temp.firstName,
      //     lastName: temp.lastName,
      //   },
      //   email: temp.email,
      //   mobile: temp.mobileNumber,
      //   category: temp.category,
      // })
    },
    [data, setData]
  );
  return (
    <>
      <HookForm callbackForAdd={handleCallbackForAddData} />
      <MaterialReactTable table={table} />;
    </>
  );
};

export default App;
