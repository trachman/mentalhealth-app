import logo from './images/boltlogo.png';

const Title = () => {
	return (
		<>
			<div className="TitleWrapper">
				<a href="https://boltbootcamps.com/" target="_blank" rel="noreferrer"><img src={logo} alt="BOLT Logo" className="Title"/></a>
				<div className="Description-Wrapper">
					<p className="message">A simple CRUD App to get you started!</p>
					<div id="DescriptionSlider"></div>
				</div>
			</div>
		</>
	);
}

export default Title;
