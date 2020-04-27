import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss";

/**
 * Day Calculator Component
 *  @author Suraj Kamdi 
 */
function DaysCalculator() {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [result, setResult] = useState(0);
    const [excludeSunday, isExcludeSunday] = useState(false);
    const [excludeSaturday, isExcludeSaturday] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    /**
     * Function for calculating Total Days.
     * @param {event} e 
     */
    function calculateTotalDays(e) {
        e.preventDefault();
        if (checkValidations()) {
            let totalDays = 0;

            if (fromDate !== "" && toDate !== "") {
                const SINGLE_DAY = 1000 * 60 * 60 * 24;
                const differences = Math.abs(fromDate - toDate);
                let total = Math.round(differences / SINGLE_DAY);
                let excludedSundays = totalWekendDays(0);
                let excludedSaturdays = totalWekendDays(6);

                if (excludeSunday && !excludeSaturday) {
                    totalDays = total - excludedSundays;
                    setResult(++totalDays);
                } else if (!excludeSunday && excludeSaturday) {
                    totalDays = total - excludedSaturdays;
                    setResult(++totalDays);
                } else if (excludeSunday && excludeSaturday) {
                    totalDays = total - excludedSundays - excludedSaturdays;
                    setResult(++totalDays);
                } else {
                    setResult(++total);
                }
            }
        }
    }

    /**
     * Getting Total WeekendDays according to day number.
     * @param {weekendDayNumber} dayNumber 
     */
    function totalWekendDays(dayNumber) {
        let weekendDayCount = 0;
        let currenDate = new Date(fromDate);

        if (currenDate.getDay() === dayNumber) {
            weekendDayCount = 1;
        }

        console.log("initial =" + weekendDayCount);
        while (currenDate < toDate) {
            currenDate.setDate(currenDate.getDate() + 1);
            if (currenDate.getDay() === dayNumber) {
                weekendDayCount++;
            }
        }
        return weekendDayCount;
    }

    /**
     * Form Validations.
     */
    function checkValidations() {
        if (fromDate === "" || toDate === "") {
            alert("Please select the Date Range...");
            return false;
        }
        return true;
    }

    return (
        <div className="container">
            <div className="heading-h1">
                <h1>Total Days Calculator</h1>
            </div>
            <div className="form-container">
                <div className="field-group">
                    <label className="field-label">From Date</label>
                    <br />
                    <DatePicker
                        className="input--field"
                        selected={fromDate}
                        dateFormat="dd-MMMM-yyyy"
                        onChange={date => setFromDate(date)} />
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="field-group">
                    <label className="field-label">To Date</label><br />
                    <DatePicker
                        className="input--field"
                        selected={toDate}
                        dateFormat="dd-MMMM-yyyy"
                        onChange={date => setToDate(date)} />
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="field-group checkbox--group">
                    <label className="field-label checkbox--field">
                        Exclude Sunday
                        <input
                            type="checkbox"
                            name="excludeSunday"
                            value="excludeSunday"
                            onChange={event => {
                                isExcludeSunday(event.target.checked);
                            }}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="field-label checkbox--field">
                        Exclude Saturday
                         <input
                            type="checkbox"
                            name="excludeSaturday"
                            value="excludeSaturday"
                            onChange={event => {
                                isExcludeSaturday(event.target.checked);
                            }}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <button
                    onClick={event => calculateTotalDays(event)}
                    type="button"
                    name="calculate"
                    className="calculate-btn">Calculate
                    </button>
                <div className="result--container">
                    <h2>{result === 0 ? '' : result + ' Days'}</h2>
                </div>
            </div>
        </div>
    );
}
export default DaysCalculator;