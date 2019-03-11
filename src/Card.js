import React from 'react';

const Card = (props)=>{
	const {name, username, email, id} = props;
	return(
		<div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 ">
			<img alt='robots' src={`https://robohash.org/${id}`}/>
			<div>
				<h2> {name} </h2>
				<h3> {username} </h3>
				<h4> {email} </h4>
			</div>
		</div>

	);
}

export default Card