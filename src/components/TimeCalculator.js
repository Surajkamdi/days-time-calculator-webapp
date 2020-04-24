import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./timepicker.scss";

/**
 * Time Calculator Component
 *  @author Suraj Kamdi 
 */
function TimeCalculator() {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [result, setResult] = useState(0);

    /**
     * Calculate Total Time between two interval.
     * @param {Event} event 
     */
    function calculateTotalTime(event) {
        event.preventDefault();

        const totalTime = Math.abs(fromDate - toDate);
        let seconds = Math.floor((totalTime / 1000) % 60);
        let minutes = Math.floor((totalTime / (1000 * 60)) % 60);
        let hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);

        if (seconds === 59 || seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 59 || minutes === 60) {
            minutes = 0;
            hours++;
        }

        let secondsStatement = "";
        if (seconds !== 0) {
            secondsStatement = `${seconds} Sec`;
        }

        let minutesStatement = "";
        if (minutes !== 0) {
            minutesStatement = `${minutes} Min`;
        }

        let hoursStatement = "";
        if (hours !== 0) {
            hoursStatement = `${hours} Hrs`;
        }

        let resultStatement = `${hoursStatement} ${minutesStatement} ${secondsStatement}`;
        setResult(resultStatement);
    }

    return (
        <div className="container">
            <div className="heading-h1">
                <h1>Total Time Calculator</h1>
            </div>
            <div className="form-container">
                <div className="field-group">
                    <label className="field-label">From Time</label><br />
                    <DatePicker
                        className="input--field"
                        selected={fromDate}
                        onChange={date => setFromDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={5}
                        timeCaption="Time"
                        dateFormat="hh:mm aa"
                    />
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="field-group">
                    <label className="field-label">To Time</label><br />
                    <DatePicker
                        className="input--field"
                        selected={toDate}
                        onChange={date => setToDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={5}
                        timeCaption="Time"
                        dateFormat="hh:mm aa"
                    />
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <button
                    onClick={event => calculateTotalTime(event)}
                    type="button"
                    name="calculate"
                    className="calculate-btn">Calculate
                    </button>
                <div className="result--container">
                    <h2>{result === 0 ? '' : result}</h2>
                </div>
            </div>
        </div>
    );
}
export default TimeCalculator;