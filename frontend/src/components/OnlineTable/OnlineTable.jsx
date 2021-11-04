import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import moment from 'moment';


const incomingJson = { "Doctors": [{ "Id": 4, "Name": "Логунков Евгений Игоревич" }, { "Id": 5, "Name": "Шаповалова Анна Сергеевна" }, { "Id": 6, "Name": "Томсон Наталия Владимировна" }, { "Id": 8, "Name": "Шабанов Эльдар Шабанович" }, { "Id": 16, "Name": "Канунникова Ольга Николаевна" }, { "Id": 16784, "Name": "Краснов Николай Владимирович" }, { "Id": 17347, "Name": "Богатырев Даниил Михайлович" }, { "Id": 13536, "Name": "Леонова Елена Леонидовна" }, { "Id": 13556, "Name": "Дочия Татия Мерабовна" }, { "Id": 15819, "Name": "Петрова Анастасия Сергеевна" }, { "Id": 16491, "Name": "Галкина Мария Игоревна" }, { "Id": 16555, "Name": "Пономарёва Валерия Александровна" }, { "Id": 13245, "Name": "Логункова Ксения Вячеславовна" }, { "Id": 13809, "Name": "Калитовская Марьяна Степановна" }], "Branches": [{ "Id": 1, "Name": "Томсон" }], "Intervals": [{ "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T09:00:00+03:00", "LengthInMinutes": 180, "IsBusy": true }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T12:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T12:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T12:30:00+03:00", "LengthInMinutes": 360, "IsBusy": true }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T20:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-04T20:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-05T09:00:00+03:00", "LengthInMinutes": 360, "IsBusy": true }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-06T09:00:00+03:00", "LengthInMinutes": 585, "IsBusy": true }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-06T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 4, "BranchId": 1, "StartDateTime": "2021-11-06T19:00:00+03:00", "LengthInMinutes": 120, "IsBusy": true }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-04T10:00:00+03:00", "LengthInMinutes": 510, "IsBusy": true }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-04T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-04T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-04T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-04T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-04T19:30:00+03:00", "LengthInMinutes": 90, "IsBusy": true }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T09:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T09:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T09:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T09:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T10:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T10:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T10:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T10:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 5, "BranchId": 1, "StartDateTime": "2021-11-05T11:00:00+03:00", "LengthInMinutes": 240, "IsBusy": true }, { "DoctorId": 6, "BranchId": 1, "StartDateTime": "2021-11-05T15:00:00+03:00", "LengthInMinutes": 240, "IsBusy": true }, { "DoctorId": 8, "BranchId": 1, "StartDateTime": "2021-11-05T15:00:00+03:00", "LengthInMinutes": 360, "IsBusy": true }, { "DoctorId": 16, "BranchId": 1, "StartDateTime": "2021-11-06T09:00:00+03:00", "LengthInMinutes": 720, "IsBusy": true }, { "DoctorId": 13245, "BranchId": 1, "StartDateTime": "2021-11-05T09:00:00+03:00", "LengthInMinutes": 360, "IsBusy": true }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T15:00:00+03:00", "LengthInMinutes": 90, "IsBusy": true }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T16:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T16:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T17:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T17:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T17:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T17:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T18:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T18:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T20:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13536, "BranchId": 1, "StartDateTime": "2021-11-05T20:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13556, "BranchId": 1, "StartDateTime": "2021-11-04T15:00:00+03:00", "LengthInMinutes": 360, "IsBusy": true }, { "DoctorId": 13556, "BranchId": 1, "StartDateTime": "2021-11-05T09:00:00+03:00", "LengthInMinutes": 360, "IsBusy": true }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T09:00:00+03:00", "LengthInMinutes": 120, "IsBusy": true }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T11:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T11:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T11:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T11:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T12:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T12:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T12:30:00+03:00", "LengthInMinutes": 30, "IsBusy": true }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T13:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T13:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T13:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T13:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T14:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T14:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T14:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 13809, "BranchId": 1, "StartDateTime": "2021-11-04T14:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 15819, "BranchId": 1, "StartDateTime": "2021-11-06T11:00:00+03:00", "LengthInMinutes": 480, "IsBusy": true }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T15:00:00+03:00", "LengthInMinutes": 60, "IsBusy": true }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T16:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T16:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T16:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T16:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T17:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T17:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T17:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T17:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T18:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T18:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T20:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16491, "BranchId": 1, "StartDateTime": "2021-11-05T20:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T10:00:00+03:00", "LengthInMinutes": 540, "IsBusy": true }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T20:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16555, "BranchId": 1, "StartDateTime": "2021-11-06T20:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T09:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T09:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T09:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T09:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T10:00:00+03:00", "LengthInMinutes": 60, "IsBusy": true }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T11:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T11:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T11:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T11:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T12:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T12:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T12:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T12:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T13:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T13:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T13:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T13:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T14:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T14:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T14:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T14:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T15:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T15:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T15:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T15:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T16:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T16:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T16:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T16:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T17:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T17:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T17:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T17:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T18:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T18:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-04T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T09:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T09:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T09:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T09:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T10:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T10:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T10:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T10:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T11:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T11:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T11:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T11:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T12:00:00+03:00", "LengthInMinutes": 150, "IsBusy": true }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T14:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T14:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T15:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T15:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T15:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T15:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T16:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T16:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T16:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T16:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T17:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T17:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T17:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T17:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T18:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T18:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 16784, "BranchId": 1, "StartDateTime": "2021-11-05T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T09:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T09:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T09:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T09:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T10:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T10:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T10:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T10:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T11:00:00+03:00", "LengthInMinutes": 15, "IsBusy": true }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T11:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T11:30:00+03:00", "LengthInMinutes": 60, "IsBusy": true }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T12:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T12:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T13:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T13:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T13:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T13:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T14:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T14:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T14:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T14:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T15:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T15:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T15:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T15:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T16:00:00+03:00", "LengthInMinutes": 60, "IsBusy": true }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T17:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T17:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T17:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T17:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T18:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T18:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T20:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-04T20:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T10:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T10:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T10:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T10:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T11:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T11:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T11:30:00+03:00", "LengthInMinutes": 120, "IsBusy": true }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T13:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T13:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T14:00:00+03:00", "LengthInMinutes": 30, "IsBusy": true }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T14:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T14:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T15:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T15:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T15:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T15:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T16:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T16:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T16:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T16:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T17:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T17:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T17:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T17:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T18:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T18:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T18:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T18:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T19:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T19:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T19:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T19:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T20:00:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T20:15:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T20:30:00+03:00", "LengthInMinutes": 15, "IsBusy": false }, { "DoctorId": 17347, "BranchId": 1, "StartDateTime": "2021-11-06T20:45:00+03:00", "LengthInMinutes": 15, "IsBusy": false }] }

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
const doctorsArr = incomingJson.Doctors.map((el, index) => ({ Header: el.Name, accessor: `doc${index}` }));
const dataArr = [];
const doctorsSlotsRowArr = [];

