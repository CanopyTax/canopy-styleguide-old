import {h} from 'preact';

export function determineDotWidth(props){
		let size = parseInt(props.dotSize);
		if(isNaN(size)){
			size = props.page ? 42 : 8;
		} 
		return size;
}

export function makeDots(props){
    let dots = [];
    for(let i= 0; i < 3; i++){
        dots.push(makeDot(props));
    }
    return dots;
}

export function makeDot(props){
    const size = determineDotWidth(props);
    return (
        <span style={
            {
                backgroundColor: props.color || '#e0e0e0',
                width: size,
                height: size,
                marginLeft: size,
            }
        } />
    )
}