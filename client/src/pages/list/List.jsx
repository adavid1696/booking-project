import './list.css'
import Header from '../../components/header/Header.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from 'react-date-range';

function List() {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination)
	const [date, setDate] = useState(location.state.date)
	const [options, setOptions] = useState(location.state.options)
	const [openDate, setOpenDate] = useState(false)
	

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						<div className="lsItem">
							<label htmlFor="">Destination</label>
							<input type="text" />
						</div>
						<div className="lsItem">
							<label htmlFor="">Check-in Date</label>
							<span onClick={() => setOpenDate((prev) => !prev)}>{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
						{openDate && <DateRange
              onChange={item => setDate([item.selection])}
              minDate={new Date()}
							ranges={date}
            />}
						</div>
					</div>
					<div className="listResult"></div>
				</div>
			</div>
		</div>
	)
}

export default List