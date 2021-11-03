import React, { useEffect, useState } from 'react';
import styles from './ModalTable.module.css';
import styled from 'styled-components';
import { useTable } from 'react-table';
import moment from 'moment';



const incomingJson = {
  Doctors: [
    { Id: 4, Name: 'Логунков Евгений Игоревич' },
    { Id: 5, Name: 'Шаповалова Анна Сергеевна' },
    { Id: 8, Name: 'Шабанов Эльдар Шабанович' },
    { Id: 16, Name: 'Канунникова Ольга Николаевна' },
    { Id: 16784, Name: 'Краснов Николай Владимирович' },
    { Id: 13536, Name: 'Леонова Елена Леонидовна' },
    { Id: 13245, Name: 'Логункова Ксения Вячеславовна' },
    { Id: 13809, Name: 'Калитовская Марьяна Степановна' }
  ],
  Branches: [{ Id: 1, Name: 'Томсон' }],
  Intervals: [
    {
      DoctorId: 4,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 4,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 4,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:30:00+03:00',
      LengthInMinutes: 690,
      IsBusy: true
    },
    {
      DoctorId: 5,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:00:00+03:00',
      LengthInMinutes: 360,
      IsBusy: true
    },
    {
      DoctorId: 8,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:00:00+03:00',
      LengthInMinutes: 270,
      IsBusy: true
    },
    {
      DoctorId: 8,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 8,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16,
      BranchId: 1,
      StartDateTime: '2021-11-02T10:00:00+03:00',
      LengthInMinutes: 300,
      IsBusy: true
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:00:00+03:00',
      LengthInMinutes: 270,
      IsBusy: true
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13245,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:00:00+03:00',
      LengthInMinutes: 60,
      IsBusy: true
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T10:00:00+03:00',
      LengthInMinutes: 90,
      IsBusy: true
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T11:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T11:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13536,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T17:00:00+03:00',
      LengthInMinutes: 150,
      IsBusy: true
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T19:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T19:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 13809,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T09:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T10:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T10:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T10:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T10:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T11:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T11:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T11:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T11:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T12:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T13:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T14:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T15:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T16:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T17:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T17:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T17:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T17:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T18:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T18:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T18:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T18:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T19:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T19:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T19:30:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T19:45:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:00:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
    {
      DoctorId: 16784,
      BranchId: 1,
      StartDateTime: '2021-11-02T20:15:00+03:00',
      LengthInMinutes: 15,
      IsBusy: false
    },
  ]
};


const Styles = styled.div`
  padding: 1rem;

  .user {
    background-color: blue;
    color: white;
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Create a default prop getter
const defaultPropGetter = () => ({})

// Expose some prop getters for headers, rows and cells, or more if you want!
function Table({
  columns,
  data,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

return (
  <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              // Return an array of prop objects and react-table will merge them appropriately
              {...column.getHeaderProps([
                {
                  className: column.className,
                  style: column.style,
                },
                getColumnProps(column),
                getHeaderProps(column),
              ])}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          // Merge user row props in
          <tr {...row.getRowProps(getRowProps(row))}>
            {row.cells.map(cell => {
              return (
                <td
                  // Return an array of prop objects and react-table will merge them appropriately
                  {...cell.getCellProps([
                    {
                      className: cell.column.className,
                      style: cell.column.style,
                    },
                    getColumnProps(cell.column),
                    getCellProps(cell),
                  ])}
                >
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
)
}

// creating array for table columns
const doctorsArr1 = incomingJson.Doctors.map((el, index) => ({ Header: el.Name, accessor: `doc${index}` }));
const dataArr = [];
const doctorsSlotsRowArr = [];



function ModalTable({active, setActive, title}) {

  // const [incomingJson, setIncomingJson] = useState([]);
  console.log("Test");
  useEffect(() => {
    // getIncomingJson();
    fetch('https://tomson-clinic.herokuapp.com//api/ident/gettimetable', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(console.log);
    // console.log("incomingJson", incomingJson);
  }, []);

  const getIncomingJson = () => {
    fetch('https://tomson-clinic.herokuapp.com/api/website/timetable')
      .then(res => res.json())
      .then(console.log)
      // .then(data => setIncomingJson(data))
  };

  // creating table columns
  const columns = React.useMemo(() =>
    [
      {
        Header: 'Время',
        accessor: 'timeslot',
      }
      ,
      ...doctorsArr1
    ]
    , []
  )

  // creating timestamps
  let startTime = moment('09:00', 'HH:mm');
  let endTime = moment('20:45', 'HH:mm');

  const timeStampsArr = [];

  while (startTime <= endTime) {
    timeStampsArr.push(new moment(startTime).format('HH:mm'));
    startTime.add(15, 'minutes');
  }

  // filling data array for table
  for (let i = 0; i <= 47; i += 1) {
    for (let j = 0; j <= incomingJson.Doctors.length; j += 1) {
      const currentDoctorSlot = incomingJson.Intervals.find((el) =>
        (el.DoctorId === incomingJson.Doctors[j]?.Id) && (el.StartDateTime.slice(11, 16) === timeStampsArr[i])
      );
      currentDoctorSlot?.IsBusy ? doctorsSlotsRowArr.push({ [`doc${j}`]: currentDoctorSlot.LengthInMinutes }) : doctorsSlotsRowArr.push({ [`doc${j}`]: '-' });
    }

    doctorsSlotsRowArr.push({timeslot: timeStampsArr[i]});
    const result = doctorsSlotsRowArr.reduce((acc, el) => ({...acc, ...el}), {});
    dataArr.push(result);
    doctorsSlotsRowArr.length = 0;
  };

  dataArr.forEach((el, index) => {
    for (let key in el) {
      if (typeof el[key] === 'number') {
        const numberOfSlots = (el[key] / 15)
        for (let i = 0; i < numberOfSlots; i += 1) {
          dataArr[index + i][key] = '+'
        }
      }
    }
  });
  

  // passing data to the table 
  const data = React.useMemo(() =>
    dataArr
    , []
  )

  return (

    <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
      <div className={active ? `${styles['modal__content']} ${styles.active}` : `${styles['modal__content']}`} onClick={e => e.stopPropagation()}>
      
      <Styles>
      <Table
        columns={columns}
        data={data}
        getHeaderProps={column => ({
          // onClick: () => alert('Header!'),
        })}
        getColumnProps={column => ({
          // onClick: () => alert('Column!'),
        })}
        getRowProps={row => ({
          style: {
            background: row.index % 2 === 0 ? 'rgba(0,0,0,.1)' : 'white',
          },
        })}
        getCellProps={cellInfo => ({
          onClick: () => {
            // alert(Object.keys(cellInfo.column))
            alert(cellInfo.value + " " + cellInfo.column.Header + " " + cellInfo.row.allCells['0'].value/*+ " " + cellInfo.column.parent.Header*/)
          },
          style: {
            backgroundColor: `${(cellInfo.value === '+') ? 'red' : (cellInfo.column.Header !== 'Время') ? 'green' : 'white'}`,
            color: `${(cellInfo.value === '+') ? 'red' : (cellInfo.column.Header !== 'Время') ? 'green' : 'black'}`,
          },
        })}
      />
    </Styles>

      </div>

    </div>
  );
}
export default ModalTable
