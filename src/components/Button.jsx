import { storyblokEditable } from '@storyblok/react/rsc';

const Button = ({ blok }) => {
	return (
		<button className="button" {...storyblokEditable(blok)}>
			{blok.label}
		</button>
	);
};

export default Button;
