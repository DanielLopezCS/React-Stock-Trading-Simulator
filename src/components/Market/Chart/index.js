import React from 'react';
import Chart from './Chart';

import { timeParse } from "d3-time-format";

//import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";





const parseDate = timeParse("%Y-%m-%d");

const parseJSON=(data)=>{
	

	const dates = Object.keys(data[0]['Time Series (Daily)']);
	
	const json = [];
	json.date=[];
	json.open=[];
	json.high =[];
	json.low =[];
	json.close=[];
	json.volume=[];
	
	for(const date of dates)
	{
		const row = {};
		
		row.date = parseDate(date);

		row.open = data[0]['Time Series (Daily)'][date]['1. open'];
		row.high  = data[0]['Time Series (Daily)'][date]['2. high'];
		row.low= data[0]['Time Series (Daily)'][date]['3. low'];
		row.close = data[0]['Time Series (Daily)'][date]['4. close'];
		row.volume = data[0]['Time Series (Daily)'][date]['5. volume'];
		json.push(row);
		
	


	}
	json.reverse();

	
	return  json;
}

 function getData(data) {
	return parseJSON(data);
}

export default class ChartComponent extends React.Component {


	componentDidMount() {
		
		this.setState({ data: 	getData(this.props.data) })
		
	}
	
	componentWillReceiveProps(nextProps){

		if(nextProps.data!==this.props.data )
		{
			alert('memes');
			//converting json into json array that react-stock-charts can understand
			const jsonInput = [];
			jsonInput.push(nextProps.data["data"]);
			this.setState({ data: 	getData(jsonInput)});
			
			}

	}

	render() {

		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}

}

