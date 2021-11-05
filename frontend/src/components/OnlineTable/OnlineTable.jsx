import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ButtonDate from '../ButtonDate/ButtonDate';
import ModalOnlineTable from '../ModalOnlineTable/ModalOnlineTable'


function OnlineTable({ active, setActive, title}) {

  const [modalActive, setModalActive] = useState(false);
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');

  const doctorTable = useSelector(state => state.fetchReducer.doctorTable)
  const tableId = useSelector(state => state.tableReducer.tableId)
  
  const Styles = styled.div`
    padding: 1.5rem;

    table {
      border-collapse: collapse;
      border-radius: 1.5em;
      overflow: hidden;
  
  
      th,
      td {
        padding: 1em;
        background: #ddd;
        border-bottom: 2px solid white;
        border-left: 2px solid white; 
  
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
  const doctorsArr = doctorTable.Doctors.map((el, index) => ({ Header: el.Name, accessor: `doc${index}` }));
  const dataArr = [];
  const doctorsSlotsRowArr = [];
  
  // console.log("Test");
  // useEffect( async () => {
  //   // getdoctorTable();
  //   const response = await fetch('https://tomson-clinic.herokuapp.com/api/ident/gettimetable')
  //   const data = await response.json()
  //   dispatch({type:'FETCH_STATE', payload: data});
  //   const dates = {};
  //   data.Intervals.map((el) => {
  //   const currentIntervalDate = el.StartDateTime.slice(0, 10);
  //   if (!dates[currentIntervalDate]) {
  //     dates[currentIntervalDate] = currentIntervalDate.split('-').reverse().join('.');
  //     dispatch({type: 'CREATE_BUTTONS', payload: Object.values(dates)})
  //   }
  // });
  // }, []);



  // creating timestamps
  let startTime = moment('09:00', 'HH:mm');
  let endTime = moment('20:45', 'HH:mm');
  const timeStampsArr = [];
  while (startTime <= endTime) {
    timeStampsArr.push(new moment(startTime).format('HH:mm'));
    startTime.add(15, 'minutes');
  }

  
  // finding all dates in incoming json
  const dates = {};
  doctorTable.Intervals.map((el) => {
    const currentIntervalDate = el.StartDateTime.slice(0, 10);
    if (!dates[currentIntervalDate]) {
      dates[currentIntervalDate] = currentIntervalDate.split('-').reverse().join('.');
    }
  });

  // function for finding key in dates object by user-frendly date format: '05.11.2021' => '2021-11-05'

  const findDatesKey = function(userFrendlyDate) {
    return Object.keys(dates).find(key => dates[key] === userFrendlyDate)
  };
  
  // const tablejson = useSelector(state => state.fetchReducer.doctorTable)
  // console.log(tablejson)

  const currentDate = findDatesKey(tableId);

  // filling data array for table
  for (let i = 0; i <= 47; i += 1) {
    for (let j = 0; j <= doctorTable.Doctors.length; j += 1) {
      const currentDoctorSlot = doctorTable.Intervals.find((el) =>
        (el.DoctorId === doctorTable.Doctors[j]?.Id)
          && (el.StartDateTime.slice(0, 10) === currentDate)
          && (el.StartDateTime.slice(11, 16) === timeStampsArr[i])
      );
      if (currentDoctorSlot?.IsBusy) {
        doctorsSlotsRowArr.push({ [`doc${j}`]: currentDoctorSlot.LengthInMinutes })
      } else if (currentDoctorSlot?.IsBusy === undefined ) {
        doctorsSlotsRowArr.push({ [`doc${j}`]: '+' })
      } else {
        doctorsSlotsRowArr.push({ [`doc${j}`]: '-' })
      }
    } 
    doctorsSlotsRowArr.push({ timeslot: timeStampsArr[i] });
    const result = doctorsSlotsRowArr.reduce((acc, el) => ({ ...acc, ...el }), {});
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


const haveFreeSlotsObj = {};
const freeSlotsOnlyDataArr = dataArr.map((row) => {
  for (let key in row) {
    if ((!haveFreeSlotsObj[key]) && (row[key] === '-')) {
      haveFreeSlotsObj[key] = '-'
    }
  }
});

const freeDoctorsArr = doctorsArr.filter(el => haveFreeSlotsObj[el.accessor]);



  // creating table columns
  const columns = React.useMemo(() =>
    [
      {
        Header: 'Время',
        accessor: 'timeslot',
      }
      ,
      ...freeDoctorsArr
    ]
    , [freeDoctorsArr]
  )

  // passing data to the table 
  const data = React.useMemo(() =>
    dataArr
    , [dataArr]
  )

  // const buttons = useSelector(state => state.fetchReducer.buttons)

  return (

    <>
      {/* {
        buttons.length > 0 ? buttons.map(btn => <ButtonDate key={btn} date={btn}/> ) : ''
      } */}
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
            onClick: () => {cellInfo.value === "-" && setModalActive(true); setTime(cellInfo.row.allCells['0'].value); setDoctor(cellInfo.column.Header)
              // alert(Object.keys(cellInfo.column))
              // alert(cellInfo.value + " " + cellInfo.column.Header + " " + cellInfo.row.allCells['0'].value/*+ " " + cellInfo.column.parent.Header*/)
            
            },
            style: {
              backgroundColor: `${(cellInfo.value === '+') ? 'rgb(240, 19, 49)' : (cellInfo.column.Header !== 'Время') ? 'rgb(181 204 57)' : '#ddd'}`,
              cursor: `${(cellInfo.value === '+') ? 'rgb(240, 19, 49)' : (cellInfo.column.Header !== 'Время') ? 'pointer' : '#ddd'}`,
              color: `${(cellInfo.value === '+') ? 'rgb(240, 19, 49)' : (cellInfo.column.Header !== 'Время') ? 'rgb(181 204 57)' : 'black'}`,
            },
          })}
        />
      </Styles>
      {modalActive && (
        <ModalOnlineTable active={modalActive} setActive={setModalActive} time={time} doctor={doctor}/>
      )}
    </>
  );
}
export default OnlineTable;