function OnlineTable({ active, setActive, title }) {

  console.log("Test");
  useEffect(() => {
    // getIncomingJson();
    fetch('https://tomson-clinic.herokuapp.com/api/ident/gettimetable')
      .then(res => res.json())
      .then(console.log);
    // console.log("incomingJson", incomingJson);
  }, []);

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
  incomingJson.Intervals.map((el) => {
    const currentIntervalDate = el.StartDateTime.slice(0, 10);
    if (!dates[currentIntervalDate]) {
      dates[currentIntervalDate] = currentIntervalDate.split('-').reverse().join('.');
    }
  });

  // function for finding key in dates object by user-frendly date format: '05.11.2021' => '2021-11-05'
  const findDatesKey = function(userFrendlyDate) {
    return Object.keys(dates).find(key => dates[key] === userFrendlyDate)
  };
  
  const currentDate = findDatesKey('04.11.2021');

  // filling data array for table
  for (let i = 0; i <= 47; i += 1) {
    for (let j = 0; j <= incomingJson.Doctors.length; j += 1) {
      const currentDoctorSlot = incomingJson.Intervals.find((el) =>
        (el.DoctorId === incomingJson.Doctors[j]?.Id)
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
    , []
  )

  // passing data to the table 
  const data = React.useMemo(() =>
    dataArr
    , []
  )

  return (

    <>
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

    </>
  );
}
export default OnlineTable;
