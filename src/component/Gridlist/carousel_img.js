import React from 'react';
import './carousel.css';
import Pizza3 from '../../img/pizza1.jpg'
import Pizza4 from '../../img/pizza.jpg'
const imgUrls = [
     Pizza3,
     Pizza4,
     "https://cdn.pluscanvas.co.uk/c/1-0-0/1-636831321759700000/thumb/500x0/b88eccd7-667a-452b-91b8-9ded8c4baabb/pizza-pizza-canvas-print.jpg?&width=348&height=348",
     "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg",
];
export default class Carousel extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currentImageIndex: 0
		};
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel" style={{height:"100%",width:"100%"}}>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}
const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);
const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		
        backgroundPosition: 'center',
        width:"100%",
        height:"100%"
	};
	
	return (
		<div className="image-slide" id="container" style={styles}></div>
     
	);
}
