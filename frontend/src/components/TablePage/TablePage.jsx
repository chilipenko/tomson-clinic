import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OnlineTable from '../OnlineTable/OnlineTable';
import ButtonDate from '../ButtonDate/ButtonDate';
import styles from './TablePage.module.css';

function TablePage() {

  const dispatch = useDispatch()

  const buttons = useSelector(state => state.fetchReducer.buttons)
  const tableId = useSelector(state => state.tableReducer.tableId)
  
  console.log("Test");
  useEffect( async () => {
    // getIncomingJson();
    const response = await fetch('https://tomson-clinic.herokuapp.com/api/ident/gettimetable')
    const data = await response.json()
    dispatch({type:'FETCH_STATE', payload: data});
    const dates = {};
    data.Intervals.map((el) => {
    const currentIntervalDate = el.StartDateTime.slice(0, 10);
    if (!dates[currentIntervalDate]) {
      dates[currentIntervalDate] = currentIntervalDate.split('-').reverse().join('.');
    }
  });
  const datesArr = Object.values(dates).sort((a, b) => parseInt(a) - parseInt(b));
  dispatch({type: 'CREATE_BUTTONS', payload:datesArr});
  dispatch({type: 'FIRST_TABLE', payload: datesArr[0]});

  }, []);


  return (
    <div className={styles.content}>
      <div className={styles['btn-content']}>
        {
          buttons.length > 0 ? buttons.map(btn => <ButtonDate key={btn.id} id={btn.id} date={btn.name}/> ) : ''
        }
      </div>
      {
        tableId && <OnlineTable /> 
      }
    </div>
  )
}

export default TablePage
